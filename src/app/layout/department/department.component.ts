import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DepartmentdataService } from './departmentdata.service';
import { MessageService, ConfirmationService, Message } from 'primeng/api';
import { Department } from '../dashboard/department';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private modalService: NgbModal,
    private _data: DepartmentdataService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) { }
  updatedItem: number;
    title = "Department";
    msgs: Message[] = [];
    closeResult: string;
    selectedDepartmentOption: string;
    name: string;
    msg = "Are You Sure!";
    description: string;
    id: number;
    arrDept: Department[] = [];
    editId: number;
    editName: string;
    editDescription: string;
    item: string;
    loading: boolean = true;
    ngOnInit() {
    this.loading = true;
    this.getDept();
  }


  getDept() {
    this._data.getDepartment().subscribe((data: Department[]) => {
        this.arrDept = data;
        this.loading = false;

    });
}

  // Add modal
  openAdd(content, passedTitle) {
    this.selectedDepartmentOption = passedTitle;
    this.name = "";
    this.description = "";
    this.modalService.open(content);
}
    // Edit modal popup
    openEdit(content, passedTitle, i, arr) {
        console.log(arr.id);
        this.id = arr.id;
        this.selectedDepartmentOption = passedTitle;
        // console.log(i);
        this.name = this.arrDept[i].name;
        this.description = this.arrDept[i].description;
        // console.log('updating');
        this.updatedItem = i;

        this.modalService.open(content);
    }
     // delete
     onDeptDelete(id: number) {
        this._data.deleteDepartment(id).subscribe((data: any) => {
            this.messageService.add({severity:'success', summary: 'Success Message', detail:'Deleted Sucessfully'});
            // alert('successfully deleted');
            this.ngOnInit();
        });
    }
    onFormSubmit(f) {
        if (this.selectedDepartmentOption == "Add") {
            console.log(this.id);
            this._data.addDepartment(f.value).subscribe((data: any) => {
                console.log(f.value);
                this.messageService.add({severity:'success', summary: 'Success Message', detail:'Added Sucessfully'});
                this.getDept();
            });
        } else {
            console.log(f.value);
            console.log(f.value.name);
            var req = {
                id: this.id,
                description: f.value.Description,
                name: f.value.Name
            };
            console.log(req);
            this._data.editDepartment(req).then(
                res => {
                    if (res) {
                        this.messageService.add({severity:'success', summary: 'Success Message', detail:'Updated Sucessfully'});

                        this.getDept();
                    } else {

                    }
                },
                error => { }
            );
        }

        this.modalService.dismissAll();
    }

    confirmDelete(id: number) {
        console.log(id);
        this.confirmationService.confirm({
            message: "Are you sure that you want to proceed?",
            header: "Confirmation",
            icon: "pi pi-exclamation-triangle",
            accept: () => {
                this.onDeptDelete(id);
            },
            reject: () => {
            }
        });
    }
}

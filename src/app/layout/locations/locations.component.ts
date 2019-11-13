import { Component, OnInit } from '@angular/core';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { HttpClient } from "@angular/common/http";
import { Message } from 'primeng/components/common/api';
import { MessageService } from 'primeng/components/common/messageservice';

import { ConfirmationService } from "primeng/api";
import { Locations } from './locations';
import { LocationsdataService } from './locationsdata.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit {

    constructor(
        private http: HttpClient,
        private modalService: NgbModal,
        private _data: LocationsdataService,
        private messageService: MessageService,
        private confirmationService: ConfirmationService
    ) {}
    updatedItem: number;
    title = "Locations";
    msgs: Message[] = [];
    closeResult: string;
    selectedLocationOption: string;
    arrLoc: Locations[] = [];
    id: number;
    name: string;
    msg = "Are You Sure!";
    description: string;
    address1: string;
    address2: string;
    city: string;
    state: string;
    zip: string;
    country: string;
    website: string;
    phone1: string;
    phone2: string;
    fax: string;




    // editId: number;
    // editName: string;
    // editDescription: string;

    item: string;
    loading:boolean=true;

    getLoc() {
        this._data.getLocations().subscribe((data: Locations[]) => {
            this.arrLoc = data;
            this.loading=false;
            console.log(this.arrLoc);
        });
    }

    ngOnInit() {
        this.loading=true;
        this.getLoc();
    }

    onSearch(value) {
        console.log(value);
        if (value != "") {
            this.arrLoc = this.arrLoc.filter(x => x.name.startsWith(value));
        } else {
            this._data.getLocations().subscribe(
                (data: Locations[]) => {
                    this.arrLoc = data;
                },
                function(error) {
                    alert(error);
                },
                function() {}
            );
        }
    }

    // Add modal
    openAdd(content, passedTitle) {
        this.selectedLocationOption = passedTitle;
        this.name = "";
        this.description = "";
        this.address1 ='';
        this.address2='';
        this.city='';
        this.state='';
        this.zip='';
        this.country='';
        this.website='';
        this.phone1='';
        this.phone2='';
        this.fax='';

        this.modalService.open(content);
    }

    // Edit modal popup
    openEdit(content, passedTitle, i,arr) {
        //console.log(arr.id);
        this.id = arr.id;
        this.selectedLocationOption = passedTitle;
        // console.log(i);
        this.name = this.arrLoc[i].name;
        console.log(this.name);
        this.description = this.arrLoc[i].description;
        this.address1 = this.arrLoc[i].address1;
        this.address2 = this.arrLoc[i].address2;
        this.city = this.arrLoc[i].city;
        this.state = this.arrLoc[i].state;
        this.zip = this.arrLoc[i].zip;
        this.country = this.arrLoc[i].country;
        this.website = this.arrLoc[i].website;
        this.phone1 = this.arrLoc[i].phone1;
        this.phone2 = this.arrLoc[i].phone2;
        this.fax = this.arrLoc[i].fax;


        // console.log('updating');
        this.updatedItem = i;

        this.modalService.open(content);
    }

    // delete
    onLocDelete(id: number) {
        this._data.deleteLocations(id).subscribe((data: any) => {
            // alert('successfully deleted');
            this.ngOnInit();
        });
    }

    onFormSubmit(f) {
        if (this.selectedLocationOption == "Add") {
            // console.log(this.id);
            // console.log(f.value);

            this._data.addLocations(f.value).subscribe((data: any) => {
                this.msgs=[];
                this.msgs.push({ severity: 'success', summary: 'success', detail:'record added' });
                this.getLoc();
            });
            // console.log();
        } else {
            console.log(f.value);
            console.log(f.value.name);
            console.log(f.value.Address1);
            console.log(f.value.Address2);
            var req = {
                id: this.id,
                description: f.value.Description,
                name: f.value.name,
                address1: f.value.address1,
                address2: f.value.address2,
                city: f.value.city,
                state: f.value.state,
                zip: f.value.zip,
                country: f.value.country,
                website: f.value.website,
                phone1: f.value.phone1,
                phone2: f.value.phone2,
                fax: f.value.fax
            };
            this._data.editLocations(req).then(
                res => {console.log(res);
                    if (res!=undefined) {
                        this.msgs=[];
                        this.msgs.push({ severity: 'error', summary: 'Error', detail:'Update not Successful'});

                        this.getLoc();
                    } else {
                        this.msgs=[];
                        this.msgs.push({ severity: 'success', summary: 'success', detail:'record updated'});
                    }
                },
                error => {}
            );
        }

        this.modalService.dismissAll();
        this.ngOnInit();
    }

    confirmDelete(id: number) {
        console.log(id);
        this.confirmationService.confirm({
            message: "Are you sure that you want to proceed?",
            header: "Confirmation",
            icon: "pi pi-exclamation-triangle",
            accept: () => {
                this.onLocDelete(id);
                // this.msgs = [{severity:'info', summary:'Confirmed', detail:'You have accepted'}];
            },
            reject: () => {
                // this.msgs = [{severity:'info', summary:'Rejected', detail:'You have rejected'}];
            }
        });
    }
}

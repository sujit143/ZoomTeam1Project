import { Component, OnInit } from '@angular/core';
import { DisplayUser } from './users';
import { HttpClient } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from './user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

    constructor(private http: HttpClient, private modalService: NgbModal, private _data:UserService) { }

    updatedItem: number;
    title = 'Users';
    closeResult: string;
    selectedUserOption: string;
  msg = 'Are You Sure!';
  arrUser: DisplayUser[]=[];
  // msgs: Message[] = [];

       firstName: string;
       lastName: string;
       displayName: string;
       gender: string;
       dob: Date;
       address: string;
       city: string;
       state: string;
       email: string;
       supervisor: string;
       loading:boolean=true;
  documentsdata:any;
  errormsg:string;


    ngOnInit() {
      this.loading=true;
        this.getusers();
    }

    getusers(){
        this._data.getUsers().subscribe((data:DisplayUser[]) =>{
            this.arrUser =data['members'];
            this.loading=false;
            console.log(this.arrUser);

        }
        );
    }

  // Add modal
  openAdd(content, passedTitle) {
      this.selectedUserOption = passedTitle;
      this.firstName = '';
      this.lastName = '';
      this.modalService.open(content);
      }
  }

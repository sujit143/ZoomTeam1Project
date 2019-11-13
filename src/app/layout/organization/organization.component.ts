import { Component, OnInit } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DocumentdataService } from '../document/documentdata.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ActivatedRoute } from '@angular/router';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.scss']
})
export class OrganizationComponent implements OnInit {

    constructor(
        private modalService: NgbModal,
        private _data: DocumentdataService) {

    }



    ngOnInit() {

        this.getDocuments();
        // this.loading=false;
    }

    getDocuments() {

        // this.arrDoc=this.documentsdata.Document;
        // this.errormsg=this.documentsdata.errormsg;
        // this.loading=false;

    }



    // Add modal
    openAdd(content) {


        this.modalService.open(content);
    }



    onFormSubmit(f) {

            // console.log(this.id);
            // this._data.addDocumnets(f.value).subscribe((data: any) => {
            //     console.log(f.value);
            //     this.msgs = [];
            //     // this.msgs.push({ severity: 'success', summary: 'success', detail: 'record added' });
            //     this.getDocuments();
            // });



        this.modalService.dismissAll();
    }


}

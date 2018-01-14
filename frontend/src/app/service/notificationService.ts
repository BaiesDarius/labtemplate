import { Injectable, ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr';

@Injectable()
export class NotificationService {
    public viewContainerRef:ViewContainerRef;

    constructor(public toastr: ToastsManager) {
    }

    setViewContainerReference(vcr: ViewContainerRef) {
        this.viewContainerRef = vcr;
        this.toastr.setRootViewContainerRef(this.viewContainerRef);
    }

    onSuccess(message : string) {
        this.toastr.success(message);
    }

    onFail(message : string) {
        this.toastr.error(message);
    }

    showWarning() {
        this.toastr.warning('Alert!');
    }

    showInfo() {
        this.toastr.info('Just some information for you.');
    }
}
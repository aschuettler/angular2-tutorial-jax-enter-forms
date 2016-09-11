import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {CommonModule} from "@angular/common";
import {OrtValidatorDirective} from "../validators/ort.validator.directive";
import {OrtAsyncValidatorDirective} from "../validators/ort-async.validator.directive";

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        OrtValidatorDirective,
        OrtAsyncValidatorDirective
    ],
    exports: [
        OrtValidatorDirective,
        OrtAsyncValidatorDirective
    ]
})
export class SharedModule {
}

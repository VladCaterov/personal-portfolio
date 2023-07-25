import { MatButtonModule } from "@angular/material/button";
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from "@angular/material/icon"
import { NgModule } from "@angular/core";

@NgModule({
    exports:[   
        MatButtonModule,
        MatTabsModule,
        MatIconModule
    ]
})
export class MaterialImports{}
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { MySampleRegionMySuffixModule } from './region/region-my-suffix.module';
import { MySampleCountryMySuffixModule } from './country/country-my-suffix.module';
import { MySampleLocationMySuffixModule } from './location/location-my-suffix.module';
import { MySampleDepartmentMySuffixModule } from './department/department-my-suffix.module';
import { MySampleTaskMySuffixModule } from './task/task-my-suffix.module';
import { MySampleEmployeeMySuffixModule } from './employee/employee-my-suffix.module';
import { MySampleJobMySuffixModule } from './job/job-my-suffix.module';
import { MySampleJobHistoryMySuffixModule } from './job-history/job-history-my-suffix.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        MySampleRegionMySuffixModule,
        MySampleCountryMySuffixModule,
        MySampleLocationMySuffixModule,
        MySampleDepartmentMySuffixModule,
        MySampleTaskMySuffixModule,
        MySampleEmployeeMySuffixModule,
        MySampleJobMySuffixModule,
        MySampleJobHistoryMySuffixModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MySampleEntityModule {}

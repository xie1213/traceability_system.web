import { ref,onMounted ,watchEffect} from "vue";
//控件
import TableAllData from "../components/ModelView/TableData.vue";
import TimeTemplate  from '../components/Template/TimeTemplate.vue'
import SelectTemp    from '../components/Template/SlelectTemplate.vue'
import ExportTemp from '@/components/Template/ExportTemplate.vue'
//数据

import apiClient from './request';
import GearTable from './TableData/GearTable'
import NewRRColNames from './TableData/NewRRTAble'
import RotorTable from './TableData/RotorTable';
import MotorTable from './TableData/NewMotorTable';


import NewTATable from "./TableData/NewTaTable";
import AllTableData from './TableData/AllTableData';
import outdata from "./TableData/Outbound";

import MotorView from "@/components/ModelView/MotorTable";
export {
    ref,
    TableAllData,
    TimeTemplate,
    apiClient,
    SelectTemp,
    onMounted,
    GearTable,
    NewRRColNames,
    MotorTable,
    NewTATable,
    RotorTable,
    AllTableData,
    outdata,
    MotorView,
    watchEffect,
    ExportTemp
}
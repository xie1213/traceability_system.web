import { motorData, rotorData, rrData, gearData, taData, allTableData, shipmentData } from "@/service/Import/tableData";
// import { da } from "element-plus/es/locale";
import { ref } from "vue";

const selectName = {
    "Motor履历": motorData.AllMotorTable,
    "Rotor履历": rotorData.AllRotorTable,
    "Gear履历": gearData.AllGearTable,
    "Rr履历": rrData.AllRRTable,
    "Ta履历": taData.AllTatable,
    "全部履历": allTableData.table,
    "出荷履历": shipmentData.outdata
}
//
export const optionList = ref()
export let firstList = []

export const getSeleName = (tableName) => {
    optionList.value = selectName[tableName]
    firstList = []
    if (tableName != "全部履历" && tableName != "出荷履历") {
        getTableColName()
        console.log(optionList.value);
    }

}

const getTableColName = () => {
    optionList.value.map(data => {
        if (data.title != "特定列") {
            firstList.push(data.title)
        }
    })
}
//  const getIndex = (searchTitle)=>{
//     optionList.value.findIndex(function(item) {
//         return item.title === searchTitle;
// })
// }

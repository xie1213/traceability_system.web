import * as imports from './Import'

// import publicData from './TableData/BasicTable'
const firstName = imports.ref({})
//获取列
const GetTableColName = (item) => {
  if (item != null) {
    //获取表格列名
    switch (item) {
      case "MotorTable":
        //firstName.value = imports.Motordata.mergedArray;
        //RowCol.value = imports.Motordata.RowCol;
        //console.log(RowCol);
        firstName.value = imports.MotorTable.AllMotorTable;
        break;
      case "GearTable":
        // firstName.value = imports.RotorTable.exportDat
        firstName.value = imports.GearTable.AllGearTable
        break;
      case "RotorTable":
        firstName.value = imports.RotorTable.AllRotorTable
        break;
      case "Rrtable":
        // firstName.value = imports.RRColNames.rrTableData
        firstName.value = imports.NewRRColNames.AllRRTable
        break;
      case "Tatable":
        // firstName.value = imports.TATable.rrTableData
        firstName.value = imports.NewTATable.AllTatable
        break;
      case "全部数据":
        firstName.value = imports.AllTableData.table
        break
        case "出荷数据":
          firstName.value = imports.outdata
          break;
      default:
        firstName.value = null;
        break;
    }
  }
}
//合并数组
function exportData(TableData, fieidData) {
  let dataIndex = 0;
  const newObj = TableData.map((table) => {
    const ColVal = table.colName.map((col) => {
      if (dataIndex < fieidData.length) {
        const data = fieidData[dataIndex++];
        return {
          col: col,
          val: data
        };
      } else {
        return null;
      }
    });

    return {
      title: table.tableName,
      val: ColVal
    };
  });
  return newObj;
}
const parseData = [
  "计测日时",
  "拐点行程",
  "変曲点负重",
  "最终行程",
  "最終荷负重",
  "拐点行程",
  "変曲点负重",
  "最终行程",
  "最終荷负重",
  "主行程",
  "A/B"
]

const addTwoItem = (count, name) => {
  let itemList = []
  itemList.push(name + "计测日時")
  for (var i = 0; i < count; i++) {
    itemList.push(`${name}紧固角度${i + 1}軸`);
    itemList.push(`${name}第${i + 1}轴 判定代码`);
  }
  itemList.push(name + "A/B")
  return itemList
};

export default {
  GetTableColName,
  exportData,
  parseData,
  addTwoItem,
  firstName: firstName, // 添加这一行来导出 columnName
}
import {exportData} from "@/service/GetDataMethod/publicMethod"
import BasicDateList from './NewBasicTable'
const RRTableZh = [
     {
        tableName: "防错防误39计测日時",
        colName: ["防错防误39计测日時"]
    }, {
        tableName: "防错防误40计测日時",
        colName: ["防错防误40计测日時"]
    },
    {
        tableName: "RrBrg圧入",
        colName: ["RrBrg圧入计测日时", "RrBrg圧入拐点行程1", "RrBrg圧入拐点负重1", "RrBrg圧入最终行程1", "RrBrg圧入最终负重1", "RrBrg圧入拐点行程2", "RrBrg圧入拐点负重2", "RrBrg圧入最终行程2", "RrBrg圧入最终负重2", "RrBrg圧入主行程"]
    }, {
        tableName: "防错防误41计测日時",
        colName: ["防错防误41计测日時"]
    }, {
        tableName: "防错防误42计测日時",
        colName: ["防错防误42计测日時"]
    }, {
        tableName: "防错防误43计测日時",
        colName: ["防错防误43计测日時"]
    }, {
        tableName: "防错防误44计测日時",
        colName: ["防错防误44计测日時"]
    }, {
        tableName: "反転機",
        colName: ["反転機计测日時"]
    }, {
        tableName: "防错防误45计测日時",
        colName: ["防错防误45计测日時"]
    }, {
        tableName: "拒绝",
        colName: ["拒绝计测日時"]
    }
]
const rrColNames = [
        "PokayokeDate39",
        "PokayokeDate40",
        "HsgBrgMdate",
        "HsgBrgStroke",
        "HsgBrgLoad",
        "HsgBrgFinalStroke",
        "HsgBrgFinalLoad",
        "HsgBrgStrokeSec",
        "HsgBrgLoadSec",
        "HsgBrgFinalStrokeSec",
        "HsgBrgFinalLoadSec",
        "HsgBrgMainStroke",
        "PokayokeDate41",
        "PokayokeDate42",
        "PokayokeDate43",
        "PokayokeDate44",
        "UpenderDate",
        "PokayokeDate45",
        "RejectTime"
      ]
const BasicDatezh = [
    {
        tableName: "特定列",
        colName: ["采集时间","rr盖序列"]
    }
]
const BasicDate = [
    "CollectionDate",
    "RrcoverSerial"
]

const RRTable = exportData(RRTableZh, rrColNames)

const NewRRTable = BasicDateList.BasicDateList.concat(RRTable)


const AllRRTable =  exportData(BasicDatezh, BasicDate).concat(NewRRTable)
export default { RRTable, RRTableZh,AllRRTable }
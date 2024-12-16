import {exportData,parseData} from "@/service/GetDataMethod/publicMethod"
import NewBasicTable from './NewBasicTable'
const MotorZhData =
    [{
        tableName: "防错防误１计测日時",
        colName: ["防错防误１计测日時"]
    }, {
        tableName: "防错防误2计测日時",
        colName: ["防错防误2计测日時"]
    },
    {
        tableName: "Hsg面壳Brg压入",
        colName: parseData
    },
    {
        tableName: "Hsg面定位销压入",
        colName: parseData
    },
    {
        tableName: "防错防误3计测日時",
        colName: ["防错防误3计测日時"]
    }, {
        tableName: "防错防误4计测日時",
        colName: ["防错防误4计测日時"]
    }, {
        tableName: "RR面壳体Brg压入",
        colName:
            parseData
    }, {
        tableName: "RR面定位销压入",
        colName: parseData
    }, {
        tableName: "MG1组装・端子台紧固",
        colName: [
            "计测日时",
            "紧固角度1轴",
            "第1轴判定代码",
            "紧固角度2轴",
            "第2轴判定代码",
            "紧固角度3轴",
            "第3轴判定代码"
        ]
    }, {
        tableName: "MG2组装・端子台紧固",
        colName: [
            "计测日时",
            "紧固角度1轴",
            "第一轴判定代码",
            "紧固角度2軸",
            "第2轴判定代码",
            "紧固角度3軸",
            "第3轴判定代码"
        ]
    }, {
        tableName: "防错防误５计测日時",
        colName: ["防错防误５计测日時"]
    }, {
        tableName: "定子本体紧固",
        colName: [
            "计测日时",
            "紧固角度1軸",
            "第1轴判定代码",
            "紧固角度2軸",
            "第2轴判定代码",
            "紧固角度3軸1",
            "第3轴1判定代码",
            "紧固角度1軸",
            "第一轴判定代码",
            "紧固角度2軸",
            "第2轴判定代码",
            "紧固角度3軸",
            "第3轴判定代码",
            "MG1定子1軸塑性区紧固扭矩",
            "MG1定子2軸塑性区紧固扭矩",
            "MG1定子3軸塑性区紧固扭矩",
            "MG2定子1軸塑性区紧固扭矩",
            "MG2定子2軸塑性区紧固扭矩",
            "MG2定子3軸塑性区紧固扭矩"
        ]
    }, {
        tableName: "防错防误6计测日時",
        colName: ["防错防误6计测日時"]
    }, {
        tableName: "防错防误7计测日時",
        colName: ["防错防误7计测日時"]
    }, {
        tableName: "转子磁化移载",
        colName: [
            "计测日时",
            "MG1工件温度",
            "MG1通量值",
            "MG1判定",
            "MG2工件温度",
            "MG2通量值",
            "MG2判定"
        ]
    }, {
        tableName: "RrFIGP",
        colName: [
            "计测日时",
            "画像判定結果"
        ]
    }, {
        tableName: "Rr罩子组装",
        colName: ["计测日時"]

    },
    {
        tableName: "合体①",
        colName: [
            "计测日时合体",
            "紧固角度1軸",
            "第1轴判定代码",
            "紧固角度2軸",
            "第2轴判定代码",
            "紧固角度3軸",
            "第3轴判定代码",
            "紧固角度4軸",
            "第4轴判定代码",
            "紧固角度5軸",
            "5軸目判定代码",
            "紧固角度6軸",
            "6軸目判定代码",
            "紧固角度7軸",
            "7軸目判定代码",
            "紧固角度8軸",
            "8軸目判定代码",
            "紧固角度9軸",
            "9軸目判定代码",
            "紧固角度10軸",
            "10軸目判定代码",
            "紧固角度11軸",
            "第1轴判定代码",
            "A/B"
        ]
    }, {
        tableName: "合体②",
        colName: ["计测日时",
            "紧固角度1軸",
            "第1轴判定代码",
            "紧固角度2軸",
            "第2轴判定代码",
            "紧固角度3軸",
            "第3轴判定代码",
            "紧固角度4軸",
            "第4轴判定代码",
            "紧固角度5軸",
            "5軸目判定代码",
            "紧固角度6軸",
            "6軸目判定代码",
            "紧固角度7軸",
            "第7轴判定代码",
            "紧固角度8軸",
            "第8轴判定代码",
            "紧固角度9軸",
            "第9轴判定代码",
            "紧固角度10軸",
            "第10轴判定代码",
            "A/B"]
    }, {
        tableName: "箱体反转",
        colName: ["计测日時"]
    }, {
        tableName: "防错防误预备计测日時",
        colName: ["防错防误预备计测日時"]
    }, {
        tableName: "防错防误计测日時",
        colName: ["防错防误8计测日時", "防错防误9计测日時", "防错防误10计测日時", "防错防误11计测日時", "防错防误12计测日時", "防错防误13计测日時", "防错防误14计测日時"]
    }

    ]

const Motordata = [
        "PokayokeDate1",
        "PokayokeDate2",
        "HsgBrgDate",
        "HsgBrgStroke",
        "HsgBrgLoad",
        "HsgBrgFinalStroke",
        "HsgBrgFinalLoad",
        "HsgBrgStrokeSec",
        "HsgBrgLoadSec",
        "HsgBrgFinalStrokeSec",
        "HsgBrgFinalLoadSec",
        "HsgBrgMainStroke",
        "HsgBrgAbvalue",
        "HsgKnockDate",
        "HsgKnockStroke",
        "HsgKnockLoad",
        "HsgKnockFinalStroke",
        "HsgKnockFinalLoad",
        "HsgKnockStrokeSec",
        "HsgKnockLoadSec",
        "HsgKnockFinalStrokeSec",
        "HsgKnockFinalLoadSec",
        "HsgKnockMainStroke",
        "HsgKnockAbvalue",
        "PokayokeDate3",
        "PokayokeDate4",
        "RrbrgDate",
        "RrbrgStroke",
        "RrbrgLoad",
        "RrbrgFinalStroke",
        "RrbrgFinalLoad",
        "RrbrgStrokeSec",
        "RrbrgLoadSec",
        "RrbrgFinalStrokeSec",
        "RrbrgFinalLoadSec",
        "RrbrgMainStroke",
        "RrbrgAbvalue",
        "RrknockDate",
        "RrknockStroke",
        "RrknockLoad",
        "RrknockFinalStroke",
        "RrknockFinalLoad",
        "RrknockStrokeSec",
        "RrknockLoadSec",
        "RrknockFinalStrokeSec",
        "RrknockFinalLoadSec",
        "RrknockMainStroke",
        "RrknockAbvalue",
        "Mg1date",
        "Mg1torqAngleAxis1",
        "Mg1codeAxis1",
        "Mg1torqAngleAxis2",
        "Mg1codeAxis2",
        "Mg1torqAngleAxis3",
        "Mg1codeAxis3",
        "Mg2date",
        "Mg2torqAngleAxis1",
        "Mg2codeAxis1",
        "Mg2torqAngleAxis2",
        "Mg2codeAxis2",
        "Mg2torqAngleAxis3",
        "Mg2codeAxis3",
        "PokayokeDate5",
        "StatorDate",
        "TorqAngleAxis1",
        "CodeAxis1",
        "TorqAngleAxis2",
        "CodeAxis2",
        "TorqAngleAxis3",
        "CodeAxis3",
        "AngleAxis1Sec",
        "AxisCode1Sec",
        "AngleAxis2Sec",
        "AxisCode2Sec",
        "AngleAxis3Sec",
        "AxisCode3Sec",
        "Mg1stator1",
        "Mg1stator2",
        "Mg1stator3",
        "Mg2stator1",
        "Mg2stator2",
        "Mg2stator3",
        "PokayokeDate6",
        "PokayokeDate7",
        "MeasDate",
        "Mg1workTemp",
        "Mg1fluxValue",
        "Mg1dec",
        "Mg2workTemp",
        "Mg2fluxValue",
        "Mg2dec",
        "RrFigpdate",
        "ImgResult",
        "RrcoverDate",
        "TotalDate1",
        "Total1AngleAxis1",
        "Total1Axis1Code",
        "Total1AngleAxis2",
        "Total1Axis2Code",
        "Total1AngleAxis3",
        "Total1Axis3Code",
        "Total1AngleAxis4",
        "Total1Axis4Code",
        "Total1AngleAxis5",
        "Total1Axis5Code",
        "Total1AngleAxis6",
        "Total1Axis6Code",
        "Total1AngleAxis7",
        "Total1Axis7Code",
        "Total1AngleAxis8",
        "Total1Axis8Code",
        "Total1AngleAxis9",
        "Total1Axis9Code",
        "Total1AngleAxis10",
        "Total1Axis10Code",
        "Total1AngleAxis11",
        "Total1Axis11Code",
        "Total1Abvalue",
        "Total2Date",
        "Angle1Axis",
        "Axis1Code",
        "Angle2Axis",
        "Axis2Code",
        "Angle3Axis",
        "Axis3Code",
        "Angle4Axis",
        "Axis4Code",
        "Angle5Axis",
        "Axis5Code",
        "Angle6Axis",
        "Axis6Code",
        "Angle7Axis",
        "Axis7Code",
        "Angle8Axis",
        "Axis8Code",
        "Angle9Axis",
        "Axis9Code",
        "Angle10Axis",
        "Axis10Code",
        "Ab",
        "ReDate",
        "PokayokeDateBas",
        "PokayokeDate8",
        "PokayokeDate9",
        "PokayokeDate10",
        "PokayokeDate11",
        "PokayokeDate12",
        "PokayokeDate13",
        "PokayokeDate14"
]
    

const BasicDatezh = [
    {
        tableName: "特定列",
        colName: ["采集时间","Motor出荷序列"]
    }
]
const BasicDate = [
    "CollectionDate",
    "ShipmentSerial"
]



const MotorTable = exportData(MotorZhData, Motordata)
const newMotorTable =  NewBasicTable.BasicDateList.concat(MotorTable)

const AllMotorTable = exportData(BasicDatezh, BasicDate).concat(newMotorTable)
export default { MotorTable, MotorZhData,AllMotorTable,newMotorTable }
import publicData from '../public'
import NewBasicTable from './NewBasicTable';
const RotorTableZh = [
  {
    tableName: "防错防误39计测日時",
    colName: ["防错防误39计测日時"]
  }, {
    tableName: "防错防误40计测日時",
    colName: ["防错防误40计测日時"]
  }, {
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
    tableName: "翻转机计测日時",
    colName: ["翻转机计测日時"]
  }, {
    tableName: "防错防误45计测日時",
    colName: ["防错防误45计测日時"]
  }, {
    tableName: "拒绝计测日時",
    colName: ["拒绝计测日時"]
  },{
    tableName: "防错防误33计测日時",
    colName: ["防错防误33计测日時"]
  }, {
    tableName: "差速器装配",
    colName: [
      "差速器计测日时",
      "差速器推进位置3轴", "差速器负重（电流值）3轴",
      "差速器推进位置4轴", "差速器负重（电流值）4轴"
    ]
  }, {
    tableName: "防错防误34计测日時",
    colName: ["防错防误34计测日時"]
  }, {
    tableName: "差动齿轮测量",
    colName: [
      "差动齿轮计测日时",
      "差速器动作齿轮判定",
      "差动齿轮変位量",
      "差动齿轮上限扭矩",
      "差动齿轮下限扭矩"
    ]
  }, {
    tableName: "差速器销铆接",
    colName: [
      "差速器计测日时",
      "差速器铆接最终行程",
      "差速器铆接最终负重"
    ]
  }, {
    tableName: "防错防误35计测日時",
    colName: ["防错防误35计测日時"]
  }, {
    tableName: "齿轮压入１",
    colName: publicData.parseData
  }, {
    tableName: "齿轮压入2",
    colName: publicData.parseData
  }, {
    tableName: "差速器销l螺母紧固",
    colName: [
      "计测日时",
      "紧固扭矩1軸",
      "紧固角度1軸",
      "判定代码",
      "着座扭矩1軸",
      "下降角度1軸",
      "松弛监视器扭矩1軸"
    ]
  }, {
    tableName: "差速器销螺母铆接",
    colName: [
      "计测日时",
      "最终行程",
      "最终负重",
      "主行程"
    ]
  }, {
    tableName: "DF BRG＋环圧入",
    colName: [
      "DF BRG计测日时",
      "DF BRG拐点行程",
      "DF BRG拐点负重",
      "DF BRG最终行程",
      "DF BRG最终负重",
      "DF BRG拐点行程",
      "DF BRG拐点负重",
      "DF BRG最终行程",
      "DF BRG最终负重",
      "DF BRG主行程"
    ]
  }, {
    tableName: "DF紧固１",
    colName: [
      "DF1 计测日时",
      "DF1 紧固角度　1軸",
      "DF1 第1軸　判定代码",
      "DF1 紧固角度　2軸",
      "DF1 第２軸　判定代码",
      "DF1 紧固角度　3軸",
      "DF1 第３軸　判定代码",
      "DF1 紧固角度　4軸",
      "DF1 第4軸　判定代码",
      "DF1 紧固角度　5軸",
      "DF1 第5軸　判定代码",
      "DF1 紧固角度　6軸",
      "DF1 第6軸　判定代码",
      "DF1 A/B"
    ]
  }, {
    tableName: "DF紧固2",
    colName: [
      "DF2 计测日时",
      "DF2 紧固角度　1軸",
      "DF2 第1軸　判定代码",
      "DF2 紧固角度　2軸",
      "DF2 第２軸　判定代码",
      "DF2 紧固角度　3軸",
      "DF2 第３軸　判定代码",
      "DF2 紧固角度　4軸",
      "DF2 第4軸　判定代码",
      "DF2 紧固角度　5軸",
      "DF2 第5軸　判定代码",
      "DF2 紧固角度　6軸",
      "DF2 第6軸　判定代码",
      "DF2 A/B"
    ]
  }, {
    tableName: "DF反転",
    colName: ["DF反転计测日時"]
  }, {
    tableName: "防错防误36计测日時",
    colName: ["防错防误36计测日時"]
  }, {
    tableName: "防错防误37计测日時",
    colName: ["防错防误37计测日時"]
  }, {
    tableName: "防错防误38计测日時",
    colName: ["防错防误38计测日時"]
  }, {
    tableName: "MG1磁化",
    colName: ["MG1工件温度", "MG1通量值", "MG1判定"]
  }, {
    tableName: "MG2磁化",
    colName: ["MG2工件温度", "MG2通量值", "MG2判定"]
  }, {
    tableName: "轴移載计测日時",
    colName: ["轴移載计测日時"]
  }, {
    tableName: "铁芯移載计测日時",
    colName: ["铁芯移載计测日時"]
  }, {
    tableName: "转子铁芯序列",
    colName: ["转子铁芯序列"]
  }, {
    tableName: "轴序列",
    colName: ["轴序列"]
  }, {
    tableName: "铁芯加熱",
    colName: [
      "加工開始日時",
      "铁芯加熱有無",
      "加熱ST",
      "加热程序",
      "室温（℃）",
      "轴温度（℃）",
      "加熱前铁芯温度（℃）",
      "加熱完了時铁芯温度（℃）",
      "加熱前IH盘管温度（℃）",
      "加熱後IH盘管温度（℃）",
      "冷却空气温度（℃）",
      "加熱通電時間(秒）",
      "加熱输出(％）",
      "加熱完了日時",
      "判定代码"
    ]
  }, {
    tableName: "轴圧入",
    colName: [
      "计测日時",
      "拐点行程",
      "拐点负重",
      "圧入最终行程",
      "主行程",
      "圧入時铁芯温度（℃）",
      "圧入ST滞在時間(s)",
      "初始倾斜(kN/mm)",
      "偏离检测位置(mm)",
      "偏离检负重(kN)",
      "判定代码",
      "圧入機"
    ]
  }, {
    tableName: "l螺母紧固",
    colName: [
      "计测日時",
      "紧固扭矩1軸",
      "紧固角度1軸",
      "判定代码",
      "抽样履历",
      "着座扭矩1軸",
      "下降角度1軸",
      "松监视器扭矩1軸"
    ]
  }, {
    tableName: "铆接圧入",
    colName: [
      "计测日時",
      "铆接行程（0前）",
      "铆接行程（0後）",
      "铆接荷重",
      "主行程",
      "判定代码",
      "垫圈检测传感器値",
      "垫圈检测主値",
      "垫圈确认位置",
      "拐点行程",
      "拐点负重",
      "圧入最终行程",
      "主行程",
      "判定代码"
    ]
  }, {
    tableName: "旋转变压器圧入",
    colName: [
      "加工開始日時",
      "拐点行程",
      "拐点负重",
      "圧入最终行程",
      "主行程",
      "判定代码",
      "抽样履历",
      "ｾﾝｻ位相間違い検出位置①",
      "ｾﾝｻ位相間違い検出位置②"
    ]
  }
]

const RotorData = [
    "PokayokeDate39",
    "PokayokeDate40",
    "HsgBrgMeasDate",
    "HsgBrgInflectPtStroke",
    "HsgBrgInflectPtLoad",
    "HsgBrgFinalStroke",
    "HsgBrgFinalLoad",
    "HsgBrgInflectPtStrokeSec",
    "HsgBrgInflectPtLoadSec",
    "HsgBrgFinalStrokeSec",
    "HsgBrgFinalLoadSec",
    "HsgBrgMaasterStroke",
    "PokayokeDate41",
    "PokayokeDate42",
    "PokayokeDate43",
    "PokayokeDate44",
    "UpenderDate",
    "PokayokeDate45",
    "RejectTime",
    "PokayokeDate33",
    "DgameasDate",
    "Dgapos3Axis",
    "Dgaload3Axis",
    "Dgapos4Axis",
    "Dgaload4Axis",
    "PokayokeDate34",
    "DgmmeasTime",
    "Dgmdagjudge",
    "DgmlhRh",
    "DgmmaxTorque",
    "DgmminTorque",
    "DprmeasTime",
    "Dprfrs",
    "Dprfrl",
    "PokayokeDate35",
    "GearMeasDate",
    "GearStroke",
    "GearLoad",
    "GearFinalStroke",
    "GearFinalLoad",
    "GearStrokeSec",
    "GearLoadSec",
    "GearFinalStrokeSec",
    "GearFinalLoadSec",
    "GearMainStroke",
    "GearAbvalue",
    "Gear2Date",
    "Gear2Stroke",
    "Gear2Load",
    "Gear2FinalStroke",
    "Gear2FinalLoad",
    "Gear2StrokeSec",
    "Gear2LoadSec",
    "Gear2FinalStrokeSec",
    "Gear2FinalLoadSec",
    "Gear2MainStroke",
    "Gear2Abvalue",
    "DpntDate",
    "DpntTorqueAxis1",
    "DpntAngleAxis1",
    "DpntJudgment",
    "DpntSeating",
    "DpntDrop",
    "DpntSlack",
    "DpnfMeasDate",
    "DpnfFinalStroke",
    "DpnfFinalLoad",
    "DpnfMainStroke",
    "Dfbrgdate",
    "Dfbrgstroke",
    "Dfbrgload",
    "DfbrgfinalStroke",
    "DfbrgfinalLoad",
    "DfbrgstrokeSec",
    "DfbrgloadSec",
    "DfbrgfinalStrokeSec",
    "DfbrgfinalLoadSec",
    "DfbrgmainStroke",
    "Df1date",
    "Df1angleAxis1",
    "Df1codeAxis1",
    "Df1angleAxis2",
    "Df1codeAxis2",
    "Df1angleAxis3",
    "Df1codeAxis3",
    "Df1angleAxis4",
    "Df1codeAxis4",
    "Df1angleAxis5",
    "Df1codeAxis5",
    "Df1angleAxis6",
    "Df1codeAxis6",
    "Df1abvalue",
    "Df2date",
    "Df2angleAxis1",
    "Df2codeAxis1",
    "Df2angleAxis2",
    "Df2codeAxis2",
    "Df2angleAxis3",
    "Df2codeAxis3",
    "Df2angleAxis4",
    "Df2codeAxis4",
    "Df2angleAxis5",
    "Df2codeAxis5",
    "Df2angleAxis6",
    "Df2codeAxis6",
    "Df2abvalue",
    "DfreverseDate",
    "PokayokeDate36",
    "PokayokeDate37",
    "PokayokeDate38",
    "Mg1workTemp",
    "Mg1fluxValue",
    "Mg1dec",
    "Mg2workTemp",
    "Mg2fluxValue",
    "Mg2dec",
    "Asldate",
    "Ictldate",
    "Rcserial",
    "AxisSerial",
    "ProcDate",
    "IsRcheat",
    "HeatSt",
    "HeatProcedure",
    "RoomTemp",
    "AxisTemp",
    "CoreBefore",
    "CoreAfter",
    "Ihbefore",
    "Ihafter",
    "Cdtemp",
    "HeatTime",
    "HeatOutput",
    "HeatEndTime",
    "JudgmentCode",
    "Apidate",
    "Apistroke",
    "Apiload",
    "ApifinalStroke",
    "ApimainStroke",
    "ApicoreTemp",
    "Apisttime",
    "ApiinitTilt",
    "Apipos",
    "ApideviationLoad",
    "Apicode",
    "Apimachine",
    "Ntdate",
    "NttorqueAxis1",
    "NtangleAxis1",
    "Ntcode",
    "Nthistory",
    "Ntseating1",
    "Ntdrop1",
    "Ntslack1",
    "Rapdate",
    "Rapbefore",
    "Rapafter",
    "Rapload",
    "RapmainStroke",
    "Rapcode",
    "RapwashSensor",
    "RapwashMain",
    "RapwashPos",
    "Rapstroke",
    "RaploadSec",
    "RapfinalStroke",
    "Rapmain2Stroke",
    "Rapcode2",
    "RtpstartDate",
    "Rtpstroke",
    "Rtpload",
    "RtpfinalStroke",
    "RtpmainStroke",
    "Rtpcode",
    "Rtphistory",
    "Detection1",
    "Detection2"
]


const BasicDatezh = [
  {
    tableName: "特定列",
    colName: ["采集时间", "rotor转子"]
  }
]
const BasicDate = [
  "CollectionDate",
  "Mg1rserial"
]
const RotroList = publicData.exportData(RotorTableZh, RotorData);

const NewRotorTable = NewBasicTable.BasicDateList.concat(RotroList)
const AllRotorTable = publicData.exportData(BasicDatezh, BasicDate).concat(NewRotorTable)

export default { RotroList, RotorTableZh, AllRotorTable }


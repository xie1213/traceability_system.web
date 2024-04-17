// import publicData from '../public'
import {exportData} from "@/service/GetDataMethod/publicMethod"

const BasicDate = [
    {
        tableName: "基本信息",
        colName: ["接口No.", "箱体识别", "Rr盖判别", "停车识别", "齿轮识别", "变形判别", "Hsg识别", "MG1定子判別", "MG2定子判別", "MG1转子判別", "MG2转子判別", "线体判別", "DF箱体", "油泵"]
    },
    {
        tableName: "序列",
        colName: ["CASE序列", "HSG序列", "MG1定子序列", "MG2定子序列", "MG1转子序列", "MG2转子序列", "计数器驱动器序列", "MG2修正序列", "受驱动序列", "差速器销序列", "齿圈序列", "差速器箱序列", "Rr盖序列", "出货序列", "Rr油泵序列"]
    },
    {
        tableName: "转子工序履历",
        colName: ["轴移载", "铁芯移载", "加热", "轴圧入", "螺母紧固", "工序履历(异物吸引)", "螺母铆接MG1针压入", "旋转变压器压入", "排斥", "磁性磁化", "工序履历(抽样检查)", "工序履历(转子出厂检查综合判定)"]
    },
    {
        tableName: "转子工序履历(TA区域MG2)",
        colName: [
            "轴移载", "铁芯移载", "加热", "轴圧入", "螺母紧固", "工序履历(异物吸引)", "螺母铆接MG1针压入", "旋转变压器压入", "排斥", "磁性磁化", "工序履历(抽样检查)", "工序履历(转子出厂检查综合判定)"
        ]
    },
    {
        tableName: "马达工序履历",
        colName: [
            "ID写入",
            "序号发生箱子集",
            "Hsg面箱体BrgAM",
            "Hsg面定位压入AM",
            "冷却管手工作业",
            "端子台手工作业",
            "Rr罩面外BrgAM",
            "Rr罩面定位压入AM",
            "MG1定子插入AM",
            "MG2定子插入AM",
            "线束释放手工作业",
            "MG1、2定子紧固AM",
            "热敏电阻手工作业",
            "冷却管手工作业",
            "G1、2转子组装",
            "FIPG涂布",
            "安装Rr罩子",
            "Rr罩子紧固1",
            "Rr罩子紧固2",
            "翻转机",
            "手动作业１",
            "手动作业2",
            "前st",
            "手动作业Co0",
            "手作業Co1",
            "手动作业Co2",
            "手动作业Co3",
            "拒绝确认"
        ]
    }, {
        tableName: "盖体子工程履历",
        colName: [
            "备用ID组合",
            "Rr盖组合 DM读取",
            "Rr罩子Brg压入设备",
            "手动作业１",
            "手动作业2",
            "手动作业３",
            "手动作业４",
            "RR反转设备",
            "防水连接器紧固",
            "拒绝"
        ]
    }, {
        tableName: "差速器工序履历",
        colName: [
            "差速器内部组装DF盒读取",
            "DF小齿轮轴组装设备",
            "差速器动作、位移量测量设备",
            "插针式手动作业",
            "差速器销铆接",
        ]
    }, {
        tableName: "齿轮子工序履历",
        colName: [
            "DM读入",
            "齿轮压入１",
            "齿轮压入２",
            "Co从动螺母紧固",
            "Co从动螺母铆接",
            "差速器Brg压入",
            "差速器螺栓紧固1",
            "差速器螺栓紧固2",
            "反转铆接确认",
            "ダンパー画像",
            "リジェクト"
        ]
    }, {
        tableName: "Hsg子工序履历",
        colName: [
            "ID写入,Hsg集",
            "垫片选择",
            "HsgBrg圧入1",
            "HsgBrg圧入2"
        ]
    }, {
        tableName: "合体FIPG最终工序履历",
        colName: [
            "4种齿轮组装",
            "油泵组装",
            "垫片选择",
            "垫片组",
            "润滑管组装",
            "外壳FIPG涂敷",
            "合体组装",
            "合体紧固１",
            "合体紧固２",
            "排水塞紧固",
            "差速器油封压入1",
            "差速器油封压入2",
            "フィラー締付",
            "Assy正立",
            "ID交换",
            "油冷却器组装",
            "心轴安装",
            "前期准备",
            "Assy泄漏测试",
            "绝缘",
            "油注入",
            "Assy噪声测试",
            "手动作业①",
            "手动作业②",
            "手动作业③",
            "序列刻印",
            "发货步骤1",
            "发货步骤2",
            "外观检查",
            "拒绝",
            "标签发行"
        ]
    }, {
        tableName: "特别",
        colName: ["修改历史记录"]
    }
]


const fieidData = [
        "InterNo",
        "CaseDec",
        "RrCoverDec",
        "ParkingDec",
        "GearDec",
        "DefLingDec",
        "HsgDec",
        "Mg1statorDec",
        "Mg2statorDec",
        "Mg1rotorDec",
        "Mg2rotorDec",
        "LineDec",
        "Dfcase",
        "OilPump",
        "CaseSerial",
        "HsgSerial",
        "Mg1sserial",
        "Mg2sserial",
        "Mg1rserial",
        "Mg2rserial",
        "CoDriveSerial",
        "MoDriveSerial",
        "DrivenSerial",
        "DorpinSerial",
        "DfringSerial",
        "DfcaseSerial",
        "RrcoverSerial",
        "ShipmentSerial",
        "RropSerial",
        "RotorShaftTrans",
        "RotorCoreTrans",
        "RotorHeating",
        "RotorShaftPress",
        "RotorNutTight",
        "RotorForeignSuction",
        "RotorNutCrimpMg1press",
        "RotorResolverPress",
        "RotorReject",
        "RotorMagnetization",
        "RotorExtractionInsp",
        "RotorShippingInsp",
        "RotorTamg2shaftTrans",
        "RotorTamg2coreTrans",
        "RotorTamg2heating",
        "RotorTamg2shaftPress",
        "RotorTamg2nutTight",
        "RotorTamg2foreignSuction",
        "RotorTamg2nutCrimpMg1press",
        "RotorTamg2resolverPress",
        "RotorTamg2reject",
        "RotorTamg2magnetization",
        "RotorTamg2extractionInsp",
        "RotorTamg2shippingInsp",
        "MotorMtrCode",
        "MotorSngen",
        "MotorHsgSrfBrgAm",
        "MotorHsgSrfKnockPam",
        "MotorCoolPipeMw",
        "MotorTermBoardMw",
        "MotorRrCoverSrfOutBrgAm",
        "MotorRrCoverSrfKnockPam",
        "MotorMg1statorInsAm",
        "MotorMg2statorInsAm",
        "MotorHarnEscMw",
        "MotorMg12statorTightAm",
        "MotorThermMw",
        "MotorCoolPipeMw2",
        "MotorMg12rotorAssem",
        "MotorFipgapp",
        "MotorRrCoverAssem",
        "MotorRrCoverTight1",
        "MotorRrCoverTight2",
        "MotorInvMw",
        "MotorMw1",
        "MotorMw2",
        "MotorPrevStn",
        "MotorMwco0",
        "MotorMwco1",
        "MotorMwco2",
        "MotorMwco3",
        "MotorReject",
        "CoverSubIdsetSpare",
        "CoverSubRrCovSetDmread",
        "CoverSubRrCovBrgPressEquip",
        "CoverSubMw1",
        "CoverSubMw2",
        "CoverSubMw3",
        "CoverSubMw4",
        "CoverSubRrRevEquip",
        "CoverSubWaterConnTighten",
        "CoverSubReject",
        "DefDfcaseRead",
        "DefDfpinionShaftEquip",
        "DefDiffOperMeasureEquip",
        "DefTweezersMw",
        "DefDiffPinionPress",
        "Dmread",
        "GearPressIn1",
        "GearPressIn2",
        "Slnffastening",
        "Slnfriveting",
        "DiffBrgPressIn",
        "DiffBoltTight1",
        "DiffBoltTight2",
        "RevRivetConfirm",
        "DamperImage",
        "Reject",
        "Idwrite",
        "HsgSubShimSel",
        "HsgBrgPressIn1",
        "HsgBrgPressIn2",
        "GearAssembly1",
        "OilPumpAssembly",
        "SubShimSel",
        "ShimSet",
        "LubPipeAssem",
        "CaseFipgapp",
        "AssemJoining1",
        "AssemTight1",
        "AssemTight2",
        "DrainPlugTight",
        "DiffOilsealPress1",
        "DiffOilsealPress2",
        "FillerTight",
        "AssyUpright",
        "Idexchange",
        "OilCoolerAssem",
        "MandrelAttach",
        "Preprocessing",
        "AssyLeakTest",
        "Insulation",
        "OilInjection",
        "AssyNoiseTest",
        "Mw1",
        "Mw2",
        "Mw3",
        "SerialStamping",
        "ShippingPrep1",
        "ShippingPrep2",
        "VisualInsp",
        "Fipgreject",
        "LabelPrinting",
        "Reshuffle"
    ]

const BasicDateList = exportData(BasicDate, fieidData)
export default { BasicDateList, BasicDate }
//循环紧固角度 判定代码

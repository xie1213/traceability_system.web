import publicData from '../public'
import NewBasicTable from './NewBasicTable'
const TATableZh = [
    {
        tableName: "防错防误15计测日時",
        colName: ["防错防误15计测日時"]
    }, {
        tableName: "防错防误16计测日時",
        colName: ["防错防误16计测日時"]
    },
    {
        tableName: "ラベル発券",
        colName: ["ラベル発券计测日時"]
    }, {
        tableName: "防错防误18计测日時",
        colName: ["防错防误18计测日時"]
    }, {
        tableName: "防错防误19计测日時",
        colName: ["防错防误19计测日時"]
    }, {
        tableName: "シム選択",
        colName: [
            "计测日时",
            "Hsg侧差速器轴深度t7",
            "Hsg侧转向销轴深度t5",
            "Hsg侧马达计数器轴深度t3",
            "Hsg侧输入轴深度t1",
            "壳体侧差速器轴高度t8",
            "壳体侧干销轴高度t6",
            "箱侧马达计数器轴高度t4",
            "箱侧输入轴深度t2",
            "垫片滑块（差速器轴）",
            "垫片等级（转向销轴）",
            "垫片等级（马达Co轴)",
            "垫片等级（输入轴）",
            "垫片实测值（差速器轴）",
            "垫片实测值（多拉销轴）",
            "垫片实测值（马达Co轴）",
            "垫片实测值（输入轴）",
            "齿轮直径判定",
            "α１（t1 - t2） 修正值",
            "α２（t3 - t4） 修正值",
            "α３（t5 - t6） 修正值",
            "α４（t7 - t8） 修正值",
            "t1主值",
            "t3主值",
            "t5主值",
            "t7主值",
            "t2主值",
            "t4主值",
            "t6主值",
            "t８主值"
        ]
    }, {
        tableName: "Hsg圧入1",
        colName: publicData.parseData
    }, {
        tableName: "Hsg圧入2",
        colName: publicData.parseData
    }, {
        tableName: "防错防误20计测日時",
        colName: ["防错防误20计测日時"]
    }, {
        tableName: "HSG FIGP",
        colName: ["HSG FIGP计测日時", "画像判定結果"]
    }, {
        tableName: "HSG合体",
        colName: ["计测日時"]
    }, {
        tableName: "HSG合体紧固①",
        colName: publicData.addTwoItem(11, "HSG合体紧固①")
    }, {
        tableName: "HSG合体紧固②",
        colName: publicData.addTwoItem(11, "HSG合体紧固②")
    }, {
        tableName: "防错防误27计测日時",
        colName: ["防错防误27计测日時"]
    }, {
        tableName: "OS圧入1",
        colName: [
            "OS圧入1计测日时",
            "差速器LH OS拐点行程",
            "差速器LH OS拐点负重",
            "差速器LH OS最终行程",
            "差速器LH OS最终负重",
            "差速器RH OS拐点行程",
            "差速器RH OS拐点负重",
            "差速器RH OS最终行程",
            "差速器RH OS最终负重",
            "主行程",
            "A/B"
        ]
    }, {
        tableName: "OS圧入2",
        colName: [
            "OS圧入2计测日时",
            "I/P OS拐点行程",
            "I/P OS拐点负重",
            "I/P OS最终行程",
            "I/P OS最终负重",
            "主行程",
            "A/B"
        ]
    }, {
        tableName: "防错防误21计测日時",
        colName: ["防错防误21计测日時"]
    }, {
        tableName: "Assy正立",
        colName: ["Assy正立计测日時"]
    }, {
        tableName: "防错防误22计测日時",
        colName: ["防错防误22计测日時"]
    }, {
        tableName: "防错防误23计测日時",
        colName: ["防错防误23计测日時"]
    }, {
        tableName: "防错防误24计测日時",
        colName: ["防错防误24计测日時"]
    }, {
        tableName: "防错防误25计测日時",
        colName: ["防错防误25计测日時"]
    }, {
        "tableName": "泄漏测试",
        "colName": [
            "计测日时",
            "齿轮室泄漏量",
            "泄露修正值",
            "温度情报",
            "主值泄漏量",
            "給油前重量",
            "e-TAF注油完了",
            "給油後重量",
            "气氛温度",
            "湿度",
            "油温传感器判定",
            "絶縁电阻MG1 Ω",
            "絶縁电阻MG1判定",
            "絶縁电阻MG2 Ω",
            "絶縁电阻MG2判定",
            "絶縁耐圧MG1",
            "絶縁耐圧MG1判定",
            "絶縁耐圧MG2",
            "絶縁耐圧MG2判定",
            "热敏电阻絶縁电阻 Ω",
            "热敏电阻絶縁电阻判定",
            "旋转变压器絶縁电阻 Ω",
            "旋转变压器絶縁电阻判定",
            "油温传感器絶縁电阻 Ω",
            "油温传感器絶縁电阻判定",
            "线间电阻MG1U-V Ω",
            "线间电阻MG1U-V判定",
            "线间电阻MG1V-W Ω",
            "线间电阻MG1V-W判定",
            "线间电阻MG1W-U Ω",
            "线间电阻MG1W-U判定",
            "线间电阻MG2U-V Ω",
            "线间电阻MG2U-V判定",
            "线间电阻MG2V-W Ω",
            "线间电阻MG2V-W判定",
            "线间电阻MG2W-U Ω",
            "线间电阻MG2W-U判定",
            "热敏电阻线间电阻MG1 Ω",
            "热敏电阻线间电阻MG1判定",
            "热敏电阻线间电阻MG2 Ω",
            "热敏电阻线间电阻MG2判定",
            "油温传感器线间电阻判定",
            "MG1旋转变压器连接器内相关短路判定",
            "MG2旋转变压器连接器内相关短路判定",
            "MG1W相×MG2V相短路判定",
            "油温传感器絶縁电阻",
            "旋转变压器线间电阻MG1 GRFG-GRF(9-6間)（Ω）",
            "旋转变压器线间电阻MG1 GRFG-GRF(9-6間)判定",
            "旋转变压器线间电阻MG1 GCSG-GCS(14-10間)（Ω）",
            "旋转变压器线间电阻MG1 GCSG-GCS(14-10間)判定",
            "旋转变压器线间电阻MG1 GSN-GSNG(13-5間)（Ω）",
            "旋转变压器线间电阻MG1 GSN-GSNG(13-5間)判定",
            "旋转变压器线间电阻MG2 MRFG-MRF(8-1間)（Ω）",
            "旋转变压器线间电阻MG2 MRFG-MRF(8-1間)判定",
            "旋转变压器线间电阻MG2 MCSG-MCS(11-7間)（Ω）",
            "旋转变压器线间电阻MG2 MCSG-MCS(11-7間)判定",
            "旋转变压器线间电阻MG2 MSN-MSNG(3-2間)（Ω）",
            "旋转变压器线间电阻MG2 MSN-MSNG(3-2間)判定",
            "多列标识"
        ]
    }, {
        "tableName": "ISS",
        "colName": [
            "计测日时",
            "P锁定判定",
            "notP判定",
            "官能判定",
            "MG1探测接触电阻U-V间 Ω",
            "MG1探测接触电阻U-V间判定",
            "MG1探测接触电阻V-W间 Ω",
            "MG1探测接触电阻V-W间判定",
            "MG2探测接触电阻U-V间 Ω",
            "MG2探测接触电阻U-V间判定",
            "MG2探测接触电阻V-W间 Ω",
            "MG2探测接触电阻V-W间判定",
            "MG1旋转变压器偏移値",
            "MG1旋转变压器偏移値判定",
            "MG2旋转变压器偏移値",
            "MG2旋转变压器偏移値判定",
            "MG1反向电压U-V Ω",
            "MG1反向电压U-V判定",
            "MG1反向电压V-W Ω",
            "MG1反向电压V-W判定",
            "MG2反向电压U-V Ω",
            "MG2反向电压U-V判定",
            "MG2反向电压V-W Ω",
            "MG2反向电压V-W判定",
            "齿轮比確認MG2旋转数",
            "齿轮比確認判定",
            "异音測定加速判定",
            "异音測定減速判定",
            "加速側计数器综合判定",
            "加速側最终综合判定",
            "減速側计数器综合判定",
            "減速側最终综合判定",
            "加速側差速器轴平均負荷扭矩",
            "加速側差速器轴平均負荷扭矩判定",
            "減速側差速器轴平均負荷扭矩",
            "減速側差速器轴平均負荷扭矩判定",
            "油温传感器温度",
            "加速側计数器区间1噪音",
            "加速側计数器区间1频率",
            "加速側计数器区间1判定",
            "加速側计数器区间2噪音",
            "加速側计数器区间2频率",
            "加速側计数器区间2判定",
            "加速側计数器区间3噪音",
            "加速側计数器区间3频率",
            "加速側计数器区间3判定",
            "加速側计数器区间4噪音",
            "加速側计数器区间4频率",
            "加速側计数器区间4判定",
            "加速側计数器区间5噪音",
            "加速側计数器区间5频率",
            "加速側计数器区间5判定",
            "加速側最终区间1噪音",
            "加速側最终区间1频率",
            "加速側最终区间1判定",
            "加速側最终区间2噪音",
            "加速側最终区间2频率",
            "加速側最终区间2判定",
            "加速側最终区间3噪音",
            "加速側最终区间3频率",
            "加速側最终区间3判定",
            "加速側最终区间4噪音",
            "加速側最终区间4频率",
            "加速側最终区间4判定",
            "加速側最终区间5噪音",
            "加速側最终区间5频率",
            "加速側最终区间5判定",
            "減速側计数器区间1噪音",
            "減速側计数器区间1频率",
            "減速側计数器区间1判定",
            "減速側计数器区间2噪音",
            "減速側计数器区间2频率",
            "減速側计数器区间2判定",
            "減速側计数器区间3噪音",
            "減速側计数器区间3频率",
            "減速側计数器区间3判定",
            "減速側计数器区间4噪音",
            "減速側计数器区间4频率",
            "減速側计数器区间4判定",
            "減速側计数器区间5噪音",
            "減速側计数器区间5频率",
            "減速側计数器区间5判定",
            "減速側最终区间1噪音",
            "減速側最终区间1频率",
            "減速側最终区间1判定",
            "減速側最终区间2噪音",
            "減速側最终区间2频率",
            "減速側最终区间2判定",
            "減速側最终区间3噪音",
            "減速側最终区间3频率",
            "減速側最终区间3判定",
            "減速側最终区间4噪音",
            "減速側最终区间4频率",
            "減速側最终区间4判定",
            "減速側最终区间5噪音",
            "減速側最终区间5频率",
            "減速側最终区间5判定",
            "加速颜色映射综合判定",
            "減速颜色映射综合判定",
            "①加速颜色映射判定噪音(dB)",
            "①加速颜色映射判定频率(Hz)",
            "①加速颜色映射判定旋转数(rpm)",
            "①加速颜色映射判定次数",
            "①加速颜色映射判定",
            "①減速颜色映射判定噪音(dB)",
            "①減速颜色映射判定频率(Hz)",
            "①減速颜色映射判定旋转数(rpm)",
            "①減速颜色映射判定次数",
            "①減速颜色映射判定",
            "②加速颜色映射判定噪音(dB)",
            "②加速颜色映射判定频率(Hz)",
            "②加速颜色映射判定旋转数(rpm)",
            "②加速颜色映射判定次数",
            "②加速颜色映射判定",
            "②減速颜色映射判定噪音(dB)",
            "②減速颜色映射判定频率(Hz)",
            "②減速颜色映射判定旋转数(rpm)",
            "②減速颜色映射判定次数",
            "②減速颜色映射判定",
            "③加速颜色映射判定噪音(dB)",
            "③加速颜色映射判定频率(Hz)",
            "③加速颜色映射判定旋转数(rpm)",
            "③加速颜色映射判定次数",
            "③加速颜色映射判定",
            "③減速颜色映射判定噪音(dB)",
            "③減速颜色映射判定频率(Hz)",
            "③減速颜色映射判定旋转数(rpm)",
            "③減速颜色映射判定次数",
            "③減速颜色映射判定",
            "多行识别",
            "油泵油圧",
            "油泵油圧判定",
            "溢流阀油圧",
            "溢流阀油圧判定"
        ]
    }, {
        tableName: "防错防误26计测日時",
        colName: ["防错防误26计测日時"]
    }, {
        tableName: "防错防误28计测日時",
        colName: ["防错防误28计测日時"]
    }, {
        tableName: "防错防误29计测日時",
        colName: ["防错防误29计测日時"]
    }, {
        tableName: "刻印",
        colName: ["刻印计测日時"]
    }, {
        tableName: "防错防误30计测日時",
        colName: ["防错防误30计测日時"]
    }, {
        tableName: "防错防误31计测日時",
        colName: ["防错防误31计测日時"]
    }, {
        tableName: "外観検査",
        colName: ["外観検査计测日時"]
    }, {
        tableName: "防错防误32计测日時",
        colName: ["防错防误32计测日時"]
    }, {
        tableName: "HSG セット",
        colName: ["HSG セット计测日時"]
    }, {
        tableName: "D托盘 重量",
        colName: ["托盘 No"]
    }
]
const taData = [
        "PokayokeDate15",
        "PokayokeDate16",
        "TagMeas",
        "PokayokeDate18",
        "PokayokeDate19",
        "ShimMeas",
        "ShimHsgt7",
        "ShimHsgt5",
        "ShimHsgt3",
        "ShimHsgt1",
        "ShimShellt8",
        "ShimShellt6",
        "ShimCaset4",
        "ShimCaset2",
        "ShimSlider",
        "ShimGrade",
        "ShimGradeCo",
        "ShimGradeIn",
        "ShimValueDiff",
        "ShimValuePin",
        "ShimValueCo",
        "ShimValueIn",
        "ShimGear",
        "Shimt1t2",
        "Shimt3t4",
        "Shimt5t6",
        "Shimt7t8",
        "Shimt1Main",
        "Shimt3Main",
        "Shimt5Main",
        "Shimt7Main",
        "Shimt2Main",
        "Shimt4Main",
        "Shimt6Main",
        "Shimt8Main",
        "Hsg1MeasDate",
        "Hsg1Stroke",
        "Hsg1PtLoad",
        "Hsg1FinalStroke",
        "Hsg1FinalLoad",
        "Hsg1StrokeSec",
        "Hsg1PtLoadSec",
        "Hsg1FinalStrokeSec",
        "Hsg1FinalLoadSec",
        "Hsg1MainStroke",
        "Hsg1Abvalue",
        "Hsg2Date",
        "Hsg2Stroke",
        "Hsg2PtLoad",
        "Hsg2FinalStroke",
        "Hsg2FinalLoad",
        "Hsg2StrokeSec",
        "Hsg2PtLoadSec",
        "Hsg2FinalStrokeSec",
        "Hsg2FinalLoadSec",
        "Hsg2MainStroke",
        "Hsg2Abvalue",
        "PokayokeDate20",
        "HsgFigpdate",
        "HsgFigpportrait",
        "HsgFitDate",
        "Hsg1Date",
        "Hsg1AngleAxis1",
        "Hsg1CodeAxis1",
        "Hsg1AngleAxis2",
        "Hsg1CodeAxis2",
        "Hsg1AngleAxis3",
        "Hsg1CodeAxis3",
        "Hsg1AngleAxis4",
        "Hsg1CodeAxis4",
        "Hsg1AngleAxis5",
        "Hsg1CodeAxis5",
        "Hsg1AngleAxis6",
        "Hsg1CodeAxis6",
        "Hsg1AngleAxis7",
        "Hsg1CodeAxis7",
        "Hsg1AngleAxis8",
        "Hsg1CodeAxis8",
        "Hsg1AngleAxis9",
        "Hsg1CodeAxis9",
        "Hsg1AngleAxis10",
        "Hsg1CodeAxis10",
        "Hsg1AngleAxis11",
        "Hsg1CodeAxis11",
        "Hsg1Ab",
        "Hsg2MaesDate",
        "Hsg2AngleAxis1",
        "Hsg2CodeAxis1",
        "Hsg2AngleAxis2",
        "Hsg2CodeAxis2",
        "Hsg2AngleAxis3",
        "Hsg2CodeAxis3",
        "Hsg2AngleAxis4",
        "Hsg2CodeAxis4",
        "Hsg2AngleAxis5",
        "Hsg2CodeAxis5",
        "Hsg2AngleAxis6",
        "Hsg2CodeAxis6",
        "Hsg2AngleAxis7",
        "Hsg2CodeAxis7",
        "Hsg2AngleAxis8",
        "Hsg2CodeAxis8",
        "Hsg2AngleAxis9",
        "Hsg2CodeAxis9",
        "Hsg2AngleAxis10",
        "Hsg2CodeAxis10",
        "Hsg2AngleAxis11",
        "Hsg2CodeAxis11",
        "Hsg2Ab",
        "PokayokeDate27",
        "Os1date",
        "Os1lhstroke",
        "Os1lhload",
        "Os1lhfinalStroke",
        "Os1lhfinalLoad",
        "Os1rhstroke",
        "Os1rhload",
        "Os1rhfinalStroke",
        "Os1rhfinalLoad",
        "Os1mainStroke",
        "Os1abvalue",
        "Os2date",
        "Os2stroke",
        "Os2ptLoad",
        "Os2finalStroke",
        "Os2finalLoad",
        "Os2mainStroke",
        "Os2abvalue",
        "PokayokeDate21",
        "AssyDate",
        "PokayokeDate22",
        "PokayokeDate23",
        "PokayokeDate24",
        "PokayokeDate25",
        "LeakDate",
        "LeakGear",
        "LeakCorrect",
        "LeakTempDec",
        "LeakMain",
        "LeakFrontOil",
        "LeakEtaf",
        "LeakLastOil",
        "LeakTemp",
        "LeakHumidity",
        "LeakOilTempDec",
        "LeakMg1mohm",
        "LeakMg1dec",
        "LeakMg2mohm",
        "LeakMg2dec",
        "LeakMg1dielectric",
        "LeakMg1dielectricDec",
        "LeakMg2dielectric",
        "LeakMg2dielectricDec",
        "LeakThermistor",
        "LeakThermistorDec",
        "LeakResolver",
        "LeakResolverDec",
        "LeakOilTempMohmDec",
        "LeakMg1uv",
        "LeakMg1uvdec",
        "LeakMg1uw",
        "LeakMg1uwdec",
        "LeakMg1wu",
        "LeakMg1wudec",
        "LeakMg2uv",
        "LeakMg2uvdec",
        "LeakMg2uw",
        "LeakMg2uwdec",
        "LeakMg2wu",
        "LeakMg2wudec",
        "LeakThermistorMg1",
        "LeakThermistorMg1dec",
        "LeakThermistorMg2",
        "LeakThermistorMg2dec",
        "LeakOilLine",
        "LeakOilLineDec",
        "LeakMg1rotateDec",
        "LeakMg2rotateDec",
        "LeakMg1wmg2v",
        "LeakOil",
        "LeakMg196",
        "LeakMg196dec",
        "LeakMg11410",
        "LeakMg11410dec",
        "LeakMg1135",
        "LeakMg1135dec",
        "LeakMg281",
        "LeakMg281dec",
        "LeakMg2117",
        "LeakMg2117dec",
        "LeakMg232",
        "LeakMg232dec",
        "LeakCol",
        "IssDate",
        "IssP",
        "IssnotP",
        "IssFunction",
        "IssMg1uv",
        "IssMg1uvdec",
        "IssMg1vw",
        "IssMg1vwdec",
        "IssMg2uv",
        "IssMg2uvdec",
        "IssMg2vw",
        "IssMg2vwdec",
        "IssMg1value",
        "IssMg1valueDec",
        "IssMg2value",
        "IssMg2valueDec",
        "IssMg1disUv",
        "IssMg1disUvdec",
        "IssMg1disVw",
        "IssMg1disVwdec",
        "IssMg2disUv",
        "IssMg2disUvdec",
        "IssMg2disVw",
        "IssMg2disVwdec",
        "IssMg2gear",
        "IssMg2gearDec",
        "IssRevup",
        "IssSlowup",
        "IssRevCounter",
        "IssRevLast",
        "IssSlowCounter",
        "IssSlowLast",
        "IssRevAvg",
        "IssRevAvgDec",
        "IssSlowAvg",
        "IssSlowAvgDec",
        "IssOilTemp",
        "IssRev1Noise",
        "IssRev1Rate",
        "IssRev1",
        "IssRev2Noise",
        "IssRev2Rate",
        "IssRev2",
        "IssRev3Noise",
        "IssRev3Rate",
        "IssRev3",
        "IssRev4Noise",
        "IssRev4Rate",
        "IssRev4",
        "IssRev5Noise",
        "IssRev5Rate",
        "IssRev5",
        "IssRevLast1Noise",
        "IssRevLast1Rate",
        "IssRevLast1",
        "IssRevLast2Noise",
        "IssRevLast2Rate",
        "IssRevLast2",
        "IssRevLast3Noise",
        "IssRevLast3Rate",
        "IssRevLast3",
        "IssRevLast4Noise",
        "IssRevLast4Rate",
        "IssRevLast4",
        "IssRevLast5Noise",
        "IssRevLast5Rate",
        "IssRevLast5",
        "IssSlow1Noise",
        "IssSlow1Rate",
        "IssSlow1",
        "IssSlow2Noise",
        "IssSlow2Rate",
        "IssSlow2",
        "IssSlow3Noise",
        "IssSlow3Rate",
        "IssSlow3",
        "IssSlow4Noise",
        "IssSlow4Rate",
        "IssSlow4",
        "IssSlow5Noise",
        "IssSlow5Rate",
        "IssSlow5",
        "IssSlowLast1Noise",
        "IssSlowLast1Rate",
        "IssSlowLast1",
        "IssSlowLast2Noise",
        "IssSlowLast2Rate",
        "IssSlowLast2",
        "IssSlowLast3Noise",
        "IssSlowLast3Rate",
        "IssSlowLast3",
        "IssSlowLast4Noise",
        "IssSlowLast4Rate",
        "IssSlowLast4",
        "IssSlowLast5Noise",
        "IssSlowLast5Rate",
        "IssSlowLast5",
        "IssRevColor",
        "IssSlowColor",
        "IssRevColor1dB",
        "IssRevColor1Hz",
        "IssRevColor1rpm",
        "IssRevColor1sum",
        "IssRevColor1Dec",
        "IssSlowColor1dB",
        "IssSlowColor1Hz",
        "IssSlowColor1rpm",
        "IssSlowColor1sum",
        "IssSlowColor1Dec",
        "IssRevColor2dB",
        "IssRevColor2Hz",
        "IssRevColor2rpm",
        "IssRevColor2sum",
        "IssRevColor2Dec",
        "IssSlowColor2dB",
        "IssSlowColor2Hz",
        "IssSlowColor2rpm",
        "IssSlowColor2sum",
        "IssSlowColor2Dec",
        "IssRevColor3dB",
        "IssRevColor3Hz",
        "IssRevColor3rpm",
        "IssRevColor3sum",
        "IssRevColor3Dec",
        "IssSlowColor3dB",
        "IssSlowColor3Hz",
        "IssSlowColor3rpm",
        "IssSlowColor3sum",
        "IssSlowColor3Dec",
        "IssCol",
        "IssOilPump",
        "IssOilPumpDec",
        "IssReliefValve",
        "IssReliefValveDec",
        "PokayokeDate26",
        "PokayokeDate28",
        "PokayokeDate29",
        "EngravingData",
        "PokayokeDate30",
        "PokayokeDate31",
        "InspectionDate",
        "PokayokeDate32",
        "HsgSetDate",
        "DtrayWeight"
]

const BasicDatezh = [
    {
        tableName: "特定列",
        colName: ["采集时间", "ta出荷"]
    }
]
const BasicDate = [
    "CollectionDate",
    "ShipmentSerial"
]
const TaTable = publicData.exportData(TATableZh, taData)
const NewTaTable = NewBasicTable.BasicDateList.concat(TaTable)
const AllTatable = publicData.exportData(BasicDatezh, BasicDate).concat(NewTaTable)
export default { TaTable, TATableZh, AllTatable,NewTaTable }
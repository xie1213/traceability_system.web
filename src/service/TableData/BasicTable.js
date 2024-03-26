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
            "拒绝"
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

// const fieidData = [
//     "interNo",
//     "caseDec",
//     "rrCoverDec",
//     "parkingDec",
//     "gearDec",
//     "defLingDec",
//     "hsgDec",
//     "mg1statorDec",
//     "mg2statorDec",
//     "mg1rotorDec",
//     "mg2rotorDec",
//     "lineDec",
//     "dfcase",
//     "oilPump",
//     "caseSerial",
//     "hsgSerial",
//     "mg1sserial",
//     "mg2sserial",
//     "mg1rserial",
//     "mg2rserial",
//     "coDriveSerial",
//     "moDriveSerial",
//     "drivenSerial",
//     "dorpinSerial",
//     "dfringSerial",
//     "dfcaseSerial",
//     "rrcoverSerial",
//     "shipmentSerial",
//     "rropSerial",
//     "rotorShaftTrans",
//     "rotorCoreTrans",
//     "rotorHeating",
//     "rotorShaftPress",
//     "rotorNutTight",
//     "rotorForeignSuction",
//     "rotorNutCrimpMg1press",
//     "rotorResolverPress",
//     "rotorReject",
//     "rotorMagnetization",
//     "rotorExtractionInsp",
//     "rotorShippingInsp",
//     "rotorTamg2shaftTrans",
//     "rotorTamg2coreTrans",
//     "rotorTamg2heating",
//     "rotorTamg2shaftPress",
//     "rotorTamg2nutTight",
//     "rotorTamg2foreignSuction",
//     "rotorTamg2nutCrimpMg1press",
//     "rotorTamg2resolverPress",
//     "rotorTamg2reject",
//     "rotorTamg2magnetization",
//     "rotorTamg2extractionInsp",
//     "rotorTamg2shippingInsp",
//     "motorMtrCode",
//     "motorSngen",
//     "motorHsgSrfBrgAm",
//     "motorHsgSrfKnockPam",
//     "motorCoolPipeMw",
//     "motorTermBoardMw",
//     "motorRrCoverSrfOutBrgAm",
//     "motorRrCoverSrfKnockPam",
//     "motorMg1statorInsAm",
//     "motorMg2statorInsAm",
//     "motorHarnEscMw",
//     "motorMg12statorTightAm",
//     "motorThermMw",
//     "motorCoolPipeMw2",
//     "motorMg12rotorAssem",
//     "motorFipgapp",
//     "motorRrCoverAssem",
//     "motorRrCoverTight1",
//     "motorRrCoverTight2",
//     "motorInvMw",
//     "motorMw1",
//     "motorMw2",
//     "motorPrevStn",
//     "motorMwco0",
//     "motorMwco1",
//     "motorMwco2",
//     "motorMwco3",
//     "motorReject",
//     "coverSubIdsetSpare",
//     "coverSubRrCovSetDmread",
//     "coverSubRrCovBrgPressEquip",
//     "coverSubMw1",
//     "coverSubMw2",
//     "coverSubMw3",
//     "coverSubMw4",
//     "coverSubRrRevEquip",
//     "coverSubWaterConnTighten",
//     "coverSubReject",
//     "defDfcaseRead",
//     "defDfpinionShaftEquip",
//     "defDiffOperMeasureEquip",
//     "defTweezersMw",
//     "defDiffPinionPress",
//     "dmread",
//     "gearPressIn1",
//     "gearPressIn2",
//     "slnffastening",
//     "slnfriveting",
//     "diffBrgPressIn",
//     "diffBoltTight1",
//     "diffBoltTight2",
//     "revRivetConfirm",
//     "reject",
//     "idwrite",
//     "hsgSubShimSel",
//     "hsgBrgPressIn1",
//     "hsgBrgPressIn2",
//     "gearAssembly1",
//     "oilPumpAssembly",
//     "subShimSel",
//     "shimSet",
//     "lubPipeAssem",
//     "caseFipgapp",
//     "assemJoining1",
//     "assemTight1",
//     "assemTight2",
//     "drainPlugTight",
//     "diffOilsealPress1",
//     "diffOilsealPress2",
//     "fillerTight",
//     "assyUpright",
//     "idexchange",
//     "oilCoolerAssem",
//     "mandrelAttach",
//     "preprocessing",
//     "assyLeakTest",
//     "insulation",
//     "oilInjection",
//     "assyNoiseTest",
//     "mw1",
//     "mw2",
//     "mw3",
//     "serialStamping",
//     "shippingPrep1",
//     "shippingPrep2",
//     "visualInsp",
//     "fipgreject",
//     "labelPrinting",
//     "reshuffle"
// ]
//循环紧固角度 判定代码
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

//返回数据
function allMappedArrays(TableData, ColNameData) {

    // let currentIndex = 0;
    let mappedArrays = [];
    ColNameData;
    
    // TableData.forEach(data => {
       
    //     const mappedArray = data.colName.map(col => {
    //         return {
    //             item: col,
    //             val: ColNameData[currentIndex++]
    //         }
    //     });
    //     console.log(mappedArray);
    //     //mappedArrays.push(mappedArray);
    // });

    // 合并所有映射数组
    return mappedArrays.reduce((acc, curr) => {
        return [...acc, ...curr];
    }, []);

}
// const exportData = (TableData, Motordata) => {
//     const newObj = TableData.map((table) => {
//         // 遍历表格的列名，并从 Motordata 中获取对应数量的数据
//         const ColVal = table.colName.map((col) => {
//             // 检查是否有足够的 Motordata 数据
//             if (dataIndex < Motordata.length) {
//                 const data = Motordata[dataIndex++];
//                 return {
//                     col: col,
//                     val: data
//                 };
//             } else {
//                 return null; // 如果 Motordata 中的数据不足，则推入 null
//             }
//         });

//         return {
//             title: table.tableName,
//             val: ColVal
//         };
//     });
//     return newObj;
// };

let dataIndex = 0;
function exportData(TableData, fieidData){
    const newObj = TableData.map((table) => {
        // 遍历表格的列名，并从 Motordata 中获取对应数量的数据
        const ColVal = table.colName.map((col) => {
            // 检查是否有足够的 Motordata 数据
            if (dataIndex < fieidData.length) {
                const data = fieidData[dataIndex++];
                return {
                    col: col,
                    val: data
                };
            } else {
                return null; // 如果 Motordata 中的数据不足，则推入 null
            }
        });

        return {
            title: table.tableName,
            val: ColVal
        };
    });
    return newObj;
}

// 新增:合并全部mappedArray到一个数组  
export default { BasicDate, parseData, allMappedArrays, addTwoItem ,exportData}
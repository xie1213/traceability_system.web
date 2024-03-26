<template>
    <div style="height: 800px;">
        <vxe-table :data="tableData" v-bind="TableConfig">
            <vxe-colgroup title="特定列" fixed="left">
                <vxe-column field="CollectionDate" title="采集时间" fixed="left" :formatter="formatDate" sortable />
                <vxe-column field="DorpinSerial" title="差速器销序列" fixed="left" sortable></vxe-column>

            </vxe-colgroup>
            <vxe-colgroup title="基本信息">
                <vxe-column field="InterNo" title="接口No." sortable></vxe-column>
                <vxe-column field="CaseDec" title="箱体识别" sortable></vxe-column>
                <vxe-column field="RrCoverDec" title="Rr盖判别" sortable></vxe-column>
                <vxe-column field="ParkingDec" title="停车识别" sortable></vxe-column>
                <vxe-column field="GearDec" title="齿轮识别" sortable></vxe-column>
                <vxe-column field="DefLingDec" title="变形判别" sortable></vxe-column>
                <vxe-column field="HsgDec" title="Hsg识别" sortable></vxe-column>
                <vxe-column field="Mg1statorDec" title="MG1定子判別" sortable></vxe-column>
                <vxe-column field="Mg2statorDec" title="MG2定子判別" sortable></vxe-column>
                <vxe-column field="Mg1rotorDec" title="MG1转子判別" sortable></vxe-column>
                <vxe-column field="Mg2rotorDec" title="MG2转子判別" sortable></vxe-column>
                <vxe-column field="LineDec" title="线体判別" sortable></vxe-column>
                <vxe-column field="Dfcase" title="DF箱体" sortable></vxe-column>
                <vxe-column field="OilPump" title="油泵" sortable></vxe-column>
            </vxe-colgroup>

            <vxe-colgroup title="序列">
                <vxe-column field="CaseSerial" title="CASE序列" sortable></vxe-column>
                <vxe-column field="HsgSerial" title="HSG序列" sortable></vxe-column>
                <vxe-column field="Mg1sserial" title="MG1定子序列" sortable></vxe-column>
                <vxe-column field="Mg2sserial" title="MG2定子序列" sortable></vxe-column>
                <vxe-column field="Mg1rserial" title="MG1转子序列" sortable></vxe-column>
                <vxe-column field="Mg2rserial" title="MG2转子序列" sortable></vxe-column>
                <vxe-column field="CoDriveSerial" title="计数器驱动器序列" sortable></vxe-column>
                <vxe-column field="MoDriveSerial" title="MG2修正序列" sortable></vxe-column>
                <vxe-column field="DrivenSerial" title="受驱动序列" sortable></vxe-column>
                <vxe-column field="DfringSerial" title="齿圈序列" sortable />
                <vxe-column field="DfcaseSerial" title="差速器箱序列" sortable></vxe-column>
                <vxe-column field="RrcoverSerial" title="Rr盖序列" sortable></vxe-column>
                <vxe-column field="ShipmentSerial" title="出货序列" sortable></vxe-column>
                <vxe-column field="RropSerial" title="Rr油泵序列" sortable></vxe-column>
            </vxe-colgroup>

            <vxe-colgroup title="转子工序履历">
                <vxe-column field="RotorShaftTrans" title="轴移载" sortable></vxe-column>
                <vxe-column field="RotorCoreTrans" title="铁芯移载" sortable></vxe-column>
                <vxe-column field="RotorHeating" title="加热" sortable></vxe-column>
                <vxe-column field="RotorShaftPress" title="轴圧入" sortable></vxe-column>
                <vxe-column field="RotorNutTight" title="螺母紧固" sortable></vxe-column>
                <vxe-column field="RotorForeignSuction" title="工序履历(异物吸引)" sortable></vxe-column>
                <vxe-column field="RotorNutCrimpMg1press" title="螺母铆接MG1针压入" sortable></vxe-column>
                <vxe-column field="RotorResolverPress" title="旋转变压器压入" sortable></vxe-column>
                <vxe-column field="RotorReject" title="排斥" sortable></vxe-column>
                <vxe-column field="RotorMagnetization" title="磁性磁化" sortable></vxe-column>
                <vxe-column field="RotorExtractionInsp" title="工序履历(抽样检查)" sortable></vxe-column>
                <vxe-column field="RotorShippingInsp" title="工序履历(转子出厂检查综合判定)" sortable></vxe-column>
            </vxe-colgroup>

            <vxe-colgroup title="转子工序履历(TA区域MG2)">
                <vxe-column field="RotorTamg2shaftTrans" title="轴移载" sortable></vxe-column>
                <vxe-column field="RotorTamg2coreTrans" title="铁芯移载" sortable></vxe-column>
                <vxe-column field="RotorTamg2heating" title="加热" sortable></vxe-column>
                <vxe-column field="RotorTamg2shaftPress" title="轴圧入" sortable></vxe-column>
                <vxe-column field="RotorTamg2nutTight" title="螺母紧固" sortable></vxe-column>
                <vxe-column field="RotorTamg2foreignSuction" title="工序履历(异物吸引)" sortable></vxe-column>
                <vxe-column field="RotorTamg2nutCrimpMg1press" title="螺母铆接MG1针压入" sortable></vxe-column>
                <vxe-column field="RotorTamg2resolverPress" title="旋转变压器压入" sortable></vxe-column>
                <vxe-column field="RotorTamg2reject" title="排斥" sortable></vxe-column>
                <vxe-column field="RotorTamg2magnetization" title="磁性磁化" sortable></vxe-column>
                <vxe-column field="RotorTamg2extractionInsp" title="工序履历(抽样检查)" sortable></vxe-column>
                <vxe-column field="RotorTamg2shippingInsp" title="工序履历(转子出厂检查综合判定)" sortable></vxe-column>
            </vxe-colgroup>

            <vxe-colgroup title="马达工序履历">
                <vxe-column field="MotorMtrCode" title="ID写入" sortable></vxe-column>
                <vxe-column field="MotorSngen" title="序号发生箱子集" sortable></vxe-column>
                <vxe-column field="MotorHsgSrfBrgAm" title="Hsg面箱体BrgAM" sortable></vxe-column>
                <vxe-column field="MotorHsgSrfKnockPam" title="Hsg面定位压入AM" sortable></vxe-column>
                <vxe-column field="MotorCoolPipeMw" title="冷却管手工作业" sortable></vxe-column>
                <vxe-column field="MotorTermBoardMw" title="端子台手工作业" sortable></vxe-column>
                <vxe-column field="MotorRrCoverSrfOutBrgAm" title="Rr罩面外BrgAM" sortable></vxe-column>
                <vxe-column field="MotorRrCoverSrfKnockPam" title="Rr罩面定位压入AM" sortable></vxe-column>
                <vxe-column field="MotorMg1statorInsAm" title="MG1定子插入AM" sortable></vxe-column>
                <vxe-column field="MotorMg2statorInsAm" title="MG2定子插入AM" sortable></vxe-column>
                <vxe-column field="MotorHarnEscMw" title="线束释放手工作业" sortable></vxe-column>
                <vxe-column field="MotorMg12statorTightAm" title="MG1、2定子紧固AM" sortable></vxe-column>
                <vxe-column field="MotorThermMw" title="热敏电阻手工作业" sortable></vxe-column>
                <vxe-column field="MotorCoolPipeMw2" title="冷却管手工作业" sortable></vxe-column>
                <vxe-column field="MotorMg12rotorAssem" title="G1、2转子组装" sortable></vxe-column>
                <vxe-column field="MotorFipgapp" title="FIPG涂布" sortable></vxe-column>
                <vxe-column field="MotorRrCoverAssem" title="安装Rr罩子" sortable></vxe-column>
                <vxe-column field="MotorRrCoverTight1" title="Rr罩子紧固1" sortable></vxe-column>
                <vxe-column field="MotorRrCoverTight2" title="Rr罩子紧固2" sortable></vxe-column>
                <vxe-column field="MotorInvMw" title="翻转机" sortable></vxe-column>
                <vxe-column field="MotorMw1" title="手动作业１" sortable></vxe-column>
                <vxe-column field="MotorMw2" title="手动作业2" sortable></vxe-column>
                <vxe-column field="MotorPrevStn" title="前st" sortable></vxe-column>
                <vxe-column field="MotorMwco0" title="手动作业Co0" sortable></vxe-column>
                <vxe-column field="MotorMwco1" title="手作業Co1" sortable></vxe-column>
                <vxe-column field="MotorMwco2" title="手动作业Co2" sortable></vxe-column>
                <vxe-column field="MotorMwco3" title="手动作业Co3" sortable></vxe-column>
                <vxe-column field="MotorReject" title="拒绝确认" sortable></vxe-column>
            </vxe-colgroup>

            <vxe-colgroup title="盖体子工程履历">
                <vxe-column field="CoverSubIdsetSpare" title="备用ID组合" sortable></vxe-column>
                <vxe-column field="CoverSubRrCovSetDmread" title="Rr盖组合 DM读取" sortable></vxe-column>
                <vxe-column field="CoverSubRrCovBrgPressEquip" title="Rr罩子Brg压入设备" sortable></vxe-column>
                <vxe-column field="CoverSubMw1" title="手动作业１" sortable></vxe-column>
                <vxe-column field="CoverSubMw2" title="手动作业2" sortable></vxe-column>
                <vxe-column field="CoverSubMw3" title="手动作业３" sortable></vxe-column>
                <vxe-column field="CoverSubMw4" title="手动作业４" sortable></vxe-column>
                <vxe-column field="CoverSubRrRevEquip" title="RR反转设备" sortable></vxe-column>
                <vxe-column field="CoverSubWaterConnTighten" title="防水连接器紧固" sortable></vxe-column>
                <vxe-column field="CoverSubReject" title="拒绝" sortable></vxe-column>
            </vxe-colgroup>

            <vxe-colgroup title="差速器工序履历">
                <vxe-column field="DefDfcaseRead" title="差速器内部组装DF盒读取" sortable></vxe-column>
                <vxe-column field="DefDfpinionShaftEquip" title="DF小齿轮轴组装设备" sortable></vxe-column>
                <vxe-column field="DefDiffOperMeasureEquip" title="差速器动作、位移量测量设备" sortable></vxe-column>
                <vxe-column field="DefTweezersMw" title="插针式手动作业" sortable></vxe-column>
                <vxe-column field="DefDiffPinionPress" title="差速器销铆接" sortable></vxe-column>
            </vxe-colgroup>

            <vxe-colgroup title="齿轮子工序履历">
                <vxe-column field="Dmread" title="DM读入" sortable></vxe-column>
                <vxe-column field="GearPressIn1" title="齿轮压入１" sortable></vxe-column>
                <vxe-column field="GearPressIn2" title="齿轮压入２" sortable></vxe-column>
                <vxe-column field="Slnffastening" title="Co从动螺母紧固" sortable></vxe-column>
                <vxe-column field="Slnfriveting" title="Co从动螺母铆接" sortable></vxe-column>
                <vxe-column field="DiffBrgPressIn" title="差速器Brg压入" sortable></vxe-column>
                <vxe-column field="DiffBoltTight1" title="差速器螺栓紧固1" sortable></vxe-column>
                <vxe-column field="DiffBoltTight2" title="差速器螺栓紧固2" sortable></vxe-column>
                <vxe-column field="RevRivetConfirm" title="反转铆接确认" sortable></vxe-column>
                <vxe-column field="DamperImage" title="ダンパー画像" sortable></vxe-column>
                <vxe-column field="Reject" title="リジェクト" sortable></vxe-column>
            </vxe-colgroup>

            <vxe-colgroup title="Hsg子工序履历">
                <vxe-column field="Idwrite" title="ID写入,Hsg集" sortable></vxe-column>
                <vxe-column field="HsgSubShimSel" title="垫片选择" sortable></vxe-column>
                <vxe-column field="HsgBrgPressIn1" title="HsgBrg圧入1" sortable></vxe-column>
                <vxe-column field="HsgBrgPressIn2" title="HsgBrg圧入2" sortable></vxe-column>
            </vxe-colgroup>

            <vxe-colgroup title="合体FIPG最终工序履历">
                <vxe-column field="GearAssembly1" title="4种齿轮组装" sortable></vxe-column>
                <vxe-column field="OilPumpAssembly" title="油泵组装" sortable></vxe-column>
                <vxe-column field="SubShimSel" title="垫片选择" sortable></vxe-column>
                <vxe-column field="ShimSet" title="垫片组" sortable></vxe-column>
                <vxe-column field="LubPipeAssem" title="润滑管组装" sortable></vxe-column>
                <vxe-column field="CaseFipgapp" title="外壳FIPG涂敷" sortable></vxe-column>
                <vxe-column field="AssemJoining1" title="合体组装" sortable></vxe-column>
                <vxe-column field="AssemTight1" title="合体紧固１" sortable></vxe-column>
                <vxe-column field="AssemTight2" title="合体紧固２" sortable></vxe-column>
                <vxe-column field="DrainPlugTight" title="排水塞紧固" sortable></vxe-column>
                <vxe-column field="DiffOilsealPress1" title="差速器油封压入1" sortable></vxe-column>
                <vxe-column field="DiffOilsealPress2" title="差速器油封压入2" sortable></vxe-column>
                <vxe-column field="FillerTight" title="フィラー締付" sortable></vxe-column>
                <vxe-column field="AssyUpright" title="Assy正立" sortable></vxe-column>
                <vxe-column field="Idexchange" title="ID交换" sortable></vxe-column>
                <vxe-column field="OilCoolerAssem" title="油冷却器组装" sortable></vxe-column>
                <vxe-column field="MandrelAttach" title="心轴安装" sortable></vxe-column>
                <vxe-column field="Preprocessing" title="前期准备" sortable></vxe-column>
                <vxe-column field="AssyLeakTest" title="Assy泄漏测试" sortable></vxe-column>
                <vxe-column field="Insulation" title="绝缘" sortable></vxe-column>
                <vxe-column field="OilInjection" title="油注入" sortable></vxe-column>
                <vxe-column field="AssyNoiseTest" title="Assy噪声测试" sortable></vxe-column>
                <vxe-column field="Mw1" title="手动作业①" sortable></vxe-column>
                <vxe-column field="Mw2" title="手动作业②" sortable></vxe-column>
                <vxe-column field="Mw3" title="手动作业③" sortable></vxe-column>
                <vxe-column field="SerialStamping" title="序列刻印" sortable></vxe-column>
                <vxe-column field="ShippingPrep1" title="发货步骤1" sortable></vxe-column>
                <vxe-column field="ShippingPrep2" title="发货步骤2" sortable></vxe-column>
                <vxe-column field="VisualInsp" title="外观检查" sortable></vxe-column>
                <vxe-column field="Fipgreject" title="拒绝" sortable></vxe-column>
                <vxe-column field="LabelPrinting" title="标签发行" sortable></vxe-column>
            </vxe-colgroup>

            <vxe-colgroup title="特别">
                <vxe-column field="Reshuffle" title="修改历史记录" sortable></vxe-column>
            </vxe-colgroup>

            <vxe-colgroup title="防错防误39计测日時">
                <vxe-column field="PokayokeDate39" title="防错防误39计测日時" sortable></vxe-column>
            </vxe-colgroup>

            <vxe-colgroup title="防错防误40计测日時">
                <vxe-column field="PokayokeDate40" title="防错防误40计测日時" sortable></vxe-column>
            </vxe-colgroup>

            <vxe-colgroup title="RrBrg圧入">
                <vxe-column field="HsgBrgMeasDate" title='圧入计测日时' sortable></vxe-column>
                <vxe-column field="HsgBrgInflectPtStroke" title='圧入拐点行程1' sortable></vxe-column>
                <vxe-column field='HsgBrgInflectPtLoad' title='圧入拐点负重1' sortable></vxe-column>
                <vxe-column field='HsgBrgFinalStroke' title='圧入最终行程1' sortable></vxe-column>
                <vxe-column field='HsgBrgFinalLoad' title='圧入最终负重1' sortable></vxe-column>
                <vxe-column field='HsgBrgInflectPtStrokeSec' title='圧入拐点行程2' sortable></vxe-column>
                <vxe-column field='HsgBrgInflectPtLoadSec' title='圧入拐点负重2' sortable></vxe-column>
                <vxe-column field='HsgBrgFinalStrokeSec' title='圧入最终行程2' sortable></vxe-column>
                <vxe-column field='HsgBrgFinalLoadSec' title='圧入最终负重2' sortable></vxe-column>
                <vxe-column field='HsgBrgMaasterStroke' title='圧入主行程' sortable></vxe-column>
            </vxe-colgroup>

            <vxe-colgroup title="防错防误41计测日時">
                <vxe-column field="PokayokeDate41" title="防错防误41计测日時" sortable></vxe-column>
            </vxe-colgroup>

            <vxe-colgroup title="防错防误42计测日時">
                <vxe-column field="PokayokeDate42" title="防错防误42计测日時" sortable></vxe-column>
            </vxe-colgroup>

            <vxe-colgroup title="防错防误43计测日時">
                <vxe-column field="PokayokeDate43" title="防错防误43计测日時" sortable></vxe-column>
            </vxe-colgroup>

            <vxe-colgroup title="防错防误44计测日時">
                <vxe-column field="PokayokeDate44" title="防错防误44计测日時" sortable></vxe-column>
            </vxe-colgroup>

            <vxe-colgroup title="翻转机">
                <vxe-column field="UpenderDate" title="翻转机计测日時" sortable></vxe-column>
            </vxe-colgroup>

            <vxe-colgroup title="防错防误45计测日時">
                <vxe-column field="PokayokeDate45" title="防错防误45计测日時" sortable></vxe-column>
            </vxe-colgroup>

            <vxe-colgroup title="拒绝">
                <vxe-column field="RejectTime" title="拒绝计测日時" sortable></vxe-column>
            </vxe-colgroup>

            <vxe-colgroup title="防错防误33计测日時">
                <vxe-column field="PokayokeDate33" title="防错防误33计测日時" sortable></vxe-column>
            </vxe-colgroup>

            <vxe-colgroup title="差速器装配">
                <vxe-column field="DgameasDate" title='计测日时' sortable></vxe-column>
                <vxe-column field='Dgapos3Axis' title='推进位置3轴' sortable></vxe-column>
                <vxe-column field='Dgaload3Axis' title='负重（电流值）3轴' sortable></vxe-column>
                <vxe-column field='Dgapos4Axis' title='推进位置4轴' sortable></vxe-column>
                <vxe-column field='Dgaload4Axis' title='负重（电流值）4轴' sortable></vxe-column>
            </vxe-colgroup>

            <vxe-colgroup title="防错防误34计测日時">
                <vxe-column field="PokayokeDate34" title="防错防误34计测日時" sortable></vxe-column>
            </vxe-colgroup>

            <vxe-colgroup title="差动齿轮测量">
                <vxe-column field='DgmmeasDate' title='计测日时' sortable></vxe-column>
                <vxe-column field='Dgmdagjudge' title='动作齿轮判定' sortable></vxe-column>
                <vxe-column field='DgmlhRh' title='変位量左' sortable></vxe-column>
                <vxe-column field='DgmRh' title='変位量右' sortable></vxe-column>
                <vxe-column field='DgmmaxTorque' title='上限扭矩' sortable></vxe-column>
                <vxe-column field='DgmminTorque' title='下限扭矩' sortable></vxe-column>
            </vxe-colgroup>

            <vxe-colgroup title="差速器销铆接">
                <vxe-column field='DprmeasDate' title='差速器计测日时' sortable></vxe-column>
                <vxe-column field='Dprfrs' title='差速器铆接最终行程' sortable></vxe-column>
                <vxe-column field='Dprfrl' title='差速器铆接最终负重' sortable></vxe-column>
                <vxe-column field='Contact' title='ワーク接触位置' sortable></vxe-column>
            </vxe-colgroup>

            <vxe-colgroup title="防错防误35计测日時">
                <vxe-column field="PokayokeDate35" title="防错防误35计测日時" sortable></vxe-column>
            </vxe-colgroup>

            <vxe-colgroup title="齿轮压入１">
                <vxe-column field='GearMeasDate' title='计测日时' sortable></vxe-column>
                <vxe-column field='GearStroke' title='拐点行程' sortable></vxe-column>
                <vxe-column field='GearLoad' title='変曲点负重' sortable></vxe-column>
                <vxe-column field='GearFinalStroke' title='最终行程' sortable></vxe-column>
                <vxe-column field='GearFinalLoad' title='最終荷负重' sortable></vxe-column>
                <vxe-column field='GearStrokeSec' title='拐点行程' sortable></vxe-column>
                <vxe-column field='GearLoadSec' title='変曲点负重' sortable></vxe-column>
                <vxe-column field='GearFinalStrokeSec' title='最终行程' sortable></vxe-column>
                <vxe-column field='GearFinalLoadSec' title='最終荷负重' sortable></vxe-column>
                <vxe-column field='GearMainStroke' title='主行程' sortable></vxe-column>
                <vxe-column field='GearAbvalue' title='A/B' sortable></vxe-column>
            </vxe-colgroup>

            <vxe-colgroup title="齿轮压入2">
                <vxe-column field='Gear2Date' title='计测日时' sortable></vxe-column>
                <vxe-column field='Gear2Stroke' title='拐点行程' sortable></vxe-column>
                <vxe-column field='Gear2Load' title='変曲点负重' sortable></vxe-column>
                <vxe-column field='Gear2FinalStroke' title='最终行程' sortable></vxe-column>
                <vxe-column field='Gear2FinalLoad' title='最終荷负重' sortable></vxe-column>
                <vxe-column field='Gear2StrokeSec' title='拐点行程' sortable></vxe-column>
                <vxe-column field='Gear2LoadSec' title='変曲点负重' sortable></vxe-column>
                <vxe-column field='Gear2FinalStrokeSec' title='最终行程' sortable></vxe-column>
                <vxe-column field='Gear2FinalLoadSec' title='最終荷负重' sortable></vxe-column>
                <vxe-column field='Gear2MainStroke' title='主行程' sortable></vxe-column>
                <vxe-column field='Gear2Abvalue' title='A/B' sortable></vxe-column>

            </vxe-colgroup>

            <vxe-colgroup title="差速器销l螺母紧固">
                <vxe-column field='DpntDate' title='计测日时' sortable></vxe-column>
                <vxe-column field='DpntTorqueAxis1' title='紧固扭矩1軸' sortable></vxe-column>
                <vxe-column field='DpntAngleAxis1' title='紧固角度1軸' sortable></vxe-column>
                <vxe-column field='DpntJudgment' title='判定代码' sortable></vxe-column>
                <vxe-column field='DpntSeating' title='着座扭矩1軸' sortable></vxe-column>
                <vxe-column field='DpntDrop' title='下降角度1軸' sortable></vxe-column>
                <vxe-column field='DpntSlack' title='松弛监视器扭矩1軸' sortable></vxe-column>

            </vxe-colgroup>

            <vxe-colgroup title="差速器销螺母铆接">
                <vxe-column field='DpnfMeasDate' title='计测日时' sortable></vxe-column>
                <vxe-column field='DpnfFinalStroke' title='最终行程' sortable></vxe-column>
                <vxe-column field='DpnfFinalLoad' title='最终负重' sortable></vxe-column>
                <vxe-column field='DpnfMainStroke' title='主行程' sortable></vxe-column>

            </vxe-colgroup>

            <vxe-colgroup title="DF BRG＋环圧入">
                <vxe-column field='Dfbrgdate' title='计测日时' sortable></vxe-column>
                <vxe-column field='Dfbrgstroke' title='拐点行程' sortable></vxe-column>
                <vxe-column field='Dfbrgload' title='拐点负重' sortable></vxe-column>
                <vxe-column field='DfbrgfinalStroke' title='最终行程' sortable></vxe-column>
                <vxe-column field='DfbrgfinalLoad' title='最终负重' sortable></vxe-column>
                <vxe-column field='DfbrgstrokeSec' title='拐点行程' sortable></vxe-column>
                <vxe-column field='DfbrgloadSec' title='拐点负重' sortable></vxe-column>
                <vxe-column field='DfbrgfinalStrokeSec' title='最终行程' sortable></vxe-column>
                <vxe-column field='DfbrgfinalLoadSec' title='最终负重' sortable></vxe-column>
                <vxe-column field='DfbrgmainStroke' title='主行程' sortable></vxe-column>
            </vxe-colgroup>

            <vxe-colgroup title="DF紧固１">
                <vxe-column field='Df1date' title='计测日时' sortable></vxe-column>
                <vxe-column field='Df1angleAxis1' title='紧固角度 1軸' sortable></vxe-column>
                <vxe-column field='Df1codeAxis1' title='第1軸 判定代码' sortable></vxe-column>
                <vxe-column field='Df1angleAxis2' title='紧固角度 2軸' sortable></vxe-column>
                <vxe-column field='Df1codeAxis2' title='第２軸 判定代码' sortable></vxe-column>
                <vxe-column field='Df1angleAxis3' title='紧固角度 3軸' sortable></vxe-column>
                <vxe-column field='Df1codeAxis3' title='第３軸 判定代码' sortable></vxe-column>
                <vxe-column field='Df1angleAxis4' title='紧固角度 4軸' sortable></vxe-column>
                <vxe-column field='Df1codeAxis4' title='第4軸 判定代码' sortable></vxe-column>
                <vxe-column field='Df1angleAxis5' title='紧固角度 5軸' sortable></vxe-column>
                <vxe-column field='Df1codeAxis5' title='第5軸 判定代码' sortable></vxe-column>
                <vxe-column field='Df1angleAxis6' title='紧固角度 6軸' sortable></vxe-column>
                <vxe-column field='Df1codeAxis6' title='第6軸 判定代码' sortable></vxe-column>
                <vxe-column field='Df1abvalue' title='A/B' sortable></vxe-column>

            </vxe-colgroup>

            <vxe-colgroup title="DF紧固2">
                <vxe-column field=Df2date title='计测日时' sortable></vxe-column>
                <vxe-column field='Df2angleAxis1' title='紧固角度 1軸' sortable></vxe-column>
                <vxe-column field='Df2codeAxis1' title='第1軸 判定代码' sortable></vxe-column>
                <vxe-column field='Df2angleAxis2' title='紧固角度 2軸' sortable></vxe-column>
                <vxe-column field='Df2codeAxis2' title='第２軸 判定代码' sortable></vxe-column>
                <vxe-column field='Df2angleAxis3' title='紧固角度 3軸' sortable></vxe-column>
                <vxe-column field='Df2codeAxis3' title='第３軸 判定代码' sortable></vxe-column>
                <vxe-column field='Df2angleAxis4' title='紧固角度 4軸' sortable></vxe-column>
                <vxe-column field='Df2codeAxis4' title='第4軸 判定代码' sortable></vxe-column>
                <vxe-column field='Df2angleAxis5' title='紧固角度 5軸' sortable></vxe-column>
                <vxe-column field='Df2codeAxis5' title='第5軸 判定代码' sortable></vxe-column>
                <vxe-column field='Df2angleAxis6' title='紧固角度 6軸' sortable></vxe-column>
                <vxe-column field='Df2codeAxis6' title='第6軸 判定代码' sortable></vxe-column>
                <vxe-column field='Df2abvalue' title=A/B sortable></vxe-column>
            </vxe-colgroup>

            <vxe-colgroup title="DF反転">
                <vxe-column field="DfreverseDate" title="DF反転计测日時" sortable></vxe-column>
                <vxe-column field="Pinposition" title="ピン検査位置" sortable></vxe-column>

            </vxe-colgroup>

            <vxe-colgroup title="防错防误36计测日時">
                <vxe-column field="PokayokeDate36" title="防错防误36计测日時" sortable></vxe-column>
            </vxe-colgroup>

            <vxe-colgroup title="防错防误37计测日時">
                <vxe-column field="PokayokeDate37" title="防错防误37计测日時" sortable></vxe-column>
            </vxe-colgroup>

            <vxe-colgroup title="防错防误38计测日時">
                <vxe-column field="PokayokeDate38" title="防错防误38计测日時" sortable></vxe-column>
            </vxe-colgroup>

            <vxe-colgroup title="MG1磁化">
                <vxe-column field='Mg1workTemp' title='MG1工件温度℃' sortable></vxe-column>
                <vxe-column field='Mg1fluxValue' title='MG1通量值' sortable></vxe-column>
                <vxe-column field='Mg1dec' title='MG1判定' sortable></vxe-column>
            </vxe-colgroup>

            <vxe-colgroup title="MG2磁化">
                <vxe-column field='Mg2workTemp' title='MG2工件温度℃' sortable></vxe-column>
                <vxe-column field='Mg2fluxValue' title='MG2通量值' sortable></vxe-column>
                <vxe-column field='Mg2dec' title='MG2判定' sortable></vxe-column>
            </vxe-colgroup>

            <vxe-colgroup title="轴移載计测日時">
                <vxe-column field="Asldate" title="轴移載计测日時" sortable></vxe-column>
            </vxe-colgroup>

            <vxe-colgroup title="铁芯移載计测日時">
                <vxe-column field="Ictldate" title="铁芯移載计测日時" sortable></vxe-column>
            </vxe-colgroup>

            <vxe-colgroup title="转子铁芯序列">
                <vxe-column field="Rcserial" title="转子铁芯序列" sortable></vxe-column>
            </vxe-colgroup>

            <vxe-colgroup title="轴序列">
                <vxe-column field="AxisSerial" title="轴序列" sortable></vxe-column>
            </vxe-colgroup>

            <vxe-colgroup title="铁芯加熱">
                <vxe-column field='ProcDate' title='加工開始日時' sortable></vxe-column>
                <vxe-column field='IsRcheat' title='铁芯加熱有無' sortable></vxe-column>
                <vxe-column field='HeatSt' title='加熱ST' sortable></vxe-column>
                <vxe-column field='HeatProcedure' title='加热程序' sortable></vxe-column>
                <vxe-column field='RoomTemp' title='室温（℃）' sortable></vxe-column>
                <vxe-column field='AxisTemp' title='轴温度（℃）' sortable></vxe-column>
                <vxe-column field='CoreBefore' title='加熱前铁芯温度（℃）' sortable></vxe-column>
                <vxe-column field='CoreAfter' title='加熱完了時铁芯温度（℃）' sortable></vxe-column>
                <vxe-column field='Ihbefore' title='加熱前IH盘管温度（℃）' sortable></vxe-column>
                <vxe-column field='Ihafter' title='加熱後IH盘管温度（℃）' sortable></vxe-column>
                <vxe-column field='Cdtemp' title='冷却空气温度（℃）' sortable></vxe-column>
                <vxe-column field='HeatTime' title='加熱通電時間(秒' sortable></vxe-column>
                <vxe-column field='HeatOutput' title='加熱输出(％）' sortable></vxe-column>
                <vxe-column field='HeatEndTime' title='加熱完了日時' sortable></vxe-column>
                <vxe-column field='JudgmentCode' title='判定代码' sortable></vxe-column>
            </vxe-colgroup>

            <vxe-colgroup title="轴圧入">
                <vxe-column field='Apidate' title='计测日時' sortable></vxe-column>
                <vxe-column field='Apistroke' title='拐点行程' sortable></vxe-column>
                <vxe-column field='Apiload' title='拐点负重' sortable></vxe-column>
                <vxe-column field='ApifinalStroke' title='圧入最终行程' sortable></vxe-column>
                <vxe-column field='ApimainStroke' title='主行程' sortable></vxe-column>
                <vxe-column field='ApicoreTemp' title='圧入時铁芯温度（℃）' sortable></vxe-column>
                <vxe-column field='Apisttime' title='圧入ST滞在時間(s)' sortable></vxe-column>
                <vxe-column field='ApiinitTilt' title='初始倾斜(kN/mm)' sortable></vxe-column>
                <vxe-column field='Apipos' title='偏离检测位置(mm)' sortable></vxe-column>
                <vxe-column field='ApideviationLoad' title='偏离检负重(kN)' sortable></vxe-column>
                <vxe-column field='Apicode' title='判定代码' sortable></vxe-column>
                <vxe-column field='Apimachine' title='圧入機' sortable></vxe-column>
            </vxe-colgroup>

            <vxe-colgroup title="l螺母紧固">
                <vxe-column field=Ntdate title='计测日時' sortable></vxe-column>
                <vxe-column field='NttorqueAxis1' title='紧固扭矩1軸' sortable></vxe-column>
                <vxe-column field='NtangleAxis1' title='紧固角度1軸' sortable></vxe-column>
                <vxe-column field='Ntcode' title='判定代码' sortable></vxe-column>
                <vxe-column field='Nthistory' title='抽样履历' sortable></vxe-column>
                <vxe-column field='Ntseating1' title='着座扭矩1軸' sortable></vxe-column>
                <vxe-column field='Ntdrop1' title='下降角度1軸' sortable></vxe-column>
                <vxe-column field='Ntslack1' title='松监视器扭矩1軸' sortable></vxe-column>
            </vxe-colgroup>

            <vxe-colgroup title="铆接圧入">
                <vxe-column field='Rapdate' title='计测日時' sortable></vxe-column>
                <vxe-column field='Rapbefore' title='铆接行程（0前）' sortable></vxe-column>
                <vxe-column field='Rapafter' title='铆接行程（0後）' sortable></vxe-column>
                <vxe-column field='Rapload' title='铆接荷重' sortable></vxe-column>
                <vxe-column field='RapmainStroke' title='主行程' sortable></vxe-column>
                <vxe-column field='Rapcode' title='判定代码' sortable></vxe-column>
                <vxe-column field='RapwashSensor' title='垫圈检测传感器値' sortable></vxe-column>
                <vxe-column field='RapwashMain' title='垫圈检测主値' sortable></vxe-column>
                <vxe-column field='RapwashPos' title='垫圈确认位置' sortable></vxe-column>
                <vxe-column field='Rapstroke' title='拐点行程' sortable></vxe-column>
                <vxe-column field='RaploadSec' title='拐点负重' sortable></vxe-column>
                <vxe-column field='RapfinalStroke' title='圧入最终行程' sortable></vxe-column>
                <vxe-column field='Rapmain2Stroke' title='主行程' sortable></vxe-column>
                <vxe-column field='Rapcode2' title='判定代码' sortable></vxe-column>

            </vxe-colgroup>

            <vxe-colgroup title="旋转变压器圧入">
                <vxe-column field='RtpstartDate' title='加工開始日時' sortable></vxe-column>
                <vxe-column field='Rtpstroke' title='拐点行程' sortable></vxe-column>
                <vxe-column field='Rtpload' title='拐点负重' sortable></vxe-column>
                <vxe-column field='RtpfinalStroke' title='圧入最终行程' sortable></vxe-column>
                <vxe-column field='RtpmainStroke' title='主行程' sortable></vxe-column>
                <vxe-column field='Rtpcode' title='判定代码' sortable></vxe-column>
                <vxe-column field='Rtphistory' title='抽样履历' sortable></vxe-column>
            </vxe-colgroup>
        </vxe-table>
    </div>

</template>
<script setup>
import { defineProps } from 'vue';
import { TableConfig } from '@/service/GetDataMethod/utils'
import XEUtils from 'xe-utils'

defineProps({
    tableData: Array,
})
const formatDate = ({ cellValue }) => {
  return XEUtils.toDateString(cellValue, 'yyyy-MM-dd HH:ss:mm')
}
</script>
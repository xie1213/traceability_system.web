<template>
    <div style="height: 800px">
        <vxe-table :data="tableData" v-bind="TableConfig">
            <vxe-colgroup title="特定列" fixed="left">
                <vxe-column field="CollectionDate" title="采集时间" fixed="left" sortable :formatter="formatDate" />
                <vxe-column field="ShipmentSerial" title="出荷序列" fixed="left" sortable />
            </vxe-colgroup>
            <vxe-colgroup title="基本信息">
                <vxe-column field="InterNo" title="接口No." sortable ></vxe-column>
                <vxe-column field="CaseDec" title="箱体识别" sortable ></vxe-column>
                <vxe-column field="RrCoverDec" title="Rr盖判别" sortable ></vxe-column>
                <vxe-column field="ParkingDec" title="停车识别" sortable ></vxe-column>
                <vxe-column field="GearDec" title="齿轮识别" sortable ></vxe-column>
                <vxe-column field="DefLingDec" title="变形判别" sortable ></vxe-column>
                <vxe-column field="HsgDec" title="Hsg识别" sortable ></vxe-column>
                <vxe-column field="Mg1statorDec" title="MG1定子判別" sortable ></vxe-column>
                <vxe-column field="Mg2statorDec" title="MG2定子判別" sortable ></vxe-column>
                <vxe-column field="Mg1rotorDec" title="MG1转子判別" sortable ></vxe-column>
                <vxe-column field="Mg2rotorDec" title="MG2转子判別" sortable ></vxe-column>
                <vxe-column field="LineDec" title="线体判別" sortable ></vxe-column>
                <vxe-column field="Dfcase" title="DF箱体" sortable ></vxe-column>
                <vxe-column field="OilPump" title="油泵" sortable ></vxe-column>
            </vxe-colgroup>

            <vxe-colgroup title="序列">
                <vxe-column field="CaseSerial" title="CASE序列" sortable ></vxe-column>
                <vxe-column field="HsgSerial" title="HSG序列" sortable ></vxe-column>
                <vxe-column field="Mg1sserial" title="MG1定子序列" sortable ></vxe-column>
                <vxe-column field="Mg2sserial" title="MG2定子序列" sortable ></vxe-column>
                <vxe-column field="Mg1rserial" title="MG1转子序列" sortable ></vxe-column>
                <vxe-column field="Mg2rserial" title="MG2转子序列" sortable ></vxe-column>
                <vxe-column field="CoDriveSerial" title="计数器驱动器序列" sortable ></vxe-column>
                <vxe-column field="MoDriveSerial" title="MG2修正序列" sortable ></vxe-column>
                <vxe-column field="DrivenSerial" title="受驱动序列" sortable ></vxe-column>
                <vxe-column field="DorpinSerial" title="差速器销序列" sortable ></vxe-column>
                <vxe-column field="DfringSerial" title="齿圈序列" sortable ></vxe-column>
                <vxe-column field="DfcaseSerial" title="差速器箱序列" sortable ></vxe-column>
                <vxe-column field="RrcoverSerial" title="Rr盖序列" sortable ></vxe-column>
                <vxe-column field="RropSerial" title="Rr油泵序列" sortable ></vxe-column>
            </vxe-colgroup>

            <vxe-colgroup title="转子工序履历">
                <vxe-column field="RotorShaftTrans" title="轴移载" sortable ></vxe-column>
                <vxe-column field="RotorCoreTrans" title="铁芯移载" sortable ></vxe-column>
                <vxe-column field="RotorHeating" title="加热" sortable ></vxe-column>
                <vxe-column field="RotorShaftPress" title="轴圧入" sortable ></vxe-column>
                <vxe-column field="RotorNutTight" title="螺母紧固" sortable ></vxe-column>
                <vxe-column field="RotorForeignSuction" title="工序履历(异物吸引)" sortable ></vxe-column>
                <vxe-column field="RotorNutCrimpMg1press" title="螺母铆接MG1针压入" sortable ></vxe-column>
                <vxe-column field="RotorResolverPress" title="旋转变压器压入" sortable ></vxe-column>
                <vxe-column field="RotorReject" title="排斥" sortable ></vxe-column>
                <vxe-column field="RotorMagnetization" title="磁性磁化" sortable ></vxe-column>
                <vxe-column field="RotorExtractionInsp" title="工序履历(抽样检查)" sortable ></vxe-column>
                <vxe-column field="RotorShippingInsp" title="工序履历(转子出厂检查综合判定)" sortable ></vxe-column>
            </vxe-colgroup>

            <vxe-colgroup title="转子工序履历(TA区域MG2)">
                <vxe-column field="RotorTamg2shaftTrans" title="轴移载" sortable ></vxe-column>
                <vxe-column field="RotorTamg2coreTrans" title="铁芯移载" sortable ></vxe-column>
                <vxe-column field="RotorTamg2heating" title="加热" sortable ></vxe-column>
                <vxe-column field="RotorTamg2shaftPress" title="轴圧入" sortable ></vxe-column>
                <vxe-column field="RotorTamg2nutTight" title="螺母紧固" sortable ></vxe-column>
                <vxe-column field="RotorTamg2foreignSuction" title="工序履历(异物吸引)" sortable ></vxe-column>
                <vxe-column field="RotorTamg2nutCrimpMg1press" title="螺母铆接MG1针压入" sortable ></vxe-column>
                <vxe-column field="RotorTamg2resolverPress" title="旋转变压器压入" sortable ></vxe-column>
                <vxe-column field="RotorTamg2reject" title="排斥" sortable ></vxe-column>
                <vxe-column field="RotorTamg2magnetization" title="磁性磁化" sortable ></vxe-column>
                <vxe-column field="RotorTamg2extractionInsp" title="工序履历(抽样检查)" sortable ></vxe-column>
                <vxe-column field="RotorTamg2shippingInsp" title="工序履历(转子出厂检查综合判定)" sortable ></vxe-column>
            </vxe-colgroup>

            <vxe-colgroup title="马达工序履历">
                <vxe-column field="MotorMtrCode" title="ID写入" sortable ></vxe-column>
                <vxe-column field="MotorSngen" title="序号发生箱子集" sortable ></vxe-column>
                <vxe-column field="MotorHsgSrfBrgAm" title="Hsg面箱体BrgAM" sortable ></vxe-column>
                <vxe-column field="MotorHsgSrfKnockPam" title="Hsg面定位压入AM" sortable ></vxe-column>
                <vxe-column field="MotorCoolPipeMw" title="冷却管手工作业" sortable ></vxe-column>
                <vxe-column field="MotorTermBoardMw" title="端子台手工作业" sortable ></vxe-column>
                <vxe-column field="MotorRrCoverSrfOutBrgAm" title="Rr罩面外BrgAM" sortable ></vxe-column>
                <vxe-column field="MotorRrCoverSrfKnockPam" title="Rr罩面定位压入AM" sortable ></vxe-column>
                <vxe-column field="MotorMg1statorInsAm" title="MG1定子插入AM" sortable ></vxe-column>
                <vxe-column field="MotorMg2statorInsAm" title="MG2定子插入AM" sortable ></vxe-column>
                <vxe-column field="MotorHarnEscMw" title="线束释放手工作业" sortable ></vxe-column>
                <vxe-column field="MotorMg12statorTightAm" title="MG1、2定子紧固AM" sortable ></vxe-column>
                <vxe-column field="MotorThermMw" title="热敏电阻手工作业" sortable ></vxe-column>
                <vxe-column field="MotorCoolPipeMw2" title="冷却管手工作业" sortable ></vxe-column>
                <vxe-column field="MotorMg12rotorAssem" title="G1、2转子组装" sortable ></vxe-column>
                <vxe-column field="MotorFipgapp" title="FIPG涂布" sortable ></vxe-column>
                <vxe-column field="MotorRrCoverAssem" title="安装Rr罩子" sortable ></vxe-column>
                <vxe-column field="MotorRrCoverTight1" title="Rr罩子紧固1" sortable ></vxe-column>
                <vxe-column field="MotorRrCoverTight2" title="Rr罩子紧固2" sortable ></vxe-column>
                <vxe-column field="MotorInvMw" title="翻转机" sortable ></vxe-column>
                <vxe-column field="MotorMw1" title="手动作业１" sortable ></vxe-column>
                <vxe-column field="MotorMw2" title="手动作业2" sortable ></vxe-column>
                <vxe-column field="MotorPrevStn" title="前st" sortable ></vxe-column>
                <vxe-column field="MotorMwco0" title="手动作业Co0" sortable ></vxe-column>
                <vxe-column field="MotorMwco1" title="手作業Co1" sortable ></vxe-column>
                <vxe-column field="MotorMwco2" title="手动作业Co2" sortable ></vxe-column>
                <vxe-column field="MotorMwco3" title="手动作业Co3" sortable ></vxe-column>
                <vxe-column field="MotorReject" title="拒绝确认" sortable ></vxe-column>
            </vxe-colgroup>

            <vxe-colgroup title="盖体子工程履历">
                <vxe-column field="CoverSubIdsetSpare" title="备用ID组合" sortable ></vxe-column>
                <vxe-column field="CoverSubRrCovSetDmread" title="Rr盖组合 DM读取" sortable ></vxe-column>
                <vxe-column field="CoverSubRrCovBrgPressEquip" title="Rr罩子Brg压入设备" sortable ></vxe-column>
                <vxe-column field="CoverSubMw1" title="手动作业１" sortable ></vxe-column>
                <vxe-column field="CoverSubMw2" title="手动作业2" sortable ></vxe-column>
                <vxe-column field="CoverSubMw3" title="手动作业３" sortable ></vxe-column>
                <vxe-column field="CoverSubMw4" title="手动作业４" sortable ></vxe-column>
                <vxe-column field="CoverSubRrRevEquip" title="RR反转设备" sortable ></vxe-column>
                <vxe-column field="CoverSubWaterConnTighten" title="防水连接器紧固" sortable ></vxe-column>
                <vxe-column field="CoverSubReject" title="拒绝" sortable ></vxe-column>
            </vxe-colgroup>

            <vxe-colgroup title="差速器工序履历">
                <vxe-column field="DefDfcaseRead" title="差速器内部组装DF盒读取" sortable ></vxe-column>
                <vxe-column field="DefDfpinionShaftEquip" title="DF小齿轮轴组装设备" sortable ></vxe-column>
                <vxe-column field="DefDiffOperMeasureEquip" title="差速器动作、位移量测量设备" sortable ></vxe-column>
                <vxe-column field="DefTweezersMw" title="插针式手动作业" sortable ></vxe-column>
                <vxe-column field="DefDiffPinionPress" title="差速器销铆接" sortable ></vxe-column>
            </vxe-colgroup>

            <vxe-colgroup title="齿轮子工序履历">
                <vxe-column field="Dmread" title="DM读入" sortable ></vxe-column>
                <vxe-column field="GearPressIn1" title="齿轮压入１" sortable ></vxe-column>
                <vxe-column field="GearPressIn2" title="齿轮压入２" sortable ></vxe-column>
                <vxe-column field="Slnffastening" title="Co从动螺母紧固" sortable ></vxe-column>
                <vxe-column field="Slnfriveting" title="Co从动螺母铆接" sortable ></vxe-column>
                <vxe-column field="DiffBrgPressIn" title="差速器Brg压入" sortable ></vxe-column>
                <vxe-column field="DiffBoltTight1" title="差速器螺栓紧固1" sortable ></vxe-column>
                <vxe-column field="DiffBoltTight2" title="差速器螺栓紧固2" sortable ></vxe-column>
                <vxe-column field="RevRivetConfirm" title="反转铆接确认" sortable ></vxe-column>
                <vxe-column field="DamperImage" title="ダンパー画像" sortable ></vxe-column>
                <vxe-column field="Reject" title="リジェクト" sortable ></vxe-column>
            </vxe-colgroup>

            <vxe-colgroup title="Hsg子工序履历">
                <vxe-column field="Idwrite" title="ID写入,Hsg集" sortable ></vxe-column>
                <vxe-column field="HsgSubShimSel" title="垫片选择" sortable ></vxe-column>
                <vxe-column field="HsgBrgPressIn1" title="HsgBrg圧入1" sortable ></vxe-column>
                <vxe-column field="HsgBrgPressIn2" title="HsgBrg圧入2" sortable ></vxe-column>
            </vxe-colgroup>

            <vxe-colgroup title="合体FIPG最终工序履历">
                <vxe-column field="GearAssembly1" title="4种齿轮组装" sortable ></vxe-column>
                <vxe-column field="OilPumpAssembly" title="油泵组装" sortable ></vxe-column>
                <vxe-column field="SubShimSel" title="垫片选择" sortable ></vxe-column>
                <vxe-column field="ShimSet" title="垫片组" sortable ></vxe-column>
                <vxe-column field="LubPipeAssem" title="润滑管组装" sortable ></vxe-column>
                <vxe-column field="CaseFipgapp" title="外壳FIPG涂敷" sortable ></vxe-column>
                <vxe-column field="AssemJoining1" title="合体组装" sortable ></vxe-column>
                <vxe-column field="AssemTight1" title="合体紧固１" sortable ></vxe-column>
                <vxe-column field="AssemTight2" title="合体紧固２" sortable ></vxe-column>
                <vxe-column field="DrainPlugTight" title="排水塞紧固" sortable ></vxe-column>
                <vxe-column field="DiffOilsealPress1" title="差速器油封压入1" sortable ></vxe-column>
                <vxe-column field="DiffOilsealPress2" title="差速器油封压入2" sortable ></vxe-column>
                <vxe-column field="FillerTight" title="フィラー締付" sortable ></vxe-column>
                <vxe-column field="AssyUpright" title="Assy正立" sortable ></vxe-column>
                <vxe-column field="Idexchange" title="ID交换" sortable ></vxe-column>
                <vxe-column field="OilCoolerAssem" title="油冷却器组装" sortable ></vxe-column>
                <vxe-column field="MandrelAttach" title="心轴安装" sortable ></vxe-column>
                <vxe-column field="Preprocessing" title="前期准备" sortable ></vxe-column>
                <vxe-column field="AssyLeakTest" title="Assy泄漏测试" sortable ></vxe-column>
                <vxe-column field="Insulation" title="绝缘" sortable ></vxe-column>
                <vxe-column field="OilInjection" title="油注入" sortable ></vxe-column>
                <vxe-column field="AssyNoiseTest" title="Assy噪声测试" sortable ></vxe-column>
                <vxe-column field="Mw1" title="手动作业①" sortable ></vxe-column>
                <vxe-column field="Mw2" title="手动作业②" sortable ></vxe-column>
                <vxe-column field="Mw3" title="手动作业③" sortable ></vxe-column>
                <vxe-column field="SerialStamping" title="序列刻印" sortable ></vxe-column>
                <vxe-column field="ShippingPrep1" title="发货步骤1" sortable ></vxe-column>
                <vxe-column field="ShippingPrep2" title="发货步骤2" sortable ></vxe-column>
                <vxe-column field="VisualInsp" title="外观检查" sortable ></vxe-column>
                <vxe-column field="Fipgreject" title="拒绝" sortable ></vxe-column>
                <vxe-column field="LabelPrinting" title="标签发行" sortable ></vxe-column>
            </vxe-colgroup>

            <vxe-colgroup title="特别">
                <vxe-column field="Reshuffle" title="修改历史记录" sortable ></vxe-column>
            </vxe-colgroup>

            <vxe-colgroup title="防错防误15计测日時">
                <vxe-column field='PokayokeDate15' title='防错防误15计测日時' sortable ></vxe-column>
            </vxe-colgroup>

            <vxe-colgroup title="防错防误16计测日時">
                <vxe-column field='PokayokeDate16' title='防错防误16计测日時' sortable ></vxe-column>
            </vxe-colgroup>

            <vxe-colgroup title="ラベル発券">
                <vxe-column field='TagMeas' title='ラベル発券计测日时' sortable ></vxe-column>
            </vxe-colgroup>

            <vxe-colgroup title="防错防误18计测日時">
                <vxe-column field='PokayokeDate18' title='防错防误18计测日時' sortable ></vxe-column>
            </vxe-colgroup>

            <vxe-colgroup title="防错防误19计测日時">
                <vxe-column field='PokayokeDate19' title='防错防误19计测日時' sortable ></vxe-column>
            </vxe-colgroup>

            <vxe-colgroup title="シム選択">
                <vxe-column field="ShimMeas" title="计测日时" sortable ></vxe-column>
                <vxe-column field="ShimHsgt7" title="Hsg侧差速器轴深度t7" sortable ></vxe-column>
                <vxe-column field="ShimHsgt5" title="Hsg侧转向销轴深度t5" sortable ></vxe-column>
                <vxe-column field="ShimHsgt3" title="Hsg侧马达计数器轴深度t3" sortable ></vxe-column>
                <vxe-column field="ShimHsgt1" title="Hsg侧输入轴深度t1" sortable ></vxe-column>
                <vxe-column field="ShimShellt8" title="壳体侧差速器轴高度t8" sortable ></vxe-column>
                <vxe-column field="ShimShellt6" title="壳体侧干销轴高度t6" sortable ></vxe-column>
                <vxe-column field="ShimCaset4" title="箱侧马达计数器轴高度t4" sortable ></vxe-column>
                <vxe-column field="ShimCaset2" title="箱侧输入轴深度t2" sortable ></vxe-column>
                <vxe-column field="ShimSlider" title="垫片滑块（差速器轴）" sortable ></vxe-column>
                <vxe-column field="ShimGrade" title="垫片等级（转向销轴）" sortable ></vxe-column>
                <vxe-column field="ShimGradeCo" title="垫片等级（马达Co轴)" sortable ></vxe-column>
                <vxe-column field="ShimGradeIn" title="垫片等级（输入轴）" sortable ></vxe-column>
                <vxe-column field="ShimValueDiff" title="垫片实测值（差速器轴）" sortable ></vxe-column>
                <vxe-column field="ShimValuePin" title="垫片实测值（多拉销轴）" sortable ></vxe-column>
                <vxe-column field="ShimValueCo" title="垫片实测值（马达Co轴）" sortable ></vxe-column>
                <vxe-column field="ShimValueIn" title="垫片实测值（输入轴）" sortable ></vxe-column>
                <vxe-column field="ShimGear" title="齿轮直径判定" sortable ></vxe-column>
                <vxe-column field="Shimt1t2" title="α１（t1 - t2） 修正值" sortable ></vxe-column>
                <vxe-column field="Shimt3t4" title="α２（t3 - t4） 修正值" sortable ></vxe-column>
                <vxe-column field="Shimt5t6" title="α３（t5 - t6） 修正值" sortable ></vxe-column>
                <vxe-column field="Shimt7t8" title="α４（t7 - t8） 修正值" sortable ></vxe-column>
                <vxe-column field="Shimt1Main" title="t1主值" sortable ></vxe-column>
                <vxe-column field="Shimt3Main" title="t3主值" sortable ></vxe-column>
                <vxe-column field="Shimt5Main" title="t5主值" sortable ></vxe-column>
                <vxe-column field="Shimt7Main" title="t7主值" sortable ></vxe-column>
                <vxe-column field="Shimt2Main" title="t2主值" sortable ></vxe-column>
                <vxe-column field="Shimt4Main" title="t4主值" sortable ></vxe-column>
                <vxe-column field="Shimt6Main" title="t6主值" sortable ></vxe-column>
                <vxe-column field="Shimt8Main" title="t８主值" sortable ></vxe-column>
            </vxe-colgroup>

            <vxe-colgroup title="Hsg圧入1">
                <vxe-column field="Hsg1MeasDate" title="计测日时" sortable ></vxe-column>
                <vxe-column field="Hsg1Stroke" title="拐点行程" sortable ></vxe-column>
                <vxe-column field="Hsg1PtLoad" title="変曲点负重" sortable ></vxe-column>
                <vxe-column field="Hsg1FinalStroke" title="最终行程" sortable ></vxe-column>
                <vxe-column field="Hsg1FinalLoad" title="最終荷负重" sortable ></vxe-column>
                <vxe-column field="Hsg1StrokeSec" title="拐点行程" sortable ></vxe-column>
                <vxe-column field="Hsg1PtLoadSec" title="変曲点负重" sortable ></vxe-column>
                <vxe-column field="Hsg1FinalStrokeSec" title="最终行程" sortable ></vxe-column>
                <vxe-column field="Hsg1FinalLoadSec" title="最終荷负重" sortable ></vxe-column>
                <vxe-column field="Hsg1MainStroke" title="主行程" sortable ></vxe-column>
                <vxe-column field="Hsg1Abvalue" title="A/B" sortable ></vxe-column>
            </vxe-colgroup>

            <vxe-colgroup title="Hsg圧入2">
                <vxe-column field="Hsg2MeasDate" title="计测日时" sortable ></vxe-column>
                <vxe-column field="Hsg2Stroke" title="拐点行程" sortable ></vxe-column>
                <vxe-column field="Hsg2PtLoad" title="変曲点负重" sortable ></vxe-column>
                <vxe-column field="Hsg2FinalStroke" title="最终行程" sortable ></vxe-column>
                <vxe-column field="Hsg2FinalLoad" title="最終荷负重" sortable ></vxe-column>
                <vxe-column field="Hsg2StrokeSec" title="拐点行程" sortable ></vxe-column>
                <vxe-column field="Hsg2PtLoadSec" title="変曲点负重" sortable ></vxe-column>
                <vxe-column field="Hsg2FinalStrokeSec" title="最终行程" sortable ></vxe-column>
                <vxe-column field="Hsg2FinalLoadSec" title="最終荷负重" sortable ></vxe-column>
                <vxe-column field="Hsg2MainStroke" title="主行程" sortable ></vxe-column>
                <vxe-column field="Hsg2Abvalue" title="A/B" sortable ></vxe-column>
            </vxe-colgroup>

            <vxe-colgroup title="防错防误20计测日時">
                <vxe-column field='PokayokeDate20' title='防错防误20计测日時' sortable ></vxe-column>

            </vxe-colgroup>

            <vxe-colgroup title="HSG FIGP">
                <vxe-column field='HsgFigpdate' title="HSG FIGP计测日時" sortable ></vxe-column>
                <vxe-column field='HsgFigpportrait' title='画像判定結果' sortable ></vxe-column>
            </vxe-colgroup>

            <vxe-colgroup title="HSG合体">
                <vxe-column field="HsgFitDate" title="HSG合体" sortable ></vxe-column>
            </vxe-colgroup>

            <vxe-colgroup title="HSG合体紧固①">
                <vxe-column field="Hsg1Date" title="计测日時" sortable ></vxe-column>
                <vxe-column field="Hsg1AngleAxis1" title="紧固角度1軸" sortable ></vxe-column>
                <vxe-column field="Hsg1CodeAxis1" title="第1軸判定代码" sortable ></vxe-column>
                <vxe-column field="Hsg1AngleAxis2" title="紧固角度2軸" sortable ></vxe-column>
                <vxe-column field="Hsg1CodeAxis2" title="第2軸判定代码" sortable ></vxe-column>
                <vxe-column field="Hsg1AngleAxis3" title="紧固角度3軸" sortable ></vxe-column>
                <vxe-column field="Hsg1CodeAxis3" title="第3軸判定代码" sortable ></vxe-column>
                <vxe-column field="Hsg1AngleAxis4" title="紧固角度4軸" sortable ></vxe-column>
                <vxe-column field="Hsg1CodeAxis4" title="第4軸判定代码" sortable ></vxe-column>
                <vxe-column field="Hsg1AngleAxis5" title="紧固角度5軸" sortable ></vxe-column>
                <vxe-column field="Hsg1CodeAxis5" title="第5軸判定代码" sortable ></vxe-column>
                <vxe-column field="Hsg1AngleAxis6" title="紧固角度6軸" sortable ></vxe-column>
                <vxe-column field="Hsg1CodeAxis6" title="第6軸判定代码" sortable ></vxe-column>
                <vxe-column field="Hsg1AngleAxis7" title="紧固角度7軸" sortable ></vxe-column>
                <vxe-column field="Hsg1CodeAxis7" title="第7軸判定代码" sortable ></vxe-column>
                <vxe-column field="Hsg1AngleAxis8" title="紧固角度8軸" sortable ></vxe-column>
                <vxe-column field="Hsg1CodeAxis8" title="第8軸判定代码" sortable ></vxe-column>
                <vxe-column field="Hsg1AngleAxis9" title="紧固角度9軸" sortable ></vxe-column>
                <vxe-column field="Hsg1CodeAxis9" title="第9軸判定代码" sortable ></vxe-column>
                <vxe-column field="Hsg1AngleAxis10" title="紧固角度10軸" sortable ></vxe-column>
                <vxe-column field="Hsg1CodeAxis10" title="第10軸判定代码" sortable ></vxe-column>
                <vxe-column field="Hsg1AngleAxis11" title="紧固角度11軸" sortable ></vxe-column>
                <vxe-column field="Hsg1CodeAxis11" title="第11軸判定代码" sortable ></vxe-column>
                <vxe-column field="Hsg1Ab" title="A/B" sortable ></vxe-column>
            </vxe-colgroup>

            <vxe-colgroup title="HSG合体紧固②">
                <vxe-column field="Hsg2MaesDate" title="计测日時" sortable ></vxe-column>
                <vxe-column field="Hsg2AngleAxis1" title="紧固角度2軸" sortable ></vxe-column>
                <vxe-column field="Hsg2CodeAxis1" title="第2軸判定代码" sortable ></vxe-column>
                <vxe-column field="Hsg2AngleAxis2" title="紧固角度3軸" sortable ></vxe-column>
                <vxe-column field="Hsg2CodeAxis2" title="第3軸判定代码" sortable ></vxe-column>
                <vxe-column field="Hsg2AngleAxis3" title="紧固角度4軸" sortable ></vxe-column>
                <vxe-column field="Hsg2CodeAxis3" title="第4軸判定代码" sortable ></vxe-column>
                <vxe-column field="Hsg2AngleAxis4" title="紧固角度5軸" sortable ></vxe-column>
                <vxe-column field="Hsg2CodeAxis4" title="第5軸判定代码" sortable ></vxe-column>
                <vxe-column field="Hsg2AngleAxis5" title="紧固角度6軸" sortable ></vxe-column>
                <vxe-column field="Hsg2CodeAxis5" title="第6軸判定代码" sortable ></vxe-column>
                <vxe-column field="Hsg2AngleAxis6" title="紧固角度7軸" sortable ></vxe-column>
                <vxe-column field="Hsg2CodeAxis6" title="第7軸判定代码" sortable ></vxe-column>
                <vxe-column field="Hsg2AngleAxis7" title="紧固角度8軸" sortable ></vxe-column>
                <vxe-column field="Hsg2CodeAxis7" title="第8軸判定代码" sortable ></vxe-column>
                <vxe-column field="Hsg2AngleAxis8" title="紧固角度9軸" sortable ></vxe-column>
                <vxe-column field="Hsg2CodeAxis8" title="第9軸判定代码" sortable ></vxe-column>
                <vxe-column field="Hsg2AngleAxis9" title="紧固角度10軸" sortable ></vxe-column>
                <vxe-column field="Hsg2CodeAxis9" title="第10軸判定代码" sortable ></vxe-column>
                <vxe-column field="Hsg2AngleAxis10" title="紧固角度11軸" sortable ></vxe-column>
                <vxe-column field="Hsg2CodeAxis10" title="第11軸判定代码" sortable ></vxe-column>
                <vxe-column field="Hsg2AngleAxis11" title="紧固角度12軸" sortable ></vxe-column>
                <vxe-column field="Hsg2CodeAxis11" title="第12軸判定代码" sortable ></vxe-column>
                <vxe-column field="Hsg2Ab" title="A/B" sortable ></vxe-column>
            </vxe-colgroup>

            <vxe-colgroup title="防错防误27计测日時">
                <vxe-column field="PokayokeDate27" title="防错防误27计测日時" sortable ></vxe-column>
            </vxe-colgroup>

            <vxe-colgroup title="OS圧入1">
                <vxe-column field="Os1date" title="OS圧入1计测日时" sortable ></vxe-column>
                <vxe-column field="Os1lhstroke" title="差速器LH OS拐点行程" sortable ></vxe-column>
                <vxe-column field="Os1lhload" title="差速器LH OS拐点负重" sortable ></vxe-column>
                <vxe-column field="Os1lhfinalStroke" title="差速器LH OS最终行程" sortable ></vxe-column>
                <vxe-column field="Os1lhfinalLoad" title="差速器LH OS最终负重" sortable ></vxe-column>
                <vxe-column field="Os1rhstroke" title="差速器RH OS拐点行程" sortable ></vxe-column>
                <vxe-column field="Os1rhload" title="差速器RH OS拐点负重" sortable ></vxe-column>
                <vxe-column field="Os1rhfinalStroke" title="差速器RH OS最终行程" sortable ></vxe-column>
                <vxe-column field="Os1rhfinalLoad" title="差速器RH OS最终负重" sortable ></vxe-column>
                <vxe-column field="Os1mainStroke" title="主行程" sortable ></vxe-column>
                <vxe-column field="Os1abvalue" title="A/B" sortable ></vxe-column>
            </vxe-colgroup>

            <vxe-colgroup title="OS圧入2">
                <vxe-column field="Os2date" title="OS圧入2计测日时" sortable ></vxe-column>
                <vxe-column field="Os2stroke" title="I/P OS拐点行程" sortable ></vxe-column>
                <vxe-column field="Os2ptLoad" title="I/P OS拐点负重" sortable ></vxe-column>
                <vxe-column field="Os2finalStroke" title="I/P OS最终行程" sortable ></vxe-column>
                <vxe-column field="Os2finalLoad" title="I/P OS最终负重" sortable ></vxe-column>
                <vxe-column field="Os2mainStroke" title="主行程" sortable ></vxe-column>
                <vxe-column field="Os2abvalue" title="A/B" sortable ></vxe-column>
            </vxe-colgroup>

            <vxe-colgroup title="防错防误21计测日時">
                <vxe-column field="PokayokeDate21" title="防错防误21计测日時" sortable ></vxe-column>

            </vxe-colgroup>

            <vxe-colgroup title="Assy正立计测日时">
                <vxe-column field="AssyDate" title="Assy正立" sortable ></vxe-column>
            </vxe-colgroup>

            <vxe-colgroup title="防错防误22计测日時">
                <vxe-column field="PokayokeDate22" title="防错防误22计测日時" sortable ></vxe-column>
            </vxe-colgroup>

            <vxe-colgroup title="防错防误23计测日時">
                <vxe-column field="PokayokeDate23" title="防错防误23计测日時" sortable ></vxe-column>
            </vxe-colgroup>

            <vxe-colgroup title="防错防误24计测日時">
                <vxe-column field="PokayokeDate24" title="防错防误24计测日時" sortable ></vxe-column>
            </vxe-colgroup>

            <vxe-colgroup title="防错防误25计测日時">
                <vxe-column field="PokayokeDate25" title="防错防误25计测日時" sortable ></vxe-column>
            </vxe-colgroup>

            <vxe-colgroup title="泄漏测试">
                <vxe-column field="LeakDate" title="计测日时" sortable ></vxe-column>
                <vxe-column field="LeakGear" title="齿轮室泄漏量" sortable ></vxe-column>
                <vxe-column field="LeakCorrect" title="泄露修正值" sortable ></vxe-column>
                <vxe-column field="LeakTempDec" title="温度情报" sortable ></vxe-column>
                <vxe-column field="LeakMain" title="主值泄漏量" sortable ></vxe-column>
                <vxe-column field="LeakFrontOil" title="給油前重量" sortable ></vxe-column>
                <vxe-column field="LeakEtaf" title="e-TAF注油完了" sortable ></vxe-column>
                <vxe-column field="LeakLastOil" title="給油後重量" sortable ></vxe-column>
                <vxe-column field="LeakTemp" title="气氛温度" sortable ></vxe-column>
                <vxe-column field="LeakHumidity" title="湿度" sortable ></vxe-column>
                <vxe-column field="LeakOilTempDec" title="油温传感器判定" sortable ></vxe-column>
                <vxe-column field="LeakMg1mohm" title="絶縁电阻MG1 Ω" sortable ></vxe-column>
                <vxe-column field="LeakMg1dec" title="絶縁电阻MG1判定" sortable ></vxe-column>
                <vxe-column field="LeakMg2mohm" title="絶縁电阻MG2 Ω" sortable ></vxe-column>
                <vxe-column field="LeakMg2dec" title="絶縁电阻MG2判定" sortable ></vxe-column>
                <vxe-column field="LeakMg1dielectric" title="絶縁耐圧MG1" sortable ></vxe-column>
                <vxe-column field="LeakMg1dielectricDec" title="絶縁耐圧MG1判定" sortable ></vxe-column>
                <vxe-column field="LeakMg2dielectric" title="絶縁耐圧MG2" sortable ></vxe-column>
                <vxe-column field="LeakMg2dielectricDec" title="絶縁耐圧MG2判定" sortable ></vxe-column>
                <vxe-column field="LeakThermistor" title="热敏电阻絶縁电阻 Ω" sortable ></vxe-column>
                <vxe-column field="LeakThermistorDec" title="热敏电阻絶縁电阻判定" sortable ></vxe-column>
                <vxe-column field="LeakResolver" title="旋转变压器絶縁电阻 Ω" sortable ></vxe-column>
                <vxe-column field="LeakResolverDec" title="旋转变压器絶縁电阻判定" sortable ></vxe-column>
                <vxe-column field="LeakOilTempMohmDec" title="油温传感器絶縁电阻 Ω" sortable ></vxe-column>
                <vxe-column field="LeakMg1uv" title="油温传感器絶縁电阻判定" sortable ></vxe-column>
                <vxe-column field="LeakMg1uvdec" title="线间电阻MG1U-V Ω" sortable ></vxe-column>
                <vxe-column field="LeakMg1uw" title="线间电阻MG1U-V判定" sortable ></vxe-column>
                <vxe-column field="LeakMg1uwdec" title="线间电阻MG1V-W Ω" sortable ></vxe-column>
                <vxe-column field="LeakMg1wu" title="线间电阻MG1V-W判定" sortable ></vxe-column>
                <vxe-column field="LeakMg1wudec" title="线间电阻MG1W-U Ω" sortable ></vxe-column>
                <vxe-column field="LeakMg2uv" title="线间电阻MG1W-U判定" sortable ></vxe-column>
                <vxe-column field="LeakMg2uvdec" title="线间电阻MG2U-V Ω" sortable ></vxe-column>
                <vxe-column field="LeakMg2uw" title="线间电阻MG2U-V判定" sortable ></vxe-column>
                <vxe-column field="LeakMg2uwdec" title="线间电阻MG2V-W Ω" sortable ></vxe-column>
                <vxe-column field="LeakMg2wu" title="线间电阻MG2V-W判定" sortable ></vxe-column>
                <vxe-column field="LeakMg2wudec" title="线间电阻MG2W-U Ω" sortable ></vxe-column>
                <vxe-column field="LeakThermistorMg1" title="线间电阻MG2W-U判定" sortable ></vxe-column>
                <vxe-column field="LeakThermistorMg1dec" title="热敏电阻线间电阻MG1 Ω" sortable ></vxe-column>
                <vxe-column field="LeakThermistorMg2" title="热敏电阻线间电阻MG1判定" sortable ></vxe-column>
                <vxe-column field="LeakThermistorMg2dec" title="热敏电阻线间电阻MG2 Ω" sortable ></vxe-column>
                <vxe-column field="LeakOilLine" title="热敏电阻线间电阻MG2判定" sortable ></vxe-column>
                <vxe-column field="LeakOilLineDec" title="油温传感器线间电阻判定" sortable ></vxe-column>
                <vxe-column field="LeakMg1rotateDec" title="MG1旋转变压器连接器内相关短路判定" sortable ></vxe-column>
                <vxe-column field="LeakMg2rotateDec" title="MG2旋转变压器连接器内相关短路判定" sortable ></vxe-column>
                <vxe-column field="LeakMg1wmg2v" title="MG1W相×MG2V相短路判定" sortable ></vxe-column>
                <vxe-column field="LeakOil" title="油温传感器絶縁电阻" sortable ></vxe-column>
                <vxe-column field="LeakMg196" title="旋转变压器线间电阻MG1 GRFG-GRF(9-6間)（Ω）" sortable ></vxe-column>
                <vxe-column field="LeakMg196dec" title="旋转变压器线间电阻MG1 GRFG-GRF(9-6間)判定" sortable ></vxe-column>
                <vxe-column field="LeakMg11410" title="旋转变压器线间电阻MG1 GCSG-GCS(14-10間)（Ω）" sortable ></vxe-column>
                <vxe-column field="LeakMg11410dec" title="旋转变压器线间电阻MG1 GCSG-GCS(14-10間)判定" sortable ></vxe-column>
                <vxe-column field="LeakMg1135" title="旋转变压器线间电阻MG1 GSN-GSNG(13-5間)（Ω）" sortable ></vxe-column>
                <vxe-column field="LeakMg1135dec" title="旋转变压器线间电阻MG1 GSN-GSNG(13-5間)判定" sortable ></vxe-column>
                <vxe-column field="LeakMg281" title="旋转变压器线间电阻MG2 MRFG-MRF(8-1間)（Ω）" sortable ></vxe-column>
                <vxe-column field="LeakMg281dec" title="旋转变压器线间电阻MG2 MRFG-MRF(8-1間)判定" sortable ></vxe-column>
                <vxe-column field="LeakMg2117" title="旋转变压器线间电阻MG2 MCSG-MCS(11-7間)（Ω）" sortable ></vxe-column>
                <vxe-column field="LeakMg2117dec" title="旋转变压器线间电阻MG2 MCSG-MCS(11-7間)判定" sortable ></vxe-column>
                <vxe-column field="LeakMg232" title="旋转变压器线间电阻MG2 MSN-MSNG(3-2間)（Ω）" sortable ></vxe-column>
                <vxe-column field="LeakMg232dec" title="旋转变压器线间电阻MG2 MSN-MSNG(3-2間)判定" sortable ></vxe-column>
                <vxe-column field="LeakCol" title="多列标识" sortable ></vxe-column>
            </vxe-colgroup>

            <vxe-colgroup title="ISS">
                <vxe-column field="IssDate" title="计测日时" sortable ></vxe-column>
                <vxe-column field="IssP" title="P锁定判定" sortable ></vxe-column>
                <vxe-column field="IssnotP" title="notP判定" sortable ></vxe-column>
                <vxe-column field="IssFunction" title="官能判定" sortable ></vxe-column>
                <vxe-column field="IssMg1uv" title="MG1探测接触电阻U-V间 Ω" sortable ></vxe-column>
                <vxe-column field="IssMg1uvdec" title="MG1探测接触电阻U-V间判定" sortable ></vxe-column>
                <vxe-column field="IssMg1vw" title="MG1探测接触电阻V-W间 Ω" sortable ></vxe-column>
                <vxe-column field="IssMg1vwdec" title="MG1探测接触电阻V-W间判定" sortable ></vxe-column>
                <vxe-column field="IssMg2uv" title="MG2探测接触电阻U-V间 Ω" sortable ></vxe-column>
                <vxe-column field="IssMg2uvdec" title="MG2探测接触电阻U-V间判定" sortable ></vxe-column>
                <vxe-column field="IssMg2vw" title="MG2探测接触电阻V-W间 Ω" sortable ></vxe-column>
                <vxe-column field="IssMg2vwdec" title="MG2探测接触电阻V-W间判定" sortable ></vxe-column>
                <vxe-column field="IssMg1value" title="MG1旋转变压器偏移値" sortable ></vxe-column>
                <vxe-column field="IssMg1valueDec" title="MG1旋转变压器偏移値判定" sortable ></vxe-column>
                <vxe-column field="IssMg2value" title="MG2旋转变压器偏移値" sortable ></vxe-column>
                <vxe-column field="IssMg2valueDec" title="MG2旋转变压器偏移値判定" sortable ></vxe-column>
                <vxe-column field="IssMg1disUv" title="MG1反向电压U-V Ω" sortable ></vxe-column>
                <vxe-column field="IssMg1disUvdec" title="MG1反向电压U-V判定" sortable ></vxe-column>
                <vxe-column field="IssMg1disVw" title="MG1反向电压V-W Ω" sortable ></vxe-column>
                <vxe-column field="IssMg1disVwdec" title="MG1反向电压V-W判定" sortable ></vxe-column>
                <vxe-column field="IssMg2disUv" title="MG2反向电压U-V Ω" sortable ></vxe-column>
                <vxe-column field="IssMg2disUvdec" title="MG2反向电压U-V判定" sortable ></vxe-column>
                <vxe-column field="IssMg2disVw" title="MG2反向电压V-W Ω" sortable ></vxe-column>
                <vxe-column field="IssMg2disVwdec" title="MG2反向电压V-W判定" sortable ></vxe-column>
                <vxe-column field="IssMg2gear" title="齿轮比確認MG2旋转数" sortable ></vxe-column>
                <vxe-column field="IssMg2gearDec" title="齿轮比確認判定" sortable ></vxe-column>
                <vxe-column field="IssRevup" title="异音測定加速判定" sortable ></vxe-column>
                <vxe-column field="IssSlowup" title="异音測定減速判定" sortable ></vxe-column>
                <vxe-column field="IssRevCounter" title="加速側计数器综合判定" sortable ></vxe-column>
                <vxe-column field="IssRevLast" title="加速側最终综合判定" sortable ></vxe-column>
                <vxe-column field="IssSlowCounter" title="減速側计数器综合判定" sortable ></vxe-column>
                <vxe-column field="IssSlowLast" title="減速側最终综合判定" sortable ></vxe-column>
                <vxe-column field="IssRevAvg" title="加速側差速器轴平均負荷扭矩" sortable ></vxe-column>
                <vxe-column field="IssRevAvgDec" title="加速側差速器轴平均負荷扭矩判定" sortable ></vxe-column>
                <vxe-column field="IssSlowAvg" title="減速側差速器轴平均負荷扭矩" sortable ></vxe-column>
                <vxe-column field="IssSlowAvgDec" title="減速側差速器轴平均負荷扭矩判定" sortable ></vxe-column>
                <vxe-column field="IssOilTemp" title="油温传感器温度" sortable ></vxe-column>
                <vxe-column field="IssRev1Noise" title="加速側计数器区间1噪音" sortable ></vxe-column>
                <vxe-column field="IssRev1Rate" title="加速側计数器区间1频率" sortable ></vxe-column>
                <vxe-column field="IssRev1" title="加速側计数器区间1判定" sortable ></vxe-column>
                <vxe-column field="IssRev2Noise" title="加速側计数器区间2噪音" sortable ></vxe-column>
                <vxe-column field="IssRev2Rate" title="加速側计数器区间2频率" sortable ></vxe-column>
                <vxe-column field="IssRev2" title="加速側计数器区间2判定" sortable ></vxe-column>
                <vxe-column field="IssRev3Noise" title="加速側计数器区间3噪音" sortable ></vxe-column>
                <vxe-column field="IssRev3Rate" title="加速側计数器区间3频率" sortable ></vxe-column>
                <vxe-column field="IssRev3" title="加速側计数器区间3判定" sortable ></vxe-column>
                <vxe-column field="IssRev4Noise" title="加速側计数器区间4噪音" sortable ></vxe-column>
                <vxe-column field="IssRev4Rate" title="加速側计数器区间4频率" sortable ></vxe-column>
                <vxe-column field="IssRev4" title="加速側计数器区间4判定" sortable ></vxe-column>
                <vxe-column field="IssRev5Noise" title="加速側计数器区间5噪音" sortable ></vxe-column>
                <vxe-column field="IssRev5Rate" title="加速側计数器区间5频率" sortable ></vxe-column>
                <vxe-column field="IssRev5" title="加速側计数器区间5判定" sortable ></vxe-column>
                <vxe-column field="IssRevLast1Noise" title="加速側最终区间1噪音" sortable ></vxe-column>
                <vxe-column field="IssRevLast1Rate" title="加速側最终区间1频率" sortable ></vxe-column>
                <vxe-column field="IssRevLast1" title="加速側最终区间1判定" sortable ></vxe-column>
                <vxe-column field="IssRevLast2Noise" title="加速側最终区间2噪音" sortable ></vxe-column>
                <vxe-column field="IssRevLast2Rate" title="加速側最终区间2频率" sortable ></vxe-column>
                <vxe-column field="IssRevLast2" title="加速側最终区间2判定" sortable ></vxe-column>
                <vxe-column field="IssRevLast3Noise" title="加速側最终区间3噪音" sortable ></vxe-column>
                <vxe-column field="IssRevLast3Rate" title="加速側最终区间3频率" sortable ></vxe-column>
                <vxe-column field="IssRevLast3" title="加速側最终区间3判定" sortable ></vxe-column>
                <vxe-column field="IssRevLast4Noise" title="加速側最终区间4噪音" sortable ></vxe-column>
                <vxe-column field="IssRevLast4Rate" title="加速側最终区间4频率" sortable ></vxe-column>
                <vxe-column field="IssRevLast4" title="加速側最终区间4判定" sortable ></vxe-column>
                <vxe-column field="IssRevLast5Noise" title="加速側最终区间5噪音" sortable ></vxe-column>
                <vxe-column field="IssRevLast5Rate" title="加速側最终区间5频率" sortable ></vxe-column>
                <vxe-column field="IssRevLast5" title="加速側最终区间5判定" sortable ></vxe-column>
                <vxe-column field="IssSlow1Noise" title="減速側计数器区间1噪音" sortable ></vxe-column>
                <vxe-column field="IssSlow1Rate" title="減速側计数器区间1频率" sortable ></vxe-column>
                <vxe-column field="IssSlow1" title="減速側计数器区间1判定" sortable ></vxe-column>
                <vxe-column field="IssSlow2Noise" title="減速側计数器区间2噪音" sortable ></vxe-column>
                <vxe-column field="IssSlow2Rate" title="減速側计数器区间2频率" sortable ></vxe-column>
                <vxe-column field="IssSlow2" title="減速側计数器区间2判定" sortable ></vxe-column>
                <vxe-column field="IssSlow3Noise" title="減速側计数器区间3噪音" sortable ></vxe-column>
                <vxe-column field="IssSlow3Rate" title="減速側计数器区间3频率" sortable ></vxe-column>
                <vxe-column field="IssSlow3" title="減速側计数器区间3判定" sortable ></vxe-column>
                <vxe-column field="IssSlow4Noise" title="減速側计数器区间4噪音" sortable ></vxe-column>
                <vxe-column field="IssSlow4Rate" title="減速側计数器区间4频率" sortable ></vxe-column>
                <vxe-column field="IssSlow4" title="減速側计数器区间4判定" sortable ></vxe-column>
                <vxe-column field="IssSlow5Noise" title="減速側计数器区间5噪音" sortable ></vxe-column>
                <vxe-column field="IssSlow5Rate" title="減速側计数器区间5频率" sortable ></vxe-column>
                <vxe-column field="IssSlow5" title="減速側计数器区间5判定" sortable ></vxe-column>
                <vxe-column field="IssSlowLast1Noise" title="減速側最终区间1噪音" sortable ></vxe-column>
                <vxe-column field="IssSlowLast1Rate" title="減速側最终区间1频率" sortable ></vxe-column>
                <vxe-column field="IssSlowLast1" title="減速側最终区间1判定" sortable ></vxe-column>
                <vxe-column field="IssSlowLast2Noise" title="減速側最终区间2噪音" sortable ></vxe-column>
                <vxe-column field="IssSlowLast2Rate" title="減速側最终区间2频率" sortable ></vxe-column>
                <vxe-column field="IssSlowLast2" title="減速側最终区间2判定" sortable ></vxe-column>
                <vxe-column field="IssSlowLast3Noise" title="減速側最终区间3噪音" sortable ></vxe-column>
                <vxe-column field="IssSlowLast3Rate" title="減速側最终区间3频率" sortable ></vxe-column>
                <vxe-column field="IssSlowLast3" title="減速側最终区间3判定" sortable ></vxe-column>
                <vxe-column field="IssSlowLast4Noise" title="減速側最终区间4噪音" sortable ></vxe-column>
                <vxe-column field="IssSlowLast4Rate" title="減速側最终区间4频率" sortable ></vxe-column>
                <vxe-column field="IssSlowLast4" title="減速側最终区间4判定" sortable ></vxe-column>
                <vxe-column field="IssSlowLast5Noise" title="減速側最终区间5噪音" sortable ></vxe-column>
                <vxe-column field="IssSlowLast5Rate" title="減速側最终区间5频率" sortable ></vxe-column>
                <vxe-column field="IssSlowLast5" title="減速側最终区间5判定" sortable ></vxe-column>
                <vxe-column field="IssRevColor" title="加速颜色映射综合判定" sortable ></vxe-column>
                <vxe-column field="IssSlowColor" title="減速颜色映射综合判定" sortable ></vxe-column>
                <vxe-column field="IssRevColor1dB" title="①加速颜色映射判定噪音(dB)" sortable ></vxe-column>
                <vxe-column field="IssRevColor1Hz" title="①加速颜色映射判定频率(Hz)" sortable ></vxe-column>
                <vxe-column field="IssRevColor1rpm" title="①加速颜色映射判定旋转数(rpm)" sortable ></vxe-column>
                <vxe-column field="IssRevColor1sum" title="①加速颜色映射判定次数" sortable ></vxe-column>
                <vxe-column field="IssRevColor1Dec" title="①加速颜色映射判定" sortable ></vxe-column>
                <vxe-column field="IssSlowColor1dB" title="①減速颜色映射判定噪音(dB)" sortable ></vxe-column>
                <vxe-column field="IssSlowColor1Hz" title="①減速颜色映射判定频率(Hz)" sortable ></vxe-column>
                <vxe-column field="IssSlowColor1rpm" title="①減速颜色映射判定旋转数(rpm)" sortable ></vxe-column>
                <vxe-column field="IssSlowColor1sum" title="①減速颜色映射判定次数" sortable ></vxe-column>
                <vxe-column field="IssSlowColor1Dec" title="①減速颜色映射判定" sortable ></vxe-column>
                <vxe-column field="IssRevColor2dB" title="②加速颜色映射判定噪音(dB)" sortable ></vxe-column>
                <vxe-column field="IssRevColor2Hz" title="②加速颜色映射判定频率(Hz)" sortable ></vxe-column>
                <vxe-column field="IssRevColor2rpm" title="②加速颜色映射判定旋转数(rpm)" sortable ></vxe-column>
                <vxe-column field="IssRevColor2sum" title="②加速颜色映射判定次数" sortable ></vxe-column>
                <vxe-column field="IssRevColor2Dec" title="②加速颜色映射判定" sortable ></vxe-column>
                <vxe-column field="IssSlowColor2dB" title="②減速颜色映射判定噪音(dB)" sortable ></vxe-column>
                <vxe-column field="IssSlowColor2Hz" title="②減速颜色映射判定频率(Hz)" sortable ></vxe-column>
                <vxe-column field="IssSlowColor2rpm" title="②減速颜色映射判定旋转数(rpm)" sortable ></vxe-column>
                <vxe-column field="IssSlowColor2sum" title="②減速颜色映射判定次数" sortable ></vxe-column>
                <vxe-column field="IssSlowColor2Dec" title="②減速颜色映射判定" sortable ></vxe-column>
                <vxe-column field="IssRevColor3dB" title="③加速颜色映射判定噪音(dB)" sortable ></vxe-column>
                <vxe-column field="IssRevColor3Hz" title="③加速颜色映射判定频率(Hz)" sortable ></vxe-column>
                <vxe-column field="IssRevColor3rpm" title="③加速颜色映射判定旋转数(rpm)" sortable ></vxe-column>
                <vxe-column field="IssRevColor3sum" title="③加速颜色映射判定次数" sortable ></vxe-column>
                <vxe-column field="IssRevColor3Dec" title="③加速颜色映射判定" sortable ></vxe-column>
                <vxe-column field="IssSlowColor3dB" title="③減速颜色映射判定噪音(dB)" sortable ></vxe-column>
                <vxe-column field="IssSlowColor3Hz" title="③減速颜色映射判定频率(Hz)" sortable ></vxe-column>
                <vxe-column field="IssSlowColor3rpm" title="③減速颜色映射判定旋转数(rpm)" sortable ></vxe-column>
                <vxe-column field="IssSlowColor3sum" title="③減速颜色映射判定次数" sortable ></vxe-column>
                <vxe-column field="IssSlowColor3Dec" title="③減速颜色映射判定" sortable ></vxe-column>
                <vxe-column field="IssCol" title="多行识别" sortable ></vxe-column>
                <vxe-column field="IssOilPump" title="油泵油圧" sortable ></vxe-column>
                <vxe-column field="IssOilPumpDec" title="油泵油圧判定" sortable ></vxe-column>
                <vxe-column field="IssReliefValve" title="溢流阀油圧" sortable ></vxe-column>
                <vxe-column field="IssReliefValveDec" title="溢流阀油圧判定" sortable ></vxe-column>
            </vxe-colgroup>

            <vxe-colgroup title="防错防误26计测日時">
                <vxe-column field="PokayokeDate26" title="防错防误26计测日時" sortable ></vxe-column>
            </vxe-colgroup>

            <vxe-colgroup title="防错防误28计测日時">
                <vxe-column field="PokayokeDate28" title="防错防误28计测日時" sortable ></vxe-column>
            </vxe-colgroup>

            <vxe-colgroup title="防错防误29计测日時">
                <vxe-column field="PokayokeDate29" title="防错防误29计测日時" sortable ></vxe-column>
            </vxe-colgroup>

            <vxe-colgroup title="刻印">
                <vxe-column field="EngravingData" title="刻印计测日時" sortable ></vxe-column>
            </vxe-colgroup>

            <vxe-colgroup title="防错防误30计测日時">
                <vxe-column field="PokayokeDate30" title="防错防误30计测日時" sortable ></vxe-column>
            </vxe-colgroup>

            <vxe-colgroup title="防错防误31计测日時">
                <vxe-column field="PokayokeDate31" title="防错防误31计测日時" sortable ></vxe-column>
            </vxe-colgroup>

            <vxe-colgroup title="外観検査计测日時">
                <vxe-column field="InspectionDate" title="外観検査计测日時" sortable ></vxe-column>
            </vxe-colgroup>

            <vxe-colgroup title="防错防误32计测日時">
                <vxe-column field="PokayokeDate32" title="防错防误32计测日時" sortable ></vxe-column>
            </vxe-colgroup>

            <vxe-colgroup title="HSG セット">
                <vxe-column field="HsgSetDate" title="HSG セット计测日時" sortable ></vxe-column>
            </vxe-colgroup>

            <vxe-colgroup title="D托盘 重量">
                <vxe-column field="DtrayWeight" title="托盘 No" sortable ></vxe-column>
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
    return XEUtils.toDateString(cellValue, 'yyyy-MM-dd HH:mm:ss')
}
</script>
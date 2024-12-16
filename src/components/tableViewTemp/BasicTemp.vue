<template>
  <vxe-colgroup title="转子工序履历">
    <vxe-column field="RotorShaftTrans" title="轴移载" sortable />
    <vxe-column field="RotorCoreTrans" width="70px" title="铁芯移载" sortable />
    <vxe-column field="RotorHeating" width="70px" title="加热" sortable />
    <vxe-column field="RotorShaftPress" title="轴圧入" sortable />
    <vxe-column field="RotorNutTight" width="75px" title="螺母紧固" sortable />
    <vxe-column field="RotorForeignSuction" width="100px" title="工序履历(异物吸引)" sortable />
    <vxe-column field="RotorNutCrimpMg1press" width="100px" title="螺母铆接MG1针压入" sortable />
    <vxe-column field="RotorResolverPress" width="100px" title="旋转变压器压入" sortable />
    <vxe-column field="RotorReject" width="70px" title="排斥" sortable />
    <vxe-column field="RotorMagnetization" width="70px" title="磁性磁化" sortable />
    <vxe-column field="RotorExtractionInsp" width="100px" title="工序履历(抽样检查)" sortable />
    <vxe-column field="RotorShippingInsp" width="140px" title="工序履历(转子出厂检查综合判定)" sortable />
  </vxe-colgroup>

  <vxe-colgroup title="转子工序履历(TA区域MG2)">
    <vxe-column field="RotorTamg2shaftTrans" title="轴移载" sortable />
    <vxe-column field="RotorTamg2coreTrans" width="75px" title="铁芯移载" sortable />
    <vxe-column field="RotorTamg2heating" width="70px" title="加热" sortable />
    <vxe-column field="RotorTamg2shaftPress" title="轴圧入" sortable />
    <vxe-column field="RotorTamg2nutTight" width="75px" title="螺母紧固" sortable />
    <vxe-column field="RotorTamg2foreignSuction" width="100px" title="工序履历(异物吸引)" sortable />
    <vxe-column field="RotorTamg2nutCrimpMg1press" width="100px" title="螺母铆接MG1针压入" sortable />
    <vxe-column field="RotorTamg2resolverPress" width="100px" title="旋转变压器压入" sortable />
    <vxe-column field="RotorTamg2reject" width="70px" title="排斥" sortable />
    <vxe-column field="RotorTamg2magnetization" width="75px" title="磁性磁化" sortable />
    <vxe-column field="RotorTamg2extractionInsp" width="100px" title="工序履历(抽样检查)" sortable />
    <vxe-column field="RotorTamg2shippingInsp" width="140px" title="工序履历(转子出厂检查综合判定)" sortable />
  </vxe-colgroup>

  <vxe-colgroup title="马达工序履历">
    <vxe-column field="MotorMtrCode" title="ID写入" sortable />
    <vxe-column field="MotorSngen" width="100px" title="序号发生箱子集" sortable />
    <vxe-column field="MotorHsgSrfBrgAm" width="100px" title="Hsg面箱体BrgAM" sortable />
    <vxe-column field="MotorHsgSrfKnockPam" width="100px" title="Hsg面定位压入AM" sortable />
    <vxe-column field="MotorCoolPipeMw" width="100px" title="冷却管手工作业" sortable />
    <vxe-column field="MotorTermBoardMw" width="100px" title="端子台手工作业" sortable />
    <vxe-column field="MotorRrCoverSrfOutBrgAm" width="100px" title="Rr罩面外BrgAM" sortable />
    <vxe-column field="MotorRrCoverSrfKnockPam" width="100px" title="Rr罩面定位压入AM" sortable />
    <vxe-column field="MotorMg1statorInsAm" width="100px" title="MG1定子插入AM" sortable />
    <vxe-column field="MotorMg2statorInsAm" width="100px" title="MG2定子插入AM" sortable />
    <vxe-column field="MotorHarnEscMw" width="100px" title="线束释放手工作业" sortable />
    <vxe-column field="MotorMg12statorTightAm" width="110px" title="MG1、2定子紧固AM" sortable />
    <vxe-column field="MotorThermMw" width="100px" title="热敏电阻手工作业" sortable />
    <vxe-column field="MotorCoolPipeMw2" width="100px" title="冷却管手工作业" sortable />
    <vxe-column field="MotorMg12rotorAssem" width="100px" title="G1、2转子组装" sortable />
    <vxe-column field="MotorFipgapp" width="80px" title="FIPG涂布" sortable />
    <vxe-column field="MotorRrCoverAssem" width="80px" title="安装Rr罩子" sortable />
    <vxe-column field="MotorRrCoverTight1" width="80px" title="Rr罩子紧固1" sortable />
    <vxe-column field="MotorRrCoverTight2" width="80px" title="Rr罩子紧固2" sortable />
    <vxe-column field="MotorInvMw" title="翻转机" sortable />
    <vxe-column field="MotorMw1" width="70px" title="手动作业1" sortable />
    <vxe-column field="MotorMw2" width="70px" title="手动作业2" sortable />
    <vxe-column field="MotorPrevStn" title="前st" sortable />
    <vxe-column field="MotorMwco0" width="80px" title="手动作业Co0" sortable />
    <vxe-column field="MotorMwco1" width="80px" title="手动作业Co1" sortable />
    <vxe-column field="MotorMwco2" width="80px" title="手动作业Co2" sortable />
    <vxe-column field="MotorMwco3" width="80px" title="手动作业Co3" sortable />
    <vxe-column field="MotorReject" width="75px" title="拒绝确认" sortable />
  </vxe-colgroup>

  <vxe-colgroup title="盖体子工程履历">
    <vxe-column field="CoverSubIdsetSpare" width="75px" title="备用ID组合" sortable />
    <vxe-column field="CoverSubRrCovSetDmread" width="105px" title="Rr盖组合 DM读取" sortable />
    <vxe-column field="CoverSubRrCovBrgPressEquip" width="100px" title="Rr罩子Brg压入设备" sortable />
    <vxe-column field="CoverSubMw1" width="80px" title="手动作业1" sortable />
    <vxe-column field="CoverSubMw2" width="80px" title="手动作业2" sortable />
    <vxe-column field="CoverSubMw3" width="80px" title="手动作业３" sortable />
    <vxe-column field="CoverSubMw4" width="80px" title="手动作业４" sortable />
    <vxe-column field="CoverSubRrRevEquip" width="80px" title="RR反转设备" sortable />
    <vxe-column field="CoverSubWaterConnTighten" width="100px" title="防水连接器紧固" sortable />
    <vxe-column field="CoverSubReject" width="75px" title="拒绝" sortable />
  </vxe-colgroup>

  <vxe-colgroup title="差速器工序履历">
    <vxe-column field="DefDfcaseRead" width="115px" title="差速器内部组装DF盒读取" sortable />
    <vxe-column field="DefDfpinionShaftEquip" width="100px" title="DF小齿轮轴组装设备" sortable />
    <vxe-column field="DefDiffOperMeasureEquip" width="125px" title="差速器动作、位移量测量设备" sortable />
    <vxe-column field="DefTweezersMw" width="100px" title="插针式手动作业" sortable />
    <vxe-column field="DefDiffPinionPress" width="80px" title="差速器销铆接" sortable />
  </vxe-colgroup>

  <vxe-colgroup title="齿轮子工序履历">
    <vxe-column field="Dmread" width="70px" title="DM读入" sortable />
    <vxe-column field="GearPressIn1" width="80px" title="齿轮压入１" sortable />
    <vxe-column field="GearPressIn2" width="80px" title="齿轮压入２" sortable />
    <vxe-column field="Slnffastening" width="100px" title="Co从动螺母紧固" sortable />
    <vxe-column field="Slnfriveting" width="100px" title="Co从动螺母铆接" sortable />
    <vxe-column field="DiffBrgPressIn" width="100px" title="差速器Brg压入" sortable />
    <vxe-column field="DiffBoltTight1" width="100px" title="差速器螺栓紧固1" sortable />
    <vxe-column field="DiffBoltTight2" width="100px" title="差速器螺栓紧固2" sortable />
    <vxe-column field="RevRivetConfirm" width="100px" title="反转铆接确认" sortable />
    <vxe-column field="DamperImage" width="80px" title="ダンパー画像" sortable />
    <vxe-column field="Reject" width="75px" title="リジェクト" sortable />
  </vxe-colgroup>

  <vxe-colgroup title="Hsg子工序履历">
    <vxe-column field="Idwrite" width="75px" title="ID写入Hsg集" sortable />
    <vxe-column field="HsgSubShimSel" width="75px" title="垫片选择" sortable />
    <vxe-column field="HsgBrgPressIn1" width="80px" title="HsgBrg圧入1" sortable />
    <vxe-column field="HsgBrgPressIn2" width="80px" title="HsgBrg圧入2" sortable />
  </vxe-colgroup>

  <vxe-colgroup title="合体FIPG最终工序履历">
    <vxe-column field="GearAssembly1" width="80px" title="4种齿轮组装" sortable />
    <vxe-column field="OilPumpAssembly" width="75px" title="油泵组装" sortable />
    <vxe-column field="SubShimSel" width="75px" title="垫片选择" sortable />
    <vxe-column field="ShimSet" title="垫片组" sortable />
    <vxe-column field="LubPipeAssem" width="80px" title="润滑管组装" sortable />
    <vxe-column field="CaseFipgapp" width="80px" title="外壳FIPG涂敷" sortable />
    <vxe-column field="AssemJoining1" width="75px" title="合体组装" sortable />
    <vxe-column field="AssemTight1" width="75px" title="合体紧固１" sortable />
    <vxe-column field="AssemTight2" width="75px" title="合体紧固２" sortable />
    <vxe-column field="DrainPlugTight" width="80px" title="排水塞紧固" sortable />
    <vxe-column field="DiffOilsealPress1" width="100px" title="差速器油封压入1" sortable />
    <vxe-column field="DiffOilsealPress2" width="100px" title="差速器油封压入2" sortable />
    <vxe-column field="FillerTight" width="80px" title="フィラー締付" sortable />
    <vxe-column field="AssyUpright" width="75px" title="Assy正立" sortable />
    <vxe-column field="Idexchange" title="ID交换" sortable />
    <vxe-column field="OilCoolerAssem" width="80px" title="油冷却器组装" sortable />
    <vxe-column field="MandrelAttach" width="75px" title="心轴安装" sortable />
    <vxe-column field="Preprocessing" width="75px" title="前期准备" sortable />
    <vxe-column field="AssyLeakTest" width="80px" title="Assy泄漏测试" sortable />
    <vxe-column field="Insulation" width="70px" title="绝缘" sortable />
    <vxe-column field="OilInjection" title="油注入" sortable />
    <vxe-column field="AssyNoiseTest" width="80px" title="Assy噪声测试" sortable />
    <vxe-column field="Mw1" width="75px" title="手动作业①" sortable />
    <vxe-column field="Mw2" width="75px" title="手动作业②" sortable />
    <vxe-column field="Mw3" width="75px" title="手动作业③" sortable />
    <vxe-column field="SerialStamping" width="75px" title="序列刻印" sortable />
    <vxe-column field="ShippingPrep1" width="75px" title="发货步骤1" sortable />
    <vxe-column field="ShippingPrep2" width="75px" title="发货步骤2" sortable />
    <vxe-column field="VisualInsp" width="75px" title="外观检查" sortable />
    <vxe-column field="Fipgreject" width="70px" title="拒绝" sortable />
    <vxe-column field="titlePrinting" width="75px" title="标签发行" sortable />
  </vxe-colgroup>

  <vxe-colgroup title="特别">
    <vxe-column field="Reshuffle" width="80px" title="修改历史记录" sortable />
  </vxe-colgroup>

</template>
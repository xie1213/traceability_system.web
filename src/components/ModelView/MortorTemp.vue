<template>
  <div style="height: 600px;">
    <vxe-table :data="tableData" v-bind="TableConfig">
      <vxe-colgroup title="特定列" fixed="left">
        <vxe-column field="CollectionDate" title="采集时间" fixed="left" :formatter="formatDate" sortable />
        <vxe-column field="ShipmentSerial" title="出荷序列" fixed="left" sortable />
      </vxe-colgroup>
      <vxe-colgroup title="基本信息">
        <vxe-column field="InterNo" title="接口No" sortable />
        <vxe-column field="CaseDec" title="箱体识别" sortable />
        <vxe-column field="RrCoverDec" title="Rr盖判别" sortable />
        <vxe-column field="ParkingDec" title="停车识别" sortable />
        <vxe-column field="GearDec" title="齿轮识别" sortable />
        <vxe-column field="DefLingDec" title="变形判别" sortable />
        <vxe-column field="HsgDec" title="Hsg识别" sortable />
        <vxe-column field="Mg1statorDec" title="MG1定子判別" sortable />
        <vxe-column field="Mg2statorDec" title="MG2定子判別" sortable />
        <vxe-column field="Mg1rotorDec" title="MG1转子判別" sortable />
        <vxe-column field="Mg2rotorDec" title="MG2转子判別" sortable />
        <vxe-column field="LineDec" title="线体判別" sortable />
        <vxe-column field="Dfcase" title="DF箱体" sortable />
        <vxe-column field="OilPump" title="油泵" sortable />
      </vxe-colgroup>

      <vxe-colgroup title="序列">
        <vxe-column field="CaseSerial" title="CASE序列" sortable />
        <vxe-column field="HsgSerial" title="HSG序列" sortable />
        <vxe-column field="Mg1sserial" title="MG1定子序列"></vxe-column>
        <vxe-column field="Mg2sserial" title="MG2定子序列"></vxe-column>

        <vxe-column field="Mg1rserial" title="MG1转子序列" sortable />
        <vxe-column field="Mg2rserial" title="MG2转子序列" sortable />

        <vxe-column field="CoDriveSerial" title="计数器驱动器序列" sortable />
        <vxe-column field="MoDriveSerial" title="MG2修正序列" sortable />
        <vxe-column field="DrivenSerial" title="受驱动序列" sortable />
        <vxe-column field="DorpinSerial" title="差速器销序列" sortable />
        <vxe-column field="DfringSerial" title="齿圈序列" sortable />
        <vxe-column field="DfcaseSerial" title="差速器箱序列" sortable />
        <vxe-column field="RrcoverSerial" title="Rr盖序列" sortable />
        <!-- <vxe-column field="ShipmentSerial" title="出货序列" sortable /> -->
        <vxe-column field="RropSerial" title="Rr油泵序列" sortable />
      </vxe-colgroup>

      <vxe-colgroup title="转子工序履历">
        <vxe-column field="RotorShaftTrans" title="轴移载" sortable />
        <vxe-column field="RotorCoreTrans" title="铁芯移载" sortable />
        <vxe-column field="RotorHeating" title="加热" sortable />
        <vxe-column field="RotorShaftPress" title="轴圧入" sortable />
        <vxe-column field="RotorNutTight" title="螺母紧固" sortable />
        <vxe-column field="RotorForeignSuction" title="工序履历(异物吸引)" sortable />
        <vxe-column field="RotorNutCrimpMg1press" title="螺母铆接MG1针压入" sortable />
        <vxe-column field="RotorResolverPress" title="旋转变压器压入" sortable />
        <vxe-column field="RotorReject" title="排斥" sortable />
        <vxe-column field="RotorMagnetization" title="磁性磁化" sortable />
        <vxe-column field="RotorExtractionInsp" title="工序履历(抽样检查)" sortable />
        <vxe-column field="RotorShippingInsp" title="工序履历(转子出厂检查综合判定)" sortable />
      </vxe-colgroup>

      <vxe-colgroup title="转子工序履历(TA区域MG2)">
        <vxe-column field="RotorTamg2shaftTrans" title="轴移载" sortable />
        <vxe-column field="RotorTamg2coreTrans" title="铁芯移载" sortable />
        <vxe-column field="RotorTamg2heating" title="加热" sortable />
        <vxe-column field="RotorTamg2shaftPress" title="轴圧入" sortable />
        <vxe-column field="RotorTamg2nutTight" title="螺母紧固" sortable />
        <vxe-column field="RotorTamg2foreignSuction" title="工序履历(异物吸引)" sortable />
        <vxe-column field="RotorTamg2nutCrimpMg1press" title="螺母铆接MG1针压入" sortable />
        <vxe-column field="RotorTamg2resolverPress" title="旋转变压器压入" sortable />
        <vxe-column field="RotorTamg2reject" title="排斥" sortable />
        <vxe-column field="RotorTamg2magnetization" title="磁性磁化" sortable />
        <vxe-column field="RotorTamg2extractionInsp" title="工序履历(抽样检查)" sortable />
        <vxe-column field="RotorTamg2shippingInsp" title="工序履历(转子出厂检查综合判定)" sortable />
      </vxe-colgroup>

      <vxe-colgroup title="马达工序履历">
        <vxe-column field="MotorMtrCode" title="ID写入" sortable />
        <vxe-column field="MotorSngen" title="序号发生箱子集" sortable />
        <vxe-column field="MotorHsgSrfBrgAm" title="Hsg面箱体BrgAM" sortable />
        <vxe-column field="MotorHsgSrfKnockPam" title="Hsg面定位压入AM" sortable />
        <vxe-column field="MotorCoolPipeMw" title="冷却管手工作业" sortable />
        <vxe-column field="MotorTermBoardMw" title="端子台手工作业" sortable />
        <vxe-column field="MotorRrCoverSrfOutBrgAm" title="Rr罩面外BrgAM" sortable />
        <vxe-column field="MotorRrCoverSrfKnockPam" title="Rr罩面定位压入AM" sortable />
        <vxe-column field="MotorMg1statorInsAm" title="MG1定子插入AM" sortable />
        <vxe-column field="MotorMg2statorInsAm" title="MG2定子插入AM" sortable />
        <vxe-column field="MotorHarnEscMw" title="线束释放手工作业" sortable />
        <vxe-column field="MotorMg12statorTightAm" title="MG1、2定子紧固AM" sortable />
        <vxe-column field="MotorThermMw" title="热敏电阻手工作业" sortable />
        <vxe-column field="MotorCoolPipeMw2" title="冷却管手工作业" sortable />
        <vxe-column field="MotorMg12rotorAssem" title="G1、2转子组装" sortable />
        <vxe-column field="MotorFipgapp" title="FIPG涂布" sortable />
        <vxe-column field="MotorRrCoverAssem" title="安装Rr罩子" sortable />
        <vxe-column field="MotorRrCoverTight1" title="Rr罩子紧固1" sortable />
        <vxe-column field="MotorRrCoverTight2" title="Rr罩子紧固2" sortable />
        <vxe-column field="MotorInvMw" title="翻转机" sortable />
        <vxe-column field="MotorMw1" title="手动作业１" sortable />
        <vxe-column field="MotorMw2" title="手动作业2" sortable />
        <vxe-column field="MotorPrevStn" title="前st" sortable />
        <vxe-column field="MotorMwco0" title="手动作业Co0" sortable />
        <vxe-column field="MotorMwco1" title="手作業Co1" sortable />
        <vxe-column field="MotorMwco2" title="手动作业Co2" sortable />
        <vxe-column field="MotorMwco3" title="手动作业Co3" sortable />
        <vxe-column field="MotorReject" title="拒绝确认" sortable />
      </vxe-colgroup>

      <vxe-colgroup title="盖体子工程履历">
        <vxe-column field="CoverSubIdsetSpare" title="备用ID组合" sortable />
        <vxe-column field="CoverSubRrCovSetDmread" title="Rr盖组合 DM读取" sortable />
        <vxe-column field="CoverSubRrCovBrgPressEquip" title="Rr罩子Brg压入设备" sortable />
        <vxe-column field="CoverSubMw1" title="手动作业１" sortable />
        <vxe-column field="CoverSubMw2" title="手动作业2" sortable />
        <vxe-column field="CoverSubMw3" title="手动作业３" sortable />
        <vxe-column field="CoverSubMw4" title="手动作业４" sortable />
        <vxe-column field="CoverSubRrRevEquip" title="RR反转设备" sortable />
        <vxe-column field="CoverSubWaterConnTighten" title="防水连接器紧固" sortable />
        <vxe-column field="CoverSubReject" title="拒绝" sortable />
      </vxe-colgroup>

      <vxe-colgroup title="差速器工序履历">
        <vxe-column field="DefDfcaseRead" title="差速器内部组装DF盒读取" sortable />
        <vxe-column field="DefDfpinionShaftEquip" title="DF小齿轮轴组装设备" sortable />
        <vxe-column field="DefDiffOperMeasureEquip" title="差速器动作、位移量测量设备" sortable />
        <vxe-column field="DefTweezersMw" title="插针式手动作业" sortable />
        <vxe-column field="DefDiffPinionPress" title="差速器销铆接" sortable />
      </vxe-colgroup>

      <vxe-colgroup title="齿轮子工序履历">
        <vxe-column field="Dmread" title="DM读入" sortable />
        <vxe-column field="GearPressIn1" title="齿轮压入１" sortable />
        <vxe-column field="GearPressIn2" title="齿轮压入２" sortable />
        <vxe-column field="Slnffastening" title="Co从动螺母紧固" sortable />
        <vxe-column field="Slnfriveting" title="Co从动螺母铆接" sortable />
        <vxe-column field="DiffBrgPressIn" title="差速器Brg压入" sortable />
        <vxe-column field="DiffBoltTight1" title="差速器螺栓紧固1" sortable />
        <vxe-column field="DiffBoltTight2" title="差速器螺栓紧固2" sortable />
        <vxe-column field="RevRivetConfirm" title="反转铆接确认" sortable />
        <vxe-column field="DamperImage" title="ダンパー画像" sortable />
        <vxe-column field="Reject" title="リジェクト" sortable />
      </vxe-colgroup>

      <vxe-colgroup title="Hsg子工序履历">
        <vxe-column field="Idwrite" title="ID写入Hsg集" sortable />
        <vxe-column field="HsgSubShimSel" title="垫片选择" sortable />
        <vxe-column field="HsgBrgPressIn1" title="HsgBrg圧入1" sortable />
        <vxe-column field="HsgBrgPressIn2" title="HsgBrg圧入2" sortable />
      </vxe-colgroup>

      <vxe-colgroup title="合体FIPG最终工序履历">
        <vxe-column field="GearAssembly1" title="4种齿轮组装" sortable />
        <vxe-column field="OilPumpAssembly" title="油泵组装" sortable />
        <vxe-column field="SubShimSel" title="垫片选择" sortable />
        <vxe-column field="ShimSet" title="垫片组" sortable />
        <vxe-column field="LubPipeAssem" title="润滑管组装" sortable />
        <vxe-column field="CaseFipgapp" title="外壳FIPG涂敷" sortable />
        <vxe-column field="AssemJoining1" title="合体组装" sortable />
        <vxe-column field="AssemTight1" title="合体紧固１" sortable />
        <vxe-column field="AssemTight2" title="合体紧固２" sortable />
        <vxe-column field="DrainPlugTight" title="排水塞紧固" sortable />
        <vxe-column field="DiffOilsealPress1" title="差速器油封压入1" sortable />
        <vxe-column field="DiffOilsealPress2" title="差速器油封压入2" sortable />
        <vxe-column field="FillerTight" title="フィラー締付" sortable />
        <vxe-column field="AssyUpright" title="Assy正立" sortable />
        <vxe-column field="Idexchange" title="ID交换" sortable />
        <vxe-column field="OilCoolerAssem" title="油冷却器组装" sortable />
        <vxe-column field="MandrelAttach" title="心轴安装" sortable />
        <vxe-column field="Preprocessing" title="前期准备" sortable />
        <vxe-column field="AssyLeakTest" title="Assy泄漏测试" sortable />
        <vxe-column field="Insulation" title="绝缘" sortable />
        <vxe-column field="OilInjection" title="油注入" sortable />
        <vxe-column field="AssyNoiseTest" title="Assy噪声测试" sortable />
        <vxe-column field="Mw1" title="手动作业①" sortable />
        <vxe-column field="Mw2" title="手动作业②" sortable />
        <vxe-column field="Mw3" title="手动作业③" sortable />
        <vxe-column field="SerialStamping" title="序列刻印" sortable />
        <vxe-column field="ShippingPrep1" title="发货步骤1" sortable />
        <vxe-column field="ShippingPrep2" title="发货步骤2" sortable />
        <vxe-column field="VisualInsp" title="外观检查" sortable />
        <vxe-column field="Fipgreject" title="拒绝" sortable />
        <vxe-column field="titlePrinting" title="标签发行" sortable />
      </vxe-colgroup>

      <vxe-colgroup title="特别">
        <vxe-column field="Reshuffle" title="修改历史记录" sortable />
      </vxe-colgroup>

      <vxe-colgroup title="防错防误１计测日時">
        <vxe-column field="PokayokeDate1" title="防错防误１计测日時" sortable />
      </vxe-colgroup>

      <vxe-colgroup title="防错防误2计测日時">
        <vxe-column field="PokayokeDate2" title="防错防误2计测日時" sortable />
      </vxe-colgroup>

      <vxe-colgroup title="Hsg面壳Brg压入">
        <vxe-column field="HsgBrgDate" title="计测日时" sortable />
        <vxe-column field="HsgBrgStroke" title="拐点行程" sortable />
        <vxe-column field="HsgBrgLoad" title="変曲点负重" sortable />
        <vxe-column field="HsgBrgFinalStroke" title="最终行程" sortable />
        <vxe-column field="HsgBrgFinalLoad" title="最終荷负重" sortable />
        <vxe-column field="HsgBrgStrokeSec" title="拐点行程" sortable />
        <vxe-column field="HsgBrgLoadSec" title="変曲点负重" sortable />
        <vxe-column field="HsgBrgFinalStrokeSec" title="最终行程" sortable />
        <vxe-column field="HsgBrgFinalLoadSec" title="最終荷负重" sortable />
        <vxe-column field="HsgBrgMainStroke" title="主行程" sortable />
        <vxe-column field="HsgBrgAbvalue" title=A/B sortable />
      </vxe-colgroup>

      <vxe-colgroup title="Hsg面定位销压入">
        <vxe-column field="HsgKnockDate" title="计测日时" sortable />
        <vxe-column field="HsgKnockStroke" title="拐点行程" sortable />
        <vxe-column field="HsgKnockLoad" title="変曲点负重" sortable />
        <vxe-column field="HsgKnockFinalStroke" title="最终行程" sortable />
        <vxe-column field="HsgKnockFinalLoad" title="最終荷负重" sortable />
        <vxe-column field="HsgKnockStrokeSec" title="拐点行程" sortable />
        <vxe-column field="HsgKnockLoadSec" title="変曲点负重" sortable />
        <vxe-column field="HsgKnockFinalStrokeSec" title="最终行程" sortable />
        <vxe-column field="HsgKnockFinalLoadSec" title="最終荷负重" sortable />
        <vxe-column field="HsgKnockMainStroke" title="主行程" sortable />
        <vxe-column field="HsgKnockAbvalue" title=A/B sortable />
      </vxe-colgroup>

      <vxe-colgroup title="防错防误3计测日時">
        <vxe-column field="PokayokeDate3" title="防错防误3计测日時" sortable />
      </vxe-colgroup>

      <vxe-colgroup title="防错防误4计测日時">
        <vxe-column field="PokayokeDate4" title="防错防误4计测日時" sortable />
      </vxe-colgroup>

      <vxe-colgroup title="RR面壳体Brg压入">
        <vxe-column field="RrbrgDate" title="计测日时" sortable />
        <vxe-column field="RrbrgStroke" title="拐点行程" sortable />
        <vxe-column field="RrbrgLoad" title="変曲点负重" sortable />
        <vxe-column field="RrbrgFinalStroke" title="最终行程" sortable />
        <vxe-column field="RrbrgFinalLoad" title="最終荷负重" sortable />
        <vxe-column field="RrbrgStrokeSec" title="拐点行程" sortable />
        <vxe-column field="RrbrgLoadSec" title="変曲点负重" sortable />
        <vxe-column field="RrbrgFinalStrokeSec" title="最终行程" sortable />
        <vxe-column field="RrbrgFinalLoadSec" title="最終荷负重" sortable />
        <vxe-column field="RrbrgMainStroke" title="主行程" sortable />
        <vxe-column field="RrbrgAbvalue" title=A/B sortable />
      </vxe-colgroup>

      <vxe-colgroup title="RR面定位销压入">
        <vxe-column field="RrknockDate" title="计测日时" sortable />
        <vxe-column field="RrknockStroke" title="拐点行程" sortable />
        <vxe-column field="RrknockLoad" title="変曲点负重" sortable />
        <vxe-column field="RrknockFinalStroke" title="最终行程" sortable />
        <vxe-column field="RrknockFinalLoad" title="最終荷负重" sortable />
        <vxe-column field="RrknockStrokeSec" title="拐点行程" sortable />
        <vxe-column field="RrknockLoadSec" title="変曲点负重" sortable />
        <vxe-column field="RrknockFinalStrokeSec" title="最终行程" sortable />
        <vxe-column field="RrknockFinalLoadSec" title="最終荷负重" sortable />
        <vxe-column field="RrknockMainStroke" title="主行程" sortable />
        <vxe-column field="RrknockAbvalue" title=A/B sortable />
      </vxe-colgroup>

      <vxe-colgroup title="MG1组装・端子台紧固">
        <vxe-column field="Mg1date" title="计测日时" sortable />
        <vxe-column field="Mg1torqAngleAxis1" title="紧固角度1轴" sortable />
        <vxe-column field="Mg1codeAxis1" title="第1轴判定代码" sortable />
        <vxe-column field="Mg1torqAngleAxis2" title="紧固角度2轴" sortable />
        <vxe-column field="Mg1codeAxis2" title="第2轴判定代码" sortable />
        <vxe-column field="Mg1torqAngleAxis3" title="紧固角度3轴" sortable />
        <vxe-column field="Mg1codeAxis3" title="第3轴判定代码" sortable />
      </vxe-colgroup>

      <vxe-colgroup title="MG2组装・端子台紧固">
        <vxe-column field="Mg2date" title="计测日时" sortable />
        <vxe-column field="Mg2torqAngleAxis1" title="紧固角度1轴" sortable />
        <vxe-column field="Mg2codeAxis1" title="第1轴判定代码" sortable />
        <vxe-column field="Mg2torqAngleAxis2" title="紧固角度2轴" sortable />
        <vxe-column field="Mg2codeAxis2" title="第2轴判定代码" sortable />
        <vxe-column field="Mg2torqAngleAxis3" title="紧固角度3轴" sortable />
        <vxe-column field="Mg2codeAxis3" title="第3轴判定代码" sortable />
      </vxe-colgroup>

      <vxe-colgroup title="防错防误５计测日時">
        <vxe-column field="PokayokeDate5" title="防错防误５计测日時" sortable />
      </vxe-colgroup>

      <vxe-colgroup title="定子本体紧固">
        <vxe-column field="StatorDate" title="计测日时" sortable />
        <vxe-column field="TorqAngleAxis1" title="紧固角度1軸" sortable />
        <vxe-column field="CodeAxis1" title="第1轴判定代码" sortable />
        <vxe-column field="TorqAngleAxis2" title="紧固角度2軸" sortable />
        <vxe-column field="CodeAxis2" title="第2轴判定代码" sortable />
        <vxe-column field="TorqAngleAxis3" title="紧固角度3軸1" sortable />
        <vxe-column field="CodeAxis3" title="第3轴1判定代码" sortable />
        <vxe-column field="AngleAxis1Sec" title="紧固角度1軸" sortable />
        <vxe-column field="AxisCode1Sec" title="第一轴判定代码" sortable />
        <vxe-column field="AngleAxis2Sec" title="紧固角度2軸" sortable />
        <vxe-column field="AxisCode2Sec" title="第2轴判定代码" sortable />
        <vxe-column field="AngleAxis3Sec" title="紧固角度3軸" sortable />
        <vxe-column field="AxisCode3Sec" title="第3轴判定代码" sortable />
        <vxe-column field="Mg1stator1" title="MG1定子1軸塑性区紧固扭矩" sortable />
        <vxe-column field="Mg1stator2" title="MG1定子2軸塑性区紧固扭矩" sortable />
        <vxe-column field="Mg1stator3" title="MG1定子3軸塑性区紧固扭矩" sortable />
        <vxe-column field="Mg2stator1" title="MG2定子1軸塑性区紧固扭矩" sortable />
        <vxe-column field="Mg2stator2" title="MG2定子2軸塑性区紧固扭矩" sortable />
        <vxe-column field="Mg2stator3" title="MG2定子3軸塑性区紧固扭矩" sortable />
      </vxe-colgroup>

      <vxe-colgroup title="防错防误6计测日時">
        <vxe-column field="PokayokeDate6" title="防错防误6计测日時" sortable />
      </vxe-colgroup>

      <vxe-colgroup title="防错防误7计测日時">
        <vxe-column field="PokayokeDate7" title="防错防误7计测日時" sortable />
      </vxe-colgroup>

      <vxe-colgroup title="转子磁化移载">
        <vxe-column field="MeasDate" title="计测日时" sortable />
        <vxe-column field="Mg1workTemp" title="MG1工件温度" sortable />
        <vxe-column field="Mg1fluxValue" title="MG1通量值" sortable />
        <vxe-column field="Mg1dec" title="MG1判定" sortable />
        <vxe-column field="Mg2workTemp" title="MG2工件温度" sortable />
        <vxe-column field="Mg2fluxValue" title="MG2通量值" sortable />
        <vxe-column field="Mg2dec" title="MG2判定" sortable />
      </vxe-colgroup>

      <vxe-colgroup title="RrFIGP">
        <vxe-column field="RrFigpdate" title="计测日时" sortable />
        <vxe-column field="ImgResult" title="画像判定結果" sortable />
      </vxe-colgroup>

      <vxe-colgroup title="Rr罩子组装">
        <vxe-column field="RrcoverDate" title="计测日時" sortable />
      </vxe-colgroup>

      <vxe-colgroup title="合体①">
        <vxe-column field="TotalDate1" title="计测日时合体" sortable />
        <vxe-column field="Total1AngleAxis1" title="紧固角度1軸" sortable />
        <vxe-column field="Total1Axis1Code" title="第1轴判定代码" sortable />
        <vxe-column field="Total1AngleAxis2" title="紧固角度2軸" sortable />
        <vxe-column field="Total1Axis2Code" title="第2轴判定代码" sortable />
        <vxe-column field="Total1AngleAxis3" title="紧固角度3軸" sortable />
        <vxe-column field="Total1Axis3Code" title="第3轴判定代码" sortable />
        <vxe-column field="Total1AngleAxis4" title="紧固角度4軸" sortable />
        <vxe-column field="Total1Axis4Code" title="第4轴判定代码" sortable />
        <vxe-column field="Total1AngleAxis5" title="紧固角度5軸" sortable />
        <vxe-column field="Total1Axis5Code" title="5軸目判定代码" sortable />
        <vxe-column field="Total1AngleAxis6" title="紧固角度6軸" sortable />
        <vxe-column field="Total1Axis6Code" title="6軸目判定代码" sortable />
        <vxe-column field="Total1AngleAxis7" title="紧固角度7軸" sortable />
        <vxe-column field="Total1Axis7Code" title="7軸目判定代码" sortable />
        <vxe-column field="Total1AngleAxis8" title="紧固角度8軸" sortable />
        <vxe-column field="Total1Axis8Code" title="8軸目判定代码" sortable />
        <vxe-column field="Total1AngleAxis9" title="紧固角度9軸" sortable />
        <vxe-column field="Total1Axis9Code" title="9軸目判定代码" sortable />
        <vxe-column field="Total1AngleAxis10" title="紧固角度10軸" sortable />
        <vxe-column field="Total1Axis10Code" title="10軸目判定代码" sortable />
        <vxe-column field="Total1AngleAxis11" title="紧固角度11軸" sortable />
        <vxe-column field="Total1Axis11Code" title="第1轴判定代码" sortable />
        <vxe-column field="Total1Abvalue" title=A/B sortable />
      </vxe-colgroup>

      <vxe-colgroup title="合体②">
        <vxe-column field="Total2Date" title="计测日时" sortable />
        <vxe-column field="Angle1Axis" title="紧固角度1軸" sortable />
        <vxe-column field="Axis1Code" title="第1轴判定代码" sortable />
        <vxe-column field="Angle2Axis" title="紧固角度2軸" sortable />
        <vxe-column field="Axis2Code" title="第2轴判定代码" sortable />
        <vxe-column field="Angle3Axis" title="紧固角度3軸" sortable />
        <vxe-column field="Axis3Code" title="第3轴判定代码" sortable />
        <vxe-column field="Angle4Axis" title="紧固角度4軸" sortable />
        <vxe-column field="Axis4Code" title="第4轴判定代码" sortable />
        <vxe-column field="Angle5Axis" title="紧固角度5軸" sortable />
        <vxe-column field="Axis5Code" title="5軸目判定代码" sortable />
        <vxe-column field="Angle6Axis" title="紧固角度6軸" sortable />
        <vxe-column field="Axis6Code" title="6軸目判定代码" sortable />
        <vxe-column field="Angle7Axis" title="紧固角度7軸" sortable />
        <vxe-column field="Axis7Code" title="第7轴判定代码" sortable />
        <vxe-column field="Angle8Axis" title="紧固角度8軸" sortable />
        <vxe-column field="Axis8Code" title="第8轴判定代码" sortable />
        <vxe-column field="Angle9Axis" title="紧固角度9軸" sortable />
        <vxe-column field="Axis9Code" title="第9轴判定代码" sortable />
        <vxe-column field="Angle10Axis" title="紧固角度10軸" sortable />
        <vxe-column field="Axis10Code" title="第10轴判定代码" sortable />
        <vxe-column field="Ab" title=A/B sortable />
      </vxe-colgroup>

      <vxe-colgroup title="箱体反转">
        <vxe-column field="ReDate" title="计测日時" sortable />
      </vxe-colgroup>

      <vxe-colgroup title="防错防误预备计测日時">
        <vxe-column field="PokayokeDateBas" title="防错防误预备计测日時" sortable />
      </vxe-colgroup>

      <vxe-colgroup title="防错防误计测日時">
        <vxe-column field="PokayokeDate8" title="防错防误8计测日時" sortable />
        <vxe-column field="PokayokeDate9" title="防错防误9计测日時" sortable />
        <vxe-column field="PokayokeDate10" title="防错防误10计测日時" sortable />
        <vxe-column field="PokayokeDate11" title="防错防误11计测日時" sortable />
        <vxe-column field="PokayokeDate12" title="防错防误12计测日時" sortable />
        <vxe-column field="PokayokeDate13" title="防错防误13计测日時" sortable />
        <vxe-column field="PokayokeDate14" title="防错防误14计测日時" sortable />
      </vxe-colgroup>
    </vxe-table>
  </div>

</template>
<script setup>
import { defineProps } from 'vue';
import { TableConfig } from '@/service/GetDataMethod/utils';
import XEUtils from 'xe-utils'

defineProps({
  tableData: Array,
})

const formatDate = ({ cellValue }) => {
  return XEUtils.toDateString(cellValue, 'yyyy-MM-dd HH:ss:mm')
}
</script>
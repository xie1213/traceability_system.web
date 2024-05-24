<template>
    <vxe-table :data="tableData" v-bind="TableConfig">
      <vxe-colgroup title="上传时间和序列号" fixed="left">
        <vxe-column field="CollectionDate" width="150px" title="采集时间" fixed="left" :formatter="formatDate" sortable />
        <vxe-column field="Mg1rserial" width="150px" title="转子序列" fixed="left" sortable />
      </vxe-colgroup>
      <vxe-colgroup title="基本信息">
        <vxe-column field="InterNo" width="61px" title="接口No" sortable />
        <vxe-column field="CaseDec" width="62px" title="箱体识别" sortable />
        <vxe-column field="RrCoverDec" width="63px" title="Rr盖判别" sortable />
        <vxe-column field="ParkingDec" width="62px" title="停车识别" sortable />
        <vxe-column field="GearDec" width="62px" title="齿轮识别" sortable />
        <vxe-column field="DefLingDec" width="62px" title="变形判别" sortable />
        <vxe-column field="HsgDec" width="62px" title="Hsg识别" sortable />
        <vxe-column field="Mg1statorDec" width="80px" title="MG1定子判別" sortable />
        <vxe-column field="Mg2statorDec" width="80px" title="MG2定子判別" sortable />
        <vxe-column field="Mg1rotorDec" width="80px" title="MG1转子判別" sortable />
        <vxe-column field="Mg2rotorDec" width="80px" title="MG2转子判別" sortable />
        <vxe-column field="LineDec" width="62px" title="线体判別" sortable />
        <vxe-column field="Dfcase" width="62px" title="DF箱体" sortable />
        <vxe-column field="OilPump" width="70px" title="油泵" sortable />
      </vxe-colgroup>

      <vxe-colgroup title="序列">
        <vxe-column field="CaseSerial" width="145px" title="CASE序列" sortable />
        <vxe-column field="HsgSerial" width="145px" title="HSG序列" sortable />
        <vxe-column field="Mg1sserial" width="145px" title="MG1定子序列" sortable></vxe-column>
        <vxe-column field="Mg2sserial" width="145px" title="MG2定子序列" sortable></vxe-column>
        <!-- <vxe-column field="Mg1rserial" width="145px" title="MG1转子序列" sortable /> -->
        <vxe-column field="Mg2rserial" width="145px" title="MG2转子序列" sortable />
        <vxe-column field="CoDriveSerial" width="155px" title="计数器驱动器序列" sortable />
        <vxe-column field="MoDriveSerial" width="145px" title="MG2修正序列" sortable />
        <vxe-column field="DrivenSerial" width="145px" title="受驱动序列" sortable />
        <vxe-column field="DorpinSerial" width="145px" title="差速器销序列" sortable />
        <vxe-column field="DfringSerial" width="145px" title="齿圈序列" sortable />
        <vxe-column field="DfcaseSerial" width="145px" title="差速器箱序列" sortable />
        <vxe-column field="RrcoverSerial" width="155px" title="Rr盖序列" sortable />
        <vxe-column field="ShipmentSerial" width="155px" title="出货序列" sortable />
        <vxe-column field="RropSerial" width="145px" title="Rr油泵序列" sortable />
      </vxe-colgroup>

      <BasicTemp />
      
      <PokayokeDate :colName="'防错防误39计测日時'" :value="'PokayokeDate39'" />
      <PokayokeDate :colName="'防错防误40计测日時'" :value="'PokayokeDate40'" />

      <vxe-colgroup title="RrBrg圧入">
        <vxe-column field="HsgBrgMeasDate" width="100px" title="RrBrg圧入计测日时" sortable></vxe-column>
        <vxe-column field="HsgBrgInflectPtStroke" width="100px" title="RrBrg圧入拐点行程1" sortable></vxe-column>
        <vxe-column field="HsgBrgInflectPtLoad" width="100px" title="RrBrg圧入拐点负重1" sortable></vxe-column>
        <vxe-column field="HsgBrgFinalStroke" width="100px" title="RrBrg圧入最终行程1" sortable></vxe-column>
        <vxe-column field="HsgBrgFinalLoad" width="100px" title="RrBrg圧入最终负重1" sortable></vxe-column>
        <vxe-column field="HsgBrgInflectPtStrokeSec" width="100px" title="RrBrg圧入拐点行程2" sortable></vxe-column>
        <vxe-column field="HsgBrgInflectPtLoadSec" width="100px" title="RrBrg圧入拐点负重2" sortable></vxe-column>
        <vxe-column field="HsgBrgFinalStrokeSec" width="100px" title="RrBrg圧入最终行程2" sortable></vxe-column>
        <vxe-column field="HsgBrgFinalLoadSec" width="100px" title="RrBrg圧入最终负重2" sortable></vxe-column>
        <vxe-column field="HsgBrgMaasterStroke" width="100px" title="RrBrg圧入主行程" sortable></vxe-column>
      </vxe-colgroup>

      <PokayokeDate :colName="'防错防误41计测日時'" :value="'PokayokeDate41'" />
      <PokayokeDate :colName="'防错防误42计测日時'" :value="'PokayokeDate42'" />
      <PokayokeDate :colName="'防错防误43计测日時'" :value="'PokayokeDate43'" />
      <PokayokeDate :colName="'防错防误44计测日時'" :value="'PokayokeDate44'" />
      <PokayokeDate :colName="'翻转机'" :value="'UpenderDate'" />
      <PokayokeDate :colName="'防错防误45计测日時'" :value="'PokayokeDate45'" />
      <PokayokeDate :colName="'拒绝计测日時'" :value="'RejectTimeDate'" />
      <PokayokeDate :colName="'防错防误33计测日時'" :value="'PokayokeDate33'" />

      <vxe-colgroup title="差速器装配">
        <vxe-column field="DgameasDate" width="165px" title="计测日时" sortable></vxe-column>
        <vxe-column field="Dgapos3Axis" width="80px" title="推进位置3轴" sortable></vxe-column>
        <vxe-column field="Dgaload3Axis" width="95px" title="负重（电流值）3轴" sortable></vxe-column>
        <vxe-column field="Dgapos4Axis" width="80px" title="推进位置4轴" sortable></vxe-column>
        <vxe-column field="Dgaload4Axis" width="95px" title="负重（电流值）4轴" sortable></vxe-column>
      </vxe-colgroup>
      <PokayokeDate :colName="'防错防误34计测日時'" :value="'PokayokeDate34'" />

      <vxe-colgroup title="差动齿轮测量">
        <vxe-column field="DgmmeasTimeDate" width="165px" title="计测日时" sortable></vxe-column>
        <vxe-column field="Dgmdagjudge" width="85px" title="作齿轮判定" sortable></vxe-column>
        <vxe-column field="DgmlhRh" title="変位量" sortable></vxe-column>
        <vxe-column field="DgmmaxTorque" width="70px" title="上限扭矩" sortable></vxe-column>
        <vxe-column field="DgmminTorque" width="70px" title="下限扭矩" sortable></vxe-column>
      </vxe-colgroup>

      <vxe-colgroup title="差速器销铆接">
        <vxe-column field="DprmeasTimeDate" width="165px" title="计测日时" sortable></vxe-column>
        <vxe-column field="Dprfrs" width="70px" title="最终行程" sortable></vxe-column>
        <vxe-column field="Dprfrl" width="85px" title="铆接最终负重" sortable></vxe-column>
      </vxe-colgroup>

      <PokayokeDate :colName="'防错防误35计测日時'" :value="'PokayokeDate35'" />


      <vxe-colgroup title="齿轮压入1">
        <vxe-column field="GearMeasDate" width="165px" title="计测日时" sortable></vxe-column>
        <vxe-column field="GearStroke" width="70px" title="拐点行程" sortable></vxe-column>
        <vxe-column field="GearLoad" width="75px" title="変曲点负重" sortable></vxe-column>
        <vxe-column field="GearFinalStroke" width="70px" title="最终行程" sortable></vxe-column>
        <vxe-column field="GearFinalLoad" width="75px" title="最終荷负重" sortable></vxe-column>
        <vxe-column field="GearStrokeSec" width="70px" title="拐点行程" sortable></vxe-column>
        <vxe-column field="GearLoadSec" width="75px" title="変曲点负重" sortable></vxe-column>
        <vxe-column field="GearFinalStrokeSec" width="70px" title="最终行程" sortable></vxe-column>
        <vxe-column field="GearFinalLoadSec" width="70px" title="最終荷负重" sortable></vxe-column>
        <vxe-column field="GearMainStroke" title="主行程" sortable></vxe-column>
        <vxe-column field="GearAbvalue" width="70px" title="A/B" sortable></vxe-column>
      </vxe-colgroup>

      <vxe-colgroup title="齿轮压入2">
        <vxe-column field=Gear2Date width="165px" title=计测日时 sortable></vxe-column>
        <vxe-column field=Gear2Stroke width="70px" title=拐点行程 sortable></vxe-column>
        <vxe-column field=Gear2Load width="75px" title=変曲点负重 sortable></vxe-column>
        <vxe-column field=Gear2FinalStroke width="70px" title=最终行程 sortable></vxe-column>
        <vxe-column field=Gear2FinalLoad width="75px" title=最終荷负重 sortable></vxe-column>
        <vxe-column field=Gear2StrokeSec width="70px" title=拐点行程 sortable></vxe-column>
        <vxe-column field=Gear2LoadSec width="75px" title=変曲点负重 sortable></vxe-column>
        <vxe-column field=Gear2FinalStrokeSec width="70px" title=最终行程 sortable></vxe-column>
        <vxe-column field=Gear2FinalLoadSec width="75px" title=最終荷负重 sortable></vxe-column>
        <vxe-column field=Gear2MainStroke title=主行程 sortable></vxe-column>
        <vxe-column field=Gear2Abvalue width="70px" title=A/B sortable></vxe-column>
      </vxe-colgroup>

      <vxe-colgroup title="差速器销l螺母紧固">
        <vxe-column field=DpntDate width="165px" title="计测日时" sortable></vxe-column>
        <vxe-column field=DpntTorqueAxis1 width="80px" title="紧固扭矩1軸" sortable></vxe-column>
        <vxe-column field=DpntAngleAxis1 width="80px" title="紧固角度1軸" sortable></vxe-column>
        <vxe-column field=DpntJudgment width="70px" title="判定代码" sortable></vxe-column>
        <vxe-column field=DpntSeating width="80px" title="着座扭矩1軸" sortable></vxe-column>
        <vxe-column field=DpntDrop width="80px" title="下降角度1軸" sortable></vxe-column>
        <vxe-column field=DpntSlack width="100px" title="松弛监视器扭矩1軸" sortable></vxe-column>
      </vxe-colgroup>

      <vxe-colgroup title="差速器销螺母铆接">
        <vxe-column field=DpnfMeasDate width="165px" title=计测日时 sortable></vxe-column>
        <vxe-column field=DpnfFinalStroke width="70px" title=最终行程 sortable></vxe-column>
        <vxe-column field=DpnfFinalLoad width="70px" title=最终负重 sortable></vxe-column>
        <vxe-column field=DpnfMainStroke title=主行程 sortable></vxe-column>
      </vxe-colgroup>

      <vxe-colgroup title="DF BRG＋环圧入">
        <vxe-column field=DfbrgDate width="165px" title=计测日时 sortable></vxe-column>
        <vxe-column field=Dfbrgstroke width="70px" title=拐点行程 sortable></vxe-column>
        <vxe-column field=Dfbrgload width="70px" title=拐点负重 sortable></vxe-column>
        <vxe-column field=DfbrgfinalStroke width="70px" title=最终行程 sortable></vxe-column>
        <vxe-column field=DfbrgfinalLoad width="70px" title=最终负重 sortable></vxe-column>
        <vxe-column field=DfbrgstrokeSec width="70px" title=拐点行程 sortable></vxe-column>
        <vxe-column field=DfbrgloadSec width="70px" title=拐点负重 sortable></vxe-column>
        <vxe-column field=DfbrgfinalStrokeSec width="70px" title=最终行程 sortable></vxe-column>
        <vxe-column field=DfbrgfinalLoadSec width="70px" title=最终负重 sortable></vxe-column>
        <vxe-column field=DfbrgmainStroke title=主行程 sortable></vxe-column>
      </vxe-colgroup>

      <vxe-colgroup title="DF紧固1">
        <vxe-column field="Df1Date" width="165px" title="计测日时" sortable></vxe-column>
        <vxe-column field='Df1angleAxis1' width="80px" title="紧固角度 1軸" sortable></vxe-column>
        <vxe-column field='Df1codeAxis1' width="85px" title='第1軸 判定代码' sortable></vxe-column>
        <vxe-column field='Df1angleAxis2' width="80px" title="紧固角度 2軸" sortable></vxe-column>
        <vxe-column field='Df1codeAxis2' width="85px" title="第２軸 判定代码" sortable></vxe-column>
        <vxe-column field='Df1angleAxis3' width="80px" title="紧固角度 3軸" sortable></vxe-column>
        <vxe-column field='Df1codeAxis3' width="85px" title="第３軸 判定代码" sortable></vxe-column>
        <vxe-column field='Df1angleAxis4' width="80px" title="紧固角度 4軸" sortable></vxe-column>
        <vxe-column field='Df1codeAxis4' width="85px" title="第4軸 判定代码" sortable></vxe-column>
        <vxe-column field='Df1angleAxis5' width="80px" title="紧固角度 5軸" sortable></vxe-column>
        <vxe-column field='Df1codeAxis5' width="85px" title="第5軸 判定代码" sortable></vxe-column>
        <vxe-column field='Df1angleAxis6' width="80px" title="紧固角度 6軸" sortable></vxe-column>
        <vxe-column field='Df1codeAxis6' width="85px" title="第6軸 判定代码" sortable></vxe-column>
        <vxe-column field='Df1abvalue' width="70px" title="A/B" sortable></vxe-column>
      </vxe-colgroup>

      <vxe-colgroup title="DF紧固2">
        <vxe-column field="Df2Date" width="165px" title="计测日时" sortable></vxe-column>
        <vxe-column field="Df2angleAxis1" width="80px" title="紧固角度 1軸" sortable></vxe-column>
        <vxe-column field="Df2codeAxis1" width="85px" title="第1軸 判定代码" sortable></vxe-column>
        <vxe-column field='Df2angleAxis2' width="80px" title="紧固角度 2軸" sortable></vxe-column>
        <vxe-column field="Df2codeAxis2" width="85px" title="第２軸 判定代码" sortable></vxe-column>
        <vxe-column field="Df2angleAxis3" width="80px" title="紧固角度 3軸" sortable></vxe-column>
        <vxe-column field="Df2codeAxis3" width="85px" title='第３軸 判定代码' sortable></vxe-column>
        <vxe-column field="Df2angleAxis4" width="80px" title="紧固角度 4軸" sortable></vxe-column>
        <vxe-column field="Df2codeAxis4" width="85px" title="第4軸 判定代码" sortable></vxe-column>
        <vxe-column field="Df2angleAxis5" width="80px" title="紧固角度 5軸" sortable></vxe-column>
        <vxe-column field="Df2codeAxis5" width="85px" title="第5軸 判定代码" sortable></vxe-column>
        <vxe-column field="Df2angleAxis6" width="80px" title="紧固角度 6軸" sortable></vxe-column>
        <vxe-column field="Df2codeAxis6" width="85px" title="第6軸 判定代码" sortable></vxe-column>
        <vxe-column field="Df2abvalue" width="70px" title="A/B" sortable></vxe-column>
      </vxe-colgroup>

      <PokayokeDate :colName="'DF反転计测日時'" :value="'DfreverseDate'" />
      <PokayokeDate :colName="'防错防误36计测日時'" :value="'PokayokeDate36'" />
      <PokayokeDate :colName="'防错防误37计测日時'" :value="'PokayokeDate37'" />
      <PokayokeDate :colName="'防错防误38计测日時'" :value="'PokayokeDate38'" />

      <vxe-colgroup title="MG1磁化">
        <vxe-column field='Mg1workTemp' width="80px" title="MG1工件温度" sortable></vxe-column>
        <vxe-column field="Mg1fluxValue" width="80px" title="MG1通量值" sortable></vxe-column>
        <vxe-column field="Mg1dec" width="70px" title="MG1判定" sortable></vxe-column>
      </vxe-colgroup>

      <vxe-colgroup title="MG2磁化">
        <vxe-column field="Mg2workTemp" width="80px" title="MG2工件温度" sortable></vxe-column>
        <vxe-column field="Mg2fluxValue"  width="80px" title="MG2通量值" sortable></vxe-column>
        <vxe-column field="Mg2dec" width="70px" title="MG2判定" sortable></vxe-column>
      </vxe-colgroup>

      <PokayokeDate :colName="'轴移載计测日時'" :value="'AslDate'" />
      <PokayokeDate :colName="'铁芯移載计测日時'" :value="'IctlDate'" />

      <vxe-colgroup title="转子铁芯序列">
        <vxe-column field="Rcserial" width="80px" title="转子铁芯序列" sortable></vxe-column>
      </vxe-colgroup>

      <vxe-colgroup title="轴序列">
        <vxe-column field="AxisSerial" title="轴序列" sortable></vxe-column>
      </vxe-colgroup>

      <vxe-colgroup title="铁芯加熱">
        <vxe-column field="ProcDate" width="165px" title="加工開始日時" sortable></vxe-column>
        <vxe-column field="IsRcheat" width="80px" title="铁芯加熱有無" sortable></vxe-column>
        <vxe-column field="HeatSt"  title="加熱ST" sortable></vxe-column>
        <vxe-column field="HeatProcedure"  width="70px" title="加热程序" sortable></vxe-column>
        <vxe-column field="RoomTemp"  width="85px" title="室温（℃）" sortable></vxe-column>
        <vxe-column field="AxisTemp" width="85px" title="轴温度（℃）" sortable></vxe-column>
        <vxe-column field="CoreBefore"  width="110px" title="加熱前铁芯温度（℃）" sortable></vxe-column>
        <vxe-column field="CoreAfter"  width="120px" title="加熱完了時铁芯温度（℃）" sortable></vxe-column>
        <vxe-column field="Ihbefore"  width="120px" title="加熱前IH盘管温度（℃）" sortable></vxe-column>
        <vxe-column field='Ihafter'  width="120px" title="加熱後IH盘管温度（℃）" sortable></vxe-column>
        <vxe-column field="Cdtemp"  width="100px" title="冷却空气温度（℃）" sortable></vxe-column>
        <vxe-column field="HeatTime"  width="90px" title="加熱通電時間(秒)" sortable></vxe-column>
        <vxe-column field="HeatOutput"  width="80px" title="加熱输出(％）" sortable></vxe-column>
        <vxe-column field='HeatEndTime'  width="80px" title="加熱完了日時" sortable></vxe-column>
        <vxe-column field='JudgmentCode' width="70px" title='判定代码' sortable></vxe-column>
      </vxe-colgroup>

      <vxe-colgroup title="轴圧入">
        <vxe-column field="ApiDate" width="165px" title="计测日時" sortable></vxe-column>
        <vxe-column field="Apistroke" width="70px" title="拐点行程" sortable></vxe-column>
        <vxe-column field="Apiload"  width="70px" title="拐点负重" sortable></vxe-column>
        <vxe-column field="ApifinalStroke"  width="80px" title="圧入最终行程" sortable></vxe-column>
        <vxe-column field="ApimainStroke" title="主行程" sortable></vxe-column>
        <vxe-column field="ApicoreTemp"  width="110px" title="圧入時铁芯温度（℃）" sortable></vxe-column>
        <vxe-column field="Apisttime"  width="100px" title="圧入ST滞在時間(s)" sortable></vxe-column>
        <vxe-column field="ApiinitTilt"  width="90px" title="初始倾斜(kN/mm)" sortable></vxe-column>
        <vxe-column field="Apipos"  width="100px" title="偏离检测位置(mm)" sortable></vxe-column>
        <vxe-column field="ApideviationLoad"  width="100px" title="偏离检负重(kN)" sortable></vxe-column>
        <vxe-column field="Apicode"  width="70px" title="判定代码" sortable></vxe-column>
        <vxe-column field="Apimachine" title="圧入機" sortable></vxe-column>
      </vxe-colgroup>

      <vxe-colgroup title="l螺母紧固">
        <vxe-column field='NtDate' width="165px" title=计测日時 sortable></vxe-column>
        <vxe-column field='NttorqueAxis1' width="80px" title="紧固扭矩1軸" sortable></vxe-column>
        <vxe-column field='NtangleAxis1' width="80px" title="紧固角度1軸" sortable></vxe-column>
        <vxe-column field='Ntcode' width="70px" title="判定代码" sortable></vxe-column>
        <vxe-column field='Nthistory' width="70px" title="抽样履历" sortable></vxe-column>
        <vxe-column field='Ntseating1' width="80px" title="着座扭矩1軸" sortable></vxe-column>
        <vxe-column field='Ntdrop1' width="80px" title="下降角度1軸" sortable></vxe-column>
        <vxe-column field='Ntslack1' width="90px" title="松监视器扭矩1軸" sortable></vxe-column>
      </vxe-colgroup>

      <vxe-colgroup title="铆接圧入">
        <vxe-column field='RapDate' width="165px" title="计测日時" sortable></vxe-column>
        <vxe-column field='Rapbefore' width="95px"  title="铆接行程（0前）" sortable></vxe-column>
        <vxe-column field='Rapafter' width="95px" title="铆接行程（0後）" sortable></vxe-column>
        <vxe-column field='Rapload' width="70px" title="铆接荷重" sortable></vxe-column>
        <vxe-column field='RapmainStroke' title='主行程' sortable></vxe-column>
        <vxe-column field='Rapcode' width="70px" title='判定代码' sortable></vxe-column>
        <vxe-column field='RapwashSensor' width="90px" title='垫圈检测传感器値' sortable></vxe-column>
        <vxe-column field='RapwashMain' width="80px" title='垫圈检测主値' sortable></vxe-column>
        <vxe-column field='RapwashPos' width="80px" title='垫圈确认位置' sortable></vxe-column>
        <vxe-column field='Rapstroke' width="70px" title='拐点行程' sortable></vxe-column>
        <vxe-column field='RaploadSec' width="70px" title='拐点负重' sortable></vxe-column>
        <vxe-column field='RapfinalStroke' width="80px" title='圧入最终行程' sortable></vxe-column>
        <vxe-column field='Rapmain2Stroke' title='主行程' sortable></vxe-column>
        <vxe-column field='Rapcode2' width="70px" title='判定代码' sortable></vxe-column>
      </vxe-colgroup>

      <vxe-colgroup title="旋转变压器圧入">
        <vxe-column field="RtpstartDate" width="165px" title="加工開始日時" sortable></vxe-column>
        <vxe-column field="Rtpstroke" width="70px" title="拐点行程" sortable></vxe-column>
        <vxe-column field="Rtpload"  width="70px" title="拐点负重" sortable></vxe-column>
        <vxe-column field="RtpfinalStroke"  width="80px" title="圧入最终行程" sortable></vxe-column>
        <vxe-column field="RtpmainStroke" title="主行程" sortable></vxe-column>
        <vxe-column field="Rtpcode"  width="70px" title="判定代码" sortable></vxe-column>
        <vxe-column field="Rtphistory"  width="70px" title="抽样履历" sortable></vxe-column>
        <vxe-column field="Detection1"  width="120px" title="ｾﾝｻ位相間違い検出位置①" sortable></vxe-column>
        <vxe-column field="Detection2"  width="120px" title="ｾﾝｻ位相間違い検出位置②" sortable></vxe-column>
      </vxe-colgroup>
    </vxe-table>

</template>
<script setup>
import { defineProps } from 'vue';
import { TableConfig } from '@/service/GetDataMethod/utils'

import XEUtils from 'xe-utils'
import BasicTemp from './BasicTemp.vue';
import PokayokeDate from '@/components/tableViewTemp/PokayokeDate'
defineProps({
  tableData: Array,
})

const formatDate = ({ cellValue }) => {
  return XEUtils.toDateString(cellValue, 'yyyy-MM-dd HH:mm:ss')
}
</script>
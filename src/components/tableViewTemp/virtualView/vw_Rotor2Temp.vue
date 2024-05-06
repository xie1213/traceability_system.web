<template>
    <vxe-colgroup title="RoTorTable2">
        <PokayokeDate :colName="'防错防误39计测日時'" :value="'PokayokeDate39'" />
      <PokayokeDate :colName="'防错防误40计测日時'" :value="'PokayokeDate40'" />

      <vxe-colgroup title="RrBrg圧入">
        <vxe-column field="Ro2HsgBrgMeasDate" width="100px" title="RrBrg圧入计测日时" sortable></vxe-column>
        <vxe-column field="Ro2HsgBrgInflectPtStroke" width="100px" title="RrBrg圧入拐点行程1" sortable></vxe-column>
        <vxe-column field="Ro2HsgBrgInflectPtLoad" width="100px" title="RrBrg圧入拐点负重1" sortable></vxe-column>
        <vxe-column field="Ro2HsgBrgFinalStroke" width="100px" title="RrBrg圧入最终行程1" sortable></vxe-column>
        <vxe-column field="Ro2HsgBrgFinalLoad" width="100px" title="RrBrg圧入最终负重1" sortable></vxe-column>
        <vxe-column field="Ro2HsgBrgInflectPtStrokeSec" width="100px" title="RrBrg圧入拐点行程2" sortable></vxe-column>
        <vxe-column field="Ro2HsgBrgInflectPtLoadSec" width="100px" title="RrBrg圧入拐点负重2" sortable></vxe-column>
        <vxe-column field="Ro2HsgBrgFinalStrokeSec" width="100px" title="RrBrg圧入最终行程2" sortable></vxe-column>
        <vxe-column field="Ro2HsgBrgFinalLoadSec" width="100px" title="RrBrg圧入最终负重2" sortable></vxe-column>
        <vxe-column field="Ro2HsgBrgMaasterStroke" width="100px" title="RrBrg圧入主行程" sortable></vxe-column>
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
        <vxe-column field="Ro2DgameasDate" width="165px" title="计测日时" sortable></vxe-column>
        <vxe-column field="Ro2Dgapos3Axis" width="80px" title="推进位置3轴" sortable></vxe-column>
        <vxe-column field="Ro2Dgaload3Axis" width="95px" title="负重（电流值）3轴" sortable></vxe-column>
        <vxe-column field="Ro2Dgapos4Axis" width="80px" title="推进位置4轴" sortable></vxe-column>
        <vxe-column field="Ro2Dgaload4Axis" width="95px" title="负重（电流值）4轴" sortable></vxe-column>
      </vxe-colgroup>
      <PokayokeDate :colName="'防错防误34计测日時'" :value="'PokayokeDate34'" />

      <vxe-colgroup title="差动齿轮测量">
        <vxe-column field="Ro2DgmmeasTimeDate" width="165px" title="计测日时" sortable></vxe-column>
        <vxe-column field="Ro2Dgmdagjudge" width="85px" title="作齿轮判定" sortable></vxe-column>
        <vxe-column field="Ro2DgmlhRh" title="変位量" sortable></vxe-column>
        <vxe-column field="Ro2DgmmaxTorque" width="70px" title="上限扭矩" sortable></vxe-column>
        <vxe-column field="Ro2DgmminTorque" width="70px" title="下限扭矩" sortable></vxe-column>
      </vxe-colgroup>

      <vxe-colgroup title="差速器销铆接">
        <vxe-column field="Ro2DprmeasTimeDate" width="165px" title="计测日时" sortable></vxe-column>
        <vxe-column field="Ro2Dprfrs" width="70px" title="最终行程" sortable></vxe-column>
        <vxe-column field="Ro2Dprfrl" width="85px" title="铆接最终负重" sortable></vxe-column>
      </vxe-colgroup>

      <PokayokeDate :colName="'防错防误35计测日時'" :value="'PokayokeDate35'" />


      <vxe-colgroup title="齿轮压入1">
        <vxe-column field="Ro2GearMeasDate" width="165px" title="计测日时" sortable></vxe-column>
        <vxe-column field="Ro2GearStroke" width="70px" title="拐点行程" sortable></vxe-column>
        <vxe-column field="Ro2GearLoad" width="75px" title="変曲点负重" sortable></vxe-column>
        <vxe-column field="Ro2GearFinalStroke" width="70px" title="最终行程" sortable></vxe-column>
        <vxe-column field="Ro2GearFinalLoad" width="75px" title="最終荷负重" sortable></vxe-column>
        <vxe-column field="Ro2GearStrokeSec" width="70px" title="拐点行程" sortable></vxe-column>
        <vxe-column field="Ro2GearLoadSec" width="75px" title="変曲点负重" sortable></vxe-column>
        <vxe-column field="Ro2GearFinalStrokeSec" width="70px" title="最终行程" sortable></vxe-column>
        <vxe-column field="Ro2GearFinalLoadSec" width="70px" title="最終荷负重" sortable></vxe-column>
        <vxe-column field="Ro2GearMainStroke" title="主行程" sortable></vxe-column>
        <vxe-column field="Ro2GearAbvalue" width="70px" title="A/B" sortable></vxe-column>
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
        <vxe-column field="Ro2Df1Date" width="165px" title="计测日时" sortable></vxe-column>
        <vxe-column field='Ro2Df1angleAxis1' width="80px" title="紧固角度 1軸" sortable></vxe-column>
        <vxe-column field='Ro2Df1codeAxis1' width="85px" title='第1軸 判定代码' sortable></vxe-column>
        <vxe-column field='Ro2Df1angleAxis2' width="80px" title="紧固角度 2軸" sortable></vxe-column>
        <vxe-column field='Ro2Df1codeAxis2' width="85px" title="第２軸 判定代码" sortable></vxe-column>
        <vxe-column field='Ro2Df1angleAxis3' width="80px" title="紧固角度 3軸" sortable></vxe-column>
        <vxe-column field='Ro2Df1codeAxis3' width="85px" title="第３軸 判定代码" sortable></vxe-column>
        <vxe-column field='Ro2Df1angleAxis4' width="80px" title="紧固角度 4軸" sortable></vxe-column>
        <vxe-column field='Ro2Df1codeAxis4' width="85px" title="第4軸 判定代码" sortable></vxe-column>
        <vxe-column field='Ro2Df1angleAxis5' width="80px" title="紧固角度 5軸" sortable></vxe-column>
        <vxe-column field='Ro2Df1codeAxis5' width="85px" title="第5軸 判定代码" sortable></vxe-column>
        <vxe-column field='Ro2Df1angleAxis6' width="80px" title="紧固角度 6軸" sortable></vxe-column>
        <vxe-column field='Ro2Df1codeAxis6' width="85px" title="第6軸 判定代码" sortable></vxe-column>
        <vxe-column field='Ro2Df1abvalue' width="70px" title="A/B" sortable></vxe-column>
      </vxe-colgroup>

      <vxe-colgroup title="DF紧固2">
        <vxe-column field="Ro2Df2Date" width="165px" title="计测日时" sortable></vxe-column>
        <vxe-column field="Ro2Df2angleAxis1" width="80px" title="紧固角度 1軸" sortable></vxe-column>
        <vxe-column field="Ro2Df2codeAxis1" width="85px" title="第1軸 判定代码" sortable></vxe-column>
        <vxe-column field='Ro2Df2angleAxis2' width="80px" title="紧固角度 2軸" sortable></vxe-column>
        <vxe-column field="Ro2Df2codeAxis2" width="85px" title="第２軸 判定代码" sortable></vxe-column>
        <vxe-column field="Ro2Df2angleAxis3" width="80px" title="紧固角度 3軸" sortable></vxe-column>
        <vxe-column field="Ro2Df2codeAxis3" width="85px" title='第３軸 判定代码' sortable></vxe-column>
        <vxe-column field="Ro2Df2angleAxis4" width="80px" title="紧固角度 4軸" sortable></vxe-column>
        <vxe-column field="Ro2Df2codeAxis4" width="85px" title="第4軸 判定代码" sortable></vxe-column>
        <vxe-column field="Ro2Df2angleAxis5" width="80px" title="紧固角度 5軸" sortable></vxe-column>
        <vxe-column field="Ro2Df2codeAxis5" width="85px" title="第5軸 判定代码" sortable></vxe-column>
        <vxe-column field="Ro2Df2angleAxis6" width="80px" title="紧固角度 6軸" sortable></vxe-column>
        <vxe-column field="Ro2Df2codeAxis6" width="85px" title="第6軸 判定代码" sortable></vxe-column>
        <vxe-column field="Ro2Df2abvalue" width="70px" title="A/B" sortable></vxe-column>
      </vxe-colgroup>

      <PokayokeDate :colName="'DF反転计测日時'" :value="'DfreverseDate'" />
      <PokayokeDate :colName="'防错防误36计测日時'" :value="'PokayokeDate36'" />
      <PokayokeDate :colName="'防错防误37计测日時'" :value="'PokayokeDate37'" />
      <PokayokeDate :colName="'防错防误38计测日時'" :value="'PokayokeDate38'" />

      <vxe-colgroup title="MG1磁化">
        <vxe-column field='Ro2Mg1workTemp' width="80px" title="MG1工件温度" sortable></vxe-column>
        <vxe-column field="Ro2Mg1fluxValue" width="80px" title="MG1通量值" sortable></vxe-column>
        <vxe-column field="Ro2Mg1dec" width="70px" title="MG1判定" sortable></vxe-column>
      </vxe-colgroup>

      <vxe-colgroup title="MG2磁化">
        <vxe-column field="Ro2Mg2workTemp" width="80px" title="MG2工件温度" sortable></vxe-column>
        <vxe-column field="Ro2Mg2fluxValue"  width="80px" title="MG2通量值" sortable></vxe-column>
        <vxe-column field="Ro2Mg2dec" width="70px" title="MG2判定" sortable></vxe-column>
      </vxe-colgroup>

      <PokayokeDate :colName="'轴移載计测日時'" :value="'AslDate'" />
      <PokayokeDate :colName="'铁芯移載计测日時'" :value="'IctlDate'" />

      <vxe-colgroup title="转子铁芯序列">
        <vxe-column field="Ro2Rcserial" width="80px" title="转子铁芯序列" sortable></vxe-column>
      </vxe-colgroup>

      <vxe-colgroup title="轴序列">
        <vxe-column field="Ro2AxisSerial" title="轴序列" sortable></vxe-column>
      </vxe-colgroup>

      <vxe-colgroup title="铁芯加熱">
        <vxe-column field="Ro2ProcDate" width="165px" title="加工開始日時" sortable></vxe-column>
        <vxe-column field="Ro2IsRcheat" width="80px" title="铁芯加熱有無" sortable></vxe-column>
        <vxe-column field="Ro2HeatSt"  title="加熱ST" sortable></vxe-column>
        <vxe-column field="Ro2HeatProcedure"  width="70px" title="加热程序" sortable></vxe-column>
        <vxe-column field="Ro2RoomTemp"  width="85px" title="室温（℃）" sortable></vxe-column>
        <vxe-column field="Ro2AxisTemp" width="85px" title="轴温度（℃）" sortable></vxe-column>
        <vxe-column field="Ro2CoreBefore"  width="110px" title="加熱前铁芯温度（℃）" sortable></vxe-column>
        <vxe-column field="Ro2CoreAfter"  width="120px" title="加熱完了時铁芯温度（℃）" sortable></vxe-column>
        <vxe-column field="Ro2Ihbefore"  width="120px" title="加熱前IH盘管温度（℃）" sortable></vxe-column>
        <vxe-column field='Ro2Ihafter'  width="120px" title="加熱後IH盘管温度（℃）" sortable></vxe-column>
        <vxe-column field="Ro2Cdtemp"  width="100px" title="冷却空气温度（℃）" sortable></vxe-column>
        <vxe-column field="Ro2HeatTime"  width="90px" title="加熱通電時間(秒)" sortable></vxe-column>
        <vxe-column field="Ro2HeatOutput"  width="80px" title="加熱输出(％）" sortable></vxe-column>
        <vxe-column field='Ro2HeatEndTime'  width="80px" title="加熱完了日時" sortable></vxe-column>
        <vxe-column field='Ro2JudgmentCode' width="70px" title='判定代码' sortable></vxe-column>
      </vxe-colgroup>

      <vxe-colgroup title="轴圧入">
        <vxe-column field="Ro2ApiDate" width="165px" title="计测日時" sortable></vxe-column>
        <vxe-column field="Ro2Apistroke" width="70px" title="拐点行程" sortable></vxe-column>
        <vxe-column field="Ro2Apiload"  width="70px" title="拐点负重" sortable></vxe-column>
        <vxe-column field="Ro2ApifinalStroke"  width="80px" title="圧入最终行程" sortable></vxe-column>
        <vxe-column field="Ro2ApimainStroke" title="主行程" sortable></vxe-column>
        <vxe-column field="Ro2ApicoreTemp"  width="110px" title="圧入時铁芯温度（℃）" sortable></vxe-column>
        <vxe-column field="Ro2Apisttime"  width="100px" title="圧入ST滞在時間(s)" sortable></vxe-column>
        <vxe-column field="Ro2ApiinitTilt"  width="90px" title="初始倾斜(kN/mm)" sortable></vxe-column>
        <vxe-column field="Ro2Apipos"  width="100px" title="偏离检测位置(mm)" sortable></vxe-column>
        <vxe-column field="Ro2ApideviationLoad"  width="100px" title="偏离检负重(kN)" sortable></vxe-column>
        <vxe-column field="Ro2Apicode"  width="70px" title="判定代码" sortable></vxe-column>
        <vxe-column field="Ro2Apimachine" title="圧入機" sortable></vxe-column>
      </vxe-colgroup>

      <vxe-colgroup title="l螺母紧固">
        <vxe-column field='Ro2NtDate' width="165px" title=计测日時 sortable></vxe-column>
        <vxe-column field='Ro2NttorqueAxis1' width="80px" title="紧固扭矩1軸" sortable></vxe-column>
        <vxe-column field='Ro2NtangleAxis1' width="80px" title="紧固角度1軸" sortable></vxe-column>
        <vxe-column field='Ro2Ntcode' width="70px" title="判定代码" sortable></vxe-column>
        <vxe-column field='Ro2Nthistory' width="70px" title="抽样履历" sortable></vxe-column>
        <vxe-column field='Ro2Ntseating1' width="80px" title="着座扭矩1軸" sortable></vxe-column>
        <vxe-column field='Ro2Ntdrop1' width="80px" title="下降角度1軸" sortable></vxe-column>
        <vxe-column field='Ro2Ntslack1' width="90px" title="松监视器扭矩1軸" sortable></vxe-column>
      </vxe-colgroup>

      <vxe-colgroup title="铆接圧入">
        <vxe-column field='Ro2RapDate' width="165px" title="计测日時" sortable></vxe-column>
        <vxe-column field='Ro2Rapbefore' width="95px"  title="铆接行程（0前）" sortable></vxe-column>
        <vxe-column field='Ro2Rapafter' width="95px" title="铆接行程（0後）" sortable></vxe-column>
        <vxe-column field='Ro2Rapload' width="70px" title="铆接荷重" sortable></vxe-column>
        <vxe-column field='Ro2RapmainStroke' title='主行程' sortable></vxe-column>
        <vxe-column field='Ro2Rapcode' width="70px" title='判定代码' sortable></vxe-column>
        <vxe-column field='Ro2RapwashSensor' width="90px" title='垫圈检测传感器値' sortable></vxe-column>
        <vxe-column field='Ro2RapwashMain' width="80px" title='垫圈检测主値' sortable></vxe-column>
        <vxe-column field='Ro2RapwashPos' width="80px" title='垫圈确认位置' sortable></vxe-column>
        <vxe-column field='Ro2Rapstroke' width="70px" title='拐点行程' sortable></vxe-column>
        <vxe-column field='Ro2RaploadSec' width="70px" title='拐点负重' sortable></vxe-column>
        <vxe-column field='Ro2RapfinalStroke' width="80px" title='圧入最终行程' sortable></vxe-column>
        <vxe-column field='Ro2Rapmain2Stroke' title='主行程' sortable></vxe-column>
        <vxe-column field='Ro2Rapcode2' width="70px" title='判定代码' sortable></vxe-column>
      </vxe-colgroup>

      <vxe-colgroup title="旋转变压器圧入">
        <vxe-column field="Ro2RtpstartDate" width="165px" title="加工開始日時" sortable></vxe-column>
        <vxe-column field="Ro2Rtpstroke" width="70px" title="拐点行程" sortable></vxe-column>
        <vxe-column field="Ro2Rtpload"  width="70px" title="拐点负重" sortable></vxe-column>
        <vxe-column field="Ro2RtpfinalStroke"  width="80px" title="圧入最终行程" sortable></vxe-column>
        <vxe-column field="Ro2RtpmainStroke" title="主行程" sortable></vxe-column>
        <vxe-column field="Ro2Rtpcode"  width="70px" title="判定代码" sortable></vxe-column>
        <vxe-column field="Ro2Rtphistory"  width="70px" title="抽样履历" sortable></vxe-column>
        <vxe-column field="Ro2Detection1"  width="120px" title="ｾﾝｻ位相間違い検出位置①" sortable></vxe-column>
        <vxe-column field="Ro2Detection2"  width="120px" title="ｾﾝｻ位相間違い検出位置②" sortable></vxe-column>
      </vxe-colgroup>
    </vxe-colgroup>
</template>
<script setup>
import PokayokeDate from '@/components/tableViewTemp/PokayokeDate'
</script>
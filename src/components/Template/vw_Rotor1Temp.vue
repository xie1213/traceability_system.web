<template>
    <vxe-colgroup title="RotorTable1">
        <vxe-colgroup title="防错防误39计测日時">
            <vxe-column field="Ro1PokayokeDate39" title="防错防误39计测日時" />
        </vxe-colgroup>

        <vxe-colgroup title="防错防误40计测日時">
            <vxe-column field="Ro1PokayokeDate40" title="防错防误40计测日時" />
        </vxe-colgroup>

        <vxe-colgroup title="RrBrg圧入">
            <vxe-column field="Ro1HsgBrgMeasDate" title="RrBrg圧入计测日时" />
            <vxe-column field="Ro1HsgBrgInflectPtStroke" title="RrBrg圧入拐点行程1" />
            <vxe-column field="Ro1HsgBrgInflectPtLoad" title="RrBrg圧入拐点负重1" />
            <vxe-column field="Ro1HsgBrgFinalStroke" title="RrBrg圧入最终行程1" />
            <vxe-column field="Ro1HsgBrgFinalLoad" title="RrBrg圧入最终负重1" />
            <vxe-column field="Ro1HsgBrgInflectPtStrokeSec" title="RrBrg圧入拐点行程2" />
            <vxe-column field="Ro1HsgBrgInflectPtLoadSec" title="RrBrg圧入拐点负重2" />
            <vxe-column field="Ro1HsgBrgFinalStrokeSec" title="RrBrg圧入最终行程2" />
            <vxe-column field="Ro1HsgBrgFinalLoadSec" title="RrBrg圧入最终负重2" />
            <vxe-column field="Ro1HsgBrgMaasterStroke" title="RrBrg圧入主行程" />
        </vxe-colgroup>

        <vxe-colgroup title="防错防误41计测日時">
            <vxe-column field="Ro1PokayokeDate41" title="防错防误41计测日時" />
        </vxe-colgroup>

        <vxe-colgroup title="防错防误42计测日時">
            <vxe-column field="Ro1PokayokeDate42" title="防错防误42计测日時" />
        </vxe-colgroup>

        <vxe-colgroup title="防错防误43计测日時">
            <vxe-column field="Ro1PokayokeDate43" title="防错防误43计测日時" />
        </vxe-colgroup>

        <vxe-colgroup title="防错防误44计测日時">
            <vxe-column field="Ro1PokayokeDate44" title="防错防误44计测日時" />
        </vxe-colgroup>

        <vxe-colgroup title="翻转机">
            <vxe-column field="Ro1UpenderDate" title="翻转机计测日時" />
        </vxe-colgroup>

        <vxe-colgroup title="防错防误45计测日時">
            <vxe-column field="Ro1PokayokeDate45" title="防错防误45计测日時" />
        </vxe-colgroup>

        <vxe-colgroup title="拒绝">
            <vxe-column field="Ro1RejectTime" title="拒绝计测日時" />
        </vxe-colgroup>

        <vxe-colgroup title="防错防误33计测日時">
            <vxe-column field="Ro1PokayokeDate33" title="防错防误33计测日時" />
        </vxe-colgroup>

        <vxe-colgroup title="差速器装配">
            <vxe-column field="Ro1DgameasDate" title="计测日时" />
            <vxe-column field="Ro1Dgapos3Axis" title="推进位置3轴" />
            <vxe-column field="Ro1Dgaload3Axis" title="负重（电流值）3轴" />
            <vxe-column field="Ro1Dgapos4Axis" title="推进位置4轴" />
            <vxe-column field="Ro1Dgaload4Axis" title="负重（电流值）4轴" />
        </vxe-colgroup>

        <vxe-colgroup title="防错防误34计测日時">
            <vxe-column field="Ro1PokayokeDate34" title="防错防误34计测日時" />
        </vxe-colgroup>

        <vxe-colgroup title="差动齿轮测量">
            <vxe-column field="Ro1DgmmeasTime" title="计测日时" />
            <vxe-column field="Ro1Dgmdagjudge" title="作齿轮判定" />
            <vxe-column field="Ro1DgmlhRh" title="変位量" />
            <vxe-column field="Ro1DgmmaxTorque" title="上限扭矩" />
            <vxe-column field="Ro1DgmminTorque" title="下限扭矩" />
        </vxe-colgroup>

        <vxe-colgroup title="差速器销铆接">
            <vxe-column field="Ro1DprmeasTime" title="计测日时" />
            <vxe-column field="Ro1Dprfrs" title="最终行程" />
            <vxe-column field="Ro1Dprfrl" title="铆接最终负重" />
        </vxe-colgroup>

        <vxe-colgroup title="防错防误35计测日時">
            <vxe-column field="Ro1PokayokeDate35" title="防错防误35计测日時" />
        </vxe-colgroup>

        <vxe-colgroup title="齿轮压入1">
            <vxe-column field="Ro1GearMeasDate" title="计测日时" />
            <vxe-column field="Ro1GearStroke" title="拐点行程" />
            <vxe-column field="Ro1GearLoad" title="変曲点负重" />
            <vxe-column field="Ro1GearFinalStroke" title="最终行程" />
            <vxe-column field="Ro1GearFinalLoad" title="最終荷负重" />
            <vxe-column field="Ro1GearStrokeSec" title="拐点行程" />
            <vxe-column field="Ro1GearLoadSec" title="変曲点负重" />
            <vxe-column field="Ro1GearFinalStrokeSec" title="最终行程" />
            <vxe-column field="Ro1GearFinalLoadSec" title="最終荷负重" />
            <vxe-column field="Ro1GearMainStroke" title="主行程" />
            <vxe-column field="Ro1GearAbvalue" title="A/B" />
        </vxe-colgroup>

        <vxe-colgroup title="齿轮压入2">
            <vxe-column field='Ro1Gear2Date' title='计测日时'></vxe-column>
            <vxe-column field='Ro1Gear2Stroke' title='拐点行程'></vxe-column>
            <vxe-column field='Ro1Gear2Load' title='変曲点负重'></vxe-column>
            <vxe-column field='Ro1Gear2FinalStroke' title='最终行程'></vxe-column>
            <vxe-column field='Ro1Gear2FinalLoad' title='最終荷负重'></vxe-column>
            <vxe-column field='Ro1Gear2StrokeSec' title='拐点行程'></vxe-column>
            <vxe-column field='Ro1Gear2LoadSec' title='変曲点负重'></vxe-column>
            <vxe-column field='Ro1Gear2FinalStrokeSec' title='最终行程'></vxe-column>
            <vxe-column field='Ro1Gear2FinalLoadSec' title='最終荷负重'></vxe-column>
            <vxe-column field='Ro1Gear2MainStroke' title='主行程'></vxe-column>
            <vxe-column field="Ro1Gear2Abvalue" title="A/B" />
        </vxe-colgroup>

        <vxe-colgroup title="差速器销l螺母紧固">
            <vxe-column field='Ro1DpntDate' title="计测日时" />
            <vxe-column field='Ro1DpntTorqueAxis1' title="紧固扭矩1軸" />
            <vxe-column field='Ro1DpntAngleAxis1' title="紧固角度1軸" />
            <vxe-column field='Ro1DpntJudgment' title="判定代码" />
            <vxe-column field='Ro1DpntSeating' title="着座扭矩1軸" />
            <vxe-column field='Ro1DpntDrop' title="下降角度1軸" />
            <vxe-column field='Ro1DpntSlack' title="松弛监视器扭矩1軸" />
        </vxe-colgroup>

        <vxe-colgroup title="差速器销螺母铆接">
            <vxe-column field='Ro1DpnfMeasDate' title='计测日时'></vxe-column>
            <vxe-column field='Ro1DpnfFinalStroke' title='最终行程'></vxe-column>
            <vxe-column field='Ro1DpnfFinalLoad' title='最终负重'></vxe-column>
            <vxe-column field='Ro1DpnfMainStroke' title='主行程'></vxe-column>
        </vxe-colgroup>

        <vxe-colgroup title="DF BRG＋环圧入">
            <vxe-column field="Ro1Dfbrgdate" title="计测日时" />
            <vxe-column field="Ro1Dfbrgstroke" title='拐点行程'></vxe-column>
            <vxe-column field="Ro1" title='拐点负重'></vxe-column>
            <vxe-column field="Ro1DfbrgfinalStroke" title='最终行程'></vxe-column>
            <vxe-column field="Ro1DfbrgfinalLoad" title='最终负重'></vxe-column>
            <vxe-column field="Ro1DfbrgstrokeSec" title='拐点行程'></vxe-column>
            <vxe-column field="Ro1DfbrgloadSec" title='拐点负重'></vxe-column>
            <vxe-column field="Ro1DfbrgfinalStrokeSec" title='最终行程'></vxe-column>
            <vxe-column field="Ro1DfbrgfinalLoadSec" title='最终负重'></vxe-column>
            <vxe-column field="Ro1DfbrgmainStroke" title='主行程'></vxe-column>
        </vxe-colgroup>

        <vxe-colgroup title="DF紧固１">
            <vxe-column field="Ro1Df1date" title="计测日时" />
            <vxe-column field="Ro1Df1angleAxis1" title="紧固角度 1軸" />
            <vxe-column field="Ro1Df1codeAxis1" title="第1軸 判定代码" />
            <vxe-column field="Ro1Df1angleAxis2" title="紧固角度 2軸" />
            <vxe-column field="Ro1Df1codeAxis2" title="第２軸 判定代码" />
            <vxe-column field="Ro1Df1angleAxis3" title="紧固角度 3軸" />
            <vxe-column field="Ro1Df1codeAxis3" title="第３軸 判定代码" />
            <vxe-column field="Ro1Df1angleAxis4" title="紧固角度 4軸" />
            <vxe-column field="Ro1Df1codeAxis4" title="第4軸 判定代码" />
            <vxe-column field="Ro1Df1angleAxis5" title="紧固角度 5軸" />
            <vxe-column field="Ro1Df1codeAxis5" title="第5軸 判定代码" />
            <vxe-column field="Ro1Df1angleAxis6" title="紧固角度 6軸" />
            <vxe-column field="Ro1Df1codeAxis6" title="第6軸 判定代码" />
            <vxe-column field="Ro1Df1abvalue" title="A/B" />
        </vxe-colgroup>

        <vxe-colgroup title="DF紧固2">
            <vxe-column field="Ro1Df2date" title="计测日时" />
            <vxe-column field="Ro1Df2angleAxis1" title="紧固角度 1軸" />
            <vxe-column field="Ro1Df2codeAxis1" title="第1軸 判定代码" />
            <vxe-column field="Ro1Df2angleAxis2" title="紧固角度 2軸" />
            <vxe-column field="Ro1Df2codeAxis2" title="第２軸 判定代码" />
            <vxe-column field="Ro1Df2angleAxis3" title="紧固角度 3軸" />
            <vxe-column field="Ro1Df2codeAxis3" title="第３軸 判定代码" />
            <vxe-column field="Ro1Df2angleAxis4" title="紧固角度 4軸" />
            <vxe-column field="Ro1Df2codeAxis4" title="第4軸 判定代码" />
            <vxe-column field="Ro1Df2angleAxis5" title="紧固角度 5軸" />
            <vxe-column field="Ro1Df2codeAxis5" title="第5軸 判定代码" />
            <vxe-column field="Ro1Df2angleAxis6" title="紧固角度 6軸" />
            <vxe-column field="Ro1Df2codeAxis6" title="第6軸 判定代码" />
            <vxe-column field="Ro1Df2abvalue" title="A/B" />
        </vxe-colgroup>

        <vxe-colgroup title="DF反転">
            <vxe-column field="Ro1DfreverseDate" title="DF反転计测日時" />
        </vxe-colgroup>

        <vxe-colgroup title="防错防误36计测日時">
            <vxe-column field="Ro1PokayokeDate36" title="防错防误36计测日時" />
        </vxe-colgroup>

        <vxe-colgroup title="防错防误37计测日時">
            <vxe-column field="Ro1PokayokeDate37" title="防错防误37计测日時" />
        </vxe-colgroup>

        <vxe-colgroup title="防错防误38计测日時">
            <vxe-column field="Ro1PokayokeDate38" title="防错防误38计测日時" />
        </vxe-colgroup>

        <vxe-colgroup title="MG1磁化">
            <vxe-column field="Ro1Mg1workTemp" title="MG1工件温度" />
            <vxe-column field="Ro1Mg1fluxValue" title="MG1通量值" />
            <vxe-column field="Ro1Mg1dec" title="MG1判定" />
        </vxe-colgroup>

        <vxe-colgroup title="MG2磁化">
            <vxe-column field="Ro1Mg2workTemp" title="MG2工件温度" />
            <vxe-column field="Ro1Mg2fluxValue" title="MG2通量值" />
            <vxe-column field="Ro1Mg2dec" title="MG2判定" />
        </vxe-colgroup>

        <vxe-colgroup title="轴移載计测日時">
            <vxe-column field="Ro1Asldate" title="轴移載计测日時" />
        </vxe-colgroup>

        <vxe-colgroup title="铁芯移載计测日時">
            <vxe-column field="Ro1Ictldate" title="铁芯移載计测日時" />
        </vxe-colgroup>

        <vxe-colgroup title="转子铁芯序列">
            <vxe-column field="Ro1Rcserial" title="转子铁芯序列" />
        </vxe-colgroup>

        <vxe-colgroup title="轴序列">
            <vxe-column field="Ro1AxisSerial" title="轴序列" />
        </vxe-colgroup>

        <vxe-colgroup title="铁芯加熱">
            <vxe-column field="Ro1ProcDate" title="加工開始日時" />
            <vxe-column field="Ro1IsRcheat" title="铁芯加熱有無" />
            <vxe-column field="Ro1HeatSt" title="加熱ST" />
            <vxe-column field="Ro1HeatProcedure" title="加热程序" />
            <vxe-column field="Ro1RoomTemp" title="室温（℃）" />
            <vxe-column field="Ro1AxisTemp" title="轴温度（℃）" />
            <vxe-column field="Ro1CoreBefore" title="加熱前铁芯温度（℃）" />
            <vxe-column field="Ro1CoreAfter" title="加熱完了時铁芯温度（℃）" />
            <vxe-column field="Ro1Ihbefore" title="加熱前IH盘管温度（℃）" />
            <vxe-column field="Ro1Ihafter" title="加熱後IH盘管温度（℃）" />
            <vxe-column field="Ro1Cdtemp" title="冷却空气温度（℃）" />
            <vxe-column field="Ro1HeatTime" title="加熱通電時間(秒)" />
            <vxe-column field="Ro1HeatOutput" title="加熱输出(％）" />
            <vxe-column field="Ro1HeatEndTime" title="加熱完了日時" />

        </vxe-colgroup>

        <vxe-colgroup title="轴圧入">
            <vxe-column field="Ro1Apidate" title="计测日時" />
            <vxe-column field="Ro1Apistroke" title="拐点行程" />
            <vxe-column field="Ro1Apiload" title="拐点负重" />
            <vxe-column field="Ro1ApifinalStroke" title="圧入最终行程" />
            <vxe-column field="Ro1ApimainStroke" title="主行程" />
            <vxe-column field="Ro1ApicoreTemp" title="圧入時铁芯温度（℃）" />
            <vxe-column field="Ro1Apisttime" title="圧入ST滞在時間(s)" />
            <vxe-column field="Ro1ApiinitTilt" title="初始倾斜(kN/mm)" />
            <vxe-column field="Ro1Apipos" title="偏离检测位置(mm)" />
            <vxe-column field="Ro1ApideviationLoad" title="偏离检负重(kN)" />
            <vxe-column field="Ro1Apicode" title="判定代码" />
            <vxe-column field="Ro1Apimachine" title="圧入機" />
        </vxe-colgroup>

        <vxe-colgroup title="l螺母紧固">
            <vxe-column field="Ro1Ntdate" title=计测日時></vxe-column>
            <vxe-column field="Ro1NttorqueAxis1" title="紧固扭矩1軸" />
            <vxe-column field="Ro1NtangleAxis1" title="紧固角度1軸" />
            <vxe-column field="Ro1Ntcode" title="判定代码" />
            <vxe-column field="Ro1Nthistory" title="抽样履历" />
            <vxe-column field="Ro1Ntseating1" title="着座扭矩1軸" />
            <vxe-column field="Ro1Ntdrop1" title="下降角度1軸" />
            <vxe-column field="Ro1Ntslack1" title="松监视器扭矩1軸" />
        </vxe-colgroup>

        <vxe-colgroup title="铆接圧入">
            <vxe-column field="Ro1Rapdate" title="计测日時" />
            <vxe-column field="Ro1Rapbefore" title="铆接行程（0前）" />
            <vxe-column field="Ro1Rapafter" title="铆接行程（0後）" />
            <vxe-column field="Ro1Rapload" title="铆接荷重" />
            <vxe-column field="Ro1RapmainStroke" title="主行程" />
            <vxe-column field="Ro1Rapcode" title="判定代码" />
            <vxe-column field="Ro1RapwashSensor" title="垫圈检测传感器値" />
            <vxe-column field="Ro1RapwashMain" title="垫圈检测主値" />
            <vxe-column field="Ro1RapwashPos" title="垫圈确认位置" />
            <vxe-column field="Ro1Rapstroke" title="拐点行程" />
            <vxe-column field="Ro1RaploadSec" title="拐点负重" />
            <vxe-column field="Ro1RapfinalStroke" title="圧入最终行程" />
            <vxe-column field="Ro1Rapmain2Stroke" title="主行程" />
            <vxe-column field="Ro1Rapcode2" title="判定代码" />
        </vxe-colgroup>

        <vxe-colgroup title="旋转变压器圧入">
            <vxe-column field="Ro1RtpstartDate" title="加工開始日時" />
            <vxe-column field="Ro1Rtpstroke" title="拐点行程" />
            <vxe-column field="Ro1Rtpload" title="拐点负重" />
            <vxe-column field="Ro1RtpfinalStroke" title="圧入最终行程" />
            <vxe-column field="Ro1RtpmainStroke" title="主行程" />
            <vxe-column field="Ro1Rtpcode" title="判定代码" />
            <vxe-column field="Ro1Rtphistory" title="抽样履历" />
            <vxe-column field="Ro1Detection1" title="ｾﾝｻ位相間違い検出位置①" />
            <vxe-column field="Ro1Detection2" title="ｾﾝｻ位相間違い検出位置②" />
        </vxe-colgroup>
    </vxe-colgroup>
</template>
<template>
    <vxe-colgroup title="GearTable">
        <vxe-colgroup title="防错防误39计测日時">
            <vxe-column field="GePokayokeDate39" title="防错防误39计测日時" />
        </vxe-colgroup>

        <vxe-colgroup title="防错防误40计测日時">
            <vxe-column field="GePokayokeDate40" title="防错防误40计测日時" />
        </vxe-colgroup>

        <vxe-colgroup title="RrBrg圧入">
            <vxe-column field="GeHsgBrgMeasDate" title="圧入计测日时" />
            <vxe-column field="GeHsgBrgInflectPtStroke" title="圧入拐点行程1" />
            <vxe-column field="GeHsgBrgInflectPtLoad" title="圧入拐点负重1" />
            <vxe-column field="GeHsgBrgFinalStroke" title="圧入最终行程1" />
            <vxe-column field="GeHsgBrgFinalLoad" title="圧入最终负重1" />
            <vxe-column field="GeHsgBrgInflectPtStrokeSec" title="圧入拐点行程2" />
            <vxe-column field="GeHsgBrgInflectPtLoadSec" title="圧入拐点负重2" />
            <vxe-column field="GeHsgBrgFinalStrokeSec" title="圧入最终行程2" />
            <vxe-column field="GeHsgBrgFinalLoadSec" title="圧入最终负重2" />
            <vxe-column field="GeHsgBrgMaasterStroke" title="圧入主行程" />
        </vxe-colgroup>

        <vxe-colgroup title="防错防误41计测日時">
            <vxe-column field="GePokayokeDate41" title="防错防误41计测日時" />
        </vxe-colgroup>

        <vxe-colgroup title="防错防误42计测日時">
            <vxe-column field="GePokayokeDate42" title="防错防误42计测日時" />
        </vxe-colgroup>

        <vxe-colgroup title="防错防误43计测日時">
            <vxe-column field="GePokayokeDate43" title="防错防误43计测日時" />
        </vxe-colgroup>

        <vxe-colgroup title="防错防误44计测日時">
            <vxe-column field="GePokayokeDate44" title="防错防误44计测日時" />
        </vxe-colgroup>

        <vxe-colgroup title="翻转机">
            <vxe-column field="GeUpenderDate" title="翻转机计测日時" />
        </vxe-colgroup>

        <vxe-colgroup title="防错防误45计测日時">
            <vxe-column field="GePokayokeDate45" title="防错防误45计测日時" />
        </vxe-colgroup>

        <vxe-colgroup title="拒绝">
            <vxe-column field="GeRejectTime" title="拒绝计测日時" />
        </vxe-colgroup>

        <vxe-colgroup title="防错防误33计测日時">
            <vxe-column field="GePokayokeDate33" title="防错防误33计测日時" />
        </vxe-colgroup>

        <vxe-colgroup title="差速器装配">
            <vxe-column field="GeDgameasDate" title="计测日时" />
            <vxe-column field="GeDgapos3Axis" title="推进位置3轴" />
            <vxe-column field="GeDgaload3Axis" title="负重（电流值）3轴" />
            <vxe-column field="GeDgapos4Axis" title="推进位置4轴" />
            <vxe-column field="GeDgaload4Axis" title="负重（电流值）4轴" />
        </vxe-colgroup>

        <vxe-colgroup title="防错防误34计测日時">
            <vxe-column field="GePokayokeDate34" title="防错防误34计测日時" />
        </vxe-colgroup>

        <vxe-colgroup title="差动齿轮测量">
            <vxe-column field="GeDgmmeasDate" title="计测日时" />
            <vxe-column field="GeDgmdagjudge" title="动作齿轮判定" />
            <vxe-column field="GeDgmlhRh" title="変位量" />
            <vxe-column field="GeDgmmaxTorque" title="上限扭矩" />
            <vxe-column field="GeDgmminTorque" title="下限扭矩" />
        </vxe-colgroup>

        <vxe-colgroup title="差速器销铆接">
            <vxe-column field="GeDprmeasDate" title="差速器计测日时" />
            <vxe-column field="GeDprfrs" title="差速器铆接最终行程" />
            <vxe-column field="GeDprfrl" title="差速器铆接最终负重" />
            <vxe-column field="GeContact" title="ワーク接触位置" />
        </vxe-colgroup>

        <vxe-colgroup title="防错防误35计测日時">
            <vxe-column field="GePokayokeDate35" title="防错防误35计测日時" />
        </vxe-colgroup>

        <vxe-colgroup title="齿轮压入１">
            <vxe-column field="GeGearMeasDate" title="计测日时" />
            <vxe-column field="GeGearStroke" title="拐点行程" />
            <vxe-column field="GeGearLoad" title="変曲点负重" />
            <vxe-column field="GeGearFinalStroke" title="最终行程" />
            <vxe-column field="GeGearFinalLoad" title="最終荷负重" />
            <vxe-column field="GeGearStrokeSec" title="拐点行程" />
            <vxe-column field="GeGearLoadSec" title="変曲点负重" />
            <vxe-column field="GeGearFinalStrokeSec" title="最终行程" />
            <vxe-column field="GeGearFinalLoadSec" title="最終荷负重" />
            <vxe-column field="GeGearMainStroke" title="主行程" />
            <vxe-column field="GeGearAbvalue" title="A/B" />
        </vxe-colgroup>

        <vxe-colgroup title="齿轮压入2">
            <vxe-column field="GeGear2Date" title="计测日时" />
            <vxe-column field="GeGear2Stroke" title="拐点行程" />
            <vxe-column field="GeGear2Load" title="変曲点负重" />
            <vxe-column field="GeGear2FinalStroke" title="最终行程" />
            <vxe-column field="GeGear2FinalLoad" title="最終荷负重" />
            <vxe-column field="GeGear2StrokeSec" title="拐点行程" />
            <vxe-column field="GeGear2LoadSec" title="変曲点负重" />
            <vxe-column field="GeGear2FinalStrokeSec" title="最终行程" />
            <vxe-column field="GeGear2FinalLoadSec" title="最終荷负重" />
            <vxe-column field="GeGear2MainStroke" title="主行程" />
            <vxe-column field="GeGear2Abvalue" title="A/B" />

        </vxe-colgroup>

        <vxe-colgroup title="差速器销l螺母紧固">
            <vxe-column field="GeDpntDate" title="计测日时" />
            <vxe-column field="GeDpntTorqueAxis1" title="紧固扭矩1軸" />
            <vxe-column field="GeDpntAngleAxis1" title="紧固角度1軸" />
            <vxe-column field="GeDpntJudgment" title="判定代码" />
            <vxe-column field="GeDpntSeating" title="着座扭矩1軸" />
            <vxe-column field="GeDpntDrop" title="下降角度1軸" />
            <vxe-column field="GeDpntSlack" title="松弛监视器扭矩1軸" />

        </vxe-colgroup>

        <vxe-colgroup title="差速器销螺母铆接">
            <vxe-column field="GeDpnfMeasDate" title="计测日时" />
            <vxe-column field="GeDpnfFinalStroke" title="最终行程" />
            <vxe-column field="GeDpnfFinalLoad" title="最终负重" />
            <vxe-column field="GeDpnfMainStroke" title="主行程" />

        </vxe-colgroup>

        <vxe-colgroup title="DF BRG＋环圧入">
            <vxe-column field="GeDfbrgdate" title="计测日时" />
            <vxe-column field="GeDfbrgstroke" title="拐点行程" />
            <vxe-column field="GeDfbrgload" title="拐点负重" />
            <vxe-column field="GeDfbrgfinalStroke" title="最终行程" />
            <vxe-column field="GeDfbrgfinalLoad" title="最终负重" />
            <vxe-column field="GeDfbrgstrokeSec" title="拐点行程" />
            <vxe-column field="GeDfbrgloadSec" title="拐点负重" />
            <vxe-column field="GeDfbrgfinalStrokeSec" title="最终行程" />
            <vxe-column field="GeDfbrgfinalLoadSec" title="最终负重" />
            <vxe-column field="GeDfbrgmainStroke" title="主行程" />
        </vxe-colgroup>

        <vxe-colgroup title="DF紧固１">
            <vxe-column field="GeDf1date" title="计测日时" />
            <vxe-column field="GeDf1angleAxis1" title="紧固角度 1軸" />
            <vxe-column field="GeDf1codeAxis1" title="第1軸 判定代码" />
            <vxe-column field="GeDf1angleAxis2" title="紧固角度 2軸" />
            <vxe-column field="GeDf1codeAxis2" title="第２軸 判定代码" />
            <vxe-column field="GeDf1angleAxis3" title="紧固角度 3軸" />
            <vxe-column field="GeDf1codeAxis3" title="第３軸 判定代码" />
            <vxe-column field="GeDf1angleAxis4" title="紧固角度 4軸" />
            <vxe-column field="GeDf1codeAxis4" title="第4軸 判定代码" />
            <vxe-column field="GeDf1angleAxis5" title="紧固角度 5軸" />
            <vxe-column field="GeDf1codeAxis5" title="第5軸 判定代码" />
            <vxe-column field="GeDf1angleAxis6" title="紧固角度 6軸" />
            <vxe-column field="GeDf1codeAxis6" title="第6軸 判定代码" />
            <vxe-column field="GeDf1abvalue" title="A/B" />

        </vxe-colgroup>

        <vxe-colgroup title="DF紧固2">
            <vxe-column field="GeDf2date" title="计测日时" />
            <vxe-column field="GeDf2angleAxis1" title="紧固角度 1軸" />
            <vxe-column field="GeDf2codeAxis1" title="第1軸 判定代码" />
            <vxe-column field="GeDf2angleAxis2" title="紧固角度 2軸" />
            <vxe-column field="GeDf2codeAxis2" title="第２軸 判定代码" />
            <vxe-column field="GeDf2angleAxis3" title="紧固角度 3軸" />
            <vxe-column field="GeDf2codeAxis3" title="第３軸 判定代码" />
            <vxe-column field="GeDf2angleAxis4" title="紧固角度 4軸" />
            <vxe-column field="GeDf2codeAxis4" title="第4軸 判定代码" />
            <vxe-column field="GeDf2angleAxis5" title="紧固角度 5軸" />
            <vxe-column field="GeDf2codeAxis5" title="第5軸 判定代码" />
            <vxe-column field="GeDf2angleAxis6" title="紧固角度 6軸" />
            <vxe-column field="GeDf2codeAxis6" title="第6軸 判定代码" />
            <vxe-column field="GeDf2abvalue" title="A/B" />
        </vxe-colgroup>

        <vxe-colgroup title="DF反転">
            <vxe-column field="GeDfreverseDate" title="DF反転计测日時" />
            <vxe-column field="GePinposition" title="ピン検査位置" />

        </vxe-colgroup>

        <vxe-colgroup title="防错防误36计测日時">
            <vxe-column field="GePokayokeDate36" title="防错防误36计测日時" />
        </vxe-colgroup>

        <vxe-colgroup title="防错防误37计测日時">
            <vxe-column field="GePokayokeDate37" title="防错防误37计测日時" />
        </vxe-colgroup>

        <vxe-colgroup title="防错防误38计测日時">
            <vxe-column field="GePokayokeDate38" title="防错防误38计测日時" />
        </vxe-colgroup>

        <vxe-colgroup title="MG1磁化">
            <vxe-column field="GeMg1workTemp" title="MG1工件温度℃" />
            <vxe-column field="GeMg1fluxValue" title="MG1通量值" />
            <vxe-column field="GeMg1dec" title="MG1判定" />
        </vxe-colgroup>

        <vxe-colgroup title="MG2磁化">
            <vxe-column field="GeMg2workTemp" title="MG2工件温度℃" />
            <vxe-column field="GeMg2fluxValue" title="MG2通量值" />
            <vxe-column field="GeMg2dec" title="MG2判定" />
        </vxe-colgroup>

        <vxe-colgroup title="轴移載计测日時">
            <vxe-column field="GeAsldate" title="轴移載计测日時" />
        </vxe-colgroup>

        <vxe-colgroup title="铁芯移載计测日時">
            <vxe-column field="GeIctldate" title="铁芯移載计测日時" />
        </vxe-colgroup>

        <vxe-colgroup title="转子铁芯序列">
            <vxe-column field="GeRcserial" title="转子铁芯序列" />
        </vxe-colgroup>

        <vxe-colgroup title="轴序列">
            <vxe-column field="GeAxisSerial" title="轴序列" />
        </vxe-colgroup>

        <vxe-colgroup title="铁芯加熱">
            <vxe-column field="GeProcDate" title="加工開始日時" />
            <vxe-column field="GeIsRcheat" title="铁芯加熱有無" />
            <vxe-column field="GeHeatSt" title="加熱ST" />
            <vxe-column field="GeHeatProcedure" title="加热程序" />
            <vxe-column field="GeRoomTemp" title="室温（℃）" />
            <vxe-column field="GeAxisTemp" title="轴温度（℃）" />
            <vxe-column field="GeCoreBefore" title="加熱前铁芯温度（℃）" />
            <vxe-column field="GeCoreAfter" title="加熱完了時铁芯温度（℃）" />
            <vxe-column field="GeIhbefore" title="加熱前IH盘管温度（℃）" />
            <vxe-column field="GeIhafter" title="加熱後IH盘管温度（℃）" />
            <vxe-column field="GeCdtemp" title="冷却空气温度（℃）" />
            <vxe-column field="GeHeatTime" title="加熱通電時間(秒" />
            <vxe-column field="GeHeatOutput" title="加熱输出(％）" />
            <vxe-column field="GeHeatEndTime" title="加熱完了日時" />
            <vxe-column field="GeJudgmentCode" title="判定代码" />
        </vxe-colgroup>

        <vxe-colgroup title="轴圧入">
            <vxe-column field="GeApidate" title="计测日時" />
            <vxe-column field="GeApistroke" title="拐点行程" />
            <vxe-column field="GeApiload" title="拐点负重" />
            <vxe-column field="GeApifinalStroke" title="圧入最终行程" />
            <vxe-column field="GeApimainStroke" title="主行程" />
            <vxe-column field="GeApicoreTemp" title="圧入時铁芯温度（℃）" />
            <vxe-column field="GeApisttime" title="圧入ST滞在時間(s)" />
            <vxe-column field="GeApiinitTilt" title="初始倾斜(kN/mm)" />
            <vxe-column field="GeApipos" title="偏离检测位置(mm)" />
            <vxe-column field="GeApideviationLoad" title="偏离检负重(kN)" />
            <vxe-column field="GeApicode" title="判定代码" />
            <vxe-column field="GeApimachine" title="圧入機" />
        </vxe-colgroup>

        <vxe-colgroup title="l螺母紧固">
            <vxe-column field="GeNtdate" title="计测日時" />
            <vxe-column field="GeNttorqueAxis1" title="紧固扭矩1軸" />
            <vxe-column field="GeNtangleAxis1" title="紧固角度1軸" />
            <vxe-column field="GeNtcode" title="判定代码" />
            <vxe-column field="GeNthistory" title="抽样履历" />
            <vxe-column field="GeNtseating1" title="着座扭矩1軸" />
            <vxe-column field="GeNtdrop1" title="下降角度1軸" />
            <vxe-column field="GeNtslack1" title="松监视器扭矩1軸" />
        </vxe-colgroup>

        <vxe-colgroup title="铆接圧入">
            <vxe-column field="GeRapdate" title="计测日時" />
            <vxe-column field="GeRapbefore" title="铆接行程（0前）" />
            <vxe-column field="GeRapafter" title="铆接行程（0後）" />
            <vxe-column field="GeRapload" title="铆接荷重" />
            <vxe-column field="GeRapmainStroke" title="主行程" />
            <vxe-column field="GeRapcode" title="判定代码" />
            <vxe-column field="GeRapwashSensor" title="垫圈检测传感器値" />
            <vxe-column field="GeRapwashMain" title="垫圈检测主値" />
            <vxe-column field="GeRapwashPos" title="垫圈确认位置" />
            <vxe-column field="GeRapstroke" title="拐点行程" />
            <vxe-column field="GeRaploadSec" title="拐点负重" />
            <vxe-column field="GeRapfinalStroke" title="圧入最终行程" />
            <vxe-column field="GeRapmain2Stroke" title="主行程" />
            <vxe-column field="GeRapcode2" title="判定代码" />

        </vxe-colgroup>

        <vxe-colgroup title="旋转变压器圧入">
            <vxe-column field="GeRtpstartDate" title="加工開始日時" />
            <vxe-column field="GeRtpstroke" title="拐点行程" />
            <vxe-column field="GeRtpload" title="拐点负重" />
            <vxe-column field="GeRtpfinalStroke" title="圧入最终行程" />
            <vxe-column field="GeRtpmainStroke" title="主行程" />
            <vxe-column field="GeRtpcode" title="判定代码" />
            <vxe-column field="GeRtphistory" title="抽样履历" />
        </vxe-colgroup>
    </vxe-colgroup>

</template>
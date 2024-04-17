<template>
    <vxe-colgroup title="RoTorTable2">
        <vxe-colgroup title="差速器销l螺母紧固">
            <vxe-column field='Ro2DpntDate' title="计测日时" />
            <vxe-column field='Ro2DpntTorqueAxis1' title="紧固扭矩1軸" />
            <vxe-column field='Ro2DpntAngleAxis1' title="紧固角度1軸" />
            <vxe-column field='Ro2DpntJudgment' title="判定代码" />
            <vxe-column field='Ro2DpntSeating' title="着座扭矩1軸" />
            <vxe-column field='Ro2DpntDrop' title="下降角度1軸" />
            <vxe-column field='Ro2DpntSlack' title="松弛监视器扭矩1軸" />
        </vxe-colgroup>

        <vxe-colgroup title="差速器销螺母铆接">
            <vxe-column field='Ro2DpnfMeasDate' title='计测日时' />
            <vxe-column field='Ro2DpnfFinalStroke' title='最终行程' />
            <vxe-column field='Ro2DpnfFinalLoad' title='最终负重' />
            <vxe-column field='Ro2DpnfMainStroke' title='主行程' />
        </vxe-colgroup>

        <vxe-colgroup title="DF BRG＋环圧入">
            <vxe-column field="Ro2Dfbrgdate" title="计测日时" />
            <vxe-column field="Ro2Dfbrgstroke" title='拐点行程' />
            <vxe-column field="Ro2" title='拐点负重' />
            <vxe-column field="Ro2DfbrgfinalStroke" title='最终行程' />
            <vxe-column field="Ro2DfbrgfinalLoad" title='最终负重' />
            <vxe-column field="Ro2DfbrgstrokeSec" title='拐点行程' />
            <vxe-column field="Ro2DfbrgloadSec" title='拐点负重' />
            <vxe-column field="Ro2DfbrgfinalStrokeSec" title='最终行程' />
            <vxe-column field="Ro2DfbrgfinalLoadSec" title='最终负重' />
            <vxe-column field="Ro2DfbrgmainStroke" title='主行程' />
        </vxe-colgroup>

        <vxe-colgroup title="DF紧固１">
            <vxe-column field="Ro2Df1date" title="计测日时" />
            <vxe-column field="Ro2Df1angleAxis1" title="紧固角度 1軸" />
            <vxe-column field="Ro2Df1codeAxis1" title="第1軸 判定代码" />
            <vxe-column field="Ro2Df1angleAxis2" title="紧固角度 2軸" />
            <vxe-column field="Ro2Df1codeAxis2" title="第２軸 判定代码" />
            <vxe-column field="Ro2Df1angleAxis3" title="紧固角度 3軸" />
            <vxe-column field="Ro2Df1codeAxis3" title="第３軸 判定代码" />
            <vxe-column field="Ro2Df1angleAxis4" title="紧固角度 4軸" />
            <vxe-column field="Ro2Df1codeAxis4" title="第4軸 判定代码" />
            <vxe-column field="Ro2Df1angleAxis5" title="紧固角度 5軸" />
            <vxe-column field="Ro2Df1codeAxis5" title="第5軸 判定代码" />
            <vxe-column field="Ro2Df1angleAxis6" title="紧固角度 6軸" />
            <vxe-column field="Ro2Df1codeAxis6" title="第6軸 判定代码" />
            <vxe-column field="Ro2Df1abvalue" title="A/B" />
        </vxe-colgroup>

        <vxe-colgroup title="DF紧固2">
            <vxe-column field="Ro2Df2date" title="计测日时" />
            <vxe-column field="Ro2Df2angleAxis1" title="紧固角度 1軸" />
            <vxe-column field="Ro2Df2codeAxis1" title="第1軸 判定代码" />
            <vxe-column field="Ro2Df2angleAxis2" title="紧固角度 2軸" />
            <vxe-column field="Ro2Df2codeAxis2" title="第２軸 判定代码" />
            <vxe-column field="Ro2Df2angleAxis3" title="紧固角度 3軸" />
            <vxe-column field="Ro2Df2codeAxis3" title="第３軸 判定代码" />
            <vxe-column field="Ro2Df2angleAxis4" title="紧固角度 4軸" />
            <vxe-column field="Ro2Df2codeAxis4" title="第4軸 判定代码" />
            <vxe-column field="Ro2Df2angleAxis5" title="紧固角度 5軸" />
            <vxe-column field="Ro2Df2codeAxis5" title="第5軸 判定代码" />
            <vxe-column field="Ro2Df2angleAxis6" title="紧固角度 6軸" />
            <vxe-column field="Ro2Df2codeAxis6" title="第6軸 判定代码" />
            <vxe-column field="Ro2Df2abvalue" title="A/B" />
        </vxe-colgroup>

        <vxe-colgroup title="DF反転">
            <vxe-column field="Ro2DfreverseDate" title="DF反転计测日時" />
        </vxe-colgroup>

        <vxe-colgroup title="防错防误36计测日時">
            <vxe-column field="Ro2PokayokeDate36" title="防错防误36计测日時" />
        </vxe-colgroup>

        <vxe-colgroup title="防错防误37计测日時">
            <vxe-column field="Ro2PokayokeDate37" title="防错防误37计测日時" />
        </vxe-colgroup>

        <vxe-colgroup title="防错防误38计测日時">
            <vxe-column field="Ro2PokayokeDate38" title="防错防误38计测日時" />
        </vxe-colgroup>

        <vxe-colgroup title="MG1磁化">
            <vxe-column field="Ro2Mg1workTemp" title="MG1工件温度" />
            <vxe-column field="Ro2Mg1fluxValue" title="MG1通量值" />
            <vxe-column field="Ro2Mg1dec" title="MG1判定" />
        </vxe-colgroup>

        <vxe-colgroup title="MG2磁化">
            <vxe-column field="Ro2Mg2workTemp" title="MG2工件温度" />
            <vxe-column field="Ro2Mg2fluxValue" title="MG2通量值" />
            <vxe-column field="Ro2Mg2dec" title="MG2判定" />
        </vxe-colgroup>

        <vxe-colgroup title="轴移載计测日時">
            <vxe-column field="Ro2Asldate" title="轴移載计测日時" />
        </vxe-colgroup>

        <vxe-colgroup title="铁芯移載计测日時">
            <vxe-column field="Ro2Ictldate" title="铁芯移載计测日時" />
        </vxe-colgroup>

        <vxe-colgroup title="转子铁芯序列">
            <vxe-column field="Ro2Rcserial" title="转子铁芯序列" />
        </vxe-colgroup>

        <vxe-colgroup title="轴序列">
            <vxe-column field="Ro2AxisSerial" title="轴序列" />
        </vxe-colgroup>

        <vxe-colgroup title="铁芯加熱">
            <vxe-column field="Ro2ProcDate" title="加工開始日時" />
            <vxe-column field="Ro2IsRcheat" title="铁芯加熱有無" />
            <vxe-column field="Ro2HeatSt" title="加熱ST" />
            <vxe-column field="Ro2HeatProcedure" title="加热程序" />
            <vxe-column field="Ro2RoomTemp" title="室温（℃）" />
            <vxe-column field="Ro2AxisTemp" title="轴温度（℃）" />
            <vxe-column field="Ro2CoreBefore" title="加熱前铁芯温度（℃）" />
            <vxe-column field="Ro2CoreAfter" title="加熱完了時铁芯温度（℃）" />
            <vxe-column field="Ro2Ihbefore" title="加熱前IH盘管温度（℃）" />
            <vxe-column field="Ro2Ihafter" title="加熱後IH盘管温度（℃）" />
            <vxe-column field="Ro2Cdtemp" title="冷却空气温度（℃）" />
            <vxe-column field="Ro2HeatTime" title="加熱通電時間(秒)" />
            <vxe-column field="Ro2HeatOutput" title="加熱输出(％）" />
            <vxe-column field="Ro2HeatEndTime" title="加熱完了日時" />

        </vxe-colgroup>

        <vxe-colgroup title="轴圧入">
            <vxe-column field="Ro2Apidate" title="计测日時" />
            <vxe-column field="Ro2Apistroke" title="拐点行程" />
            <vxe-column field="Ro2Apiload" title="拐点负重" />
            <vxe-column field="Ro2ApifinalStroke" title="圧入最终行程" />
            <vxe-column field="Ro2ApimainStroke" title="主行程" />
            <vxe-column field="Ro2ApicoreTemp" title="圧入時铁芯温度（℃）" />
            <vxe-column field="Ro2Apisttime" title="圧入ST滞在時間(s)" />
            <vxe-column field="Ro2ApiinitTilt" title="初始倾斜(kN/mm)" />
            <vxe-column field="Ro2Apipos" title="偏离检测位置(mm)" />
            <vxe-column field="Ro2ApideviationLoad" title="偏离检负重(kN)" />
            <vxe-column field="Ro2Apicode" title="判定代码" />
            <vxe-column field="Ro2Apimachine" title="圧入機" />
        </vxe-colgroup>

        <vxe-colgroup title="l螺母紧固">
            <vxe-column field="Ro2Ntdate" title=计测日時 />
            <vxe-column field="Ro2NttorqueAxis1" title="紧固扭矩1軸" />
            <vxe-column field="Ro2NtangleAxis1" title="紧固角度1軸" />
            <vxe-column field="Ro2Ntcode" title="判定代码" />
            <vxe-column field="Ro2Nthistory" title="抽样履历" />
            <vxe-column field="Ro2Ntseating1" title="着座扭矩1軸" />
            <vxe-column field="Ro2Ntdrop1" title="下降角度1軸" />
            <vxe-column field="Ro2Ntslack1" title="松监视器扭矩1軸" />
        </vxe-colgroup>

        <vxe-colgroup title="铆接圧入">
            <vxe-column field="Ro2Rapdate" title="计测日時" />
            <vxe-column field="Ro2Rapbefore" title="铆接行程（0前）" />
            <vxe-column field="Ro2Rapafter" title="铆接行程（0後）" />
            <vxe-column field="Ro2Rapload" title="铆接荷重" />
            <vxe-column field="Ro2RapmainStroke" title="主行程" />
            <vxe-column field="Ro2Rapcode" title="判定代码" />
            <vxe-column field="Ro2RapwashSensor" title="垫圈检测传感器値" />
            <vxe-column field="Ro2RapwashMain" title="垫圈检测主値" />
            <vxe-column field="Ro2RapwashPos" title="垫圈确认位置" />
            <vxe-column field="Ro2Rapstroke" title="拐点行程" />
            <vxe-column field="Ro2RaploadSec" title="拐点负重" />
            <vxe-column field="Ro2RapfinalStroke" title="圧入最终行程" />
            <vxe-column field="Ro2Rapmain2Stroke" title="主行程" />
            <vxe-column field="Ro2Rapcode2" title="判定代码" />
        </vxe-colgroup>

        <vxe-colgroup title="旋转变压器圧入">
            <vxe-column field="Ro2RtpstartDate" title="加工開始日時" />
            <vxe-column field="Ro2Rtpstroke" title="拐点行程" />
            <vxe-column field="Ro2Rtpload" title="拐点负重" />
            <vxe-column field="Ro2RtpfinalStroke" title="圧入最终行程" />
            <vxe-column field="Ro2RtpmainStroke" title="主行程" />
            <vxe-column field="Ro2Rtpcode" title="判定代码" />
            <vxe-column field="Ro2Rtphistory" title="抽样履历" />
            <vxe-column field="Ro2Detection1" title="ｾﾝｻ位相間違い検出位置①" />
            <vxe-column field="Ro2Detection2" title="ｾﾝｻ位相間違い検出位置②" />
        </vxe-colgroup>
    </vxe-colgroup>
</template>
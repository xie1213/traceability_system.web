<template>
    <div style="height: 800px;">
        <vxe-table :data="tableData" v-bind="TableConfig">
            <vxe-colgroup title="特定列" fixed="left">
                <vxe-column field="CollectionDate" title="采集时间" fixed="left" sortable :formatter="formatDate" />
                <vxe-column field="RrcoverSerial" title="Rr盖序列" fixed="left"  sortable/>
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
                <vxe-column field="ShipmentSerial" title="出货序列" sortable ></vxe-column>
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

            <vxe-colgroup title="防错防误39计测日時">
                <vxe-column field='PokayokeDate39' title='防错防误39计测日時' sortable ></vxe-column>
            </vxe-colgroup>

            <vxe-colgroup title="防错防误40计测日時">
                <vxe-column field="PokayokeDate40" title="防错防误40计测日時" sortable ></vxe-column>
            </vxe-colgroup>

            <vxe-colgroup title="RrBrg圧入">
                <vxe-column field='HsgBrgMdate' title='计测日时' sortable ></vxe-column>
                <vxe-column field='HsgBrgStroke' title='拐点行程1' sortable ></vxe-column>
                <vxe-column field='HsgBrgLoad' title='拐点负重1' sortable ></vxe-column>
                <vxe-column field='HsgBrgFinalStroke' title='最终行程1' sortable ></vxe-column>
                <vxe-column field='HsgBrgFinalLoad' title='最终负重1' sortable ></vxe-column>
                <vxe-column field='HsgBrgStrokeSec' title='拐点行程2' sortable ></vxe-column>
                <vxe-column field='HsgBrgLoadSec' title='拐点负重2' sortable ></vxe-column>
                <vxe-column field='HsgBrgFinalStrokeSec' title='最终行程2' sortable ></vxe-column>
                <vxe-column field='HsgBrgFinalLoadSec' title='最终负重2' sortable ></vxe-column>
                <vxe-column field='HsgBrgMainStroke' title='主行程' sortable ></vxe-column>
            </vxe-colgroup>

            <vxe-colgroup title="防错防误41计测日時">
                <vxe-column field='PokayokeDate41' title='防错防误41计测日時' sortable ></vxe-column>
            </vxe-colgroup>

            <vxe-colgroup title="防错防误42计测日時">
                <vxe-column field='PokayokeDate42' title='防错防误42计测日時' sortable ></vxe-column>
            </vxe-colgroup>

            <vxe-colgroup title="防错防误43计测日時">
                <vxe-column field='PokayokeDate43' title='防错防误43计测日時' sortable ></vxe-column>

            </vxe-colgroup>

            <vxe-colgroup title="防错防误44计测日時">
                <vxe-column field='PokayokeDate44' title='防错防误44计测日時' sortable ></vxe-column>
            </vxe-colgroup>

            <vxe-colgroup title="反転機">
                <vxe-column field='UpenderDate' title='反転機计测日時' sortable ></vxe-column>
            </vxe-colgroup>

            <vxe-colgroup title="防错防误45计测日時">
                <vxe-column field='PokayokeDate45' title='防错防误45计测日時' sortable ></vxe-column>
            </vxe-colgroup>

            <vxe-colgroup title="拒绝">
                <vxe-column field='RejectTime' title='拒绝计测日時' sortable ></vxe-column>
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
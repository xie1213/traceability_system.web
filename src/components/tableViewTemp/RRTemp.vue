<template>
    <vxe-table :data="tableData" v-bind="TableConfig">
        <vxe-colgroup title="上传时间和序列号" fixed="left">
            <vxe-column field="CollectionDate" width="150px" title="上传时间" fixed="left" sortable :formatter="formatDate" />
            <vxe-column field="RrcoverSerial" width="150px" title="Rr盖序列" fixed="left" sortable />
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
            <vxe-column field="Mg1rserial" width="145px" title="MG1转子序列" sortable />
            <vxe-column field="Mg2rserial" width="145px" title="MG2转子序列" sortable />
            <vxe-column field="CoDriveSerial" width="155px" title="计数器驱动器序列" sortable />
            <vxe-column field="MoDriveSerial" width="145px" title="MG2修正序列" sortable />
            <vxe-column field="DrivenSerial" width="145px" title="受驱动序列" sortable />
            <vxe-column field="DorpinSerial" width="145px" title="差速器销序列" sortable />
            <vxe-column field="DfringSerial" width="145px" title="齿圈序列" sortable />
            <vxe-column field="DfcaseSerial" width="145px" title="差速器箱序列" sortable />
            <!-- <vxe-column field="RrcoverSerial" width="155px" title="Rr盖序列" sortable /> -->
            <vxe-column field="ShipmentSerial" width="155px" title="出货序列" sortable />
            <vxe-column field="RropSerial" width="145px" title="Rr油泵序列" sortable />
        </vxe-colgroup>
        <BasicTemp />
        <PokayokeDate :colName="'防错防误39计测日時'" :value="'PokayokeDate39'" />
        <PokayokeDate :colName="'防错防误40计测日時'" :value="'PokayokeDate40'" />

        <vxe-colgroup title="RrBrg圧入">
            <vxe-column field="HsgBrgMdate" width="100px" title="RrBrg圧入计测日时" sortable></vxe-column>
            <vxe-column field="HsgBrgStroke" width="100px" title="RrBrg圧入拐点行程1" sortable></vxe-column>
            <vxe-column field="HsgBrgLoad" width="100px" title="RrBrg圧入拐点负重1" sortable></vxe-column>
            <vxe-column field="HsgBrgFinalStroke" width="100px" title="RrBrg圧入最终行程1" sortable></vxe-column>
            <vxe-column field="HsgBrgFinalLoad" width="100px" title="RrBrg圧入最终负重1" sortable></vxe-column>
            <vxe-column field="HsgBrgStrokeSec" width="100px" title="RrBrg圧入拐点行程2" sortable></vxe-column>
            <vxe-column field="HsgBrgLoadSec" width="100px" title="RrBrg圧入拐点负重2" sortable></vxe-column>
            <vxe-column field="HsgBrgFinalStrokeSec" width="100px" title="RrBrg圧入最终行程2" sortable></vxe-column>
            <vxe-column field="HsgBrgFinalLoadSec" width="100px" title="RrBrg圧入最终负重2" sortable></vxe-column>
            <vxe-column field="HsgBrgMainStroke" width="100px" title="RrBrg圧入主行程" sortable></vxe-column>
        </vxe-colgroup>

        <PokayokeDate :colName="'防错防误41计测日時'" :value="'PokayokeDate41'" />
        <PokayokeDate :colName="'防错防误42计测日時'" :value="'PokayokeDate42'" />
        <PokayokeDate :colName="'防错防误43计测日時'" :value="'PokayokeDate43'" />
        <PokayokeDate :colName="'防错防误44计测日時'" :value="'PokayokeDate44'" />
        <PokayokeDate :colName="'反転機计测日時'" :value="'UpenderDate'" />
        <PokayokeDate :colName="'防错防误45计测日時'" :value="'PokayokeDate45'" />
        <PokayokeDate :colName="'拒绝计测日時'" :value="'RejectTimeDate'" />
    </vxe-table>
</template>
<script setup>
    import { defineProps } from "vue";
    import { TableConfig } from "@/service/GetDataMethod/utils";
    import XEUtils from "xe-utils";
    import BasicTemp from "./BasicTemp.vue";
    import PokayokeDate from "./PokayokeDate.vue";

    defineProps({
        tableData: Array,
    });

    const formatDate = ({ cellValue }) => {
        return XEUtils.toDateString(cellValue, "yyyy-MM-dd HH:mm:ss");
    };
</script>

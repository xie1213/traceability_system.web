<template>
    <vxe-colgroup title="RRTable">
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
            <PokayokeDate :colName="'反転機计测日時'" :value="'UpenderDate'" />
            <PokayokeDate :colName="'防错防误45计测日時'" :value="'PokayokeDate45'" />
            <PokayokeDate :colName="'拒绝计测日時'" :value="'RejectTimeDate'" />
    </vxe-colgroup>
</template>
<script setup>
import PokayokeDate from '@/components/tableViewTemp/PokayokeDate'

</script>
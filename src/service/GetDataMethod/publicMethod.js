//合并数组
export function exportData(TableData, fieidData) {
  let dataIndex = 0;
  const newObj = TableData.map((table) => {
    const ColVal = table.colName.map((col) => {
      if (dataIndex < fieidData.length) {
        const data = fieidData[dataIndex++];
        return {
          col: col,
          val: data
        };
      } else {
        return null;
      }
    });

    return {
      title: table.tableName,
      val: ColVal
    };
  });
  return newObj;
}

//字段参数
export const parseData = [
  "计测日时",
  "拐点行程",
  "変曲点负重",
  "最终行程",
  "最終荷负重",
  "拐点行程",
  "変曲点负重",
  "最终行程",
  "最終荷负重",
  "主行程",
  "A/B"
]

export const addTwoItem = (count, name) => {
  let itemList = []
  itemList.push(name + "计测日時")
  for (var i = 0; i < count; i++) {
    itemList.push(`${name}紧固角度${i + 1}軸`);
    itemList.push(`${name}第${i + 1}轴 判定代码`);
  }
  itemList.push(name + "A/B")
  return itemList
};
# Zerk 计划库 v1

首页的“训练计划库”支持保存当前勾选动作、预览编辑、文件导入、导出，以及公开 GitHub JSON 文件读取。计划保存在训练备份的 data.plans 中，可离线使用。

## 文件示例（格式演示，不是专业训练处方）

```json
{"format":"zerk-plan","version":1,"name":"我的胸日","notes":"按实际器械修改","source":"个人整理","days":[{"day":"chest","name":"胸与中束","exercises":[{"name":"坐姿推胸","part":"胸部","equipment":"NewTech","sets":3,"reps":10}]}]}
```

day 为 back/chest/legs。每个计划可有多个训练日；同一部位的不同日导入后追加到该部位动作库，目前没有周历轮换。组数为1–10，次数为1–100。递减组增加 type:"drop"、multiplier:2（单边重量双侧容量），以及恰好三个 segments:[{weight:8,reps:8},{weight:6,reps:10},{weight:4,reps:12}]。

## GitHub 更新

输入公开仓库的 blob 文件链接或 raw.githubusercontent.com 的 JSON 链接，点击读取。读取只生成预览，保存后才更新本地计划库；追加到训练需要再次选择“保存并加入训练”。私有仓库需下载 JSON 后文件导入，尚不支持私有 GitHub OAuth。没有上传训练记录到 GitHub 的功能。

Liftoscript、任意健身项目 JSON、网页文章不是此格式，需要人工转换和核对，不能直接执行脚本。保留原作者来源与相应许可说明。

## 数据保护

导入新动作时使用独立 ID。已存在的同名同器械同训练日动作会复用，保留旧目标、重量和记录；需要更改旧目标时在训练卡片里操作。移除计划不删除动作和训练历史。容量不足保存失败时撤回内存修改。备份导出包含已保存计划。

运行 `node plans.test.mjs` 检查格式、链接限制和脚本语法。饮食计划与跨设备记录同步尚未实现。


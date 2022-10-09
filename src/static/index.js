// 加载所有svg文件
const requireAll = requireContext => requireContext.keys().map(requireContext);
const svgs = require.context("./images", true,  /\.svg$/);
requireAll(svgs);
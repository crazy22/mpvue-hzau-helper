/**
 * 定义mutation-type
 * @time 2018/04/24
 * @author lxfriday
 */

// 用户注册登录
export const USER_SIGNIN_LOADING_TRUE = 'USER_SIGNIN_LOADING_TRUE'; // 登录的时候加载中
export const USER_SIGNIN_LOADING_FALSE = 'USER_SIGNIN_LOADING_FALSE'; // 登录的时候没有加载
export const USER_SIGNUP_LOADING_TRUE = 'USER_SIGNUP_LOADING_TRUE'; // 注册的时候加载中
export const USER_SIGNUP_LOADING_FALSE = 'USER_SIGNUP_LOADING_FALSE'; // 注册的时候没有加载
export const USER_SIGNIN = 'USER_SIGNIN'; // 用户登录
export const USER_SIGNUP = 'USER_SIGNUP'; // 用户注册
export const USER_SIGNOUT = 'USER_SIGNOUT'; // 用户退出登录
// 获取用户登录之后存储在本地的信息
export const USER_SIGNIN_FROM_LOCAL = 'USER_SIGNIN_FROM_LOCAL';
export const USER_SIGNUP_SEND_VERIFYCODE = 'USER_SIGNUP_SEND_VERIFYCODE'; // 注册的时候发送验证码

// publicarea
export const PUBLICAREA_SUBMIT_LOADING_TRUE = 'PUBLICAREA_SUBMIT_LOADING_TRUE'; // 发布的时候加载中
export const PUBLICAREA_SUBMIT_LOADING_FALSE = 'PUBLICAREA_SUBMIT_LOADING_FALSE'; // 发布的时候加载结束
export const PUBLICAREA_SUBMIT = 'PUBLICAREA_SUBMIT'; // 发布动态

export const PUBLICAREA_LOADING_TRUE = 'PUBLICAREA_LOADING_TRUE'; // 广场加载中
export const PUBLICAREA_LOADING_FALSE = 'PUBLICAREA_LOADING_FALSE'; // 广场结束加载
export const PUBLICAREA_LIST = 'PUBLICAREA_LIST'; // 获取广场列表
export const PUBLICAREA_LIST_REFRESH = 'PUBLICAREA_LIST_REFRESH'; // 刷新广场列表
export const PUBLICAREA_LIST_CLEAN = 'PUBLICAREA_LIST_CLEAN'; // 清空列表

// lostAndFound
export const LOSTANDFOUND_LOADING_TRUE = 'LOSTANDFOUND_LOADING_TRUE'; // 列表加载中
export const LOSTANDFOUND_LOADING_FALSE = 'LOSTANDFOUND_LOADING_FALSE'; // 列表结束加载
export const LOSTANDFOUND_LIST = 'LOSTANDFOUND_LIST'; // 获取列表
export const LOSTANDFOUND_LIST_RESET = 'LOSTANDFOUND_LIST_RESET'; // 重置store数据

// eatAndHaveFun
export const EATANDHAVEFUN_LOADING_TRUE = 'EATANDHAVEFUN_LOADING_TRUE'; // 列表加载中
export const EATANDHAVEFUN_LOADING_FALSE = 'EATANDHAVEFUN_LOADING_FALSE'; // 列表结束加载
export const EATANDHAVEFUN_LIST = 'EATANDHAVEFUN_LIST'; // 获取列表
export const EATANDHAVEFUN_LIST_RESET = 'EATANDHAVEFUN_LIST_RESET'; // 重置store数据

// pegrades
export const PEGRADES_LOADING_TRUE = 'PEGRADES_LOADING_TRUE'; // 查询中
export const PEGRADES_LOADING_FALSE = 'PEGRADES_LOADING_FALSE'; // 查询结束
export const PEGRADES = 'PEGRADES'; // 获取学生的体育管理系统数据
export const PEGRADES_RESET = 'PEGRADES_RESET'; // 重置数据

// electric charge
export const ELECTRIC_CHARGE_LOADING_TRUE = 'ELECTRIC_CHARGE_LOADING_TRUE'; // 处于加载状态，只有唯一的一个加载状态
export const ELECTRIC_CHARGE_LOADING_FALSE = 'ELECTRIC_CHARGE_LOADING_FALSE'; // 没有处于加载状态
export const ELECTRIC_CHARGE_ALL_BUILDING_INFO = 'ELECTRIC_CHARGE_ALL_BUILDING_INFO'; // 所有宿舍漏洞信息
export const ELECTRIC_CHARGE_BUILDING_FLOOR_ROOM = 'ELECTRIC_CHARGE_BUILDING_FLOOR_ROOM'; // 某一楼层的房间列表信息
export const ELECTRIC_CHARGE_ROOM_CHARGE_AUTO = 'ELECTRIC_CHARGE_ROOM_CHARGE_AUTO'; // 打开页面的时候，自动查询以往的宿舍电费
export const ELECTRIC_CHARGE_ROOM_CHARGE = 'ELECTRIC_CHARGE_ROOM_CHARGE'; // 查询房间的电费情况
export const ELECTRIC_CHARGE_RESET = 'ELECTRIC_CHARGE_RESET'; // 退出之后重置获取到的数据

// jwc 教务管理系统
export const JWC_SIGNIN_SIGNIN_CODE_LOADING_TRUE = 'JWC_SIGNIN_SIGNIN_CODE_LOADING_TRUE'; // 加载signin code是loading状态
export const JWC_SIGNIN_SIGNIN_CODE_LOADING_FALSE = 'JWC_SIGNIN_SIGNIN_CODE_LOADING_FALSE'; // 加载signin code不是loading状态
export const JWC_SIGNIN_LOADING_TRUE = 'JWC_SIGNIN_LOADING_TRUE'; // 登录过程中是loading状态
export const JWC_SIGNIN_LOADING_FALSE = 'JWC_SIGNIN_LOADING_FALSE'; // 登录过程中不是是loading转改
export const JWC_SIGNIN_CODE = 'JWC_SIGNIN_CODE'; // 登录的验证码cookie对
export const JWC_SIGNIN = 'JWC_SIGNIN'; // 登录教务管理系统

export const JWC_TERM_GPA = 'JWC_TERM_GPA'; // 所有学期的成绩
export const JWC_RANK_EXAMINATION = 'JWC_RANK_EXAMINATION'; // 等级考试

export const JWC_TERM_EXAMINATION_LOADING_TRUE = 'JWC_TERM_EXAMINATION_LOADING_TRUE'; // 学期考试信息加载中
export const JWC_TERM_EXAMINATION_LOADING_FALSE = 'JWC_TERM_EXAMINATION_LOADING_FALSE'; // 学期考试信息不处于加载中
export const JWC_TERM_EXAMINATION = 'JWC_TERM_EXAMINATION'; // 学期考试地点时间信息


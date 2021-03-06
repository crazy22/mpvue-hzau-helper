/**
 * 正则教研用户输入的内容
 * @time 2018/04/12
 * @author lxfriday
 */

/**
 * 检测手机号的格式
 * @param phone {string}
 * @returns {boolean}
 */
export function checkPhone(phone) {
  if (!/^1[0-9]{10}$/.test(phone)) {
    wx.showToast({
      title: '手机号格式不正确',
      icon: 'none',
    });
    return false;
  }
  return true;
}

/**
 * 教研密码的格式
 * @param pass {string}
 * @returns {boolean}
 */
export function checkPassword(pass) {
  if (!/^\w{9,18}$/.test(pass)) {
    wx.showToast({
      title: '密码长度为9到18位',
      icon: 'none',
    });
    return false;
  }
  return true;
}

/**
 * 校验注册的时候两次输入的密码是否一致
 * @param pass {string}
 * @returns {boolean}
 */
export function checkConfirmPassword(pass, confirmPass) {
  if (!(pass === confirmPass)) {
    wx.showToast({
      title: '两次密码输入不一致',
      icon: 'none',
    });
    return false;
  }
  return true;
}

/**
 * 检查验证码
 * @param code {string}
 * @returns {boolean}
 */
export function checkVerifyCode(code) {
  if (!/^[0-9]{4}$/.test(code)) {
    wx.showToast({
      title: '验证码是4位数字',
      icon: 'none',
    });
    return false;
  }
  return true;
}

/**
* 检查用户昵称
* @param nickname {string}
* @returns {boolean}
*/
export function checkNickname(nickname) {
  if (!/^.{2,15}$/.test(nickname)) {
    wx.showToast({
      title: '昵称长度为2到15位',
      icon: 'none',
    });
    return false;
  }
  return true;
}

/**
 * 检查头像
 * @param avatarUrl {string}
 * @returns {boolean}
 */
export function checkAvatarUrl(avatarUrl) {
  if (!avatarUrl.length) {
    wx.showToast({
      title: '请使用微信头像注册',
      icon: 'none',
    });
    return false;
  }
  return true;
}

/**
 * 检查学号
 * @param studentID {string}
 * @returns {boolean}
 */
export function checkStudentID(studentID) {
  if (!/^[0-9]{13}$/.test(studentID)) {
    wx.showToast({
      title: '学号是13位数字',
      icon: 'none',
    });
    return false;
  }
  return true;
}

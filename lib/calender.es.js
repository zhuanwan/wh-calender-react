var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
import require$$0, { useState, useRef, useEffect } from "react";
var Calender$1 = "";
function _verifyDate(date) {
  return new Date(date).getDate() === Number(date.substring(date.length - 2));
}
function _daysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}
function _stringToDate(d) {
  const date = d.split("-");
  return new Date(date[0], date[1] - 1, date[2], 0, 0, 0);
}
function _dateToString(date) {
  return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
}
function _timeToDate(date) {
  date = new Date(date);
  return new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0);
}
function getDateList(_year, _month, checkedDay) {
  let list = [];
  const today2 = _timeToDate(new Date());
  let date = new Date(_year, _month, 1, 0, 0, 0), totalDays = _daysInMonth(_year, _month), dates = date.getDate() - date.getDay(), isIterateContinue = true, i = 0;
  while (isIterateContinue) {
    let newDate = new Date(_year, _month, dates, 0, 0, 0);
    let dataDayString = _dateToString(newDate), isToday = false, isFirstDay = false, isLastDay = false, isInvalidDay = false, isLessThanToday = false;
    if (dates === 1) {
      isFirstDay = true;
    } else if (dates === totalDays) {
      isLastDay = true;
    }
    if (dates <= 0 || dates > totalDays) {
      isInvalidDay = true;
    } else {
      if (_stringToDate(dataDayString) < today2) {
        isLessThanToday = true;
      } else if (+_stringToDate(dataDayString) === +today2) {
        isToday = true;
      }
    }
    let showDate = dates;
    if (dates > totalDays || dates <= 0) {
      showDate = newDate.getDate();
    }
    list[i] = {
      date: newDate,
      dataDayString,
      dates: showDate,
      isToday,
      isFirstDay,
      isLastDay,
      isInvalidDay,
      isLessThanToday,
      active: +newDate - +checkedDay === 0
    };
    i++;
    dates++;
    isIterateContinue = i <= 41;
  }
  return list;
}
var jsxRuntime = { exports: {} };
var reactJsxRuntime_production_min = {};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;
function toObject(val) {
  if (val === null || val === void 0) {
    throw new TypeError("Object.assign cannot be called with null or undefined");
  }
  return Object(val);
}
function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    }
    var test1 = new String("abc");
    test1[5] = "de";
    if (Object.getOwnPropertyNames(test1)[0] === "5") {
      return false;
    }
    var test2 = {};
    for (var i = 0; i < 10; i++) {
      test2["_" + String.fromCharCode(i)] = i;
    }
    var order2 = Object.getOwnPropertyNames(test2).map(function(n2) {
      return test2[n2];
    });
    if (order2.join("") !== "0123456789") {
      return false;
    }
    var test3 = {};
    "abcdefghijklmnopqrst".split("").forEach(function(letter) {
      test3[letter] = letter;
    });
    if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
      return false;
    }
    return true;
  } catch (err) {
    return false;
  }
}
shouldUseNative() ? Object.assign : function(target, source) {
  var from;
  var to = toObject(target);
  var symbols;
  for (var s = 1; s < arguments.length; s++) {
    from = Object(arguments[s]);
    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }
    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from);
      for (var i = 0; i < symbols.length; i++) {
        if (propIsEnumerable.call(from, symbols[i])) {
          to[symbols[i]] = from[symbols[i]];
        }
      }
    }
  }
  return to;
};
/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f = require$$0, g = 60103;
reactJsxRuntime_production_min.Fragment = 60107;
if (typeof Symbol === "function" && Symbol.for) {
  var h = Symbol.for;
  g = h("react.element");
  reactJsxRuntime_production_min.Fragment = h("react.fragment");
}
var m = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, n = Object.prototype.hasOwnProperty, p = { key: true, ref: true, __self: true, __source: true };
function q(c, a, k) {
  var b, d = {}, e = null, l = null;
  k !== void 0 && (e = "" + k);
  a.key !== void 0 && (e = "" + a.key);
  a.ref !== void 0 && (l = a.ref);
  for (b in a)
    n.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
  if (c && c.defaultProps)
    for (b in a = c.defaultProps, a)
      d[b] === void 0 && (d[b] = a[b]);
  return { $$typeof: g, type: c, key: e, ref: l, props: d, _owner: m.current };
}
reactJsxRuntime_production_min.jsx = q;
reactJsxRuntime_production_min.jsxs = q;
{
  jsxRuntime.exports = reactJsxRuntime_production_min;
}
const jsx = jsxRuntime.exports.jsx;
const jsxs = jsxRuntime.exports.jsxs;
const weekText = ["\u65E5", "\u4E00", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D"];
const today = _timeToDate(new Date());
const slideDistance = 80;
function Calender(props) {
  const {
    defaultCheckedDay,
    dayCheckedCb
  } = props;
  const [year, setYear] = useState(2021);
  const [month, setMonth] = useState(2);
  const [weekDay, setWeekDay] = useState(new Date());
  const [checkedDay, setCheckedDay] = useState(new Date());
  const [listData, setListData] = useState([]);
  const [transitionDuration, setTransitionDuration] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const calenderBoxRef = useRef(null);
  const [calenderBoxWidth, setCalenderBoxWidth] = useState(0);
  const moveData = useRef({
    pageX: 0,
    pageY: 0,
    distanceX: 0,
    distanceY: 0
  });
  const [startMoving, setStartMoving] = useState(false);
  const transitionendFn = useRef(null);
  const [isShowWeek, setIsShowWeek] = useState(false);
  const [triggerDateRender, setTrggerDateRender] = useState(0);
  const drawMonth = () => {
    const list = [];
    const y = weekDay.getFullYear();
    const m2 = weekDay.getMonth() + 1;
    setYear(y);
    setMonth(m2);
    for (let i = 0; i < 3; i++) {
      list[i] = getDateList(y, m2 - 2 + i, checkedDay);
    }
    setListData(list);
    setTransitionDuration(0);
    setTranslateX(-calenderBoxWidth);
    if (checkedDay.getFullYear() === weekDay.getFullYear() && checkedDay.getMonth() === weekDay.getMonth()) {
      setWeekDay(checkedDay);
    }
  };
  const drawWeek = () => {
    const list = [];
    const _year = weekDay.getFullYear();
    const _month = weekDay.getMonth() + 1;
    const _date = weekDay.getDate();
    const _day = weekDay.getDay();
    setYear(_year);
    setMonth(_month);
    for (let j = 0; j < 3; j++) {
      let childList = [];
      for (let i = 0; i < 7; i++) {
        let d = new Date(_year, _month - 1, _date, 0, 0, 0);
        d.setDate(d.getDate() - 7 * (1 - j) - (_day - i));
        childList[i] = {
          date: d,
          dataDayString: _dateToString(d),
          dates: d.getDate(),
          isToday: +new Date(d) === +today,
          isFirstDay: d.getFullYear() - _year === 0 && d.getMonth() + 1 - _month === 0 && d.getDate() === 1,
          isLastDay: d.getFullYear() - _year === 0 && d.getMonth() + 1 - _month === 0 && d.getDate() === _daysInMonth(_year, _month),
          isInvalidDay: d.getFullYear() - _year != 0 || d.getMonth() + 1 - _month != 0,
          isLessThanToday: d < today,
          active: +d - +checkedDay === 0
        };
      }
      list[j] = childList;
    }
    setListData(list);
    setTransitionDuration(0);
    setTranslateX(-calenderBoxWidth);
  };
  const doLastYear = () => {
    const newDate = new Date(year - 1, month - 1, 1, 0, 0, 0);
    setWeekDay(newDate);
    setTrggerDateRender(triggerDateRender + 1);
  };
  const doNextYear = () => {
    let newDate = new Date(year + 1, month - 1, 1, 0, 0, 0);
    setWeekDay(newDate);
    setTrggerDateRender(triggerDateRender + 1);
  };
  const doLastMonth = () => {
    const newDate = new Date(year, month - 2, 1, 0, 0, 0);
    setWeekDay(newDate);
    setTrggerDateRender(triggerDateRender + 1);
  };
  const doNextMonth = () => {
    let newDate = new Date(year, month, 1, 0, 0, 0);
    setWeekDay(newDate);
    setTrggerDateRender(triggerDateRender + 1);
  };
  const doLastWeek = () => {
    const d = weekDay == null ? void 0 : weekDay.setDate(weekDay.getDate() - 7);
    setWeekDay(new Date(d));
    setTrggerDateRender(triggerDateRender + 1);
  };
  const doNextWeek = () => {
    const d = weekDay == null ? void 0 : weekDay.setDate(weekDay.getDate() + 7);
    setWeekDay(new Date(d));
    setTrggerDateRender(triggerDateRender + 1);
  };
  const onTouchStart = (e) => {
    e.stopPropagation();
    setStartMoving(true);
    moveData.current = {
      pageX: e.touches[0].pageX,
      pageY: e.touches[0].pageY,
      distanceX: 0,
      distanceY: 0
    };
  };
  const onMouseDown = (e) => {
    e.stopPropagation();
    setStartMoving(true);
    moveData.current = {
      pageX: e.clientX,
      pageY: e.clientY,
      distanceX: 0,
      distanceY: 0
    };
  };
  const onTouchMove = (e) => {
    if (!startMoving) {
      return;
    }
    e.stopPropagation();
    const distanceX = e.touches[0].pageX - moveData.current.pageX;
    const distanceY = e.touches[0].pageY - moveData.current.pageY;
    moveData.current = __spreadProps(__spreadValues({}, moveData.current), {
      distanceX,
      distanceY
    });
    setTransitionDuration(0);
    setTranslateX(translateX + distanceX / 90);
  };
  const onMouseMove = (e) => {
    if (!startMoving) {
      return;
    }
    e.stopPropagation();
    const distanceX = e.clientX - moveData.current.pageX;
    const distanceY = e.clientY - moveData.current.pageY;
    moveData.current = __spreadProps(__spreadValues({}, moveData.current), {
      distanceX,
      distanceY
    });
    setTransitionDuration(0);
    setTranslateX(translateX + distanceX / 90);
  };
  const onTouchEnd = () => {
    setStartMoving(false);
    setTransitionDuration(400);
    if (moveData.current.distanceX > slideDistance) {
      setTranslateX(0);
      transitionendFn.current = isShowWeek ? doLastWeek : doLastMonth;
    } else if (moveData.current.distanceX < -slideDistance) {
      setTranslateX(-calenderBoxWidth * 2);
      transitionendFn.current = isShowWeek ? doNextWeek : doNextMonth;
    } else {
      transitionendFn.current = null;
      setTranslateX(-calenderBoxWidth);
    }
  };
  const onTransitionEnd = () => {
    var _a;
    (_a = transitionendFn.current) == null ? void 0 : _a.call(transitionendFn);
  };
  const dayChecked = (item) => {
    if (item.isInvalidDay) {
      return;
    }
    listData.forEach((j) => {
      j.forEach((v) => {
        v.active = false;
      });
    });
    item.active = true;
    setListData([...listData]);
    setWeekDay(new Date(item.date));
    setCheckedDay(_timeToDate(new Date(item.date)));
    dayCheckedCb && dayCheckedCb(item);
  };
  const weekMonthChange = () => {
    const flag = !isShowWeek;
    flag ? drawWeek() : drawMonth();
    setIsShowWeek(flag);
  };
  useEffect(() => {
    var _a;
    const width = ((_a = calenderBoxRef.current) == null ? void 0 : _a.clientWidth) || 0;
    setCalenderBoxWidth(width);
    if (defaultCheckedDay && _verifyDate(defaultCheckedDay)) {
      setWeekDay(new Date(defaultCheckedDay));
      setCheckedDay(_timeToDate(new Date(defaultCheckedDay)));
    } else {
      setWeekDay(new Date());
      setCheckedDay(_timeToDate(new Date()));
    }
    setTrggerDateRender(triggerDateRender + 1);
  }, []);
  useEffect(() => {
    if (triggerDateRender) {
      isShowWeek ? drawWeek() : drawMonth();
    }
  }, [triggerDateRender]);
  useEffect(() => {
    if (startMoving)
      window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, [startMoving]);
  return /* @__PURE__ */ jsxs("div", {
    className: "wh-calender",
    children: [/* @__PURE__ */ jsxs("div", {
      className: "header-box",
      children: [/* @__PURE__ */ jsx("span", {
        className: "year-arrow-left",
        onClick: doLastYear
      }), /* @__PURE__ */ jsx("span", {
        className: "month-arrow-left",
        onClick: doLastMonth
      }), /* @__PURE__ */ jsxs("div", {
        className: "header-box-view",
        children: [year, "-", month <= 9 ? "0" + month : month]
      }), /* @__PURE__ */ jsx("span", {
        className: "month-arrow-right",
        onClick: doNextMonth
      }), /* @__PURE__ */ jsx("span", {
        className: "year-arrow-right",
        onClick: doNextYear
      })]
    }), /* @__PURE__ */ jsx("div", {
      className: "week-box",
      children: weekText.map((w) => /* @__PURE__ */ jsx("div", {
        className: "week",
        children: w
      }, w))
    }), /* @__PURE__ */ jsx("div", {
      className: `calender-box ${isShowWeek ? "up" : ""}`,
      ref: calenderBoxRef,
      children: /* @__PURE__ */ jsx("div", {
        className: "calender-box-inner",
        onTouchStart,
        onMouseDown,
        onTouchMove,
        onTouchEnd,
        onMouseUp: onTouchEnd,
        onTransitionEnd,
        style: {
          width: calenderBoxWidth * 3,
          transform: "translate3d(" + translateX + "px, 0, 0)",
          transitionDuration: transitionDuration + "ms"
        },
        children: listData.map((listItem, i) => /* @__PURE__ */ jsx("div", {
          className: "item",
          style: {
            width: calenderBoxWidth
          },
          children: listItem.map((dayObj, j) => /* @__PURE__ */ jsx("span", {
            className: "date",
            onClick: () => dayChecked(dayObj),
            "data-date": dayObj.dataDayString,
            children: /* @__PURE__ */ jsx("span", {
              className: `day ${dayObj.isInvalidDay ? "isInvalidDay" : ""} ${dayObj.active ? "active" : ""}`,
              children: dayObj.dates
            })
          }, j))
        }, i))
      })
    }), /* @__PURE__ */ jsx("div", {
      className: "show-week",
      children: /* @__PURE__ */ jsx("span", {
        className: `btn ${isShowWeek ? "down" : "up"}`,
        onClick: weekMonthChange
      })
    })]
  });
}
export { Calender as default };

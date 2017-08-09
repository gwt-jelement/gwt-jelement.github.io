var $wnd = $wnd || window.parent;
var __gwtModuleFunction = $wnd.js;
var $sendStats = __gwtModuleFunction.__sendStats;
$sendStats('moduleStartup', 'moduleEvalStart');
var $gwt_version = "2.8.1";
var $strongName = '1540E626AC78B81CA13095ECEB96ADF9';
var $gwt = {};
var $doc = $wnd.document;
var $moduleName, $moduleBase;
function __gwtStartLoadingFragment(frag) {
var fragFile = 'deferredjs/' + $strongName + '/' + frag + '.cache.js';
return __gwtModuleFunction.__startLoadingFragment(fragFile);
}
function __gwtInstallCode(code) {return __gwtModuleFunction.__installRunAsyncCode(code);}
function __gwt_isKnownPropertyValue(propName, propValue) {
return __gwtModuleFunction.__gwt_isKnownPropertyValue(propName, propValue);
}
function __gwt_getMetaProperty(name) {
return __gwtModuleFunction.__gwt_getMetaProperty(name);
}
var $stats = $wnd.__gwtStatsEvent ? function(a) {
return $wnd.__gwtStatsEvent && $wnd.__gwtStatsEvent(a);
} : null;
var $sessionId = $wnd.__gwtStatsSessionId ? $wnd.__gwtStatsSessionId : null;
var $intern_0 = 'object', $intern_1 = 'boolean', $intern_2 = 'number', $intern_3 = 'string', $intern_4 = 'function', $intern_5 = '__java$exception', $intern_6 = '__noinit__', $intern_7 = {4:1, 9:1, 8:1}, $intern_8 = {4:1}, $intern_9 = 'fromIndex: 0, toIndex: ', $intern_10 = ', length: ', $intern_11 = 'fromIndex: ', $intern_12 = 'java.lang', $intern_13 = 'com.google.gwt.core.client', $intern_14 = 'com.google.gwt.core.client.impl', $intern_15 = {4:1, 7:1}, $intern_16 = 'CSS1Compat', $intern_17 = {4:1, 16:1, 8:1}, $intern_18 = 'Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (ie9) does not match the runtime user.agent value (', $intern_19 = ').\n', $intern_20 = 'Expect more errors.', $intern_21 = 'gwt.jelement.core', $intern_22 = {13:1}, $intern_23 = 'gwt.jelement.demo.client', $intern_24 = 'div.status', $intern_25 = 'click', $intern_26 = 'disabled', $intern_27 = {19:1}, $intern_28 = 'backgroundPosition', $intern_29 = 'gwtlogo.png', $intern_30 = 'marginLeft', $intern_31 = 'geolocation', $intern_32 = ' bytes', $intern_33 = 'performance', $intern_34 = 'getOwnPropertyDescriptors', $intern_35 = 'Braaaasil!', $intern_36 = 'I want to hear other languages!', $intern_37 = 'No voices are available.', $intern_38 = 'Female', $intern_39 = 'gwt.jelement.demo.client.html', $intern_40 = 'gwt.jelement.webaudio', $intern_41 = 'java.util', $intern_42 = '_gwt_modCount', $intern_43 = {27:1, 49:1}, $intern_44 = {27:1, 39:1}, $intern_45 = {12:1}, $intern_46 = 'delete', $intern_47 = 'java.util.stream';
var _, com_google_gwt_lang_Runtime_prototypesByTypeId, com_google_gwt_lang_ModuleUtils_initFnList, com_google_gwt_lang_CollapsedPropertyHolder_permutationId = -1;
function com_google_gwt_lang_ModuleUtils_setGwtProperty__Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2V(propertyName, propertyValue){
  typeof window === $intern_0 && typeof window['$gwt'] === $intern_0 && (window['$gwt'][propertyName] = propertyValue);
}

function com_google_gwt_lang_ModuleUtils_gwtOnLoad__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(errFn, modName, modBase, softPermutationId){
  com_google_gwt_lang_ModuleUtils_ensureModuleInit__V();
  var initFnList = com_google_gwt_lang_ModuleUtils_initFnList;
  $moduleName = modName;
  $moduleBase = modBase;
  com_google_gwt_lang_CollapsedPropertyHolder_permutationId = softPermutationId;
  function initializeModules(){
    for (var i = 0; i < initFnList.length; i++) {
      initFnList[i]();
    }
  }

  if (errFn) {
    try {
      $entry(initializeModules)();
    }
     catch (e) {
      errFn(modName, e);
    }
  }
   else {
    $entry(initializeModules)();
  }
}

function com_google_gwt_lang_ModuleUtils_ensureModuleInit__V(){
  com_google_gwt_lang_ModuleUtils_initFnList == null && (com_google_gwt_lang_ModuleUtils_initFnList = []);
}

function com_google_gwt_lang_ModuleUtils_addInitFunctions__V(){
  com_google_gwt_lang_ModuleUtils_ensureModuleInit__V();
  var initFnList = com_google_gwt_lang_ModuleUtils_initFnList;
  for (var i = 0; i < arguments.length; i++) {
    initFnList.push(arguments[i]);
  }
}

function com_google_gwt_lang_Runtime_typeMarkerFn__V(){
}

function com_google_gwt_lang_Runtime_toString__Ljava_lang_Object_2Ljava_lang_String_2(object){
  if (Array.isArray(object) && object.java_lang_Object_typeMarker === com_google_gwt_lang_Runtime_typeMarkerFn__V) {
    return java_lang_Class_$getName__Ljava_lang_Class_2Ljava_lang_String_2(java_lang_Object_getClass_1_1Ljava_1lang_1Class_1_1_1devirtual$__Ljava_lang_Object_2Ljava_lang_Class_2(object)) + '@' + (java_lang_Object_hashCode_1_1I_1_1devirtual$__Ljava_lang_Object_2I(object) >>> 0).toString(16);
  }
  return object.toString();
}

function com_google_gwt_lang_Runtime_provide__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(namespace, optCtor){
  var cur = $wnd;
  if (namespace === '') {
    return cur;
  }
  var parts = namespace.split('.');
  !(parts[0] in cur) && cur.execScript && cur.execScript('var ' + parts[0]);
  if (optCtor) {
    var clazz = optCtor.prototype.java_lang_Object__1_1_1clazz;
    clazz.java_lang_Class_jsConstructor = optCtor;
  }
  for (var part; parts.length && (part = parts.shift());) {
    cur = cur[part] = cur[part] || !parts.length && optCtor || {};
  }
  return cur;
}

function com_google_gwt_lang_Runtime_portableObjCreate__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(obj){
  function F(){
  }

  ;
  F.prototype = obj || {};
  return new F;
}

function com_google_gwt_lang_Runtime_makeLambdaFunction__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(samMethod, ctor, ctorArguments){
  var lambda = function(){
    return samMethod.apply(lambda, arguments);
  }
  ;
  ctor.apply(lambda, ctorArguments);
  return lambda;
}

function com_google_gwt_lang_Runtime_emptyMethod__V(){
}

function com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(typeId, superTypeIdOrPrototype, castableTypeMap){
  var prototypesByTypeId = com_google_gwt_lang_Runtime_prototypesByTypeId, com_google_gwt_lang_Runtime_createSubclassPrototype__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2_superPrototype_0;
  var prototype = prototypesByTypeId[typeId];
  var clazz = prototype instanceof Array?prototype[0]:null;
  if (prototype && !clazz) {
    _ = prototype;
  }
   else {
    _ = (com_google_gwt_lang_Runtime_createSubclassPrototype__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2_superPrototype_0 = superTypeIdOrPrototype && superTypeIdOrPrototype.prototype , !com_google_gwt_lang_Runtime_createSubclassPrototype__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2_superPrototype_0 && (com_google_gwt_lang_Runtime_createSubclassPrototype__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2_superPrototype_0 = com_google_gwt_lang_Runtime_prototypesByTypeId[superTypeIdOrPrototype]) , com_google_gwt_lang_Runtime_portableObjCreate__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(com_google_gwt_lang_Runtime_createSubclassPrototype__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2_superPrototype_0));
    _.java_lang_Object_castableTypeMap = castableTypeMap;
    !superTypeIdOrPrototype && (_.java_lang_Object_typeMarker = com_google_gwt_lang_Runtime_typeMarkerFn__V);
    prototypesByTypeId[typeId] = _;
  }
  for (var i = 3; i < arguments.length; ++i) {
    arguments[i].prototype = _;
  }
  clazz && (_.java_lang_Object__1_1_1clazz = clazz);
}

function com_google_gwt_lang_Runtime_bootstrap__V(){
  com_google_gwt_lang_Runtime_prototypesByTypeId = {};
  !Array.isArray && (Array.isArray = function(vArg){
    return Object.prototype.toString.call(vArg) === '[object Array]';
  }
  );
}

com_google_gwt_lang_Runtime_bootstrap__V();
function java_lang_Object_Object__V(){
}

function java_lang_Object_equals_1Ljava_1lang_1Object_1_1Z_1_1devirtual$__Ljava_lang_Object_2Ljava_lang_Object_2Z(this$static, other){
  return com_google_gwt_lang_Cast_instanceOfString__Ljava_lang_Object_2Z(this$static)?java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(this$static, other):com_google_gwt_lang_Cast_instanceOfDouble__Ljava_lang_Object_2Z(this$static)?(javaemul_internal_InternalPreconditions_checkCriticalNotNull__Ljava_lang_Object_2Ljava_lang_Object_2(this$static) , this$static === other):com_google_gwt_lang_Cast_instanceOfBoolean__Ljava_lang_Object_2Z(this$static)?(javaemul_internal_InternalPreconditions_checkCriticalNotNull__Ljava_lang_Object_2Ljava_lang_Object_2(this$static) , this$static === other):com_google_gwt_lang_Cast_hasJavaObjectVirtualDispatch__Ljava_lang_Object_2Z(this$static)?this$static.equals__Ljava_lang_Object_2Z(other):com_google_gwt_lang_Array_isJavaArray__Ljava_lang_Object_2Z(this$static)?this$static === other:!!this$static && !!this$static.equals?this$static.equals(other):com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(this$static) === com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(other);
}

function java_lang_Object_getClass_1_1Ljava_1lang_1Class_1_1_1devirtual$__Ljava_lang_Object_2Ljava_lang_Class_2(this$static){
  return com_google_gwt_lang_Cast_instanceOfString__Ljava_lang_Object_2Z(this$static)?com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1String_12_1classLit:com_google_gwt_lang_Cast_instanceOfDouble__Ljava_lang_Object_2Z(this$static)?com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Double_12_1classLit:com_google_gwt_lang_Cast_instanceOfBoolean__Ljava_lang_Object_2Z(this$static)?com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Boolean_12_1classLit:com_google_gwt_lang_Cast_hasJavaObjectVirtualDispatch__Ljava_lang_Object_2Z(this$static)?this$static.java_lang_Object__1_1_1clazz:com_google_gwt_lang_Array_isJavaArray__Ljava_lang_Object_2Z(this$static)?this$static.java_lang_Object__1_1_1clazz:this$static.java_lang_Object__1_1_1clazz || Array.isArray(this$static) && com_google_gwt_lang_Array_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1core_1client_1JavaScriptObject_12_1classLit, 1) || com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1core_1client_1JavaScriptObject_12_1classLit;
}

function java_lang_Object_hashCode_1_1I_1_1devirtual$__Ljava_lang_Object_2I(this$static){
  return com_google_gwt_lang_Cast_instanceOfString__Ljava_lang_Object_2Z(this$static)?javaemul_internal_StringHashCache_getHashCode__Ljava_lang_String_2I(this$static):com_google_gwt_lang_Cast_instanceOfDouble__Ljava_lang_Object_2Z(this$static)?com_google_gwt_lang_Cast_round_1int__DI((javaemul_internal_InternalPreconditions_checkCriticalNotNull__Ljava_lang_Object_2Ljava_lang_Object_2(this$static) , this$static)):com_google_gwt_lang_Cast_instanceOfBoolean__Ljava_lang_Object_2Z(this$static)?(javaemul_internal_InternalPreconditions_checkCriticalNotNull__Ljava_lang_Object_2Ljava_lang_Object_2(this$static) , this$static)?1231:1237:com_google_gwt_lang_Cast_hasJavaObjectVirtualDispatch__Ljava_lang_Object_2Z(this$static)?this$static.hashCode__I():com_google_gwt_lang_Array_isJavaArray__Ljava_lang_Object_2Z(this$static)?javaemul_internal_ObjectHashing_getHashCode__Ljava_lang_Object_2I(this$static):!!this$static && !!this$static.hashCode?this$static.hashCode():javaemul_internal_ObjectHashing_getHashCode__Ljava_lang_Object_2I(this$static);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(1, null, {}, java_lang_Object_Object__V);
_.equals__Ljava_lang_Object_2Z = function java_lang_Object_equals__Ljava_lang_Object_2Z(other){
  return this === other;
}
;
_.getClass__Ljava_lang_Class_2 = function java_lang_Object_getClass__Ljava_lang_Class_2(){
  return this.java_lang_Object__1_1_1clazz;
}
;
_.hashCode__I = function java_lang_Object_hashCode__I(){
  return javaemul_internal_ObjectHashing_getHashCode__Ljava_lang_Object_2I(this);
}
;
_.equals = function(other){
  return this.equals__Ljava_lang_Object_2Z(other);
}
;
_.hashCode = function(){
  return this.hashCode__I();
}
;
function com_google_gwt_core_client_impl_StackTraceCreator_$clinit__V(){
  com_google_gwt_core_client_impl_StackTraceCreator_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  var c, enforceLegacy;
  enforceLegacy = !com_google_gwt_core_client_impl_StackTraceCreator_supportsErrorStack__Z();
  c = new com_google_gwt_core_client_impl_StackTraceCreator$CollectorModernNoSourceMap_StackTraceCreator$CollectorModernNoSourceMap__V;
  com_google_gwt_core_client_impl_StackTraceCreator_collector = enforceLegacy?new com_google_gwt_core_client_impl_StackTraceCreator$CollectorLegacy_StackTraceCreator$CollectorLegacy__V:c;
}

function com_google_gwt_core_client_impl_StackTraceCreator_captureStackTrace__Ljava_lang_Object_2V(error){
  com_google_gwt_core_client_impl_StackTraceCreator_$clinit__V();
  com_google_gwt_core_client_impl_StackTraceCreator_collector.collect__Ljava_lang_Object_2V(error);
}

function com_google_gwt_core_client_impl_StackTraceCreator_extractFunctionName__Ljava_lang_String_2Ljava_lang_String_2(fnName){
  var fnRE = /function(?:\s+([\w$]+))?\s*\(/;
  var match_0 = fnRE.exec(fnName);
  return match_0 && match_0[1] || 'anonymous';
}

function com_google_gwt_core_client_impl_StackTraceCreator_supportsErrorStack__Z(){
  if (Error.stackTraceLimit > 0) {
    $wnd.Error.stackTraceLimit = Error.stackTraceLimit = 64;
    return true;
  }
  return 'stack' in new Error;
}

var com_google_gwt_core_client_impl_StackTraceCreator_collector;
com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(179, 1, {});
function com_google_gwt_core_client_impl_StackTraceCreator$CollectorLegacy_StackTraceCreator$CollectorLegacy__V(){
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(99, 179, {}, com_google_gwt_core_client_impl_StackTraceCreator$CollectorLegacy_StackTraceCreator$CollectorLegacy__V);
_.collect__Ljava_lang_Object_2V = function com_google_gwt_core_client_impl_StackTraceCreator$CollectorLegacy_collect__Ljava_lang_Object_2V(error){
  var seen = {}, com_google_gwt_core_client_impl_StackTraceCreator_getFunctionName__Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_String_2_name_0;
  var fnStack = [];
  error['fnStack'] = fnStack;
  var callee = arguments.callee.caller;
  while (callee) {
    var name_0 = (com_google_gwt_core_client_impl_StackTraceCreator_$clinit__V() , callee.name || (callee.name = com_google_gwt_core_client_impl_StackTraceCreator_extractFunctionName__Ljava_lang_String_2Ljava_lang_String_2(callee.toString())));
    fnStack.push(name_0);
    var keyName = ':' + name_0;
    var withThisName = seen[keyName];
    if (withThisName) {
      var i, j;
      for (i = 0 , j = withThisName.length; i < j; i++) {
        if (withThisName[i] === callee) {
          return;
        }
      }
    }
    (withThisName || (seen[keyName] = [])).push(callee);
    callee = callee.caller;
  }
}
;
com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(180, 179, {});
_.collect__Ljava_lang_Object_2V = function com_google_gwt_core_client_impl_StackTraceCreator$CollectorModern_collect__Ljava_lang_Object_2V(error){
}
;
function com_google_gwt_core_client_impl_StackTraceCreator$CollectorModernNoSourceMap_StackTraceCreator$CollectorModernNoSourceMap__V(){
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(100, 180, {}, com_google_gwt_core_client_impl_StackTraceCreator$CollectorModernNoSourceMap_StackTraceCreator$CollectorModernNoSourceMap__V);
function com_google_gwt_lang_Array_canSet__Ljava_lang_Object_2Ljava_lang_Object_2Z(array, value_0){
  var elementTypeCategory;
  switch (com_google_gwt_lang_Array_getElementTypeCategory__Ljava_lang_Object_2I(array)) {
    case 6:
      return com_google_gwt_lang_Cast_instanceOfString__Ljava_lang_Object_2Z(value_0);
    case 7:
      return com_google_gwt_lang_Cast_instanceOfDouble__Ljava_lang_Object_2Z(value_0);
    case 8:
      return com_google_gwt_lang_Cast_instanceOfBoolean__Ljava_lang_Object_2Z(value_0);
    case 3:
      return Array.isArray(value_0) && (elementTypeCategory = com_google_gwt_lang_Array_getElementTypeCategory__Ljava_lang_Object_2I(value_0) , !(elementTypeCategory >= 14 && elementTypeCategory <= 16));
    case 11:
      return value_0 != null && com_google_gwt_lang_Cast_isFunction__Ljava_lang_Object_2Z(value_0);
    case 12:
      return value_0 != null && com_google_gwt_lang_Cast_isJsObject__Ljava_lang_Object_2Z(value_0);
    case 0:
      return com_google_gwt_lang_Cast_canCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(value_0, array.__elementTypeId$);
    case 2:
      return com_google_gwt_lang_Cast_isJsObjectOrFunction__Ljava_lang_Object_2Z(value_0) && !(value_0.java_lang_Object_typeMarker === com_google_gwt_lang_Runtime_typeMarkerFn__V);
    case 1:
      return com_google_gwt_lang_Cast_isJsObjectOrFunction__Ljava_lang_Object_2Z(value_0) && !(value_0.java_lang_Object_typeMarker === com_google_gwt_lang_Runtime_typeMarkerFn__V) || com_google_gwt_lang_Cast_canCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(value_0, array.__elementTypeId$);
    default:return true;
  }
}

function com_google_gwt_lang_Array_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(clazz, dimensions){
  return java_lang_Class_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(clazz, dimensions);
}

function com_google_gwt_lang_Array_getElementTypeCategory__Ljava_lang_Object_2I(array){
  return array.__elementTypeCategory$ == null?10:array.__elementTypeCategory$;
}

function com_google_gwt_lang_Array_initUnidimensionalArray__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2IIILjava_lang_Object_2(leafClassLiteral, castableTypeMap, elementTypeId, length_0, elementTypeCategory, dimensions){
  var result;
  result = com_google_gwt_lang_Array_initializeArrayElementsWithDefaults__IILjava_lang_Object_2(elementTypeCategory, length_0);
  elementTypeCategory != 10 && com_google_gwt_lang_Array_stampJavaTypeInfo__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_lang_Array_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(leafClassLiteral, dimensions), castableTypeMap, elementTypeId, elementTypeCategory, result);
  return result;
}

function com_google_gwt_lang_Array_initializeArrayElementsWithDefaults__IILjava_lang_Object_2(elementTypeCategory, length_0){
  var array = new Array(length_0);
  var initValue;
  switch (elementTypeCategory) {
    case 14:
    case 15:
      initValue = 0;
      break;
    case 16:
      initValue = false;
      break;
    default:return array;
  }
  for (var i = 0; i < length_0; ++i) {
    array[i] = initValue;
  }
  return array;
}

function com_google_gwt_lang_Array_isJavaArray__Ljava_lang_Object_2Z(src_0){
  return Array.isArray(src_0) && src_0.java_lang_Object_typeMarker === com_google_gwt_lang_Runtime_typeMarkerFn__V;
}

function com_google_gwt_lang_Array_newArray__I_3Ljava_lang_Object_2(size_0){
  return new Array(size_0);
}

function com_google_gwt_lang_Array_setCheck__Ljava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2(array, index_0, value_0){
  javaemul_internal_InternalPreconditions_checkCriticalArrayType__ZV(value_0 == null || com_google_gwt_lang_Array_canSet__Ljava_lang_Object_2Ljava_lang_Object_2Z(array, value_0));
  return array[index_0] = value_0;
}

function com_google_gwt_lang_Array_stampJavaTypeInfo__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2Ljava_lang_Object_2(arrayClass, castableTypeMap, elementTypeId, elementTypeCategory, array){
  array.java_lang_Object__1_1_1clazz = arrayClass;
  array.java_lang_Object_castableTypeMap = castableTypeMap;
  array.java_lang_Object_typeMarker = com_google_gwt_lang_Runtime_typeMarkerFn__V;
  array.__elementTypeId$ = elementTypeId;
  array.__elementTypeCategory$ = elementTypeCategory;
  return array;
}

function com_google_gwt_lang_Array_stampJavaTypeInfo__Ljava_lang_Object_2_3Ljava_lang_Object_2_3Ljava_lang_Object_2(array, referenceType){
  com_google_gwt_lang_Array_getElementTypeCategory__Ljava_lang_Object_2I(referenceType) != 10 && com_google_gwt_lang_Array_stampJavaTypeInfo__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2Ljava_lang_Object_2(java_lang_Object_getClass_1_1Ljava_1lang_1Class_1_1_1devirtual$__Ljava_lang_Object_2Ljava_lang_Class_2(referenceType), referenceType.java_lang_Object_castableTypeMap, referenceType.__elementTypeId$, com_google_gwt_lang_Array_getElementTypeCategory__Ljava_lang_Object_2I(referenceType), array);
  return array;
}

function com_google_gwt_lang_Cast_canCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(src_0, dstId){
  if (com_google_gwt_lang_Cast_instanceOfString__Ljava_lang_Object_2Z(src_0)) {
    return !!com_google_gwt_lang_Cast_stringCastMap[dstId];
  }
   else if (src_0.java_lang_Object_castableTypeMap) {
    return !!src_0.java_lang_Object_castableTypeMap[dstId];
  }
   else if (com_google_gwt_lang_Cast_instanceOfDouble__Ljava_lang_Object_2Z(src_0)) {
    return !!com_google_gwt_lang_Cast_doubleCastMap[dstId];
  }
   else if (com_google_gwt_lang_Cast_instanceOfBoolean__Ljava_lang_Object_2Z(src_0)) {
    return !!com_google_gwt_lang_Cast_booleanCastMap[dstId];
  }
  return false;
}

function com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(src_0, dstId){
  javaemul_internal_InternalPreconditions_checkCriticalType__ZV(src_0 == null || com_google_gwt_lang_Cast_canCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(src_0, dstId));
  return src_0;
}

function com_google_gwt_lang_Cast_castToDouble__Ljava_lang_Object_2Ljava_lang_Object_2(src_0){
  javaemul_internal_InternalPreconditions_checkCriticalType__ZV(src_0 == null || com_google_gwt_lang_Cast_instanceOfDouble__Ljava_lang_Object_2Z(src_0));
  return src_0;
}

function com_google_gwt_lang_Cast_castToFunction__Ljava_lang_Object_2Ljava_lang_Object_2(src_0){
  javaemul_internal_InternalPreconditions_checkCriticalType__ZV(src_0 == null || com_google_gwt_lang_Cast_isFunction__Ljava_lang_Object_2Z(src_0));
  return src_0;
}

function com_google_gwt_lang_Cast_castToJsArray__Ljava_lang_Object_2Ljava_lang_Object_2(src_0){
  javaemul_internal_InternalPreconditions_checkCriticalType__ZV(src_0 == null || Array.isArray(src_0));
  return src_0;
}

function com_google_gwt_lang_Cast_castToJsObject__Ljava_lang_Object_2Ljava_lang_Object_2(src_0){
  javaemul_internal_InternalPreconditions_checkCriticalType__ZV(src_0 == null || com_google_gwt_lang_Cast_isJsObject__Ljava_lang_Object_2Z(src_0));
  return src_0;
}

function com_google_gwt_lang_Cast_castToNative__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(src_0, jsType){
  javaemul_internal_InternalPreconditions_checkCriticalType__ZV(src_0 == null || com_google_gwt_lang_Cast_jsinstanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(src_0, jsType));
  return src_0;
}

function com_google_gwt_lang_Cast_castToString__Ljava_lang_Object_2Ljava_lang_Object_2(src_0){
  javaemul_internal_InternalPreconditions_checkCriticalType__ZV(src_0 == null || com_google_gwt_lang_Cast_instanceOfString__Ljava_lang_Object_2Z(src_0));
  return src_0;
}

function com_google_gwt_lang_Cast_hasJavaObjectVirtualDispatch__Ljava_lang_Object_2Z(src_0){
  return !Array.isArray(src_0) && src_0.java_lang_Object_typeMarker === com_google_gwt_lang_Runtime_typeMarkerFn__V;
}

function com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(src_0, dstId){
  return src_0 != null && com_google_gwt_lang_Cast_canCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(src_0, dstId);
}

function com_google_gwt_lang_Cast_instanceOfBoolean__Ljava_lang_Object_2Z(src_0){
  return typeof src_0 === $intern_1;
}

function com_google_gwt_lang_Cast_instanceOfDouble__Ljava_lang_Object_2Z(src_0){
  return typeof src_0 === $intern_2;
}

function com_google_gwt_lang_Cast_instanceOfNative__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(src_0, jsType){
  return com_google_gwt_lang_Cast_jsinstanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(src_0, jsType);
}

function com_google_gwt_lang_Cast_instanceOfString__Ljava_lang_Object_2Z(src_0){
  return typeof src_0 === $intern_3;
}

function com_google_gwt_lang_Cast_isFunction__Ljava_lang_Object_2Z(src_0){
  return typeof src_0 === $intern_4;
}

function com_google_gwt_lang_Cast_isJsObject__Ljava_lang_Object_2Z(src_0){
  return typeof src_0 === $intern_0 || typeof src_0 == $intern_4;
}

function com_google_gwt_lang_Cast_isJsObjectOrFunction__Ljava_lang_Object_2Z(src_0){
  return typeof src_0 === $intern_0 || typeof src_0 === $intern_4;
}

function com_google_gwt_lang_Cast_jsinstanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(obj, jsType){
  return obj && jsType && obj instanceof jsType;
}

function com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(src_0){
  return src_0 == null?null:src_0;
}

function com_google_gwt_lang_Cast_round_1int__DI(x_0){
  return Math.max(Math.min(x_0, 2147483647), -2147483648) | 0;
}

var com_google_gwt_lang_Cast_booleanCastMap, com_google_gwt_lang_Cast_doubleCastMap, com_google_gwt_lang_Cast_stringCastMap;
function com_google_gwt_lang_Exceptions_toJava__Ljava_lang_Object_2Ljava_lang_Object_2(e){
  var javaException;
  if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(e, 8)) {
    return e;
  }
  javaException = e && e[$intern_5];
  if (!javaException) {
    javaException = new com_google_gwt_core_client_JavaScriptException_JavaScriptException__Ljava_lang_Object_2V(e);
    com_google_gwt_core_client_impl_StackTraceCreator_captureStackTrace__Ljava_lang_Object_2V(javaException);
  }
  return javaException;
}

function com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(t){
  return t.backingJsObject;
}

function java_lang_Comparable_$isInstance__Ljava_lang_Object_2Z(instance){
  var type_0;
  type_0 = typeof instance;
  if (java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(type_0, $intern_1) || java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(type_0, $intern_2) || java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(type_0, $intern_3)) {
    return true;
  }
  return instance != null && instance.$implements__java_lang_Comparable;
}

function java_lang_Boolean_$clinit__V(){
  java_lang_Boolean_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
}

function java_lang_Boolean_$compareTo__Ljava_lang_Boolean_2Ljava_lang_Boolean_2I(this$static, b){
  return java_lang_Boolean_compare__ZZI((javaemul_internal_InternalPreconditions_checkCriticalNotNull__Ljava_lang_Object_2Ljava_lang_Object_2(this$static) , this$static), (javaemul_internal_InternalPreconditions_checkCriticalNotNull__Ljava_lang_Object_2Ljava_lang_Object_2(b) , b));
}

function java_lang_Boolean_$isInstance__Ljava_lang_Object_2Z(instance){
  java_lang_Boolean_$clinit__V();
  return java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z($intern_1, typeof instance);
}

function java_lang_Boolean_compare__ZZI(x_0, y_0){
  java_lang_Boolean_$clinit__V();
  return x_0 == y_0?0:x_0?1:-1;
}

function java_lang_Boolean_compareTo_1Ljava_1lang_1Object_1_1I_1_1devirtual$__Ljava_lang_Comparable_2Ljava_lang_Comparable_2I(this$static, other){
  java_lang_Boolean_$clinit__V();
  return com_google_gwt_lang_Cast_instanceOfString__Ljava_lang_Object_2Z(this$static)?java_lang_String_$compareTo__Ljava_lang_String_2Ljava_lang_String_2I(this$static, com_google_gwt_lang_Cast_castToString__Ljava_lang_Object_2Ljava_lang_Object_2(other)):com_google_gwt_lang_Cast_instanceOfDouble__Ljava_lang_Object_2Z(this$static)?java_lang_Double_$compareTo__Ljava_lang_Double_2Ljava_lang_Double_2I(this$static, com_google_gwt_lang_Cast_castToDouble__Ljava_lang_Object_2Ljava_lang_Object_2(other)):com_google_gwt_lang_Cast_instanceOfBoolean__Ljava_lang_Object_2Z(this$static)?java_lang_Boolean_$compareTo__Ljava_lang_Boolean_2Ljava_lang_Boolean_2I(this$static, (javaemul_internal_InternalPreconditions_checkCriticalType__ZV(other == null || com_google_gwt_lang_Cast_instanceOfBoolean__Ljava_lang_Object_2Z(other)) , other)):this$static.compareTo__Ljava_lang_Object_2I(other);
}

com_google_gwt_lang_Cast_booleanCastMap = {4:1, 96:1, 20:1};
function java_lang_CharSequence_$isInstance__Ljava_lang_Object_2Z(instance){
  if (java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(typeof instance, $intern_3)) {
    return true;
  }
  return instance != null && instance.$implements__java_lang_CharSequence;
}

function java_lang_Class_$ensureNamesAreInitialized__Ljava_lang_Class_2V(this$static){
  if (this$static.java_lang_Class_typeName != null) {
    return;
  }
  java_lang_Class_initializeNames__Ljava_lang_Class_2V(this$static);
}

function java_lang_Class_$getName__Ljava_lang_Class_2Ljava_lang_String_2(this$static){
  java_lang_Class_$ensureNamesAreInitialized__Ljava_lang_Class_2V(this$static);
  return this$static.java_lang_Class_typeName;
}

function java_lang_Class_Class__V(){
  ++java_lang_Class_nextSequentialId;
  this.java_lang_Class_typeName = null;
  this.java_lang_Class_simpleName = null;
  this.java_lang_Class_packageName = null;
  this.java_lang_Class_compoundName = null;
  this.java_lang_Class_canonicalName = null;
  this.java_lang_Class_typeId = null;
  this.java_lang_Class_arrayLiterals = null;
}

function java_lang_Class_createClassObject__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2(packageName, compoundClassName){
  var clazz;
  clazz = new java_lang_Class_Class__V;
  clazz.java_lang_Class_packageName = packageName;
  clazz.java_lang_Class_compoundName = compoundClassName;
  return clazz;
}

function java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2(packageName, compoundClassName, typeId){
  var clazz;
  clazz = java_lang_Class_createClassObject__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2(packageName, compoundClassName);
  java_lang_Class_maybeSetClassLiteral__Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2V(typeId, clazz);
  return clazz;
}

function java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2(packageName, compoundClassName, typeId, enumConstantsFunc){
  var clazz;
  clazz = java_lang_Class_createClassObject__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2(packageName, compoundClassName);
  java_lang_Class_maybeSetClassLiteral__Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2V(typeId, clazz);
  clazz.java_lang_Class_modifiers = enumConstantsFunc?8:0;
  return clazz;
}

function java_lang_Class_createForPrimitive__Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2(className, primitiveTypeId){
  var clazz;
  clazz = java_lang_Class_createClassObject__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2('', className);
  clazz.java_lang_Class_typeId = primitiveTypeId;
  clazz.java_lang_Class_modifiers = 1;
  return clazz;
}

function java_lang_Class_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(leafClass, dimensions){
  var arrayLiterals = leafClass.java_lang_Class_arrayLiterals = leafClass.java_lang_Class_arrayLiterals || [];
  return arrayLiterals[dimensions] || (arrayLiterals[dimensions] = leafClass.private$java_lang_Class$createClassLiteralForArray__ILjava_lang_Class_2(dimensions));
}

function java_lang_Class_getPrototypeForClass__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2(clazz){
  if (clazz.isPrimitive__Z()) {
    return null;
  }
  var typeId = clazz.java_lang_Class_typeId;
  return com_google_gwt_lang_Runtime_prototypesByTypeId[typeId];
}

function java_lang_Class_initializeNames__Ljava_lang_Class_2V(clazz){
  if (clazz.isArray__Z()) {
    var componentType = clazz.java_lang_Class_componentType;
    componentType.isPrimitive__Z()?(clazz.java_lang_Class_typeName = '[' + componentType.java_lang_Class_typeId):!componentType.isArray__Z()?(clazz.java_lang_Class_typeName = '[L' + componentType.getName__Ljava_lang_String_2() + ';'):(clazz.java_lang_Class_typeName = '[' + componentType.getName__Ljava_lang_String_2());
    clazz.java_lang_Class_canonicalName = componentType.getCanonicalName__Ljava_lang_String_2() + '[]';
    clazz.java_lang_Class_simpleName = componentType.getSimpleName__Ljava_lang_String_2() + '[]';
    return;
  }
  var packageName = clazz.java_lang_Class_packageName;
  var compoundName = clazz.java_lang_Class_compoundName;
  compoundName = compoundName.split('/');
  clazz.java_lang_Class_typeName = java_lang_Class_join__Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_String_2('.', [packageName, java_lang_Class_join__Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_String_2('$', compoundName)]);
  clazz.java_lang_Class_canonicalName = java_lang_Class_join__Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_String_2('.', [packageName, java_lang_Class_join__Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_String_2('.', compoundName)]);
  clazz.java_lang_Class_simpleName = compoundName[compoundName.length - 1];
}

function java_lang_Class_join__Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_String_2(separator, strings){
  var i = 0;
  while (!strings[i] || strings[i] == '') {
    i++;
  }
  var result = strings[i++];
  for (; i < strings.length; i++) {
    if (!strings[i] || strings[i] == '') {
      continue;
    }
    result += separator + strings[i];
  }
  return result;
}

function java_lang_Class_maybeSetClassLiteral__Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2V(typeId, clazz){
  var proto;
  if (!typeId) {
    return;
  }
  clazz.java_lang_Class_typeId = typeId;
  var prototype = java_lang_Class_getPrototypeForClass__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2(clazz);
  if (!prototype) {
    com_google_gwt_lang_Runtime_prototypesByTypeId[typeId] = [clazz];
    return;
  }
  prototype.java_lang_Object__1_1_1clazz = clazz;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(52, 1, {}, java_lang_Class_Class__V);
_.private$java_lang_Class$createClassLiteralForArray__ILjava_lang_Class_2 = function java_lang_Class_createClassLiteralForArray__ILjava_lang_Class_2(dimensions){
  var clazz;
  clazz = new java_lang_Class_Class__V;
  clazz.java_lang_Class_modifiers = 4;
  dimensions > 1?(clazz.java_lang_Class_componentType = java_lang_Class_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(this, dimensions - 1)):(clazz.java_lang_Class_componentType = this);
  return clazz;
}
;
_.getCanonicalName__Ljava_lang_String_2 = function java_lang_Class_getCanonicalName__Ljava_lang_String_2(){
  java_lang_Class_$ensureNamesAreInitialized__Ljava_lang_Class_2V(this);
  return this.java_lang_Class_canonicalName;
}
;
_.getName__Ljava_lang_String_2 = function java_lang_Class_getName__Ljava_lang_String_2(){
  return java_lang_Class_$getName__Ljava_lang_Class_2Ljava_lang_String_2(this);
}
;
_.getSimpleName__Ljava_lang_String_2 = function java_lang_Class_getSimpleName__Ljava_lang_String_2(){
  java_lang_Class_$ensureNamesAreInitialized__Ljava_lang_Class_2V(this);
  return this.java_lang_Class_simpleName;
}
;
_.isArray__Z = function java_lang_Class_isArray__Z(){
  return (this.java_lang_Class_modifiers & 4) != 0;
}
;
_.isPrimitive__Z = function java_lang_Class_isPrimitive__Z(){
  return (this.java_lang_Class_modifiers & 1) != 0;
}
;
_.java_lang_Class_modifiers = 0;
var java_lang_Class_nextSequentialId = 1;
function java_lang_Throwable_$fillInStackTrace__Ljava_lang_Throwable_2Ljava_lang_Throwable_2(this$static){
  this$static.java_lang_Throwable_writetableStackTrace && this$static.backingJsObject !== $intern_6 && this$static.private$java_lang_Throwable$initializeBackingError__V();
  return this$static;
}

function java_lang_Throwable_$setBackingJsObject__Ljava_lang_Throwable_2Ljava_lang_Object_2V(this$static, backingJsObject){
  this$static.backingJsObject = backingJsObject;
  backingJsObject != null && javaemul_internal_JsUtils_setPropertySafe__Ljava_lang_Object_2Ljava_lang_String_2Ljava_lang_Object_2V(backingJsObject, $intern_5, this$static);
}

function java_lang_Throwable_Throwable__Ljava_lang_String_2V(message){
  this.java_lang_Throwable_detailMessage = message;
  java_lang_Throwable_$fillInStackTrace__Ljava_lang_Throwable_2Ljava_lang_Throwable_2(this);
  this.private$java_lang_Throwable$initializeBackingError__V();
}

function java_lang_Throwable_fixIE__Ljava_lang_Object_2Ljava_lang_Object_2(e){
  if (!('stack' in e)) {
    try {
      throw e;
    }
     catch (ignored) {
    }
  }
  return e;
}

function java_lang_Throwable_of__Ljava_lang_Object_2Ljava_lang_Throwable_2(e){
  var throwable;
  if (e != null) {
    throwable = com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(e[$intern_5], 8);
    if (throwable) {
      return throwable;
    }
  }
  return com_google_gwt_lang_Cast_instanceOfNative__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(e, $wnd.TypeError)?new java_lang_NullPointerException_NullPointerException__Ljava_lang_Object_2V(e):new java_lang_JsException_JsException__Ljava_lang_Object_2V(e);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(8, 1, {4:1, 8:1});
_.package_private$java_lang$createError__Ljava_lang_String_2Ljava_lang_Object_2 = function java_lang_Throwable_createError__Ljava_lang_String_2Ljava_lang_Object_2(msg){
  return new $wnd.Error(msg);
}
;
_.private$java_lang_Throwable$initializeBackingError__V = function java_lang_Throwable_initializeBackingError__V(){
  var className, errorMessage, message;
  message = this.java_lang_Throwable_detailMessage == null?null:this.java_lang_Throwable_detailMessage.replace(new RegExp('\n', 'g'), ' ');
  errorMessage = (className = java_lang_Class_$getName__Ljava_lang_Class_2Ljava_lang_String_2(this.java_lang_Object__1_1_1clazz) , message == null?className:className + ': ' + message);
  java_lang_Throwable_$setBackingJsObject__Ljava_lang_Throwable_2Ljava_lang_Object_2V(this, java_lang_Throwable_fixIE__Ljava_lang_Object_2Ljava_lang_Object_2(this.package_private$java_lang$createError__Ljava_lang_String_2Ljava_lang_Object_2(errorMessage)));
  com_google_gwt_core_client_impl_StackTraceCreator_captureStackTrace__Ljava_lang_Object_2V(this);
}
;
_.backingJsObject = $intern_6;
_.java_lang_Throwable_writetableStackTrace = true;
com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(43, 8, {4:1, 8:1});
function java_lang_RuntimeException_RuntimeException__V(){
  java_lang_Throwable_$fillInStackTrace__Ljava_lang_Throwable_2Ljava_lang_Throwable_2(this);
  this.private$java_lang_Throwable$initializeBackingError__V();
}

function java_lang_RuntimeException_RuntimeException__Ljava_lang_String_2V(message){
  java_lang_Throwable_Throwable__Ljava_lang_String_2V.call(this, message);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(9, 43, $intern_7);
function java_lang_ClassCastException_ClassCastException__V(){
  java_lang_RuntimeException_RuntimeException__V.call(this);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(98, 9, $intern_7, java_lang_ClassCastException_ClassCastException__V);
function java_lang_Number_$isInstance__Ljava_lang_Object_2Z(instance){
  return java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z($intern_2, typeof instance) || instance instanceof Number;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(178, 1, $intern_8);
function java_lang_Double_$compareTo__Ljava_lang_Double_2Ljava_lang_Double_2I(this$static, b){
  return java_lang_Double_compare__DDI((javaemul_internal_InternalPreconditions_checkCriticalNotNull__Ljava_lang_Object_2Ljava_lang_Object_2(this$static) , this$static), (javaemul_internal_InternalPreconditions_checkCriticalNotNull__Ljava_lang_Object_2Ljava_lang_Object_2(b) , b));
}

function java_lang_Double_$isInstance__Ljava_lang_Object_2Z(instance){
  return java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z($intern_2, typeof instance);
}

function java_lang_Double_compare__DDI(x_0, y_0){
  if (x_0 < y_0) {
    return -1;
  }
  if (x_0 > y_0) {
    return 1;
  }
  if (x_0 == y_0) {
    return 0;
  }
  return isNaN(x_0)?isNaN(y_0)?0:1:-1;
}

com_google_gwt_lang_Cast_doubleCastMap = {4:1, 20:1, 97:1};
function java_lang_JsException_JsException__Ljava_lang_Object_2V(backingJsObject){
  java_lang_Throwable_$fillInStackTrace__Ljava_lang_Throwable_2Ljava_lang_Throwable_2(this);
  this.backingJsObject = backingJsObject;
  backingJsObject != null && javaemul_internal_JsUtils_setPropertySafe__Ljava_lang_Object_2Ljava_lang_String_2Ljava_lang_Object_2V(backingJsObject, $intern_5, this);
  this.java_lang_Throwable_detailMessage = backingJsObject == null?'null':com_google_gwt_lang_Runtime_toString__Ljava_lang_Object_2Ljava_lang_String_2(backingJsObject);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(33, 9, $intern_7, java_lang_JsException_JsException__Ljava_lang_Object_2V);
function java_lang_NullPointerException_NullPointerException__V(){
  java_lang_RuntimeException_RuntimeException__V.call(this);
}

function java_lang_NullPointerException_NullPointerException__Ljava_lang_Object_2V(typeError){
  java_lang_JsException_JsException__Ljava_lang_Object_2V.call(this, typeError);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(42, 33, $intern_7, java_lang_NullPointerException_NullPointerException__V, java_lang_NullPointerException_NullPointerException__Ljava_lang_Object_2V);
_.package_private$java_lang$createError__Ljava_lang_String_2Ljava_lang_Object_2 = function java_lang_NullPointerException_createError__Ljava_lang_String_2Ljava_lang_Object_2(msg){
  return new $wnd.TypeError(msg);
}
;
function java_lang_String_$charAt__Ljava_lang_String_2IC(this$static, index_0){
  return this$static.charCodeAt(index_0);
}

function java_lang_String_$compareTo__Ljava_lang_String_2Ljava_lang_String_2I(this$static, other){
  return javaemul_internal_JsUtils_compare__Ljava_lang_String_2Ljava_lang_String_2I((javaemul_internal_InternalPreconditions_checkCriticalNotNull__Ljava_lang_Object_2Ljava_lang_Object_2(this$static) , this$static), (javaemul_internal_InternalPreconditions_checkCriticalNotNull__Ljava_lang_Object_2Ljava_lang_Object_2(other) , other));
}

function java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(this$static, other){
  return javaemul_internal_InternalPreconditions_checkCriticalNotNull__Ljava_lang_Object_2Ljava_lang_Object_2(this$static) , this$static === other;
}

function java_lang_String_$indexOf__Ljava_lang_String_2Ljava_lang_String_2I(this$static, str){
  return this$static.indexOf(str);
}

function java_lang_String_$isInstance__Ljava_lang_Object_2Z(instance){
  return java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z($intern_3, typeof instance);
}

com_google_gwt_lang_Cast_stringCastMap = {4:1, 71:1, 20:1, 2:1};
function javaemul_internal_InternalPreconditions_checkCriticalArrayBounds__IIIV(end, length_0){
  if (0 > end) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_lang_IllegalArgumentException_IllegalArgumentException__Ljava_lang_String_2V('fromIndex: 0 > toIndex: ' + end));
  }
  if (end > length_0) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_lang_ArrayIndexOutOfBoundsException_ArrayIndexOutOfBoundsException__Ljava_lang_String_2V($intern_9 + end + $intern_10 + length_0));
  }
}

function javaemul_internal_InternalPreconditions_checkCriticalArrayType__ZV(expression){
  if (!expression) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_lang_ArrayStoreException_ArrayStoreException__V);
  }
}

function javaemul_internal_InternalPreconditions_checkCriticalElement__ZV(expression){
  if (!expression) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_util_NoSuchElementException_NoSuchElementException__V);
  }
}

function javaemul_internal_InternalPreconditions_checkCriticalElementIndex__IIV(index_0, size_0){
  if (index_0 < 0 || index_0 >= size_0) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_lang_IndexOutOfBoundsException_IndexOutOfBoundsException__Ljava_lang_String_2V('Index: ' + index_0 + ', Size: ' + size_0));
  }
}

function javaemul_internal_InternalPreconditions_checkCriticalNotNull__Ljava_lang_Object_2Ljava_lang_Object_2(reference){
  if (reference == null) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_lang_NullPointerException_NullPointerException__V);
  }
  return reference;
}

function javaemul_internal_InternalPreconditions_checkCriticalPositionIndex__IIV(index_0, size_0){
  if (index_0 < 0 || index_0 > size_0) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_lang_IndexOutOfBoundsException_IndexOutOfBoundsException__Ljava_lang_String_2V('Index: ' + index_0 + ', Size: ' + size_0));
  }
}

function javaemul_internal_InternalPreconditions_checkCriticalPositionIndexes__IIIV(start_0, end, size_0){
  if (start_0 < 0 || end > size_0) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_lang_IndexOutOfBoundsException_IndexOutOfBoundsException__Ljava_lang_String_2V($intern_11 + start_0 + ', toIndex: ' + end + ', size: ' + size_0));
  }
  if (start_0 > end) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_lang_IllegalArgumentException_IllegalArgumentException__Ljava_lang_String_2V($intern_11 + start_0 + ' > toIndex: ' + end));
  }
}

function javaemul_internal_InternalPreconditions_checkCriticalState__ZV(expression){
  if (!expression) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_lang_IllegalStateException_IllegalStateException__V);
  }
}

function javaemul_internal_InternalPreconditions_checkCriticalType__ZV(expression){
  if (!expression) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_lang_ClassCastException_ClassCastException__V);
  }
}

function javaemul_internal_InternalPreconditions_checkNotNull__Ljava_lang_Object_2Ljava_lang_Object_2(reference){
  javaemul_internal_InternalPreconditions_checkCriticalNotNull__Ljava_lang_Object_2Ljava_lang_Object_2(reference);
  return reference;
}

function javaemul_internal_JsUtils_compare__Ljava_lang_String_2Ljava_lang_String_2I(a, b){
  return a == b?0:a < b?-1:1;
}

function javaemul_internal_JsUtils_setPropertySafe__Ljava_lang_Object_2Ljava_lang_String_2Ljava_lang_Object_2V(map_0, key, value_0){
  try {
    map_0[key] = value_0;
  }
   catch (ignored) {
  }
}

function javaemul_internal_ObjectHashing_getHashCode__Ljava_lang_Object_2I(o){
  return o.$H || (o.$H = ++javaemul_internal_ObjectHashing_nextHashId);
}

var javaemul_internal_ObjectHashing_nextHashId = 0;
function javaemul_internal_StringHashCache_$clinit__V(){
  javaemul_internal_StringHashCache_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  javaemul_internal_StringHashCache_back = {};
  javaemul_internal_StringHashCache_front = {};
}

function javaemul_internal_StringHashCache_compute__Ljava_lang_String_2I(str){
  var hashCode, i, n, nBatch;
  hashCode = 0;
  n = str.length;
  nBatch = n - 4;
  i = 0;
  while (i < nBatch) {
    hashCode = str.charCodeAt(i + 3) + 31 * (str.charCodeAt(i + 2) + 31 * (str.charCodeAt(i + 1) + 31 * (str.charCodeAt(i) + 31 * hashCode)));
    hashCode = hashCode | 0;
    i += 4;
  }
  while (i < n) {
    hashCode = hashCode * 31 + java_lang_String_$charAt__Ljava_lang_String_2IC(str, i++);
  }
  hashCode = hashCode | 0;
  return hashCode;
}

function javaemul_internal_StringHashCache_getHashCode__Ljava_lang_String_2I(str){
  javaemul_internal_StringHashCache_$clinit__V();
  var hashCode, key, result;
  key = ':' + str;
  result = javaemul_internal_StringHashCache_front[key];
  if (!(result === undefined)) {
    return result;
  }
  result = javaemul_internal_StringHashCache_back[key];
  hashCode = result === undefined?javaemul_internal_StringHashCache_compute__Ljava_lang_String_2I(str):result;
  javaemul_internal_StringHashCache_increment__V();
  javaemul_internal_StringHashCache_front[key] = hashCode;
  return hashCode;
}

function javaemul_internal_StringHashCache_increment__V(){
  if (javaemul_internal_StringHashCache_count == 256) {
    javaemul_internal_StringHashCache_back = javaemul_internal_StringHashCache_front;
    javaemul_internal_StringHashCache_front = {};
    javaemul_internal_StringHashCache_count = 0;
  }
  ++javaemul_internal_StringHashCache_count;
}

var javaemul_internal_StringHashCache_back, javaemul_internal_StringHashCache_count = 0, javaemul_internal_StringHashCache_front;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Object_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_12, 'Object', 1);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1core_1client_1JavaScriptObject_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_13, 'JavaScriptObject$', 0);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1core_1client_1impl_1StackTraceCreator$Collector_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_14, 'StackTraceCreator/Collector', 179);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1core_1client_1impl_1StackTraceCreator$CollectorLegacy_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_14, 'StackTraceCreator/CollectorLegacy', 99);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1core_1client_1impl_1StackTraceCreator$CollectorModern_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_14, 'StackTraceCreator/CollectorModern', 180);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1core_1client_1impl_1StackTraceCreator$CollectorModernNoSourceMap_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_14, 'StackTraceCreator/CollectorModernNoSourceMap', 100);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Boolean_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_12, 'Boolean', 96);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Class_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_12, 'Class', 52);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Throwable_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_12, 'Throwable', 8);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Exception_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_12, 'Exception', 43);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1RuntimeException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_12, 'RuntimeException', 9);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1ClassCastException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_12, 'ClassCastException', 98);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Number_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_12, 'Number', 178);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Double_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_12, 'Double', 97);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1JsException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_12, 'JsException', 33);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1NullPointerException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_12, 'NullPointerException', 42);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1String_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_12, 'String', 2);
com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(101, 33, $intern_7);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1core_1client_1impl_1JavaScriptExceptionBase_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_14, 'JavaScriptExceptionBase', 101);
function com_google_gwt_core_client_JavaScriptException_$clinit__V(){
  com_google_gwt_core_client_JavaScriptException_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  com_google_gwt_core_client_JavaScriptException_NOT_1SET = new java_lang_Object_Object__V;
}

function com_google_gwt_core_client_JavaScriptException_JavaScriptException__Ljava_lang_Object_2V(e){
  com_google_gwt_core_client_JavaScriptException_$clinit__V();
  java_lang_JsException_JsException__Ljava_lang_Object_2V.call(this, e);
  this.com_google_gwt_core_client_JavaScriptException_e = e;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(29, 101, {29:1, 4:1, 9:1, 8:1}, com_google_gwt_core_client_JavaScriptException_JavaScriptException__Ljava_lang_Object_2V);
_.getThrown__Ljava_lang_Object_2 = function com_google_gwt_core_client_JavaScriptException_getThrown__Ljava_lang_Object_2(){
  return com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(this.com_google_gwt_core_client_JavaScriptException_e) === com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_core_client_JavaScriptException_NOT_1SET)?null:this.com_google_gwt_core_client_JavaScriptException_e;
}
;
var com_google_gwt_core_client_JavaScriptException_NOT_1SET;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1core_1client_1JavaScriptException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_13, 'JavaScriptException', 29);
function com_google_gwt_core_client_JsArrayString_$push__Lcom_google_gwt_core_client_JsArrayString_2Ljava_lang_String_2V(this$static, value_0){
  this$static[this$static.length] = value_0;
}

function com_google_gwt_core_client_JsDate_now__D(){
  if (Date.now) {
    return Date.now();
  }
  return (new Date).getTime();
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(168, 1, {});
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1core_1client_1Scheduler_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_13, 'Scheduler', 168);
function com_google_gwt_core_client_ScriptInjector_$clinit__V(){
  com_google_gwt_core_client_ScriptInjector_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  com_google_gwt_core_client_ScriptInjector_TOP_1WINDOW = $wnd;
}

function com_google_gwt_core_client_ScriptInjector_nativeAttachToHead__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(doc, scriptElement){
  com_google_gwt_core_client_ScriptInjector_$clinit__V();
  (doc.head || doc.getElementsByTagName('head')[0]).appendChild(scriptElement);
}

function com_google_gwt_core_client_ScriptInjector_nativeMakeScriptElement__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(doc){
  com_google_gwt_core_client_ScriptInjector_$clinit__V();
  return doc.createElement('script');
}

function com_google_gwt_core_client_ScriptInjector_nativeSetSrc__Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_String_2V(element, url_0){
  com_google_gwt_core_client_ScriptInjector_$clinit__V();
  element.src = url_0;
}

function com_google_gwt_core_client_ScriptInjector_nativeSetText__Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_String_2V(element, scriptBody){
  com_google_gwt_core_client_ScriptInjector_$clinit__V();
  element.text = scriptBody;
}

var com_google_gwt_core_client_ScriptInjector_TOP_1WINDOW;
function com_google_gwt_core_client_ScriptInjector$FromString_$inject__Lcom_google_gwt_core_client_ScriptInjector$FromString_2Lcom_google_gwt_core_client_JavaScriptObject_2(this$static){
  var doc, scriptElement, wnd;
  wnd = !this$static.com_google_gwt_core_client_ScriptInjector$FromString_window?(com_google_gwt_core_client_ScriptInjector_$clinit__V() , window):this$static.com_google_gwt_core_client_ScriptInjector$FromString_window;
  doc = (com_google_gwt_core_client_ScriptInjector_$clinit__V() , wnd.document);
  scriptElement = com_google_gwt_core_client_ScriptInjector_nativeMakeScriptElement__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(doc);
  com_google_gwt_core_client_ScriptInjector_nativeSetText__Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_String_2V(scriptElement, this$static.com_google_gwt_core_client_ScriptInjector$FromString_scriptBody);
  com_google_gwt_core_client_ScriptInjector_nativeAttachToHead__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(doc, scriptElement);
  this$static.com_google_gwt_core_client_ScriptInjector$FromString_removeTag && (scriptElement.parentNode.removeChild(scriptElement) , undefined);
  return scriptElement;
}

function com_google_gwt_core_client_ScriptInjector$FromString_$setWindow__Lcom_google_gwt_core_client_ScriptInjector$FromString_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_ScriptInjector$FromString_2(this$static, window_0){
  this$static.com_google_gwt_core_client_ScriptInjector$FromString_window = window_0;
  return this$static;
}

function com_google_gwt_core_client_ScriptInjector$FromString_ScriptInjector$FromString__Ljava_lang_String_2V(){
  this.com_google_gwt_core_client_ScriptInjector$FromString_scriptBody = '// glMatrix v0.9.5\r\nglMatrixArrayType=typeof Float32Array!="undefined"?Float32Array:typeof WebGLFloatArray!="undefined"?WebGLFloatArray:Array;var vec3={};vec3.create=function(a){var b=new glMatrixArrayType(3);if(a){b[0]=a[0];b[1]=a[1];b[2]=a[2]}return b};vec3.set=function(a,b){b[0]=a[0];b[1]=a[1];b[2]=a[2];return b};vec3.add=function(a,b,c){if(!c||a==c){a[0]+=b[0];a[1]+=b[1];a[2]+=b[2];return a}c[0]=a[0]+b[0];c[1]=a[1]+b[1];c[2]=a[2]+b[2];return c};\r\nvec3.subtract=function(a,b,c){if(!c||a==c){a[0]-=b[0];a[1]-=b[1];a[2]-=b[2];return a}c[0]=a[0]-b[0];c[1]=a[1]-b[1];c[2]=a[2]-b[2];return c};vec3.negate=function(a,b){b||(b=a);b[0]=-a[0];b[1]=-a[1];b[2]=-a[2];return b};vec3.scale=function(a,b,c){if(!c||a==c){a[0]*=b;a[1]*=b;a[2]*=b;return a}c[0]=a[0]*b;c[1]=a[1]*b;c[2]=a[2]*b;return c};\r\nvec3.normalize=function(a,b){b||(b=a);var c=a[0],d=a[1],e=a[2],g=Math.sqrt(c*c+d*d+e*e);if(g){if(g==1){b[0]=c;b[1]=d;b[2]=e;return b}}else{b[0]=0;b[1]=0;b[2]=0;return b}g=1/g;b[0]=c*g;b[1]=d*g;b[2]=e*g;return b};vec3.cross=function(a,b,c){c||(c=a);var d=a[0],e=a[1];a=a[2];var g=b[0],f=b[1];b=b[2];c[0]=e*b-a*f;c[1]=a*g-d*b;c[2]=d*f-e*g;return c};vec3.length=function(a){var b=a[0],c=a[1];a=a[2];return Math.sqrt(b*b+c*c+a*a)};vec3.dot=function(a,b){return a[0]*b[0]+a[1]*b[1]+a[2]*b[2]};\r\nvec3.direction=function(a,b,c){c||(c=a);var d=a[0]-b[0],e=a[1]-b[1];a=a[2]-b[2];b=Math.sqrt(d*d+e*e+a*a);if(!b){c[0]=0;c[1]=0;c[2]=0;return c}b=1/b;c[0]=d*b;c[1]=e*b;c[2]=a*b;return c};vec3.lerp=function(a,b,c,d){d||(d=a);d[0]=a[0]+c*(b[0]-a[0]);d[1]=a[1]+c*(b[1]-a[1]);d[2]=a[2]+c*(b[2]-a[2]);return d};vec3.str=function(a){return"["+a[0]+", "+a[1]+", "+a[2]+"]"};var mat3={};\r\nmat3.create=function(a){var b=new glMatrixArrayType(9);if(a){b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=a[3];b[4]=a[4];b[5]=a[5];b[6]=a[6];b[7]=a[7];b[8]=a[8];b[9]=a[9]}return b};mat3.set=function(a,b){b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=a[3];b[4]=a[4];b[5]=a[5];b[6]=a[6];b[7]=a[7];b[8]=a[8];return b};mat3.identity=function(a){a[0]=1;a[1]=0;a[2]=0;a[3]=0;a[4]=1;a[5]=0;a[6]=0;a[7]=0;a[8]=1;return a};\r\nmat3.transpose=function(a,b){if(!b||a==b){var c=a[1],d=a[2],e=a[5];a[1]=a[3];a[2]=a[6];a[3]=c;a[5]=a[7];a[6]=d;a[7]=e;return a}b[0]=a[0];b[1]=a[3];b[2]=a[6];b[3]=a[1];b[4]=a[4];b[5]=a[7];b[6]=a[2];b[7]=a[5];b[8]=a[8];return b};mat3.toMat4=function(a,b){b||(b=mat4.create());b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=0;b[4]=a[3];b[5]=a[4];b[6]=a[5];b[7]=0;b[8]=a[6];b[9]=a[7];b[10]=a[8];b[11]=0;b[12]=0;b[13]=0;b[14]=0;b[15]=1;return b};\r\nmat3.str=function(a){return"["+a[0]+", "+a[1]+", "+a[2]+", "+a[3]+", "+a[4]+", "+a[5]+", "+a[6]+", "+a[7]+", "+a[8]+"]"};var mat4={};mat4.create=function(a){var b=new glMatrixArrayType(16);if(a){b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=a[3];b[4]=a[4];b[5]=a[5];b[6]=a[6];b[7]=a[7];b[8]=a[8];b[9]=a[9];b[10]=a[10];b[11]=a[11];b[12]=a[12];b[13]=a[13];b[14]=a[14];b[15]=a[15]}return b};\r\nmat4.set=function(a,b){b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=a[3];b[4]=a[4];b[5]=a[5];b[6]=a[6];b[7]=a[7];b[8]=a[8];b[9]=a[9];b[10]=a[10];b[11]=a[11];b[12]=a[12];b[13]=a[13];b[14]=a[14];b[15]=a[15];return b};mat4.identity=function(a){a[0]=1;a[1]=0;a[2]=0;a[3]=0;a[4]=0;a[5]=1;a[6]=0;a[7]=0;a[8]=0;a[9]=0;a[10]=1;a[11]=0;a[12]=0;a[13]=0;a[14]=0;a[15]=1;return a};\r\nmat4.transpose=function(a,b){if(!b||a==b){var c=a[1],d=a[2],e=a[3],g=a[6],f=a[7],h=a[11];a[1]=a[4];a[2]=a[8];a[3]=a[12];a[4]=c;a[6]=a[9];a[7]=a[13];a[8]=d;a[9]=g;a[11]=a[14];a[12]=e;a[13]=f;a[14]=h;return a}b[0]=a[0];b[1]=a[4];b[2]=a[8];b[3]=a[12];b[4]=a[1];b[5]=a[5];b[6]=a[9];b[7]=a[13];b[8]=a[2];b[9]=a[6];b[10]=a[10];b[11]=a[14];b[12]=a[3];b[13]=a[7];b[14]=a[11];b[15]=a[15];return b};\r\nmat4.determinant=function(a){var b=a[0],c=a[1],d=a[2],e=a[3],g=a[4],f=a[5],h=a[6],i=a[7],j=a[8],k=a[9],l=a[10],o=a[11],m=a[12],n=a[13],p=a[14];a=a[15];return m*k*h*e-j*n*h*e-m*f*l*e+g*n*l*e+j*f*p*e-g*k*p*e-m*k*d*i+j*n*d*i+m*c*l*i-b*n*l*i-j*c*p*i+b*k*p*i+m*f*d*o-g*n*d*o-m*c*h*o+b*n*h*o+g*c*p*o-b*f*p*o-j*f*d*a+g*k*d*a+j*c*h*a-b*k*h*a-g*c*l*a+b*f*l*a};\r\nmat4.inverse=function(a,b){b||(b=a);var c=a[0],d=a[1],e=a[2],g=a[3],f=a[4],h=a[5],i=a[6],j=a[7],k=a[8],l=a[9],o=a[10],m=a[11],n=a[12],p=a[13],r=a[14],s=a[15],A=c*h-d*f,B=c*i-e*f,t=c*j-g*f,u=d*i-e*h,v=d*j-g*h,w=e*j-g*i,x=k*p-l*n,y=k*r-o*n,z=k*s-m*n,C=l*r-o*p,D=l*s-m*p,E=o*s-m*r,q=1/(A*E-B*D+t*C+u*z-v*y+w*x);b[0]=(h*E-i*D+j*C)*q;b[1]=(-d*E+e*D-g*C)*q;b[2]=(p*w-r*v+s*u)*q;b[3]=(-l*w+o*v-m*u)*q;b[4]=(-f*E+i*z-j*y)*q;b[5]=(c*E-e*z+g*y)*q;b[6]=(-n*w+r*t-s*B)*q;b[7]=(k*w-o*t+m*B)*q;b[8]=(f*D-h*z+j*x)*q;\r\n    b[9]=(-c*D+d*z-g*x)*q;b[10]=(n*v-p*t+s*A)*q;b[11]=(-k*v+l*t-m*A)*q;b[12]=(-f*C+h*y-i*x)*q;b[13]=(c*C-d*y+e*x)*q;b[14]=(-n*u+p*B-r*A)*q;b[15]=(k*u-l*B+o*A)*q;return b};mat4.toRotationMat=function(a,b){b||(b=mat4.create());b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=a[3];b[4]=a[4];b[5]=a[5];b[6]=a[6];b[7]=a[7];b[8]=a[8];b[9]=a[9];b[10]=a[10];b[11]=a[11];b[12]=0;b[13]=0;b[14]=0;b[15]=1;return b};\r\nmat4.toMat3=function(a,b){b||(b=mat3.create());b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=a[4];b[4]=a[5];b[5]=a[6];b[6]=a[8];b[7]=a[9];b[8]=a[10];return b};mat4.toInverseMat3=function(a,b){var c=a[0],d=a[1],e=a[2],g=a[4],f=a[5],h=a[6],i=a[8],j=a[9],k=a[10],l=k*f-h*j,o=-k*g+h*i,m=j*g-f*i,n=c*l+d*o+e*m;if(!n)return null;n=1/n;b||(b=mat3.create());b[0]=l*n;b[1]=(-k*d+e*j)*n;b[2]=(h*d-e*f)*n;b[3]=o*n;b[4]=(k*c-e*i)*n;b[5]=(-h*c+e*g)*n;b[6]=m*n;b[7]=(-j*c+d*i)*n;b[8]=(f*c-d*g)*n;return b};\r\nmat4.multiply=function(a,b,c){c||(c=a);var d=a[0],e=a[1],g=a[2],f=a[3],h=a[4],i=a[5],j=a[6],k=a[7],l=a[8],o=a[9],m=a[10],n=a[11],p=a[12],r=a[13],s=a[14];a=a[15];var A=b[0],B=b[1],t=b[2],u=b[3],v=b[4],w=b[5],x=b[6],y=b[7],z=b[8],C=b[9],D=b[10],E=b[11],q=b[12],F=b[13],G=b[14];b=b[15];c[0]=A*d+B*h+t*l+u*p;c[1]=A*e+B*i+t*o+u*r;c[2]=A*g+B*j+t*m+u*s;c[3]=A*f+B*k+t*n+u*a;c[4]=v*d+w*h+x*l+y*p;c[5]=v*e+w*i+x*o+y*r;c[6]=v*g+w*j+x*m+y*s;c[7]=v*f+w*k+x*n+y*a;c[8]=z*d+C*h+D*l+E*p;c[9]=z*e+C*i+D*o+E*r;c[10]=z*\r\n    g+C*j+D*m+E*s;c[11]=z*f+C*k+D*n+E*a;c[12]=q*d+F*h+G*l+b*p;c[13]=q*e+F*i+G*o+b*r;c[14]=q*g+F*j+G*m+b*s;c[15]=q*f+F*k+G*n+b*a;return c};mat4.multiplyVec3=function(a,b,c){c||(c=b);var d=b[0],e=b[1];b=b[2];c[0]=a[0]*d+a[4]*e+a[8]*b+a[12];c[1]=a[1]*d+a[5]*e+a[9]*b+a[13];c[2]=a[2]*d+a[6]*e+a[10]*b+a[14];return c};\r\nmat4.multiplyVec4=function(a,b,c){c||(c=b);var d=b[0],e=b[1],g=b[2];b=b[3];c[0]=a[0]*d+a[4]*e+a[8]*g+a[12]*b;c[1]=a[1]*d+a[5]*e+a[9]*g+a[13]*b;c[2]=a[2]*d+a[6]*e+a[10]*g+a[14]*b;c[3]=a[3]*d+a[7]*e+a[11]*g+a[15]*b;return c};\r\nmat4.translate=function(a,b,c){var d=b[0],e=b[1];b=b[2];if(!c||a==c){a[12]=a[0]*d+a[4]*e+a[8]*b+a[12];a[13]=a[1]*d+a[5]*e+a[9]*b+a[13];a[14]=a[2]*d+a[6]*e+a[10]*b+a[14];a[15]=a[3]*d+a[7]*e+a[11]*b+a[15];return a}var g=a[0],f=a[1],h=a[2],i=a[3],j=a[4],k=a[5],l=a[6],o=a[7],m=a[8],n=a[9],p=a[10],r=a[11];c[0]=g;c[1]=f;c[2]=h;c[3]=i;c[4]=j;c[5]=k;c[6]=l;c[7]=o;c[8]=m;c[9]=n;c[10]=p;c[11]=r;c[12]=g*d+j*e+m*b+a[12];c[13]=f*d+k*e+n*b+a[13];c[14]=h*d+l*e+p*b+a[14];c[15]=i*d+o*e+r*b+a[15];return c};\r\nmat4.scale=function(a,b,c){var d=b[0],e=b[1];b=b[2];if(!c||a==c){a[0]*=d;a[1]*=d;a[2]*=d;a[3]*=d;a[4]*=e;a[5]*=e;a[6]*=e;a[7]*=e;a[8]*=b;a[9]*=b;a[10]*=b;a[11]*=b;return a}c[0]=a[0]*d;c[1]=a[1]*d;c[2]=a[2]*d;c[3]=a[3]*d;c[4]=a[4]*e;c[5]=a[5]*e;c[6]=a[6]*e;c[7]=a[7]*e;c[8]=a[8]*b;c[9]=a[9]*b;c[10]=a[10]*b;c[11]=a[11]*b;c[12]=a[12];c[13]=a[13];c[14]=a[14];c[15]=a[15];return c};\r\nmat4.rotate=function(a,b,c,d){var e=c[0],g=c[1];c=c[2];var f=Math.sqrt(e*e+g*g+c*c);if(!f)return null;if(f!=1){f=1/f;e*=f;g*=f;c*=f}var h=Math.sin(b),i=Math.cos(b),j=1-i;b=a[0];f=a[1];var k=a[2],l=a[3],o=a[4],m=a[5],n=a[6],p=a[7],r=a[8],s=a[9],A=a[10],B=a[11],t=e*e*j+i,u=g*e*j+c*h,v=c*e*j-g*h,w=e*g*j-c*h,x=g*g*j+i,y=c*g*j+e*h,z=e*c*j+g*h;e=g*c*j-e*h;g=c*c*j+i;if(d){if(a!=d){d[12]=a[12];d[13]=a[13];d[14]=a[14];d[15]=a[15]}}else d=a;d[0]=b*t+o*u+r*v;d[1]=f*t+m*u+s*v;d[2]=k*t+n*u+A*v;d[3]=l*t+p*u+B*\r\n    v;d[4]=b*w+o*x+r*y;d[5]=f*w+m*x+s*y;d[6]=k*w+n*x+A*y;d[7]=l*w+p*x+B*y;d[8]=b*z+o*e+r*g;d[9]=f*z+m*e+s*g;d[10]=k*z+n*e+A*g;d[11]=l*z+p*e+B*g;return d};mat4.rotateX=function(a,b,c){var d=Math.sin(b);b=Math.cos(b);var e=a[4],g=a[5],f=a[6],h=a[7],i=a[8],j=a[9],k=a[10],l=a[11];if(c){if(a!=c){c[0]=a[0];c[1]=a[1];c[2]=a[2];c[3]=a[3];c[12]=a[12];c[13]=a[13];c[14]=a[14];c[15]=a[15]}}else c=a;c[4]=e*b+i*d;c[5]=g*b+j*d;c[6]=f*b+k*d;c[7]=h*b+l*d;c[8]=e*-d+i*b;c[9]=g*-d+j*b;c[10]=f*-d+k*b;c[11]=h*-d+l*b;return c};\r\nmat4.rotateY=function(a,b,c){var d=Math.sin(b);b=Math.cos(b);var e=a[0],g=a[1],f=a[2],h=a[3],i=a[8],j=a[9],k=a[10],l=a[11];if(c){if(a!=c){c[4]=a[4];c[5]=a[5];c[6]=a[6];c[7]=a[7];c[12]=a[12];c[13]=a[13];c[14]=a[14];c[15]=a[15]}}else c=a;c[0]=e*b+i*-d;c[1]=g*b+j*-d;c[2]=f*b+k*-d;c[3]=h*b+l*-d;c[8]=e*d+i*b;c[9]=g*d+j*b;c[10]=f*d+k*b;c[11]=h*d+l*b;return c};\r\nmat4.rotateZ=function(a,b,c){var d=Math.sin(b);b=Math.cos(b);var e=a[0],g=a[1],f=a[2],h=a[3],i=a[4],j=a[5],k=a[6],l=a[7];if(c){if(a!=c){c[8]=a[8];c[9]=a[9];c[10]=a[10];c[11]=a[11];c[12]=a[12];c[13]=a[13];c[14]=a[14];c[15]=a[15]}}else c=a;c[0]=e*b+i*d;c[1]=g*b+j*d;c[2]=f*b+k*d;c[3]=h*b+l*d;c[4]=e*-d+i*b;c[5]=g*-d+j*b;c[6]=f*-d+k*b;c[7]=h*-d+l*b;return c};\r\nmat4.frustum=function(a,b,c,d,e,g,f){f||(f=mat4.create());var h=b-a,i=d-c,j=g-e;f[0]=e*2/h;f[1]=0;f[2]=0;f[3]=0;f[4]=0;f[5]=e*2/i;f[6]=0;f[7]=0;f[8]=(b+a)/h;f[9]=(d+c)/i;f[10]=-(g+e)/j;f[11]=-1;f[12]=0;f[13]=0;f[14]=-(g*e*2)/j;f[15]=0;return f};mat4.perspective=function(a,b,c,d,e){a=c*Math.tan(a*Math.PI/360);b=a*b;return mat4.frustum(-b,b,-a,a,c,d,e)};\r\nmat4.ortho=function(a,b,c,d,e,g,f){f||(f=mat4.create());var h=b-a,i=d-c,j=g-e;f[0]=2/h;f[1]=0;f[2]=0;f[3]=0;f[4]=0;f[5]=2/i;f[6]=0;f[7]=0;f[8]=0;f[9]=0;f[10]=-2/j;f[11]=0;f[12]=-(a+b)/h;f[13]=-(d+c)/i;f[14]=-(g+e)/j;f[15]=1;return f};\r\nmat4.lookAt=function(a,b,c,d){d||(d=mat4.create());var e=a[0],g=a[1];a=a[2];var f=c[0],h=c[1],i=c[2];c=b[1];var j=b[2];if(e==b[0]&&g==c&&a==j)return mat4.identity(d);var k,l,o,m;c=e-b[0];j=g-b[1];b=a-b[2];m=1/Math.sqrt(c*c+j*j+b*b);c*=m;j*=m;b*=m;k=h*b-i*j;i=i*c-f*b;f=f*j-h*c;if(m=Math.sqrt(k*k+i*i+f*f)){m=1/m;k*=m;i*=m;f*=m}else f=i=k=0;h=j*f-b*i;l=b*k-c*f;o=c*i-j*k;if(m=Math.sqrt(h*h+l*l+o*o)){m=1/m;h*=m;l*=m;o*=m}else o=l=h=0;d[0]=k;d[1]=h;d[2]=c;d[3]=0;d[4]=i;d[5]=l;d[6]=j;d[7]=0;d[8]=f;d[9]=\r\n    o;d[10]=b;d[11]=0;d[12]=-(k*e+i*g+f*a);d[13]=-(h*e+l*g+o*a);d[14]=-(c*e+j*g+b*a);d[15]=1;return d};mat4.str=function(a){return"["+a[0]+", "+a[1]+", "+a[2]+", "+a[3]+", "+a[4]+", "+a[5]+", "+a[6]+", "+a[7]+", "+a[8]+", "+a[9]+", "+a[10]+", "+a[11]+", "+a[12]+", "+a[13]+", "+a[14]+", "+a[15]+"]"};quat4={};quat4.create=function(a){var b=new glMatrixArrayType(4);if(a){b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=a[3]}return b};quat4.set=function(a,b){b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=a[3];return b};\r\nquat4.calculateW=function(a,b){var c=a[0],d=a[1],e=a[2];if(!b||a==b){a[3]=-Math.sqrt(Math.abs(1-c*c-d*d-e*e));return a}b[0]=c;b[1]=d;b[2]=e;b[3]=-Math.sqrt(Math.abs(1-c*c-d*d-e*e));return b};quat4.inverse=function(a,b){if(!b||a==b){a[0]*=1;a[1]*=1;a[2]*=1;return a}b[0]=-a[0];b[1]=-a[1];b[2]=-a[2];b[3]=a[3];return b};quat4.length=function(a){var b=a[0],c=a[1],d=a[2];a=a[3];return Math.sqrt(b*b+c*c+d*d+a*a)};\r\nquat4.normalize=function(a,b){b||(b=a);var c=a[0],d=a[1],e=a[2],g=a[3],f=Math.sqrt(c*c+d*d+e*e+g*g);if(f==0){b[0]=0;b[1]=0;b[2]=0;b[3]=0;return b}f=1/f;b[0]=c*f;b[1]=d*f;b[2]=e*f;b[3]=g*f;return b};quat4.multiply=function(a,b,c){c||(c=a);var d=a[0],e=a[1],g=a[2];a=a[3];var f=b[0],h=b[1],i=b[2];b=b[3];c[0]=d*b+a*f+e*i-g*h;c[1]=e*b+a*h+g*f-d*i;c[2]=g*b+a*i+d*h-e*f;c[3]=a*b-d*f-e*h-g*i;return c};\r\nquat4.multiplyVec3=function(a,b,c){c||(c=b);var d=b[0],e=b[1],g=b[2];b=a[0];var f=a[1],h=a[2];a=a[3];var i=a*d+f*g-h*e,j=a*e+h*d-b*g,k=a*g+b*e-f*d;d=-b*d-f*e-h*g;c[0]=i*a+d*-b+j*-h-k*-f;c[1]=j*a+d*-f+k*-b-i*-h;c[2]=k*a+d*-h+i*-f-j*-b;return c};quat4.toMat3=function(a,b){b||(b=mat3.create());var c=a[0],d=a[1],e=a[2],g=a[3],f=c+c,h=d+d,i=e+e,j=c*f,k=c*h;c=c*i;var l=d*h;d=d*i;e=e*i;f=g*f;h=g*h;g=g*i;b[0]=1-(l+e);b[1]=k-g;b[2]=c+h;b[3]=k+g;b[4]=1-(j+e);b[5]=d-f;b[6]=c-h;b[7]=d+f;b[8]=1-(j+l);return b};\r\nquat4.toMat4=function(a,b){b||(b=mat4.create());var c=a[0],d=a[1],e=a[2],g=a[3],f=c+c,h=d+d,i=e+e,j=c*f,k=c*h;c=c*i;var l=d*h;d=d*i;e=e*i;f=g*f;h=g*h;g=g*i;b[0]=1-(l+e);b[1]=k-g;b[2]=c+h;b[3]=0;b[4]=k+g;b[5]=1-(j+e);b[6]=d-f;b[7]=0;b[8]=c-h;b[9]=d+f;b[10]=1-(j+l);b[11]=0;b[12]=0;b[13]=0;b[14]=0;b[15]=1;return b};quat4.slerp=function(a,b,c,d){d||(d=a);var e=c;if(a[0]*b[0]+a[1]*b[1]+a[2]*b[2]+a[3]*b[3]<0)e=-1*c;d[0]=1-c*a[0]+e*b[0];d[1]=1-c*a[1]+e*b[1];d[2]=1-c*a[2]+e*b[2];d[3]=1-c*a[3]+e*b[3];return d};\r\nquat4.str=function(a){return"["+a[0]+", "+a[1]+", "+a[2]+", "+a[3]+"]"};';
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(143, 1, {}, com_google_gwt_core_client_ScriptInjector$FromString_ScriptInjector$FromString__Ljava_lang_String_2V);
_.com_google_gwt_core_client_ScriptInjector$FromString_removeTag = true;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1core_1client_1ScriptInjector$FromString_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_13, 'ScriptInjector/FromString', 143);
function com_google_gwt_core_client_ScriptInjector$FromUrl_$inject__Lcom_google_gwt_core_client_ScriptInjector$FromUrl_2Lcom_google_gwt_core_client_JavaScriptObject_2(this$static){
  var doc, scriptElement, wnd;
  wnd = !this$static.com_google_gwt_core_client_ScriptInjector$FromUrl_window?(com_google_gwt_core_client_ScriptInjector_$clinit__V() , window):this$static.com_google_gwt_core_client_ScriptInjector$FromUrl_window;
  doc = (com_google_gwt_core_client_ScriptInjector_$clinit__V() , wnd.document);
  scriptElement = com_google_gwt_core_client_ScriptInjector_nativeMakeScriptElement__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(doc);
  com_google_gwt_core_client_ScriptInjector_nativeSetSrc__Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_String_2V(scriptElement, this$static.com_google_gwt_core_client_ScriptInjector$FromUrl_scriptUrl);
  com_google_gwt_core_client_ScriptInjector_nativeAttachToHead__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(doc, scriptElement);
  return scriptElement;
}

function com_google_gwt_core_client_ScriptInjector$FromUrl_$setWindow__Lcom_google_gwt_core_client_ScriptInjector$FromUrl_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_ScriptInjector$FromUrl_2(this$static, window_0){
  this$static.com_google_gwt_core_client_ScriptInjector$FromUrl_window = window_0;
  return this$static;
}

function com_google_gwt_core_client_ScriptInjector$FromUrl_ScriptInjector$FromUrl__Ljava_lang_String_2V(){
  this.com_google_gwt_core_client_ScriptInjector$FromUrl_scriptUrl = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCtNpX88CIyWAySoExky_bbWR7ZF-gaVPQ&callback=initMap';
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(144, 1, {}, com_google_gwt_core_client_ScriptInjector$FromUrl_ScriptInjector$FromUrl__Ljava_lang_String_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1core_1client_1ScriptInjector$FromUrl_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_13, 'ScriptInjector/FromUrl', 144);
function com_google_gwt_core_client_impl_Impl_$clinit__V(){
  com_google_gwt_core_client_impl_Impl_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  !!(com_google_gwt_core_client_impl_StackTraceCreator_$clinit__V() , com_google_gwt_core_client_impl_StackTraceCreator_collector);
}

function com_google_gwt_core_client_impl_Impl_apply__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(jsFunction, thisObj, args){
  return jsFunction.apply(thisObj, args);
  var _;
}

function com_google_gwt_core_client_impl_Impl_enter__Z(){
  var now_0;
  if (com_google_gwt_core_client_impl_Impl_entryDepth != 0) {
    now_0 = com_google_gwt_core_client_JsDate_now__D();
    if (now_0 - com_google_gwt_core_client_impl_Impl_watchdogEntryDepthLastScheduled > 2000) {
      com_google_gwt_core_client_impl_Impl_watchdogEntryDepthLastScheduled = now_0;
      com_google_gwt_core_client_impl_Impl_watchdogEntryDepthTimerId = $wnd.setTimeout(com_google_gwt_core_client_impl_Impl_watchdogEntryDepthRun__V, 10);
    }
  }
  if (com_google_gwt_core_client_impl_Impl_entryDepth++ == 0) {
    com_google_gwt_core_client_impl_SchedulerImpl_$flushEntryCommands__Lcom_google_gwt_core_client_impl_SchedulerImpl_2V((com_google_gwt_core_client_impl_SchedulerImpl_$clinit__V() , com_google_gwt_core_client_impl_SchedulerImpl_INSTANCE));
    return true;
  }
  return false;
}

function com_google_gwt_core_client_impl_Impl_entry__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(jsFunction){
  com_google_gwt_core_client_impl_Impl_$clinit__V();
  return function(){
    return com_google_gwt_core_client_impl_Impl_entry0__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(jsFunction, this, arguments);
    var _;
  }
  ;
}

function com_google_gwt_core_client_impl_Impl_entry0__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(jsFunction, thisObj, args){
  var initialEntry;
  initialEntry = com_google_gwt_core_client_impl_Impl_enter__Z();
  try {
    return com_google_gwt_core_client_impl_Impl_apply__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(jsFunction, thisObj, args);
  }
   finally {
    com_google_gwt_core_client_impl_Impl_exit__ZV(initialEntry);
  }
}

function com_google_gwt_core_client_impl_Impl_exit__ZV(initialEntry){
  initialEntry && com_google_gwt_core_client_impl_SchedulerImpl_$flushFinallyCommands__Lcom_google_gwt_core_client_impl_SchedulerImpl_2V((com_google_gwt_core_client_impl_SchedulerImpl_$clinit__V() , com_google_gwt_core_client_impl_SchedulerImpl_INSTANCE));
  --com_google_gwt_core_client_impl_Impl_entryDepth;
  if (initialEntry) {
    if (com_google_gwt_core_client_impl_Impl_watchdogEntryDepthTimerId != -1) {
      com_google_gwt_core_client_impl_Impl_watchdogEntryDepthCancel__IV(com_google_gwt_core_client_impl_Impl_watchdogEntryDepthTimerId);
      com_google_gwt_core_client_impl_Impl_watchdogEntryDepthTimerId = -1;
    }
  }
}

function com_google_gwt_core_client_impl_Impl_reportToBrowser__Ljava_lang_Object_2V(e){
  com_google_gwt_core_client_impl_Impl_$clinit__V();
  $wnd.setTimeout(function(){
    throw e;
  }
  , 0);
}

function com_google_gwt_core_client_impl_Impl_watchdogEntryDepthCancel__IV(timerId){
  $wnd.clearTimeout(timerId);
}

function com_google_gwt_core_client_impl_Impl_watchdogEntryDepthRun__V(){
  com_google_gwt_core_client_impl_Impl_entryDepth != 0 && (com_google_gwt_core_client_impl_Impl_entryDepth = 0);
  com_google_gwt_core_client_impl_Impl_watchdogEntryDepthTimerId = -1;
}

var com_google_gwt_core_client_impl_Impl_entryDepth = 0, com_google_gwt_core_client_impl_Impl_watchdogEntryDepthLastScheduled = 0, com_google_gwt_core_client_impl_Impl_watchdogEntryDepthTimerId = -1;
function com_google_gwt_core_client_impl_SchedulerImpl_$clinit__V(){
  com_google_gwt_core_client_impl_SchedulerImpl_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  com_google_gwt_core_client_impl_SchedulerImpl_INSTANCE = new com_google_gwt_core_client_impl_SchedulerImpl_SchedulerImpl__V;
}

function com_google_gwt_core_client_impl_SchedulerImpl_$flushEntryCommands__Lcom_google_gwt_core_client_impl_SchedulerImpl_2V(this$static){
  var oldQueue, rescheduled;
  if (this$static.com_google_gwt_core_client_impl_SchedulerImpl_entryCommands) {
    rescheduled = null;
    do {
      oldQueue = this$static.com_google_gwt_core_client_impl_SchedulerImpl_entryCommands;
      this$static.com_google_gwt_core_client_impl_SchedulerImpl_entryCommands = null;
      rescheduled = com_google_gwt_core_client_impl_SchedulerImpl_runScheduledTasks__Lcom_google_gwt_core_client_JsArray_2Lcom_google_gwt_core_client_JsArray_2Lcom_google_gwt_core_client_JsArray_2(oldQueue, rescheduled);
    }
     while (this$static.com_google_gwt_core_client_impl_SchedulerImpl_entryCommands);
    this$static.com_google_gwt_core_client_impl_SchedulerImpl_entryCommands = rescheduled;
  }
}

function com_google_gwt_core_client_impl_SchedulerImpl_$flushFinallyCommands__Lcom_google_gwt_core_client_impl_SchedulerImpl_2V(this$static){
  var oldQueue, rescheduled;
  if (this$static.com_google_gwt_core_client_impl_SchedulerImpl_finallyCommands) {
    rescheduled = null;
    do {
      oldQueue = this$static.com_google_gwt_core_client_impl_SchedulerImpl_finallyCommands;
      this$static.com_google_gwt_core_client_impl_SchedulerImpl_finallyCommands = null;
      rescheduled = com_google_gwt_core_client_impl_SchedulerImpl_runScheduledTasks__Lcom_google_gwt_core_client_JsArray_2Lcom_google_gwt_core_client_JsArray_2Lcom_google_gwt_core_client_JsArray_2(oldQueue, rescheduled);
    }
     while (this$static.com_google_gwt_core_client_impl_SchedulerImpl_finallyCommands);
    this$static.com_google_gwt_core_client_impl_SchedulerImpl_finallyCommands = rescheduled;
  }
}

function com_google_gwt_core_client_impl_SchedulerImpl_$scheduleFinally__Lcom_google_gwt_core_client_impl_SchedulerImpl_2Lcom_google_gwt_core_client_Scheduler$ScheduledCommand_2V(this$static, cmd){
  this$static.com_google_gwt_core_client_impl_SchedulerImpl_finallyCommands = com_google_gwt_core_client_impl_SchedulerImpl_push__Lcom_google_gwt_core_client_JsArray_2Lcom_google_gwt_core_client_impl_SchedulerImpl$Task_2Lcom_google_gwt_core_client_JsArray_2(this$static.com_google_gwt_core_client_impl_SchedulerImpl_finallyCommands, [cmd, false]);
}

function com_google_gwt_core_client_impl_SchedulerImpl_SchedulerImpl__V(){
}

function com_google_gwt_core_client_impl_SchedulerImpl_push__Lcom_google_gwt_core_client_JsArray_2Lcom_google_gwt_core_client_impl_SchedulerImpl$Task_2Lcom_google_gwt_core_client_JsArray_2(queue, task){
  !queue && (queue = []);
  queue[queue.length] = task;
  return queue;
}

function com_google_gwt_core_client_impl_SchedulerImpl_runScheduledTasks__Lcom_google_gwt_core_client_JsArray_2Lcom_google_gwt_core_client_JsArray_2Lcom_google_gwt_core_client_JsArray_2(tasks, rescheduled){
  var e, i, j, t;
  for (i = 0 , j = tasks.length; i < j; i++) {
    t = tasks[i];
    try {
      t[1]?t[0].$_nullMethod() && (rescheduled = com_google_gwt_core_client_impl_SchedulerImpl_push__Lcom_google_gwt_core_client_JsArray_2Lcom_google_gwt_core_client_impl_SchedulerImpl$Task_2Lcom_google_gwt_core_client_JsArray_2(rescheduled, t)):(com_google_gwt_dom_client_StyleInjector_$clinit__V() , com_google_gwt_dom_client_StyleInjector_needsInjection) && com_google_gwt_dom_client_StyleInjector_flush__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_dom_client_StyleElement_2();
    }
     catch ($e0) {
      $e0 = com_google_gwt_lang_Exceptions_toJava__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
      if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z($e0, 8)) {
        e = $e0;
        com_google_gwt_core_client_impl_Impl_$clinit__V();
        com_google_gwt_core_client_impl_Impl_reportToBrowser__Ljava_lang_Object_2V(com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(e, 29)?com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(e, 29).getThrown__Ljava_lang_Object_2():e);
      }
       else 
        throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
    }
  }
  return rescheduled;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(123, 168, {}, com_google_gwt_core_client_impl_SchedulerImpl_SchedulerImpl__V);
var com_google_gwt_core_client_impl_SchedulerImpl_INSTANCE;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1core_1client_1impl_1SchedulerImpl_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_14, 'SchedulerImpl', 123);
function com_google_gwt_dom_client_StyleInjector_$clinit__V(){
  com_google_gwt_dom_client_StyleInjector_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  com_google_gwt_dom_client_StyleInjector_toInject = [];
  com_google_gwt_dom_client_StyleInjector_toInjectAtEnd = [];
  com_google_gwt_dom_client_StyleInjector_toInjectAtStart = [];
  com_google_gwt_dom_client_StyleInjector_flusher = new com_google_gwt_dom_client_StyleInjector$1_StyleInjector$1__V;
}

function com_google_gwt_dom_client_StyleInjector_flush__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_dom_client_StyleElement_2(){
  com_google_gwt_dom_client_StyleInjector_$clinit__V();
  var css, maybeReturn, toReturn;
  toReturn = null;
  if (com_google_gwt_dom_client_StyleInjector_toInjectAtStart.length != 0) {
    css = com_google_gwt_dom_client_StyleInjector_toInjectAtStart.join('');
    maybeReturn = com_google_gwt_dom_client_StyleInjector$StyleInjectorImplIE_$injectStyleSheetAtStart__Lcom_google_gwt_dom_client_StyleInjector$StyleInjectorImplIE_2Ljava_lang_String_2Lcom_google_gwt_dom_client_StyleElement_2((com_google_gwt_dom_client_StyleInjector$StyleInjectorImpl_$clinit__V() , css));
    !com_google_gwt_dom_client_StyleInjector_toInjectAtStart && (toReturn = maybeReturn);
    com_google_gwt_dom_client_StyleInjector_toInjectAtStart.length = 0;
  }
  if (com_google_gwt_dom_client_StyleInjector_toInject.length != 0) {
    css = com_google_gwt_dom_client_StyleInjector_toInject.join('');
    maybeReturn = com_google_gwt_dom_client_StyleInjector$StyleInjectorImplIE_$injectStyleSheet__Lcom_google_gwt_dom_client_StyleInjector$StyleInjectorImplIE_2Ljava_lang_String_2Lcom_google_gwt_dom_client_StyleElement_2((com_google_gwt_dom_client_StyleInjector$StyleInjectorImpl_$clinit__V() , css));
    !com_google_gwt_dom_client_StyleInjector_toInject && (toReturn = maybeReturn);
    com_google_gwt_dom_client_StyleInjector_toInject.length = 0;
  }
  if (com_google_gwt_dom_client_StyleInjector_toInjectAtEnd.length != 0) {
    css = com_google_gwt_dom_client_StyleInjector_toInjectAtEnd.join('');
    maybeReturn = com_google_gwt_dom_client_StyleInjector$StyleInjectorImplIE_$injectStyleSheetAtEnd__Lcom_google_gwt_dom_client_StyleInjector$StyleInjectorImplIE_2Ljava_lang_String_2Lcom_google_gwt_dom_client_StyleElement_2((com_google_gwt_dom_client_StyleInjector$StyleInjectorImpl_$clinit__V() , css));
    !com_google_gwt_dom_client_StyleInjector_toInjectAtEnd && (toReturn = maybeReturn);
    com_google_gwt_dom_client_StyleInjector_toInjectAtEnd.length = 0;
  }
  com_google_gwt_dom_client_StyleInjector_needsInjection = false;
  return toReturn;
}

function com_google_gwt_dom_client_StyleInjector_schedule__V(){
  com_google_gwt_dom_client_StyleInjector_$clinit__V();
  if (!com_google_gwt_dom_client_StyleInjector_needsInjection) {
    com_google_gwt_dom_client_StyleInjector_needsInjection = true;
    com_google_gwt_core_client_impl_SchedulerImpl_$scheduleFinally__Lcom_google_gwt_core_client_impl_SchedulerImpl_2Lcom_google_gwt_core_client_Scheduler$ScheduledCommand_2V((com_google_gwt_core_client_impl_SchedulerImpl_$clinit__V() , com_google_gwt_core_client_impl_SchedulerImpl_INSTANCE), com_google_gwt_dom_client_StyleInjector_flusher);
  }
}

var com_google_gwt_dom_client_StyleInjector_flusher, com_google_gwt_dom_client_StyleInjector_needsInjection = false, com_google_gwt_dom_client_StyleInjector_toInject, com_google_gwt_dom_client_StyleInjector_toInjectAtEnd, com_google_gwt_dom_client_StyleInjector_toInjectAtStart;
function com_google_gwt_dom_client_StyleInjector$1_StyleInjector$1__V(){
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(160, 1, {}, com_google_gwt_dom_client_StyleInjector$1_StyleInjector$1__V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1StyleInjector$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2('com.google.gwt.dom.client', 'StyleInjector/1', 160);
function com_google_gwt_dom_client_StyleInjector$StyleInjectorImpl_$clinit__V(){
  com_google_gwt_dom_client_StyleInjector$StyleInjectorImpl_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  com_google_gwt_dom_client_StyleInjector$StyleInjectorImplIE_$clinit__V();
}

function com_google_gwt_dom_client_StyleInjector$StyleInjectorImplIE_$clinit__V(){
  com_google_gwt_dom_client_StyleInjector$StyleInjectorImplIE_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  com_google_gwt_dom_client_StyleInjector$StyleInjectorImpl_$clinit__V();
  com_google_gwt_dom_client_StyleInjector$StyleInjectorImplIE_styleSheetLengths = com_google_gwt_lang_Array_initUnidimensionalArray__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2IIILjava_lang_Object_2(com_google_gwt_lang_ClassLiteralHolder_I_1classLit, $intern_8, 48, 31, 15, 1);
}

function com_google_gwt_dom_client_StyleInjector$StyleInjectorImplIE_$appendToStyleSheet__Lcom_google_gwt_dom_client_StyleInjector$StyleInjectorImplIE_2ILjava_lang_String_2ZLcom_google_gwt_dom_client_StyleElement_2(idx, contents, append){
  var style;
  style = $doc.styleSheets[idx];
  append?(style.cssText += contents , undefined):(style.cssText = contents + style.cssText , undefined);
  return style;
}

function com_google_gwt_dom_client_StyleInjector$StyleInjectorImplIE_$createNewStyleSheet__Lcom_google_gwt_dom_client_StyleInjector$StyleInjectorImplIE_2Ljava_lang_String_2Lcom_google_gwt_dom_client_StyleElement_2(contents){
  var style;
  style = $doc.createStyleSheet();
  style.cssText = contents;
  return style;
}

function com_google_gwt_dom_client_StyleInjector$StyleInjectorImplIE_$injectStyleSheet__Lcom_google_gwt_dom_client_StyleInjector$StyleInjectorImplIE_2Ljava_lang_String_2Lcom_google_gwt_dom_client_StyleElement_2(contents){
  var i, len, numStyles, shortestIdx, shortestLen;
  numStyles = $doc.styleSheets.length;
  if (numStyles < 31) {
    return com_google_gwt_dom_client_StyleInjector$StyleInjectorImplIE_$createNewStyleSheet__Lcom_google_gwt_dom_client_StyleInjector$StyleInjectorImplIE_2Ljava_lang_String_2Lcom_google_gwt_dom_client_StyleElement_2(contents);
  }
   else {
    shortestLen = 2147483647;
    shortestIdx = -1;
    for (i = 0; i < 31; i++) {
      len = com_google_gwt_dom_client_StyleInjector$StyleInjectorImplIE_styleSheetLengths[i];
      len == 0 && (len = com_google_gwt_dom_client_StyleInjector$StyleInjectorImplIE_styleSheetLengths[i] = $doc.styleSheets[i].cssText.length);
      if (len <= shortestLen) {
        shortestLen = len;
        shortestIdx = i;
      }
    }
    com_google_gwt_dom_client_StyleInjector$StyleInjectorImplIE_styleSheetLengths[shortestIdx] += contents.length;
    return com_google_gwt_dom_client_StyleInjector$StyleInjectorImplIE_$appendToStyleSheet__Lcom_google_gwt_dom_client_StyleInjector$StyleInjectorImplIE_2ILjava_lang_String_2ZLcom_google_gwt_dom_client_StyleElement_2(shortestIdx, contents, true);
  }
}

function com_google_gwt_dom_client_StyleInjector$StyleInjectorImplIE_$injectStyleSheetAtEnd__Lcom_google_gwt_dom_client_StyleInjector$StyleInjectorImplIE_2Ljava_lang_String_2Lcom_google_gwt_dom_client_StyleElement_2(contents){
  var documentStyleCount;
  documentStyleCount = $doc.styleSheets.length;
  if (documentStyleCount == 0) {
    return com_google_gwt_dom_client_StyleInjector$StyleInjectorImplIE_$createNewStyleSheet__Lcom_google_gwt_dom_client_StyleInjector$StyleInjectorImplIE_2Ljava_lang_String_2Lcom_google_gwt_dom_client_StyleElement_2(contents);
  }
  return com_google_gwt_dom_client_StyleInjector$StyleInjectorImplIE_$appendToStyleSheet__Lcom_google_gwt_dom_client_StyleInjector$StyleInjectorImplIE_2ILjava_lang_String_2ZLcom_google_gwt_dom_client_StyleElement_2(documentStyleCount - 1, contents, true);
}

function com_google_gwt_dom_client_StyleInjector$StyleInjectorImplIE_$injectStyleSheetAtStart__Lcom_google_gwt_dom_client_StyleInjector$StyleInjectorImplIE_2Ljava_lang_String_2Lcom_google_gwt_dom_client_StyleElement_2(contents){
  if ($doc.styleSheets.length == 0) {
    return com_google_gwt_dom_client_StyleInjector$StyleInjectorImplIE_$createNewStyleSheet__Lcom_google_gwt_dom_client_StyleInjector$StyleInjectorImplIE_2Ljava_lang_String_2Lcom_google_gwt_dom_client_StyleElement_2(contents);
  }
  return com_google_gwt_dom_client_StyleInjector$StyleInjectorImplIE_$appendToStyleSheet__Lcom_google_gwt_dom_client_StyleInjector$StyleInjectorImplIE_2ILjava_lang_String_2ZLcom_google_gwt_dom_client_StyleElement_2(0, contents, false);
}

var com_google_gwt_dom_client_StyleInjector$StyleInjectorImplIE_styleSheetLengths;
function com_google_gwt_lang_gwt_100046jelement_100046demo_100046Demo_1_1EntryMethodHolder_init__V(){
  $wnd.setTimeout($entry(com_google_gwt_useragent_client_UserAgentAsserter_assertCompileTimeUserAgent__V));
  com_google_gwt_user_client_DocumentModeAsserter_$onModuleLoad__Lcom_google_gwt_user_client_DocumentModeAsserter_2V();
  gwt_jelement_demo_client_Demo_$onModuleLoad__Lgwt_jelement_demo_client_Demo_2V(new gwt_jelement_demo_client_Demo_Demo__V);
}

function com_google_gwt_user_client_DocumentModeAsserter_$onModuleLoad__Lcom_google_gwt_user_client_DocumentModeAsserter_2V(){
  var allowedModes, currentMode, i;
  currentMode = $doc.compatMode;
  allowedModes = com_google_gwt_lang_Array_stampJavaTypeInfo__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_lang_Array_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1String_12_1classLit, 1), $intern_15, 2, 6, [$intern_16]);
  for (i = 0; i < allowedModes.length; i++) {
    if (java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(allowedModes[i], currentMode)) {
      return;
    }
  }
  allowedModes.length == 1 && java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z($intern_16, allowedModes[0]) && java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z('BackCompat', currentMode)?"GWT no longer supports Quirks Mode (document.compatMode=' BackCompat').<br>Make sure your application's host HTML page has a Standards Mode (document.compatMode=' CSS1Compat') doctype,<br>e.g. by using &lt;!doctype html&gt; at the start of your application's HTML page.<br><br>To continue using this unsupported rendering mode and risk layout problems, suppress this message by adding<br>the following line to your*.gwt.xml module file:<br>&nbsp;&nbsp;&lt;extend-configuration-property name=\"document.compatMode\" value=\"" + currentMode + '"/&gt;':"Your *.gwt.xml module configuration prohibits the use of the current document rendering mode (document.compatMode=' " + currentMode + "').<br>Modify your application's host HTML page doctype, or update your custom " + "'document.compatMode' configuration property settings.";
}

function com_google_gwt_useragent_client_UserAgentAsserter_assertCompileTimeUserAgent__V(){
  var runtimeValue;
  runtimeValue = com_google_gwt_useragent_client_UserAgentImplIe9_$getRuntimeValue__Lcom_google_gwt_useragent_client_UserAgentImplIe9_2Ljava_lang_String_2();
  if (!java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z('ie9', runtimeValue)) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new com_google_gwt_useragent_client_UserAgentAsserter$UserAgentAssertionError_UserAgentAsserter$UserAgentAssertionError__Ljava_lang_String_2Ljava_lang_String_2V(runtimeValue));
  }
}

function java_lang_Error_Error__Ljava_lang_String_2V(message){
  java_lang_Throwable_Throwable__Ljava_lang_String_2V.call(this, message);
}

function java_lang_Error_Error__Ljava_lang_String_2Ljava_lang_Throwable_2V(message){
  this.java_lang_Throwable_detailMessage = message;
  java_lang_Throwable_$fillInStackTrace__Ljava_lang_Throwable_2Ljava_lang_Throwable_2(this);
  this.private$java_lang_Throwable$initializeBackingError__V();
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(16, 8, $intern_17, java_lang_Error_Error__Ljava_lang_String_2V);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Error_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_12, 'Error', 16);
com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(11, 16, $intern_17);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1AssertionError_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_12, 'AssertionError', 11);
function com_google_gwt_useragent_client_UserAgentAsserter$UserAgentAssertionError_UserAgentAsserter$UserAgentAssertionError__Ljava_lang_String_2Ljava_lang_String_2V(runtimeValue){
  var java_lang_AssertionError_AssertionError__Ljava_lang_Object_2V_lastArg_0;
  java_lang_Error_Error__Ljava_lang_String_2Ljava_lang_Throwable_2V.call(this, (java_lang_AssertionError_AssertionError__Ljava_lang_Object_2V_lastArg_0 = $intern_18 + runtimeValue + $intern_19 + $intern_20 == null?'null':com_google_gwt_lang_Runtime_toString__Ljava_lang_Object_2Ljava_lang_String_2($intern_18 + runtimeValue + $intern_19 + $intern_20) , com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z($intern_18 + runtimeValue + $intern_19 + $intern_20, 8)?com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2($intern_18 + runtimeValue + $intern_19 + $intern_20, 8):null , java_lang_AssertionError_AssertionError__Ljava_lang_Object_2V_lastArg_0));
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(70, 11, $intern_17, com_google_gwt_useragent_client_UserAgentAsserter$UserAgentAssertionError_UserAgentAsserter$UserAgentAssertionError__Ljava_lang_String_2Ljava_lang_String_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1useragent_1client_1UserAgentAsserter$UserAgentAssertionError_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2('com.google.gwt.useragent.client', 'UserAgentAsserter/UserAgentAssertionError', 70);
function com_google_gwt_useragent_client_UserAgentImplIe9_$getRuntimeValue__Lcom_google_gwt_useragent_client_UserAgentImplIe9_2Ljava_lang_String_2(){
  var ua = navigator.userAgent.toLowerCase();
  var docMode = $doc.documentMode;
  if (function(){
    return ua.indexOf('webkit') != -1;
  }
  ())
    return 'safari';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 10 && docMode < 11;
  }
  ())
    return 'ie10';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 9 && docMode < 11;
  }
  ())
    return 'ie9';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 8 && docMode < 11;
  }
  ())
    return 'ie8';
  if (function(){
    return ua.indexOf('gecko') != -1 || docMode >= 11;
  }
  ())
    return 'gecko1_8';
  return 'unknown';
}

function gwt_jelement_core_IsObject_$object__Lgwt_jelement_core_IsObject_2Lgwt_jelement_core_JsObject_2(this$static){
  return com_google_gwt_lang_Cast_castToJsObject__Ljava_lang_Object_2Ljava_lang_Object_2(this$static);
}

function gwt_jelement_animation_AnimationEffectTimingProperties_$setDirection__Lgwt_jelement_animation_AnimationEffectTimingProperties_2Lgwt_jelement_animation_PlaybackDirection_2V(this$static, direction){
  this$static.direction = direction.gwt_jelement_animation_PlaybackDirection_internalValue;
}

function gwt_jelement_animation_AnimationEffectTimingProperties_$setIterations__Lgwt_jelement_animation_AnimationEffectTimingProperties_2DV(this$static, iterations){
  this$static.iterations = iterations;
}

function java_lang_Enum_$compareTo__Ljava_lang_Enum_2Ljava_lang_Enum_2I(this$static, other){
  return this$static.java_lang_Enum_ordinal - other.java_lang_Enum_ordinal;
}

function java_lang_Enum_Enum__Ljava_lang_String_2IV(name_0, ordinal){
  this.java_lang_Enum_name = name_0;
  this.java_lang_Enum_ordinal = ordinal;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(15, 1, {4:1, 20:1, 15:1});
_.compareTo__Ljava_lang_Object_2I = function java_lang_Enum_compareTo__Ljava_lang_Object_2I(other){
  return java_lang_Enum_$compareTo__Ljava_lang_Enum_2Ljava_lang_Enum_2I(this, com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(other, 15));
}
;
_.compareTo = function java_lang_Enum_compareTo__Ljava_lang_Enum_2I(other){
  return this.java_lang_Enum_ordinal - other.java_lang_Enum_ordinal;
}
;
_.equals = function java_lang_Enum_equals__Ljava_lang_Object_2Z(other){
  return this === other;
}
;
_.equals__Ljava_lang_Object_2Z = function(other){
  return this.equals(other);
}
;
_.hashCode = function java_lang_Enum_hashCode__I(){
  return javaemul_internal_ObjectHashing_getHashCode__Ljava_lang_Object_2I(this);
}
;
_.hashCode__I = function(){
  return this.hashCode();
}
;
_.name = function java_lang_Enum_name__Ljava_lang_String_2(){
  return this.java_lang_Enum_name != null?this.java_lang_Enum_name:'' + this.java_lang_Enum_ordinal;
}
;
_.ordinal = function java_lang_Enum_ordinal__I(){
  return this.java_lang_Enum_ordinal;
}
;
_.toString = function java_lang_Enum_toString__Ljava_lang_String_2(){
  return this.java_lang_Enum_name != null?this.java_lang_Enum_name:'' + this.java_lang_Enum_ordinal;
}
;
_.java_lang_Enum_ordinal = 0;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Enum_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_12, 'Enum', 15);
function gwt_jelement_animation_PlaybackDirection_$clinit__V(){
  gwt_jelement_animation_PlaybackDirection_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  gwt_jelement_animation_PlaybackDirection_NORMAL = new gwt_jelement_animation_PlaybackDirection_PlaybackDirection__Ljava_lang_String_2ILjava_lang_String_2V('NORMAL', 0, 'normal');
  gwt_jelement_animation_PlaybackDirection_REVERSE = new gwt_jelement_animation_PlaybackDirection_PlaybackDirection__Ljava_lang_String_2ILjava_lang_String_2V('REVERSE', 1, 'reverse');
  gwt_jelement_animation_PlaybackDirection_ALTERNATE = new gwt_jelement_animation_PlaybackDirection_PlaybackDirection__Ljava_lang_String_2ILjava_lang_String_2V('ALTERNATE', 2, 'alternate');
  gwt_jelement_animation_PlaybackDirection_ALTERNATE_1REVERSE = new gwt_jelement_animation_PlaybackDirection_PlaybackDirection__Ljava_lang_String_2ILjava_lang_String_2V('ALTERNATE_REVERSE', 3, 'alternate-reverse');
}

function gwt_jelement_animation_PlaybackDirection_PlaybackDirection__Ljava_lang_String_2ILjava_lang_String_2V(enum$name, enum$ordinal, internalValue){
  java_lang_Enum_Enum__Ljava_lang_String_2IV.call(this, enum$name, enum$ordinal);
  this.gwt_jelement_animation_PlaybackDirection_internalValue = internalValue;
}

function gwt_jelement_animation_PlaybackDirection_values___3Lgwt_jelement_animation_PlaybackDirection_2(){
  gwt_jelement_animation_PlaybackDirection_$clinit__V();
  return com_google_gwt_lang_Array_stampJavaTypeInfo__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_lang_Array_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(com_google_gwt_lang_ClassLiteralHolder_Lgwt_1jelement_1animation_1PlaybackDirection_12_1classLit, 1), $intern_15, 30, 0, [gwt_jelement_animation_PlaybackDirection_NORMAL, gwt_jelement_animation_PlaybackDirection_REVERSE, gwt_jelement_animation_PlaybackDirection_ALTERNATE, gwt_jelement_animation_PlaybackDirection_ALTERNATE_1REVERSE]);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(30, 15, {30:1, 4:1, 20:1, 15:1}, gwt_jelement_animation_PlaybackDirection_PlaybackDirection__Ljava_lang_String_2ILjava_lang_String_2V);
var gwt_jelement_animation_PlaybackDirection_ALTERNATE, gwt_jelement_animation_PlaybackDirection_ALTERNATE_1REVERSE, gwt_jelement_animation_PlaybackDirection_NORMAL, gwt_jelement_animation_PlaybackDirection_REVERSE;
var com_google_gwt_lang_ClassLiteralHolder_Lgwt_1jelement_1animation_1PlaybackDirection_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2('gwt.jelement.animation', 'PlaybackDirection', 30, gwt_jelement_animation_PlaybackDirection_values___3Lgwt_jelement_animation_PlaybackDirection_2);
function gwt_jelement_core_ArrayLike_$get__Lgwt_jelement_core_ArrayLike_2DLjava_lang_Object_2(this$static, index_0){
  return com_google_gwt_lang_Cast_castToJsObject__Ljava_lang_Object_2Ljava_lang_Object_2(this$static)[index_0];
}

function gwt_jelement_core_ArrayLike_$getLength__Lgwt_jelement_core_ArrayLike_2D(this$static){
  return com_google_gwt_lang_Cast_castToJsObject__Ljava_lang_Object_2Ljava_lang_Object_2(this$static)['length'];
}

function gwt_jelement_core_Any_$asObject__Lgwt_jelement_core_Any_2Ljava_util_function_Consumer_2Lgwt_jelement_core_AnyHandler_2(this$static, objectConsumer){
  return gwt_jelement_core_Any$DefaultAnyHandler_$dispatchIf__Lgwt_jelement_core_Any$DefaultAnyHandler_2Ljava_lang_String_2Ljava_util_function_Consumer_2Lgwt_jelement_core_AnyHandler_2(new gwt_jelement_core_Any$DefaultAnyHandler_Any$DefaultAnyHandler__Lgwt_jelement_core_Any_2V(this$static), objectConsumer);
}

function gwt_jelement_core_Any$CompletedAnyHandler_Any$CompletedAnyHandler__V(){
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(159, 1, {}, gwt_jelement_core_Any$CompletedAnyHandler_Any$CompletedAnyHandler__V);
_.otherwise__Ljava_util_function_Consumer_2V = function gwt_jelement_core_Any$CompletedAnyHandler_otherwise__Ljava_util_function_Consumer_2V(consumer){
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lgwt_1jelement_1core_1Any$CompletedAnyHandler_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_21, 'Any/CompletedAnyHandler', 159);
function gwt_jelement_core_Any$DefaultAnyHandler_$dispatchIf__Lgwt_jelement_core_Any$DefaultAnyHandler_2Ljava_lang_String_2Ljava_util_function_Consumer_2Lgwt_jelement_core_AnyHandler_2(this$static, consumer){
  if (gwt_jelement_core_Js_isTypeName__Ljava_lang_Object_2Ljava_lang_String_2Z(this$static.gwt_jelement_core_Any$DefaultAnyHandler_anyValue, 'Object')) {
    gwt_jelement_demo_client_WebGlDemo$lambda$3$Type_$accept__Lgwt_jelement_demo_client_WebGlDemo$lambda$3$Type_2Ljava_lang_Object_2V(consumer, this$static.gwt_jelement_core_Any$DefaultAnyHandler_anyValue);
    return new gwt_jelement_core_Any$CompletedAnyHandler_Any$CompletedAnyHandler__V;
  }
  return this$static;
}

function gwt_jelement_core_Any$DefaultAnyHandler_Any$DefaultAnyHandler__Lgwt_jelement_core_Any_2V(anyValue){
  this.gwt_jelement_core_Any$DefaultAnyHandler_anyValue = anyValue;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(158, 1, {}, gwt_jelement_core_Any$DefaultAnyHandler_Any$DefaultAnyHandler__Lgwt_jelement_core_Any_2V);
_.otherwise__Ljava_util_function_Consumer_2V = function gwt_jelement_core_Any$DefaultAnyHandler_otherwise__Ljava_util_function_Consumer_2V(consumer){
  gwt_jelement_demo_client_WebGlDemo$lambda$4$Type_$accept__Lgwt_jelement_demo_client_WebGlDemo$lambda$4$Type_2Ljava_lang_Object_2V(this.gwt_jelement_core_Any$DefaultAnyHandler_anyValue);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lgwt_1jelement_1core_1Any$DefaultAnyHandler_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_21, 'Any/DefaultAnyHandler', 158);
function gwt_jelement_core_Js_isTypeName__Ljava_lang_Object_2Ljava_lang_String_2Z(object, typeName){
  return Object.prototype.toString.call(object).replace(/(?:\[object |])/g, '') === typeName;
}

function gwt_jelement_core_Js_with__Lgwt_jelement_core_JsObject_2Ljava_lang_String_2DLgwt_jelement_core_JsObject_2(object, key, value_0){
  object[key] = value_0;
  return object;
}

function gwt_jelement_core_Js_with__Lgwt_jelement_core_JsObject_2Ljava_lang_String_2ILgwt_jelement_core_JsObject_2(object, key, value_0){
  object[key] = value_0;
  return object;
}

function gwt_jelement_core_Js_with__Lgwt_jelement_core_JsObject_2Ljava_lang_String_2Ljava_lang_Object_2Lgwt_jelement_core_JsObject_2(object, key, value_0){
  object[key] = value_0;
  return object;
}

function gwt_jelement_demo_client_AbstractDemo_$execute__Lgwt_jelement_demo_client_AbstractDemo_2Lgwt_jelement_html_HTMLDivElement_2V(this$static, demoFrame){
  var contentHeight, e, sourceContainer;
  demoFrame.innerHTML = this$static.getTemplate__Lcom_google_gwt_resources_client_TextResource_2().getText__Ljava_lang_String_2() + '<a href="https://github.com/gwt-jelement/gwt-jelement-demo">\r\n    <img style="position: absolute; top: 0; right: 0; border: 0;"\r\n         src="https://camo.githubusercontent.com/38ef81f8aca64bb9a64448d0d70f1308ef5341ab/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f6461726b626c75655f3132313632312e706e67"\r\n         alt="Fork me on GitHub"\r\n         data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png">\r\n<\/a>';
  this$static.gwt_jelement_demo_client_AbstractDemo_active = true;
  try {
    this$static.execute__V();
  }
   catch ($e0) {
    $e0 = com_google_gwt_lang_Exceptions_toJava__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
    if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z($e0, 29)) {
      e = $e0;
      $wnd.window.window.console.error(e.getThrown__Ljava_lang_Object_2());
    }
     else 
      throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
  }
  contentHeight = demoFrame.offsetHeight;
  sourceContainer = com_google_gwt_lang_Cast_castToNative__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2($wnd.window.document.createElement('pre'), $wnd.HTMLPreElement);
  sourceContainer.innerText = this$static.getSource__Lcom_google_gwt_resources_client_TextResource_2().getText__Ljava_lang_String_2();
  sourceContainer.style.setProperty('height', 'calc(100vh - ' + (contentHeight + 20) + 'px)');
  sourceContainer.style.setProperty('overflow', 'auto');
  sourceContainer.className = 'lang-Java';
  demoFrame.appendChild(sourceContainer);
  $wnd.hljs.highlightBlock(sourceContainer);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(13, 1, $intern_22);
_.package_private$gwt_jelement_demo_client$setInactive__V = function gwt_jelement_demo_client_AbstractDemo_setInactive__V(){
  this.gwt_jelement_demo_client_AbstractDemo_active = false;
}
;
_.gwt_jelement_demo_client_AbstractDemo_active = false;
var com_google_gwt_lang_ClassLiteralHolder_Lgwt_1jelement_1demo_1client_1AbstractDemo_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_23, 'AbstractDemo', 13);
function gwt_jelement_demo_client_BatteryDemo_$setup__Lgwt_jelement_demo_client_BatteryDemo_2Lgwt_jelement_battery_BatteryManager_2Ljava_lang_Object_2(this$static, batteryManager){
  var updateEventHandler;
  this$static.gwt_jelement_demo_client_BatteryDemo_batteryManager = batteryManager;
  updateEventHandler = com_google_gwt_lang_Runtime_makeLambdaFunction__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(gwt_jelement_demo_client_BatteryDemo$lambda$0$Type_BatteryDemo$lambda$0$Type__Lgwt_jelement_demo_client_BatteryDemo_2Lgwt_jelement_battery_BatteryManager_2V.prototype.callback__Lgwt_jelement_events_Event_2Ljava_lang_Object_2, gwt_jelement_demo_client_BatteryDemo$lambda$0$Type_BatteryDemo$lambda$0$Type__Lgwt_jelement_demo_client_BatteryDemo_2Lgwt_jelement_battery_BatteryManager_2V, [this$static, batteryManager]);
  batteryManager.onchargingchange = updateEventHandler;
  batteryManager.onchargingtimechange = updateEventHandler;
  batteryManager.ondischargingtimechange = updateEventHandler;
  batteryManager.onlevelchange = updateEventHandler;
  gwt_jelement_demo_client_BatteryDemo_$updateStatus__Lgwt_jelement_demo_client_BatteryDemo_2Lgwt_jelement_battery_BatteryManager_2V(this$static, batteryManager);
  return null;
}

function gwt_jelement_demo_client_BatteryDemo_$toTimString__Lgwt_jelement_demo_client_BatteryDemo_2DLjava_lang_String_2(time){
  var hours, minutes, result;
  if (!isNaN(time) && !isFinite(time)) {
    return 'time left: not available';
  }
  if (time == 0) {
    return '&nbsp;';
  }
  result = '';
  hours = $wnd.Math.trunc(time / 3600);
  hours != 0 && (result += hours + ' hr ');
  minutes = $wnd.Math.trunc((time - hours * 3600) / 60);
  minutes != 0 && (result += minutes + ' min');
  return 'time left: ' + result;
}

function gwt_jelement_demo_client_BatteryDemo_$updateStatus__Lgwt_jelement_demo_client_BatteryDemo_2Lgwt_jelement_battery_BatteryManager_2V(this$static, batteryManager){
  var batteryInner, level, statusString;
  if (this$static.gwt_jelement_demo_client_AbstractDemo_active) {
    batteryInner = com_google_gwt_lang_Cast_castToNative__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2($wnd.window.document.querySelector('.battery-inner'), $wnd.HTMLDivElement);
    level = $wnd.Math.trunc(100 * batteryManager.level);
    batteryManager.charging?(statusString = 'Plugged in, ' + level + '%<br>' + gwt_jelement_demo_client_BatteryDemo_$toTimString__Lgwt_jelement_demo_client_BatteryDemo_2DLjava_lang_String_2(batteryManager.chargingTime)):(statusString = 'On Battery, ' + level + '%<br>' + gwt_jelement_demo_client_BatteryDemo_$toTimString__Lgwt_jelement_demo_client_BatteryDemo_2DLjava_lang_String_2(batteryManager.dischargingTime));
    batteryInner.style.setProperty('width', level + '%');
    batteryInner.classList.remove('high', 'medium', 'low');
    batteryInner.classList.add(level > 66?'high':level > 33?'medium':'low');
    $wnd.window.document.querySelector($intern_24).innerHTML = statusString;
  }
}

function gwt_jelement_demo_client_BatteryDemo_BatteryDemo__V(){
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(86, 13, $intern_22, gwt_jelement_demo_client_BatteryDemo_BatteryDemo__V);
_.execute__V = function gwt_jelement_demo_client_BatteryDemo_execute__V(){
  var statusDiv;
  if ('getBattery' in gwt_jelement_core_IsObject_$object__Lgwt_jelement_core_IsObject_2Lgwt_jelement_core_JsObject_2($wnd.window.navigator)) {
    $wnd.window.navigator.getBattery().then(com_google_gwt_lang_Runtime_makeLambdaFunction__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(gwt_jelement_demo_client_BatteryDemo$0methodref$setup$Type_BatteryDemo$0methodref$setup$Type__Lgwt_jelement_demo_client_BatteryDemo_2V.prototype.fullfilled__Ljava_lang_Object_2Ljava_lang_Object_2, gwt_jelement_demo_client_BatteryDemo$0methodref$setup$Type_BatteryDemo$0methodref$setup$Type__Lgwt_jelement_demo_client_BatteryDemo_2V, [this]));
  }
   else {
    statusDiv = com_google_gwt_lang_Cast_castToNative__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2($wnd.window.document.querySelector($intern_24), $wnd.HTMLDivElement);
    statusDiv.innerHTML = 'Not supported in this browser';
    statusDiv.classList.add('error');
  }
}
;
_.getName__Ljava_lang_String_2 = function gwt_jelement_demo_client_BatteryDemo_getName__Ljava_lang_String_2(){
  return 'battery';
}
;
_.getSource__Lcom_google_gwt_resources_client_TextResource_2 = function gwt_jelement_demo_client_BatteryDemo_getSource__Lcom_google_gwt_resources_client_TextResource_2(){
  return gwt_jelement_demo_client_SourceClientBundle_1default_1InlineClientBundleGenerator$getBatterySourceInitializer_$clinit__V() , gwt_jelement_demo_client_SourceClientBundle_1default_1InlineClientBundleGenerator_getBatterySource;
}
;
_.getTemplate__Lcom_google_gwt_resources_client_TextResource_2 = function gwt_jelement_demo_client_BatteryDemo_getTemplate__Lcom_google_gwt_resources_client_TextResource_2(){
  return gwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator$getBatteryHtmlInitializer_$clinit__V() , gwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator_getBatteryHtml;
}
;
_.getTitle__Ljava_lang_String_2 = function gwt_jelement_demo_client_BatteryDemo_getTitle__Ljava_lang_String_2(){
  return 'Battery Status Demo';
}
;
_.setInactive__V = function gwt_jelement_demo_client_BatteryDemo_setInactive__V(){
  if (this.gwt_jelement_demo_client_BatteryDemo_batteryManager != null) {
    this.gwt_jelement_demo_client_BatteryDemo_batteryManager.ondischargingtimechange = null;
    this.gwt_jelement_demo_client_BatteryDemo_batteryManager.onlevelchange = null;
    this.gwt_jelement_demo_client_BatteryDemo_batteryManager.onchargingtimechange = null;
    this.gwt_jelement_demo_client_BatteryDemo_batteryManager.onchargingchange = null;
  }
  this.gwt_jelement_demo_client_AbstractDemo_active = false;
}
;
_.package_private$gwt_jelement_demo_client$setInactive__V = function(){
  this.setInactive__V();
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lgwt_1jelement_1demo_1client_1BatteryDemo_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_23, 'BatteryDemo', 86);
function gwt_jelement_demo_client_BatteryDemo$0methodref$setup$Type_BatteryDemo$0methodref$setup$Type__Lgwt_jelement_demo_client_BatteryDemo_2V($$outer_0){
  this.gwt_jelement_demo_client_BatteryDemo$0methodref$setup$Type_$$outer_10 = $$outer_0;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(225, $wnd.Function, {}, gwt_jelement_demo_client_BatteryDemo$0methodref$setup$Type_BatteryDemo$0methodref$setup$Type__Lgwt_jelement_demo_client_BatteryDemo_2V);
_.fullfilled__Ljava_lang_Object_2Ljava_lang_Object_2 = function gwt_jelement_demo_client_BatteryDemo$0methodref$setup$Type_fullfilled__Ljava_lang_Object_2Ljava_lang_Object_2(arg0){
  return gwt_jelement_demo_client_BatteryDemo_$setup__Lgwt_jelement_demo_client_BatteryDemo_2Lgwt_jelement_battery_BatteryManager_2Ljava_lang_Object_2(this.gwt_jelement_demo_client_BatteryDemo$0methodref$setup$Type_$$outer_10, com_google_gwt_lang_Cast_castToNative__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(arg0, $wnd.BatteryManager));
}
;
function gwt_jelement_demo_client_BatteryDemo$lambda$0$Type_BatteryDemo$lambda$0$Type__Lgwt_jelement_demo_client_BatteryDemo_2Lgwt_jelement_battery_BatteryManager_2V($$outer_0, batteryManager_1){
  this.gwt_jelement_demo_client_BatteryDemo$lambda$0$Type_$$outer_10 = $$outer_0;
  this.gwt_jelement_demo_client_BatteryDemo$lambda$0$Type_batteryManager_11 = batteryManager_1;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(226, $wnd.Function, {}, gwt_jelement_demo_client_BatteryDemo$lambda$0$Type_BatteryDemo$lambda$0$Type__Lgwt_jelement_demo_client_BatteryDemo_2Lgwt_jelement_battery_BatteryManager_2V);
_.callback__Lgwt_jelement_events_Event_2Ljava_lang_Object_2 = function gwt_jelement_demo_client_BatteryDemo$lambda$0$Type_callback__Lgwt_jelement_events_Event_2Ljava_lang_Object_2(arg0){
  return gwt_jelement_demo_client_BatteryDemo_$updateStatus__Lgwt_jelement_demo_client_BatteryDemo_2Lgwt_jelement_battery_BatteryManager_2V(this.gwt_jelement_demo_client_BatteryDemo$lambda$0$Type_$$outer_10, this.gwt_jelement_demo_client_BatteryDemo$lambda$0$Type_batteryManager_11) , null;
}
;
function gwt_jelement_demo_client_BootstrapButton_$addClickListener__Lgwt_jelement_demo_client_BootstrapButton_2Lgwt_jelement_events_EventListener_2V(this$static, eventListener){
  this$static.gwt_jelement_demo_client_BootstrapButton_button.addEventListener($intern_25, eventListener);
}

function gwt_jelement_demo_client_BootstrapButton_$appendTo__Lgwt_jelement_demo_client_BootstrapButton_2Lgwt_jelement_dom_Element_2V(this$static, element){
  element.appendChild(this$static.gwt_jelement_demo_client_BootstrapButton_button);
}

function gwt_jelement_demo_client_BootstrapButton_$setDisabled__Lgwt_jelement_demo_client_BootstrapButton_2ZV(this$static, disabled){
  disabled?this$static.gwt_jelement_demo_client_BootstrapButton_button.setAttribute($intern_26, 'disabaled'):this$static.gwt_jelement_demo_client_BootstrapButton_button.removeAttribute($intern_26);
}

function gwt_jelement_demo_client_BootstrapButton_BootstrapButton__Ljava_lang_String_2Lgwt_jelement_demo_client_BootstrapButton$ButtonStyle_2Ljava_lang_String_2V(caption, buttonStyle, icon){
  var gwt_jelement_demo_client_BootstrapButton_BootstrapButton__Ljava_lang_String_2Lgwt_jelement_demo_client_BootstrapButton$ButtonStyle_2Lgwt_jelement_demo_client_BootstrapButton$ButtonSize_2Ljava_lang_String_2V_span_0;
  this.gwt_jelement_demo_client_BootstrapButton_button = $wnd.window.document.createElement('button');
  this.gwt_jelement_demo_client_BootstrapButton_button.className = 'btn btn-' + (buttonStyle.java_lang_Enum_name != null?buttonStyle.java_lang_Enum_name:'' + buttonStyle.java_lang_Enum_ordinal).toLowerCase() + '';
  gwt_jelement_demo_client_BootstrapButton_BootstrapButton__Ljava_lang_String_2Lgwt_jelement_demo_client_BootstrapButton$ButtonStyle_2Lgwt_jelement_demo_client_BootstrapButton$ButtonSize_2Ljava_lang_String_2V_span_0 = $wnd.window.document.createElement('span');
  gwt_jelement_demo_client_BootstrapButton_BootstrapButton__Ljava_lang_String_2Lgwt_jelement_demo_client_BootstrapButton$ButtonStyle_2Lgwt_jelement_demo_client_BootstrapButton$ButtonSize_2Ljava_lang_String_2V_span_0.className = 'glyphicon glyphicon-' + icon;
  gwt_jelement_demo_client_BootstrapButton_BootstrapButton__Ljava_lang_String_2Lgwt_jelement_demo_client_BootstrapButton$ButtonStyle_2Lgwt_jelement_demo_client_BootstrapButton$ButtonSize_2Ljava_lang_String_2V_span_0.setAttribute('aria-hidden', 'true');
  this.gwt_jelement_demo_client_BootstrapButton_button.appendChild(gwt_jelement_demo_client_BootstrapButton_BootstrapButton__Ljava_lang_String_2Lgwt_jelement_demo_client_BootstrapButton$ButtonStyle_2Lgwt_jelement_demo_client_BootstrapButton$ButtonSize_2Ljava_lang_String_2V_span_0);
  this.gwt_jelement_demo_client_BootstrapButton_textNode = $wnd.window.document.createTextNode(caption);
  this.gwt_jelement_demo_client_BootstrapButton_button.appendChild(this.gwt_jelement_demo_client_BootstrapButton_textNode);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(47, 1, {}, gwt_jelement_demo_client_BootstrapButton_BootstrapButton__Ljava_lang_String_2Lgwt_jelement_demo_client_BootstrapButton$ButtonStyle_2Ljava_lang_String_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lgwt_1jelement_1demo_1client_1BootstrapButton_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_23, 'BootstrapButton', 47);
function gwt_jelement_demo_client_BootstrapButton$ButtonStyle_$clinit__V(){
  gwt_jelement_demo_client_BootstrapButton$ButtonStyle_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  gwt_jelement_demo_client_BootstrapButton$ButtonStyle_DEFAULT = new gwt_jelement_demo_client_BootstrapButton$ButtonStyle_BootstrapButton$ButtonStyle__Ljava_lang_String_2IV('DEFAULT', 0);
  gwt_jelement_demo_client_BootstrapButton$ButtonStyle_PRIMARY = new gwt_jelement_demo_client_BootstrapButton$ButtonStyle_BootstrapButton$ButtonStyle__Ljava_lang_String_2IV('PRIMARY', 1);
  gwt_jelement_demo_client_BootstrapButton$ButtonStyle_SUCCESS = new gwt_jelement_demo_client_BootstrapButton$ButtonStyle_BootstrapButton$ButtonStyle__Ljava_lang_String_2IV('SUCCESS', 2);
  gwt_jelement_demo_client_BootstrapButton$ButtonStyle_INFO = new gwt_jelement_demo_client_BootstrapButton$ButtonStyle_BootstrapButton$ButtonStyle__Ljava_lang_String_2IV('INFO', 3);
  gwt_jelement_demo_client_BootstrapButton$ButtonStyle_WARNING = new gwt_jelement_demo_client_BootstrapButton$ButtonStyle_BootstrapButton$ButtonStyle__Ljava_lang_String_2IV('WARNING', 4);
  gwt_jelement_demo_client_BootstrapButton$ButtonStyle_DANGER = new gwt_jelement_demo_client_BootstrapButton$ButtonStyle_BootstrapButton$ButtonStyle__Ljava_lang_String_2IV('DANGER', 5);
  gwt_jelement_demo_client_BootstrapButton$ButtonStyle_LINK = new gwt_jelement_demo_client_BootstrapButton$ButtonStyle_BootstrapButton$ButtonStyle__Ljava_lang_String_2IV('LINK', 6);
}

function gwt_jelement_demo_client_BootstrapButton$ButtonStyle_BootstrapButton$ButtonStyle__Ljava_lang_String_2IV(enum$name, enum$ordinal){
  java_lang_Enum_Enum__Ljava_lang_String_2IV.call(this, enum$name, enum$ordinal);
}

function gwt_jelement_demo_client_BootstrapButton$ButtonStyle_values___3Lgwt_jelement_demo_client_BootstrapButton$ButtonStyle_2(){
  gwt_jelement_demo_client_BootstrapButton$ButtonStyle_$clinit__V();
  return com_google_gwt_lang_Array_stampJavaTypeInfo__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_lang_Array_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(com_google_gwt_lang_ClassLiteralHolder_Lgwt_1jelement_1demo_1client_1BootstrapButton$ButtonStyle_12_1classLit, 1), $intern_15, 21, 0, [gwt_jelement_demo_client_BootstrapButton$ButtonStyle_DEFAULT, gwt_jelement_demo_client_BootstrapButton$ButtonStyle_PRIMARY, gwt_jelement_demo_client_BootstrapButton$ButtonStyle_SUCCESS, gwt_jelement_demo_client_BootstrapButton$ButtonStyle_INFO, gwt_jelement_demo_client_BootstrapButton$ButtonStyle_WARNING, gwt_jelement_demo_client_BootstrapButton$ButtonStyle_DANGER, gwt_jelement_demo_client_BootstrapButton$ButtonStyle_LINK]);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(21, 15, {21:1, 4:1, 20:1, 15:1}, gwt_jelement_demo_client_BootstrapButton$ButtonStyle_BootstrapButton$ButtonStyle__Ljava_lang_String_2IV);
var gwt_jelement_demo_client_BootstrapButton$ButtonStyle_DANGER, gwt_jelement_demo_client_BootstrapButton$ButtonStyle_DEFAULT, gwt_jelement_demo_client_BootstrapButton$ButtonStyle_INFO, gwt_jelement_demo_client_BootstrapButton$ButtonStyle_LINK, gwt_jelement_demo_client_BootstrapButton$ButtonStyle_PRIMARY, gwt_jelement_demo_client_BootstrapButton$ButtonStyle_SUCCESS, gwt_jelement_demo_client_BootstrapButton$ButtonStyle_WARNING;
var com_google_gwt_lang_ClassLiteralHolder_Lgwt_1jelement_1demo_1client_1BootstrapButton$ButtonStyle_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_23, 'BootstrapButton/ButtonStyle', 21, gwt_jelement_demo_client_BootstrapButton$ButtonStyle_values___3Lgwt_jelement_demo_client_BootstrapButton$ButtonStyle_2);
function gwt_jelement_demo_client_Canvas2DDemo_$drawPlanets__Lgwt_jelement_demo_client_Canvas2DDemo_2Lgwt_jelement_canvas2d_CanvasRenderingContext2D_2Lgwt_jelement_html_HTMLImageElement_2Lgwt_jelement_html_HTMLImageElement_2Lgwt_jelement_html_HTMLImageElement_2V(this$static, ctx, earth, moon, sun_0){
  var time;
  ctx.globalCompositeOperation = 'destination-over';
  ctx.clearRect(0, 0, 300, 300);
  ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
  ctx.strokeStyle = 'rgba(0, 153, 255, 0.4)';
  ctx.save();
  ctx.translate(150, 150);
  time = new $wnd.Date;
  ctx.rotate(2 * $wnd.Math.PI / 60 * time.getSeconds() + 2 * $wnd.Math.PI / 60000 * time.getMilliseconds());
  ctx.translate(105, 0);
  ctx.fillRect(0, -12, 50, 24);
  ctx.drawImage(earth, -12, -12);
  ctx.save();
  ctx.rotate(2 * $wnd.Math.PI / 6 * time.getSeconds() + 2 * $wnd.Math.PI / 6000 * time.getMilliseconds());
  ctx.translate(0, 28.5);
  ctx.drawImage(moon, -3.5, -3.5);
  ctx.restore();
  ctx.restore();
  ctx.beginPath();
  ctx.arc(150, 150, 105, 0, $wnd.Math.PI * 2, false);
  ctx.stroke();
  ctx.drawImage(sun_0, 0, 0, 300, 300);
  this$static.gwt_jelement_demo_client_AbstractDemo_active && $wnd.window.window.requestAnimationFrame(com_google_gwt_lang_Runtime_makeLambdaFunction__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(gwt_jelement_demo_client_Canvas2DDemo$lambda$1$Type_Canvas2DDemo$lambda$1$Type__Lgwt_jelement_demo_client_Canvas2DDemo_2Lgwt_jelement_canvas2d_CanvasRenderingContext2D_2Lgwt_jelement_html_HTMLImageElement_2Lgwt_jelement_html_HTMLImageElement_2Lgwt_jelement_html_HTMLImageElement_2V.prototype.handleEvent__DV, gwt_jelement_demo_client_Canvas2DDemo$lambda$1$Type_Canvas2DDemo$lambda$1$Type__Lgwt_jelement_demo_client_Canvas2DDemo_2Lgwt_jelement_canvas2d_CanvasRenderingContext2D_2Lgwt_jelement_html_HTMLImageElement_2Lgwt_jelement_html_HTMLImageElement_2Lgwt_jelement_html_HTMLImageElement_2V, [this$static, ctx, earth, moon, sun_0]));
}

function gwt_jelement_demo_client_Canvas2DDemo_Canvas2DDemo__V(){
}

function gwt_jelement_demo_client_Canvas2DDemo_lambda$2__Lgwt_jelement_canvas2d_CanvasRenderingContext2D_2_3Ljava_lang_Object_2Ljava_lang_Object_2(context_0){
  var hours, hoursX, hoursY, minX, minY, minutes, offset, secX, secY, seconds, time;
  time = new $wnd.Date;
  hours = time.getHours() % 12 + time.getMinutes() / 60;
  minutes = time.getMinutes() + time.getSeconds() / 60;
  seconds = time.getSeconds() + time.getMilliseconds() / 1000;
  offset = -$wnd.Math.PI / 2;
  hoursX = 75 * $wnd.Math.cos($wnd.Math.PI * 2 * hours / 12 + offset) + 100;
  hoursY = 75 * $wnd.Math.sin($wnd.Math.PI * 2 * hours / 12 + offset) + 100;
  minX = 80 * $wnd.Math.cos($wnd.Math.PI * 2 * minutes / 60 + offset) + 100;
  minY = 80 * $wnd.Math.sin($wnd.Math.PI * 2 * minutes / 60 + offset) + 100;
  secX = 80 * $wnd.Math.cos($wnd.Math.PI * 2 * seconds / 60 + offset) + 100;
  secY = 80 * $wnd.Math.sin($wnd.Math.PI * 2 * seconds / 60 + offset) + 100;
  context_0.clearRect(0, 0, 200, 200);
  context_0.beginPath();
  context_0.strokeStyle = 'black';
  context_0.lineWidth = 4;
  context_0.moveTo(100, 100);
  context_0.lineTo(hoursX, hoursY);
  context_0.stroke();
  context_0.beginPath();
  context_0.strokeStyle = 'gray';
  context_0.lineWidth = 3;
  context_0.moveTo(100, 100);
  context_0.lineTo(minX, minY);
  context_0.stroke();
  context_0.beginPath();
  context_0.lineWidth = 1;
  context_0.strokeStyle = 'red';
  context_0.moveTo(100, 100);
  context_0.lineTo(secX, secY);
  context_0.stroke();
  return null;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(87, 13, $intern_22, gwt_jelement_demo_client_Canvas2DDemo_Canvas2DDemo__V);
_.execute__V = function gwt_jelement_demo_client_Canvas2DDemo_execute__V(){
  var gwt_jelement_demo_client_Canvas2DDemo_$clockDemo__Lgwt_jelement_demo_client_Canvas2DDemo_2V_clockCanvas_0, gwt_jelement_demo_client_Canvas2DDemo_$clockDemo__Lgwt_jelement_demo_client_Canvas2DDemo_2V_context_0, gwt_jelement_demo_client_Canvas2DDemo_$planetsDemo__Lgwt_jelement_demo_client_Canvas2DDemo_2V_sun_0, gwt_jelement_demo_client_Canvas2DDemo_$planetsDemo__Lgwt_jelement_demo_client_Canvas2DDemo_2V_moon_0, gwt_jelement_demo_client_Canvas2DDemo_$planetsDemo__Lgwt_jelement_demo_client_Canvas2DDemo_2V_earth_0, gwt_jelement_demo_client_Canvas2DDemo_$planetsDemo__Lgwt_jelement_demo_client_Canvas2DDemo_2V_canvas_0, gwt_jelement_demo_client_Canvas2DDemo_$planetsDemo__Lgwt_jelement_demo_client_Canvas2DDemo_2V_ctx_0;
  gwt_jelement_demo_client_Canvas2DDemo_$clockDemo__Lgwt_jelement_demo_client_Canvas2DDemo_2V_clockCanvas_0 = com_google_gwt_lang_Cast_castToNative__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2($wnd.window.document.getElementById('clock-canvas'), $wnd.HTMLCanvasElement);
  gwt_jelement_demo_client_Canvas2DDemo_$clockDemo__Lgwt_jelement_demo_client_Canvas2DDemo_2V_context_0 = com_google_gwt_lang_Cast_castToNative__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(gwt_jelement_demo_client_Canvas2DDemo_$clockDemo__Lgwt_jelement_demo_client_Canvas2DDemo_2V_clockCanvas_0.getContext('2d'), $wnd.CanvasRenderingContext2D);
  this.gwt_jelement_demo_client_Canvas2DDemo_timer = $wnd.window.window.setInterval(com_google_gwt_lang_Runtime_makeLambdaFunction__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(gwt_jelement_demo_client_Canvas2DDemo$lambda$2$Type_Canvas2DDemo$lambda$2$Type__Lgwt_jelement_canvas2d_CanvasRenderingContext2D_2V.prototype.onInvoked___3Ljava_lang_Object_2Ljava_lang_Object_2, gwt_jelement_demo_client_Canvas2DDemo$lambda$2$Type_Canvas2DDemo$lambda$2$Type__Lgwt_jelement_canvas2d_CanvasRenderingContext2D_2V, [gwt_jelement_demo_client_Canvas2DDemo_$clockDemo__Lgwt_jelement_demo_client_Canvas2DDemo_2V_context_0]), 50);
  gwt_jelement_demo_client_Canvas2DDemo_$planetsDemo__Lgwt_jelement_demo_client_Canvas2DDemo_2V_sun_0 = new $wnd.Image;
  gwt_jelement_demo_client_Canvas2DDemo_$planetsDemo__Lgwt_jelement_demo_client_Canvas2DDemo_2V_moon_0 = new $wnd.Image;
  gwt_jelement_demo_client_Canvas2DDemo_$planetsDemo__Lgwt_jelement_demo_client_Canvas2DDemo_2V_earth_0 = new $wnd.Image;
  gwt_jelement_demo_client_Canvas2DDemo_$planetsDemo__Lgwt_jelement_demo_client_Canvas2DDemo_2V_sun_0.src = 'https://mdn.mozillademos.org/files/1456/Canvas_sun.png';
  gwt_jelement_demo_client_Canvas2DDemo_$planetsDemo__Lgwt_jelement_demo_client_Canvas2DDemo_2V_moon_0.src = 'https://mdn.mozillademos.org/files/1443/Canvas_moon.png';
  gwt_jelement_demo_client_Canvas2DDemo_$planetsDemo__Lgwt_jelement_demo_client_Canvas2DDemo_2V_earth_0.src = 'https://mdn.mozillademos.org/files/1429/Canvas_earth.png';
  gwt_jelement_demo_client_Canvas2DDemo_$planetsDemo__Lgwt_jelement_demo_client_Canvas2DDemo_2V_canvas_0 = com_google_gwt_lang_Cast_castToNative__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2($wnd.window.document.getElementById('sun-canvas'), $wnd.HTMLCanvasElement);
  gwt_jelement_demo_client_Canvas2DDemo_$planetsDemo__Lgwt_jelement_demo_client_Canvas2DDemo_2V_ctx_0 = com_google_gwt_lang_Cast_castToNative__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(gwt_jelement_demo_client_Canvas2DDemo_$planetsDemo__Lgwt_jelement_demo_client_Canvas2DDemo_2V_canvas_0.getContext('2d'), $wnd.CanvasRenderingContext2D);
  $wnd.window.window.requestAnimationFrame(com_google_gwt_lang_Runtime_makeLambdaFunction__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(gwt_jelement_demo_client_Canvas2DDemo$lambda$0$Type_Canvas2DDemo$lambda$0$Type__Lgwt_jelement_demo_client_Canvas2DDemo_2Lgwt_jelement_canvas2d_CanvasRenderingContext2D_2Lgwt_jelement_html_Image_2Lgwt_jelement_html_Image_2Lgwt_jelement_html_Image_2V.prototype.handleEvent__DV, gwt_jelement_demo_client_Canvas2DDemo$lambda$0$Type_Canvas2DDemo$lambda$0$Type__Lgwt_jelement_demo_client_Canvas2DDemo_2Lgwt_jelement_canvas2d_CanvasRenderingContext2D_2Lgwt_jelement_html_Image_2Lgwt_jelement_html_Image_2Lgwt_jelement_html_Image_2V, [this, gwt_jelement_demo_client_Canvas2DDemo_$planetsDemo__Lgwt_jelement_demo_client_Canvas2DDemo_2V_ctx_0, gwt_jelement_demo_client_Canvas2DDemo_$planetsDemo__Lgwt_jelement_demo_client_Canvas2DDemo_2V_earth_0, gwt_jelement_demo_client_Canvas2DDemo_$planetsDemo__Lgwt_jelement_demo_client_Canvas2DDemo_2V_moon_0, gwt_jelement_demo_client_Canvas2DDemo_$planetsDemo__Lgwt_jelement_demo_client_Canvas2DDemo_2V_sun_0]));
}
;
_.getName__Ljava_lang_String_2 = function gwt_jelement_demo_client_Canvas2DDemo_getName__Ljava_lang_String_2(){
  return 'canvas2d';
}
;
_.getSource__Lcom_google_gwt_resources_client_TextResource_2 = function gwt_jelement_demo_client_Canvas2DDemo_getSource__Lcom_google_gwt_resources_client_TextResource_2(){
  return gwt_jelement_demo_client_SourceClientBundle_1default_1InlineClientBundleGenerator$getCanvas2DDemoSourceInitializer_$clinit__V() , gwt_jelement_demo_client_SourceClientBundle_1default_1InlineClientBundleGenerator_getCanvas2DDemoSource;
}
;
_.getTemplate__Lcom_google_gwt_resources_client_TextResource_2 = function gwt_jelement_demo_client_Canvas2DDemo_getTemplate__Lcom_google_gwt_resources_client_TextResource_2(){
  return gwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator$getCanvas2DHtmlInitializer_$clinit__V() , gwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator_getCanvas2DHtml;
}
;
_.getTitle__Ljava_lang_String_2 = function gwt_jelement_demo_client_Canvas2DDemo_getTitle__Ljava_lang_String_2(){
  return 'Canvas 2D Demo';
}
;
_.setInactive__V = function gwt_jelement_demo_client_Canvas2DDemo_setInactive__V(){
  $wnd.window.window.clearInterval(this.gwt_jelement_demo_client_Canvas2DDemo_timer);
  this.gwt_jelement_demo_client_AbstractDemo_active = false;
}
;
_.package_private$gwt_jelement_demo_client$setInactive__V = function(){
  this.setInactive__V();
}
;
_.gwt_jelement_demo_client_Canvas2DDemo_timer = 0;
var com_google_gwt_lang_ClassLiteralHolder_Lgwt_1jelement_1demo_1client_1Canvas2DDemo_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_23, 'Canvas2DDemo', 87);
function gwt_jelement_demo_client_Canvas2DDemo$lambda$0$Type_Canvas2DDemo$lambda$0$Type__Lgwt_jelement_demo_client_Canvas2DDemo_2Lgwt_jelement_canvas2d_CanvasRenderingContext2D_2Lgwt_jelement_html_Image_2Lgwt_jelement_html_Image_2Lgwt_jelement_html_Image_2V($$outer_0, ctx_1, earth_2, moon_3, sun_4){
  this.gwt_jelement_demo_client_Canvas2DDemo$lambda$0$Type_$$outer_10 = $$outer_0;
  this.gwt_jelement_demo_client_Canvas2DDemo$lambda$0$Type_ctx_11 = ctx_1;
  this.gwt_jelement_demo_client_Canvas2DDemo$lambda$0$Type_earth_12 = earth_2;
  this.gwt_jelement_demo_client_Canvas2DDemo$lambda$0$Type_moon_13 = moon_3;
  this.gwt_jelement_demo_client_Canvas2DDemo$lambda$0$Type_sun_14 = sun_4;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(227, $wnd.Function, {}, gwt_jelement_demo_client_Canvas2DDemo$lambda$0$Type_Canvas2DDemo$lambda$0$Type__Lgwt_jelement_demo_client_Canvas2DDemo_2Lgwt_jelement_canvas2d_CanvasRenderingContext2D_2Lgwt_jelement_html_Image_2Lgwt_jelement_html_Image_2Lgwt_jelement_html_Image_2V);
_.handleEvent__DV = function gwt_jelement_demo_client_Canvas2DDemo$lambda$0$Type_handleEvent__DV(arg0){
  gwt_jelement_demo_client_Canvas2DDemo_$drawPlanets__Lgwt_jelement_demo_client_Canvas2DDemo_2Lgwt_jelement_canvas2d_CanvasRenderingContext2D_2Lgwt_jelement_html_HTMLImageElement_2Lgwt_jelement_html_HTMLImageElement_2Lgwt_jelement_html_HTMLImageElement_2V(this.gwt_jelement_demo_client_Canvas2DDemo$lambda$0$Type_$$outer_10, this.gwt_jelement_demo_client_Canvas2DDemo$lambda$0$Type_ctx_11, this.gwt_jelement_demo_client_Canvas2DDemo$lambda$0$Type_earth_12, this.gwt_jelement_demo_client_Canvas2DDemo$lambda$0$Type_moon_13, this.gwt_jelement_demo_client_Canvas2DDemo$lambda$0$Type_sun_14);
}
;
function gwt_jelement_demo_client_Canvas2DDemo$lambda$1$Type_Canvas2DDemo$lambda$1$Type__Lgwt_jelement_demo_client_Canvas2DDemo_2Lgwt_jelement_canvas2d_CanvasRenderingContext2D_2Lgwt_jelement_html_HTMLImageElement_2Lgwt_jelement_html_HTMLImageElement_2Lgwt_jelement_html_HTMLImageElement_2V($$outer_0, ctx_1, earth_2, moon_3, sun_4){
  this.gwt_jelement_demo_client_Canvas2DDemo$lambda$1$Type_$$outer_10 = $$outer_0;
  this.gwt_jelement_demo_client_Canvas2DDemo$lambda$1$Type_ctx_11 = ctx_1;
  this.gwt_jelement_demo_client_Canvas2DDemo$lambda$1$Type_earth_12 = earth_2;
  this.gwt_jelement_demo_client_Canvas2DDemo$lambda$1$Type_moon_13 = moon_3;
  this.gwt_jelement_demo_client_Canvas2DDemo$lambda$1$Type_sun_14 = sun_4;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(228, $wnd.Function, {}, gwt_jelement_demo_client_Canvas2DDemo$lambda$1$Type_Canvas2DDemo$lambda$1$Type__Lgwt_jelement_demo_client_Canvas2DDemo_2Lgwt_jelement_canvas2d_CanvasRenderingContext2D_2Lgwt_jelement_html_HTMLImageElement_2Lgwt_jelement_html_HTMLImageElement_2Lgwt_jelement_html_HTMLImageElement_2V);
_.handleEvent__DV = function gwt_jelement_demo_client_Canvas2DDemo$lambda$1$Type_handleEvent__DV(arg0){
  gwt_jelement_demo_client_Canvas2DDemo_$drawPlanets__Lgwt_jelement_demo_client_Canvas2DDemo_2Lgwt_jelement_canvas2d_CanvasRenderingContext2D_2Lgwt_jelement_html_HTMLImageElement_2Lgwt_jelement_html_HTMLImageElement_2Lgwt_jelement_html_HTMLImageElement_2V(this.gwt_jelement_demo_client_Canvas2DDemo$lambda$1$Type_$$outer_10, this.gwt_jelement_demo_client_Canvas2DDemo$lambda$1$Type_ctx_11, this.gwt_jelement_demo_client_Canvas2DDemo$lambda$1$Type_earth_12, this.gwt_jelement_demo_client_Canvas2DDemo$lambda$1$Type_moon_13, this.gwt_jelement_demo_client_Canvas2DDemo$lambda$1$Type_sun_14);
}
;
function gwt_jelement_demo_client_Canvas2DDemo$lambda$2$Type_Canvas2DDemo$lambda$2$Type__Lgwt_jelement_canvas2d_CanvasRenderingContext2D_2V(context_0){
  this.gwt_jelement_demo_client_Canvas2DDemo$lambda$2$Type_context_10 = context_0;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(229, $wnd.Function, {}, gwt_jelement_demo_client_Canvas2DDemo$lambda$2$Type_Canvas2DDemo$lambda$2$Type__Lgwt_jelement_canvas2d_CanvasRenderingContext2D_2V);
_.onInvoked___3Ljava_lang_Object_2Ljava_lang_Object_2 = function gwt_jelement_demo_client_Canvas2DDemo$lambda$2$Type_onInvoked___3Ljava_lang_Object_2Ljava_lang_Object_2(arg0){
  return gwt_jelement_demo_client_Canvas2DDemo_lambda$2__Lgwt_jelement_canvas2d_CanvasRenderingContext2D_2_3Ljava_lang_Object_2Ljava_lang_Object_2(this.gwt_jelement_demo_client_Canvas2DDemo$lambda$2$Type_context_10);
}
;
function gwt_jelement_demo_client_Demo_$addDemo__Lgwt_jelement_demo_client_Demo_2Ljava_util_function_Supplier_2V(this$static, demoSupplier){
  var anchor, demoInfo, hash;
  anchor = com_google_gwt_lang_Cast_castToNative__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2($wnd.window.document.createElement('a'), $wnd.HTMLAnchorElement);
  demoInfo = com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(demoSupplier.get__Ljava_lang_Object_2(), 13);
  hash = '#' + demoInfo.getName__Ljava_lang_String_2();
  anchor.setAttribute('href', hash);
  anchor.innerText = demoInfo.getTitle__Ljava_lang_String_2();
  this$static.gwt_jelement_demo_client_Demo_listing.appendChild(anchor);
  java_util_AbstractHashMap_$putStringValue__Ljava_util_AbstractHashMap_2Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static.gwt_jelement_demo_client_Demo_demoMap, hash, demoSupplier);
}

function gwt_jelement_demo_client_Demo_$hashChanged__Lgwt_jelement_demo_client_Demo_2V(this$static){
  var demoSuplier;
  !!this$static.gwt_jelement_demo_client_Demo_demo && this$static.gwt_jelement_demo_client_Demo_demo.package_private$gwt_jelement_demo_client$setInactive__V();
  demoSuplier = com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(java_util_AbstractHashMap_$getStringValue__Ljava_util_AbstractHashMap_2Ljava_lang_String_2Ljava_lang_Object_2(this$static.gwt_jelement_demo_client_Demo_demoMap, $wnd.window.location.hash), 19);
  if (demoSuplier) {
    this$static.gwt_jelement_demo_client_Demo_demo = com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(demoSuplier.get__Ljava_lang_Object_2(), 13);
    gwt_jelement_demo_client_AbstractDemo_$execute__Lgwt_jelement_demo_client_AbstractDemo_2Lgwt_jelement_html_HTMLDivElement_2V(this$static.gwt_jelement_demo_client_Demo_demo, this$static.gwt_jelement_demo_client_Demo_demoFrame);
  }
}

function gwt_jelement_demo_client_Demo_$onModuleLoad__Lgwt_jelement_demo_client_Demo_2V(this$static){
  gwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator$13_$ensureInjected__Lgwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator$13_2Z((gwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator$getStyleInitializer_$clinit__V() , gwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator_getStyle));
  this$static.gwt_jelement_demo_client_Demo_listing = $wnd.window.document.getElementById('demo-listing');
  this$static.gwt_jelement_demo_client_Demo_demoFrame = com_google_gwt_lang_Cast_castToNative__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2($wnd.window.document.getElementById('demo-div'), $wnd.HTMLDivElement);
  gwt_jelement_demo_client_Demo_$addDemo__Lgwt_jelement_demo_client_Demo_2Ljava_util_function_Supplier_2V(this$static, new gwt_jelement_demo_client_Demo$0methodref$ctor$Type_Demo$0methodref$ctor$Type__V);
  gwt_jelement_demo_client_Demo_$addDemo__Lgwt_jelement_demo_client_Demo_2Ljava_util_function_Supplier_2V(this$static, new gwt_jelement_demo_client_Demo$1methodref$ctor$Type_Demo$1methodref$ctor$Type__V);
  gwt_jelement_demo_client_Demo_$addDemo__Lgwt_jelement_demo_client_Demo_2Ljava_util_function_Supplier_2V(this$static, new gwt_jelement_demo_client_Demo$2methodref$ctor$Type_Demo$2methodref$ctor$Type__V);
  gwt_jelement_demo_client_Demo_$addDemo__Lgwt_jelement_demo_client_Demo_2Ljava_util_function_Supplier_2V(this$static, new gwt_jelement_demo_client_Demo$3methodref$ctor$Type_Demo$3methodref$ctor$Type__V);
  gwt_jelement_demo_client_Demo_$addDemo__Lgwt_jelement_demo_client_Demo_2Ljava_util_function_Supplier_2V(this$static, new gwt_jelement_demo_client_Demo$4methodref$ctor$Type_Demo$4methodref$ctor$Type__V);
  gwt_jelement_demo_client_Demo_$addDemo__Lgwt_jelement_demo_client_Demo_2Ljava_util_function_Supplier_2V(this$static, new gwt_jelement_demo_client_Demo$5methodref$ctor$Type_Demo$5methodref$ctor$Type__V);
  gwt_jelement_demo_client_Demo_$addDemo__Lgwt_jelement_demo_client_Demo_2Ljava_util_function_Supplier_2V(this$static, new gwt_jelement_demo_client_Demo$6methodref$ctor$Type_Demo$6methodref$ctor$Type__V);
  gwt_jelement_demo_client_Demo_$addDemo__Lgwt_jelement_demo_client_Demo_2Ljava_util_function_Supplier_2V(this$static, new gwt_jelement_demo_client_Demo$7methodref$ctor$Type_Demo$7methodref$ctor$Type__V);
  gwt_jelement_demo_client_Demo_$addDemo__Lgwt_jelement_demo_client_Demo_2Ljava_util_function_Supplier_2V(this$static, new gwt_jelement_demo_client_Demo$8methodref$ctor$Type_Demo$8methodref$ctor$Type__V);
  gwt_jelement_demo_client_Demo_$addDemo__Lgwt_jelement_demo_client_Demo_2Ljava_util_function_Supplier_2V(this$static, new gwt_jelement_demo_client_Demo$9methodref$ctor$Type_Demo$9methodref$ctor$Type__V);
  $wnd.window.window.addEventListener('hashchange', com_google_gwt_lang_Runtime_makeLambdaFunction__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(gwt_jelement_demo_client_Demo$lambda$0$Type_Demo$lambda$0$Type__Lgwt_jelement_demo_client_Demo_2V.prototype.handleEvent__Lgwt_jelement_events_Event_2V, gwt_jelement_demo_client_Demo$lambda$0$Type_Demo$lambda$0$Type__Lgwt_jelement_demo_client_Demo_2V, [this$static]));
  gwt_jelement_demo_client_Demo_$hashChanged__Lgwt_jelement_demo_client_Demo_2V(this$static);
}

function gwt_jelement_demo_client_Demo_Demo__V(){
  this.gwt_jelement_demo_client_Demo_demoMap = new java_util_HashMap_HashMap__V;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(69, 1, {}, gwt_jelement_demo_client_Demo_Demo__V);
var com_google_gwt_lang_ClassLiteralHolder_Lgwt_1jelement_1demo_1client_1Demo_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_23, 'Demo', 69);
function gwt_jelement_demo_client_Demo$0methodref$ctor$Type_Demo$0methodref$ctor$Type__V(){
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(76, 1, $intern_27, gwt_jelement_demo_client_Demo$0methodref$ctor$Type_Demo$0methodref$ctor$Type__V);
_.get__Ljava_lang_Object_2 = function gwt_jelement_demo_client_Demo$0methodref$ctor$Type_get__Ljava_lang_Object_2(){
  return new gwt_jelement_demo_client_BatteryDemo_BatteryDemo__V;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lgwt_1jelement_1demo_1client_1Demo$0methodref$ctor$Type_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_23, 'Demo/0methodref$ctor$Type', 76);
function gwt_jelement_demo_client_Demo$1methodref$ctor$Type_Demo$1methodref$ctor$Type__V(){
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(77, 1, $intern_27, gwt_jelement_demo_client_Demo$1methodref$ctor$Type_Demo$1methodref$ctor$Type__V);
_.get__Ljava_lang_Object_2 = function gwt_jelement_demo_client_Demo$1methodref$ctor$Type_get__Ljava_lang_Object_2(){
  return new gwt_jelement_demo_client_Canvas2DDemo_Canvas2DDemo__V;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lgwt_1jelement_1demo_1client_1Demo$1methodref$ctor$Type_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_23, 'Demo/1methodref$ctor$Type', 77);
function gwt_jelement_demo_client_Demo$2methodref$ctor$Type_Demo$2methodref$ctor$Type__V(){
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(78, 1, $intern_27, gwt_jelement_demo_client_Demo$2methodref$ctor$Type_Demo$2methodref$ctor$Type__V);
_.get__Ljava_lang_Object_2 = function gwt_jelement_demo_client_Demo$2methodref$ctor$Type_get__Ljava_lang_Object_2(){
  return new gwt_jelement_demo_client_ElementAnimateDemo_ElementAnimateDemo__V;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lgwt_1jelement_1demo_1client_1Demo$2methodref$ctor$Type_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_23, 'Demo/2methodref$ctor$Type', 78);
function gwt_jelement_demo_client_Demo$3methodref$ctor$Type_Demo$3methodref$ctor$Type__V(){
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(79, 1, $intern_27, gwt_jelement_demo_client_Demo$3methodref$ctor$Type_Demo$3methodref$ctor$Type__V);
_.get__Ljava_lang_Object_2 = function gwt_jelement_demo_client_Demo$3methodref$ctor$Type_get__Ljava_lang_Object_2(){
  return new gwt_jelement_demo_client_GeoLocationDemo_GeoLocationDemo__V;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lgwt_1jelement_1demo_1client_1Demo$3methodref$ctor$Type_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_23, 'Demo/3methodref$ctor$Type', 79);
function gwt_jelement_demo_client_Demo$4methodref$ctor$Type_Demo$4methodref$ctor$Type__V(){
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(80, 1, $intern_27, gwt_jelement_demo_client_Demo$4methodref$ctor$Type_Demo$4methodref$ctor$Type__V);
_.get__Ljava_lang_Object_2 = function gwt_jelement_demo_client_Demo$4methodref$ctor$Type_get__Ljava_lang_Object_2(){
  return new gwt_jelement_demo_client_NotificationDemo_NotificationDemo__V;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lgwt_1jelement_1demo_1client_1Demo$4methodref$ctor$Type_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_23, 'Demo/4methodref$ctor$Type', 80);
function gwt_jelement_demo_client_Demo$5methodref$ctor$Type_Demo$5methodref$ctor$Type__V(){
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(81, 1, $intern_27, gwt_jelement_demo_client_Demo$5methodref$ctor$Type_Demo$5methodref$ctor$Type__V);
_.get__Ljava_lang_Object_2 = function gwt_jelement_demo_client_Demo$5methodref$ctor$Type_get__Ljava_lang_Object_2(){
  return new gwt_jelement_demo_client_PerformanceDemo_PerformanceDemo__V;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lgwt_1jelement_1demo_1client_1Demo$5methodref$ctor$Type_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_23, 'Demo/5methodref$ctor$Type', 81);
function gwt_jelement_demo_client_Demo$6methodref$ctor$Type_Demo$6methodref$ctor$Type__V(){
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(82, 1, $intern_27, gwt_jelement_demo_client_Demo$6methodref$ctor$Type_Demo$6methodref$ctor$Type__V);
_.get__Ljava_lang_Object_2 = function gwt_jelement_demo_client_Demo$6methodref$ctor$Type_get__Ljava_lang_Object_2(){
  return new gwt_jelement_demo_client_SpeechSynthesisDemo_SpeechSynthesisDemo__V;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lgwt_1jelement_1demo_1client_1Demo$6methodref$ctor$Type_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_23, 'Demo/6methodref$ctor$Type', 82);
function gwt_jelement_demo_client_Demo$7methodref$ctor$Type_Demo$7methodref$ctor$Type__V(){
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(83, 1, $intern_27, gwt_jelement_demo_client_Demo$7methodref$ctor$Type_Demo$7methodref$ctor$Type__V);
_.get__Ljava_lang_Object_2 = function gwt_jelement_demo_client_Demo$7methodref$ctor$Type_get__Ljava_lang_Object_2(){
  return new gwt_jelement_demo_client_SvgDemo_SvgDemo__V;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lgwt_1jelement_1demo_1client_1Demo$7methodref$ctor$Type_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_23, 'Demo/7methodref$ctor$Type', 83);
function gwt_jelement_demo_client_Demo$8methodref$ctor$Type_Demo$8methodref$ctor$Type__V(){
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(84, 1, $intern_27, gwt_jelement_demo_client_Demo$8methodref$ctor$Type_Demo$8methodref$ctor$Type__V);
_.get__Ljava_lang_Object_2 = function gwt_jelement_demo_client_Demo$8methodref$ctor$Type_get__Ljava_lang_Object_2(){
  return new gwt_jelement_demo_client_WebAudioDemo_WebAudioDemo__V;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lgwt_1jelement_1demo_1client_1Demo$8methodref$ctor$Type_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_23, 'Demo/8methodref$ctor$Type', 84);
function gwt_jelement_demo_client_Demo$9methodref$ctor$Type_Demo$9methodref$ctor$Type__V(){
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(85, 1, $intern_27, gwt_jelement_demo_client_Demo$9methodref$ctor$Type_Demo$9methodref$ctor$Type__V);
_.get__Ljava_lang_Object_2 = function gwt_jelement_demo_client_Demo$9methodref$ctor$Type_get__Ljava_lang_Object_2(){
  return new gwt_jelement_demo_client_WebGlDemo_WebGlDemo__V;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lgwt_1jelement_1demo_1client_1Demo$9methodref$ctor$Type_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_23, 'Demo/9methodref$ctor$Type', 85);
function gwt_jelement_demo_client_Demo$lambda$0$Type_Demo$lambda$0$Type__Lgwt_jelement_demo_client_Demo_2V($$outer_0){
  this.gwt_jelement_demo_client_Demo$lambda$0$Type_$$outer_10 = $$outer_0;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(203, $wnd.Function, {}, gwt_jelement_demo_client_Demo$lambda$0$Type_Demo$lambda$0$Type__Lgwt_jelement_demo_client_Demo_2V);
_.handleEvent__Lgwt_jelement_events_Event_2V = function gwt_jelement_demo_client_Demo$lambda$0$Type_handleEvent__Lgwt_jelement_events_Event_2V(arg0){
  gwt_jelement_demo_client_Demo_$hashChanged__Lgwt_jelement_demo_client_Demo_2V(this.gwt_jelement_demo_client_Demo$lambda$0$Type_$$outer_10);
}
;
function gwt_jelement_demo_client_ElementAnimateDemo_ElementAnimateDemo__V(){
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(88, 13, $intern_22, gwt_jelement_demo_client_ElementAnimateDemo_ElementAnimateDemo__V);
_.execute__V = function gwt_jelement_demo_client_ElementAnimateDemo_execute__V(){
  var cloudAnimationOptions, cloudTransitions, logo, logoAnimationOptions, logoTransitions, mainDiv, textDiv, tickerAnimationOptions, tickerDiv, tickerTransitions;
  mainDiv = com_google_gwt_lang_Cast_castToNative__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2($wnd.window.document.querySelector('div.clouds'), $wnd.HTMLDivElement);
  cloudTransitions = [gwt_jelement_core_Js_with__Lgwt_jelement_core_JsObject_2Ljava_lang_String_2Ljava_lang_Object_2Lgwt_jelement_core_JsObject_2(new $wnd.Object, $intern_28, '0 302px'), gwt_jelement_core_Js_with__Lgwt_jelement_core_JsObject_2Ljava_lang_String_2Ljava_lang_Object_2Lgwt_jelement_core_JsObject_2(new $wnd.Object, $intern_28, '0 0')];
  cloudAnimationOptions = new $wnd.Object;
  cloudAnimationOptions.duration = 10000;
  gwt_jelement_animation_AnimationEffectTimingProperties_$setIterations__Lgwt_jelement_animation_AnimationEffectTimingProperties_2DV(cloudAnimationOptions, $wnd.window.Infinity);
  mainDiv.animate(cloudTransitions, cloudAnimationOptions);
  logo = com_google_gwt_lang_Cast_castToNative__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2($wnd.window.document.createElement('img'), $wnd.HTMLImageElement);
  logo.src = $intern_29;
  logo.style.setProperty('position', 'relative');
  logo.style.setProperty('left', '20px');
  mainDiv.appendChild(logo);
  logoTransitions = [gwt_jelement_core_Js_with__Lgwt_jelement_core_JsObject_2Ljava_lang_String_2Ljava_lang_Object_2Lgwt_jelement_core_JsObject_2(new $wnd.Object, 'transform', 'translateY(0px)'), gwt_jelement_core_Js_with__Lgwt_jelement_core_JsObject_2Ljava_lang_String_2Ljava_lang_Object_2Lgwt_jelement_core_JsObject_2(new $wnd.Object, 'transform', 'translateY(45px)')];
  logoAnimationOptions = new $wnd.Object;
  logoAnimationOptions.duration = 4000;
  gwt_jelement_animation_AnimationEffectTimingProperties_$setIterations__Lgwt_jelement_animation_AnimationEffectTimingProperties_2DV(logoAnimationOptions, $wnd.window.Infinity);
  gwt_jelement_animation_AnimationEffectTimingProperties_$setDirection__Lgwt_jelement_animation_AnimationEffectTimingProperties_2Lgwt_jelement_animation_PlaybackDirection_2V(logoAnimationOptions, (gwt_jelement_animation_PlaybackDirection_$clinit__V() , gwt_jelement_animation_PlaybackDirection_ALTERNATE));
  logo.animate(logoTransitions, logoAnimationOptions);
  tickerDiv = com_google_gwt_lang_Cast_castToNative__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2($wnd.window.document.createElement('div'), $wnd.HTMLDivElement);
  tickerDiv.className = 'ticker';
  textDiv = com_google_gwt_lang_Cast_castToNative__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2($wnd.window.document.createElement('div'), $wnd.HTMLDivElement);
  textDiv.className = 'ticker-inner';
  textDiv.innerHTML = '\u26A0\uFE0FThis demo uses the <a href="https://developer.mozilla.org/en-US/docs/Web/API/Element/animate" target="_blank">Element.animate()<\/a> API, which is only supported in Chrome and Firefox. As this API is fairly new, it is  not yet defined in Elemental.';
  tickerDiv.appendChild(textDiv);
  mainDiv.appendChild(tickerDiv);
  tickerTransitions = [gwt_jelement_core_Js_with__Lgwt_jelement_core_JsObject_2Ljava_lang_String_2Ljava_lang_Object_2Lgwt_jelement_core_JsObject_2(new $wnd.Object, $intern_30, '100%'), gwt_jelement_core_Js_with__Lgwt_jelement_core_JsObject_2Ljava_lang_String_2Ljava_lang_Object_2Lgwt_jelement_core_JsObject_2(new $wnd.Object, $intern_30, '-1200px')];
  tickerAnimationOptions = new $wnd.Object;
  tickerAnimationOptions.duration = 20000;
  gwt_jelement_animation_AnimationEffectTimingProperties_$setIterations__Lgwt_jelement_animation_AnimationEffectTimingProperties_2DV(tickerAnimationOptions, $wnd.window.Infinity);
  textDiv.animate(tickerTransitions, tickerAnimationOptions);
}
;
_.getName__Ljava_lang_String_2 = function gwt_jelement_demo_client_ElementAnimateDemo_getName__Ljava_lang_String_2(){
  return 'element-animate';
}
;
_.getSource__Lcom_google_gwt_resources_client_TextResource_2 = function gwt_jelement_demo_client_ElementAnimateDemo_getSource__Lcom_google_gwt_resources_client_TextResource_2(){
  return gwt_jelement_demo_client_SourceClientBundle_1default_1InlineClientBundleGenerator$getElementAnimateDemoSourceInitializer_$clinit__V() , gwt_jelement_demo_client_SourceClientBundle_1default_1InlineClientBundleGenerator_getElementAnimateDemoSource;
}
;
_.getTemplate__Lcom_google_gwt_resources_client_TextResource_2 = function gwt_jelement_demo_client_ElementAnimateDemo_getTemplate__Lcom_google_gwt_resources_client_TextResource_2(){
  return gwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator$getElementAnimateHtmlInitializer_$clinit__V() , gwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator_getElementAnimateHtml;
}
;
_.getTitle__Ljava_lang_String_2 = function gwt_jelement_demo_client_ElementAnimateDemo_getTitle__Ljava_lang_String_2(){
  return 'Element.animate() Demo';
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lgwt_1jelement_1demo_1client_1ElementAnimateDemo_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_23, 'ElementAnimateDemo', 88);
function gwt_jelement_demo_client_GeoLocationDemo_$lambda$0__Lgwt_jelement_demo_client_GeoLocationDemo_2Lgwt_jelement_geolocation_Position_2V(this$static, position_0){
  this$static.gwt_jelement_demo_client_GeoLocationDemo_coordinates = position_0.coords;
  gwt_jelement_demo_client_GeoLocationDemo_scriptLoaded && gwt_jelement_demo_client_GeoLocationDemo_$ready__Lgwt_jelement_demo_client_GeoLocationDemo_2V(this$static);
}

function gwt_jelement_demo_client_GeoLocationDemo_$lambda$1__Lgwt_jelement_demo_client_GeoLocationDemo_2_3Ljava_lang_Object_2Ljava_lang_Object_2(this$static){
  gwt_jelement_demo_client_GeoLocationDemo_scriptLoaded = true;
  delete gwt_jelement_core_IsObject_$object__Lgwt_jelement_core_IsObject_2Lgwt_jelement_core_JsObject_2($wnd.window.window)['initMap'];
  this$static.gwt_jelement_demo_client_GeoLocationDemo_coordinates != null && gwt_jelement_demo_client_GeoLocationDemo_$ready__Lgwt_jelement_demo_client_GeoLocationDemo_2V(this$static);
  return null;
}

function gwt_jelement_demo_client_GeoLocationDemo_$ready__Lgwt_jelement_demo_client_GeoLocationDemo_2V(this$static){
  var map_0, mapContainer, mapOptions, markerOptions, position;
  mapContainer = com_google_gwt_lang_Cast_castToNative__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2($wnd.window.document.querySelector('div#geolocation-demo div#map'), $wnd.HTMLDivElement);
  position = gwt_jelement_core_Js_with__Lgwt_jelement_core_JsObject_2Ljava_lang_String_2DLgwt_jelement_core_JsObject_2(gwt_jelement_core_Js_with__Lgwt_jelement_core_JsObject_2Ljava_lang_String_2DLgwt_jelement_core_JsObject_2(new $wnd.Object, 'lat', this$static.gwt_jelement_demo_client_GeoLocationDemo_coordinates.latitude), 'lng', this$static.gwt_jelement_demo_client_GeoLocationDemo_coordinates.longitude);
  mapOptions = gwt_jelement_core_Js_with__Lgwt_jelement_core_JsObject_2Ljava_lang_String_2Ljava_lang_Object_2Lgwt_jelement_core_JsObject_2(gwt_jelement_core_Js_with__Lgwt_jelement_core_JsObject_2Ljava_lang_String_2ILgwt_jelement_core_JsObject_2(new $wnd.Object, 'zoom', 10), 'center', position);
  map_0 = new $wnd.google.maps.Map(mapContainer, mapOptions);
  markerOptions = gwt_jelement_core_Js_with__Lgwt_jelement_core_JsObject_2Ljava_lang_String_2Ljava_lang_Object_2Lgwt_jelement_core_JsObject_2(gwt_jelement_core_Js_with__Lgwt_jelement_core_JsObject_2Ljava_lang_String_2Ljava_lang_Object_2Lgwt_jelement_core_JsObject_2(new $wnd.Object, 'position', position), 'map', map_0);
  new $wnd.google.maps.Marker(markerOptions);
}

function gwt_jelement_demo_client_GeoLocationDemo_GeoLocationDemo__V(){
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(89, 13, $intern_22, gwt_jelement_demo_client_GeoLocationDemo_GeoLocationDemo__V);
_.execute__V = function gwt_jelement_demo_client_GeoLocationDemo_execute__V(){
  var geolocation;
  if (!($intern_31 in gwt_jelement_core_IsObject_$object__Lgwt_jelement_core_IsObject_2Lgwt_jelement_core_JsObject_2($wnd.window.navigator))) {
    $wnd.window.window.alert('Your browser does not support geolocation');
    return;
  }
  geolocation = $wnd.window.navigator.geolocation;
  geolocation.getCurrentPosition(com_google_gwt_lang_Runtime_makeLambdaFunction__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(gwt_jelement_demo_client_GeoLocationDemo$lambda$0$Type_GeoLocationDemo$lambda$0$Type__Lgwt_jelement_demo_client_GeoLocationDemo_2V.prototype.handleEvent__Lgwt_jelement_geolocation_Position_2V, gwt_jelement_demo_client_GeoLocationDemo$lambda$0$Type_GeoLocationDemo$lambda$0$Type__Lgwt_jelement_demo_client_GeoLocationDemo_2V, [this]));
  gwt_jelement_core_IsObject_$object__Lgwt_jelement_core_IsObject_2Lgwt_jelement_core_JsObject_2($wnd.window.window)['initMap'] = com_google_gwt_lang_Runtime_makeLambdaFunction__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(gwt_jelement_demo_client_GeoLocationDemo$lambda$1$Type_GeoLocationDemo$lambda$1$Type__Lgwt_jelement_demo_client_GeoLocationDemo_2V.prototype.onInvoked___3Ljava_lang_Object_2Ljava_lang_Object_2, gwt_jelement_demo_client_GeoLocationDemo$lambda$1$Type_GeoLocationDemo$lambda$1$Type__Lgwt_jelement_demo_client_GeoLocationDemo_2V, [this]);
  gwt_jelement_demo_client_GeoLocationDemo_scriptLoaded || com_google_gwt_core_client_ScriptInjector$FromUrl_$inject__Lcom_google_gwt_core_client_ScriptInjector$FromUrl_2Lcom_google_gwt_core_client_JavaScriptObject_2(com_google_gwt_core_client_ScriptInjector$FromUrl_$setWindow__Lcom_google_gwt_core_client_ScriptInjector$FromUrl_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_ScriptInjector$FromUrl_2((com_google_gwt_core_client_ScriptInjector_$clinit__V() , new com_google_gwt_core_client_ScriptInjector$FromUrl_ScriptInjector$FromUrl__Ljava_lang_String_2V), com_google_gwt_core_client_ScriptInjector_TOP_1WINDOW));
}
;
_.getName__Ljava_lang_String_2 = function gwt_jelement_demo_client_GeoLocationDemo_getName__Ljava_lang_String_2(){
  return $intern_31;
}
;
_.getSource__Lcom_google_gwt_resources_client_TextResource_2 = function gwt_jelement_demo_client_GeoLocationDemo_getSource__Lcom_google_gwt_resources_client_TextResource_2(){
  return gwt_jelement_demo_client_SourceClientBundle_1default_1InlineClientBundleGenerator$getGeolocationSourceInitializer_$clinit__V() , gwt_jelement_demo_client_SourceClientBundle_1default_1InlineClientBundleGenerator_getGeolocationSource;
}
;
_.getTemplate__Lcom_google_gwt_resources_client_TextResource_2 = function gwt_jelement_demo_client_GeoLocationDemo_getTemplate__Lcom_google_gwt_resources_client_TextResource_2(){
  return gwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator$getGeoLocationHtmlInitializer_$clinit__V() , gwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator_getGeoLocationHtml;
}
;
_.getTitle__Ljava_lang_String_2 = function gwt_jelement_demo_client_GeoLocationDemo_getTitle__Ljava_lang_String_2(){
  return 'Geolocation Demo';
}
;
var gwt_jelement_demo_client_GeoLocationDemo_scriptLoaded = false;
var com_google_gwt_lang_ClassLiteralHolder_Lgwt_1jelement_1demo_1client_1GeoLocationDemo_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_23, 'GeoLocationDemo', 89);
function gwt_jelement_demo_client_GeoLocationDemo$lambda$0$Type_GeoLocationDemo$lambda$0$Type__Lgwt_jelement_demo_client_GeoLocationDemo_2V($$outer_0){
  this.gwt_jelement_demo_client_GeoLocationDemo$lambda$0$Type_$$outer_10 = $$outer_0;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(230, $wnd.Function, {}, gwt_jelement_demo_client_GeoLocationDemo$lambda$0$Type_GeoLocationDemo$lambda$0$Type__Lgwt_jelement_demo_client_GeoLocationDemo_2V);
_.handleEvent__Lgwt_jelement_geolocation_Position_2V = function gwt_jelement_demo_client_GeoLocationDemo$lambda$0$Type_handleEvent__Lgwt_jelement_geolocation_Position_2V(arg0){
  gwt_jelement_demo_client_GeoLocationDemo_$lambda$0__Lgwt_jelement_demo_client_GeoLocationDemo_2Lgwt_jelement_geolocation_Position_2V(this.gwt_jelement_demo_client_GeoLocationDemo$lambda$0$Type_$$outer_10, arg0);
}
;
function gwt_jelement_demo_client_GeoLocationDemo$lambda$1$Type_GeoLocationDemo$lambda$1$Type__Lgwt_jelement_demo_client_GeoLocationDemo_2V($$outer_0){
  this.gwt_jelement_demo_client_GeoLocationDemo$lambda$1$Type_$$outer_10 = $$outer_0;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(231, $wnd.Function, {}, gwt_jelement_demo_client_GeoLocationDemo$lambda$1$Type_GeoLocationDemo$lambda$1$Type__Lgwt_jelement_demo_client_GeoLocationDemo_2V);
_.onInvoked___3Ljava_lang_Object_2Ljava_lang_Object_2 = function gwt_jelement_demo_client_GeoLocationDemo$lambda$1$Type_onInvoked___3Ljava_lang_Object_2Ljava_lang_Object_2(arg0){
  return gwt_jelement_demo_client_GeoLocationDemo_$lambda$1__Lgwt_jelement_demo_client_GeoLocationDemo_2_3Ljava_lang_Object_2Ljava_lang_Object_2(this.gwt_jelement_demo_client_GeoLocationDemo$lambda$1$Type_$$outer_10);
}
;
function gwt_jelement_demo_client_NotificationDemo_NotificationDemo__V(){
}

function gwt_jelement_demo_client_NotificationDemo_lambda$0__Ljava_lang_String_2Ljava_lang_Object_2(response_0){
  var notificationOptions;
  if (java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z('granted', response_0)) {
    notificationOptions = new $wnd.Object;
    notificationOptions.body = 'I hope you are enjoying the demos.';
    notificationOptions.icon = $intern_29;
    notificationOptions.image = 'code.png';
    notificationOptions.requireInteraction = true;
    new $wnd.Notification('Hello', notificationOptions);
  }
  return null;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(90, 13, $intern_22, gwt_jelement_demo_client_NotificationDemo_NotificationDemo__V);
_.execute__V = function gwt_jelement_demo_client_NotificationDemo_execute__V(){
  if (!('Notification' in gwt_jelement_core_IsObject_$object__Lgwt_jelement_core_IsObject_2Lgwt_jelement_core_JsObject_2($wnd.window.window))) {
    $wnd.window.window.alert('Notifications are not supported on this browser');
    return;
  }
  $wnd.Notification.requestPermission().then(com_google_gwt_lang_Runtime_makeLambdaFunction__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(gwt_jelement_demo_client_NotificationDemo$lambda$0$Type_NotificationDemo$lambda$0$Type__V.prototype.fullfilled__Ljava_lang_Object_2Ljava_lang_Object_2, gwt_jelement_demo_client_NotificationDemo$lambda$0$Type_NotificationDemo$lambda$0$Type__V, []));
}
;
_.getName__Ljava_lang_String_2 = function gwt_jelement_demo_client_NotificationDemo_getName__Ljava_lang_String_2(){
  return 'notification';
}
;
_.getSource__Lcom_google_gwt_resources_client_TextResource_2 = function gwt_jelement_demo_client_NotificationDemo_getSource__Lcom_google_gwt_resources_client_TextResource_2(){
  return gwt_jelement_demo_client_SourceClientBundle_1default_1InlineClientBundleGenerator$getNotificationSourceInitializer_$clinit__V() , gwt_jelement_demo_client_SourceClientBundle_1default_1InlineClientBundleGenerator_getNotificationSource;
}
;
_.getTemplate__Lcom_google_gwt_resources_client_TextResource_2 = function gwt_jelement_demo_client_NotificationDemo_getTemplate__Lcom_google_gwt_resources_client_TextResource_2(){
  return gwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator$getNotificationHtmlInitializer_$clinit__V() , gwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator_getNotificationHtml;
}
;
_.getTitle__Ljava_lang_String_2 = function gwt_jelement_demo_client_NotificationDemo_getTitle__Ljava_lang_String_2(){
  return 'Notification Demo';
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lgwt_1jelement_1demo_1client_1NotificationDemo_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_23, 'NotificationDemo', 90);
function gwt_jelement_demo_client_NotificationDemo$lambda$0$Type_NotificationDemo$lambda$0$Type__V(){
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(234, $wnd.Function, {}, gwt_jelement_demo_client_NotificationDemo$lambda$0$Type_NotificationDemo$lambda$0$Type__V);
_.fullfilled__Ljava_lang_Object_2Ljava_lang_Object_2 = function gwt_jelement_demo_client_NotificationDemo$lambda$0$Type_fullfilled__Ljava_lang_Object_2Ljava_lang_Object_2(arg0){
  return gwt_jelement_demo_client_NotificationDemo_lambda$0__Ljava_lang_String_2Ljava_lang_Object_2(arg0);
}
;
function gwt_jelement_demo_client_PerformanceDemo_$createDivWithText__Lgwt_jelement_demo_client_PerformanceDemo_2Ljava_lang_String_2Lgwt_jelement_html_HTMLDivElement_2(text_0){
  var result;
  result = com_google_gwt_lang_Cast_castToNative__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2($wnd.window.document.createElement('div'), $wnd.HTMLDivElement);
  result.innerHTML = text_0;
  return result;
}

function gwt_jelement_demo_client_PerformanceDemo_$lambda$0__Lgwt_jelement_demo_client_PerformanceDemo_2Lgwt_jelement_html_HTMLDivElement_2DLjava_util_Map$Entry_2V(timingDiv_1, firstTime_2, entry_2){
  timingDiv_1.appendChild(gwt_jelement_demo_client_PerformanceDemo_$createDivWithText__Lgwt_jelement_demo_client_PerformanceDemo_2Ljava_lang_String_2Lgwt_jelement_html_HTMLDivElement_2(com_google_gwt_lang_Cast_castToString__Ljava_lang_Object_2Ljava_lang_Object_2(entry_2.getKey__Ljava_lang_Object_2())));
  timingDiv_1.appendChild(gwt_jelement_demo_client_PerformanceDemo_$createDivWithText__Lgwt_jelement_demo_client_PerformanceDemo_2Ljava_lang_String_2Lgwt_jelement_html_HTMLDivElement_2('' + (javaemul_internal_InternalPreconditions_checkNotNull__Ljava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_lang_Cast_castToDouble__Ljava_lang_Object_2Ljava_lang_Object_2(entry_2.getValue__Ljava_lang_Object_2())) - firstTime_2)));
}

function gwt_jelement_demo_client_PerformanceDemo_$showMemoryInfo__Lgwt_jelement_demo_client_PerformanceDemo_2Lgwt_jelement_timing_MemoryInfo_2Lgwt_jelement_html_HTMLDivElement_2V(memory, container){
  container.append(gwt_jelement_demo_client_PerformanceDemo_$createDivWithText__Lgwt_jelement_demo_client_PerformanceDemo_2Ljava_lang_String_2Lgwt_jelement_html_HTMLDivElement_2('<b>Used JS heap size:<\/b> ' + (new $wnd.Object(memory.usedJSHeapSize)).toLocaleString() + $intern_32));
  container.append(gwt_jelement_demo_client_PerformanceDemo_$createDivWithText__Lgwt_jelement_demo_client_PerformanceDemo_2Ljava_lang_String_2Lgwt_jelement_html_HTMLDivElement_2('<b>Total JS heap size:<\/b> ' + (new $wnd.Object(memory.totalJSHeapSize)).toLocaleString() + $intern_32));
  container.append(gwt_jelement_demo_client_PerformanceDemo_$createDivWithText__Lgwt_jelement_demo_client_PerformanceDemo_2Ljava_lang_String_2Lgwt_jelement_html_HTMLDivElement_2('<b>Max JS heap size:<\/b> ' + (new $wnd.Object(memory.jsHeapSizeLimit)).toLocaleString() + $intern_32));
}

function gwt_jelement_demo_client_PerformanceDemo_$showNavigationInfo__Lgwt_jelement_demo_client_PerformanceDemo_2Lgwt_jelement_timing_PerformanceNavigation_2V(navigation){
  var navigationInfoDiv, navigationType;
  navigationInfoDiv = com_google_gwt_lang_Cast_castToNative__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2($wnd.window.document.getElementById('navigationInfo'), $wnd.HTMLDivElement);
  navigationType = 'Unknown';
  navigation.type == $wnd.PerformanceNavigation.TYPE_NAVIGATE?(navigationType = 'Navigated to page'):navigation.type == $wnd.PerformanceNavigation.TYPE_RELOAD?(navigationType = 'Reloaded the page'):navigation.type == $wnd.PerformanceNavigation.TYPE_BACK_FORWARD && (navigationType = 'Used back or forward to access page');
  navigationInfoDiv.appendChild(gwt_jelement_demo_client_PerformanceDemo_$createDivWithText__Lgwt_jelement_demo_client_PerformanceDemo_2Ljava_lang_String_2Lgwt_jelement_html_HTMLDivElement_2('<b>Navigation type:<\/b> ' + navigationType));
  navigationInfoDiv.appendChild(gwt_jelement_demo_client_PerformanceDemo_$createDivWithText__Lgwt_jelement_demo_client_PerformanceDemo_2Ljava_lang_String_2Lgwt_jelement_html_HTMLDivElement_2('<b>Redirect count:<\/b> ' + navigation.redirectCount));
}

function gwt_jelement_demo_client_PerformanceDemo_$showPerformanceTiming__Lgwt_jelement_demo_client_PerformanceDemo_2Lgwt_jelement_timing_PerformanceTiming_2V(timing){
  var descriptor, entries, entry, entry$array, entry$index, entry$max, firstTime, getter, propertyDescriptors, propertyName, timeElapsed, timingDiv, timingMap;
  timingMap = new java_util_HashMap_HashMap__V;
  propertyDescriptors = $wnd.Object.getOwnPropertyDescriptors(com_google_gwt_lang_Cast_castToJsObject__Ljava_lang_Object_2Ljava_lang_Object_2(timing).__proto__);
  for (entry$array = $wnd.Object.entries(propertyDescriptors) , entry$index = 0 , entry$max = entry$array.length; entry$index < entry$max; ++entry$index) {
    entry = entry$array[entry$index];
    propertyName = com_google_gwt_lang_Cast_castToString__Ljava_lang_Object_2Ljava_lang_Object_2(entry[0]);
    descriptor = com_google_gwt_lang_Cast_castToJsObject__Ljava_lang_Object_2Ljava_lang_Object_2(entry[1]);
    if (descriptor.enumerable && descriptor.get != null && !java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(propertyName.substr(0, 6), 'unload')) {
      getter = com_google_gwt_lang_Cast_castToFunction__Ljava_lang_Object_2Ljava_lang_Object_2(descriptor.get);
      timeElapsed = javaemul_internal_InternalPreconditions_checkNotNull__Ljava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_lang_Cast_castToDouble__Ljava_lang_Object_2Ljava_lang_Object_2(getter.call(timing)));
      timeElapsed != 0 && java_util_AbstractHashMap_$putStringValue__Ljava_util_AbstractHashMap_2Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(timingMap, propertyName, timeElapsed);
    }
  }
  timingDiv = com_google_gwt_lang_Cast_castToNative__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2($wnd.window.document.querySelector('#demoContainer #timing'), $wnd.HTMLDivElement);
  entries = new java_util_ArrayList_ArrayList__Ljava_util_Collection_2V(new java_util_AbstractHashMap$EntrySet_AbstractHashMap$EntrySet__Ljava_util_AbstractHashMap_2V(timingMap));
  if (entries.java_util_ArrayList_array.length != 0) {
    java_util_ArrayList_$sort__Ljava_util_ArrayList_2Ljava_util_Comparator_2V(entries, java_util_Comparator_comparing__Ljava_util_function_Function_2Ljava_util_Comparator_2Ljava_util_Comparator_2(new gwt_jelement_demo_client_PerformanceDemo$0methodref$getValue$Type_PerformanceDemo$0methodref$getValue$Type__V, (java_util_Comparators_$clinit__V() , java_util_Comparators_$clinit__V() , java_util_Comparators_NATURAL_1ORDER)));
    firstTime = javaemul_internal_InternalPreconditions_checkNotNull__Ljava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_lang_Cast_castToDouble__Ljava_lang_Object_2Ljava_lang_Object_2((javaemul_internal_InternalPreconditions_checkCriticalElementIndex__IIV(0, entries.java_util_ArrayList_array.length) , com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(entries.java_util_ArrayList_array[0], 12)).getValue__Ljava_lang_Object_2()));
    java_util_ArrayList_$forEach__Ljava_util_ArrayList_2Ljava_util_function_Consumer_2V(entries, new gwt_jelement_demo_client_PerformanceDemo$lambda$0$Type_PerformanceDemo$lambda$0$Type__Lgwt_jelement_demo_client_PerformanceDemo_2Lgwt_jelement_html_HTMLDivElement_2DV(timingDiv, firstTime));
  }
}

function gwt_jelement_demo_client_PerformanceDemo_PerformanceDemo__V(){
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(91, 13, $intern_22, gwt_jelement_demo_client_PerformanceDemo_PerformanceDemo__V);
_.execute__V = function gwt_jelement_demo_client_PerformanceDemo_execute__V(){
  var memoryInfoDiv, performance_0;
  if (!($intern_33 in gwt_jelement_core_IsObject_$object__Lgwt_jelement_core_IsObject_2Lgwt_jelement_core_JsObject_2($wnd.window.window))) {
    $wnd.window.window.alert('The Performance API is not supported in your browser.');
    return;
  }
  $intern_34 in gwt_jelement_core_IsObject_$object__Lgwt_jelement_core_IsObject_2Lgwt_jelement_core_JsObject_2($wnd.Object.prototype.constructor) || ($wnd.Object.prototype[$intern_34] = com_google_gwt_lang_Runtime_makeLambdaFunction__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(gwt_jelement_demo_client_PerformanceDemo$1_PerformanceDemo$1__Lgwt_jelement_demo_client_PerformanceDemo_2V.prototype.onInvoked___3Ljava_lang_Object_2Ljava_lang_Object_2, gwt_jelement_demo_client_PerformanceDemo$1_PerformanceDemo$1__Lgwt_jelement_demo_client_PerformanceDemo_2V, []));
  'entries' in gwt_jelement_core_IsObject_$object__Lgwt_jelement_core_IsObject_2Lgwt_jelement_core_JsObject_2($wnd.Object.prototype.constructor) || ($wnd.Object.prototype['entries'] = new $wnd.Function('obj', "return Object.keys(obj).reduce(function(e, k){return e.concat(typeof k === 'string' && obj.propertyIsEnumerable(k) ?[[k, obj[k]]] : []);}, []);"));
  performance_0 = $wnd.window.window.performance;
  gwt_jelement_demo_client_PerformanceDemo_$showPerformanceTiming__Lgwt_jelement_demo_client_PerformanceDemo_2Lgwt_jelement_timing_PerformanceTiming_2V(performance_0.timing);
  gwt_jelement_demo_client_PerformanceDemo_$showNavigationInfo__Lgwt_jelement_demo_client_PerformanceDemo_2Lgwt_jelement_timing_PerformanceNavigation_2V(performance_0.navigation);
  memoryInfoDiv = com_google_gwt_lang_Cast_castToNative__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2($wnd.window.document.getElementById('memoryInfo'), $wnd.HTMLDivElement);
  performance_0.memory != null?gwt_jelement_demo_client_PerformanceDemo_$showMemoryInfo__Lgwt_jelement_demo_client_PerformanceDemo_2Lgwt_jelement_timing_MemoryInfo_2Lgwt_jelement_html_HTMLDivElement_2V(performance_0.memory, memoryInfoDiv):memoryInfoDiv.parentElement.removeChild(memoryInfoDiv);
}
;
_.getName__Ljava_lang_String_2 = function gwt_jelement_demo_client_PerformanceDemo_getName__Ljava_lang_String_2(){
  return $intern_33;
}
;
_.getSource__Lcom_google_gwt_resources_client_TextResource_2 = function gwt_jelement_demo_client_PerformanceDemo_getSource__Lcom_google_gwt_resources_client_TextResource_2(){
  return gwt_jelement_demo_client_SourceClientBundle_1default_1InlineClientBundleGenerator$getPerformanceSourceInitializer_$clinit__V() , gwt_jelement_demo_client_SourceClientBundle_1default_1InlineClientBundleGenerator_getPerformanceSource;
}
;
_.getTemplate__Lcom_google_gwt_resources_client_TextResource_2 = function gwt_jelement_demo_client_PerformanceDemo_getTemplate__Lcom_google_gwt_resources_client_TextResource_2(){
  return gwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator$getPerformanceHtmlInitializer_$clinit__V() , gwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator_getPerformanceHtml;
}
;
_.getTitle__Ljava_lang_String_2 = function gwt_jelement_demo_client_PerformanceDemo_getTitle__Ljava_lang_String_2(){
  return 'Performance API Demo';
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lgwt_1jelement_1demo_1client_1PerformanceDemo_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_23, 'PerformanceDemo', 91);
function gwt_jelement_demo_client_PerformanceDemo$0methodref$getValue$Type_PerformanceDemo$0methodref$getValue$Type__V(){
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(132, 1, {}, gwt_jelement_demo_client_PerformanceDemo$0methodref$getValue$Type_PerformanceDemo$0methodref$getValue$Type__V);
var com_google_gwt_lang_ClassLiteralHolder_Lgwt_1jelement_1demo_1client_1PerformanceDemo$0methodref$getValue$Type_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_23, 'PerformanceDemo/0methodref$getValue$Type', 132);
function gwt_jelement_demo_client_PerformanceDemo$1_PerformanceDemo$1__Lgwt_jelement_demo_client_PerformanceDemo_2V(){
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(237, $wnd.Function, {}, gwt_jelement_demo_client_PerformanceDemo$1_PerformanceDemo$1__Lgwt_jelement_demo_client_PerformanceDemo_2V);
_.onInvoked___3Ljava_lang_Object_2Ljava_lang_Object_2 = function gwt_jelement_demo_client_PerformanceDemo$1_onInvoked___3Ljava_lang_Object_2Ljava_lang_Object_2(){
  var key, key$array, key$index, key$max, objectPrototype, result;
  objectPrototype = com_google_gwt_lang_Cast_castToJsObject__Ljava_lang_Object_2Ljava_lang_Object_2(arguments[0]);
  result = new $wnd.Object;
  for (key$array = $wnd.Object.getOwnPropertyNames(objectPrototype) , key$index = 0 , key$max = key$array.length; key$index < key$max; ++key$index) {
    key = key$array[key$index];
    result[key] = $wnd.Object.getOwnPropertyDescriptor(objectPrototype, key);
  }
  return result;
}
;
function gwt_jelement_demo_client_PerformanceDemo$lambda$0$Type_PerformanceDemo$lambda$0$Type__Lgwt_jelement_demo_client_PerformanceDemo_2Lgwt_jelement_html_HTMLDivElement_2DV(timingDiv_1, firstTime_2){
  this.gwt_jelement_demo_client_PerformanceDemo$lambda$0$Type_timingDiv_11 = timingDiv_1;
  this.gwt_jelement_demo_client_PerformanceDemo$lambda$0$Type_firstTime_12 = firstTime_2;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(133, 1, {}, gwt_jelement_demo_client_PerformanceDemo$lambda$0$Type_PerformanceDemo$lambda$0$Type__Lgwt_jelement_demo_client_PerformanceDemo_2Lgwt_jelement_html_HTMLDivElement_2DV);
_.accept__Ljava_lang_Object_2V = function gwt_jelement_demo_client_PerformanceDemo$lambda$0$Type_accept__Ljava_lang_Object_2V(arg0){
  gwt_jelement_demo_client_PerformanceDemo_$lambda$0__Lgwt_jelement_demo_client_PerformanceDemo_2Lgwt_jelement_html_HTMLDivElement_2DLjava_util_Map$Entry_2V(this.gwt_jelement_demo_client_PerformanceDemo$lambda$0$Type_timingDiv_11, this.gwt_jelement_demo_client_PerformanceDemo$lambda$0$Type_firstTime_12, arg0);
}
;
_.gwt_jelement_demo_client_PerformanceDemo$lambda$0$Type_firstTime_12 = 0;
var com_google_gwt_lang_ClassLiteralHolder_Lgwt_1jelement_1demo_1client_1PerformanceDemo$lambda$0$Type_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_23, 'PerformanceDemo/lambda$0$Type', 133);
var gwt_jelement_demo_client_SourceClientBundle_1default_1InlineClientBundleGenerator_getBatterySource, gwt_jelement_demo_client_SourceClientBundle_1default_1InlineClientBundleGenerator_getCanvas2DDemoSource, gwt_jelement_demo_client_SourceClientBundle_1default_1InlineClientBundleGenerator_getElementAnimateDemoSource, gwt_jelement_demo_client_SourceClientBundle_1default_1InlineClientBundleGenerator_getGeolocationSource, gwt_jelement_demo_client_SourceClientBundle_1default_1InlineClientBundleGenerator_getNotificationSource, gwt_jelement_demo_client_SourceClientBundle_1default_1InlineClientBundleGenerator_getPerformanceSource, gwt_jelement_demo_client_SourceClientBundle_1default_1InlineClientBundleGenerator_getSpeechSynthesisSource, gwt_jelement_demo_client_SourceClientBundle_1default_1InlineClientBundleGenerator_getSvgSource, gwt_jelement_demo_client_SourceClientBundle_1default_1InlineClientBundleGenerator_getWebAudioDemoSource, gwt_jelement_demo_client_SourceClientBundle_1default_1InlineClientBundleGenerator_getWebGlSource;
function gwt_jelement_demo_client_SourceClientBundle_1default_1InlineClientBundleGenerator$1_SourceClientBundle_1default_1InlineClientBundleGenerator$1__Lgwt_jelement_demo_client_SourceClientBundle_1default_1InlineClientBundleGenerator_2V(){
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(148, 1, {}, gwt_jelement_demo_client_SourceClientBundle_1default_1InlineClientBundleGenerator$1_SourceClientBundle_1default_1InlineClientBundleGenerator$1__Lgwt_jelement_demo_client_SourceClientBundle_1default_1InlineClientBundleGenerator_2V);
_.getText__Ljava_lang_String_2 = function gwt_jelement_demo_client_SourceClientBundle_1default_1InlineClientBundleGenerator$1_getText__Ljava_lang_String_2(){
  return 'package gwt.jelement.demo.client;\r\n\r\nimport com.google.gwt.resources.client.TextResource;\r\nimport gwt.jelement.battery.BatteryManager;\r\nimport gwt.jelement.core.Math;\r\nimport gwt.jelement.demo.client.html.HtmlClientBundle;\r\nimport gwt.jelement.events.EventHandlerNonNull;\r\nimport gwt.jelement.html.HTMLDivElement;\r\n\r\nimport static gwt.jelement.Browser.document;\r\nimport static gwt.jelement.Browser.navigator;\r\n\r\npublic class BatteryDemo extends AbstractDemo {\r\n\r\n    private BatteryManager batteryManager;\r\n\r\n    @Override\r\n    protected void execute() {\r\n        if (navigator.object().has("getBattery")) {\r\n            navigator.getBattery().then(this::setup);\r\n        } else {\r\n            HTMLDivElement statusDiv = document.querySelector("div.status");\r\n            statusDiv.setInnerHTML("Not supported in this browser");\r\n            statusDiv.getClassList().add("error");\r\n        }\r\n    }\r\n\r\n    private Object setup(BatteryManager batteryManager) {\r\n        this.batteryManager = batteryManager;\r\n        EventHandlerNonNull updateEventHandler = event -> {\r\n            updateStatus(batteryManager);\r\n            return null;\r\n        };\r\n        batteryManager.setOnChargingchange(updateEventHandler);\r\n        batteryManager.setOnChargingtimechange(updateEventHandler);\r\n        batteryManager.setOnDischargingtimechange(updateEventHandler);\r\n        batteryManager.setOnLevelchange(updateEventHandler);\r\n        updateStatus(batteryManager);\r\n        return null;\r\n    }\r\n\r\n    private void updateStatus(BatteryManager batteryManager) {\r\n        if (isDemoActive()) {\r\n            HTMLDivElement batteryInner = document.querySelector(".battery-inner");\r\n            String statusString;\r\n            double level = Math.trunc(100 * batteryManager.getLevel());\r\n            if (batteryManager.isCharging()) {\r\n                statusString = "Plugged in, " + level + "%<br>" + toTimString(batteryManager.getChargingTime());\r\n            } else {\r\n                statusString = ("On Battery, " + level +\r\n                        "%<br>" + toTimString(batteryManager.getDischargingTime()));\r\n            }\r\n            batteryInner.getStyle().setProperty("width", level + "%");\r\n            batteryInner.getClassList().remove("high", "medium", "low");\r\n            batteryInner.getClassList().add(level > 66 ? "high" : level > 33 ? "medium" : "low");\r\n            document.querySelector("div.status").setInnerHTML(statusString);\r\n        }\r\n    }\r\n\r\n    private String toTimString(double time) {\r\n        if (Double.isInfinite(time)) {\r\n            return "time left: not available";\r\n        }\r\n        if (time == 0) {\r\n            return "&nbsp;";\r\n        }\r\n        String result = "";\r\n        double hours = Math.trunc(time / 3600d);\r\n        if (hours != 0) {\r\n            result += hours + " hr ";\r\n        }\r\n        double minutes = Math.trunc((time - hours * 3600) / 60);\r\n        if (minutes != 0) {\r\n            result += minutes + " min";\r\n        }\r\n        return "time left: " + result;\r\n    }\r\n\r\n    @Override\r\n    protected void setInactive() {\r\n        if (batteryManager!=null) {\r\n            batteryManager.setOnDischargingtimechange(null);\r\n            batteryManager.setOnLevelchange(null);\r\n            batteryManager.setOnChargingtimechange(null);\r\n            batteryManager.setOnChargingchange(null);\r\n        }\r\n        super.setInactive();\r\n    }\r\n\r\n    @Override\r\n    protected String getName() {\r\n        return "battery";\r\n    }\r\n\r\n    @Override\r\n    protected String getTitle() {\r\n        return "Battery Status Demo";\r\n    }\r\n\r\n    @Override\r\n    protected TextResource getTemplate() {\r\n        return HtmlClientBundle.INSTANCE.getBatteryHtml();\r\n    }\r\n\r\n    @Override\r\n    protected TextResource getSource() {\r\n        return SourceClientBundle.INSTANCE.getBatterySource();\r\n    }\r\n}\r\n';
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lgwt_1jelement_1demo_1client_1SourceClientBundle_11default_11InlineClientBundleGenerator$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_23, 'SourceClientBundle_default_InlineClientBundleGenerator/1', 148);
function gwt_jelement_demo_client_SourceClientBundle_1default_1InlineClientBundleGenerator$10_SourceClientBundle_1default_1InlineClientBundleGenerator$10__Lgwt_jelement_demo_client_SourceClientBundle_1default_1InlineClientBundleGenerator_2V(){
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(157, 1, {}, gwt_jelement_demo_client_SourceClientBundle_1default_1InlineClientBundleGenerator$10_SourceClientBundle_1default_1InlineClientBundleGenerator$10__Lgwt_jelement_demo_client_SourceClientBundle_1default_1InlineClientBundleGenerator_2V);
_.getText__Ljava_lang_String_2 = function gwt_jelement_demo_client_SourceClientBundle_1default_1InlineClientBundleGenerator$10_getText__Ljava_lang_String_2(){
  return 'package gwt.jelement.demo.client;\r\n\r\nimport com.google.gwt.core.client.ScriptInjector;\r\nimport com.google.gwt.resources.client.TextResource;\r\nimport gwt.jelement.core.*;\r\nimport gwt.jelement.core.Math;\r\nimport gwt.jelement.demo.client.html.HtmlClientBundle;\r\nimport gwt.jelement.demo.client.jsinterop.Mat3;\r\nimport gwt.jelement.demo.client.jsinterop.Mat4;\r\nimport gwt.jelement.dom.Node;\r\nimport gwt.jelement.html.HTMLCanvasElement;\r\nimport gwt.jelement.html.HTMLScriptElement;\r\nimport gwt.jelement.html.Image;\r\nimport gwt.jelement.webgl.*;\r\nimport gwt.jelement.xmlhttprequest.XMLHttpRequest;\r\n\r\nimport static gwt.jelement.Browser.*;\r\n\r\n/*\r\nThis is a port of the JavaScript code in "WebGL Lesson 14 \u2013 specular highlights and loading a JSON model",\r\nhttp://learningwebgl.com/blog/?p=1658, by Giles Thomas\r\n\r\nAs with the original code, this code is licensed under a Creative Commons Attribution/Share-Alike license\r\n(http://creativecommons.org/licenses/by-sa/3.0/)\r\n */\r\n\r\npublic class WebGlDemo extends AbstractDemo {\r\n    static {\r\n        /* inject a matrix manipulation library */\r\n        ScriptInjector.fromString(HtmlClientBundle.INSTANCE.getGlMatrixJs().getText())\r\n                .setWindow(ScriptInjector.TOP_WINDOW).inject();\r\n    }\r\n\r\n    private final Float32Array mvMatrix = Mat4.create();\r\n    private final Float32Array pMatrix = Mat4.create();\r\n    private WebGLUniformLocation pMatrixUniform;\r\n    private WebGLRenderingContext gl;\r\n    private double viewportWidth;\r\n    private double viewportHeight;\r\n    private WebGLTexture galvanizedTexture;\r\n    private WebGLBuffer teapotVertexNormalBuffer;\r\n    private WebGLBuffer teapotVertexPositionBuffer;\r\n    private WebGLBuffer teapotVertexTextureCoordBuffer;\r\n    private WebGLBuffer teapotVertexIndexBuffer;\r\n    private double teapotAngle = 180;\r\n    private double vertexPositionAttribute;\r\n    private double vertexNormalAttribute;\r\n    private double textureCoordAttribute;\r\n    private WebGLUniformLocation mvMatrixUniform;\r\n    private WebGLUniformLocation nMatrixUniform;\r\n    private WebGLUniformLocation samplerUniform;\r\n    private WebGLUniformLocation materialShininessUniform;\r\n    private WebGLUniformLocation showSpecularHighlightsUniform;\r\n    private WebGLUniformLocation useTexturesUniform;\r\n    private WebGLUniformLocation useLightingUniform;\r\n    private WebGLUniformLocation ambientColorUniform;\r\n    private WebGLUniformLocation pointLightingLocationUniform;\r\n    private WebGLUniformLocation pointLightingDiffuseColorUniform;\r\n    private WebGLUniformLocation pointLightingSpecularColorUniform;\r\n    private int teapotVertexNormalBufferItemSize;\r\n    private int teapotVertexTextureCoordBufferItemSize;\r\n    private int teapotVertexPositionBufferItemSize;\r\n    private double teapotVertexIndexBufferNumItems;\r\n    private double lastTime = 0;\r\n\r\n    @Override\r\n    protected void execute() {\r\n        HTMLCanvasElement canvas = document.getElementById("webgl-canvas");\r\n        viewportWidth = canvas.getWidth();\r\n        viewportHeight = canvas.getHeight();\r\n\r\n        gl = canvas.getContext("experimental-webgl").asWebGLRenderingContext();\r\n\r\n        initShaders();\r\n\r\n        galvanizedTexture = createTexture();\r\n\r\n        loadTeapot();\r\n\r\n        gl.clearColor(0.0, 0.0, 0.0, 1.0);\r\n        gl.enable(WebGLRenderingContext.DEPTH_TEST);\r\n\r\n        tick();\r\n    }\r\n\r\n    private void initShaders() {\r\n        WebGLShader fragmentShader = getShader(gl, "per-fragment-lighting-fs");\r\n        WebGLShader vertexShader = getShader(gl, "per-fragment-lighting-vs");\r\n\r\n        WebGLProgram shaderProgram = gl.createProgram();\r\n        gl.attachShader(shaderProgram, vertexShader);\r\n        gl.attachShader(shaderProgram, fragmentShader);\r\n        gl.linkProgram(shaderProgram);\r\n\r\n        if (!Js.isTrue(gl.getProgramParameter(shaderProgram, WebGLRenderingContext.LINK_STATUS))) {\r\n            window.alert("Could not initialise shaders");\r\n        }\r\n\r\n        gl.useProgram(shaderProgram);\r\n\r\n        vertexPositionAttribute = gl.getAttribLocation(shaderProgram, "aVertexPosition");\r\n        gl.enableVertexAttribArray(vertexPositionAttribute);\r\n\r\n        vertexNormalAttribute = gl.getAttribLocation(shaderProgram, "aVertexNormal");\r\n        gl.enableVertexAttribArray(vertexNormalAttribute);\r\n\r\n        textureCoordAttribute = gl.getAttribLocation(shaderProgram, "aTextureCoord");\r\n        gl.enableVertexAttribArray(textureCoordAttribute);\r\n\r\n        pMatrixUniform = gl.getUniformLocation(shaderProgram, "uPMatrix");\r\n        mvMatrixUniform = gl.getUniformLocation(shaderProgram, "uMVMatrix");\r\n        nMatrixUniform = gl.getUniformLocation(shaderProgram, "uNMatrix");\r\n        samplerUniform = gl.getUniformLocation(shaderProgram, "uSampler");\r\n        materialShininessUniform = gl.getUniformLocation(shaderProgram, "uMaterialShininess");\r\n        showSpecularHighlightsUniform = gl.getUniformLocation(shaderProgram, "uShowSpecularHighlights");\r\n        useTexturesUniform = gl.getUniformLocation(shaderProgram, "uUseTextures");\r\n        useLightingUniform = gl.getUniformLocation(shaderProgram, "uUseLighting");\r\n        ambientColorUniform = gl.getUniformLocation(shaderProgram, "uAmbientColor");\r\n        pointLightingLocationUniform = gl.getUniformLocation(shaderProgram, "uPointLightingLocation");\r\n        pointLightingSpecularColorUniform = gl.getUniformLocation(shaderProgram, "uPointLightingSpecularColor");\r\n        pointLightingDiffuseColorUniform = gl.getUniformLocation(shaderProgram, "uPointLightingDiffuseColor");\r\n    }\r\n\r\n    private WebGLShader getShader(WebGLRenderingContext gl, String id) {\r\n        HTMLScriptElement shaderScript = document.getElementById(id);\r\n        StringBuilder shaderSource = new StringBuilder();\r\n        Node node = shaderScript.getFirstChild();\r\n        while (node != null) {\r\n            if (node.getNodeType() == Node.TEXT_NODE) {\r\n                shaderSource.append(node.getTextContent());\r\n            }\r\n            node = node.getNextSibling();\r\n        }\r\n\r\n        WebGLShader shader;\r\n        if ("x-shader/x-fragment".equals(shaderScript.getType())) {\r\n            shader = gl.createShader(WebGLRenderingContext.FRAGMENT_SHADER);\r\n        } else if ("x-shader/x-vertex".equals(shaderScript.getType())) {\r\n            shader = gl.createShader(WebGLRenderingContext.VERTEX_SHADER);\r\n        } else {\r\n            return null;\r\n        }\r\n\r\n        gl.shaderSource(shader, shaderSource.toString());\r\n        gl.compileShader(shader);\r\n\r\n        if (!Js.isTrue(gl.getShaderParameter(shader, WebGLRenderingContext.COMPILE_STATUS))) {\r\n            window.alert(gl.getShaderInfoLog(shader));\r\n            return null;\r\n        }\r\n\r\n        return shader;\r\n    }\r\n\r\n    private WebGLTexture createTexture() {\r\n        WebGLTexture texture = gl.createTexture();\r\n        final Image image = new Image();\r\n        image.setOnLoad(event -> {\r\n            handleLoadedTexture(texture, image);\r\n            return null;\r\n        });\r\n        image.setSrc("galvanized.jpg");\r\n        return texture;\r\n    }\r\n\r\n    private void handleLoadedTexture(WebGLTexture texture, Image image) {\r\n        gl.pixelStorei(WebGLRenderingContext.UNPACK_FLIP_Y_WEBGL, 1);\r\n        gl.bindTexture(WebGLRenderingContext.TEXTURE_2D, texture);\r\n        gl.texImage2D(WebGLRenderingContext.TEXTURE_2D, 0, WebGLRenderingContext.RGBA,\r\n                WebGLRenderingContext.RGBA, WebGLRenderingContext.UNSIGNED_BYTE, image);\r\n        gl.texParameteri(WebGLRenderingContext.TEXTURE_2D, WebGLRenderingContext.TEXTURE_MAG_FILTER,\r\n                WebGLRenderingContext.LINEAR);\r\n        gl.texParameteri(WebGLRenderingContext.TEXTURE_2D, WebGLRenderingContext.TEXTURE_MIN_FILTER,\r\n                WebGLRenderingContext.LINEAR_MIPMAP_NEAREST);\r\n        gl.generateMipmap(WebGLRenderingContext.TEXTURE_2D);\r\n        gl.bindTexture(WebGLRenderingContext.TEXTURE_2D, null);\r\n    }\r\n\r\n    private void loadTeapot() {\r\n        XMLHttpRequest request = new XMLHttpRequest();\r\n        request.open("GET", "Teapot.json");\r\n        request.setOnReadystatechange(event -> {\r\n            if (request.getReadyState() == XMLHttpRequest.DONE) {\r\n                Any.of(JSON.parse(request.getResponseText()))\r\n                        .<JsObject<Array<?>>>asObject(data -> handleLoadedTeapot(gl, data))\r\n                        .otherwise(v -> console.log("Something went wrong, got ", v, ", expected an Array"));\r\n            }\r\n            return null;\r\n        });\r\n        request.send();\r\n    }\r\n\r\n    private void handleLoadedTeapot(WebGLRenderingContext gl, JsObject<Array<?>> teapotData) {\r\n        teapotVertexNormalBuffer = gl.createBuffer();\r\n        gl.bindBuffer(WebGLRenderingContext.ARRAY_BUFFER, teapotVertexNormalBuffer);\r\n        gl.bufferData(WebGLRenderingContext.ARRAY_BUFFER, new Float32Array(teapotData.get("vertexNormals")),\r\n                WebGLRenderingContext.STATIC_DRAW);\r\n        teapotVertexNormalBufferItemSize = 3;\r\n\r\n        teapotVertexTextureCoordBuffer = gl.createBuffer();\r\n        gl.bindBuffer(WebGLRenderingContext.ARRAY_BUFFER, teapotVertexTextureCoordBuffer);\r\n        gl.bufferData(WebGLRenderingContext.ARRAY_BUFFER, new Float32Array(teapotData.get("vertexTextureCoords")),\r\n                WebGLRenderingContext.STATIC_DRAW);\r\n        teapotVertexTextureCoordBufferItemSize = 2;\r\n\r\n        teapotVertexPositionBuffer = gl.createBuffer();\r\n        gl.bindBuffer(WebGLRenderingContext.ARRAY_BUFFER, teapotVertexPositionBuffer);\r\n        gl.bufferData(WebGLRenderingContext.ARRAY_BUFFER, new Float32Array(teapotData.get("vertexPositions")),\r\n                WebGLRenderingContext.STATIC_DRAW);\r\n        teapotVertexPositionBufferItemSize = 3;\r\n\r\n        teapotVertexIndexBuffer = gl.createBuffer();\r\n        gl.bindBuffer(WebGLRenderingContext.ELEMENT_ARRAY_BUFFER, teapotVertexIndexBuffer);\r\n        Array<?> indices = teapotData.get("indices");\r\n        gl.bufferData(WebGLRenderingContext.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices),\r\n                WebGLRenderingContext.STATIC_DRAW);\r\n        teapotVertexIndexBufferNumItems = indices.getLength();\r\n    }\r\n\r\n    private void tick() {\r\n        if (!isDemoActive()) {\r\n            return;\r\n        }\r\n        window.requestAnimationFrame(v -> tick());\r\n        drawScene();\r\n        animate();\r\n    }\r\n\r\n    private void drawScene() {\r\n        gl.viewport(0, 0, viewportWidth, viewportHeight);\r\n        gl.clear((int) WebGLRenderingContext.COLOR_BUFFER_BIT | (int) WebGLRenderingContext.DEPTH_BUFFER_BIT);\r\n\r\n        if (teapotVertexPositionBuffer == null || teapotVertexNormalBuffer == null ||\r\n                teapotVertexTextureCoordBuffer == null || teapotVertexIndexBuffer == null) {\r\n            return;\r\n        }\r\n        Mat4.perspective(45, viewportWidth / viewportHeight, 0.1, 100.0, pMatrix);\r\n        gl.uniform1i(showSpecularHighlightsUniform, 1);\r\n        gl.uniform1i(useLightingUniform, 1);\r\n        gl.uniform3f(ambientColorUniform, 0.2, 0.2, 0.2);\r\n        gl.uniform3f(pointLightingLocationUniform, -10, 4, -20);\r\n        gl.uniform3f(pointLightingSpecularColorUniform, .8, .8, .8);\r\n        gl.uniform3f(pointLightingDiffuseColorUniform, .8, .8, .8);\r\n        gl.uniform1i(useTexturesUniform, 1);\r\n\r\n        Mat4.identity(mvMatrix);\r\n        Mat4.translate(mvMatrix, new double[]{0, 0, -40});\r\n        Mat4.rotate(mvMatrix, degToRad(23.4), new double[]{1, 0, -1});\r\n        Mat4.rotate(mvMatrix, degToRad(teapotAngle), new double[]{0, 1, 0});\r\n\r\n        gl.activeTexture(WebGLRenderingContext.TEXTURE0);\r\n        gl.bindTexture(WebGLRenderingContext.TEXTURE_2D, galvanizedTexture);\r\n        gl.uniform1i(samplerUniform, 0);\r\n        gl.uniform1f(materialShininessUniform, 32);\r\n\r\n        gl.bindBuffer(WebGLRenderingContext.ARRAY_BUFFER, teapotVertexPositionBuffer);\r\n        gl.vertexAttribPointer(vertexPositionAttribute, teapotVertexPositionBufferItemSize,\r\n                WebGLRenderingContext.FLOAT, false, 0, 0);\r\n\r\n        gl.bindBuffer(WebGLRenderingContext.ARRAY_BUFFER, teapotVertexTextureCoordBuffer);\r\n        gl.vertexAttribPointer(textureCoordAttribute, teapotVertexTextureCoordBufferItemSize,\r\n                WebGLRenderingContext.FLOAT, false, 0, 0);\r\n\r\n        gl.bindBuffer(WebGLRenderingContext.ARRAY_BUFFER, teapotVertexNormalBuffer);\r\n        gl.vertexAttribPointer(vertexNormalAttribute, teapotVertexNormalBufferItemSize, WebGLRenderingContext.FLOAT,\r\n                false, 0, 0);\r\n\r\n        gl.bindBuffer(WebGLRenderingContext.ELEMENT_ARRAY_BUFFER, teapotVertexIndexBuffer);\r\n        setMatrixUniforms();\r\n        gl.drawElements(WebGLRenderingContext.TRIANGLES, teapotVertexIndexBufferNumItems,\r\n                WebGLRenderingContext.UNSIGNED_SHORT, 0);\r\n    }\r\n\r\n    private void setMatrixUniforms() {\r\n        gl.uniformMatrix4fv(pMatrixUniform, false, pMatrix);\r\n        gl.uniformMatrix4fv(mvMatrixUniform, false, mvMatrix);\r\n\r\n        Float32Array normalMatrix = Mat3.create();\r\n        Mat4.toInverseMat3(mvMatrix, normalMatrix);\r\n        Mat3.transpose(normalMatrix);\r\n        gl.uniformMatrix3fv(nMatrixUniform, false, normalMatrix);\r\n    }\r\n\r\n    private double degToRad(double degrees) {\r\n        return degrees * Math.PI / 180;\r\n    }\r\n\r\n    private void animate() {\r\n        double timeNow = new Date().getTime();\r\n        if (lastTime != 0) {\r\n            double elapsed = timeNow - lastTime;\r\n            teapotAngle += 0.05 * elapsed;\r\n        }\r\n        lastTime = timeNow;\r\n    }\r\n\r\n    @Override\r\n    protected String getName() {\r\n        return "webgl";\r\n    }\r\n\r\n    @Override\r\n    protected String getTitle() {\r\n        return "WebGL Demo";\r\n    }\r\n\r\n    @Override\r\n    protected TextResource getTemplate() {\r\n        return HtmlClientBundle.INSTANCE.getWebGlHtml();\r\n    }\r\n\r\n    @Override\r\n    protected TextResource getSource() {\r\n        return SourceClientBundle.INSTANCE.getWebGlSource();\r\n    }\r\n}\r\n';
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lgwt_1jelement_1demo_1client_1SourceClientBundle_11default_11InlineClientBundleGenerator$10_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_23, 'SourceClientBundle_default_InlineClientBundleGenerator/10', 157);
function gwt_jelement_demo_client_SourceClientBundle_1default_1InlineClientBundleGenerator$2_SourceClientBundle_1default_1InlineClientBundleGenerator$2__Lgwt_jelement_demo_client_SourceClientBundle_1default_1InlineClientBundleGenerator_2V(){
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(149, 1, {}, gwt_jelement_demo_client_SourceClientBundle_1default_1InlineClientBundleGenerator$2_SourceClientBundle_1default_1InlineClientBundleGenerator$2__Lgwt_jelement_demo_client_SourceClientBundle_1default_1InlineClientBundleGenerator_2V);
_.getText__Ljava_lang_String_2 = function gwt_jelement_demo_client_SourceClientBundle_1default_1InlineClientBundleGenerator$2_getText__Ljava_lang_String_2(){
  return 'package gwt.jelement.demo.client;\r\n\r\nimport com.google.gwt.resources.client.TextResource;\r\nimport gwt.jelement.canvas2d.CanvasRenderingContext2D;\r\nimport gwt.jelement.core.Date;\r\nimport gwt.jelement.core.Math;\r\nimport gwt.jelement.demo.client.html.HtmlClientBundle;\r\nimport gwt.jelement.html.HTMLCanvasElement;\r\nimport gwt.jelement.html.HTMLImageElement;\r\nimport gwt.jelement.html.Image;\r\n\r\nimport static gwt.jelement.Browser.*;\r\n\r\npublic class Canvas2DDemo extends AbstractDemo {\r\n\r\n    private double timer;\r\n\r\n    @Override\r\n    protected void execute() {\r\n        clockDemo();\r\n        planetsDemo();\r\n    }\r\n\r\n    /*\r\n        Planet demo by Mozilla Developer Network\r\n        https://jsfiddle.net/api/mdn/\r\n     */\r\n    private void planetsDemo() {\r\n        Image sun = new Image();\r\n        Image moon = new Image();\r\n        Image earth = new Image();\r\n        sun.setSrc("https://mdn.mozillademos.org/files/1456/Canvas_sun.png");\r\n        moon.setSrc("https://mdn.mozillademos.org/files/1443/Canvas_moon.png");\r\n        earth.setSrc("https://mdn.mozillademos.org/files/1429/Canvas_earth.png");\r\n\r\n        HTMLCanvasElement canvas = document.getElementById("sun-canvas");\r\n        CanvasRenderingContext2D ctx = canvas.getContext("2d").asCanvasRenderingContext2D();\r\n        window.requestAnimationFrame(v -> drawPlanets(ctx, earth, moon, sun));\r\n    }\r\n\r\n    private void drawPlanets(CanvasRenderingContext2D ctx, HTMLImageElement earth, HTMLImageElement moon, HTMLImageElement sun) {\r\n        ctx.setGlobalCompositeOperation("destination-over");\r\n        ctx.clearRect(0, 0, 300, 300);\r\n        ctx.setFillStyle("rgba(0, 0, 0, 0.4)");\r\n        ctx.setStrokeStyle("rgba(0, 153, 255, 0.4)");\r\n        ctx.save();\r\n        ctx.translate(150, 150);\r\n\r\n        Date time = new Date();\r\n        ctx.rotate(((2 * Math.PI) / 60) * time.getSeconds() + ((2 * Math.PI) / 60000) * time.getMilliseconds());\r\n        ctx.translate(105, 0);\r\n        ctx.fillRect(0, -12, 50, 24);\r\n        ctx.drawImage(earth, -12, -12);\r\n\r\n        ctx.save();\r\n        ctx.rotate(((2 * Math.PI) / 6) * time.getSeconds() + ((2 * Math.PI) / 6000) * time.getMilliseconds());\r\n        ctx.translate(0, 28.5);\r\n        ctx.drawImage(moon, -3.5, -3.5);\r\n        ctx.restore();\r\n\r\n        ctx.restore();\r\n\r\n        ctx.beginPath();\r\n        ctx.arc(150, 150, 105, 0, Math.PI * 2, false);\r\n        ctx.stroke();\r\n\r\n        ctx.drawImage(sun, 0, 0, 300, 300);\r\n        if (isDemoActive()) {\r\n            window.requestAnimationFrame(v -> drawPlanets(ctx, earth, moon, sun));\r\n        }\r\n    }\r\n\r\n    private void clockDemo() {\r\n        HTMLCanvasElement clockCanvas = document.getElementById("clock-canvas");\r\n        CanvasRenderingContext2D context = clockCanvas.getContext("2d").asCanvasRenderingContext2D();\r\n        timer = window.setInterval(args -> {\r\n            Date time = new Date();\r\n            double hours = time.getHours() % 12 + time.getMinutes() / 60d;\r\n            double minutes = time.getMinutes() + time.getSeconds() / 60d;\r\n            double seconds = time.getSeconds() + time.getMilliseconds() / 1000d;\r\n            double offset = -Math.PI / 2;\r\n            double hoursX = 75 * Math.cos(Math.PI * 2 * hours / 12 + offset) + 100;\r\n            double hoursY = 75 * Math.sin(Math.PI * 2 * hours / 12 + offset) + 100;\r\n            double minX = 80 * Math.cos(Math.PI * 2 * minutes / 60 + offset) + 100;\r\n            double minY = 80 * Math.sin(Math.PI * 2 * minutes / 60 + offset) + 100;\r\n            double secX = 80 * Math.cos(Math.PI * 2 * seconds / 60 + offset) + 100;\r\n            double secY = 80 * Math.sin(Math.PI * 2 * seconds / 60 + offset) + 100;\r\n            context.clearRect(0, 0, 200, 200);\r\n            context.beginPath();\r\n            context.setStrokeStyle("black");\r\n            context.setLineWidth(4);\r\n            context.moveTo(100, 100);\r\n            context.lineTo(hoursX, hoursY);\r\n            context.stroke();\r\n            context.beginPath();\r\n            context.setStrokeStyle("gray");\r\n            context.setLineWidth(3);\r\n            context.moveTo(100, 100);\r\n            context.lineTo(minX, minY);\r\n            context.stroke();\r\n            context.beginPath();\r\n            context.setLineWidth(1);\r\n            context.setStrokeStyle("red");\r\n            context.moveTo(100, 100);\r\n            context.lineTo(secX, secY);\r\n            context.stroke();\r\n            return null;\r\n        }, 50);\r\n    }\r\n\r\n    @Override\r\n    protected void setInactive() {\r\n        window.clearInterval(timer);\r\n        super.setInactive();\r\n    }\r\n\r\n    @Override\r\n    protected String getName() {\r\n        return "canvas2d";\r\n    }\r\n\r\n    @Override\r\n    protected String getTitle() {\r\n        return "Canvas 2D Demo";\r\n    }\r\n\r\n    @Override\r\n    protected TextResource getTemplate() {\r\n        return HtmlClientBundle.INSTANCE.getCanvas2DHtml();\r\n    }\r\n\r\n    @Override\r\n    protected TextResource getSource() {\r\n        return SourceClientBundle.INSTANCE.getCanvas2DDemoSource();\r\n    }\r\n}\r\n';
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lgwt_1jelement_1demo_1client_1SourceClientBundle_11default_11InlineClientBundleGenerator$2_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_23, 'SourceClientBundle_default_InlineClientBundleGenerator/2', 149);
function gwt_jelement_demo_client_SourceClientBundle_1default_1InlineClientBundleGenerator$3_SourceClientBundle_1default_1InlineClientBundleGenerator$3__Lgwt_jelement_demo_client_SourceClientBundle_1default_1InlineClientBundleGenerator_2V(){
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(150, 1, {}, gwt_jelement_demo_client_SourceClientBundle_1default_1InlineClientBundleGenerator$3_SourceClientBundle_1default_1InlineClientBundleGenerator$3__Lgwt_jelement_demo_client_SourceClientBundle_1default_1InlineClientBundleGenerator_2V);
_.getText__Ljava_lang_String_2 = function gwt_jelement_demo_client_SourceClientBundle_1default_1InlineClientBundleGenerator$3_getText__Ljava_lang_String_2(){
  return 'package gwt.jelement.demo.client;\r\n\r\nimport com.google.gwt.resources.client.TextResource;\r\nimport gwt.jelement.animation.KeyframeAnimationOptions;\r\nimport gwt.jelement.animation.PlaybackDirection;\r\nimport gwt.jelement.core.JsObject;\r\nimport gwt.jelement.demo.client.html.HtmlClientBundle;\r\nimport gwt.jelement.html.HTMLDivElement;\r\nimport gwt.jelement.html.HTMLImageElement;\r\n\r\nimport static gwt.jelement.Browser.Infinity;\r\nimport static gwt.jelement.Browser.document;\r\n\r\npublic class ElementAnimateDemo extends AbstractDemo {\r\n\r\n    @Override\r\n    protected void execute() {\r\n        HTMLDivElement mainDiv = document.querySelector("div.clouds");\r\n\r\n        JsObject[] cloudTransitions = new JsObject[]{\r\n                new JsObject<String>().with("backgroundPosition", "0 302px"),\r\n                new JsObject<String>().with("backgroundPosition", "0 0")\r\n        };\r\n        KeyframeAnimationOptions cloudAnimationOptions = new KeyframeAnimationOptions();\r\n        cloudAnimationOptions.setDuration(10_000);\r\n        cloudAnimationOptions.setIterations(Infinity);\r\n        mainDiv.animate(cloudTransitions, cloudAnimationOptions);\r\n\r\n        HTMLImageElement logo = document.createElement("img");\r\n        logo.setSrc("gwtlogo.png");\r\n        logo.getStyle().setProperty("position", "relative");\r\n        logo.getStyle().setProperty("left", "20px");\r\n        mainDiv.appendChild(logo);\r\n\r\n        JsObject[] logoTransitions = new JsObject[]{\r\n                new JsObject<String>().with("transform", "translateY(0px)"),\r\n                new JsObject<String>().with("transform", "translateY(45px)")\r\n        };\r\n        KeyframeAnimationOptions logoAnimationOptions = new KeyframeAnimationOptions();\r\n        logoAnimationOptions.setDuration(4_000);\r\n        logoAnimationOptions.setIterations(Infinity);\r\n        logoAnimationOptions.setDirection(PlaybackDirection.ALTERNATE);\r\n        logo.animate(logoTransitions, logoAnimationOptions);\r\n\r\n        HTMLDivElement tickerDiv = document.createElement("div");\r\n        tickerDiv.setClassName("ticker");\r\n        HTMLDivElement textDiv = document.createElement("div");\r\n        textDiv.setClassName("ticker-inner");\r\n        textDiv.setInnerHTML("\u26A0\uFE0FThis demo uses the <a href=\\"https://developer.mozilla.org/en-US/docs/Web/API/Element/animate\\" " +\r\n                "target=\\"_blank\\">Element.animate()<\/a> API, which is only supported in Chrome and Firefox. As this " +\r\n                "API is fairly new, it is  not yet defined in Elemental.");\r\n        tickerDiv.appendChild(textDiv);\r\n        mainDiv.appendChild(tickerDiv);\r\n\r\n        JsObject[] tickerTransitions = new JsObject[]{\r\n                new JsObject<String>().with("marginLeft", "100%"),\r\n                new JsObject<String>().with("marginLeft", "-1200px")\r\n        };\r\n        KeyframeAnimationOptions tickerAnimationOptions = new KeyframeAnimationOptions();\r\n        tickerAnimationOptions.setDuration(20_000);\r\n        tickerAnimationOptions.setIterations(Infinity);\r\n        textDiv.animate(tickerTransitions, tickerAnimationOptions);\r\n    }\r\n\r\n    @Override\r\n    protected String getName() {\r\n        return "element-animate";\r\n    }\r\n\r\n    @Override\r\n    protected String getTitle() {\r\n        return "Element.animate() Demo";\r\n    }\r\n\r\n    @Override\r\n    protected TextResource getTemplate() {\r\n        return HtmlClientBundle.INSTANCE.getElementAnimateHtml();\r\n    }\r\n\r\n    @Override\r\n    protected TextResource getSource() {\r\n        return SourceClientBundle.INSTANCE.getElementAnimateDemoSource();\r\n    }\r\n}\r\n';
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lgwt_1jelement_1demo_1client_1SourceClientBundle_11default_11InlineClientBundleGenerator$3_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_23, 'SourceClientBundle_default_InlineClientBundleGenerator/3', 150);
function gwt_jelement_demo_client_SourceClientBundle_1default_1InlineClientBundleGenerator$4_SourceClientBundle_1default_1InlineClientBundleGenerator$4__Lgwt_jelement_demo_client_SourceClientBundle_1default_1InlineClientBundleGenerator_2V(){
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(151, 1, {}, gwt_jelement_demo_client_SourceClientBundle_1default_1InlineClientBundleGenerator$4_SourceClientBundle_1default_1InlineClientBundleGenerator$4__Lgwt_jelement_demo_client_SourceClientBundle_1default_1InlineClientBundleGenerator_2V);
_.getText__Ljava_lang_String_2 = function gwt_jelement_demo_client_SourceClientBundle_1default_1InlineClientBundleGenerator$4_getText__Ljava_lang_String_2(){
  return 'package gwt.jelement.demo.client;\r\n\r\nimport com.google.gwt.core.client.ScriptInjector;\r\nimport com.google.gwt.resources.client.TextResource;\r\nimport gwt.jelement.core.CallbackFunction;\r\nimport gwt.jelement.core.JsObject;\r\nimport gwt.jelement.demo.client.html.HtmlClientBundle;\r\nimport gwt.jelement.demo.client.jsinterop.GoogleMap;\r\nimport gwt.jelement.demo.client.jsinterop.GoogleMapMarker;\r\nimport gwt.jelement.geolocation.Coordinates;\r\nimport gwt.jelement.geolocation.Geolocation;\r\nimport gwt.jelement.html.HTMLDivElement;\r\n\r\nimport static gwt.jelement.Browser.*;\r\n\r\npublic class GeoLocationDemo extends AbstractDemo {\r\n    /* replace with your own Google Maps API key*/\r\n    private static final String GOOGLE_API_KEY = "AIzaSyCtNpX88CIyWAySoExky_bbWR7ZF-gaVPQ";\r\n    private static final String MAP_INIT_CALLBACK = "initMap";\r\n    private static boolean scriptLoaded;\r\n    private Coordinates coordinates;\r\n\r\n    @Override\r\n    protected void execute() {\r\n        if (!navigator.object().has("geolocation")) {\r\n            window.alert("Your browser does not support geolocation");\r\n            return;\r\n        }\r\n\r\n        Geolocation geolocation = navigator.getGeolocation();\r\n        geolocation.getCurrentPosition(position -> {\r\n            GeoLocationDemo.this.coordinates = position.getCoords();\r\n            if (scriptLoaded) {\r\n                ready();\r\n            }\r\n        });\r\n\r\n        window.object().set(MAP_INIT_CALLBACK, (CallbackFunction) objects -> {\r\n            scriptLoaded = true;\r\n            window.object().delete(MAP_INIT_CALLBACK);\r\n            if (coordinates != null) {\r\n                ready();\r\n            }\r\n            return null;\r\n        });\r\n\r\n        if (!scriptLoaded) {\r\n            ScriptInjector.fromUrl("https://maps.googleapis.com/maps/api/js?key=" +\r\n                    GOOGLE_API_KEY + "&callback=" + MAP_INIT_CALLBACK)\r\n                    .setWindow(ScriptInjector.TOP_WINDOW).inject();\r\n        }\r\n    }\r\n\r\n    private void ready() {\r\n        HTMLDivElement mapContainer = document.querySelector("div#geolocation-demo div#map");\r\n\r\n        JsObject<?> position = new JsObject<>().with("lat", coordinates.getLatitude())\r\n                .with("lng", coordinates.getLongitude());\r\n\r\n        JsObject<?> mapOptions = new JsObject<>().with("zoom", 10).with("center", position);\r\n        GoogleMap map = new GoogleMap(mapContainer, mapOptions);\r\n\r\n        JsObject<?> markerOptions = new JsObject<>().with("position", position).with("map", map);\r\n        new GoogleMapMarker(markerOptions);\r\n    }\r\n\r\n    @Override\r\n    protected String getName() {\r\n        return "geolocation";\r\n    }\r\n\r\n    @Override\r\n    protected String getTitle() {\r\n        return "Geolocation Demo";\r\n    }\r\n\r\n    @Override\r\n    protected TextResource getTemplate() {\r\n        return HtmlClientBundle.INSTANCE.getGeoLocationHtml();\r\n    }\r\n\r\n    @Override\r\n    protected TextResource getSource() {\r\n        return SourceClientBundle.INSTANCE.getGeolocationSource();\r\n    }\r\n}\r\n';
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lgwt_1jelement_1demo_1client_1SourceClientBundle_11default_11InlineClientBundleGenerator$4_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_23, 'SourceClientBundle_default_InlineClientBundleGenerator/4', 151);
function gwt_jelement_demo_client_SourceClientBundle_1default_1InlineClientBundleGenerator$5_SourceClientBundle_1default_1InlineClientBundleGenerator$5__Lgwt_jelement_demo_client_SourceClientBundle_1default_1InlineClientBundleGenerator_2V(){
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(152, 1, {}, gwt_jelement_demo_client_SourceClientBundle_1default_1InlineClientBundleGenerator$5_SourceClientBundle_1default_1InlineClientBundleGenerator$5__Lgwt_jelement_demo_client_SourceClientBundle_1default_1InlineClientBundleGenerator_2V);
_.getText__Ljava_lang_String_2 = function gwt_jelement_demo_client_SourceClientBundle_1default_1InlineClientBundleGenerator$5_getText__Ljava_lang_String_2(){
  return 'package gwt.jelement.demo.client;\r\n\r\nimport com.google.gwt.resources.client.TextResource;\r\nimport gwt.jelement.demo.client.html.HtmlClientBundle;\r\nimport gwt.jelement.notifications.Notification;\r\nimport gwt.jelement.notifications.NotificationOptions;\r\n\r\nimport static gwt.jelement.Browser.window;\r\n\r\npublic class NotificationDemo extends AbstractDemo {\r\n    @Override\r\n    protected void execute() {\r\n        if(!window.object().has("Notification")){\r\n            window.alert("Notifications are not supported on this browser");\r\n            return;\r\n        }\r\n        Notification.requestPermission().then(response -> {\r\n            if ("granted".equals(response)) {\r\n                NotificationOptions notificationOptions = new NotificationOptions();\r\n                notificationOptions.setBody("I hope you are enjoying the demos.");\r\n                notificationOptions.setIcon("gwtlogo.png");\r\n                notificationOptions.setImage("code.png");\r\n                notificationOptions.setRequireInteraction(true);\r\n                new Notification("Hello", notificationOptions);\r\n            }\r\n            return null;\r\n        });\r\n    }\r\n\r\n    @Override\r\n    protected String getName() {\r\n        return "notification";\r\n    }\r\n\r\n    @Override\r\n    protected String getTitle() {\r\n        return "Notification Demo";\r\n    }\r\n\r\n    @Override\r\n    protected TextResource getTemplate() {\r\n        return HtmlClientBundle.INSTANCE.getNotificationHtml();\r\n    }\r\n\r\n    @Override\r\n    protected TextResource getSource() {\r\n        return SourceClientBundle.INSTANCE.getNotificationSource();\r\n    }\r\n}\r\n';
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lgwt_1jelement_1demo_1client_1SourceClientBundle_11default_11InlineClientBundleGenerator$5_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_23, 'SourceClientBundle_default_InlineClientBundleGenerator/5', 152);
function gwt_jelement_demo_client_SourceClientBundle_1default_1InlineClientBundleGenerator$6_SourceClientBundle_1default_1InlineClientBundleGenerator$6__Lgwt_jelement_demo_client_SourceClientBundle_1default_1InlineClientBundleGenerator_2V(){
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(153, 1, {}, gwt_jelement_demo_client_SourceClientBundle_1default_1InlineClientBundleGenerator$6_SourceClientBundle_1default_1InlineClientBundleGenerator$6__Lgwt_jelement_demo_client_SourceClientBundle_1default_1InlineClientBundleGenerator_2V);
_.getText__Ljava_lang_String_2 = function gwt_jelement_demo_client_SourceClientBundle_1default_1InlineClientBundleGenerator$6_getText__Ljava_lang_String_2(){
  return 'package gwt.jelement.demo.client;\r\n\r\nimport com.google.gwt.resources.client.TextResource;\r\nimport gwt.jelement.core.*;\r\nimport gwt.jelement.demo.client.html.HtmlClientBundle;\r\nimport gwt.jelement.html.HTMLDivElement;\r\nimport gwt.jelement.timing.MemoryInfo;\r\nimport gwt.jelement.timing.Performance;\r\nimport gwt.jelement.timing.PerformanceNavigation;\r\nimport gwt.jelement.timing.PerformanceTiming;\r\n\r\nimport java.util.*;\r\n\r\nimport static gwt.jelement.Browser.*;\r\n\r\npublic class PerformanceDemo extends AbstractDemo {\r\n    @Override\r\n    protected void execute() {\r\n        if (!window.object().has("performance")) {\r\n            window.alert("The Performance API is not supported in your browser.");\r\n            return;\r\n        }\r\n\r\n        ie11Polyfill();\r\n\r\n        Performance performance = window.getPerformance();\r\n        showPerformanceTiming(performance.getTiming());\r\n        showNavigationInfo(performance.getNavigation());\r\n\r\n        HTMLDivElement memoryInfoDiv = document.getElementById("memoryInfo");\r\n        if (performance.getMemory() != null) { /*Chrome only*/\r\n            showMemoryInfo(performance.getMemory(), memoryInfoDiv);\r\n        } else {\r\n            memoryInfoDiv.getParentElement().removeChild(memoryInfoDiv);/* for IE 11*/\r\n        }\r\n    }\r\n\r\n    private void showPerformanceTiming(PerformanceTiming timing) {\r\n        Map<String, Double> timingMap = new HashMap<>();\r\n        JsObject<ObjectPropertyDescriptor> propertyDescriptors = JsObject.getOwnPropertyDescriptors(timing.object().get__proto__());\r\n        for (Object[] entry : JsObject.entries(propertyDescriptors)) {\r\n            String propertyName = (String) entry[0];\r\n            ObjectPropertyDescriptor descriptor = (ObjectPropertyDescriptor) entry[1];\r\n            if (descriptor.isEnumerable() && descriptor.getGet() != null\r\n                    && !propertyName.startsWith("unload")) {\r\n                Function getter = (Function) descriptor.getGet();\r\n                double timeElapsed = (double) getter.call(timing);\r\n                if (timeElapsed != 0) {\r\n                    timingMap.put(propertyName, timeElapsed);\r\n                }\r\n            }\r\n        }\r\n        HTMLDivElement timingDiv = document.querySelector("#demoContainer #timing");\r\n        List<Map.Entry<String, Double>> entries = new ArrayList<>(timingMap.entrySet());\r\n        if (!entries.isEmpty()) {\r\n            entries.sort(Comparator.comparing(Map.Entry::getValue));\r\n            double firstTime = entries.get(0).getValue();\r\n            entries.forEach(entry -> {\r\n                        timingDiv.appendChild(createDivWithText(entry.getKey()));\r\n                        timingDiv.appendChild(createDivWithText(String.valueOf(entry.getValue() - firstTime)));\r\n                    }\r\n            );\r\n        }\r\n    }\r\n\r\n    private void showNavigationInfo(PerformanceNavigation navigation) {\r\n        HTMLDivElement navigationInfoDiv = document.getElementById("navigationInfo");\r\n        String navigationType = "Unknown";\r\n        /*FIXME could not use switch because of missing values */\r\n        if (navigation.getType() == PerformanceNavigation.TYPE_NAVIGATE) {\r\n            navigationType = "Navigated to page";\r\n        } else if (navigation.getType() == PerformanceNavigation.TYPE_RELOAD) {\r\n            navigationType = "Reloaded the page";\r\n        } else if (navigation.getType() == PerformanceNavigation.TYPE_BACK_FORWARD) {\r\n            navigationType = "Used back or forward to access page";\r\n        }\r\n        navigationInfoDiv.appendChild(createDivWithText("<b>Navigation type:<\/b> " + navigationType));\r\n        navigationInfoDiv.appendChild(createDivWithText("<b>Redirect count:<\/b> " + navigation.getRedirectCount()));\r\n    }\r\n\r\n    private void showMemoryInfo(MemoryInfo memory, HTMLDivElement container) {\r\n        container.append(createDivWithText("<b>Used JS heap size:<\/b> "\r\n                + format(memory.getUsedJSHeapSize()) + " bytes"));\r\n        container.append(createDivWithText("<b>Total JS heap size:<\/b> "\r\n                + format(memory.getTotalJSHeapSize()) + " bytes"));\r\n        container.append(createDivWithText("<b>Max JS heap size:<\/b> "\r\n                + format(memory.getJsHeapSizeLimit()) + " bytes"));\r\n    }\r\n\r\n    /* fixme need Number class */\r\n    private String format(double number) {\r\n        return new JsObject(Any.of(number)).toLocaleString();\r\n    }\r\n\r\n    /*\r\n        getOwnPropertyDescriptors and entries polyfill for IE11\r\n     */\r\n    @SuppressWarnings({"unchecked", "Convert2Lambda"})\r\n    private void ie11Polyfill() {\r\n        if (!Js.has(JsObject.prototype.getConstructor().object(), "getOwnPropertyDescriptors")) {\r\n            JsObject.prototype.set("getOwnPropertyDescriptors", new CallbackFunction() {\r\n                @Override\r\n                public Object onInvoked(Object... objects) {\r\n                    JsObject objectPrototype = (JsObject) objects[0];\r\n                    JsObject<ObjectPropertyDescriptor> result = new JsObject<>();\r\n                    for (String key : JsObject.getOwnPropertyNames(objectPrototype)) {\r\n                        result.set(key, JsObject.getOwnPropertyDescriptor(objectPrototype, key));\r\n                    }\r\n                    return result;\r\n                }\r\n            });\r\n        }\r\n        if (!Js.has(JsObject.prototype.getConstructor().object(), "entries")) {\r\n            JsObject.prototype.set("entries",\r\n                    new Function("obj",\r\n                            "return Object.keys(obj).reduce(function(e, k){return e.concat(typeof k === \'string\' && obj.propertyIsEnumerable(k) ?[[k, obj[k]]] : []);}, []);"));\r\n        }\r\n        /* Alternative using Java only\r\n         if (!Js.has(JsObject.prototype.getConstructor().object(), "entries")) {\r\n            JsObject.prototype.set("entries", new CallbackFunction() {\r\n                @Override\r\n                public Object onInvoked(Object... objects) {\r\n                    JsObject object = (JsObject) objects[0];\r\n                    Array<Array> result = new Array();\r\n                    for (Object key : JsObject.keys(object)) {\r\n                    if (Js.isTypeName(key, "String") &&\r\n                            object.propertyIsEnumerable((String) key)) {\r\n                        Array entry = new Array();\r\n                        entry.push(key);\r\n                        entry.push(object.get((String) key));\r\n                        result.push(entry);\r\n                    }\r\n                }\r\n                return result;\r\n            }\r\n        });\r\n        */\r\n    }\r\n\r\n    private HTMLDivElement createDivWithText(String text) {\r\n        HTMLDivElement result = document.createElement("div");\r\n        result.setInnerHTML(text);\r\n        return result;\r\n    }\r\n\r\n    @Override\r\n    protected String getName() {\r\n        return "performance";\r\n    }\r\n\r\n    @Override\r\n    protected String getTitle() {\r\n        return "Performance API Demo";\r\n    }\r\n\r\n    @Override\r\n    protected TextResource getTemplate() {\r\n        return HtmlClientBundle.INSTANCE.getPerformanceHtml();\r\n    }\r\n\r\n    @Override\r\n    protected TextResource getSource() {\r\n        return SourceClientBundle.INSTANCE.getPerformanceSource();\r\n    }\r\n}\r\n';
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lgwt_1jelement_1demo_1client_1SourceClientBundle_11default_11InlineClientBundleGenerator$6_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_23, 'SourceClientBundle_default_InlineClientBundleGenerator/6', 153);
function gwt_jelement_demo_client_SourceClientBundle_1default_1InlineClientBundleGenerator$7_SourceClientBundle_1default_1InlineClientBundleGenerator$7__Lgwt_jelement_demo_client_SourceClientBundle_1default_1InlineClientBundleGenerator_2V(){
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(154, 1, {}, gwt_jelement_demo_client_SourceClientBundle_1default_1InlineClientBundleGenerator$7_SourceClientBundle_1default_1InlineClientBundleGenerator$7__Lgwt_jelement_demo_client_SourceClientBundle_1default_1InlineClientBundleGenerator_2V);
_.getText__Ljava_lang_String_2 = function gwt_jelement_demo_client_SourceClientBundle_1default_1InlineClientBundleGenerator$7_getText__Ljava_lang_String_2(){
  return 'package gwt.jelement.demo.client;\r\n\r\nimport com.google.gwt.resources.client.TextResource;\r\nimport gwt.jelement.core.Promise;\r\nimport gwt.jelement.demo.client.html.HtmlClientBundle;\r\nimport gwt.jelement.speech.SpeechSynthesisUtterance;\r\nimport gwt.jelement.speech.SpeechSynthesisVoice;\r\n\r\nimport java.util.Arrays;\r\nimport java.util.function.Predicate;\r\n\r\nimport static gwt.jelement.Browser.window;\r\n\r\npublic class SpeechSynthesisDemo extends AbstractDemo {\r\n\r\n    @Override\r\n    protected void execute() {\r\n        if (!window.object().has("speechSynthesis")) {\r\n            window.alert("no support for speech synthesis");\r\n            return;\r\n        }\r\n        if (window.getSpeechSynthesis().isPending()) {\r\n            window.getSpeechSynthesis().cancel();\r\n        }\r\n        getVoicesReady().then(x -> {\r\n            intro();\r\n            return null;\r\n        }).catch_(error -> {\r\n            window.alert(((Error) error).getMessage());\r\n            return null;\r\n        });\r\n    }\r\n\r\n    private void intro() {\r\n        SpeechSynthesisVoice maleUSVoice = getPreferredVoice("en-US",\r\n                voice -> !voice.getName().contains("Zira")\r\n                        && !voice.getName().contains("Female"));\r\n        SpeechSynthesisVoice femaleUSVoice = getPreferredVoice("en-US",\r\n                voice -> voice.getName().contains("Zira")\r\n                        || voice.getName().contains("Female"));\r\n        SpeechSynthesisVoice maleUkVoice = getPreferredVoice("en-GB",\r\n                voice -> !voice.getName().contains("Female"));\r\n\r\n        say("Hello. Welcome to the speech synthesis demo.", maleUSVoice);\r\n        say("You sound like a robot. I think I sound better.", femaleUSVoice);\r\n        boolean otherLanguages =\r\n                say("en-GB", "Actually, everything sounds better with a British accent, don\'t you think?");\r\n        otherLanguages = otherLanguages |\r\n                say("fr", "Sur Chrome, nous pouvons parler de nombreuses langues.");\r\n        otherLanguages = otherLanguages |\r\n                say("es-US", "Como el espa\xF1ol por ejemplo.");\r\n        otherLanguages = otherLanguages |\r\n                say("es-ES", "O el t\xEDpico espa\xF1ol de Espa\xF1a.", "Yo soy de Zaragoza!");\r\n        say("es-US", "Que dices mujer?", "Que mi espa\xF1ol no es t\xEDpico?", "Yo soy de Monterrey, Mejico!");\r\n        otherLanguages = otherLanguages |\r\n                say("it", "Non dimenticare di me! parlo italiano");\r\n        otherLanguages = otherLanguages |\r\n                say("de", "Und ich spreche deutsch.");\r\n        otherLanguages = otherLanguages |\r\n                say("zh", "\u6211\u53EF\u4EE5\u8BF4\u4E2D\u6587.");\r\n        otherLanguages = otherLanguages |\r\n                say("ko", "\uB098\uB294 \uD55C\uAD6D\uC5B4\uB97C \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.");\r\n        otherLanguages = otherLanguages |\r\n                say("ru", "\u0418 \u044F \u0433\u043E\u0432\u043E\u0440\u044E \u043F\u043E-\u0440\u0443\u0441\u0441\u043A\u0438.");\r\n        say("fr", "I can even speak English with a French accent.", "C\'est amusant, \xE7a!");\r\n        say("fr", "Il y a aussi d\'autres langues, mais \xE7a devient un peu ennuyeux...");\r\n        say("pt", "Ei, espere um pouco, voc\xEA conseguiu ignorar o portugu\xEAs?", " Braaaasil!", "Braaaasil!", "Braaaasil!");\r\n        if (maleUkVoice != null) {\r\n            say("I want to hear other languages!", maleUkVoice);\r\n        } else {\r\n            say("en-GB", "I want to hear other languages!");\r\n        }\r\n        if (!otherLanguages) {\r\n            say("Guess what, we can only speak American English.", maleUSVoice);\r\n            say("How dumb! I want to be on Chrome. They speak many languages there.", femaleUSVoice);\r\n        } else {\r\n            say("I\'m sorry Dave. I\'m afraid I can\'t do that.", maleUSVoice);\r\n        }\r\n    }\r\n\r\n    /*\r\n     * https://bugs.chromium.org/p/chromium/issues/detail?id=340160\r\n     * https://dvcs.w3.org/hg/speech-api/raw-file/tip/speechapi-errata.html\r\n     */\r\n    private Promise<Void> getVoicesReady() {\r\n        return new Promise<>((resolve, reject) -> {\r\n            SpeechSynthesisVoice[] voices = window.getSpeechSynthesis().getVoices();\r\n            if (voices.length != 0) {\r\n                resolve.with(null);\r\n            } else if (window.getSpeechSynthesis().object().has("onvoiceschanged")) {\r\n                window.getSpeechSynthesis().setOnVoiceschanged(event -> {\r\n                    window.getSpeechSynthesis().setOnVoiceschanged(null);\r\n                    if (window.getSpeechSynthesis().getVoices().length != 0) {\r\n                        resolve.with(null);\r\n                    } else {\r\n                        reject.with(new Error("No voices are available."));\r\n                    }\r\n                    return null;\r\n                });\r\n            } else {\r\n                reject.with(new Error("No voices are available."));\r\n            }\r\n        });\r\n    }\r\n\r\n    private boolean say(String language, String... text) {\r\n        if (isLanguageSupported(language)) {\r\n            for (String phrase : text) {\r\n                SpeechSynthesisUtterance utterance = new SpeechSynthesisUtterance(phrase);\r\n                utterance.setLang(language);\r\n                window.getSpeechSynthesis().speak(utterance);\r\n            }\r\n            return true;\r\n        }\r\n        return false;\r\n    }\r\n\r\n    private boolean isLanguageSupported(String language) {\r\n        return Arrays.stream(window.getSpeechSynthesis().getVoices())\r\n                .anyMatch(voice -> voice.getLang().contains(language));\r\n    }\r\n\r\n    private void say(String text, SpeechSynthesisVoice voice) {\r\n        SpeechSynthesisUtterance utterance = new SpeechSynthesisUtterance(text);\r\n        utterance.setVoice(voice);\r\n        window.getSpeechSynthesis().speak(utterance);\r\n    }\r\n\r\n    private SpeechSynthesisVoice getPreferredVoice(String language, Predicate<SpeechSynthesisVoice> predicate) {\r\n        SpeechSynthesisVoice[] candidates = Arrays.stream(window.getSpeechSynthesis().getVoices())\r\n                .filter(voice -> voice.getLang().contains(language))\r\n                .toArray(SpeechSynthesisVoice[]::new);\r\n        if (candidates.length != 0) {\r\n            return Arrays.stream(candidates)\r\n                    .filter(predicate)\r\n                    .findFirst()\r\n                    .orElse(candidates[0]);\r\n        }\r\n        return null;\r\n    }\r\n\r\n    @Override\r\n    void setInactive() {\r\n        if (window.getSpeechSynthesis().isSpeaking() || window.getSpeechSynthesis().isPending()) {\r\n            window.getSpeechSynthesis().cancel();\r\n        }\r\n        super.setInactive();\r\n    }\r\n\r\n    @Override\r\n    protected String getName() {\r\n        return "speech-synth";\r\n    }\r\n\r\n    @Override\r\n    protected String getTitle() {\r\n        return "Speech Synthesis Demo";\r\n    }\r\n\r\n    @Override\r\n    protected TextResource getTemplate() {\r\n        return HtmlClientBundle.INSTANCE.getSpeechSynthHtml();\r\n    }\r\n\r\n    @Override\r\n    protected TextResource getSource() {\r\n        return SourceClientBundle.INSTANCE.getSpeechSynthesisSource();\r\n    }\r\n}\r\n';
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lgwt_1jelement_1demo_1client_1SourceClientBundle_11default_11InlineClientBundleGenerator$7_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_23, 'SourceClientBundle_default_InlineClientBundleGenerator/7', 154);
function gwt_jelement_demo_client_SourceClientBundle_1default_1InlineClientBundleGenerator$8_SourceClientBundle_1default_1InlineClientBundleGenerator$8__Lgwt_jelement_demo_client_SourceClientBundle_1default_1InlineClientBundleGenerator_2V(){
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(155, 1, {}, gwt_jelement_demo_client_SourceClientBundle_1default_1InlineClientBundleGenerator$8_SourceClientBundle_1default_1InlineClientBundleGenerator$8__Lgwt_jelement_demo_client_SourceClientBundle_1default_1InlineClientBundleGenerator_2V);
_.getText__Ljava_lang_String_2 = function gwt_jelement_demo_client_SourceClientBundle_1default_1InlineClientBundleGenerator$8_getText__Ljava_lang_String_2(){
  return 'package gwt.jelement.demo.client;\r\n\r\nimport com.google.gwt.resources.client.TextResource;\r\nimport gwt.jelement.core.Array;\r\nimport gwt.jelement.demo.client.html.HtmlClientBundle;\r\nimport gwt.jelement.dom.ClientRect;\r\nimport gwt.jelement.dom.Element;\r\nimport gwt.jelement.dom.Touch;\r\nimport gwt.jelement.dom.URL;\r\nimport gwt.jelement.events.MouseEvent;\r\nimport gwt.jelement.events.TouchEvent;\r\nimport gwt.jelement.fileapi.Blob;\r\nimport gwt.jelement.fileapi.BlobPropertyBag;\r\nimport gwt.jelement.html.HTMLAnchorElement;\r\nimport gwt.jelement.html.HTMLButtonElement;\r\nimport gwt.jelement.html.HTMLDivElement;\r\nimport gwt.jelement.html.HTMLInputElement;\r\nimport gwt.jelement.svg.SVGPathElement;\r\n\r\nimport java.util.ArrayList;\r\n\r\nimport static gwt.jelement.Browser.*;\r\n\r\npublic class SvgDemo extends AbstractDemo {\r\n    /*\r\n     Line smoothing code from https://stackoverflow.com/a/40700068/80075\r\n      */\r\n    private final int BUFFER_SIZE = 10;\r\n    private String strokeColor;\r\n    private Element svgElement;\r\n    private ClientRect rect;\r\n    private SVGPathElement path = null;\r\n    private String strPath;\r\n    private ArrayList<Point> buffer;\r\n\r\n    @Override\r\n    protected void execute() {\r\n        svgElement = document.getElementById("svgElement");\r\n        HTMLButtonElement btnUndo = document.getElementById("btnUndo");\r\n        HTMLButtonElement btnRedo = document.getElementById("btnRedo");\r\n        HTMLButtonElement btnDownload = document.getElementById("btnDownload");\r\n        HTMLInputElement colorPicker = document.getElementById("colorPicker");\r\n\r\n        if (isIE()) {\r\n            HTMLDivElement toolbar = document.getElementById("toolbar");\r\n            toolbar.removeChild(btnDownload);\r\n            toolbar.removeChild(colorPicker);\r\n        }\r\n\r\n        strokeColor = colorPicker.getValue();\r\n\r\n        ArrayList<SVGPathElement> undoBuffer = new ArrayList<>();\r\n        ArrayList<SVGPathElement> redoBuffer = new ArrayList<>();\r\n\r\n        svgElement.addEventListener("touchstart", event -> this.mapTouchEvent((TouchEvent) event, "mousedown"));\r\n        svgElement.addEventListener("touchmove", event -> this.mapTouchEvent((TouchEvent) event, "mousemove"));\r\n        svgElement.addEventListener("touchend", event -> this.mapTouchEvent((TouchEvent) event, "mouseup"));\r\n\r\n        svgElement.addEventListener("mousedown", event -> {\r\n            rect = svgElement.getBoundingClientRect();\r\n            path = document.createElementNS("http://www.w3.org/2000/svg", "path");\r\n            path.setAttribute("fill", "none");\r\n            path.setAttribute("stroke", strokeColor);\r\n            path.setAttribute("stroke-width", "2");\r\n            buffer = new ArrayList<>();\r\n            Point point = getMousePosition((MouseEvent) event);\r\n            appendToBuffer(point);\r\n            strPath = "M" + point.x + " " + point.y;\r\n            path.setAttribute("d", strPath);\r\n            svgElement.appendChild(path);\r\n        });\r\n\r\n        svgElement.addEventListener("mousemove", event -> {\r\n            if (path != null) {\r\n                appendToBuffer(getMousePosition((MouseEvent) event));\r\n                updateSvgPath();\r\n            }\r\n        });\r\n\r\n        svgElement.addEventListener("mouseup", event -> {\r\n            undoBuffer.add(0, path);\r\n            redoBuffer.clear();\r\n            btnUndo.removeAttribute("disabled");\r\n            btnRedo.setAttribute("disabled", "");\r\n            path = null;\r\n        });\r\n\r\n        btnUndo.addEventListener("click", event -> {\r\n            if (!undoBuffer.isEmpty()) {\r\n                SVGPathElement oldPath = undoBuffer.remove(0);\r\n                redoBuffer.add(0, oldPath);\r\n                btnRedo.removeAttribute("disabled");\r\n                svgElement.removeChild(oldPath);\r\n                if (undoBuffer.isEmpty()) {\r\n                    btnUndo.setAttribute("disabled", "");\r\n                }\r\n            }\r\n        });\r\n        btnRedo.addEventListener("click", event -> {\r\n            if (!redoBuffer.isEmpty()) {\r\n                SVGPathElement oldPath = redoBuffer.remove(0);\r\n                undoBuffer.add(0, oldPath);\r\n                btnUndo.removeAttribute("disabled");\r\n                svgElement.appendChild(oldPath);\r\n                if (redoBuffer.isEmpty()) {\r\n                    btnRedo.setAttribute("disabled", "");\r\n                }\r\n            }\r\n        });\r\n\r\n        btnDownload.addEventListener("click", event -> {\r\n            /* https://stackoverflow.com/a/38019175/80075 */\r\n            String svgData = svgElement.getOuterHTML();\r\n            BlobPropertyBag blobProperties = new BlobPropertyBag();\r\n            blobProperties.setType("image/svg+xml;charset=utf-8");\r\n            Blob svgBlob = new Blob(new Array<>(svgData), blobProperties);\r\n\r\n            String svgUrl = URL.createObjectURL(svgBlob);\r\n            HTMLAnchorElement downloadLink = document.createElement("a");\r\n            downloadLink.setHref(svgUrl);\r\n            downloadLink.setDownload("my_drawing.svg");\r\n            document.getBody().appendChild(downloadLink);\r\n            downloadLink.click();\r\n            document.getBody().removeChild(downloadLink);\r\n        });\r\n\r\n        colorPicker.addEventListener("change", event -> strokeColor = colorPicker.getValue());\r\n    }\r\n\r\n    private void mapTouchEvent(TouchEvent event, String type) {\r\n        event.preventDefault();\r\n        if (event.getTouches().getLength() > 1 || ("touchend".equals(event.getType()) &&\r\n                event.getTouches().getLength() > 0))\r\n            return;\r\n        Touch touch = event.getChangedTouches().get(0);\r\n        MouseEvent newEvent = (MouseEvent) document.createEvent("MouseEvents");\r\n        newEvent.initMouseEvent(type, true, true, window, 0,\r\n                touch.getScreenX(), touch.getScreenY(), touch.getClientX(), touch.getClientY(),\r\n                event.isCtrlKey(), event.isAltKey(), event.isShiftKey(), event.isMetaKey(),\r\n                (short) 0, null);\r\n        event.getTarget().dispatchEvent(newEvent);\r\n\r\n    }\r\n\r\n    private boolean isIE() {\r\n        return "Microsoft Internet Explorer".equals(navigator.getAppName()) ||\r\n                ("Netscape".equals(navigator.getAppName()) && navigator.getUserAgent().contains("Trident/"));\r\n    }\r\n\r\n    private Point getMousePosition(MouseEvent event) {\r\n        return new Point(event.getClientX() - rect.getLeft() - svgElement.getClientLeft(),\r\n                event.getPageY() - rect.getTop() - svgElement.getClientTop());\r\n    }\r\n\r\n    private void appendToBuffer(Point point) {\r\n        buffer.add(point);\r\n        if (buffer.size() > BUFFER_SIZE) {\r\n            buffer.remove(0);\r\n        }\r\n    }\r\n\r\n    private Point getAveragePoint(int offset) {\r\n        int len = buffer.size();\r\n        if (len % 2 == 1 || len >= BUFFER_SIZE) {\r\n            double totalX = 0;\r\n            double totalY = 0;\r\n            int count = 0;\r\n\r\n            for (int i = offset; i < len; i++) {\r\n                count++;\r\n                Point point = buffer.get(i);\r\n                totalX += point.x;\r\n                totalY += point.y;\r\n            }\r\n            return new Point(totalX / count, totalY / count);\r\n        }\r\n        return null;\r\n    }\r\n\r\n    private void updateSvgPath() {\r\n        Point point = getAveragePoint(0);\r\n\r\n        if (point != null) {\r\n            strPath += " L" + point.x + " " + point.y;\r\n            StringBuilder tmpPath = new StringBuilder();\r\n            for (int offset = 2; offset < buffer.size(); offset += 2) {\r\n                point = getAveragePoint(offset);\r\n                if (point != null) {\r\n                    tmpPath.append(" L").append(point.x).append(" ").append(point.y);\r\n                }\r\n            }\r\n            path.setAttribute("d", strPath + tmpPath.toString());\r\n        }\r\n    }\r\n\r\n    @Override\r\n    protected String getName() {\r\n        return "svg";\r\n    }\r\n\r\n    @Override\r\n    protected String getTitle() {\r\n        return "SVG Demo";\r\n    }\r\n\r\n    @Override\r\n    protected TextResource getTemplate() {\r\n        return HtmlClientBundle.INSTANCE.getSvgHtml();\r\n    }\r\n\r\n    @Override\r\n    protected TextResource getSource() {\r\n        return SourceClientBundle.INSTANCE.getSvgSource();\r\n    }\r\n\r\n    private class Point {\r\n        double x;\r\n        double y;\r\n\r\n        Point(double x, double y) {\r\n            this.x = x;\r\n            this.y = y;\r\n        }\r\n    }\r\n}\r\n';
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lgwt_1jelement_1demo_1client_1SourceClientBundle_11default_11InlineClientBundleGenerator$8_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_23, 'SourceClientBundle_default_InlineClientBundleGenerator/8', 155);
function gwt_jelement_demo_client_SourceClientBundle_1default_1InlineClientBundleGenerator$9_SourceClientBundle_1default_1InlineClientBundleGenerator$9__Lgwt_jelement_demo_client_SourceClientBundle_1default_1InlineClientBundleGenerator_2V(){
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(156, 1, {}, gwt_jelement_demo_client_SourceClientBundle_1default_1InlineClientBundleGenerator$9_SourceClientBundle_1default_1InlineClientBundleGenerator$9__Lgwt_jelement_demo_client_SourceClientBundle_1default_1InlineClientBundleGenerator_2V);
_.getText__Ljava_lang_String_2 = function gwt_jelement_demo_client_SourceClientBundle_1default_1InlineClientBundleGenerator$9_getText__Ljava_lang_String_2(){
  return 'package gwt.jelement.demo.client;\r\n\r\nimport com.google.gwt.resources.client.TextResource;\r\nimport gwt.jelement.demo.client.html.HtmlClientBundle;\r\nimport gwt.jelement.events.Event;\r\nimport gwt.jelement.webaudio.*;\r\n\r\nimport static gwt.jelement.Browser.document;\r\n\r\npublic class WebAudioDemo extends AbstractDemo {\r\n\r\n    private AudioContext audioContext;\r\n    private OscillatorNode osc;\r\n    private GainNode gain;\r\n    private OscillatorNode osc2;\r\n    private boolean playing;\r\n    private BootstrapButton btnSoundOn;\r\n    private BootstrapButton btnSoundOff;\r\n\r\n    @Override\r\n    protected void execute() {\r\n        /*\r\n            Audio Synthesis in JavaScript\r\n            Brian Rinaldi\r\n            https://modernweb.com/audio-synthesis-in-javascript/\r\n        */\r\n        btnSoundOn = new BootstrapButton("Play", BootstrapButton.ButtonStyle.SUCCESS, "play");\r\n        btnSoundOn.appendTo(document.getElementById("audio-on"));\r\n\r\n        btnSoundOff = new BootstrapButton("Stop", BootstrapButton.ButtonStyle.DANGER, "stop");\r\n        btnSoundOff.setDisabled(true);\r\n        btnSoundOff.appendTo(document.getElementById("audio-off"));\r\n\r\n        btnSoundOn.addClickListener((Event event) -> {\r\n            audioContext = new AudioContext();\r\n            osc = audioContext.createOscillator();\r\n            osc.setType(OscillatorType.SQUARE);\r\n            osc.connect(audioContext.getDestination(), 0);\r\n            osc.getFrequency().setValue(550);\r\n\r\n            gain = audioContext.createGain();\r\n            gain.getGain().setValue(100);\r\n            gain.connect(osc.getFrequency());\r\n\r\n            osc2 = audioContext.createOscillator();\r\n            osc2.getFrequency().setValue(1.25);\r\n            osc2.setType(OscillatorType.TRIANGLE);\r\n            osc2.connect(gain);\r\n\r\n            osc.start();\r\n            osc2.start();\r\n\r\n            btnSoundOn.setDisabled(true);\r\n            btnSoundOff.setDisabled(false);\r\n            playing = true;\r\n        });\r\n        btnSoundOff.addClickListener(event -> stopPlaying());\r\n    }\r\n\r\n    private void stopPlaying() {\r\n        osc.stop(audioContext.getCurrentTime() + 1);\r\n        osc2.stop();\r\n        osc.disconnect();\r\n        osc2.disconnect();\r\n        gain.disconnect();\r\n        if (audioContext.getState() != AudioContextState.CLOSED) {\r\n            audioContext.close();\r\n        }\r\n        btnSoundOff.setDisabled(true);\r\n        btnSoundOn.setDisabled(false);\r\n        playing = false;\r\n    }\r\n\r\n    @Override\r\n    protected void setInactive() {\r\n        if (playing) {\r\n            stopPlaying();\r\n        }\r\n        super.setInactive();\r\n    }\r\n\r\n    @Override\r\n    protected String getTitle() {\r\n        return "Web Audio Demo";\r\n    }\r\n\r\n    @Override\r\n    protected TextResource getTemplate() {\r\n        return HtmlClientBundle.INSTANCE.getWebAudioHtml();\r\n    }\r\n\r\n    @Override\r\n    protected TextResource getSource() {\r\n        return SourceClientBundle.INSTANCE.getWebAudioDemoSource();\r\n    }\r\n\r\n    @Override\r\n    protected String getName() {\r\n        return "webaudio";\r\n    }\r\n}\r\n';
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lgwt_1jelement_1demo_1client_1SourceClientBundle_11default_11InlineClientBundleGenerator$9_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_23, 'SourceClientBundle_default_InlineClientBundleGenerator/9', 156);
function gwt_jelement_demo_client_SourceClientBundle_1default_1InlineClientBundleGenerator$getBatterySourceInitializer_$clinit__V(){
  gwt_jelement_demo_client_SourceClientBundle_1default_1InlineClientBundleGenerator$getBatterySourceInitializer_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  gwt_jelement_demo_client_SourceClientBundle_1default_1InlineClientBundleGenerator_getBatterySource = new gwt_jelement_demo_client_SourceClientBundle_1default_1InlineClientBundleGenerator$1_SourceClientBundle_1default_1InlineClientBundleGenerator$1__Lgwt_jelement_demo_client_SourceClientBundle_1default_1InlineClientBundleGenerator_2V;
}

function gwt_jelement_demo_client_SourceClientBundle_1default_1InlineClientBundleGenerator$getCanvas2DDemoSourceInitializer_$clinit__V(){
  gwt_jelement_demo_client_SourceClientBundle_1default_1InlineClientBundleGenerator$getCanvas2DDemoSourceInitializer_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  gwt_jelement_demo_client_SourceClientBundle_1default_1InlineClientBundleGenerator_getCanvas2DDemoSource = new gwt_jelement_demo_client_SourceClientBundle_1default_1InlineClientBundleGenerator$2_SourceClientBundle_1default_1InlineClientBundleGenerator$2__Lgwt_jelement_demo_client_SourceClientBundle_1default_1InlineClientBundleGenerator_2V;
}

function gwt_jelement_demo_client_SourceClientBundle_1default_1InlineClientBundleGenerator$getElementAnimateDemoSourceInitializer_$clinit__V(){
  gwt_jelement_demo_client_SourceClientBundle_1default_1InlineClientBundleGenerator$getElementAnimateDemoSourceInitializer_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  gwt_jelement_demo_client_SourceClientBundle_1default_1InlineClientBundleGenerator_getElementAnimateDemoSource = new gwt_jelement_demo_client_SourceClientBundle_1default_1InlineClientBundleGenerator$3_SourceClientBundle_1default_1InlineClientBundleGenerator$3__Lgwt_jelement_demo_client_SourceClientBundle_1default_1InlineClientBundleGenerator_2V;
}

function gwt_jelement_demo_client_SourceClientBundle_1default_1InlineClientBundleGenerator$getGeolocationSourceInitializer_$clinit__V(){
  gwt_jelement_demo_client_SourceClientBundle_1default_1InlineClientBundleGenerator$getGeolocationSourceInitializer_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  gwt_jelement_demo_client_SourceClientBundle_1default_1InlineClientBundleGenerator_getGeolocationSource = new gwt_jelement_demo_client_SourceClientBundle_1default_1InlineClientBundleGenerator$4_SourceClientBundle_1default_1InlineClientBundleGenerator$4__Lgwt_jelement_demo_client_SourceClientBundle_1default_1InlineClientBundleGenerator_2V;
}

function gwt_jelement_demo_client_SourceClientBundle_1default_1InlineClientBundleGenerator$getNotificationSourceInitializer_$clinit__V(){
  gwt_jelement_demo_client_SourceClientBundle_1default_1InlineClientBundleGenerator$getNotificationSourceInitializer_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  gwt_jelement_demo_client_SourceClientBundle_1default_1InlineClientBundleGenerator_getNotificationSource = new gwt_jelement_demo_client_SourceClientBundle_1default_1InlineClientBundleGenerator$5_SourceClientBundle_1default_1InlineClientBundleGenerator$5__Lgwt_jelement_demo_client_SourceClientBundle_1default_1InlineClientBundleGenerator_2V;
}

function gwt_jelement_demo_client_SourceClientBundle_1default_1InlineClientBundleGenerator$getPerformanceSourceInitializer_$clinit__V(){
  gwt_jelement_demo_client_SourceClientBundle_1default_1InlineClientBundleGenerator$getPerformanceSourceInitializer_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  gwt_jelement_demo_client_SourceClientBundle_1default_1InlineClientBundleGenerator_getPerformanceSource = new gwt_jelement_demo_client_SourceClientBundle_1default_1InlineClientBundleGenerator$6_SourceClientBundle_1default_1InlineClientBundleGenerator$6__Lgwt_jelement_demo_client_SourceClientBundle_1default_1InlineClientBundleGenerator_2V;
}

function gwt_jelement_demo_client_SourceClientBundle_1default_1InlineClientBundleGenerator$getSpeechSynthesisSourceInitializer_$clinit__V(){
  gwt_jelement_demo_client_SourceClientBundle_1default_1InlineClientBundleGenerator$getSpeechSynthesisSourceInitializer_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  gwt_jelement_demo_client_SourceClientBundle_1default_1InlineClientBundleGenerator_getSpeechSynthesisSource = new gwt_jelement_demo_client_SourceClientBundle_1default_1InlineClientBundleGenerator$7_SourceClientBundle_1default_1InlineClientBundleGenerator$7__Lgwt_jelement_demo_client_SourceClientBundle_1default_1InlineClientBundleGenerator_2V;
}

function gwt_jelement_demo_client_SourceClientBundle_1default_1InlineClientBundleGenerator$getSvgSourceInitializer_$clinit__V(){
  gwt_jelement_demo_client_SourceClientBundle_1default_1InlineClientBundleGenerator$getSvgSourceInitializer_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  gwt_jelement_demo_client_SourceClientBundle_1default_1InlineClientBundleGenerator_getSvgSource = new gwt_jelement_demo_client_SourceClientBundle_1default_1InlineClientBundleGenerator$8_SourceClientBundle_1default_1InlineClientBundleGenerator$8__Lgwt_jelement_demo_client_SourceClientBundle_1default_1InlineClientBundleGenerator_2V;
}

function gwt_jelement_demo_client_SourceClientBundle_1default_1InlineClientBundleGenerator$getWebAudioDemoSourceInitializer_$clinit__V(){
  gwt_jelement_demo_client_SourceClientBundle_1default_1InlineClientBundleGenerator$getWebAudioDemoSourceInitializer_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  gwt_jelement_demo_client_SourceClientBundle_1default_1InlineClientBundleGenerator_getWebAudioDemoSource = new gwt_jelement_demo_client_SourceClientBundle_1default_1InlineClientBundleGenerator$9_SourceClientBundle_1default_1InlineClientBundleGenerator$9__Lgwt_jelement_demo_client_SourceClientBundle_1default_1InlineClientBundleGenerator_2V;
}

function gwt_jelement_demo_client_SourceClientBundle_1default_1InlineClientBundleGenerator$getWebGlSourceInitializer_$clinit__V(){
  gwt_jelement_demo_client_SourceClientBundle_1default_1InlineClientBundleGenerator$getWebGlSourceInitializer_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  gwt_jelement_demo_client_SourceClientBundle_1default_1InlineClientBundleGenerator_getWebGlSource = new gwt_jelement_demo_client_SourceClientBundle_1default_1InlineClientBundleGenerator$10_SourceClientBundle_1default_1InlineClientBundleGenerator$10__Lgwt_jelement_demo_client_SourceClientBundle_1default_1InlineClientBundleGenerator_2V;
}

function gwt_jelement_demo_client_SpeechSynthesisDemo_$getPreferredVoice__Lgwt_jelement_demo_client_SpeechSynthesisDemo_2Ljava_lang_String_2Ljava_util_function_Predicate_2Lgwt_jelement_speech_SpeechSynthesisVoice_2(language, predicate){
  var candidates, collected, lastArg, lastArg0;
  candidates = (collected = com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(java_util_stream_StreamImpl_$reduce__Ljava_util_stream_StreamImpl_2Ljava_lang_Object_2Ljava_util_function_BiFunction_2Ljava_util_function_BinaryOperator_2Ljava_lang_Object_2((lastArg0 = java_util_stream_StreamImpl_$filter__Ljava_util_stream_StreamImpl_2Ljava_util_function_Predicate_2Ljava_util_stream_Stream_2(java_util_Arrays_stream___3Ljava_lang_Object_2Ljava_util_stream_Stream_2($wnd.window.window.speechSynthesis.getVoices()), new gwt_jelement_demo_client_SpeechSynthesisDemo$lambda$7$Type_SpeechSynthesisDemo$lambda$7$Type__Ljava_lang_String_2V(language)) , java_util_stream_Collector_of__Ljava_util_function_Supplier_2Ljava_util_function_BiConsumer_2Ljava_util_function_BinaryOperator_2_3Ljava_util_stream_Collector$Characteristics_2Ljava_util_stream_Collector_2(new java_util_stream_Collectors$21methodref$ctor$Type_Collectors$21methodref$ctor$Type__V, new java_util_stream_Collectors$20methodref$add$Type_Collectors$20methodref$add$Type__V, new java_util_stream_Collectors$lambda$21$Type_Collectors$lambda$21$Type__V, com_google_gwt_lang_Array_stampJavaTypeInfo__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_lang_Array_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1stream_1Collector$Characteristics_12_1classLit, 1), $intern_15, 32, 0, [(java_util_stream_Collector$Characteristics_$clinit__V() , java_util_stream_Collector$Characteristics_IDENTITY_1FINISH)])) , lastArg0), (lastArg = new java_util_ArrayList_ArrayList__V , lastArg)), 39) , com_google_gwt_lang_Cast_castToJsArray__Ljava_lang_Object_2Ljava_lang_Object_2(collected.toArray___3Ljava_lang_Object_2_3Ljava_lang_Object_2(com_google_gwt_lang_Array_newArray__I_3Ljava_lang_Object_2(collected.size()))));
  if (candidates.length != 0) {
    return com_google_gwt_lang_Cast_castToJsObject__Ljava_lang_Object_2Ljava_lang_Object_2(java_util_Optional_$orElse__Ljava_util_Optional_2Ljava_lang_Object_2Ljava_lang_Object_2(java_util_stream_StreamImpl_$findFirst__Ljava_util_stream_StreamImpl_2Ljava_util_Optional_2(java_util_stream_StreamImpl_$filter__Ljava_util_stream_StreamImpl_2Ljava_util_function_Predicate_2Ljava_util_stream_Stream_2(new java_util_stream_StreamImpl_StreamImpl__Ljava_util_stream_TerminatableStream_2Ljava_util_Spliterator_2V(null, java_util_Spliterators_spliterator___3Ljava_lang_Object_2IIILjava_util_Spliterator_2(candidates, candidates.length)), predicate)), candidates[0]));
  }
  return null;
}

function gwt_jelement_demo_client_SpeechSynthesisDemo_$intro__Lgwt_jelement_demo_client_SpeechSynthesisDemo_2V(){
  var femaleUSVoice, maleUSVoice, maleUkVoice, otherLanguages;
  maleUSVoice = gwt_jelement_demo_client_SpeechSynthesisDemo_$getPreferredVoice__Lgwt_jelement_demo_client_SpeechSynthesisDemo_2Ljava_lang_String_2Ljava_util_function_Predicate_2Lgwt_jelement_speech_SpeechSynthesisVoice_2('en-US', new gwt_jelement_demo_client_SpeechSynthesisDemo$lambda$2$Type_SpeechSynthesisDemo$lambda$2$Type__V);
  femaleUSVoice = gwt_jelement_demo_client_SpeechSynthesisDemo_$getPreferredVoice__Lgwt_jelement_demo_client_SpeechSynthesisDemo_2Ljava_lang_String_2Ljava_util_function_Predicate_2Lgwt_jelement_speech_SpeechSynthesisVoice_2('en-US', new gwt_jelement_demo_client_SpeechSynthesisDemo$lambda$3$Type_SpeechSynthesisDemo$lambda$3$Type__V);
  maleUkVoice = gwt_jelement_demo_client_SpeechSynthesisDemo_$getPreferredVoice__Lgwt_jelement_demo_client_SpeechSynthesisDemo_2Ljava_lang_String_2Ljava_util_function_Predicate_2Lgwt_jelement_speech_SpeechSynthesisVoice_2('en-GB', new gwt_jelement_demo_client_SpeechSynthesisDemo$lambda$4$Type_SpeechSynthesisDemo$lambda$4$Type__V);
  gwt_jelement_demo_client_SpeechSynthesisDemo_$say__Lgwt_jelement_demo_client_SpeechSynthesisDemo_2Ljava_lang_String_2Lgwt_jelement_speech_SpeechSynthesisVoice_2V('Hello. Welcome to the speech synthesis demo.', maleUSVoice);
  gwt_jelement_demo_client_SpeechSynthesisDemo_$say__Lgwt_jelement_demo_client_SpeechSynthesisDemo_2Ljava_lang_String_2Lgwt_jelement_speech_SpeechSynthesisVoice_2V('You sound like a robot. I think I sound better.', femaleUSVoice);
  otherLanguages = gwt_jelement_demo_client_SpeechSynthesisDemo_$say__Lgwt_jelement_demo_client_SpeechSynthesisDemo_2Ljava_lang_String_2_3Ljava_lang_String_2Z('en-GB', com_google_gwt_lang_Array_stampJavaTypeInfo__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_lang_Array_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1String_12_1classLit, 1), $intern_15, 2, 6, ["Actually, everything sounds better with a British accent, don't you think?"]));
  otherLanguages = otherLanguages | gwt_jelement_demo_client_SpeechSynthesisDemo_$say__Lgwt_jelement_demo_client_SpeechSynthesisDemo_2Ljava_lang_String_2_3Ljava_lang_String_2Z('fr', com_google_gwt_lang_Array_stampJavaTypeInfo__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_lang_Array_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1String_12_1classLit, 1), $intern_15, 2, 6, ['Sur Chrome, nous pouvons parler de nombreuses langues.']));
  otherLanguages = otherLanguages | gwt_jelement_demo_client_SpeechSynthesisDemo_$say__Lgwt_jelement_demo_client_SpeechSynthesisDemo_2Ljava_lang_String_2_3Ljava_lang_String_2Z('es-US', com_google_gwt_lang_Array_stampJavaTypeInfo__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_lang_Array_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1String_12_1classLit, 1), $intern_15, 2, 6, ['Como el espa\xF1ol por ejemplo.']));
  otherLanguages = otherLanguages | gwt_jelement_demo_client_SpeechSynthesisDemo_$say__Lgwt_jelement_demo_client_SpeechSynthesisDemo_2Ljava_lang_String_2_3Ljava_lang_String_2Z('es-ES', com_google_gwt_lang_Array_stampJavaTypeInfo__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_lang_Array_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1String_12_1classLit, 1), $intern_15, 2, 6, ['O el t\xEDpico espa\xF1ol de Espa\xF1a.', 'Yo soy de Zaragoza!']));
  gwt_jelement_demo_client_SpeechSynthesisDemo_$say__Lgwt_jelement_demo_client_SpeechSynthesisDemo_2Ljava_lang_String_2_3Ljava_lang_String_2Z('es-US', com_google_gwt_lang_Array_stampJavaTypeInfo__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_lang_Array_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1String_12_1classLit, 1), $intern_15, 2, 6, ['Que dices mujer?', 'Que mi espa\xF1ol no es t\xEDpico?', 'Yo soy de Monterrey, Mejico!']));
  otherLanguages = otherLanguages | gwt_jelement_demo_client_SpeechSynthesisDemo_$say__Lgwt_jelement_demo_client_SpeechSynthesisDemo_2Ljava_lang_String_2_3Ljava_lang_String_2Z('it', com_google_gwt_lang_Array_stampJavaTypeInfo__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_lang_Array_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1String_12_1classLit, 1), $intern_15, 2, 6, ['Non dimenticare di me! parlo italiano']));
  otherLanguages = otherLanguages | gwt_jelement_demo_client_SpeechSynthesisDemo_$say__Lgwt_jelement_demo_client_SpeechSynthesisDemo_2Ljava_lang_String_2_3Ljava_lang_String_2Z('de', com_google_gwt_lang_Array_stampJavaTypeInfo__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_lang_Array_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1String_12_1classLit, 1), $intern_15, 2, 6, ['Und ich spreche deutsch.']));
  otherLanguages = otherLanguages | gwt_jelement_demo_client_SpeechSynthesisDemo_$say__Lgwt_jelement_demo_client_SpeechSynthesisDemo_2Ljava_lang_String_2_3Ljava_lang_String_2Z('zh', com_google_gwt_lang_Array_stampJavaTypeInfo__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_lang_Array_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1String_12_1classLit, 1), $intern_15, 2, 6, ['\u6211\u53EF\u4EE5\u8BF4\u4E2D\u6587.']));
  otherLanguages = otherLanguages | gwt_jelement_demo_client_SpeechSynthesisDemo_$say__Lgwt_jelement_demo_client_SpeechSynthesisDemo_2Ljava_lang_String_2_3Ljava_lang_String_2Z('ko', com_google_gwt_lang_Array_stampJavaTypeInfo__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_lang_Array_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1String_12_1classLit, 1), $intern_15, 2, 6, ['\uB098\uB294 \uD55C\uAD6D\uC5B4\uB97C \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.']));
  otherLanguages = otherLanguages | gwt_jelement_demo_client_SpeechSynthesisDemo_$say__Lgwt_jelement_demo_client_SpeechSynthesisDemo_2Ljava_lang_String_2_3Ljava_lang_String_2Z('ru', com_google_gwt_lang_Array_stampJavaTypeInfo__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_lang_Array_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1String_12_1classLit, 1), $intern_15, 2, 6, ['\u0418 \u044F \u0433\u043E\u0432\u043E\u0440\u044E \u043F\u043E-\u0440\u0443\u0441\u0441\u043A\u0438.']));
  gwt_jelement_demo_client_SpeechSynthesisDemo_$say__Lgwt_jelement_demo_client_SpeechSynthesisDemo_2Ljava_lang_String_2_3Ljava_lang_String_2Z('fr', com_google_gwt_lang_Array_stampJavaTypeInfo__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_lang_Array_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1String_12_1classLit, 1), $intern_15, 2, 6, ['I can even speak English with a French accent.', "C'est amusant, \xE7a!"]));
  gwt_jelement_demo_client_SpeechSynthesisDemo_$say__Lgwt_jelement_demo_client_SpeechSynthesisDemo_2Ljava_lang_String_2_3Ljava_lang_String_2Z('fr', com_google_gwt_lang_Array_stampJavaTypeInfo__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_lang_Array_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1String_12_1classLit, 1), $intern_15, 2, 6, ["Il y a aussi d'autres langues, mais \xE7a devient un peu ennuyeux..."]));
  gwt_jelement_demo_client_SpeechSynthesisDemo_$say__Lgwt_jelement_demo_client_SpeechSynthesisDemo_2Ljava_lang_String_2_3Ljava_lang_String_2Z('pt', com_google_gwt_lang_Array_stampJavaTypeInfo__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_lang_Array_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1String_12_1classLit, 1), $intern_15, 2, 6, ['Ei, espere um pouco, voc\xEA conseguiu ignorar o portugu\xEAs?', ' Braaaasil!', $intern_35, $intern_35]));
  maleUkVoice != null?gwt_jelement_demo_client_SpeechSynthesisDemo_$say__Lgwt_jelement_demo_client_SpeechSynthesisDemo_2Ljava_lang_String_2Lgwt_jelement_speech_SpeechSynthesisVoice_2V($intern_36, maleUkVoice):gwt_jelement_demo_client_SpeechSynthesisDemo_$say__Lgwt_jelement_demo_client_SpeechSynthesisDemo_2Ljava_lang_String_2_3Ljava_lang_String_2Z('en-GB', com_google_gwt_lang_Array_stampJavaTypeInfo__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_lang_Array_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1String_12_1classLit, 1), $intern_15, 2, 6, [$intern_36]));
  if (otherLanguages) {
    gwt_jelement_demo_client_SpeechSynthesisDemo_$say__Lgwt_jelement_demo_client_SpeechSynthesisDemo_2Ljava_lang_String_2Lgwt_jelement_speech_SpeechSynthesisVoice_2V("I'm sorry Dave. I'm afraid I can't do that.", maleUSVoice);
  }
   else {
    gwt_jelement_demo_client_SpeechSynthesisDemo_$say__Lgwt_jelement_demo_client_SpeechSynthesisDemo_2Ljava_lang_String_2Lgwt_jelement_speech_SpeechSynthesisVoice_2V('Guess what, we can only speak American English.', maleUSVoice);
    gwt_jelement_demo_client_SpeechSynthesisDemo_$say__Lgwt_jelement_demo_client_SpeechSynthesisDemo_2Ljava_lang_String_2Lgwt_jelement_speech_SpeechSynthesisVoice_2V('How dumb! I want to be on Chrome. They speak many languages there.', femaleUSVoice);
  }
}

function gwt_jelement_demo_client_SpeechSynthesisDemo_$say__Lgwt_jelement_demo_client_SpeechSynthesisDemo_2Ljava_lang_String_2Lgwt_jelement_speech_SpeechSynthesisVoice_2V(text_0, voice){
  var utterance;
  utterance = new $wnd.SpeechSynthesisUtterance(text_0);
  utterance.voice = voice;
  $wnd.window.window.speechSynthesis.speak(utterance);
}

function gwt_jelement_demo_client_SpeechSynthesisDemo_$say__Lgwt_jelement_demo_client_SpeechSynthesisDemo_2Ljava_lang_String_2_3Ljava_lang_String_2Z(language, text_0){
  var phrase, phrase$index, phrase$max, utterance;
  if (java_util_stream_StreamImpl_$anyMatch__Ljava_util_stream_StreamImpl_2Ljava_util_function_Predicate_2Z(java_util_Arrays_stream___3Ljava_lang_Object_2Ljava_util_stream_Stream_2($wnd.window.window.speechSynthesis.getVoices()), new gwt_jelement_demo_client_SpeechSynthesisDemo$lambda$6$Type_SpeechSynthesisDemo$lambda$6$Type__Ljava_lang_String_2V(language))) {
    for (phrase$index = 0 , phrase$max = text_0.length; phrase$index < phrase$max; ++phrase$index) {
      phrase = text_0[phrase$index];
      utterance = new $wnd.SpeechSynthesisUtterance(phrase);
      utterance.lang = language;
      $wnd.window.window.speechSynthesis.speak(utterance);
    }
    return true;
  }
  return false;
}

function gwt_jelement_demo_client_SpeechSynthesisDemo_SpeechSynthesisDemo__V(){
}

function gwt_jelement_demo_client_SpeechSynthesisDemo_lambda$6__Ljava_lang_String_2Lgwt_jelement_speech_SpeechSynthesisVoice_2Z(language_0, voice_1){
  return java_lang_String_$indexOf__Ljava_lang_String_2Ljava_lang_String_2I(voice_1.lang, (javaemul_internal_InternalPreconditions_checkCriticalNotNull__Ljava_lang_Object_2Ljava_lang_Object_2(language_0) , language_0)) != -1;
}

function gwt_jelement_demo_client_SpeechSynthesisDemo_lambda$7__Ljava_lang_String_2Lgwt_jelement_speech_SpeechSynthesisVoice_2Z(language_0, voice_1){
  return java_lang_String_$indexOf__Ljava_lang_String_2Ljava_lang_String_2I(voice_1.lang, (javaemul_internal_InternalPreconditions_checkCriticalNotNull__Ljava_lang_Object_2Ljava_lang_Object_2(language_0) , language_0)) != -1;
}

function gwt_jelement_demo_client_SpeechSynthesisDemo_lambda$9__Lgwt_jelement_core_ResolveFunction_2Lgwt_jelement_core_RejectFunction_2Lgwt_jelement_events_Event_2Ljava_lang_Object_2(resolve_0, reject_1){
  gwt_jelement_speech_SpeechSynthesis_$setOnVoiceschanged__Lgwt_jelement_speech_SpeechSynthesis_2Lgwt_jelement_events_EventHandlerNonNull_2V($wnd.window.window.speechSynthesis, null);
  $wnd.window.window.speechSynthesis.getVoices().length != 0?resolve_0(null):reject_1(new java_lang_Error_Error__Ljava_lang_String_2V($intern_37));
  return null;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(92, 13, $intern_22, gwt_jelement_demo_client_SpeechSynthesisDemo_SpeechSynthesisDemo__V);
_.execute__V = function gwt_jelement_demo_client_SpeechSynthesisDemo_execute__V(){
  if (!('speechSynthesis' in gwt_jelement_core_IsObject_$object__Lgwt_jelement_core_IsObject_2Lgwt_jelement_core_JsObject_2($wnd.window.window))) {
    $wnd.window.window.alert('no support for speech synthesis');
    return;
  }
  $wnd.window.window.speechSynthesis.pending && $wnd.window.window.speechSynthesis.cancel();
  (new $wnd.Promise(com_google_gwt_lang_Runtime_makeLambdaFunction__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(gwt_jelement_demo_client_SpeechSynthesisDemo$lambda$5$Type_SpeechSynthesisDemo$lambda$5$Type__V.prototype.execute__Lgwt_jelement_core_ResolveFunction_2Lgwt_jelement_core_RejectFunction_2V, gwt_jelement_demo_client_SpeechSynthesisDemo$lambda$5$Type_SpeechSynthesisDemo$lambda$5$Type__V, []))).then(com_google_gwt_lang_Runtime_makeLambdaFunction__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(gwt_jelement_demo_client_SpeechSynthesisDemo$lambda$0$Type_SpeechSynthesisDemo$lambda$0$Type__Lgwt_jelement_demo_client_SpeechSynthesisDemo_2V.prototype.fullfilled__Ljava_lang_Object_2Ljava_lang_Object_2, gwt_jelement_demo_client_SpeechSynthesisDemo$lambda$0$Type_SpeechSynthesisDemo$lambda$0$Type__Lgwt_jelement_demo_client_SpeechSynthesisDemo_2V, [])).catch(com_google_gwt_lang_Runtime_makeLambdaFunction__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(gwt_jelement_demo_client_SpeechSynthesisDemo$lambda$1$Type_SpeechSynthesisDemo$lambda$1$Type__V.prototype.callback__Ljava_lang_Object_2Ljava_lang_Object_2, gwt_jelement_demo_client_SpeechSynthesisDemo$lambda$1$Type_SpeechSynthesisDemo$lambda$1$Type__V, []));
}
;
_.getName__Ljava_lang_String_2 = function gwt_jelement_demo_client_SpeechSynthesisDemo_getName__Ljava_lang_String_2(){
  return 'speech-synth';
}
;
_.getSource__Lcom_google_gwt_resources_client_TextResource_2 = function gwt_jelement_demo_client_SpeechSynthesisDemo_getSource__Lcom_google_gwt_resources_client_TextResource_2(){
  return gwt_jelement_demo_client_SourceClientBundle_1default_1InlineClientBundleGenerator$getSpeechSynthesisSourceInitializer_$clinit__V() , gwt_jelement_demo_client_SourceClientBundle_1default_1InlineClientBundleGenerator_getSpeechSynthesisSource;
}
;
_.getTemplate__Lcom_google_gwt_resources_client_TextResource_2 = function gwt_jelement_demo_client_SpeechSynthesisDemo_getTemplate__Lcom_google_gwt_resources_client_TextResource_2(){
  return gwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator$getSpeechSynthHtmlInitializer_$clinit__V() , gwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator_getSpeechSynthHtml;
}
;
_.getTitle__Ljava_lang_String_2 = function gwt_jelement_demo_client_SpeechSynthesisDemo_getTitle__Ljava_lang_String_2(){
  return 'Speech Synthesis Demo';
}
;
_.package_private$gwt_jelement_demo_client$setInactive__V = function gwt_jelement_demo_client_SpeechSynthesisDemo_setInactive__V(){
  ($wnd.window.window.speechSynthesis.speaking || $wnd.window.window.speechSynthesis.pending) && $wnd.window.window.speechSynthesis.cancel();
  this.gwt_jelement_demo_client_AbstractDemo_active = false;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lgwt_1jelement_1demo_1client_1SpeechSynthesisDemo_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_23, 'SpeechSynthesisDemo', 92);
function gwt_jelement_demo_client_SpeechSynthesisDemo$lambda$0$Type_SpeechSynthesisDemo$lambda$0$Type__Lgwt_jelement_demo_client_SpeechSynthesisDemo_2V(){
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(239, $wnd.Function, {}, gwt_jelement_demo_client_SpeechSynthesisDemo$lambda$0$Type_SpeechSynthesisDemo$lambda$0$Type__Lgwt_jelement_demo_client_SpeechSynthesisDemo_2V);
_.fullfilled__Ljava_lang_Object_2Ljava_lang_Object_2 = function gwt_jelement_demo_client_SpeechSynthesisDemo$lambda$0$Type_fullfilled__Ljava_lang_Object_2Ljava_lang_Object_2(arg0){
  return gwt_jelement_demo_client_SpeechSynthesisDemo_$intro__Lgwt_jelement_demo_client_SpeechSynthesisDemo_2V() , null;
}
;
function gwt_jelement_demo_client_SpeechSynthesisDemo$lambda$1$Type_SpeechSynthesisDemo$lambda$1$Type__V(){
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(240, $wnd.Function, {}, gwt_jelement_demo_client_SpeechSynthesisDemo$lambda$1$Type_SpeechSynthesisDemo$lambda$1$Type__V);
_.callback__Ljava_lang_Object_2Ljava_lang_Object_2 = function gwt_jelement_demo_client_SpeechSynthesisDemo$lambda$1$Type_callback__Ljava_lang_Object_2Ljava_lang_Object_2(arg0){
  return $wnd.window.window.alert(com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(arg0, 16).java_lang_Throwable_detailMessage) , null;
}
;
function gwt_jelement_demo_client_SpeechSynthesisDemo$lambda$2$Type_SpeechSynthesisDemo$lambda$2$Type__V(){
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(134, 1, {}, gwt_jelement_demo_client_SpeechSynthesisDemo$lambda$2$Type_SpeechSynthesisDemo$lambda$2$Type__V);
_.test__Ljava_lang_Object_2Z = function gwt_jelement_demo_client_SpeechSynthesisDemo$lambda$2$Type_test__Ljava_lang_Object_2Z(arg0){
  return com_google_gwt_lang_Cast_castToJsObject__Ljava_lang_Object_2Ljava_lang_Object_2(arg0).name.indexOf('Zira') == -1 && com_google_gwt_lang_Cast_castToJsObject__Ljava_lang_Object_2Ljava_lang_Object_2(arg0).name.indexOf($intern_38) == -1;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lgwt_1jelement_1demo_1client_1SpeechSynthesisDemo$lambda$2$Type_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_23, 'SpeechSynthesisDemo/lambda$2$Type', 134);
function gwt_jelement_demo_client_SpeechSynthesisDemo$lambda$3$Type_SpeechSynthesisDemo$lambda$3$Type__V(){
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(135, 1, {}, gwt_jelement_demo_client_SpeechSynthesisDemo$lambda$3$Type_SpeechSynthesisDemo$lambda$3$Type__V);
_.test__Ljava_lang_Object_2Z = function gwt_jelement_demo_client_SpeechSynthesisDemo$lambda$3$Type_test__Ljava_lang_Object_2Z(arg0){
  return com_google_gwt_lang_Cast_castToJsObject__Ljava_lang_Object_2Ljava_lang_Object_2(arg0).name.indexOf('Zira') != -1 || com_google_gwt_lang_Cast_castToJsObject__Ljava_lang_Object_2Ljava_lang_Object_2(arg0).name.indexOf($intern_38) != -1;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lgwt_1jelement_1demo_1client_1SpeechSynthesisDemo$lambda$3$Type_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_23, 'SpeechSynthesisDemo/lambda$3$Type', 135);
function gwt_jelement_demo_client_SpeechSynthesisDemo$lambda$4$Type_SpeechSynthesisDemo$lambda$4$Type__V(){
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(136, 1, {}, gwt_jelement_demo_client_SpeechSynthesisDemo$lambda$4$Type_SpeechSynthesisDemo$lambda$4$Type__V);
_.test__Ljava_lang_Object_2Z = function gwt_jelement_demo_client_SpeechSynthesisDemo$lambda$4$Type_test__Ljava_lang_Object_2Z(arg0){
  return com_google_gwt_lang_Cast_castToJsObject__Ljava_lang_Object_2Ljava_lang_Object_2(arg0).name.indexOf($intern_38) == -1;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lgwt_1jelement_1demo_1client_1SpeechSynthesisDemo$lambda$4$Type_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_23, 'SpeechSynthesisDemo/lambda$4$Type', 136);
function gwt_jelement_demo_client_SpeechSynthesisDemo$lambda$5$Type_SpeechSynthesisDemo$lambda$5$Type__V(){
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(238, $wnd.Function, {}, gwt_jelement_demo_client_SpeechSynthesisDemo$lambda$5$Type_SpeechSynthesisDemo$lambda$5$Type__V);
_.execute__Lgwt_jelement_core_ResolveFunction_2Lgwt_jelement_core_RejectFunction_2V = function gwt_jelement_demo_client_SpeechSynthesisDemo$lambda$5$Type_execute__Lgwt_jelement_core_ResolveFunction_2Lgwt_jelement_core_RejectFunction_2V(arg0, arg1){
  var gwt_jelement_demo_client_SpeechSynthesisDemo_lambda$5__Lgwt_jelement_core_ResolveFunction_2Lgwt_jelement_core_RejectFunction_2V_voices_0;
  gwt_jelement_demo_client_SpeechSynthesisDemo_lambda$5__Lgwt_jelement_core_ResolveFunction_2Lgwt_jelement_core_RejectFunction_2V_voices_0 = $wnd.window.window.speechSynthesis.getVoices();
  gwt_jelement_demo_client_SpeechSynthesisDemo_lambda$5__Lgwt_jelement_core_ResolveFunction_2Lgwt_jelement_core_RejectFunction_2V_voices_0.length != 0?arg0(null):'onvoiceschanged' in gwt_jelement_core_IsObject_$object__Lgwt_jelement_core_IsObject_2Lgwt_jelement_core_JsObject_2($wnd.window.window.speechSynthesis)?gwt_jelement_speech_SpeechSynthesis_$setOnVoiceschanged__Lgwt_jelement_speech_SpeechSynthesis_2Lgwt_jelement_events_EventHandlerNonNull_2V($wnd.window.window.speechSynthesis, com_google_gwt_lang_Runtime_makeLambdaFunction__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(gwt_jelement_demo_client_SpeechSynthesisDemo$lambda$9$Type_SpeechSynthesisDemo$lambda$9$Type__Lgwt_jelement_core_ResolveFunction_2Lgwt_jelement_core_RejectFunction_2V.prototype.callback__Lgwt_jelement_events_Event_2Ljava_lang_Object_2, gwt_jelement_demo_client_SpeechSynthesisDemo$lambda$9$Type_SpeechSynthesisDemo$lambda$9$Type__Lgwt_jelement_core_ResolveFunction_2Lgwt_jelement_core_RejectFunction_2V, [arg0, arg1])):arg1(new java_lang_Error_Error__Ljava_lang_String_2V($intern_37));
}
;
function gwt_jelement_demo_client_SpeechSynthesisDemo$lambda$6$Type_SpeechSynthesisDemo$lambda$6$Type__Ljava_lang_String_2V(language_0){
  this.gwt_jelement_demo_client_SpeechSynthesisDemo$lambda$6$Type_language_10 = language_0;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(137, 1, {}, gwt_jelement_demo_client_SpeechSynthesisDemo$lambda$6$Type_SpeechSynthesisDemo$lambda$6$Type__Ljava_lang_String_2V);
_.test__Ljava_lang_Object_2Z = function gwt_jelement_demo_client_SpeechSynthesisDemo$lambda$6$Type_test__Ljava_lang_Object_2Z(arg0){
  return gwt_jelement_demo_client_SpeechSynthesisDemo_lambda$6__Ljava_lang_String_2Lgwt_jelement_speech_SpeechSynthesisVoice_2Z(this.gwt_jelement_demo_client_SpeechSynthesisDemo$lambda$6$Type_language_10, arg0);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lgwt_1jelement_1demo_1client_1SpeechSynthesisDemo$lambda$6$Type_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_23, 'SpeechSynthesisDemo/lambda$6$Type', 137);
function gwt_jelement_demo_client_SpeechSynthesisDemo$lambda$7$Type_SpeechSynthesisDemo$lambda$7$Type__Ljava_lang_String_2V(language_0){
  this.gwt_jelement_demo_client_SpeechSynthesisDemo$lambda$7$Type_language_10 = language_0;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(138, 1, {}, gwt_jelement_demo_client_SpeechSynthesisDemo$lambda$7$Type_SpeechSynthesisDemo$lambda$7$Type__Ljava_lang_String_2V);
_.test__Ljava_lang_Object_2Z = function gwt_jelement_demo_client_SpeechSynthesisDemo$lambda$7$Type_test__Ljava_lang_Object_2Z(arg0){
  return gwt_jelement_demo_client_SpeechSynthesisDemo_lambda$7__Ljava_lang_String_2Lgwt_jelement_speech_SpeechSynthesisVoice_2Z(this.gwt_jelement_demo_client_SpeechSynthesisDemo$lambda$7$Type_language_10, arg0);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lgwt_1jelement_1demo_1client_1SpeechSynthesisDemo$lambda$7$Type_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_23, 'SpeechSynthesisDemo/lambda$7$Type', 138);
function gwt_jelement_demo_client_SpeechSynthesisDemo$lambda$9$Type_SpeechSynthesisDemo$lambda$9$Type__Lgwt_jelement_core_ResolveFunction_2Lgwt_jelement_core_RejectFunction_2V(resolve_0, reject_1){
  this.gwt_jelement_demo_client_SpeechSynthesisDemo$lambda$9$Type_resolve_10 = resolve_0;
  this.gwt_jelement_demo_client_SpeechSynthesisDemo$lambda$9$Type_reject_11 = reject_1;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(241, $wnd.Function, {}, gwt_jelement_demo_client_SpeechSynthesisDemo$lambda$9$Type_SpeechSynthesisDemo$lambda$9$Type__Lgwt_jelement_core_ResolveFunction_2Lgwt_jelement_core_RejectFunction_2V);
_.callback__Lgwt_jelement_events_Event_2Ljava_lang_Object_2 = function gwt_jelement_demo_client_SpeechSynthesisDemo$lambda$9$Type_callback__Lgwt_jelement_events_Event_2Ljava_lang_Object_2(arg0){
  return gwt_jelement_demo_client_SpeechSynthesisDemo_lambda$9__Lgwt_jelement_core_ResolveFunction_2Lgwt_jelement_core_RejectFunction_2Lgwt_jelement_events_Event_2Ljava_lang_Object_2(this.gwt_jelement_demo_client_SpeechSynthesisDemo$lambda$9$Type_resolve_10, this.gwt_jelement_demo_client_SpeechSynthesisDemo$lambda$9$Type_reject_11);
}
;
function gwt_jelement_demo_client_SvgDemo_$appendToBuffer__Lgwt_jelement_demo_client_SvgDemo_2Lgwt_jelement_demo_client_SvgDemo$Point_2V(this$static, point){
  java_util_ArrayList_$add__Ljava_util_ArrayList_2Ljava_lang_Object_2Z(this$static.gwt_jelement_demo_client_SvgDemo_buffer, point);
  this$static.gwt_jelement_demo_client_SvgDemo_buffer.java_util_ArrayList_array.length > 10 && java_util_ArrayList_$remove__Ljava_util_ArrayList_2ILjava_lang_Object_2(this$static.gwt_jelement_demo_client_SvgDemo_buffer, 0);
}

function gwt_jelement_demo_client_SvgDemo_$getAveragePoint__Lgwt_jelement_demo_client_SvgDemo_2ILgwt_jelement_demo_client_SvgDemo$Point_2(this$static, offset){
  var count, i, len, point, totalX, totalY;
  len = this$static.gwt_jelement_demo_client_SvgDemo_buffer.java_util_ArrayList_array.length;
  if (len % 2 == 1 || len >= 10) {
    totalX = 0;
    totalY = 0;
    count = 0;
    for (i = offset; i < len; i++) {
      ++count;
      point = com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(java_util_ArrayList_$get__Ljava_util_ArrayList_2ILjava_lang_Object_2(this$static.gwt_jelement_demo_client_SvgDemo_buffer, i), 38);
      totalX += point.gwt_jelement_demo_client_SvgDemo$Point_x;
      totalY += point.gwt_jelement_demo_client_SvgDemo$Point_y;
    }
    return new gwt_jelement_demo_client_SvgDemo$Point_SvgDemo$Point__Lgwt_jelement_demo_client_SvgDemo_2DDV(totalX / count, totalY / count);
  }
  return null;
}

function gwt_jelement_demo_client_SvgDemo_$getMousePosition__Lgwt_jelement_demo_client_SvgDemo_2Lgwt_jelement_events_MouseEvent_2Lgwt_jelement_demo_client_SvgDemo$Point_2(this$static, event_0){
  return new gwt_jelement_demo_client_SvgDemo$Point_SvgDemo$Point__Lgwt_jelement_demo_client_SvgDemo_2DDV(event_0.clientX - this$static.gwt_jelement_demo_client_SvgDemo_rect.left - this$static.gwt_jelement_demo_client_SvgDemo_svgElement.clientLeft, event_0.pageY - this$static.gwt_jelement_demo_client_SvgDemo_rect.top - this$static.gwt_jelement_demo_client_SvgDemo_svgElement.clientTop);
}

function gwt_jelement_demo_client_SvgDemo_$lambda$3__Lgwt_jelement_demo_client_SvgDemo_2Lgwt_jelement_events_Event_2V(this$static, event_0){
  var point;
  this$static.gwt_jelement_demo_client_SvgDemo_rect = this$static.gwt_jelement_demo_client_SvgDemo_svgElement.getBoundingClientRect();
  this$static.gwt_jelement_demo_client_SvgDemo_path = com_google_gwt_lang_Cast_castToNative__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2($wnd.window.document.createElementNS('http://www.w3.org/2000/svg', 'path'), $wnd.SVGPathElement);
  this$static.gwt_jelement_demo_client_SvgDemo_path.setAttribute('fill', 'none');
  this$static.gwt_jelement_demo_client_SvgDemo_path.setAttribute('stroke', this$static.gwt_jelement_demo_client_SvgDemo_strokeColor);
  this$static.gwt_jelement_demo_client_SvgDemo_path.setAttribute('stroke-width', '2');
  this$static.gwt_jelement_demo_client_SvgDemo_buffer = new java_util_ArrayList_ArrayList__V;
  point = gwt_jelement_demo_client_SvgDemo_$getMousePosition__Lgwt_jelement_demo_client_SvgDemo_2Lgwt_jelement_events_MouseEvent_2Lgwt_jelement_demo_client_SvgDemo$Point_2(this$static, com_google_gwt_lang_Cast_castToNative__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(event_0, $wnd.MouseEvent));
  java_util_ArrayList_$add__Ljava_util_ArrayList_2Ljava_lang_Object_2Z(this$static.gwt_jelement_demo_client_SvgDemo_buffer, point);
  this$static.gwt_jelement_demo_client_SvgDemo_buffer.java_util_ArrayList_array.length > 10 && java_util_ArrayList_$remove__Ljava_util_ArrayList_2ILjava_lang_Object_2(this$static.gwt_jelement_demo_client_SvgDemo_buffer, 0);
  this$static.gwt_jelement_demo_client_SvgDemo_strPath = 'M' + point.gwt_jelement_demo_client_SvgDemo$Point_x + ' ' + point.gwt_jelement_demo_client_SvgDemo$Point_y;
  this$static.gwt_jelement_demo_client_SvgDemo_path.setAttribute('d', this$static.gwt_jelement_demo_client_SvgDemo_strPath);
  this$static.gwt_jelement_demo_client_SvgDemo_svgElement.appendChild(this$static.gwt_jelement_demo_client_SvgDemo_path);
}

function gwt_jelement_demo_client_SvgDemo_$lambda$4__Lgwt_jelement_demo_client_SvgDemo_2Lgwt_jelement_events_Event_2V(this$static, event_0){
  if (this$static.gwt_jelement_demo_client_SvgDemo_path != null) {
    gwt_jelement_demo_client_SvgDemo_$appendToBuffer__Lgwt_jelement_demo_client_SvgDemo_2Lgwt_jelement_demo_client_SvgDemo$Point_2V(this$static, gwt_jelement_demo_client_SvgDemo_$getMousePosition__Lgwt_jelement_demo_client_SvgDemo_2Lgwt_jelement_events_MouseEvent_2Lgwt_jelement_demo_client_SvgDemo$Point_2(this$static, com_google_gwt_lang_Cast_castToNative__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(event_0, $wnd.MouseEvent)));
    gwt_jelement_demo_client_SvgDemo_$updateSvgPath__Lgwt_jelement_demo_client_SvgDemo_2V(this$static);
  }
}

function gwt_jelement_demo_client_SvgDemo_$lambda$5__Lgwt_jelement_demo_client_SvgDemo_2Ljava_util_ArrayList_2Ljava_util_ArrayList_2Lgwt_jelement_html_HTMLButtonElement_2Lgwt_jelement_html_HTMLButtonElement_2Lgwt_jelement_events_Event_2V(this$static, undoBuffer_1, redoBuffer_2, btnUndo_3, btnRedo_4){
  java_util_ArrayList_$add__Ljava_util_ArrayList_2ILjava_lang_Object_2V(undoBuffer_1, 0, this$static.gwt_jelement_demo_client_SvgDemo_path);
  redoBuffer_2.java_util_ArrayList_array = com_google_gwt_lang_Array_initUnidimensionalArray__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2IIILjava_lang_Object_2(com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Object_12_1classLit, $intern_15, 1, 0, 5, 1);
  btnUndo_3.removeAttribute($intern_26);
  btnRedo_4.setAttribute($intern_26, '');
  this$static.gwt_jelement_demo_client_SvgDemo_path = null;
}

function gwt_jelement_demo_client_SvgDemo_$lambda$6__Lgwt_jelement_demo_client_SvgDemo_2Ljava_util_ArrayList_2Ljava_util_ArrayList_2Lgwt_jelement_html_HTMLButtonElement_2Lgwt_jelement_html_HTMLButtonElement_2Lgwt_jelement_events_Event_2V(this$static, undoBuffer_1, redoBuffer_2, btnRedo_3, btnUndo_4){
  var oldPath;
  if (undoBuffer_1.java_util_ArrayList_array.length != 0) {
    oldPath = com_google_gwt_lang_Cast_castToNative__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(java_util_ArrayList_$remove__Ljava_util_ArrayList_2ILjava_lang_Object_2(undoBuffer_1, 0), $wnd.SVGPathElement);
    javaemul_internal_InternalPreconditions_checkCriticalPositionIndex__IIV(0, redoBuffer_2.java_util_ArrayList_array.length);
    javaemul_internal_ArrayHelper_insertTo__Ljava_lang_Object_2ILjava_lang_Object_2V(redoBuffer_2.java_util_ArrayList_array, 0, oldPath);
    btnRedo_3.removeAttribute($intern_26);
    this$static.gwt_jelement_demo_client_SvgDemo_svgElement.removeChild(oldPath);
    undoBuffer_1.java_util_ArrayList_array.length == 0 && btnUndo_4.setAttribute($intern_26, '');
  }
}

function gwt_jelement_demo_client_SvgDemo_$lambda$7__Lgwt_jelement_demo_client_SvgDemo_2Ljava_util_ArrayList_2Ljava_util_ArrayList_2Lgwt_jelement_html_HTMLButtonElement_2Lgwt_jelement_html_HTMLButtonElement_2Lgwt_jelement_events_Event_2V(this$static, redoBuffer_1, undoBuffer_2, btnUndo_3, btnRedo_4){
  var oldPath;
  if (redoBuffer_1.java_util_ArrayList_array.length != 0) {
    oldPath = com_google_gwt_lang_Cast_castToNative__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(java_util_ArrayList_$remove__Ljava_util_ArrayList_2ILjava_lang_Object_2(redoBuffer_1, 0), $wnd.SVGPathElement);
    javaemul_internal_InternalPreconditions_checkCriticalPositionIndex__IIV(0, undoBuffer_2.java_util_ArrayList_array.length);
    javaemul_internal_ArrayHelper_insertTo__Ljava_lang_Object_2ILjava_lang_Object_2V(undoBuffer_2.java_util_ArrayList_array, 0, oldPath);
    btnUndo_3.removeAttribute($intern_26);
    this$static.gwt_jelement_demo_client_SvgDemo_svgElement.appendChild(oldPath);
    redoBuffer_1.java_util_ArrayList_array.length == 0 && btnRedo_4.setAttribute($intern_26, '');
  }
}

function gwt_jelement_demo_client_SvgDemo_$lambda$9__Lgwt_jelement_demo_client_SvgDemo_2Lgwt_jelement_html_HTMLInputElement_2Lgwt_jelement_events_Event_2V(this$static, colorPicker_1){
  return this$static.gwt_jelement_demo_client_SvgDemo_strokeColor = colorPicker_1.value;
}

function gwt_jelement_demo_client_SvgDemo_$mapTouchEvent__Lgwt_jelement_demo_client_SvgDemo_2Lgwt_jelement_events_TouchEvent_2Ljava_lang_String_2V(event_0, type_0){
  var newEvent, touch;
  event_0.preventDefault();
  if (gwt_jelement_core_ArrayLike_$getLength__Lgwt_jelement_core_ArrayLike_2D(event_0.touches) > 1 || java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z('touchend', event_0.type) && gwt_jelement_core_ArrayLike_$getLength__Lgwt_jelement_core_ArrayLike_2D(event_0.touches) > 0)
    return;
  touch = com_google_gwt_lang_Cast_castToNative__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(gwt_jelement_core_ArrayLike_$get__Lgwt_jelement_core_ArrayLike_2DLjava_lang_Object_2(event_0.changedTouches, 0), $wnd.Touch);
  newEvent = com_google_gwt_lang_Cast_castToNative__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2($wnd.window.document.createEvent('MouseEvents'), $wnd.MouseEvent);
  newEvent.initMouseEvent(type_0, true, true, $wnd.window.window, 0, touch.screenX, touch.screenY, touch.clientX, touch.clientY, event_0.ctrlKey, event_0.altKey, event_0.shiftKey, event_0.metaKey, 0, null);
  event_0.target.dispatchEvent(newEvent);
}

function gwt_jelement_demo_client_SvgDemo_$updateSvgPath__Lgwt_jelement_demo_client_SvgDemo_2V(this$static){
  var offset, point, tmpPath;
  point = gwt_jelement_demo_client_SvgDemo_$getAveragePoint__Lgwt_jelement_demo_client_SvgDemo_2ILgwt_jelement_demo_client_SvgDemo$Point_2(this$static, 0);
  if (point) {
    this$static.gwt_jelement_demo_client_SvgDemo_strPath += ' L' + point.gwt_jelement_demo_client_SvgDemo$Point_x + ' ' + point.gwt_jelement_demo_client_SvgDemo$Point_y;
    tmpPath = new java_lang_StringBuilder_StringBuilder__V;
    for (offset = 2; offset < this$static.gwt_jelement_demo_client_SvgDemo_buffer.java_util_ArrayList_array.length; offset += 2) {
      point = gwt_jelement_demo_client_SvgDemo_$getAveragePoint__Lgwt_jelement_demo_client_SvgDemo_2ILgwt_jelement_demo_client_SvgDemo$Point_2(this$static, offset);
      !!point && java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2DLjava_lang_StringBuilder_2(java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_String_2Ljava_lang_StringBuilder_2(java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2DLjava_lang_StringBuilder_2((tmpPath.java_lang_AbstractStringBuilder_string += ' L' , tmpPath), point.gwt_jelement_demo_client_SvgDemo$Point_x), ' '), point.gwt_jelement_demo_client_SvgDemo$Point_y);
    }
    this$static.gwt_jelement_demo_client_SvgDemo_path.setAttribute('d', this$static.gwt_jelement_demo_client_SvgDemo_strPath + ('' + tmpPath.java_lang_AbstractStringBuilder_string));
  }
}

function gwt_jelement_demo_client_SvgDemo_SvgDemo__V(){
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(93, 13, $intern_22, gwt_jelement_demo_client_SvgDemo_SvgDemo__V);
_.execute__V = function gwt_jelement_demo_client_SvgDemo_execute__V(){
  var btnDownload, btnRedo, btnUndo, colorPicker, redoBuffer, toolbar_0, undoBuffer;
  this.gwt_jelement_demo_client_SvgDemo_svgElement = $wnd.window.document.getElementById('svgElement');
  btnUndo = com_google_gwt_lang_Cast_castToNative__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2($wnd.window.document.getElementById('btnUndo'), $wnd.HTMLButtonElement);
  btnRedo = com_google_gwt_lang_Cast_castToNative__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2($wnd.window.document.getElementById('btnRedo'), $wnd.HTMLButtonElement);
  btnDownload = com_google_gwt_lang_Cast_castToNative__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2($wnd.window.document.getElementById('btnDownload'), $wnd.HTMLButtonElement);
  colorPicker = com_google_gwt_lang_Cast_castToNative__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2($wnd.window.document.getElementById('colorPicker'), $wnd.HTMLInputElement);
  if (java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z('Microsoft Internet Explorer', $wnd.window.navigator.appName) || java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z('Netscape', $wnd.window.navigator.appName) && $wnd.window.navigator.userAgent.indexOf('Trident/') != -1) {
    toolbar_0 = com_google_gwt_lang_Cast_castToNative__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2($wnd.window.document.getElementById('toolbar'), $wnd.HTMLDivElement);
    toolbar_0.removeChild(btnDownload);
    toolbar_0.removeChild(colorPicker);
  }
  this.gwt_jelement_demo_client_SvgDemo_strokeColor = colorPicker.value;
  undoBuffer = new java_util_ArrayList_ArrayList__V;
  redoBuffer = new java_util_ArrayList_ArrayList__V;
  this.gwt_jelement_demo_client_SvgDemo_svgElement.addEventListener('touchstart', com_google_gwt_lang_Runtime_makeLambdaFunction__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(gwt_jelement_demo_client_SvgDemo$lambda$0$Type_SvgDemo$lambda$0$Type__Lgwt_jelement_demo_client_SvgDemo_2V.prototype.handleEvent__Lgwt_jelement_events_Event_2V, gwt_jelement_demo_client_SvgDemo$lambda$0$Type_SvgDemo$lambda$0$Type__Lgwt_jelement_demo_client_SvgDemo_2V, []));
  this.gwt_jelement_demo_client_SvgDemo_svgElement.addEventListener('touchmove', com_google_gwt_lang_Runtime_makeLambdaFunction__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(gwt_jelement_demo_client_SvgDemo$lambda$1$Type_SvgDemo$lambda$1$Type__Lgwt_jelement_demo_client_SvgDemo_2V.prototype.handleEvent__Lgwt_jelement_events_Event_2V, gwt_jelement_demo_client_SvgDemo$lambda$1$Type_SvgDemo$lambda$1$Type__Lgwt_jelement_demo_client_SvgDemo_2V, []));
  this.gwt_jelement_demo_client_SvgDemo_svgElement.addEventListener('touchend', com_google_gwt_lang_Runtime_makeLambdaFunction__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(gwt_jelement_demo_client_SvgDemo$lambda$2$Type_SvgDemo$lambda$2$Type__Lgwt_jelement_demo_client_SvgDemo_2V.prototype.handleEvent__Lgwt_jelement_events_Event_2V, gwt_jelement_demo_client_SvgDemo$lambda$2$Type_SvgDemo$lambda$2$Type__Lgwt_jelement_demo_client_SvgDemo_2V, []));
  this.gwt_jelement_demo_client_SvgDemo_svgElement.addEventListener('mousedown', com_google_gwt_lang_Runtime_makeLambdaFunction__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(gwt_jelement_demo_client_SvgDemo$lambda$3$Type_SvgDemo$lambda$3$Type__Lgwt_jelement_demo_client_SvgDemo_2V.prototype.handleEvent__Lgwt_jelement_events_Event_2V, gwt_jelement_demo_client_SvgDemo$lambda$3$Type_SvgDemo$lambda$3$Type__Lgwt_jelement_demo_client_SvgDemo_2V, [this]));
  this.gwt_jelement_demo_client_SvgDemo_svgElement.addEventListener('mousemove', com_google_gwt_lang_Runtime_makeLambdaFunction__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(gwt_jelement_demo_client_SvgDemo$lambda$4$Type_SvgDemo$lambda$4$Type__Lgwt_jelement_demo_client_SvgDemo_2V.prototype.handleEvent__Lgwt_jelement_events_Event_2V, gwt_jelement_demo_client_SvgDemo$lambda$4$Type_SvgDemo$lambda$4$Type__Lgwt_jelement_demo_client_SvgDemo_2V, [this]));
  this.gwt_jelement_demo_client_SvgDemo_svgElement.addEventListener('mouseup', com_google_gwt_lang_Runtime_makeLambdaFunction__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(gwt_jelement_demo_client_SvgDemo$lambda$5$Type_SvgDemo$lambda$5$Type__Lgwt_jelement_demo_client_SvgDemo_2Ljava_util_ArrayList_2Ljava_util_ArrayList_2Lgwt_jelement_html_HTMLButtonElement_2Lgwt_jelement_html_HTMLButtonElement_2V.prototype.handleEvent__Lgwt_jelement_events_Event_2V, gwt_jelement_demo_client_SvgDemo$lambda$5$Type_SvgDemo$lambda$5$Type__Lgwt_jelement_demo_client_SvgDemo_2Ljava_util_ArrayList_2Ljava_util_ArrayList_2Lgwt_jelement_html_HTMLButtonElement_2Lgwt_jelement_html_HTMLButtonElement_2V, [this, undoBuffer, redoBuffer, btnUndo, btnRedo]));
  btnUndo.addEventListener($intern_25, com_google_gwt_lang_Runtime_makeLambdaFunction__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(gwt_jelement_demo_client_SvgDemo$lambda$6$Type_SvgDemo$lambda$6$Type__Lgwt_jelement_demo_client_SvgDemo_2Ljava_util_ArrayList_2Ljava_util_ArrayList_2Lgwt_jelement_html_HTMLButtonElement_2Lgwt_jelement_html_HTMLButtonElement_2V.prototype.handleEvent__Lgwt_jelement_events_Event_2V, gwt_jelement_demo_client_SvgDemo$lambda$6$Type_SvgDemo$lambda$6$Type__Lgwt_jelement_demo_client_SvgDemo_2Ljava_util_ArrayList_2Ljava_util_ArrayList_2Lgwt_jelement_html_HTMLButtonElement_2Lgwt_jelement_html_HTMLButtonElement_2V, [this, undoBuffer, redoBuffer, btnRedo, btnUndo]));
  btnRedo.addEventListener($intern_25, com_google_gwt_lang_Runtime_makeLambdaFunction__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(gwt_jelement_demo_client_SvgDemo$lambda$7$Type_SvgDemo$lambda$7$Type__Lgwt_jelement_demo_client_SvgDemo_2Ljava_util_ArrayList_2Ljava_util_ArrayList_2Lgwt_jelement_html_HTMLButtonElement_2Lgwt_jelement_html_HTMLButtonElement_2V.prototype.handleEvent__Lgwt_jelement_events_Event_2V, gwt_jelement_demo_client_SvgDemo$lambda$7$Type_SvgDemo$lambda$7$Type__Lgwt_jelement_demo_client_SvgDemo_2Ljava_util_ArrayList_2Ljava_util_ArrayList_2Lgwt_jelement_html_HTMLButtonElement_2Lgwt_jelement_html_HTMLButtonElement_2V, [this, redoBuffer, undoBuffer, btnUndo, btnRedo]));
  btnDownload.addEventListener($intern_25, com_google_gwt_lang_Runtime_makeLambdaFunction__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(gwt_jelement_demo_client_SvgDemo$lambda$8$Type_SvgDemo$lambda$8$Type__Lgwt_jelement_demo_client_SvgDemo_2V.prototype.handleEvent__Lgwt_jelement_events_Event_2V, gwt_jelement_demo_client_SvgDemo$lambda$8$Type_SvgDemo$lambda$8$Type__Lgwt_jelement_demo_client_SvgDemo_2V, [this]));
  colorPicker.addEventListener('change', com_google_gwt_lang_Runtime_makeLambdaFunction__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(gwt_jelement_demo_client_SvgDemo$lambda$9$Type_SvgDemo$lambda$9$Type__Lgwt_jelement_demo_client_SvgDemo_2Lgwt_jelement_html_HTMLInputElement_2V.prototype.handleEvent__Lgwt_jelement_events_Event_2V, gwt_jelement_demo_client_SvgDemo$lambda$9$Type_SvgDemo$lambda$9$Type__Lgwt_jelement_demo_client_SvgDemo_2Lgwt_jelement_html_HTMLInputElement_2V, [this, colorPicker]));
}
;
_.getName__Ljava_lang_String_2 = function gwt_jelement_demo_client_SvgDemo_getName__Ljava_lang_String_2(){
  return 'svg';
}
;
_.getSource__Lcom_google_gwt_resources_client_TextResource_2 = function gwt_jelement_demo_client_SvgDemo_getSource__Lcom_google_gwt_resources_client_TextResource_2(){
  return gwt_jelement_demo_client_SourceClientBundle_1default_1InlineClientBundleGenerator$getSvgSourceInitializer_$clinit__V() , gwt_jelement_demo_client_SourceClientBundle_1default_1InlineClientBundleGenerator_getSvgSource;
}
;
_.getTemplate__Lcom_google_gwt_resources_client_TextResource_2 = function gwt_jelement_demo_client_SvgDemo_getTemplate__Lcom_google_gwt_resources_client_TextResource_2(){
  return gwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator$getSvgHtmlInitializer_$clinit__V() , gwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator_getSvgHtml;
}
;
_.getTitle__Ljava_lang_String_2 = function gwt_jelement_demo_client_SvgDemo_getTitle__Ljava_lang_String_2(){
  return 'SVG Demo';
}
;
_.gwt_jelement_demo_client_SvgDemo_path = null;
var com_google_gwt_lang_ClassLiteralHolder_Lgwt_1jelement_1demo_1client_1SvgDemo_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_23, 'SvgDemo', 93);
function gwt_jelement_demo_client_SvgDemo$Point_SvgDemo$Point__Lgwt_jelement_demo_client_SvgDemo_2DDV(x_0, y_0){
  this.gwt_jelement_demo_client_SvgDemo$Point_x = x_0;
  this.gwt_jelement_demo_client_SvgDemo$Point_y = y_0;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(38, 1, {38:1}, gwt_jelement_demo_client_SvgDemo$Point_SvgDemo$Point__Lgwt_jelement_demo_client_SvgDemo_2DDV);
_.gwt_jelement_demo_client_SvgDemo$Point_x = 0;
_.gwt_jelement_demo_client_SvgDemo$Point_y = 0;
var com_google_gwt_lang_ClassLiteralHolder_Lgwt_1jelement_1demo_1client_1SvgDemo$Point_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_23, 'SvgDemo/Point', 38);
function gwt_jelement_demo_client_SvgDemo$lambda$0$Type_SvgDemo$lambda$0$Type__Lgwt_jelement_demo_client_SvgDemo_2V(){
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(242, $wnd.Function, {}, gwt_jelement_demo_client_SvgDemo$lambda$0$Type_SvgDemo$lambda$0$Type__Lgwt_jelement_demo_client_SvgDemo_2V);
_.handleEvent__Lgwt_jelement_events_Event_2V = function gwt_jelement_demo_client_SvgDemo$lambda$0$Type_handleEvent__Lgwt_jelement_events_Event_2V(arg0){
  gwt_jelement_demo_client_SvgDemo_$mapTouchEvent__Lgwt_jelement_demo_client_SvgDemo_2Lgwt_jelement_events_TouchEvent_2Ljava_lang_String_2V(com_google_gwt_lang_Cast_castToNative__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(arg0, $wnd.TouchEvent), 'mousedown');
}
;
function gwt_jelement_demo_client_SvgDemo$lambda$1$Type_SvgDemo$lambda$1$Type__Lgwt_jelement_demo_client_SvgDemo_2V(){
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(243, $wnd.Function, {}, gwt_jelement_demo_client_SvgDemo$lambda$1$Type_SvgDemo$lambda$1$Type__Lgwt_jelement_demo_client_SvgDemo_2V);
_.handleEvent__Lgwt_jelement_events_Event_2V = function gwt_jelement_demo_client_SvgDemo$lambda$1$Type_handleEvent__Lgwt_jelement_events_Event_2V(arg0){
  gwt_jelement_demo_client_SvgDemo_$mapTouchEvent__Lgwt_jelement_demo_client_SvgDemo_2Lgwt_jelement_events_TouchEvent_2Ljava_lang_String_2V(com_google_gwt_lang_Cast_castToNative__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(arg0, $wnd.TouchEvent), 'mousemove');
}
;
function gwt_jelement_demo_client_SvgDemo$lambda$2$Type_SvgDemo$lambda$2$Type__Lgwt_jelement_demo_client_SvgDemo_2V(){
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(244, $wnd.Function, {}, gwt_jelement_demo_client_SvgDemo$lambda$2$Type_SvgDemo$lambda$2$Type__Lgwt_jelement_demo_client_SvgDemo_2V);
_.handleEvent__Lgwt_jelement_events_Event_2V = function gwt_jelement_demo_client_SvgDemo$lambda$2$Type_handleEvent__Lgwt_jelement_events_Event_2V(arg0){
  gwt_jelement_demo_client_SvgDemo_$mapTouchEvent__Lgwt_jelement_demo_client_SvgDemo_2Lgwt_jelement_events_TouchEvent_2Ljava_lang_String_2V(com_google_gwt_lang_Cast_castToNative__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(arg0, $wnd.TouchEvent), 'mouseup');
}
;
function gwt_jelement_demo_client_SvgDemo$lambda$3$Type_SvgDemo$lambda$3$Type__Lgwt_jelement_demo_client_SvgDemo_2V($$outer_0){
  this.gwt_jelement_demo_client_SvgDemo$lambda$3$Type_$$outer_10 = $$outer_0;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(245, $wnd.Function, {}, gwt_jelement_demo_client_SvgDemo$lambda$3$Type_SvgDemo$lambda$3$Type__Lgwt_jelement_demo_client_SvgDemo_2V);
_.handleEvent__Lgwt_jelement_events_Event_2V = function gwt_jelement_demo_client_SvgDemo$lambda$3$Type_handleEvent__Lgwt_jelement_events_Event_2V(arg0){
  gwt_jelement_demo_client_SvgDemo_$lambda$3__Lgwt_jelement_demo_client_SvgDemo_2Lgwt_jelement_events_Event_2V(this.gwt_jelement_demo_client_SvgDemo$lambda$3$Type_$$outer_10, arg0);
}
;
function gwt_jelement_demo_client_SvgDemo$lambda$4$Type_SvgDemo$lambda$4$Type__Lgwt_jelement_demo_client_SvgDemo_2V($$outer_0){
  this.gwt_jelement_demo_client_SvgDemo$lambda$4$Type_$$outer_10 = $$outer_0;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(246, $wnd.Function, {}, gwt_jelement_demo_client_SvgDemo$lambda$4$Type_SvgDemo$lambda$4$Type__Lgwt_jelement_demo_client_SvgDemo_2V);
_.handleEvent__Lgwt_jelement_events_Event_2V = function gwt_jelement_demo_client_SvgDemo$lambda$4$Type_handleEvent__Lgwt_jelement_events_Event_2V(arg0){
  gwt_jelement_demo_client_SvgDemo_$lambda$4__Lgwt_jelement_demo_client_SvgDemo_2Lgwt_jelement_events_Event_2V(this.gwt_jelement_demo_client_SvgDemo$lambda$4$Type_$$outer_10, arg0);
}
;
function gwt_jelement_demo_client_SvgDemo$lambda$5$Type_SvgDemo$lambda$5$Type__Lgwt_jelement_demo_client_SvgDemo_2Ljava_util_ArrayList_2Ljava_util_ArrayList_2Lgwt_jelement_html_HTMLButtonElement_2Lgwt_jelement_html_HTMLButtonElement_2V($$outer_0, undoBuffer_1, redoBuffer_2, btnUndo_3, btnRedo_4){
  this.gwt_jelement_demo_client_SvgDemo$lambda$5$Type_$$outer_10 = $$outer_0;
  this.gwt_jelement_demo_client_SvgDemo$lambda$5$Type_undoBuffer_11 = undoBuffer_1;
  this.gwt_jelement_demo_client_SvgDemo$lambda$5$Type_redoBuffer_12 = redoBuffer_2;
  this.gwt_jelement_demo_client_SvgDemo$lambda$5$Type_btnUndo_13 = btnUndo_3;
  this.gwt_jelement_demo_client_SvgDemo$lambda$5$Type_btnRedo_14 = btnRedo_4;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(247, $wnd.Function, {}, gwt_jelement_demo_client_SvgDemo$lambda$5$Type_SvgDemo$lambda$5$Type__Lgwt_jelement_demo_client_SvgDemo_2Ljava_util_ArrayList_2Ljava_util_ArrayList_2Lgwt_jelement_html_HTMLButtonElement_2Lgwt_jelement_html_HTMLButtonElement_2V);
_.handleEvent__Lgwt_jelement_events_Event_2V = function gwt_jelement_demo_client_SvgDemo$lambda$5$Type_handleEvent__Lgwt_jelement_events_Event_2V(arg0){
  gwt_jelement_demo_client_SvgDemo_$lambda$5__Lgwt_jelement_demo_client_SvgDemo_2Ljava_util_ArrayList_2Ljava_util_ArrayList_2Lgwt_jelement_html_HTMLButtonElement_2Lgwt_jelement_html_HTMLButtonElement_2Lgwt_jelement_events_Event_2V(this.gwt_jelement_demo_client_SvgDemo$lambda$5$Type_$$outer_10, this.gwt_jelement_demo_client_SvgDemo$lambda$5$Type_undoBuffer_11, this.gwt_jelement_demo_client_SvgDemo$lambda$5$Type_redoBuffer_12, this.gwt_jelement_demo_client_SvgDemo$lambda$5$Type_btnUndo_13, this.gwt_jelement_demo_client_SvgDemo$lambda$5$Type_btnRedo_14);
}
;
function gwt_jelement_demo_client_SvgDemo$lambda$6$Type_SvgDemo$lambda$6$Type__Lgwt_jelement_demo_client_SvgDemo_2Ljava_util_ArrayList_2Ljava_util_ArrayList_2Lgwt_jelement_html_HTMLButtonElement_2Lgwt_jelement_html_HTMLButtonElement_2V($$outer_0, undoBuffer_1, redoBuffer_2, btnRedo_3, btnUndo_4){
  this.gwt_jelement_demo_client_SvgDemo$lambda$6$Type_$$outer_10 = $$outer_0;
  this.gwt_jelement_demo_client_SvgDemo$lambda$6$Type_undoBuffer_11 = undoBuffer_1;
  this.gwt_jelement_demo_client_SvgDemo$lambda$6$Type_redoBuffer_12 = redoBuffer_2;
  this.gwt_jelement_demo_client_SvgDemo$lambda$6$Type_btnRedo_13 = btnRedo_3;
  this.gwt_jelement_demo_client_SvgDemo$lambda$6$Type_btnUndo_14 = btnUndo_4;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(248, $wnd.Function, {}, gwt_jelement_demo_client_SvgDemo$lambda$6$Type_SvgDemo$lambda$6$Type__Lgwt_jelement_demo_client_SvgDemo_2Ljava_util_ArrayList_2Ljava_util_ArrayList_2Lgwt_jelement_html_HTMLButtonElement_2Lgwt_jelement_html_HTMLButtonElement_2V);
_.handleEvent__Lgwt_jelement_events_Event_2V = function gwt_jelement_demo_client_SvgDemo$lambda$6$Type_handleEvent__Lgwt_jelement_events_Event_2V(arg0){
  gwt_jelement_demo_client_SvgDemo_$lambda$6__Lgwt_jelement_demo_client_SvgDemo_2Ljava_util_ArrayList_2Ljava_util_ArrayList_2Lgwt_jelement_html_HTMLButtonElement_2Lgwt_jelement_html_HTMLButtonElement_2Lgwt_jelement_events_Event_2V(this.gwt_jelement_demo_client_SvgDemo$lambda$6$Type_$$outer_10, this.gwt_jelement_demo_client_SvgDemo$lambda$6$Type_undoBuffer_11, this.gwt_jelement_demo_client_SvgDemo$lambda$6$Type_redoBuffer_12, this.gwt_jelement_demo_client_SvgDemo$lambda$6$Type_btnRedo_13, this.gwt_jelement_demo_client_SvgDemo$lambda$6$Type_btnUndo_14);
}
;
function gwt_jelement_demo_client_SvgDemo$lambda$7$Type_SvgDemo$lambda$7$Type__Lgwt_jelement_demo_client_SvgDemo_2Ljava_util_ArrayList_2Ljava_util_ArrayList_2Lgwt_jelement_html_HTMLButtonElement_2Lgwt_jelement_html_HTMLButtonElement_2V($$outer_0, redoBuffer_1, undoBuffer_2, btnUndo_3, btnRedo_4){
  this.gwt_jelement_demo_client_SvgDemo$lambda$7$Type_$$outer_10 = $$outer_0;
  this.gwt_jelement_demo_client_SvgDemo$lambda$7$Type_redoBuffer_11 = redoBuffer_1;
  this.gwt_jelement_demo_client_SvgDemo$lambda$7$Type_undoBuffer_12 = undoBuffer_2;
  this.gwt_jelement_demo_client_SvgDemo$lambda$7$Type_btnUndo_13 = btnUndo_3;
  this.gwt_jelement_demo_client_SvgDemo$lambda$7$Type_btnRedo_14 = btnRedo_4;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(249, $wnd.Function, {}, gwt_jelement_demo_client_SvgDemo$lambda$7$Type_SvgDemo$lambda$7$Type__Lgwt_jelement_demo_client_SvgDemo_2Ljava_util_ArrayList_2Ljava_util_ArrayList_2Lgwt_jelement_html_HTMLButtonElement_2Lgwt_jelement_html_HTMLButtonElement_2V);
_.handleEvent__Lgwt_jelement_events_Event_2V = function gwt_jelement_demo_client_SvgDemo$lambda$7$Type_handleEvent__Lgwt_jelement_events_Event_2V(arg0){
  gwt_jelement_demo_client_SvgDemo_$lambda$7__Lgwt_jelement_demo_client_SvgDemo_2Ljava_util_ArrayList_2Ljava_util_ArrayList_2Lgwt_jelement_html_HTMLButtonElement_2Lgwt_jelement_html_HTMLButtonElement_2Lgwt_jelement_events_Event_2V(this.gwt_jelement_demo_client_SvgDemo$lambda$7$Type_$$outer_10, this.gwt_jelement_demo_client_SvgDemo$lambda$7$Type_redoBuffer_11, this.gwt_jelement_demo_client_SvgDemo$lambda$7$Type_undoBuffer_12, this.gwt_jelement_demo_client_SvgDemo$lambda$7$Type_btnUndo_13, this.gwt_jelement_demo_client_SvgDemo$lambda$7$Type_btnRedo_14);
}
;
function gwt_jelement_demo_client_SvgDemo$lambda$8$Type_SvgDemo$lambda$8$Type__Lgwt_jelement_demo_client_SvgDemo_2V($$outer_0){
  this.gwt_jelement_demo_client_SvgDemo$lambda$8$Type_$$outer_10 = $$outer_0;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(250, $wnd.Function, {}, gwt_jelement_demo_client_SvgDemo$lambda$8$Type_SvgDemo$lambda$8$Type__Lgwt_jelement_demo_client_SvgDemo_2V);
_.handleEvent__Lgwt_jelement_events_Event_2V = function gwt_jelement_demo_client_SvgDemo$lambda$8$Type_handleEvent__Lgwt_jelement_events_Event_2V(arg0){
  var gwt_jelement_demo_client_SvgDemo_$lambda$8__Lgwt_jelement_demo_client_SvgDemo_2Lgwt_jelement_events_Event_2V_svgData_0, gwt_jelement_demo_client_SvgDemo_$lambda$8__Lgwt_jelement_demo_client_SvgDemo_2Lgwt_jelement_events_Event_2V_blobProperties_0, gwt_jelement_demo_client_SvgDemo_$lambda$8__Lgwt_jelement_demo_client_SvgDemo_2Lgwt_jelement_events_Event_2V_svgBlob_0, gwt_jelement_demo_client_SvgDemo_$lambda$8__Lgwt_jelement_demo_client_SvgDemo_2Lgwt_jelement_events_Event_2V_svgUrl_0, gwt_jelement_demo_client_SvgDemo_$lambda$8__Lgwt_jelement_demo_client_SvgDemo_2Lgwt_jelement_events_Event_2V_downloadLink_0;
  gwt_jelement_demo_client_SvgDemo_$lambda$8__Lgwt_jelement_demo_client_SvgDemo_2Lgwt_jelement_events_Event_2V_svgData_0 = this.gwt_jelement_demo_client_SvgDemo$lambda$8$Type_$$outer_10.gwt_jelement_demo_client_SvgDemo_svgElement.outerHTML;
  gwt_jelement_demo_client_SvgDemo_$lambda$8__Lgwt_jelement_demo_client_SvgDemo_2Lgwt_jelement_events_Event_2V_blobProperties_0 = new $wnd.Object;
  gwt_jelement_demo_client_SvgDemo_$lambda$8__Lgwt_jelement_demo_client_SvgDemo_2Lgwt_jelement_events_Event_2V_blobProperties_0.type = 'image/svg+xml;charset=utf-8';
  gwt_jelement_demo_client_SvgDemo_$lambda$8__Lgwt_jelement_demo_client_SvgDemo_2Lgwt_jelement_events_Event_2V_svgBlob_0 = new $wnd.Blob(new $wnd.Array(gwt_jelement_demo_client_SvgDemo_$lambda$8__Lgwt_jelement_demo_client_SvgDemo_2Lgwt_jelement_events_Event_2V_svgData_0), gwt_jelement_demo_client_SvgDemo_$lambda$8__Lgwt_jelement_demo_client_SvgDemo_2Lgwt_jelement_events_Event_2V_blobProperties_0);
  gwt_jelement_demo_client_SvgDemo_$lambda$8__Lgwt_jelement_demo_client_SvgDemo_2Lgwt_jelement_events_Event_2V_svgUrl_0 = $wnd.URL.createObjectURL(gwt_jelement_demo_client_SvgDemo_$lambda$8__Lgwt_jelement_demo_client_SvgDemo_2Lgwt_jelement_events_Event_2V_svgBlob_0);
  gwt_jelement_demo_client_SvgDemo_$lambda$8__Lgwt_jelement_demo_client_SvgDemo_2Lgwt_jelement_events_Event_2V_downloadLink_0 = com_google_gwt_lang_Cast_castToNative__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2($wnd.window.document.createElement('a'), $wnd.HTMLAnchorElement);
  gwt_jelement_demo_client_SvgDemo_$lambda$8__Lgwt_jelement_demo_client_SvgDemo_2Lgwt_jelement_events_Event_2V_downloadLink_0.href = gwt_jelement_demo_client_SvgDemo_$lambda$8__Lgwt_jelement_demo_client_SvgDemo_2Lgwt_jelement_events_Event_2V_svgUrl_0;
  gwt_jelement_demo_client_SvgDemo_$lambda$8__Lgwt_jelement_demo_client_SvgDemo_2Lgwt_jelement_events_Event_2V_downloadLink_0.download = 'my_drawing.svg';
  $wnd.window.document.body.appendChild(gwt_jelement_demo_client_SvgDemo_$lambda$8__Lgwt_jelement_demo_client_SvgDemo_2Lgwt_jelement_events_Event_2V_downloadLink_0);
  gwt_jelement_demo_client_SvgDemo_$lambda$8__Lgwt_jelement_demo_client_SvgDemo_2Lgwt_jelement_events_Event_2V_downloadLink_0.click();
  $wnd.window.document.body.removeChild(gwt_jelement_demo_client_SvgDemo_$lambda$8__Lgwt_jelement_demo_client_SvgDemo_2Lgwt_jelement_events_Event_2V_downloadLink_0);
}
;
function gwt_jelement_demo_client_SvgDemo$lambda$9$Type_SvgDemo$lambda$9$Type__Lgwt_jelement_demo_client_SvgDemo_2Lgwt_jelement_html_HTMLInputElement_2V($$outer_0, colorPicker_1){
  this.gwt_jelement_demo_client_SvgDemo$lambda$9$Type_$$outer_10 = $$outer_0;
  this.gwt_jelement_demo_client_SvgDemo$lambda$9$Type_colorPicker_11 = colorPicker_1;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(251, $wnd.Function, {}, gwt_jelement_demo_client_SvgDemo$lambda$9$Type_SvgDemo$lambda$9$Type__Lgwt_jelement_demo_client_SvgDemo_2Lgwt_jelement_html_HTMLInputElement_2V);
_.handleEvent__Lgwt_jelement_events_Event_2V = function gwt_jelement_demo_client_SvgDemo$lambda$9$Type_handleEvent__Lgwt_jelement_events_Event_2V(arg0){
  gwt_jelement_demo_client_SvgDemo_$lambda$9__Lgwt_jelement_demo_client_SvgDemo_2Lgwt_jelement_html_HTMLInputElement_2Lgwt_jelement_events_Event_2V(this.gwt_jelement_demo_client_SvgDemo$lambda$9$Type_$$outer_10, this.gwt_jelement_demo_client_SvgDemo$lambda$9$Type_colorPicker_11);
}
;
function gwt_jelement_demo_client_WebAudioDemo_$lambda$0__Lgwt_jelement_demo_client_WebAudioDemo_2Lgwt_jelement_events_Event_2V(this$static){
  this$static.gwt_jelement_demo_client_WebAudioDemo_audioContext = new $wnd.AudioContext;
  this$static.gwt_jelement_demo_client_WebAudioDemo_osc = this$static.gwt_jelement_demo_client_WebAudioDemo_audioContext.createOscillator();
  gwt_jelement_webaudio_OscillatorNode_$setType__Lgwt_jelement_webaudio_OscillatorNode_2Lgwt_jelement_webaudio_OscillatorType_2V(this$static.gwt_jelement_demo_client_WebAudioDemo_osc, (gwt_jelement_webaudio_OscillatorType_$clinit__V() , gwt_jelement_webaudio_OscillatorType_SQUARE));
  this$static.gwt_jelement_demo_client_WebAudioDemo_osc.connect(this$static.gwt_jelement_demo_client_WebAudioDemo_audioContext.destination, 0);
  this$static.gwt_jelement_demo_client_WebAudioDemo_osc.frequency.value = 550;
  this$static.gwt_jelement_demo_client_WebAudioDemo_gain = this$static.gwt_jelement_demo_client_WebAudioDemo_audioContext.createGain();
  this$static.gwt_jelement_demo_client_WebAudioDemo_gain.gain.value = 100;
  this$static.gwt_jelement_demo_client_WebAudioDemo_gain.connect(this$static.gwt_jelement_demo_client_WebAudioDemo_osc.frequency);
  this$static.gwt_jelement_demo_client_WebAudioDemo_osc2 = this$static.gwt_jelement_demo_client_WebAudioDemo_audioContext.createOscillator();
  this$static.gwt_jelement_demo_client_WebAudioDemo_osc2.frequency.value = 1.25;
  gwt_jelement_webaudio_OscillatorNode_$setType__Lgwt_jelement_webaudio_OscillatorNode_2Lgwt_jelement_webaudio_OscillatorType_2V(this$static.gwt_jelement_demo_client_WebAudioDemo_osc2, gwt_jelement_webaudio_OscillatorType_TRIANGLE);
  this$static.gwt_jelement_demo_client_WebAudioDemo_osc2.connect(this$static.gwt_jelement_demo_client_WebAudioDemo_gain);
  this$static.gwt_jelement_demo_client_WebAudioDemo_osc.start();
  this$static.gwt_jelement_demo_client_WebAudioDemo_osc2.start();
  gwt_jelement_demo_client_BootstrapButton_$setDisabled__Lgwt_jelement_demo_client_BootstrapButton_2ZV(this$static.gwt_jelement_demo_client_WebAudioDemo_btnSoundOn, true);
  gwt_jelement_demo_client_BootstrapButton_$setDisabled__Lgwt_jelement_demo_client_BootstrapButton_2ZV(this$static.gwt_jelement_demo_client_WebAudioDemo_btnSoundOff, false);
  this$static.gwt_jelement_demo_client_WebAudioDemo_playing = true;
}

function gwt_jelement_demo_client_WebAudioDemo_$stopPlaying__Lgwt_jelement_demo_client_WebAudioDemo_2V(this$static){
  this$static.gwt_jelement_demo_client_WebAudioDemo_osc.stop(this$static.gwt_jelement_demo_client_WebAudioDemo_audioContext.currentTime + 1);
  this$static.gwt_jelement_demo_client_WebAudioDemo_osc2.stop();
  this$static.gwt_jelement_demo_client_WebAudioDemo_osc.disconnect();
  this$static.gwt_jelement_demo_client_WebAudioDemo_osc2.disconnect();
  this$static.gwt_jelement_demo_client_WebAudioDemo_gain.disconnect();
  gwt_jelement_webaudio_AudioContextState_of__Ljava_lang_String_2Lgwt_jelement_webaudio_AudioContextState_2(this$static.gwt_jelement_demo_client_WebAudioDemo_audioContext.state) != (gwt_jelement_webaudio_AudioContextState_$clinit__V() , gwt_jelement_webaudio_AudioContextState_CLOSED) && this$static.gwt_jelement_demo_client_WebAudioDemo_audioContext.close();
  gwt_jelement_demo_client_BootstrapButton_$setDisabled__Lgwt_jelement_demo_client_BootstrapButton_2ZV(this$static.gwt_jelement_demo_client_WebAudioDemo_btnSoundOff, true);
  gwt_jelement_demo_client_BootstrapButton_$setDisabled__Lgwt_jelement_demo_client_BootstrapButton_2ZV(this$static.gwt_jelement_demo_client_WebAudioDemo_btnSoundOn, false);
  this$static.gwt_jelement_demo_client_WebAudioDemo_playing = false;
}

function gwt_jelement_demo_client_WebAudioDemo_WebAudioDemo__V(){
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(94, 13, $intern_22, gwt_jelement_demo_client_WebAudioDemo_WebAudioDemo__V);
_.execute__V = function gwt_jelement_demo_client_WebAudioDemo_execute__V(){
  this.gwt_jelement_demo_client_WebAudioDemo_btnSoundOn = new gwt_jelement_demo_client_BootstrapButton_BootstrapButton__Ljava_lang_String_2Lgwt_jelement_demo_client_BootstrapButton$ButtonStyle_2Ljava_lang_String_2V('Play', (gwt_jelement_demo_client_BootstrapButton$ButtonStyle_$clinit__V() , gwt_jelement_demo_client_BootstrapButton$ButtonStyle_SUCCESS), 'play');
  gwt_jelement_demo_client_BootstrapButton_$appendTo__Lgwt_jelement_demo_client_BootstrapButton_2Lgwt_jelement_dom_Element_2V(this.gwt_jelement_demo_client_WebAudioDemo_btnSoundOn, $wnd.window.document.getElementById('audio-on'));
  this.gwt_jelement_demo_client_WebAudioDemo_btnSoundOff = new gwt_jelement_demo_client_BootstrapButton_BootstrapButton__Ljava_lang_String_2Lgwt_jelement_demo_client_BootstrapButton$ButtonStyle_2Ljava_lang_String_2V('Stop', gwt_jelement_demo_client_BootstrapButton$ButtonStyle_DANGER, 'stop');
  gwt_jelement_demo_client_BootstrapButton_$setDisabled__Lgwt_jelement_demo_client_BootstrapButton_2ZV(this.gwt_jelement_demo_client_WebAudioDemo_btnSoundOff, true);
  gwt_jelement_demo_client_BootstrapButton_$appendTo__Lgwt_jelement_demo_client_BootstrapButton_2Lgwt_jelement_dom_Element_2V(this.gwt_jelement_demo_client_WebAudioDemo_btnSoundOff, $wnd.window.document.getElementById('audio-off'));
  gwt_jelement_demo_client_BootstrapButton_$addClickListener__Lgwt_jelement_demo_client_BootstrapButton_2Lgwt_jelement_events_EventListener_2V(this.gwt_jelement_demo_client_WebAudioDemo_btnSoundOn, com_google_gwt_lang_Runtime_makeLambdaFunction__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(gwt_jelement_demo_client_WebAudioDemo$lambda$0$Type_WebAudioDemo$lambda$0$Type__Lgwt_jelement_demo_client_WebAudioDemo_2V.prototype.handleEvent__Lgwt_jelement_events_Event_2V, gwt_jelement_demo_client_WebAudioDemo$lambda$0$Type_WebAudioDemo$lambda$0$Type__Lgwt_jelement_demo_client_WebAudioDemo_2V, [this]));
  gwt_jelement_demo_client_BootstrapButton_$addClickListener__Lgwt_jelement_demo_client_BootstrapButton_2Lgwt_jelement_events_EventListener_2V(this.gwt_jelement_demo_client_WebAudioDemo_btnSoundOff, com_google_gwt_lang_Runtime_makeLambdaFunction__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(gwt_jelement_demo_client_WebAudioDemo$lambda$1$Type_WebAudioDemo$lambda$1$Type__Lgwt_jelement_demo_client_WebAudioDemo_2V.prototype.handleEvent__Lgwt_jelement_events_Event_2V, gwt_jelement_demo_client_WebAudioDemo$lambda$1$Type_WebAudioDemo$lambda$1$Type__Lgwt_jelement_demo_client_WebAudioDemo_2V, [this]));
}
;
_.getName__Ljava_lang_String_2 = function gwt_jelement_demo_client_WebAudioDemo_getName__Ljava_lang_String_2(){
  return 'webaudio';
}
;
_.getSource__Lcom_google_gwt_resources_client_TextResource_2 = function gwt_jelement_demo_client_WebAudioDemo_getSource__Lcom_google_gwt_resources_client_TextResource_2(){
  return gwt_jelement_demo_client_SourceClientBundle_1default_1InlineClientBundleGenerator$getWebAudioDemoSourceInitializer_$clinit__V() , gwt_jelement_demo_client_SourceClientBundle_1default_1InlineClientBundleGenerator_getWebAudioDemoSource;
}
;
_.getTemplate__Lcom_google_gwt_resources_client_TextResource_2 = function gwt_jelement_demo_client_WebAudioDemo_getTemplate__Lcom_google_gwt_resources_client_TextResource_2(){
  return gwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator$getWebAudioHtmlInitializer_$clinit__V() , gwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator_getWebAudioHtml;
}
;
_.getTitle__Ljava_lang_String_2 = function gwt_jelement_demo_client_WebAudioDemo_getTitle__Ljava_lang_String_2(){
  return 'Web Audio Demo';
}
;
_.setInactive__V = function gwt_jelement_demo_client_WebAudioDemo_setInactive__V(){
  this.gwt_jelement_demo_client_WebAudioDemo_playing && gwt_jelement_demo_client_WebAudioDemo_$stopPlaying__Lgwt_jelement_demo_client_WebAudioDemo_2V(this);
  this.gwt_jelement_demo_client_AbstractDemo_active = false;
}
;
_.package_private$gwt_jelement_demo_client$setInactive__V = function(){
  this.setInactive__V();
}
;
_.gwt_jelement_demo_client_WebAudioDemo_playing = false;
var com_google_gwt_lang_ClassLiteralHolder_Lgwt_1jelement_1demo_1client_1WebAudioDemo_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_23, 'WebAudioDemo', 94);
function gwt_jelement_demo_client_WebAudioDemo$lambda$0$Type_WebAudioDemo$lambda$0$Type__Lgwt_jelement_demo_client_WebAudioDemo_2V($$outer_0){
  this.gwt_jelement_demo_client_WebAudioDemo$lambda$0$Type_$$outer_10 = $$outer_0;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(252, $wnd.Function, {}, gwt_jelement_demo_client_WebAudioDemo$lambda$0$Type_WebAudioDemo$lambda$0$Type__Lgwt_jelement_demo_client_WebAudioDemo_2V);
_.handleEvent__Lgwt_jelement_events_Event_2V = function gwt_jelement_demo_client_WebAudioDemo$lambda$0$Type_handleEvent__Lgwt_jelement_events_Event_2V(arg0){
  gwt_jelement_demo_client_WebAudioDemo_$lambda$0__Lgwt_jelement_demo_client_WebAudioDemo_2Lgwt_jelement_events_Event_2V(this.gwt_jelement_demo_client_WebAudioDemo$lambda$0$Type_$$outer_10);
}
;
function gwt_jelement_demo_client_WebAudioDemo$lambda$1$Type_WebAudioDemo$lambda$1$Type__Lgwt_jelement_demo_client_WebAudioDemo_2V($$outer_0){
  this.gwt_jelement_demo_client_WebAudioDemo$lambda$1$Type_$$outer_10 = $$outer_0;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(253, $wnd.Function, {}, gwt_jelement_demo_client_WebAudioDemo$lambda$1$Type_WebAudioDemo$lambda$1$Type__Lgwt_jelement_demo_client_WebAudioDemo_2V);
_.handleEvent__Lgwt_jelement_events_Event_2V = function gwt_jelement_demo_client_WebAudioDemo$lambda$1$Type_handleEvent__Lgwt_jelement_events_Event_2V(arg0){
  gwt_jelement_demo_client_WebAudioDemo_$stopPlaying__Lgwt_jelement_demo_client_WebAudioDemo_2V(this.gwt_jelement_demo_client_WebAudioDemo$lambda$1$Type_$$outer_10);
}
;
function gwt_jelement_demo_client_WebGlDemo_$clinit__V(){
  gwt_jelement_demo_client_WebGlDemo_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  com_google_gwt_core_client_ScriptInjector$FromString_$inject__Lcom_google_gwt_core_client_ScriptInjector$FromString_2Lcom_google_gwt_core_client_JavaScriptObject_2(com_google_gwt_core_client_ScriptInjector$FromString_$setWindow__Lcom_google_gwt_core_client_ScriptInjector$FromString_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_ScriptInjector$FromString_2((com_google_gwt_core_client_ScriptInjector_$clinit__V() , new com_google_gwt_core_client_ScriptInjector$FromString_ScriptInjector$FromString__Ljava_lang_String_2V), com_google_gwt_core_client_ScriptInjector_TOP_1WINDOW));
}

function gwt_jelement_demo_client_WebGlDemo_$animate__Lgwt_jelement_demo_client_WebGlDemo_2V(this$static){
  var elapsed, timeNow;
  timeNow = (new $wnd.Date).getTime();
  if (this$static.gwt_jelement_demo_client_WebGlDemo_lastTime != 0) {
    elapsed = timeNow - this$static.gwt_jelement_demo_client_WebGlDemo_lastTime;
    this$static.gwt_jelement_demo_client_WebGlDemo_teapotAngle += 0.05 * elapsed;
  }
  this$static.gwt_jelement_demo_client_WebGlDemo_lastTime = timeNow;
}

function gwt_jelement_demo_client_WebGlDemo_$drawScene__Lgwt_jelement_demo_client_WebGlDemo_2V(this$static){
  var gwt_jelement_demo_client_WebGlDemo_$setMatrixUniforms__Lgwt_jelement_demo_client_WebGlDemo_2V_normalMatrix_0;
  this$static.gwt_jelement_demo_client_WebGlDemo_gl.viewport(0, 0, this$static.gwt_jelement_demo_client_WebGlDemo_viewportWidth, this$static.gwt_jelement_demo_client_WebGlDemo_viewportHeight);
  this$static.gwt_jelement_demo_client_WebGlDemo_gl.clear(com_google_gwt_lang_Cast_round_1int__DI($wnd.WebGLRenderingContext.COLOR_BUFFER_BIT) | com_google_gwt_lang_Cast_round_1int__DI($wnd.WebGLRenderingContext.DEPTH_BUFFER_BIT));
  if (this$static.gwt_jelement_demo_client_WebGlDemo_teapotVertexPositionBuffer == null || this$static.gwt_jelement_demo_client_WebGlDemo_teapotVertexNormalBuffer == null || this$static.gwt_jelement_demo_client_WebGlDemo_teapotVertexTextureCoordBuffer == null || this$static.gwt_jelement_demo_client_WebGlDemo_teapotVertexIndexBuffer == null) {
    return;
  }
  $wnd.mat4.perspective(45, this$static.gwt_jelement_demo_client_WebGlDemo_viewportWidth / this$static.gwt_jelement_demo_client_WebGlDemo_viewportHeight, 0.1, 100, this$static.gwt_jelement_demo_client_WebGlDemo_pMatrix);
  this$static.gwt_jelement_demo_client_WebGlDemo_gl.uniform1i(this$static.gwt_jelement_demo_client_WebGlDemo_showSpecularHighlightsUniform, 1);
  this$static.gwt_jelement_demo_client_WebGlDemo_gl.uniform1i(this$static.gwt_jelement_demo_client_WebGlDemo_useLightingUniform, 1);
  this$static.gwt_jelement_demo_client_WebGlDemo_gl.uniform3f(this$static.gwt_jelement_demo_client_WebGlDemo_ambientColorUniform, 0.2, 0.2, 0.2);
  this$static.gwt_jelement_demo_client_WebGlDemo_gl.uniform3f(this$static.gwt_jelement_demo_client_WebGlDemo_pointLightingLocationUniform, -10, 4, -20);
  this$static.gwt_jelement_demo_client_WebGlDemo_gl.uniform3f(this$static.gwt_jelement_demo_client_WebGlDemo_pointLightingSpecularColorUniform, 0.8, 0.8, 0.8);
  this$static.gwt_jelement_demo_client_WebGlDemo_gl.uniform3f(this$static.gwt_jelement_demo_client_WebGlDemo_pointLightingDiffuseColorUniform, 0.8, 0.8, 0.8);
  this$static.gwt_jelement_demo_client_WebGlDemo_gl.uniform1i(this$static.gwt_jelement_demo_client_WebGlDemo_useTexturesUniform, 1);
  $wnd.mat4.identity(this$static.gwt_jelement_demo_client_WebGlDemo_mvMatrix);
  $wnd.mat4.translate(this$static.gwt_jelement_demo_client_WebGlDemo_mvMatrix, com_google_gwt_lang_Array_stampJavaTypeInfo__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_lang_Array_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(com_google_gwt_lang_ClassLiteralHolder_D_1classLit, 1), $intern_8, 48, 15, [0, 0, -40]));
  $wnd.mat4.rotate(this$static.gwt_jelement_demo_client_WebGlDemo_mvMatrix, 23.4 * $wnd.Math.PI / 180, com_google_gwt_lang_Array_stampJavaTypeInfo__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_lang_Array_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(com_google_gwt_lang_ClassLiteralHolder_D_1classLit, 1), $intern_8, 48, 15, [1, 0, -1]));
  $wnd.mat4.rotate(this$static.gwt_jelement_demo_client_WebGlDemo_mvMatrix, this$static.gwt_jelement_demo_client_WebGlDemo_teapotAngle * $wnd.Math.PI / 180, com_google_gwt_lang_Array_stampJavaTypeInfo__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_lang_Array_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(com_google_gwt_lang_ClassLiteralHolder_D_1classLit, 1), $intern_8, 48, 15, [0, 1, 0]));
  this$static.gwt_jelement_demo_client_WebGlDemo_gl.activeTexture($wnd.WebGLRenderingContext.TEXTURE0);
  this$static.gwt_jelement_demo_client_WebGlDemo_gl.bindTexture($wnd.WebGLRenderingContext.TEXTURE_2D, this$static.gwt_jelement_demo_client_WebGlDemo_galvanizedTexture);
  this$static.gwt_jelement_demo_client_WebGlDemo_gl.uniform1i(this$static.gwt_jelement_demo_client_WebGlDemo_samplerUniform, 0);
  this$static.gwt_jelement_demo_client_WebGlDemo_gl.uniform1f(this$static.gwt_jelement_demo_client_WebGlDemo_materialShininessUniform, 32);
  this$static.gwt_jelement_demo_client_WebGlDemo_gl.bindBuffer($wnd.WebGLRenderingContext.ARRAY_BUFFER, this$static.gwt_jelement_demo_client_WebGlDemo_teapotVertexPositionBuffer);
  this$static.gwt_jelement_demo_client_WebGlDemo_gl.vertexAttribPointer(this$static.gwt_jelement_demo_client_WebGlDemo_vertexPositionAttribute, this$static.gwt_jelement_demo_client_WebGlDemo_teapotVertexPositionBufferItemSize, $wnd.WebGLRenderingContext.FLOAT, false, 0, 0);
  this$static.gwt_jelement_demo_client_WebGlDemo_gl.bindBuffer($wnd.WebGLRenderingContext.ARRAY_BUFFER, this$static.gwt_jelement_demo_client_WebGlDemo_teapotVertexTextureCoordBuffer);
  this$static.gwt_jelement_demo_client_WebGlDemo_gl.vertexAttribPointer(this$static.gwt_jelement_demo_client_WebGlDemo_textureCoordAttribute, this$static.gwt_jelement_demo_client_WebGlDemo_teapotVertexTextureCoordBufferItemSize, $wnd.WebGLRenderingContext.FLOAT, false, 0, 0);
  this$static.gwt_jelement_demo_client_WebGlDemo_gl.bindBuffer($wnd.WebGLRenderingContext.ARRAY_BUFFER, this$static.gwt_jelement_demo_client_WebGlDemo_teapotVertexNormalBuffer);
  this$static.gwt_jelement_demo_client_WebGlDemo_gl.vertexAttribPointer(this$static.gwt_jelement_demo_client_WebGlDemo_vertexNormalAttribute, this$static.gwt_jelement_demo_client_WebGlDemo_teapotVertexNormalBufferItemSize, $wnd.WebGLRenderingContext.FLOAT, false, 0, 0);
  this$static.gwt_jelement_demo_client_WebGlDemo_gl.bindBuffer($wnd.WebGLRenderingContext.ELEMENT_ARRAY_BUFFER, this$static.gwt_jelement_demo_client_WebGlDemo_teapotVertexIndexBuffer);
  this$static.gwt_jelement_demo_client_WebGlDemo_gl.uniformMatrix4fv(this$static.gwt_jelement_demo_client_WebGlDemo_pMatrixUniform, false, this$static.gwt_jelement_demo_client_WebGlDemo_pMatrix);
  this$static.gwt_jelement_demo_client_WebGlDemo_gl.uniformMatrix4fv(this$static.gwt_jelement_demo_client_WebGlDemo_mvMatrixUniform, false, this$static.gwt_jelement_demo_client_WebGlDemo_mvMatrix);
  gwt_jelement_demo_client_WebGlDemo_$setMatrixUniforms__Lgwt_jelement_demo_client_WebGlDemo_2V_normalMatrix_0 = $wnd.mat3.create();
  $wnd.mat4.toInverseMat3(this$static.gwt_jelement_demo_client_WebGlDemo_mvMatrix, gwt_jelement_demo_client_WebGlDemo_$setMatrixUniforms__Lgwt_jelement_demo_client_WebGlDemo_2V_normalMatrix_0);
  $wnd.mat3.transpose(gwt_jelement_demo_client_WebGlDemo_$setMatrixUniforms__Lgwt_jelement_demo_client_WebGlDemo_2V_normalMatrix_0);
  this$static.gwt_jelement_demo_client_WebGlDemo_gl.uniformMatrix3fv(this$static.gwt_jelement_demo_client_WebGlDemo_nMatrixUniform, false, gwt_jelement_demo_client_WebGlDemo_$setMatrixUniforms__Lgwt_jelement_demo_client_WebGlDemo_2V_normalMatrix_0);
  this$static.gwt_jelement_demo_client_WebGlDemo_gl.drawElements($wnd.WebGLRenderingContext.TRIANGLES, this$static.gwt_jelement_demo_client_WebGlDemo_teapotVertexIndexBufferNumItems, $wnd.WebGLRenderingContext.UNSIGNED_SHORT, 0);
}

function gwt_jelement_demo_client_WebGlDemo_$getShader__Lgwt_jelement_demo_client_WebGlDemo_2Lgwt_jelement_webgl_WebGLRenderingContext_2Ljava_lang_String_2Lgwt_jelement_webgl_WebGLShader_2(gl, id_0){
  var node, shader, shaderScript, shaderSource;
  shaderScript = com_google_gwt_lang_Cast_castToNative__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2($wnd.window.document.getElementById(id_0), $wnd.HTMLScriptElement);
  shaderSource = new java_lang_StringBuilder_StringBuilder__V;
  node = shaderScript.firstChild;
  while (node != null) {
    node.nodeType == $wnd.Node.TEXT_NODE && java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_String_2Ljava_lang_StringBuilder_2(shaderSource, node.textContent);
    node = node.nextSibling;
  }
  if (java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z('x-shader/x-fragment', shaderScript.type)) {
    shader = gl.createShader($wnd.WebGLRenderingContext.FRAGMENT_SHADER);
  }
   else if (java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z('x-shader/x-vertex', shaderScript.type)) {
    shader = gl.createShader($wnd.WebGLRenderingContext.VERTEX_SHADER);
  }
   else {
    return null;
  }
  gl.shaderSource(shader, shaderSource.java_lang_AbstractStringBuilder_string);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, $wnd.WebGLRenderingContext.COMPILE_STATUS)) {
    $wnd.window.window.alert(gl.getShaderInfoLog(shader));
    return null;
  }
  return shader;
}

function gwt_jelement_demo_client_WebGlDemo_$handleLoadedTeapot__Lgwt_jelement_demo_client_WebGlDemo_2Lgwt_jelement_webgl_WebGLRenderingContext_2Lgwt_jelement_core_JsObject_2V(this$static, gl, teapotData){
  var indices;
  this$static.gwt_jelement_demo_client_WebGlDemo_teapotVertexNormalBuffer = gl.createBuffer();
  gl.bindBuffer($wnd.WebGLRenderingContext.ARRAY_BUFFER, this$static.gwt_jelement_demo_client_WebGlDemo_teapotVertexNormalBuffer);
  gl.bufferData($wnd.WebGLRenderingContext.ARRAY_BUFFER, new $wnd.Float32Array(com_google_gwt_lang_Cast_castToJsArray__Ljava_lang_Object_2Ljava_lang_Object_2(teapotData['vertexNormals'])), $wnd.WebGLRenderingContext.STATIC_DRAW);
  this$static.gwt_jelement_demo_client_WebGlDemo_teapotVertexNormalBufferItemSize = 3;
  this$static.gwt_jelement_demo_client_WebGlDemo_teapotVertexTextureCoordBuffer = gl.createBuffer();
  gl.bindBuffer($wnd.WebGLRenderingContext.ARRAY_BUFFER, this$static.gwt_jelement_demo_client_WebGlDemo_teapotVertexTextureCoordBuffer);
  gl.bufferData($wnd.WebGLRenderingContext.ARRAY_BUFFER, new $wnd.Float32Array(com_google_gwt_lang_Cast_castToJsArray__Ljava_lang_Object_2Ljava_lang_Object_2(teapotData['vertexTextureCoords'])), $wnd.WebGLRenderingContext.STATIC_DRAW);
  this$static.gwt_jelement_demo_client_WebGlDemo_teapotVertexTextureCoordBufferItemSize = 2;
  this$static.gwt_jelement_demo_client_WebGlDemo_teapotVertexPositionBuffer = gl.createBuffer();
  gl.bindBuffer($wnd.WebGLRenderingContext.ARRAY_BUFFER, this$static.gwt_jelement_demo_client_WebGlDemo_teapotVertexPositionBuffer);
  gl.bufferData($wnd.WebGLRenderingContext.ARRAY_BUFFER, new $wnd.Float32Array(com_google_gwt_lang_Cast_castToJsArray__Ljava_lang_Object_2Ljava_lang_Object_2(teapotData['vertexPositions'])), $wnd.WebGLRenderingContext.STATIC_DRAW);
  this$static.gwt_jelement_demo_client_WebGlDemo_teapotVertexPositionBufferItemSize = 3;
  this$static.gwt_jelement_demo_client_WebGlDemo_teapotVertexIndexBuffer = gl.createBuffer();
  gl.bindBuffer($wnd.WebGLRenderingContext.ELEMENT_ARRAY_BUFFER, this$static.gwt_jelement_demo_client_WebGlDemo_teapotVertexIndexBuffer);
  indices = com_google_gwt_lang_Cast_castToJsArray__Ljava_lang_Object_2Ljava_lang_Object_2(teapotData['indices']);
  gl.bufferData($wnd.WebGLRenderingContext.ELEMENT_ARRAY_BUFFER, new $wnd.Uint16Array(indices), $wnd.WebGLRenderingContext.STATIC_DRAW);
  this$static.gwt_jelement_demo_client_WebGlDemo_teapotVertexIndexBufferNumItems = com_google_gwt_lang_Cast_castToJsObject__Ljava_lang_Object_2Ljava_lang_Object_2(indices)['length'];
}

function gwt_jelement_demo_client_WebGlDemo_$handleLoadedTexture__Lgwt_jelement_demo_client_WebGlDemo_2Lgwt_jelement_webgl_WebGLTexture_2Lgwt_jelement_html_Image_2V(this$static, texture, image){
  this$static.gwt_jelement_demo_client_WebGlDemo_gl.pixelStorei($wnd.WebGLRenderingContext.UNPACK_FLIP_Y_WEBGL, 1);
  this$static.gwt_jelement_demo_client_WebGlDemo_gl.bindTexture($wnd.WebGLRenderingContext.TEXTURE_2D, texture);
  this$static.gwt_jelement_demo_client_WebGlDemo_gl.texImage2D($wnd.WebGLRenderingContext.TEXTURE_2D, 0, $wnd.WebGLRenderingContext.RGBA, $wnd.WebGLRenderingContext.RGBA, $wnd.WebGLRenderingContext.UNSIGNED_BYTE, image);
  this$static.gwt_jelement_demo_client_WebGlDemo_gl.texParameteri($wnd.WebGLRenderingContext.TEXTURE_2D, $wnd.WebGLRenderingContext.TEXTURE_MAG_FILTER, $wnd.WebGLRenderingContext.LINEAR);
  this$static.gwt_jelement_demo_client_WebGlDemo_gl.texParameteri($wnd.WebGLRenderingContext.TEXTURE_2D, $wnd.WebGLRenderingContext.TEXTURE_MIN_FILTER, $wnd.WebGLRenderingContext.LINEAR_MIPMAP_NEAREST);
  this$static.gwt_jelement_demo_client_WebGlDemo_gl.generateMipmap($wnd.WebGLRenderingContext.TEXTURE_2D);
  this$static.gwt_jelement_demo_client_WebGlDemo_gl.bindTexture($wnd.WebGLRenderingContext.TEXTURE_2D, null);
}

function gwt_jelement_demo_client_WebGlDemo_$initShaders__Lgwt_jelement_demo_client_WebGlDemo_2V(this$static){
  var fragmentShader, shaderProgram, vertexShader;
  fragmentShader = gwt_jelement_demo_client_WebGlDemo_$getShader__Lgwt_jelement_demo_client_WebGlDemo_2Lgwt_jelement_webgl_WebGLRenderingContext_2Ljava_lang_String_2Lgwt_jelement_webgl_WebGLShader_2(this$static.gwt_jelement_demo_client_WebGlDemo_gl, 'per-fragment-lighting-fs');
  vertexShader = gwt_jelement_demo_client_WebGlDemo_$getShader__Lgwt_jelement_demo_client_WebGlDemo_2Lgwt_jelement_webgl_WebGLRenderingContext_2Ljava_lang_String_2Lgwt_jelement_webgl_WebGLShader_2(this$static.gwt_jelement_demo_client_WebGlDemo_gl, 'per-fragment-lighting-vs');
  shaderProgram = this$static.gwt_jelement_demo_client_WebGlDemo_gl.createProgram();
  this$static.gwt_jelement_demo_client_WebGlDemo_gl.attachShader(shaderProgram, vertexShader);
  this$static.gwt_jelement_demo_client_WebGlDemo_gl.attachShader(shaderProgram, fragmentShader);
  this$static.gwt_jelement_demo_client_WebGlDemo_gl.linkProgram(shaderProgram);
  !!this$static.gwt_jelement_demo_client_WebGlDemo_gl.getProgramParameter(shaderProgram, $wnd.WebGLRenderingContext.LINK_STATUS) || $wnd.window.window.alert('Could not initialise shaders');
  this$static.gwt_jelement_demo_client_WebGlDemo_gl.useProgram(shaderProgram);
  this$static.gwt_jelement_demo_client_WebGlDemo_vertexPositionAttribute = this$static.gwt_jelement_demo_client_WebGlDemo_gl.getAttribLocation(shaderProgram, 'aVertexPosition');
  this$static.gwt_jelement_demo_client_WebGlDemo_gl.enableVertexAttribArray(this$static.gwt_jelement_demo_client_WebGlDemo_vertexPositionAttribute);
  this$static.gwt_jelement_demo_client_WebGlDemo_vertexNormalAttribute = this$static.gwt_jelement_demo_client_WebGlDemo_gl.getAttribLocation(shaderProgram, 'aVertexNormal');
  this$static.gwt_jelement_demo_client_WebGlDemo_gl.enableVertexAttribArray(this$static.gwt_jelement_demo_client_WebGlDemo_vertexNormalAttribute);
  this$static.gwt_jelement_demo_client_WebGlDemo_textureCoordAttribute = this$static.gwt_jelement_demo_client_WebGlDemo_gl.getAttribLocation(shaderProgram, 'aTextureCoord');
  this$static.gwt_jelement_demo_client_WebGlDemo_gl.enableVertexAttribArray(this$static.gwt_jelement_demo_client_WebGlDemo_textureCoordAttribute);
  this$static.gwt_jelement_demo_client_WebGlDemo_pMatrixUniform = this$static.gwt_jelement_demo_client_WebGlDemo_gl.getUniformLocation(shaderProgram, 'uPMatrix');
  this$static.gwt_jelement_demo_client_WebGlDemo_mvMatrixUniform = this$static.gwt_jelement_demo_client_WebGlDemo_gl.getUniformLocation(shaderProgram, 'uMVMatrix');
  this$static.gwt_jelement_demo_client_WebGlDemo_nMatrixUniform = this$static.gwt_jelement_demo_client_WebGlDemo_gl.getUniformLocation(shaderProgram, 'uNMatrix');
  this$static.gwt_jelement_demo_client_WebGlDemo_samplerUniform = this$static.gwt_jelement_demo_client_WebGlDemo_gl.getUniformLocation(shaderProgram, 'uSampler');
  this$static.gwt_jelement_demo_client_WebGlDemo_materialShininessUniform = this$static.gwt_jelement_demo_client_WebGlDemo_gl.getUniformLocation(shaderProgram, 'uMaterialShininess');
  this$static.gwt_jelement_demo_client_WebGlDemo_showSpecularHighlightsUniform = this$static.gwt_jelement_demo_client_WebGlDemo_gl.getUniformLocation(shaderProgram, 'uShowSpecularHighlights');
  this$static.gwt_jelement_demo_client_WebGlDemo_useTexturesUniform = this$static.gwt_jelement_demo_client_WebGlDemo_gl.getUniformLocation(shaderProgram, 'uUseTextures');
  this$static.gwt_jelement_demo_client_WebGlDemo_useLightingUniform = this$static.gwt_jelement_demo_client_WebGlDemo_gl.getUniformLocation(shaderProgram, 'uUseLighting');
  this$static.gwt_jelement_demo_client_WebGlDemo_ambientColorUniform = this$static.gwt_jelement_demo_client_WebGlDemo_gl.getUniformLocation(shaderProgram, 'uAmbientColor');
  this$static.gwt_jelement_demo_client_WebGlDemo_pointLightingLocationUniform = this$static.gwt_jelement_demo_client_WebGlDemo_gl.getUniformLocation(shaderProgram, 'uPointLightingLocation');
  this$static.gwt_jelement_demo_client_WebGlDemo_pointLightingSpecularColorUniform = this$static.gwt_jelement_demo_client_WebGlDemo_gl.getUniformLocation(shaderProgram, 'uPointLightingSpecularColor');
  this$static.gwt_jelement_demo_client_WebGlDemo_pointLightingDiffuseColorUniform = this$static.gwt_jelement_demo_client_WebGlDemo_gl.getUniformLocation(shaderProgram, 'uPointLightingDiffuseColor');
}

function gwt_jelement_demo_client_WebGlDemo_$lambda$1__Lgwt_jelement_demo_client_WebGlDemo_2Lgwt_jelement_xmlhttprequest_XMLHttpRequest_2Lgwt_jelement_events_Event_2Ljava_lang_Object_2(this$static, request_1){
  request_1.readyState == $wnd.XMLHttpRequest.DONE && gwt_jelement_core_Any_$asObject__Lgwt_jelement_core_Any_2Ljava_util_function_Consumer_2Lgwt_jelement_core_AnyHandler_2($wnd.window.JSON.parse(request_1.responseText), new gwt_jelement_demo_client_WebGlDemo$lambda$3$Type_WebGlDemo$lambda$3$Type__Lgwt_jelement_demo_client_WebGlDemo_2V(this$static)).otherwise__Ljava_util_function_Consumer_2V(new gwt_jelement_demo_client_WebGlDemo$lambda$4$Type_WebGlDemo$lambda$4$Type__V);
  return null;
}

function gwt_jelement_demo_client_WebGlDemo_$lambda$3__Lgwt_jelement_demo_client_WebGlDemo_2Lgwt_jelement_core_JsObject_2V(this$static, data_0){
  gwt_jelement_demo_client_WebGlDemo_$handleLoadedTeapot__Lgwt_jelement_demo_client_WebGlDemo_2Lgwt_jelement_webgl_WebGLRenderingContext_2Lgwt_jelement_core_JsObject_2V(this$static, this$static.gwt_jelement_demo_client_WebGlDemo_gl, data_0);
}

function gwt_jelement_demo_client_WebGlDemo_$tick__Lgwt_jelement_demo_client_WebGlDemo_2V(this$static){
  if (!this$static.gwt_jelement_demo_client_AbstractDemo_active) {
    return;
  }
  $wnd.window.window.requestAnimationFrame(com_google_gwt_lang_Runtime_makeLambdaFunction__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(gwt_jelement_demo_client_WebGlDemo$lambda$2$Type_WebGlDemo$lambda$2$Type__Lgwt_jelement_demo_client_WebGlDemo_2V.prototype.handleEvent__DV, gwt_jelement_demo_client_WebGlDemo$lambda$2$Type_WebGlDemo$lambda$2$Type__Lgwt_jelement_demo_client_WebGlDemo_2V, [this$static]));
  gwt_jelement_demo_client_WebGlDemo_$drawScene__Lgwt_jelement_demo_client_WebGlDemo_2V(this$static);
  gwt_jelement_demo_client_WebGlDemo_$animate__Lgwt_jelement_demo_client_WebGlDemo_2V(this$static);
}

function gwt_jelement_demo_client_WebGlDemo_WebGlDemo__V(){
  gwt_jelement_demo_client_WebGlDemo_$clinit__V();
  this.gwt_jelement_demo_client_WebGlDemo_mvMatrix = $wnd.mat4.create();
  this.gwt_jelement_demo_client_WebGlDemo_pMatrix = $wnd.mat4.create();
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(95, 13, $intern_22, gwt_jelement_demo_client_WebGlDemo_WebGlDemo__V);
_.execute__V = function gwt_jelement_demo_client_WebGlDemo_execute__V(){
  var canvas, gwt_jelement_demo_client_WebGlDemo_$createTexture__Lgwt_jelement_demo_client_WebGlDemo_2Lgwt_jelement_webgl_WebGLTexture_2_texture_0, gwt_jelement_demo_client_WebGlDemo_$createTexture__Lgwt_jelement_demo_client_WebGlDemo_2Lgwt_jelement_webgl_WebGLTexture_2_image_0, gwt_jelement_demo_client_WebGlDemo_$loadTeapot__Lgwt_jelement_demo_client_WebGlDemo_2V_request_0;
  canvas = com_google_gwt_lang_Cast_castToNative__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2($wnd.window.document.getElementById('webgl-canvas'), $wnd.HTMLCanvasElement);
  this.gwt_jelement_demo_client_WebGlDemo_viewportWidth = canvas.width;
  this.gwt_jelement_demo_client_WebGlDemo_viewportHeight = canvas.height;
  this.gwt_jelement_demo_client_WebGlDemo_gl = com_google_gwt_lang_Cast_castToNative__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(canvas.getContext('experimental-webgl'), $wnd.WebGLRenderingContext);
  gwt_jelement_demo_client_WebGlDemo_$initShaders__Lgwt_jelement_demo_client_WebGlDemo_2V(this);
  this.gwt_jelement_demo_client_WebGlDemo_galvanizedTexture = (gwt_jelement_demo_client_WebGlDemo_$createTexture__Lgwt_jelement_demo_client_WebGlDemo_2Lgwt_jelement_webgl_WebGLTexture_2_texture_0 = this.gwt_jelement_demo_client_WebGlDemo_gl.createTexture() , gwt_jelement_demo_client_WebGlDemo_$createTexture__Lgwt_jelement_demo_client_WebGlDemo_2Lgwt_jelement_webgl_WebGLTexture_2_image_0 = new $wnd.Image , gwt_jelement_html_HTMLElement_$setOnLoad__Lgwt_jelement_html_HTMLElement_2Lgwt_jelement_events_EventHandlerNonNull_2V(gwt_jelement_demo_client_WebGlDemo_$createTexture__Lgwt_jelement_demo_client_WebGlDemo_2Lgwt_jelement_webgl_WebGLTexture_2_image_0, com_google_gwt_lang_Runtime_makeLambdaFunction__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(gwt_jelement_demo_client_WebGlDemo$lambda$0$Type_WebGlDemo$lambda$0$Type__Lgwt_jelement_demo_client_WebGlDemo_2Lgwt_jelement_webgl_WebGLTexture_2Lgwt_jelement_html_Image_2V.prototype.callback__Lgwt_jelement_events_Event_2Ljava_lang_Object_2, gwt_jelement_demo_client_WebGlDemo$lambda$0$Type_WebGlDemo$lambda$0$Type__Lgwt_jelement_demo_client_WebGlDemo_2Lgwt_jelement_webgl_WebGLTexture_2Lgwt_jelement_html_Image_2V, [this, gwt_jelement_demo_client_WebGlDemo_$createTexture__Lgwt_jelement_demo_client_WebGlDemo_2Lgwt_jelement_webgl_WebGLTexture_2_texture_0, gwt_jelement_demo_client_WebGlDemo_$createTexture__Lgwt_jelement_demo_client_WebGlDemo_2Lgwt_jelement_webgl_WebGLTexture_2_image_0])) , gwt_jelement_demo_client_WebGlDemo_$createTexture__Lgwt_jelement_demo_client_WebGlDemo_2Lgwt_jelement_webgl_WebGLTexture_2_image_0.src = 'galvanized.jpg' , gwt_jelement_demo_client_WebGlDemo_$createTexture__Lgwt_jelement_demo_client_WebGlDemo_2Lgwt_jelement_webgl_WebGLTexture_2_texture_0);
  gwt_jelement_demo_client_WebGlDemo_$loadTeapot__Lgwt_jelement_demo_client_WebGlDemo_2V_request_0 = new $wnd.XMLHttpRequest;
  gwt_jelement_demo_client_WebGlDemo_$loadTeapot__Lgwt_jelement_demo_client_WebGlDemo_2V_request_0.open('GET', 'Teapot.json');
  gwt_jelement_xmlhttprequest_XMLHttpRequest_$setOnReadystatechange__Lgwt_jelement_xmlhttprequest_XMLHttpRequest_2Lgwt_jelement_events_EventHandlerNonNull_2V(gwt_jelement_demo_client_WebGlDemo_$loadTeapot__Lgwt_jelement_demo_client_WebGlDemo_2V_request_0, com_google_gwt_lang_Runtime_makeLambdaFunction__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(gwt_jelement_demo_client_WebGlDemo$lambda$1$Type_WebGlDemo$lambda$1$Type__Lgwt_jelement_demo_client_WebGlDemo_2Lgwt_jelement_xmlhttprequest_XMLHttpRequest_2V.prototype.callback__Lgwt_jelement_events_Event_2Ljava_lang_Object_2, gwt_jelement_demo_client_WebGlDemo$lambda$1$Type_WebGlDemo$lambda$1$Type__Lgwt_jelement_demo_client_WebGlDemo_2Lgwt_jelement_xmlhttprequest_XMLHttpRequest_2V, [this, gwt_jelement_demo_client_WebGlDemo_$loadTeapot__Lgwt_jelement_demo_client_WebGlDemo_2V_request_0]));
  gwt_jelement_demo_client_WebGlDemo_$loadTeapot__Lgwt_jelement_demo_client_WebGlDemo_2V_request_0.send();
  this.gwt_jelement_demo_client_WebGlDemo_gl.clearColor(0, 0, 0, 1);
  this.gwt_jelement_demo_client_WebGlDemo_gl.enable($wnd.WebGLRenderingContext.DEPTH_TEST);
  gwt_jelement_demo_client_WebGlDemo_$tick__Lgwt_jelement_demo_client_WebGlDemo_2V(this);
}
;
_.getName__Ljava_lang_String_2 = function gwt_jelement_demo_client_WebGlDemo_getName__Ljava_lang_String_2(){
  return 'webgl';
}
;
_.getSource__Lcom_google_gwt_resources_client_TextResource_2 = function gwt_jelement_demo_client_WebGlDemo_getSource__Lcom_google_gwt_resources_client_TextResource_2(){
  return gwt_jelement_demo_client_SourceClientBundle_1default_1InlineClientBundleGenerator$getWebGlSourceInitializer_$clinit__V() , gwt_jelement_demo_client_SourceClientBundle_1default_1InlineClientBundleGenerator_getWebGlSource;
}
;
_.getTemplate__Lcom_google_gwt_resources_client_TextResource_2 = function gwt_jelement_demo_client_WebGlDemo_getTemplate__Lcom_google_gwt_resources_client_TextResource_2(){
  return gwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator$getWebGlHtmlInitializer_$clinit__V() , gwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator_getWebGlHtml;
}
;
_.getTitle__Ljava_lang_String_2 = function gwt_jelement_demo_client_WebGlDemo_getTitle__Ljava_lang_String_2(){
  return 'WebGL Demo';
}
;
_.gwt_jelement_demo_client_WebGlDemo_lastTime = 0;
_.gwt_jelement_demo_client_WebGlDemo_teapotAngle = 180;
_.gwt_jelement_demo_client_WebGlDemo_teapotVertexIndexBufferNumItems = 0;
_.gwt_jelement_demo_client_WebGlDemo_teapotVertexNormalBufferItemSize = 0;
_.gwt_jelement_demo_client_WebGlDemo_teapotVertexPositionBufferItemSize = 0;
_.gwt_jelement_demo_client_WebGlDemo_teapotVertexTextureCoordBufferItemSize = 0;
_.gwt_jelement_demo_client_WebGlDemo_textureCoordAttribute = 0;
_.gwt_jelement_demo_client_WebGlDemo_vertexNormalAttribute = 0;
_.gwt_jelement_demo_client_WebGlDemo_vertexPositionAttribute = 0;
_.gwt_jelement_demo_client_WebGlDemo_viewportHeight = 0;
_.gwt_jelement_demo_client_WebGlDemo_viewportWidth = 0;
var com_google_gwt_lang_ClassLiteralHolder_Lgwt_1jelement_1demo_1client_1WebGlDemo_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_23, 'WebGlDemo', 95);
function gwt_jelement_demo_client_WebGlDemo$lambda$0$Type_WebGlDemo$lambda$0$Type__Lgwt_jelement_demo_client_WebGlDemo_2Lgwt_jelement_webgl_WebGLTexture_2Lgwt_jelement_html_Image_2V($$outer_0, texture_1, image_2){
  this.gwt_jelement_demo_client_WebGlDemo$lambda$0$Type_$$outer_10 = $$outer_0;
  this.gwt_jelement_demo_client_WebGlDemo$lambda$0$Type_texture_11 = texture_1;
  this.gwt_jelement_demo_client_WebGlDemo$lambda$0$Type_image_12 = image_2;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(255, $wnd.Function, {}, gwt_jelement_demo_client_WebGlDemo$lambda$0$Type_WebGlDemo$lambda$0$Type__Lgwt_jelement_demo_client_WebGlDemo_2Lgwt_jelement_webgl_WebGLTexture_2Lgwt_jelement_html_Image_2V);
_.callback__Lgwt_jelement_events_Event_2Ljava_lang_Object_2 = function gwt_jelement_demo_client_WebGlDemo$lambda$0$Type_callback__Lgwt_jelement_events_Event_2Ljava_lang_Object_2(arg0){
  return gwt_jelement_demo_client_WebGlDemo_$handleLoadedTexture__Lgwt_jelement_demo_client_WebGlDemo_2Lgwt_jelement_webgl_WebGLTexture_2Lgwt_jelement_html_Image_2V(this.gwt_jelement_demo_client_WebGlDemo$lambda$0$Type_$$outer_10, this.gwt_jelement_demo_client_WebGlDemo$lambda$0$Type_texture_11, this.gwt_jelement_demo_client_WebGlDemo$lambda$0$Type_image_12) , null;
}
;
function gwt_jelement_demo_client_WebGlDemo$lambda$1$Type_WebGlDemo$lambda$1$Type__Lgwt_jelement_demo_client_WebGlDemo_2Lgwt_jelement_xmlhttprequest_XMLHttpRequest_2V($$outer_0, request_1){
  this.gwt_jelement_demo_client_WebGlDemo$lambda$1$Type_$$outer_10 = $$outer_0;
  this.gwt_jelement_demo_client_WebGlDemo$lambda$1$Type_request_11 = request_1;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(257, $wnd.Function, {}, gwt_jelement_demo_client_WebGlDemo$lambda$1$Type_WebGlDemo$lambda$1$Type__Lgwt_jelement_demo_client_WebGlDemo_2Lgwt_jelement_xmlhttprequest_XMLHttpRequest_2V);
_.callback__Lgwt_jelement_events_Event_2Ljava_lang_Object_2 = function gwt_jelement_demo_client_WebGlDemo$lambda$1$Type_callback__Lgwt_jelement_events_Event_2Ljava_lang_Object_2(arg0){
  return gwt_jelement_demo_client_WebGlDemo_$lambda$1__Lgwt_jelement_demo_client_WebGlDemo_2Lgwt_jelement_xmlhttprequest_XMLHttpRequest_2Lgwt_jelement_events_Event_2Ljava_lang_Object_2(this.gwt_jelement_demo_client_WebGlDemo$lambda$1$Type_$$outer_10, this.gwt_jelement_demo_client_WebGlDemo$lambda$1$Type_request_11);
}
;
function gwt_jelement_demo_client_WebGlDemo$lambda$2$Type_WebGlDemo$lambda$2$Type__Lgwt_jelement_demo_client_WebGlDemo_2V($$outer_0){
  this.gwt_jelement_demo_client_WebGlDemo$lambda$2$Type_$$outer_10 = $$outer_0;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(258, $wnd.Function, {}, gwt_jelement_demo_client_WebGlDemo$lambda$2$Type_WebGlDemo$lambda$2$Type__Lgwt_jelement_demo_client_WebGlDemo_2V);
_.handleEvent__DV = function gwt_jelement_demo_client_WebGlDemo$lambda$2$Type_handleEvent__DV(arg0){
  gwt_jelement_demo_client_WebGlDemo_$tick__Lgwt_jelement_demo_client_WebGlDemo_2V(this.gwt_jelement_demo_client_WebGlDemo$lambda$2$Type_$$outer_10);
}
;
function gwt_jelement_demo_client_WebGlDemo$lambda$3$Type_$accept__Lgwt_jelement_demo_client_WebGlDemo$lambda$3$Type_2Ljava_lang_Object_2V(this$static, arg0){
  gwt_jelement_demo_client_WebGlDemo_$lambda$3__Lgwt_jelement_demo_client_WebGlDemo_2Lgwt_jelement_core_JsObject_2V(this$static.gwt_jelement_demo_client_WebGlDemo$lambda$3$Type_$$outer_10, arg0);
}

function gwt_jelement_demo_client_WebGlDemo$lambda$3$Type_WebGlDemo$lambda$3$Type__Lgwt_jelement_demo_client_WebGlDemo_2V($$outer_0){
  this.gwt_jelement_demo_client_WebGlDemo$lambda$3$Type_$$outer_10 = $$outer_0;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(139, 1, {}, gwt_jelement_demo_client_WebGlDemo$lambda$3$Type_WebGlDemo$lambda$3$Type__Lgwt_jelement_demo_client_WebGlDemo_2V);
_.accept__Ljava_lang_Object_2V = function gwt_jelement_demo_client_WebGlDemo$lambda$3$Type_accept__Ljava_lang_Object_2V(arg0){
  gwt_jelement_demo_client_WebGlDemo$lambda$3$Type_$accept__Lgwt_jelement_demo_client_WebGlDemo$lambda$3$Type_2Ljava_lang_Object_2V(this, arg0);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lgwt_1jelement_1demo_1client_1WebGlDemo$lambda$3$Type_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_23, 'WebGlDemo/lambda$3$Type', 139);
function gwt_jelement_demo_client_WebGlDemo$lambda$4$Type_$accept__Lgwt_jelement_demo_client_WebGlDemo$lambda$4$Type_2Ljava_lang_Object_2V(arg0){
  gwt_jelement_demo_client_WebGlDemo_$clinit__V();
  $wnd.window.console.log('Something went wrong, got ', arg0, ', expected an Array');
}

function gwt_jelement_demo_client_WebGlDemo$lambda$4$Type_WebGlDemo$lambda$4$Type__V(){
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(140, 1, {}, gwt_jelement_demo_client_WebGlDemo$lambda$4$Type_WebGlDemo$lambda$4$Type__V);
_.accept__Ljava_lang_Object_2V = function gwt_jelement_demo_client_WebGlDemo$lambda$4$Type_accept__Ljava_lang_Object_2V(arg0){
  gwt_jelement_demo_client_WebGlDemo$lambda$4$Type_$accept__Lgwt_jelement_demo_client_WebGlDemo$lambda$4$Type_2Ljava_lang_Object_2V(arg0);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lgwt_1jelement_1demo_1client_1WebGlDemo$lambda$4$Type_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_23, 'WebGlDemo/lambda$4$Type', 140);
var gwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator_getBatteryHtml, gwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator_getCanvas2DHtml, gwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator_getElementAnimateHtml, gwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator_getGeoLocationHtml, gwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator_getNotificationHtml, gwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator_getPerformanceHtml, gwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator_getSpeechSynthHtml, gwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator_getStyle, gwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator_getSvgHtml, gwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator_getWebAudioHtml, gwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator_getWebGlHtml;
function gwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator$1_HtmlClientBundle_1default_1InlineClientBundleGenerator$1__Lgwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator_2V(){
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(112, 1, {}, gwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator$1_HtmlClientBundle_1default_1InlineClientBundleGenerator$1__Lgwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator_2V);
_.getText__Ljava_lang_String_2 = function gwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator$1_getText__Ljava_lang_String_2(){
  return '<style>\r\n    .battery {\r\n        width: 100px;\r\n        height: 30px;\r\n        border: 2px solid black;\r\n        margin: 20px auto 10px auto;\r\n    }\r\n\r\n    .battery-inner {\r\n        display: inline-block;\r\n        height: 100%;\r\n        border-right: 1px solid silver;\r\n    }\r\n\r\n    .battery-inner.high {\r\n        background-color: green;\r\n    }\r\n\r\n    .battery-inner.medium {\r\n        background-color: yellow;\r\n    }\r\n\r\n    .battery-inner.low {\r\n        background-color: red;\r\n    }\r\n\r\n    .status {\r\n        margin: 0 auto 10px auto;\r\n        text-align: center;\r\n        font-weight: bold;\r\n        font-size: 80%;\r\n    }\r\n    .error{\r\n        color: red;\r\n    }\r\n\r\n<\/style>\r\n\r\n<div style="width:200px;height:100px;display: inline-block">\r\n    <div class="battery">\r\n        <div class="battery-inner">\r\n        <\/div>\r\n    <\/div>\r\n    <div class="status">&nbsp;\r\n    <\/div>\r\n<\/div>\r\n<div style="width:calc(100% - 500px); display: inline-block;vertical-align: top; margin: 0 0 20px 0">\r\n<h3>Battery Status Demo<\/h3>\r\n    <p>Applications can use the <a href="https://developer.mozilla.org/en-US/docs/Web/API/Battery_Status_API" target="_blank">\r\n    Battery Status API<\/a> to reduce power consumption when the device is running on battery, for example by disabling\r\n    animations or increasing polling time. Unfortunately, it is currently poorly supported, and this demo only runs on Chrome\r\n        and Opera browsers.<\/p>\r\n    <div>\r\n        <span class="label label-primary">Battery Status<\/span>\r\n        <span class="label label-primary">Feature Detection<\/span>\r\n        <span class="label label-primary">Promise<\/span>\r\n        <span class="label label-primary">querySelector<\/span>\r\n        <span class="label label-primary">classList<\/span>\r\n    <\/div>\r\n\r\n\r\n<\/div>\r\n';
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lgwt_1jelement_1demo_1client_1html_1HtmlClientBundle_11default_11InlineClientBundleGenerator$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_39, 'HtmlClientBundle_default_InlineClientBundleGenerator/1', 112);
function gwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator$10_HtmlClientBundle_1default_1InlineClientBundleGenerator$10__Lgwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator_2V(){
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(119, 1, {}, gwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator$10_HtmlClientBundle_1default_1InlineClientBundleGenerator$10__Lgwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator_2V);
_.getText__Ljava_lang_String_2 = function gwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator$10_getText__Ljava_lang_String_2(){
  return '<style>\r\n    #demoContainer {\r\n        display: flex;\r\n        flex-direction: row;\r\n    }\r\n\r\n    #svgElement {\r\n        border: 1px solid #404040;\r\n        margin: 4px 0 4px 4px;\r\n        cursor: default;\r\n    }\r\n\r\n    #toolbar {\r\n        margin: 4px 0 4px 0;\r\n        display: inline-flex;\r\n        flex-direction: column;\r\n        width: 45px;\r\n        background-color: #e0e0e0;\r\n        border: 1px solid #404040;\r\n        border-left: 0;\r\n    }\r\n\r\n    #btnRedo, #btnUndo, #colorPicker, #btnDownload {\r\n        width: 44px;\r\n        height: 36px;\r\n    }\r\n\r\n    button[disabled] img {\r\n        opacity: 0.3;\r\n    }\r\n\r\n    #name {\r\n        width: 110px;\r\n        font-size: 16pt;\r\n        font-weight: bold;\r\n        white-space: nowrap;\r\n        transform: translate(-31%, 200%) rotate(-90deg);\r\n        text-shadow: -1px -1px white, -1px -1px white, -1px -1px white, -1px -1px white;\r\n        color: #2a4194;\r\n    }\r\n\r\n<\/style>\r\n\r\n<div id="demoContainer">\r\n    <svg xmlns="http://www.w3.org/2000/svg"  version="1.1" id="svgElement" x="0px" y="0px" width="300px" height="300px" viewBox="0 0 300 300" enable-background="new 0 0 600 400" xml:space="preserve">\r\n<\/svg>\r\n    <div id="toolbar">\r\n        <input type="color" id="colorPicker" value="#000080">\r\n        <button id="btnUndo" disabled title="Undo"><img src="undo.png"><\/button>\r\n        <button id="btnRedo" disabled title="Redo"><img src="redo.png"><\/button>\r\n        <button id="btnDownload" title="Download"><img src="download.png"><\/button>\r\n        <div id="name">SVG Draw<\/div>\r\n    <\/div>\r\n    <div style="width: calc(100% - 500px); vertical-align: top;margin-left: 30px">\r\n        <h3>SVG demo<\/h3>\r\n        <p>This is a freehand drawing tool that creates SVG drawings. You can download the drawing once you are\r\n            done. The line smoothing code comes from an excellent <a href=" https://stackoverflow.com/a/40700068/80075" target="_blank">\r\n                answer on Stack Overflow<\/a>.\r\n        <\/p>\r\n        <p>This demo works on all modern browsers, and on IE 11 with reduced features.\r\n        <\/p>\r\n        <div>\r\n            <span class="label label-primary">SVG<\/span>\r\n            <span class="label label-primary">DOM<\/span>\r\n            <span class="label label-primary">Blob<\/span>\r\n            <span class="label label-primary">Touch<\/span>\r\n        <\/div>\r\n    <\/div>\r\n<\/div>\r\n';
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lgwt_1jelement_1demo_1client_1html_1HtmlClientBundle_11default_11InlineClientBundleGenerator$10_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_39, 'HtmlClientBundle_default_InlineClientBundleGenerator/10', 119);
function gwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator$11_HtmlClientBundle_1default_1InlineClientBundleGenerator$11__Lgwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator_2V(){
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(120, 1, {}, gwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator$11_HtmlClientBundle_1default_1InlineClientBundleGenerator$11__Lgwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator_2V);
_.getText__Ljava_lang_String_2 = function gwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator$11_getText__Ljava_lang_String_2(){
  return '<h3>Web Audio<\/h3>\r\n\r\n<p> This is a demo of the <a href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API" target="_blank">Web\r\n    Audio API<\/a>. Click on <span id="audio-on"><\/span> to start the sound\r\n    and click on <span id="audio-off"><\/span> to stop it.<\/p>';
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lgwt_1jelement_1demo_1client_1html_1HtmlClientBundle_11default_11InlineClientBundleGenerator$11_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_39, 'HtmlClientBundle_default_InlineClientBundleGenerator/11', 120);
function gwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator$12_HtmlClientBundle_1default_1InlineClientBundleGenerator$12__Lgwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator_2V(){
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(121, 1, {}, gwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator$12_HtmlClientBundle_1default_1InlineClientBundleGenerator$12__Lgwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator_2V);
_.getText__Ljava_lang_String_2 = function gwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator$12_getText__Ljava_lang_String_2(){
  return '<!-- These are WebGL shader scripts, jot JavaScript -->\r\n<script id="per-fragment-lighting-fs" type="x-shader/x-fragment">\r\n    precision mediump float;\r\n\r\n    varying vec2 vTextureCoord;\r\n    varying vec3 vTransformedNormal;\r\n    varying vec4 vPosition;\r\n\r\n    uniform float uMaterialShininess;\r\n\r\n    uniform bool uShowSpecularHighlights;\r\n    uniform bool uUseLighting;\r\n    uniform bool uUseTextures;\r\n\r\n    uniform vec3 uAmbientColor;\r\n\r\n    uniform vec3 uPointLightingLocation;\r\n    uniform vec3 uPointLightingSpecularColor;\r\n    uniform vec3 uPointLightingDiffuseColor;\r\n\r\n    uniform sampler2D uSampler;\r\n\r\n    void main(void) {\r\n        vec3 lightWeighting;\r\n        if (!uUseLighting) {\r\n            lightWeighting = vec3(1.0, 1.0, 1.0);\r\n        } else {\r\n            vec3 lightDirection = normalize(uPointLightingLocation - vPosition.xyz);\r\n            vec3 normal = normalize(vTransformedNormal);\r\n\r\n            float specularLightWeighting = 0.0;\r\n            if (uShowSpecularHighlights) {\r\n                vec3 eyeDirection = normalize(-vPosition.xyz);\r\n                vec3 reflectionDirection = reflect(-lightDirection, normal);\r\n\r\n                specularLightWeighting = pow(max(dot(reflectionDirection, eyeDirection), 0.0), uMaterialShininess);\r\n            }\r\n\r\n            float diffuseLightWeighting = max(dot(normal, lightDirection), 0.0);\r\n            lightWeighting = uAmbientColor\r\n                + uPointLightingSpecularColor * specularLightWeighting\r\n                + uPointLightingDiffuseColor * diffuseLightWeighting;\r\n        }\r\n\r\n        vec4 fragmentColor;\r\n        if (uUseTextures) {\r\n            fragmentColor = texture2D(uSampler, vec2(vTextureCoord.s, vTextureCoord.t));\r\n        } else {\r\n            fragmentColor = vec4(1.0, 1.0, 1.0, 1.0);\r\n        }\r\n        gl_FragColor = vec4(fragmentColor.rgb * lightWeighting, fragmentColor.a);\r\n    }\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n<\/script>\r\n\r\n<script id="per-fragment-lighting-vs" type="x-shader/x-vertex">\r\n    attribute vec3 aVertexPosition;\r\n    attribute vec3 aVertexNormal;\r\n    attribute vec2 aTextureCoord;\r\n\r\n    uniform mat4 uMVMatrix;\r\n    uniform mat4 uPMatrix;\r\n    uniform mat3 uNMatrix;\r\n\r\n    varying vec2 vTextureCoord;\r\n    varying vec3 vTransformedNormal;\r\n    varying vec4 vPosition;\r\n\r\n    void main(void) {\r\n        vPosition = uMVMatrix * vec4(aVertexPosition, 1.0);\r\n        gl_Position = uPMatrix * vPosition;\r\n        vTextureCoord = aTextureCoord;\r\n        vTransformedNormal = uNMatrix * aVertexNormal;\r\n    }\r\n\r\n\r\n<\/script>\r\n\r\n<div>\r\n    <canvas id="webgl-canvas" style="border: none;display: inline-block;margin:10px 20px 10px 0" width="250"\r\n            height="250">\r\n    <\/canvas>\r\n\r\n    <div style="display: inline-block;width: calc(100% - 500px);vertical-align: top">\r\n        <h3>WebGL Demo<\/h3>\r\n        <p>\r\n            This is a port of the JavaScript code in <a href="http://learningwebgl.com/blog/?p=1658" target="_blank">WebGL\r\n            Lesson 14 \u2013 specular highlights and loading a JSON model<\/a>, by Giles Thomas. slightly refactored, mostly\r\n            to remove the use of expando properties.\r\n        <\/p>\r\n        <p>\r\n            As with the original code, this code is licensed under a <a\r\n                href="http://creativecommons.org/licenses/by-sa/3.0/" target="_blank">\r\n            Creative Commons Attribution/Share-Alike license<\/a>.\r\n        <\/p>\r\n        <p>\r\n            <small>Acknowledgments: The galvanised pattern is a Creative Commons sample from <a class="small"\r\n                                                                                                href="https://www.arroway-textures.ch/"\r\n                                                                                                target="_blank">Arroway\r\n                Textures<\/a><\/small>\r\n            .\r\n        <\/p>\r\n\r\n        <div>\r\n            <span class="label label-primary">WebGL<\/span>\r\n            <span class="label label-primary">XmlHttpRequest<\/span>\r\n            <span class="label label-primary">JSON<\/span>\r\n            <span class="label label-primary">Image<\/span>\r\n            <span class="label label-primary">Typed Arrays<\/span>\r\n            <span class="label label-primary">requestAnimationFrame<\/span>\r\n        <\/div>\r\n    <\/div>\r\n<\/div>';
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lgwt_1jelement_1demo_1client_1html_1HtmlClientBundle_11default_11InlineClientBundleGenerator$12_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_39, 'HtmlClientBundle_default_InlineClientBundleGenerator/12', 121);
function gwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator$13_$ensureInjected__Lgwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator$13_2Z(this$static){
  if (!this$static.gwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator$13_injected) {
    this$static.gwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator$13_injected = true;
    com_google_gwt_dom_client_StyleInjector_$clinit__V();
    com_google_gwt_core_client_JsArrayString_$push__Lcom_google_gwt_core_client_JsArrayString_2Ljava_lang_String_2V(com_google_gwt_dom_client_StyleInjector_toInject, 'html{height:100%;}body{height:100%;font-family:"Segoe UI", "Tahoma", "Arial", "sans-serif";}*{font-size:14.5px;}#demo-listing{line-height:1.4;padding-top:100px;}#demo-listing a{display:block;}#demo-div{padding:0;}.container{width:100%;}.label{font-size:85%;}pre{margin-right:20px;font-size:14px;}pre *{font-size:14px;}.hljs{background-color:#f5f5f5;}');
    com_google_gwt_dom_client_StyleInjector_schedule__V();
    return true;
  }
  return false;
}

function gwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator$13_HtmlClientBundle_1default_1InlineClientBundleGenerator$13__Lgwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator_2V(){
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(122, 1, {}, gwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator$13_HtmlClientBundle_1default_1InlineClientBundleGenerator$13__Lgwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator_2V);
_.gwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator$13_injected = false;
var com_google_gwt_lang_ClassLiteralHolder_Lgwt_1jelement_1demo_1client_1html_1HtmlClientBundle_11default_11InlineClientBundleGenerator$13_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_39, 'HtmlClientBundle_default_InlineClientBundleGenerator/13', 122);
function gwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator$2_HtmlClientBundle_1default_1InlineClientBundleGenerator$2__Lgwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator_2V(){
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(113, 1, {}, gwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator$2_HtmlClientBundle_1default_1InlineClientBundleGenerator$2__Lgwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator_2V);
_.getText__Ljava_lang_String_2 = function gwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator$2_getText__Ljava_lang_String_2(){
  return '<canvas width="300" height="300" id="sun-canvas"><\/canvas>\r\n\r\n<div style="width:calc(100% - 630px);display: inline-block;vertical-align: top">\r\n\r\n    <h3>Canvas Demo<\/h3>\r\n\r\n    <p>This is a demo of the <a href="https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API" target="_blank">\r\n        2D Canvas API<\/a>. The demo on the left was taken from the Mozilla Developer Network\'s\r\n        <a href="https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Basic_animations" target="_blank">Basic\r\n            Animation<\/a> tutorial. Note that if this animation were to scale, you would not be able to see the earth,\r\n        much less the moon. See\r\n        <a href="http://www.rayfowler.org/blog/wp-content/uploads/size_of_earth_3.jpg" target="_blank">here<\/a> for the\r\n        real size ratio between the earth and the sun.<\/p>\r\n    <div>\r\n        <span class="label label-primary">2D Canvas<\/span>\r\n        <span class="label label-primary">Image<\/span>\r\n        <span class="label label-primary">requestAnimationFrame<\/span>\r\n        <span class="label label-primary">set/clearInterval<\/span>\r\n    <\/div>\r\n<\/div>\r\n\r\n<canvas width="200" height="200" id="clock-canvas"><\/canvas>\r\n\r\n<style>\r\n    #sun-canvas {\r\n        zoom: 0.7;\r\n        display: inline-block;\r\n        margin: 10px 20px 0 0;\r\n    }\r\n\r\n    #clock-canvas {\r\n        background: url("clock.png") no-repeat;\r\n        zoom: 0.6;\r\n        display: inline-block;\r\n        margin: 40px 10px 0 20px;\r\n        vertical-align: top;\r\n    }\r\n<\/style>';
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lgwt_1jelement_1demo_1client_1html_1HtmlClientBundle_11default_11InlineClientBundleGenerator$2_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_39, 'HtmlClientBundle_default_InlineClientBundleGenerator/2', 113);
function gwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator$3_HtmlClientBundle_1default_1InlineClientBundleGenerator$3__Lgwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator_2V(){
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(114, 1, {}, gwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator$3_HtmlClientBundle_1default_1InlineClientBundleGenerator$3__Lgwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator_2V);
_.getText__Ljava_lang_String_2 = function gwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator$3_getText__Ljava_lang_String_2(){
  return '<style>\r\n    div.clouds {\r\n        background: url("clouds.jpg") repeat;\r\n        height: 400px;\r\n        max-height: 200px;\r\n        width: 100%;\r\n        padding: 0;\r\n        will-change: transform;\r\n    }\r\n    div.ticker{\r\n        display: inline-block;\r\n        overflow: hidden;\r\n        width: calc(100% - 550px);\r\n        position: absolute;\r\n        left: 250px;\r\n        top: 150px;\r\n    }\r\n    div.ticker-inner{\r\n        white-space: nowrap;\r\n        font-size: 12pt;\r\n        font-weight: bold;\r\n        margin: 0 0 0 0;\r\n        will-change: margin;\r\n    }\r\n<\/style>\r\n\r\n<div class="clouds"><\/div>\r\n';
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lgwt_1jelement_1demo_1client_1html_1HtmlClientBundle_11default_11InlineClientBundleGenerator$3_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_39, 'HtmlClientBundle_default_InlineClientBundleGenerator/3', 114);
function gwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator$4_HtmlClientBundle_1default_1InlineClientBundleGenerator$4__Lgwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator_2V(){
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(115, 1, {}, gwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator$4_HtmlClientBundle_1default_1InlineClientBundleGenerator$4__Lgwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator_2V);
_.getText__Ljava_lang_String_2 = function gwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator$4_getText__Ljava_lang_String_2(){
  return '<div id="geolocation-demo">\r\n\r\n    <div id="map" style="width:250px;height: 250px;margin:20px;display: inline-block"><\/div>\r\n    <div style="display: inline-block; width: calc(100% - 500px); vertical-align: top">\r\n        <h3>Geolocation demo<\/h3>\r\n        <p>Everyone it seems has to have a Google Map demo. If everything went well, you should be seeing your\r\n            location on the map to the left, obtained with your consent through the Geolocation API.<\/p>\r\n        <p>The code to display the map was taken fron the Google Maps JavaScript API guide\r\n            <a href="https://developers.google.com/maps/documentation/javascript/adding-a-google-map"\r\n               target="_blank">Adding a Google Map with a Marker to Your Website<\/a>. Of note in the code\r\n            below is the implementation of the callback, whose name is specified in the URL used to load the script,\r\n            a common pattern for many Google JavaScript APIs.<\/p>\r\n        <p>Note that use of <code>JsObject<\/code> as property maps is for demonstration purposes only,\r\n            a production app would have POJOs exported via jsnterop to define the various property maps.\r\n        <\/p>\r\n        <div>\r\n            <span class="label label-primary">Geolocation<\/span>\r\n            <span class="label label-primary">Google Maps API<\/span>\r\n            <span class="label label-primary">JsObject<\/span>\r\n        <\/div>\r\n    <\/div>\r\n<\/div>';
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lgwt_1jelement_1demo_1client_1html_1HtmlClientBundle_11default_11InlineClientBundleGenerator$4_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_39, 'HtmlClientBundle_default_InlineClientBundleGenerator/4', 115);
function gwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator$7_HtmlClientBundle_1default_1InlineClientBundleGenerator$7__Lgwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator_2V(){
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(116, 1, {}, gwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator$7_HtmlClientBundle_1default_1InlineClientBundleGenerator$7__Lgwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator_2V);
_.getText__Ljava_lang_String_2 = function gwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator$7_getText__Ljava_lang_String_2(){
  return '<div style="width: calc(100% - 500px); vertical-align: top;margin-bottom: 20px">\r\n    <h3>Notification demo<\/h3>\r\n    <p>\r\n        If you grant permission to this website, you will see a notification only when you visit this page, as the\r\n        notification code is not running inside a background worker. This demo works on all modern browsers (IE 11\r\n        is not a modern browser), although the notifications may display differently on each browser.\r\n    <\/p>\r\n    <div>\r\n        <span class="label label-primary">Notification<\/span>\r\n        <span class="label label-primary">Promise<\/span>\r\n        <span class="label label-primary">Feature detection<\/span>\r\n    <\/div>\r\n<\/div>';
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lgwt_1jelement_1demo_1client_1html_1HtmlClientBundle_11default_11InlineClientBundleGenerator$7_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_39, 'HtmlClientBundle_default_InlineClientBundleGenerator/7', 116);
function gwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator$8_HtmlClientBundle_1default_1InlineClientBundleGenerator$8__Lgwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator_2V(){
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(117, 1, {}, gwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator$8_HtmlClientBundle_1default_1InlineClientBundleGenerator$8__Lgwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator_2V);
_.getText__Ljava_lang_String_2 = function gwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator$8_getText__Ljava_lang_String_2(){
  return '<style>\r\n    #demoContainer {\r\n        display: flex;\r\n        flex-direction: row;\r\n        height: 380px;\r\n    }\r\n\r\n    #timing {\r\n        width: 300px;\r\n        margin: 4px 0;\r\n    }\r\n\r\n    .two-columns {\r\n        display: flex;\r\n        flex-direction: row;\r\n        flex-wrap: wrap;\r\n    }\r\n\r\n    #timing div {\r\n        padding: 0 2px;\r\n    }\r\n\r\n    #timing div:nth-child(2n+1) {\r\n        width: 70%;\r\n    }\r\n\r\n    #timing div:nth-child(2n) {\r\n        width: 30%;\r\n        text-align: right;\r\n    }\r\n\r\n    .two-columns div:nth-child(2n) {\r\n        flex-grow: 1;\r\n    }\r\n\r\n    .two-columns.striped div:nth-child(4n-1), #timing div:nth-child(4n) {\r\n        background-color: #f0f0f0;\r\n    }\r\n\r\n    div.header {\r\n        background-color: #404040;\r\n        color: white;\r\n    }\r\n\r\n    #navigationInfo, #memoryInfo {\r\n        width: 300px;\r\n        display: inline-block;\r\n        vertical-align: top;\r\n        margin: 30px 10px;\r\n    }\r\n\r\n\r\n<\/style>\r\n\r\n<div id="demoContainer">\r\n    <div id="timing" class="two-columns striped">\r\n        <div class="header">Event<\/div>\r\n        <div class="header">Time elapsed<\/div>\r\n\r\n    <\/div>\r\n    <div style="width: calc(100% - 500px); vertical-align: top;margin-left: 30px">\r\n        <h3>Performance API Demo<\/h3>\r\n        <p>The Performance API is available on all modern browsers and IE 11. On Chrome it additionally\r\n            provides memory information. The performance timing display code was intentionally written to demonstrate\r\n            accessing properties through an object\'s property descriptors. This code was also intentionally written\r\n            using two methods not supported in IE 11 (<code>Object.entries<\/code> and\r\n            <code>Object.getOwnPropertyDescriptors<\/code>, to demonstrate two ways of creating polyfills with\r\n            gwt-jelement.\r\n        <\/p>\r\n        <div>\r\n            <span class="label label-primary">Performance API<\/span>\r\n            <span class="label label-primary">Property descriptors<\/span>\r\n            <span class="label label-primary">Polyfill<\/span>\r\n        <\/div>\r\n        <div id="navigationInfo">\r\n            <div class="header">Navigation Info<\/div>\r\n\r\n        <\/div>\r\n        <div id="memoryInfo">\r\n            <div class="header">Memory Info<\/div>\r\n        <\/div>\r\n    <\/div>\r\n<\/div>\r\n';
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lgwt_1jelement_1demo_1client_1html_1HtmlClientBundle_11default_11InlineClientBundleGenerator$8_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_39, 'HtmlClientBundle_default_InlineClientBundleGenerator/8', 117);
function gwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator$9_HtmlClientBundle_1default_1InlineClientBundleGenerator$9__Lgwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator_2V(){
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(118, 1, {}, gwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator$9_HtmlClientBundle_1default_1InlineClientBundleGenerator$9__Lgwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator_2V);
_.getText__Ljava_lang_String_2 = function gwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator$9_getText__Ljava_lang_String_2(){
  return '<h3>Speech Synthesis Demo<\/h3>\r\n<div style="max-width: calc(100% - 100px); margin-bottom: 20px">\r\n    <p>\r\n        This demo should work on the <a href="http://caniuse.com/speech-synthesis/embed/" target="_blank">\r\n        latest version of modern browsers<\/a>, although with different capabilities. Be sure to try out\r\n        the demo on Chrome and another browser like Edge or Firefox.\r\n    <\/p>\r\n    <p>\r\n        Note that there is a bug in the Chrome implementation of <code>SpeechSynthesis::cancel<\/code> which makes it\r\n        nearly useless\r\n        in clearing queued utterances. A better implementation would queue one untterance at a time, and use the\r\n        <code>onend<\/code> event of the <code>SpeechSynthesisUtterance<\/code> to queue the next one. As it is with\r\n        the current code, if you stop and start the demo by exiting before it is done, you will get utterances\r\n        interleaved with each other. The only cure is to restart the browser, reload will not have any effect.\r\n    <\/p>\r\n    <div>\r\n        <span class="label label-primary">Speech Synthesis<\/span>\r\n        <span class="label label-primary">Promise<\/span>\r\n        <span class="label label-primary">Feature detection<\/span>\r\n    <\/div>\r\n<\/div>';
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lgwt_1jelement_1demo_1client_1html_1HtmlClientBundle_11default_11InlineClientBundleGenerator$9_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_39, 'HtmlClientBundle_default_InlineClientBundleGenerator/9', 118);
function gwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator$getBatteryHtmlInitializer_$clinit__V(){
  gwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator$getBatteryHtmlInitializer_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  gwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator_getBatteryHtml = new gwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator$1_HtmlClientBundle_1default_1InlineClientBundleGenerator$1__Lgwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator_2V;
}

function gwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator$getCanvas2DHtmlInitializer_$clinit__V(){
  gwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator$getCanvas2DHtmlInitializer_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  gwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator_getCanvas2DHtml = new gwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator$2_HtmlClientBundle_1default_1InlineClientBundleGenerator$2__Lgwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator_2V;
}

function gwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator$getElementAnimateHtmlInitializer_$clinit__V(){
  gwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator$getElementAnimateHtmlInitializer_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  gwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator_getElementAnimateHtml = new gwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator$3_HtmlClientBundle_1default_1InlineClientBundleGenerator$3__Lgwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator_2V;
}

function gwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator$getGeoLocationHtmlInitializer_$clinit__V(){
  gwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator$getGeoLocationHtmlInitializer_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  gwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator_getGeoLocationHtml = new gwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator$4_HtmlClientBundle_1default_1InlineClientBundleGenerator$4__Lgwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator_2V;
}

function gwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator$getNotificationHtmlInitializer_$clinit__V(){
  gwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator$getNotificationHtmlInitializer_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  gwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator_getNotificationHtml = new gwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator$7_HtmlClientBundle_1default_1InlineClientBundleGenerator$7__Lgwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator_2V;
}

function gwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator$getPerformanceHtmlInitializer_$clinit__V(){
  gwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator$getPerformanceHtmlInitializer_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  gwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator_getPerformanceHtml = new gwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator$8_HtmlClientBundle_1default_1InlineClientBundleGenerator$8__Lgwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator_2V;
}

function gwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator$getSpeechSynthHtmlInitializer_$clinit__V(){
  gwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator$getSpeechSynthHtmlInitializer_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  gwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator_getSpeechSynthHtml = new gwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator$9_HtmlClientBundle_1default_1InlineClientBundleGenerator$9__Lgwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator_2V;
}

function gwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator$getStyleInitializer_$clinit__V(){
  gwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator$getStyleInitializer_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  gwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator_getStyle = new gwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator$13_HtmlClientBundle_1default_1InlineClientBundleGenerator$13__Lgwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator_2V;
}

function gwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator$getSvgHtmlInitializer_$clinit__V(){
  gwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator$getSvgHtmlInitializer_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  gwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator_getSvgHtml = new gwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator$10_HtmlClientBundle_1default_1InlineClientBundleGenerator$10__Lgwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator_2V;
}

function gwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator$getWebAudioHtmlInitializer_$clinit__V(){
  gwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator$getWebAudioHtmlInitializer_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  gwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator_getWebAudioHtml = new gwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator$11_HtmlClientBundle_1default_1InlineClientBundleGenerator$11__Lgwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator_2V;
}

function gwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator$getWebGlHtmlInitializer_$clinit__V(){
  gwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator$getWebGlHtmlInitializer_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  gwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator_getWebGlHtml = new gwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator$12_HtmlClientBundle_1default_1InlineClientBundleGenerator$12__Lgwt_jelement_demo_client_html_HtmlClientBundle_1default_1InlineClientBundleGenerator_2V;
}

function gwt_jelement_html_HTMLElement_$setOnLoad__Lgwt_jelement_html_HTMLElement_2Lgwt_jelement_events_EventHandlerNonNull_2V(this$static, onload_0){
  this$static.onload = onload_0;
}

function gwt_jelement_speech_SpeechSynthesis_$setOnVoiceschanged__Lgwt_jelement_speech_SpeechSynthesis_2Lgwt_jelement_events_EventHandlerNonNull_2V(this$static, onvoiceschanged){
  this$static.onvoiceschanged = onvoiceschanged;
}

function gwt_jelement_webaudio_AudioContextState_$clinit__V(){
  gwt_jelement_webaudio_AudioContextState_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  gwt_jelement_webaudio_AudioContextState_SUSPENDED = new gwt_jelement_webaudio_AudioContextState_AudioContextState__Ljava_lang_String_2ILjava_lang_String_2V('SUSPENDED', 0);
  gwt_jelement_webaudio_AudioContextState_RUNNING = new gwt_jelement_webaudio_AudioContextState_AudioContextState__Ljava_lang_String_2ILjava_lang_String_2V('RUNNING', 1);
  gwt_jelement_webaudio_AudioContextState_CLOSED = new gwt_jelement_webaudio_AudioContextState_AudioContextState__Ljava_lang_String_2ILjava_lang_String_2V('CLOSED', 2);
}

function gwt_jelement_webaudio_AudioContextState_AudioContextState__Ljava_lang_String_2ILjava_lang_String_2V(enum$name, enum$ordinal){
  java_lang_Enum_Enum__Ljava_lang_String_2IV.call(this, enum$name, enum$ordinal);
}

function gwt_jelement_webaudio_AudioContextState_of__Ljava_lang_String_2Lgwt_jelement_webaudio_AudioContextState_2(value_0){
  gwt_jelement_webaudio_AudioContextState_$clinit__V();
  switch (value_0) {
    case 'suspended':
      return gwt_jelement_webaudio_AudioContextState_SUSPENDED;
    case 'running':
      return gwt_jelement_webaudio_AudioContextState_RUNNING;
    case 'closed':
      return gwt_jelement_webaudio_AudioContextState_CLOSED;
    default:return null;
  }
}

function gwt_jelement_webaudio_AudioContextState_values___3Lgwt_jelement_webaudio_AudioContextState_2(){
  gwt_jelement_webaudio_AudioContextState_$clinit__V();
  return com_google_gwt_lang_Array_stampJavaTypeInfo__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_lang_Array_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(com_google_gwt_lang_ClassLiteralHolder_Lgwt_1jelement_1webaudio_1AudioContextState_12_1classLit, 1), $intern_15, 35, 0, [gwt_jelement_webaudio_AudioContextState_SUSPENDED, gwt_jelement_webaudio_AudioContextState_RUNNING, gwt_jelement_webaudio_AudioContextState_CLOSED]);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(35, 15, {35:1, 4:1, 20:1, 15:1}, gwt_jelement_webaudio_AudioContextState_AudioContextState__Ljava_lang_String_2ILjava_lang_String_2V);
var gwt_jelement_webaudio_AudioContextState_CLOSED, gwt_jelement_webaudio_AudioContextState_RUNNING, gwt_jelement_webaudio_AudioContextState_SUSPENDED;
var com_google_gwt_lang_ClassLiteralHolder_Lgwt_1jelement_1webaudio_1AudioContextState_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_40, 'AudioContextState', 35, gwt_jelement_webaudio_AudioContextState_values___3Lgwt_jelement_webaudio_AudioContextState_2);
function gwt_jelement_webaudio_OscillatorNode_$setType__Lgwt_jelement_webaudio_OscillatorNode_2Lgwt_jelement_webaudio_OscillatorType_2V(this$static, type_0){
  this$static.type = type_0.gwt_jelement_webaudio_OscillatorType_internalValue;
}

function gwt_jelement_webaudio_OscillatorType_$clinit__V(){
  gwt_jelement_webaudio_OscillatorType_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  gwt_jelement_webaudio_OscillatorType_SINE = new gwt_jelement_webaudio_OscillatorType_OscillatorType__Ljava_lang_String_2ILjava_lang_String_2V('SINE', 0, 'sine');
  gwt_jelement_webaudio_OscillatorType_SQUARE = new gwt_jelement_webaudio_OscillatorType_OscillatorType__Ljava_lang_String_2ILjava_lang_String_2V('SQUARE', 1, 'square');
  gwt_jelement_webaudio_OscillatorType_SAWTOOTH = new gwt_jelement_webaudio_OscillatorType_OscillatorType__Ljava_lang_String_2ILjava_lang_String_2V('SAWTOOTH', 2, 'sawtooth');
  gwt_jelement_webaudio_OscillatorType_TRIANGLE = new gwt_jelement_webaudio_OscillatorType_OscillatorType__Ljava_lang_String_2ILjava_lang_String_2V('TRIANGLE', 3, 'triangle');
  gwt_jelement_webaudio_OscillatorType_CUSTOM = new gwt_jelement_webaudio_OscillatorType_OscillatorType__Ljava_lang_String_2ILjava_lang_String_2V('CUSTOM', 4, 'custom');
}

function gwt_jelement_webaudio_OscillatorType_OscillatorType__Ljava_lang_String_2ILjava_lang_String_2V(enum$name, enum$ordinal, internalValue){
  java_lang_Enum_Enum__Ljava_lang_String_2IV.call(this, enum$name, enum$ordinal);
  this.gwt_jelement_webaudio_OscillatorType_internalValue = internalValue;
}

function gwt_jelement_webaudio_OscillatorType_values___3Lgwt_jelement_webaudio_OscillatorType_2(){
  gwt_jelement_webaudio_OscillatorType_$clinit__V();
  return com_google_gwt_lang_Array_stampJavaTypeInfo__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_lang_Array_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(com_google_gwt_lang_ClassLiteralHolder_Lgwt_1jelement_1webaudio_1OscillatorType_12_1classLit, 1), $intern_15, 26, 0, [gwt_jelement_webaudio_OscillatorType_SINE, gwt_jelement_webaudio_OscillatorType_SQUARE, gwt_jelement_webaudio_OscillatorType_SAWTOOTH, gwt_jelement_webaudio_OscillatorType_TRIANGLE, gwt_jelement_webaudio_OscillatorType_CUSTOM]);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(26, 15, {26:1, 4:1, 20:1, 15:1}, gwt_jelement_webaudio_OscillatorType_OscillatorType__Ljava_lang_String_2ILjava_lang_String_2V);
var gwt_jelement_webaudio_OscillatorType_CUSTOM, gwt_jelement_webaudio_OscillatorType_SAWTOOTH, gwt_jelement_webaudio_OscillatorType_SINE, gwt_jelement_webaudio_OscillatorType_SQUARE, gwt_jelement_webaudio_OscillatorType_TRIANGLE;
var com_google_gwt_lang_ClassLiteralHolder_Lgwt_1jelement_1webaudio_1OscillatorType_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_40, 'OscillatorType', 26, gwt_jelement_webaudio_OscillatorType_values___3Lgwt_jelement_webaudio_OscillatorType_2);
function gwt_jelement_xmlhttprequest_XMLHttpRequest_$setOnReadystatechange__Lgwt_jelement_xmlhttprequest_XMLHttpRequest_2Lgwt_jelement_events_EventHandlerNonNull_2V(this$static, onreadystatechange){
  this$static.onreadystatechange = onreadystatechange;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(55, 1, {71:1});
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1AbstractStringBuilder_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_12, 'AbstractStringBuilder', 55);
function java_lang_IndexOutOfBoundsException_IndexOutOfBoundsException__Ljava_lang_String_2V(message){
  java_lang_RuntimeException_RuntimeException__Ljava_lang_String_2V.call(this, message);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(37, 9, $intern_7, java_lang_IndexOutOfBoundsException_IndexOutOfBoundsException__Ljava_lang_String_2V);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1IndexOutOfBoundsException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_12, 'IndexOutOfBoundsException', 37);
function java_lang_ArrayIndexOutOfBoundsException_ArrayIndexOutOfBoundsException__Ljava_lang_String_2V(msg){
  java_lang_IndexOutOfBoundsException_IndexOutOfBoundsException__Ljava_lang_String_2V.call(this, msg);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(54, 37, $intern_7, java_lang_ArrayIndexOutOfBoundsException_ArrayIndexOutOfBoundsException__Ljava_lang_String_2V);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1ArrayIndexOutOfBoundsException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_12, 'ArrayIndexOutOfBoundsException', 54);
function java_lang_ArrayStoreException_ArrayStoreException__V(){
  java_lang_RuntimeException_RuntimeException__V.call(this);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(110, 9, $intern_7, java_lang_ArrayStoreException_ArrayStoreException__V);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1ArrayStoreException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_12, 'ArrayStoreException', 110);
function java_lang_IllegalArgumentException_IllegalArgumentException__Ljava_lang_String_2V(message){
  java_lang_RuntimeException_RuntimeException__Ljava_lang_String_2V.call(this, message);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(46, 9, $intern_7, java_lang_IllegalArgumentException_IllegalArgumentException__Ljava_lang_String_2V);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1IllegalArgumentException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_12, 'IllegalArgumentException', 46);
function java_lang_IllegalStateException_IllegalStateException__V(){
  java_lang_RuntimeException_RuntimeException__V.call(this);
}

function java_lang_IllegalStateException_IllegalStateException__Ljava_lang_String_2V(){
  java_lang_RuntimeException_RuntimeException__Ljava_lang_String_2V.call(this, "Stream already terminated, can't be modified or used");
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(57, 9, $intern_7, java_lang_IllegalStateException_IllegalStateException__V, java_lang_IllegalStateException_IllegalStateException__Ljava_lang_String_2V);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1IllegalStateException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_12, 'IllegalStateException', 57);
function java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2DLjava_lang_StringBuilder_2(this$static, x_0){
  this$static.java_lang_AbstractStringBuilder_string += x_0;
  return this$static;
}

function java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_String_2Ljava_lang_StringBuilder_2(this$static, x_0){
  this$static.java_lang_AbstractStringBuilder_string += '' + x_0;
  return this$static;
}

function java_lang_StringBuilder_StringBuilder__V(){
  this.java_lang_AbstractStringBuilder_string = '';
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(44, 55, {71:1}, java_lang_StringBuilder_StringBuilder__V);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1StringBuilder_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_12, 'StringBuilder', 44);
com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(295, 1, {});
function java_lang_UnsupportedOperationException_UnsupportedOperationException__V(){
  java_lang_RuntimeException_RuntimeException__V.call(this);
}

function java_lang_UnsupportedOperationException_UnsupportedOperationException__Ljava_lang_String_2V(message){
  java_lang_RuntimeException_RuntimeException__Ljava_lang_String_2V.call(this, message);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(28, 9, $intern_7, java_lang_UnsupportedOperationException_UnsupportedOperationException__V, java_lang_UnsupportedOperationException_UnsupportedOperationException__Ljava_lang_String_2V);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1UnsupportedOperationException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_12, 'UnsupportedOperationException', 28);
function java_util_AbstractCollection_$advanceToFind__Ljava_util_AbstractCollection_2Ljava_lang_Object_2ZZ(this$static, o, remove){
  var e, iter;
  for (iter = this$static.iterator__Ljava_util_Iterator_2(); iter.hasNext__Z();) {
    e = iter.next__Ljava_lang_Object_2();
    if (com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(o) === com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(e) || o != null && java_lang_Object_equals_1Ljava_1lang_1Object_1_1Z_1_1devirtual$__Ljava_lang_Object_2Ljava_lang_Object_2Z(o, e)) {
      remove && iter.remove__V();
      return true;
    }
  }
  return false;
}

function java_util_AbstractCollection_$containsAll__Ljava_util_AbstractCollection_2Ljava_util_Collection_2Z(this$static, c){
  var e, e$iterator;
  javaemul_internal_InternalPreconditions_checkCriticalNotNull__Ljava_lang_Object_2Ljava_lang_Object_2(c);
  for (e$iterator = c.iterator__Ljava_util_Iterator_2(); e$iterator.hasNext__Z();) {
    e = e$iterator.next__Ljava_lang_Object_2();
    if (!this$static.contains(e)) {
      return false;
    }
  }
  return true;
}

function java_util_AbstractCollection_$toArray__Ljava_util_AbstractCollection_2_3Ljava_lang_Object_2_3Ljava_lang_Object_2(this$static, a){
  var i, it, result, size_0;
  size_0 = this$static.size();
  a.length < size_0 && (a = (result = new Array(size_0) , com_google_gwt_lang_Array_stampJavaTypeInfo__Ljava_lang_Object_2_3Ljava_lang_Object_2_3Ljava_lang_Object_2(result, a)));
  it = this$static.iterator__Ljava_util_Iterator_2();
  for (i = 0; i < size_0; ++i) {
    com_google_gwt_lang_Array_setCheck__Ljava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2(a, i, it.next__Ljava_lang_Object_2());
  }
  a.length > size_0 && com_google_gwt_lang_Array_setCheck__Ljava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2(a, size_0, null);
  return a;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(181, 1, {27:1});
_.add = function java_util_AbstractCollection_add__Ljava_lang_Object_2Z(o){
  throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_lang_UnsupportedOperationException_UnsupportedOperationException__Ljava_lang_String_2V('Add not supported on this collection'));
}
;
_.addAll = function java_util_AbstractCollection_addAll__Ljava_util_Collection_2Z(c){
  var changed, e, e$iterator;
  javaemul_internal_InternalPreconditions_checkCriticalNotNull__Ljava_lang_Object_2Ljava_lang_Object_2(c);
  changed = false;
  for (e$iterator = c.iterator__Ljava_util_Iterator_2(); e$iterator.hasNext__Z();) {
    e = e$iterator.next__Ljava_lang_Object_2();
    changed = changed | this.add(e);
  }
  return changed;
}
;
_.clear = function java_util_AbstractCollection_clear__V(){
  var iter;
  for (iter = this.iterator__Ljava_util_Iterator_2(); iter.hasNext__Z();) {
    iter.next__Ljava_lang_Object_2();
    iter.remove__V();
  }
}
;
_.contains = function java_util_AbstractCollection_contains__Ljava_lang_Object_2Z(o){
  return java_util_AbstractCollection_$advanceToFind__Ljava_util_AbstractCollection_2Ljava_lang_Object_2ZZ(this, o, false);
}
;
_.containsAll = function java_util_AbstractCollection_containsAll__Ljava_util_Collection_2Z(c){
  return java_util_AbstractCollection_$containsAll__Ljava_util_AbstractCollection_2Ljava_util_Collection_2Z(this, c);
}
;
_.isEmpty = function java_util_AbstractCollection_isEmpty__Z(){
  return this.size() == 0;
}
;
_.remove = function java_util_AbstractCollection_remove__Ljava_lang_Object_2Z(o){
  return java_util_AbstractCollection_$advanceToFind__Ljava_util_AbstractCollection_2Ljava_lang_Object_2ZZ(this, o, true);
}
;
_.removeAll = function java_util_AbstractCollection_removeAll__Ljava_util_Collection_2Z(c){
  var changed, iter, o;
  javaemul_internal_InternalPreconditions_checkCriticalNotNull__Ljava_lang_Object_2Ljava_lang_Object_2(c);
  changed = false;
  for (iter = this.iterator__Ljava_util_Iterator_2(); iter.hasNext__Z();) {
    o = iter.next__Ljava_lang_Object_2();
    if (c.contains(o)) {
      iter.remove__V();
      changed = true;
    }
  }
  return changed;
}
;
_.retainAll = function java_util_AbstractCollection_retainAll__Ljava_util_Collection_2Z(c){
  var changed, iter, o;
  javaemul_internal_InternalPreconditions_checkCriticalNotNull__Ljava_lang_Object_2Ljava_lang_Object_2(c);
  changed = false;
  for (iter = this.iterator__Ljava_util_Iterator_2(); iter.hasNext__Z();) {
    o = iter.next__Ljava_lang_Object_2();
    if (!c.contains(o)) {
      iter.remove__V();
      changed = true;
    }
  }
  return changed;
}
;
_.toArray = function java_util_AbstractCollection_toArray___3Ljava_lang_Object_2(){
  return this.toArray___3Ljava_lang_Object_2_3Ljava_lang_Object_2(com_google_gwt_lang_Array_initUnidimensionalArray__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2IIILjava_lang_Object_2(com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Object_12_1classLit, $intern_15, 1, this.size(), 5, 1));
}
;
_.toArray___3Ljava_lang_Object_2_3Ljava_lang_Object_2 = function java_util_AbstractCollection_toArray___3Ljava_lang_Object_2_3Ljava_lang_Object_2(a){
  return java_util_AbstractCollection_$toArray__Ljava_util_AbstractCollection_2_3Ljava_lang_Object_2_3Ljava_lang_Object_2(this, a);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractCollection_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_41, 'AbstractCollection', 181);
function java_util_AbstractMap_$containsEntry__Ljava_util_AbstractMap_2Ljava_util_Map$Entry_2Z(this$static, entry){
  var key, ourValue, value_0;
  key = entry.getKey__Ljava_lang_Object_2();
  value_0 = entry.getValue__Ljava_lang_Object_2();
  ourValue = com_google_gwt_lang_Cast_instanceOfString__Ljava_lang_Object_2Z(key)?java_util_AbstractHashMap_$getStringValue__Ljava_util_AbstractHashMap_2Ljava_lang_String_2Ljava_lang_Object_2(this$static, key):java_util_AbstractMap_getEntryValueOrNull__Ljava_util_Map$Entry_2Ljava_lang_Object_2(java_util_InternalHashCodeMap_$getEntry__Ljava_util_InternalHashCodeMap_2Ljava_lang_Object_2Ljava_util_Map$Entry_2(this$static.java_util_AbstractHashMap_hashCodeMap, key));
  if (!(com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(value_0) === com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(ourValue) || value_0 != null && java_lang_Object_equals_1Ljava_1lang_1Object_1_1Z_1_1devirtual$__Ljava_lang_Object_2Ljava_lang_Object_2Z(value_0, ourValue))) {
    return false;
  }
  if (ourValue == null && !(com_google_gwt_lang_Cast_instanceOfString__Ljava_lang_Object_2Z(key)?java_util_AbstractHashMap_$hasStringValue__Ljava_util_AbstractHashMap_2Ljava_lang_String_2Z(this$static, key):!!java_util_InternalHashCodeMap_$getEntry__Ljava_util_InternalHashCodeMap_2Ljava_lang_Object_2Ljava_util_Map$Entry_2(this$static.java_util_AbstractHashMap_hashCodeMap, key))) {
    return false;
  }
  return true;
}

function java_util_AbstractMap_$implFindEntry__Ljava_util_AbstractMap_2Ljava_lang_Object_2ZLjava_util_Map$Entry_2(this$static, key, remove){
  var entry, iter, k;
  for (iter = new java_util_AbstractHashMap$EntrySetIterator_AbstractHashMap$EntrySetIterator__Ljava_util_AbstractHashMap_2V((new java_util_AbstractHashMap$EntrySet_AbstractHashMap$EntrySet__Ljava_util_AbstractHashMap_2V(this$static)).java_util_AbstractHashMap$EntrySet_this$01); iter.java_util_AbstractHashMap$EntrySetIterator_hasNext;) {
    entry = java_util_AbstractHashMap$EntrySetIterator_$next__Ljava_util_AbstractHashMap$EntrySetIterator_2Ljava_util_Map$Entry_2(iter);
    k = entry.getKey__Ljava_lang_Object_2();
    if (com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(key) === com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(k) || key != null && java_lang_Object_equals_1Ljava_1lang_1Object_1_1Z_1_1devirtual$__Ljava_lang_Object_2Ljava_lang_Object_2Z(key, k)) {
      if (remove) {
        entry = new java_util_AbstractMap$SimpleEntry_AbstractMap$SimpleEntry__Ljava_lang_Object_2Ljava_lang_Object_2V(entry.getKey__Ljava_lang_Object_2(), entry.getValue__Ljava_lang_Object_2());
        java_util_AbstractHashMap$EntrySetIterator_$remove__Ljava_util_AbstractHashMap$EntrySetIterator_2V(iter);
      }
      return entry;
    }
  }
  return null;
}

function java_util_AbstractMap_getEntryValueOrNull__Ljava_util_Map$Entry_2Ljava_lang_Object_2(entry){
  return !entry?null:entry.getValue__Ljava_lang_Object_2();
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(184, 1, {65:1});
_.getOrDefault = function java_util_AbstractMap_getOrDefault__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(key, defaultValue){
  var currentValue;
  return currentValue = com_google_gwt_lang_Cast_instanceOfString__Ljava_lang_Object_2Z(key)?java_util_AbstractHashMap_$getStringValue__Ljava_util_AbstractHashMap_2Ljava_lang_String_2Ljava_lang_Object_2(this, key):java_util_AbstractMap_getEntryValueOrNull__Ljava_util_Map$Entry_2Ljava_lang_Object_2(java_util_InternalHashCodeMap_$getEntry__Ljava_util_InternalHashCodeMap_2Ljava_lang_Object_2Ljava_util_Map$Entry_2(this.java_util_AbstractHashMap_hashCodeMap, key)) , currentValue == null && !(com_google_gwt_lang_Cast_instanceOfString__Ljava_lang_Object_2Z(key)?java_util_AbstractHashMap_$hasStringValue__Ljava_util_AbstractHashMap_2Ljava_lang_String_2Z(this, key):!!java_util_InternalHashCodeMap_$getEntry__Ljava_util_InternalHashCodeMap_2Ljava_lang_Object_2Ljava_util_Map$Entry_2(this.java_util_AbstractHashMap_hashCodeMap, key))?defaultValue:currentValue;
}
;
_.putIfAbsent = function java_util_AbstractMap_putIfAbsent__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(key, value_0){
  var currentValue;
  return currentValue = com_google_gwt_lang_Cast_instanceOfString__Ljava_lang_Object_2Z(key)?java_util_AbstractHashMap_$getStringValue__Ljava_util_AbstractHashMap_2Ljava_lang_String_2Ljava_lang_Object_2(this, key):java_util_AbstractMap_getEntryValueOrNull__Ljava_util_Map$Entry_2Ljava_lang_Object_2(java_util_InternalHashCodeMap_$getEntry__Ljava_util_InternalHashCodeMap_2Ljava_lang_Object_2Ljava_util_Map$Entry_2(this.java_util_AbstractHashMap_hashCodeMap, key)) , currentValue != null?currentValue:com_google_gwt_lang_Cast_instanceOfString__Ljava_lang_Object_2Z(key)?java_util_AbstractHashMap_$putStringValue__Ljava_util_AbstractHashMap_2Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(this, key, value_0):java_util_InternalHashCodeMap_$put__Ljava_util_InternalHashCodeMap_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(this.java_util_AbstractHashMap_hashCodeMap, key, value_0);
}
;
_.replace = function java_util_AbstractMap_replace__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(key, value_0){
  return (com_google_gwt_lang_Cast_instanceOfString__Ljava_lang_Object_2Z(key)?java_util_AbstractHashMap_$hasStringValue__Ljava_util_AbstractHashMap_2Ljava_lang_String_2Z(this, key):!!java_util_InternalHashCodeMap_$getEntry__Ljava_util_InternalHashCodeMap_2Ljava_lang_Object_2Ljava_util_Map$Entry_2(this.java_util_AbstractHashMap_hashCodeMap, key))?com_google_gwt_lang_Cast_instanceOfString__Ljava_lang_Object_2Z(key)?java_util_AbstractHashMap_$putStringValue__Ljava_util_AbstractHashMap_2Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(this, key, value_0):java_util_InternalHashCodeMap_$put__Ljava_util_InternalHashCodeMap_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(this.java_util_AbstractHashMap_hashCodeMap, key, value_0):null;
}
;
_.clear = function java_util_AbstractMap_clear__V(){
  java_util_AbstractHashMap_$reset__Ljava_util_AbstractHashMap_2V((new java_util_AbstractHashMap$EntrySet_AbstractHashMap$EntrySet__Ljava_util_AbstractHashMap_2V(this)).java_util_AbstractHashMap$EntrySet_this$01);
}
;
_.containsKey = function java_util_AbstractMap_containsKey__Ljava_lang_Object_2Z(key){
  return !!java_util_AbstractMap_$implFindEntry__Ljava_util_AbstractMap_2Ljava_lang_Object_2ZLjava_util_Map$Entry_2(this, key, false);
}
;
_.containsValue = function java_util_AbstractMap_containsValue__Ljava_lang_Object_2Z(value_0){
  var entry, entry$iterator, v;
  for (entry$iterator = new java_util_AbstractHashMap$EntrySetIterator_AbstractHashMap$EntrySetIterator__Ljava_util_AbstractHashMap_2V((new java_util_AbstractHashMap$EntrySet_AbstractHashMap$EntrySet__Ljava_util_AbstractHashMap_2V(this)).java_util_AbstractHashMap$EntrySet_this$01); entry$iterator.java_util_AbstractHashMap$EntrySetIterator_hasNext;) {
    entry = java_util_AbstractHashMap$EntrySetIterator_$next__Ljava_util_AbstractHashMap$EntrySetIterator_2Ljava_util_Map$Entry_2(entry$iterator);
    v = entry.getValue__Ljava_lang_Object_2();
    if (com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(value_0) === com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(v) || value_0 != null && java_lang_Object_equals_1Ljava_1lang_1Object_1_1Z_1_1devirtual$__Ljava_lang_Object_2Ljava_lang_Object_2Z(value_0, v)) {
      return true;
    }
  }
  return false;
}
;
_.equals__Ljava_lang_Object_2Z = function java_util_AbstractMap_equals__Ljava_lang_Object_2Z(obj){
  var entry, entry$iterator, otherMap;
  if (obj === this) {
    return true;
  }
  if (!com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(obj, 34)) {
    return false;
  }
  otherMap = com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(obj, 65);
  if (this.java_util_AbstractHashMap_hashCodeMap.java_util_InternalHashCodeMap_size + this.java_util_AbstractHashMap_stringMap.java_util_InternalStringMap_size != otherMap.java_util_AbstractHashMap_hashCodeMap.java_util_InternalHashCodeMap_size + otherMap.java_util_AbstractHashMap_stringMap.java_util_InternalStringMap_size) {
    return false;
  }
  for (entry$iterator = new java_util_AbstractHashMap$EntrySetIterator_AbstractHashMap$EntrySetIterator__Ljava_util_AbstractHashMap_2V((new java_util_AbstractHashMap$EntrySet_AbstractHashMap$EntrySet__Ljava_util_AbstractHashMap_2V(otherMap)).java_util_AbstractHashMap$EntrySet_this$01); entry$iterator.java_util_AbstractHashMap$EntrySetIterator_hasNext;) {
    entry = java_util_AbstractHashMap$EntrySetIterator_$next__Ljava_util_AbstractHashMap$EntrySetIterator_2Ljava_util_Map$Entry_2(entry$iterator);
    if (!java_util_AbstractMap_$containsEntry__Ljava_util_AbstractMap_2Ljava_util_Map$Entry_2Z(this, entry)) {
      return false;
    }
  }
  return true;
}
;
_.get = function java_util_AbstractMap_get__Ljava_lang_Object_2Ljava_lang_Object_2(key){
  return java_util_AbstractMap_getEntryValueOrNull__Ljava_util_Map$Entry_2Ljava_lang_Object_2(java_util_AbstractMap_$implFindEntry__Ljava_util_AbstractMap_2Ljava_lang_Object_2ZLjava_util_Map$Entry_2(this, key, false));
}
;
_.hashCode__I = function java_util_AbstractMap_hashCode__I(){
  return java_util_Collections_hashCode__Ljava_lang_Iterable_2I(new java_util_AbstractHashMap$EntrySet_AbstractHashMap$EntrySet__Ljava_util_AbstractHashMap_2V(this));
}
;
_.isEmpty = function java_util_AbstractMap_isEmpty__Z(){
  return this.java_util_AbstractHashMap_hashCodeMap.java_util_InternalHashCodeMap_size + this.java_util_AbstractHashMap_stringMap.java_util_InternalStringMap_size == 0;
}
;
_.keySet = function java_util_AbstractMap_keySet__Ljava_util_Set_2(){
  return new java_util_AbstractMap$1_AbstractMap$1__Ljava_util_AbstractMap_2V(this);
}
;
_.put = function java_util_AbstractMap_put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(key, value_0){
  throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_lang_UnsupportedOperationException_UnsupportedOperationException__Ljava_lang_String_2V('Put not supported on this map'));
}
;
_.putAll = function java_util_AbstractMap_putAll__Ljava_util_Map_2V(map_0){
  var e, e$iterator;
  javaemul_internal_InternalPreconditions_checkCriticalNotNull__Ljava_lang_Object_2Ljava_lang_Object_2(map_0);
  for (e$iterator = new java_util_AbstractHashMap$EntrySetIterator_AbstractHashMap$EntrySetIterator__Ljava_util_AbstractHashMap_2V((new java_util_AbstractHashMap$EntrySet_AbstractHashMap$EntrySet__Ljava_util_AbstractHashMap_2V(com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(map_0, 34))).java_util_AbstractHashMap$EntrySet_this$01); e$iterator.java_util_AbstractHashMap$EntrySetIterator_hasNext;) {
    e = java_util_AbstractHashMap$EntrySetIterator_$next__Ljava_util_AbstractHashMap$EntrySetIterator_2Ljava_util_Map$Entry_2(e$iterator);
    java_util_AbstractHashMap_$put__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(this, e.getKey__Ljava_lang_Object_2(), e.getValue__Ljava_lang_Object_2());
  }
}
;
_.remove = function java_util_AbstractMap_remove__Ljava_lang_Object_2Ljava_lang_Object_2(key){
  return java_util_AbstractMap_getEntryValueOrNull__Ljava_util_Map$Entry_2Ljava_lang_Object_2(java_util_AbstractMap_$implFindEntry__Ljava_util_AbstractMap_2Ljava_lang_Object_2ZLjava_util_Map$Entry_2(this, key, true));
}
;
_.size = function java_util_AbstractMap_size__I(){
  return java_util_AbstractHashMap_$size__Ljava_util_AbstractHashMap_2I((new java_util_AbstractHashMap$EntrySet_AbstractHashMap$EntrySet__Ljava_util_AbstractHashMap_2V(this)).java_util_AbstractHashMap$EntrySet_this$01);
}
;
_.values = function java_util_AbstractMap_values__Ljava_util_Collection_2(){
  return new java_util_AbstractMap$2_AbstractMap$2__Ljava_util_AbstractMap_2V(this);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractMap_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_41, 'AbstractMap', 184);
function java_util_AbstractHashMap_$containsKey__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Z(this$static, key){
  return com_google_gwt_lang_Cast_instanceOfString__Ljava_lang_Object_2Z(key)?java_util_AbstractHashMap_$hasStringValue__Ljava_util_AbstractHashMap_2Ljava_lang_String_2Z(this$static, key):!!java_util_InternalHashCodeMap_$getEntry__Ljava_util_InternalHashCodeMap_2Ljava_lang_Object_2Ljava_util_Map$Entry_2(this$static.java_util_AbstractHashMap_hashCodeMap, key);
}

function java_util_AbstractHashMap_$containsValue__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Z(this$static, value_0){
  return java_util_AbstractHashMap_$containsValue__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Ljava_lang_Iterable_2Z(value_0, this$static.java_util_AbstractHashMap_stringMap) || java_util_AbstractHashMap_$containsValue__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Ljava_lang_Iterable_2Z(value_0, this$static.java_util_AbstractHashMap_hashCodeMap);
}

function java_util_AbstractHashMap_$containsValue__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Ljava_lang_Iterable_2Z(value_0, entries){
  var entry, entry$iterator;
  for (entry$iterator = entries.iterator__Ljava_util_Iterator_2(); entry$iterator.hasNext__Z();) {
    entry = com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(entry$iterator.next__Ljava_lang_Object_2(), 12);
    if (java_util_HashMap_$equals__Ljava_util_HashMap_2Ljava_lang_Object_2Ljava_lang_Object_2Z(value_0, entry.getValue__Ljava_lang_Object_2())) {
      return true;
    }
  }
  return false;
}

function java_util_AbstractHashMap_$getStringValue__Ljava_util_AbstractHashMap_2Ljava_lang_String_2Ljava_lang_Object_2(this$static, key){
  return key == null?java_util_AbstractMap_getEntryValueOrNull__Ljava_util_Map$Entry_2Ljava_lang_Object_2(java_util_InternalHashCodeMap_$getEntry__Ljava_util_InternalHashCodeMap_2Ljava_lang_Object_2Ljava_util_Map$Entry_2(this$static.java_util_AbstractHashMap_hashCodeMap, null)):java_util_InternalStringMap_$get__Ljava_util_InternalStringMap_2Ljava_lang_String_2Ljava_lang_Object_2(this$static.java_util_AbstractHashMap_stringMap, key);
}

function java_util_AbstractHashMap_$hasStringValue__Ljava_util_AbstractHashMap_2Ljava_lang_String_2Z(this$static, key){
  return key == null?!!java_util_InternalHashCodeMap_$getEntry__Ljava_util_InternalHashCodeMap_2Ljava_lang_Object_2Ljava_util_Map$Entry_2(this$static.java_util_AbstractHashMap_hashCodeMap, null):java_util_InternalStringMap_$contains__Ljava_util_InternalStringMap_2Ljava_lang_String_2Z(this$static.java_util_AbstractHashMap_stringMap, key);
}

function java_util_AbstractHashMap_$put__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static, key, value_0){
  return com_google_gwt_lang_Cast_instanceOfString__Ljava_lang_Object_2Z(key)?java_util_AbstractHashMap_$putStringValue__Ljava_util_AbstractHashMap_2Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static, key, value_0):java_util_InternalHashCodeMap_$put__Ljava_util_InternalHashCodeMap_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static.java_util_AbstractHashMap_hashCodeMap, key, value_0);
}

function java_util_AbstractHashMap_$putStringValue__Ljava_util_AbstractHashMap_2Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static, key, value_0){
  return key == null?java_util_InternalHashCodeMap_$put__Ljava_util_InternalHashCodeMap_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static.java_util_AbstractHashMap_hashCodeMap, null, value_0):java_util_InternalStringMap_$put__Ljava_util_InternalStringMap_2Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static.java_util_AbstractHashMap_stringMap, key, value_0);
}

function java_util_AbstractHashMap_$remove__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static, key){
  return com_google_gwt_lang_Cast_instanceOfString__Ljava_lang_Object_2Z(key)?key == null?java_util_InternalHashCodeMap_$remove__Ljava_util_InternalHashCodeMap_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static.java_util_AbstractHashMap_hashCodeMap, null):java_util_InternalStringMap_$remove__Ljava_util_InternalStringMap_2Ljava_lang_String_2Ljava_lang_Object_2(this$static.java_util_AbstractHashMap_stringMap, key):java_util_InternalHashCodeMap_$remove__Ljava_util_InternalHashCodeMap_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static.java_util_AbstractHashMap_hashCodeMap, key);
}

function java_util_AbstractHashMap_$reset__Ljava_util_AbstractHashMap_2V(this$static){
  var modCount;
  this$static.java_util_AbstractHashMap_hashCodeMap = new java_util_InternalHashCodeMap_InternalHashCodeMap__Ljava_util_AbstractHashMap_2V(this$static);
  this$static.java_util_AbstractHashMap_stringMap = new java_util_InternalStringMap_InternalStringMap__Ljava_util_AbstractHashMap_2V(this$static);
  modCount = this$static[$intern_42] | 0;
  this$static[$intern_42] = modCount + 1;
}

function java_util_AbstractHashMap_$size__Ljava_util_AbstractHashMap_2I(this$static){
  return this$static.java_util_AbstractHashMap_hashCodeMap.java_util_InternalHashCodeMap_size + this$static.java_util_AbstractHashMap_stringMap.java_util_InternalStringMap_size;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(109, 184, {65:1});
_.clear = function java_util_AbstractHashMap_clear__V(){
  java_util_AbstractHashMap_$reset__Ljava_util_AbstractHashMap_2V(this);
}
;
_.containsKey = function java_util_AbstractHashMap_containsKey__Ljava_lang_Object_2Z(key){
  return java_util_AbstractHashMap_$containsKey__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Z(this, key);
}
;
_.containsValue = function java_util_AbstractHashMap_containsValue__Ljava_lang_Object_2Z(value_0){
  return java_util_AbstractHashMap_$containsValue__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Z(this, value_0);
}
;
_.get = function java_util_AbstractHashMap_get__Ljava_lang_Object_2Ljava_lang_Object_2(key){
  return com_google_gwt_lang_Cast_instanceOfString__Ljava_lang_Object_2Z(key)?java_util_AbstractHashMap_$getStringValue__Ljava_util_AbstractHashMap_2Ljava_lang_String_2Ljava_lang_Object_2(this, key):java_util_AbstractMap_getEntryValueOrNull__Ljava_util_Map$Entry_2Ljava_lang_Object_2(java_util_InternalHashCodeMap_$getEntry__Ljava_util_InternalHashCodeMap_2Ljava_lang_Object_2Ljava_util_Map$Entry_2(this.java_util_AbstractHashMap_hashCodeMap, key));
}
;
_.put = function java_util_AbstractHashMap_put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(key, value_0){
  return java_util_AbstractHashMap_$put__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(this, key, value_0);
}
;
_.remove = function java_util_AbstractHashMap_remove__Ljava_lang_Object_2Ljava_lang_Object_2(key){
  return java_util_AbstractHashMap_$remove__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2(this, key);
}
;
_.size = function java_util_AbstractHashMap_size__I(){
  return java_util_AbstractHashMap_$size__Ljava_util_AbstractHashMap_2I(this);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractHashMap_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_41, 'AbstractHashMap', 109);
com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(183, 181, $intern_43);
_.equals__Ljava_lang_Object_2Z = function java_util_AbstractSet_equals__Ljava_lang_Object_2Z(o){
  var other;
  if (o === this) {
    return true;
  }
  if (!com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(o, 49)) {
    return false;
  }
  other = com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(o, 49);
  if (other.size() != this.size()) {
    return false;
  }
  return java_util_AbstractCollection_$containsAll__Ljava_util_AbstractCollection_2Ljava_util_Collection_2Z(this, other);
}
;
_.hashCode__I = function java_util_AbstractSet_hashCode__I(){
  return java_util_Collections_hashCode__Ljava_lang_Iterable_2I(this);
}
;
_.removeAll = function java_util_AbstractSet_removeAll__Ljava_util_Collection_2Z(c){
  var iter, o, o$iterator, size_0;
  javaemul_internal_InternalPreconditions_checkCriticalNotNull__Ljava_lang_Object_2Ljava_lang_Object_2(c);
  size_0 = this.size();
  if (size_0 < c.size()) {
    for (iter = this.iterator__Ljava_util_Iterator_2(); iter.hasNext__Z();) {
      o = iter.next__Ljava_lang_Object_2();
      c.contains(o) && iter.remove__V();
    }
  }
   else {
    for (o$iterator = c.iterator__Ljava_util_Iterator_2(); o$iterator.hasNext__Z();) {
      o = o$iterator.next__Ljava_lang_Object_2();
      this.remove(o);
    }
  }
  return size_0 != this.size();
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractSet_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_41, 'AbstractSet', 183);
function java_util_AbstractHashMap$EntrySet_$contains__Ljava_util_AbstractHashMap$EntrySet_2Ljava_lang_Object_2Z(this$static, o){
  if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(o, 12)) {
    return java_util_AbstractMap_$containsEntry__Ljava_util_AbstractMap_2Ljava_util_Map$Entry_2Z(this$static.java_util_AbstractHashMap$EntrySet_this$01, com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(o, 12));
  }
  return false;
}

function java_util_AbstractHashMap$EntrySet_AbstractHashMap$EntrySet__Ljava_util_AbstractHashMap_2V(this$0){
  this.java_util_AbstractHashMap$EntrySet_this$01 = this$0;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(17, 183, $intern_43, java_util_AbstractHashMap$EntrySet_AbstractHashMap$EntrySet__Ljava_util_AbstractHashMap_2V);
_.clear = function java_util_AbstractHashMap$EntrySet_clear__V(){
  java_util_AbstractHashMap_$reset__Ljava_util_AbstractHashMap_2V(this.java_util_AbstractHashMap$EntrySet_this$01);
}
;
_.contains = function java_util_AbstractHashMap$EntrySet_contains__Ljava_lang_Object_2Z(o){
  return java_util_AbstractHashMap$EntrySet_$contains__Ljava_util_AbstractHashMap$EntrySet_2Ljava_lang_Object_2Z(this, o);
}
;
_.iterator__Ljava_util_Iterator_2 = function java_util_AbstractHashMap$EntrySet_iterator__Ljava_util_Iterator_2(){
  return new java_util_AbstractHashMap$EntrySetIterator_AbstractHashMap$EntrySetIterator__Ljava_util_AbstractHashMap_2V(this.java_util_AbstractHashMap$EntrySet_this$01);
}
;
_.remove = function java_util_AbstractHashMap$EntrySet_remove__Ljava_lang_Object_2Z(entry){
  var key;
  if (java_util_AbstractHashMap$EntrySet_$contains__Ljava_util_AbstractHashMap$EntrySet_2Ljava_lang_Object_2Z(this, entry)) {
    key = com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(entry, 12).getKey__Ljava_lang_Object_2();
    java_util_AbstractHashMap_$remove__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2(this.java_util_AbstractHashMap$EntrySet_this$01, key);
    return true;
  }
  return false;
}
;
_.size = function java_util_AbstractHashMap$EntrySet_size__I(){
  return java_util_AbstractHashMap_$size__Ljava_util_AbstractHashMap_2I(this.java_util_AbstractHashMap$EntrySet_this$01);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractHashMap$EntrySet_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_41, 'AbstractHashMap/EntrySet', 17);
function java_util_AbstractHashMap$EntrySetIterator_$computeHasNext__Ljava_util_AbstractHashMap$EntrySetIterator_2Z(this$static){
  if (this$static.java_util_AbstractHashMap$EntrySetIterator_current.hasNext__Z()) {
    return true;
  }
  if (this$static.java_util_AbstractHashMap$EntrySetIterator_current != this$static.java_util_AbstractHashMap$EntrySetIterator_stringMapEntries) {
    return false;
  }
  this$static.java_util_AbstractHashMap$EntrySetIterator_current = new java_util_InternalHashCodeMap$1_InternalHashCodeMap$1__Ljava_util_InternalHashCodeMap_2V(this$static.java_util_AbstractHashMap$EntrySetIterator_this$01.java_util_AbstractHashMap_hashCodeMap);
  return this$static.java_util_AbstractHashMap$EntrySetIterator_current.hasNext__Z();
}

function java_util_AbstractHashMap$EntrySetIterator_$next__Ljava_util_AbstractHashMap$EntrySetIterator_2Ljava_util_Map$Entry_2(this$static){
  var rv;
  java_util_ConcurrentModificationDetector_checkStructuralChange__Ljava_lang_Object_2Ljava_util_Iterator_2V(this$static.java_util_AbstractHashMap$EntrySetIterator_this$01, this$static);
  javaemul_internal_InternalPreconditions_checkCriticalElement__ZV(this$static.java_util_AbstractHashMap$EntrySetIterator_hasNext);
  this$static.java_util_AbstractHashMap$EntrySetIterator_last = this$static.java_util_AbstractHashMap$EntrySetIterator_current;
  rv = com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(this$static.java_util_AbstractHashMap$EntrySetIterator_current.next__Ljava_lang_Object_2(), 12);
  this$static.java_util_AbstractHashMap$EntrySetIterator_hasNext = java_util_AbstractHashMap$EntrySetIterator_$computeHasNext__Ljava_util_AbstractHashMap$EntrySetIterator_2Z(this$static);
  return rv;
}

function java_util_AbstractHashMap$EntrySetIterator_$remove__Ljava_util_AbstractHashMap$EntrySetIterator_2V(this$static){
  var java_util_ConcurrentModificationDetector_recordLastKnownStructure__Ljava_lang_Object_2Ljava_util_Iterator_2V_modCount_0;
  javaemul_internal_InternalPreconditions_checkCriticalState__ZV(!!this$static.java_util_AbstractHashMap$EntrySetIterator_last);
  java_util_ConcurrentModificationDetector_checkStructuralChange__Ljava_lang_Object_2Ljava_util_Iterator_2V(this$static.java_util_AbstractHashMap$EntrySetIterator_this$01, this$static);
  this$static.java_util_AbstractHashMap$EntrySetIterator_last.remove__V();
  this$static.java_util_AbstractHashMap$EntrySetIterator_last = null;
  this$static.java_util_AbstractHashMap$EntrySetIterator_hasNext = java_util_AbstractHashMap$EntrySetIterator_$computeHasNext__Ljava_util_AbstractHashMap$EntrySetIterator_2Z(this$static);
  java_util_ConcurrentModificationDetector_recordLastKnownStructure__Ljava_lang_Object_2Ljava_util_Iterator_2V_modCount_0 = this$static.java_util_AbstractHashMap$EntrySetIterator_this$01[$intern_42];
  this$static[$intern_42] = java_util_ConcurrentModificationDetector_recordLastKnownStructure__Ljava_lang_Object_2Ljava_util_Iterator_2V_modCount_0;
}

function java_util_AbstractHashMap$EntrySetIterator_AbstractHashMap$EntrySetIterator__Ljava_util_AbstractHashMap_2V(this$0){
  var modCount;
  this.java_util_AbstractHashMap$EntrySetIterator_this$01 = this$0;
  this.java_util_AbstractHashMap$EntrySetIterator_stringMapEntries = new java_util_InternalStringMap$1_InternalStringMap$1__Ljava_util_InternalStringMap_2V(this.java_util_AbstractHashMap$EntrySetIterator_this$01.java_util_AbstractHashMap_stringMap);
  this.java_util_AbstractHashMap$EntrySetIterator_current = this.java_util_AbstractHashMap$EntrySetIterator_stringMapEntries;
  this.java_util_AbstractHashMap$EntrySetIterator_hasNext = java_util_AbstractHashMap$EntrySetIterator_$computeHasNext__Ljava_util_AbstractHashMap$EntrySetIterator_2Z(this);
  modCount = this$0[$intern_42];
  this[$intern_42] = modCount;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(24, 1, {}, java_util_AbstractHashMap$EntrySetIterator_AbstractHashMap$EntrySetIterator__Ljava_util_AbstractHashMap_2V);
_.next__Ljava_lang_Object_2 = function java_util_AbstractHashMap$EntrySetIterator_next__Ljava_lang_Object_2(){
  return java_util_AbstractHashMap$EntrySetIterator_$next__Ljava_util_AbstractHashMap$EntrySetIterator_2Ljava_util_Map$Entry_2(this);
}
;
_.hasNext__Z = function java_util_AbstractHashMap$EntrySetIterator_hasNext__Z(){
  return this.java_util_AbstractHashMap$EntrySetIterator_hasNext;
}
;
_.remove__V = function java_util_AbstractHashMap$EntrySetIterator_remove__V(){
  java_util_AbstractHashMap$EntrySetIterator_$remove__Ljava_util_AbstractHashMap$EntrySetIterator_2V(this);
}
;
_.java_util_AbstractHashMap$EntrySetIterator_hasNext = false;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractHashMap$EntrySetIterator_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_41, 'AbstractHashMap/EntrySetIterator', 24);
com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(182, 181, $intern_44);
_.addAtIndex = function java_util_AbstractList_add__ILjava_lang_Object_2V(index_0, element){
  throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_lang_UnsupportedOperationException_UnsupportedOperationException__Ljava_lang_String_2V('Add not supported on this list'));
}
;
_.add = function java_util_AbstractList_add__Ljava_lang_Object_2Z(obj){
  this.addAtIndex(this.size(), obj);
  return true;
}
;
_.addAllAtIndex = function java_util_AbstractList_addAll__ILjava_util_Collection_2Z(index_0, c){
  var changed, e, e$iterator;
  javaemul_internal_InternalPreconditions_checkCriticalNotNull__Ljava_lang_Object_2Ljava_lang_Object_2(c);
  changed = false;
  for (e$iterator = c.iterator__Ljava_util_Iterator_2(); e$iterator.hasNext__Z();) {
    e = e$iterator.next__Ljava_lang_Object_2();
    this.addAtIndex(index_0++, e);
    changed = true;
  }
  return changed;
}
;
_.clear = function java_util_AbstractList_clear__V(){
  this.removeRange__IIV(0, this.size());
}
;
_.equals__Ljava_lang_Object_2Z = function java_util_AbstractList_equals__Ljava_lang_Object_2Z(o){
  var elem, elem$iterator, elemOther, iterOther, other;
  if (o === this) {
    return true;
  }
  if (!com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(o, 39)) {
    return false;
  }
  other = com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(o, 39);
  if (this.size() != other.size()) {
    return false;
  }
  iterOther = other.iterator__Ljava_util_Iterator_2();
  for (elem$iterator = this.iterator__Ljava_util_Iterator_2(); elem$iterator.hasNext__Z();) {
    elem = elem$iterator.next__Ljava_lang_Object_2();
    elemOther = iterOther.next__Ljava_lang_Object_2();
    if (!(com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(elem) === com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(elemOther) || elem != null && java_lang_Object_equals_1Ljava_1lang_1Object_1_1Z_1_1devirtual$__Ljava_lang_Object_2Ljava_lang_Object_2Z(elem, elemOther))) {
      return false;
    }
  }
  return true;
}
;
_.hashCode__I = function java_util_AbstractList_hashCode__I(){
  return java_util_Collections_hashCode__Ljava_util_List_2I(this);
}
;
_.indexOf = function java_util_AbstractList_indexOf__Ljava_lang_Object_2I(toFind){
  var i, n;
  for (i = 0 , n = this.size(); i < n; ++i) {
    if (java_util_Objects_equals__Ljava_lang_Object_2Ljava_lang_Object_2Z(toFind, this.getAtIndex(i))) {
      return i;
    }
  }
  return -1;
}
;
_.iterator__Ljava_util_Iterator_2 = function java_util_AbstractList_iterator__Ljava_util_Iterator_2(){
  return new java_util_AbstractList$IteratorImpl_AbstractList$IteratorImpl__Ljava_util_AbstractList_2V(this);
}
;
_.lastIndexOf = function java_util_AbstractList_lastIndexOf__Ljava_lang_Object_2I(toFind){
  var i;
  for (i = this.size() - 1; i > -1; --i) {
    if (java_util_Objects_equals__Ljava_lang_Object_2Ljava_lang_Object_2Z(toFind, this.getAtIndex(i))) {
      return i;
    }
  }
  return -1;
}
;
_.removeAtIndex = function java_util_AbstractList_remove__ILjava_lang_Object_2(index_0){
  throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_lang_UnsupportedOperationException_UnsupportedOperationException__Ljava_lang_String_2V('Remove not supported on this list'));
}
;
_.removeRange__IIV = function java_util_AbstractList_removeRange__IIV(fromIndex, endIndex){
  var i, iter;
  iter = new java_util_AbstractList$ListIteratorImpl_AbstractList$ListIteratorImpl__Ljava_util_AbstractList_2IV(this, fromIndex);
  for (i = fromIndex; i < endIndex; ++i) {
    javaemul_internal_InternalPreconditions_checkCriticalElement__ZV(iter.java_util_AbstractList$IteratorImpl_i < iter.java_util_AbstractList$IteratorImpl_this$01.size());
    iter.java_util_AbstractList$IteratorImpl_this$01.getAtIndex(iter.java_util_AbstractList$IteratorImpl_last = iter.java_util_AbstractList$IteratorImpl_i++);
    java_util_AbstractList$IteratorImpl_$remove__Ljava_util_AbstractList$IteratorImpl_2V(iter);
  }
}
;
_.setAtIndex = function java_util_AbstractList_set__ILjava_lang_Object_2Ljava_lang_Object_2(index_0, o){
  throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_lang_UnsupportedOperationException_UnsupportedOperationException__Ljava_lang_String_2V('Set not supported on this list'));
}
;
_.subList = function java_util_AbstractList_subList__IILjava_util_List_2(fromIndex, toIndex){
  return new java_util_AbstractList$SubList_AbstractList$SubList__Ljava_util_List_2IIV(this, fromIndex, toIndex);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractList_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_41, 'AbstractList', 182);
function java_util_AbstractList$IteratorImpl_$remove__Ljava_util_AbstractList$IteratorImpl_2V(this$static){
  javaemul_internal_InternalPreconditions_checkCriticalState__ZV(this$static.java_util_AbstractList$IteratorImpl_last != -1);
  this$static.java_util_AbstractList$IteratorImpl_this$01.removeAtIndex(this$static.java_util_AbstractList$IteratorImpl_last);
  this$static.java_util_AbstractList$IteratorImpl_i = this$static.java_util_AbstractList$IteratorImpl_last;
  this$static.java_util_AbstractList$IteratorImpl_last = -1;
}

function java_util_AbstractList$IteratorImpl_AbstractList$IteratorImpl__Ljava_util_AbstractList_2V(this$0){
  this.java_util_AbstractList$IteratorImpl_this$01 = this$0;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(58, 1, {}, java_util_AbstractList$IteratorImpl_AbstractList$IteratorImpl__Ljava_util_AbstractList_2V);
_.hasNext__Z = function java_util_AbstractList$IteratorImpl_hasNext__Z(){
  return this.java_util_AbstractList$IteratorImpl_i < this.java_util_AbstractList$IteratorImpl_this$01.size();
}
;
_.next__Ljava_lang_Object_2 = function java_util_AbstractList$IteratorImpl_next__Ljava_lang_Object_2(){
  return javaemul_internal_InternalPreconditions_checkCriticalElement__ZV(this.java_util_AbstractList$IteratorImpl_i < this.java_util_AbstractList$IteratorImpl_this$01.size()) , this.java_util_AbstractList$IteratorImpl_this$01.getAtIndex(this.java_util_AbstractList$IteratorImpl_last = this.java_util_AbstractList$IteratorImpl_i++);
}
;
_.remove__V = function java_util_AbstractList$IteratorImpl_remove__V(){
  java_util_AbstractList$IteratorImpl_$remove__Ljava_util_AbstractList$IteratorImpl_2V(this);
}
;
_.java_util_AbstractList$IteratorImpl_i = 0;
_.java_util_AbstractList$IteratorImpl_last = -1;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractList$IteratorImpl_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_41, 'AbstractList/IteratorImpl', 58);
function java_util_AbstractList$ListIteratorImpl_AbstractList$ListIteratorImpl__Ljava_util_AbstractList_2IV(this$0, start_0){
  java_util_AbstractList$IteratorImpl_AbstractList$IteratorImpl__Ljava_util_AbstractList_2V.call(this, this$0);
  javaemul_internal_InternalPreconditions_checkCriticalPositionIndex__IIV(start_0, this$0.size());
  this.java_util_AbstractList$IteratorImpl_i = start_0;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(102, 58, {}, java_util_AbstractList$ListIteratorImpl_AbstractList$ListIteratorImpl__Ljava_util_AbstractList_2IV);
_.remove__V = function java_util_AbstractList$ListIteratorImpl_remove__V(){
  java_util_AbstractList$IteratorImpl_$remove__Ljava_util_AbstractList$IteratorImpl_2V(this);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractList$ListIteratorImpl_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_41, 'AbstractList/ListIteratorImpl', 102);
function java_util_AbstractList$SubList_AbstractList$SubList__Ljava_util_List_2IIV(wrapped, fromIndex, toIndex){
  javaemul_internal_InternalPreconditions_checkCriticalPositionIndexes__IIIV(fromIndex, toIndex, wrapped.size());
  this.java_util_AbstractList$SubList_wrapped = wrapped;
  this.java_util_AbstractList$SubList_fromIndex = fromIndex;
  this.java_util_AbstractList$SubList_size = toIndex - fromIndex;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(103, 182, $intern_44, java_util_AbstractList$SubList_AbstractList$SubList__Ljava_util_List_2IIV);
_.addAtIndex = function java_util_AbstractList$SubList_add__ILjava_lang_Object_2V(index_0, element){
  javaemul_internal_InternalPreconditions_checkCriticalPositionIndex__IIV(index_0, this.java_util_AbstractList$SubList_size);
  this.java_util_AbstractList$SubList_wrapped.addAtIndex(this.java_util_AbstractList$SubList_fromIndex + index_0, element);
  ++this.java_util_AbstractList$SubList_size;
}
;
_.getAtIndex = function java_util_AbstractList$SubList_get__ILjava_lang_Object_2(index_0){
  javaemul_internal_InternalPreconditions_checkCriticalElementIndex__IIV(index_0, this.java_util_AbstractList$SubList_size);
  return this.java_util_AbstractList$SubList_wrapped.getAtIndex(this.java_util_AbstractList$SubList_fromIndex + index_0);
}
;
_.removeAtIndex = function java_util_AbstractList$SubList_remove__ILjava_lang_Object_2(index_0){
  var result;
  javaemul_internal_InternalPreconditions_checkCriticalElementIndex__IIV(index_0, this.java_util_AbstractList$SubList_size);
  result = this.java_util_AbstractList$SubList_wrapped.removeAtIndex(this.java_util_AbstractList$SubList_fromIndex + index_0);
  --this.java_util_AbstractList$SubList_size;
  return result;
}
;
_.setAtIndex = function java_util_AbstractList$SubList_set__ILjava_lang_Object_2Ljava_lang_Object_2(index_0, element){
  javaemul_internal_InternalPreconditions_checkCriticalElementIndex__IIV(index_0, this.java_util_AbstractList$SubList_size);
  return this.java_util_AbstractList$SubList_wrapped.setAtIndex(this.java_util_AbstractList$SubList_fromIndex + index_0, element);
}
;
_.size = function java_util_AbstractList$SubList_size__I(){
  return this.java_util_AbstractList$SubList_size;
}
;
_.java_util_AbstractList$SubList_fromIndex = 0;
_.java_util_AbstractList$SubList_size = 0;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractList$SubList_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_41, 'AbstractList/SubList', 103);
function java_util_AbstractMap$1_AbstractMap$1__Ljava_util_AbstractMap_2V(this$0){
  this.java_util_AbstractMap$1_this$01 = this$0;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(105, 183, $intern_43, java_util_AbstractMap$1_AbstractMap$1__Ljava_util_AbstractMap_2V);
_.clear = function java_util_AbstractMap$1_clear__V(){
  java_util_AbstractHashMap_$reset__Ljava_util_AbstractHashMap_2V(this.java_util_AbstractMap$1_this$01);
}
;
_.contains = function java_util_AbstractMap$1_contains__Ljava_lang_Object_2Z(key){
  return java_util_AbstractHashMap_$containsKey__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Z(this.java_util_AbstractMap$1_this$01, key);
}
;
_.iterator__Ljava_util_Iterator_2 = function java_util_AbstractMap$1_iterator__Ljava_util_Iterator_2(){
  var outerIter;
  outerIter = new java_util_AbstractHashMap$EntrySetIterator_AbstractHashMap$EntrySetIterator__Ljava_util_AbstractHashMap_2V((new java_util_AbstractHashMap$EntrySet_AbstractHashMap$EntrySet__Ljava_util_AbstractHashMap_2V(this.java_util_AbstractMap$1_this$01)).java_util_AbstractHashMap$EntrySet_this$01);
  return new java_util_AbstractMap$1$1_AbstractMap$1$1__Ljava_util_AbstractMap$1_2V(outerIter);
}
;
_.remove = function java_util_AbstractMap$1_remove__Ljava_lang_Object_2Z(key){
  if (java_util_AbstractHashMap_$containsKey__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Z(this.java_util_AbstractMap$1_this$01, key)) {
    java_util_AbstractHashMap_$remove__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2(this.java_util_AbstractMap$1_this$01, key);
    return true;
  }
  return false;
}
;
_.size = function java_util_AbstractMap$1_size__I(){
  return java_util_AbstractHashMap_$size__Ljava_util_AbstractHashMap_2I(this.java_util_AbstractMap$1_this$01);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractMap$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_41, 'AbstractMap/1', 105);
function java_util_AbstractMap$1$1_AbstractMap$1$1__Ljava_util_AbstractMap$1_2V(val$outerIter){
  this.java_util_AbstractMap$1$1_val$outerIter2 = val$outerIter;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(106, 1, {}, java_util_AbstractMap$1$1_AbstractMap$1$1__Ljava_util_AbstractMap$1_2V);
_.hasNext__Z = function java_util_AbstractMap$1$1_hasNext__Z(){
  return this.java_util_AbstractMap$1$1_val$outerIter2.java_util_AbstractHashMap$EntrySetIterator_hasNext;
}
;
_.next__Ljava_lang_Object_2 = function java_util_AbstractMap$1$1_next__Ljava_lang_Object_2(){
  var entry;
  entry = java_util_AbstractHashMap$EntrySetIterator_$next__Ljava_util_AbstractHashMap$EntrySetIterator_2Ljava_util_Map$Entry_2(this.java_util_AbstractMap$1$1_val$outerIter2);
  return entry.getKey__Ljava_lang_Object_2();
}
;
_.remove__V = function java_util_AbstractMap$1$1_remove__V(){
  java_util_AbstractHashMap$EntrySetIterator_$remove__Ljava_util_AbstractHashMap$EntrySetIterator_2V(this.java_util_AbstractMap$1$1_val$outerIter2);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractMap$1$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_41, 'AbstractMap/1/1', 106);
function java_util_AbstractMap$2_AbstractMap$2__Ljava_util_AbstractMap_2V(this$0){
  this.java_util_AbstractMap$2_this$01 = this$0;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(107, 181, {27:1}, java_util_AbstractMap$2_AbstractMap$2__Ljava_util_AbstractMap_2V);
_.clear = function java_util_AbstractMap$2_clear__V(){
  java_util_AbstractHashMap_$reset__Ljava_util_AbstractHashMap_2V(this.java_util_AbstractMap$2_this$01);
}
;
_.contains = function java_util_AbstractMap$2_contains__Ljava_lang_Object_2Z(value_0){
  return java_util_AbstractHashMap_$containsValue__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Z(this.java_util_AbstractMap$2_this$01, value_0);
}
;
_.iterator__Ljava_util_Iterator_2 = function java_util_AbstractMap$2_iterator__Ljava_util_Iterator_2(){
  var outerIter;
  outerIter = new java_util_AbstractHashMap$EntrySetIterator_AbstractHashMap$EntrySetIterator__Ljava_util_AbstractHashMap_2V((new java_util_AbstractHashMap$EntrySet_AbstractHashMap$EntrySet__Ljava_util_AbstractHashMap_2V(this.java_util_AbstractMap$2_this$01)).java_util_AbstractHashMap$EntrySet_this$01);
  return new java_util_AbstractMap$2$1_AbstractMap$2$1__Ljava_util_AbstractMap$2_2V(outerIter);
}
;
_.size = function java_util_AbstractMap$2_size__I(){
  return java_util_AbstractHashMap_$size__Ljava_util_AbstractHashMap_2I(this.java_util_AbstractMap$2_this$01);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractMap$2_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_41, 'AbstractMap/2', 107);
function java_util_AbstractMap$2$1_AbstractMap$2$1__Ljava_util_AbstractMap$2_2V(val$outerIter){
  this.java_util_AbstractMap$2$1_val$outerIter2 = val$outerIter;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(108, 1, {}, java_util_AbstractMap$2$1_AbstractMap$2$1__Ljava_util_AbstractMap$2_2V);
_.hasNext__Z = function java_util_AbstractMap$2$1_hasNext__Z(){
  return this.java_util_AbstractMap$2$1_val$outerIter2.java_util_AbstractHashMap$EntrySetIterator_hasNext;
}
;
_.next__Ljava_lang_Object_2 = function java_util_AbstractMap$2$1_next__Ljava_lang_Object_2(){
  var entry;
  entry = java_util_AbstractHashMap$EntrySetIterator_$next__Ljava_util_AbstractHashMap$EntrySetIterator_2Ljava_util_Map$Entry_2(this.java_util_AbstractMap$2$1_val$outerIter2);
  return entry.getValue__Ljava_lang_Object_2();
}
;
_.remove__V = function java_util_AbstractMap$2$1_remove__V(){
  java_util_AbstractHashMap$EntrySetIterator_$remove__Ljava_util_AbstractHashMap$EntrySetIterator_2V(this.java_util_AbstractMap$2$1_val$outerIter2);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractMap$2$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_41, 'AbstractMap/2/1', 108);
com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(104, 1, $intern_45);
_.equals__Ljava_lang_Object_2Z = function java_util_AbstractMap$AbstractEntry_equals__Ljava_lang_Object_2Z(other){
  var entry;
  if (!com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(other, 12)) {
    return false;
  }
  entry = com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(other, 12);
  return java_util_Objects_equals__Ljava_lang_Object_2Ljava_lang_Object_2Z(this.java_util_AbstractMap$AbstractEntry_key, entry.getKey__Ljava_lang_Object_2()) && java_util_Objects_equals__Ljava_lang_Object_2Ljava_lang_Object_2Z(this.java_util_AbstractMap$AbstractEntry_value, entry.getValue__Ljava_lang_Object_2());
}
;
_.getKey__Ljava_lang_Object_2 = function java_util_AbstractMap$AbstractEntry_getKey__Ljava_lang_Object_2(){
  return this.java_util_AbstractMap$AbstractEntry_key;
}
;
_.getValue__Ljava_lang_Object_2 = function java_util_AbstractMap$AbstractEntry_getValue__Ljava_lang_Object_2(){
  return this.java_util_AbstractMap$AbstractEntry_value;
}
;
_.hashCode__I = function java_util_AbstractMap$AbstractEntry_hashCode__I(){
  return java_util_Objects_hashCode__Ljava_lang_Object_2I(this.java_util_AbstractMap$AbstractEntry_key) ^ java_util_Objects_hashCode__Ljava_lang_Object_2I(this.java_util_AbstractMap$AbstractEntry_value);
}
;
_.setValue__Ljava_lang_Object_2Ljava_lang_Object_2 = function java_util_AbstractMap$AbstractEntry_setValue__Ljava_lang_Object_2Ljava_lang_Object_2(value_0){
  var oldValue;
  oldValue = this.java_util_AbstractMap$AbstractEntry_value;
  this.java_util_AbstractMap$AbstractEntry_value = value_0;
  return oldValue;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractMap$AbstractEntry_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_41, 'AbstractMap/AbstractEntry', 104);
function java_util_AbstractMap$SimpleEntry_AbstractMap$SimpleEntry__Ljava_lang_Object_2Ljava_lang_Object_2V(key, value_0){
  this.java_util_AbstractMap$AbstractEntry_key = key;
  this.java_util_AbstractMap$AbstractEntry_value = value_0;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(59, 104, $intern_45, java_util_AbstractMap$SimpleEntry_AbstractMap$SimpleEntry__Ljava_lang_Object_2Ljava_lang_Object_2V);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractMap$SimpleEntry_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_41, 'AbstractMap/SimpleEntry', 59);
com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(185, 1, $intern_45);
_.equals__Ljava_lang_Object_2Z = function java_util_AbstractMapEntry_equals__Ljava_lang_Object_2Z(other){
  var entry;
  if (!com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(other, 12)) {
    return false;
  }
  entry = com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(other, 12);
  return java_util_Objects_equals__Ljava_lang_Object_2Ljava_lang_Object_2Z(this.java_util_InternalStringMap$2_val$entry2.value[0], entry.getKey__Ljava_lang_Object_2()) && java_util_Objects_equals__Ljava_lang_Object_2Ljava_lang_Object_2Z(java_util_InternalStringMap$2_$getValue__Ljava_util_InternalStringMap$2_2Ljava_lang_Object_2(this), entry.getValue__Ljava_lang_Object_2());
}
;
_.hashCode__I = function java_util_AbstractMapEntry_hashCode__I(){
  return java_util_Objects_hashCode__Ljava_lang_Object_2I(this.java_util_InternalStringMap$2_val$entry2.value[0]) ^ java_util_Objects_hashCode__Ljava_lang_Object_2I(java_util_InternalStringMap$2_$getValue__Ljava_util_InternalStringMap$2_2Ljava_lang_Object_2(this));
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractMapEntry_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_41, 'AbstractMapEntry', 185);
function java_util_ArrayList_$$init__Ljava_util_ArrayList_2V(this$static){
  this$static.java_util_ArrayList_array = com_google_gwt_lang_Array_initUnidimensionalArray__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2IIILjava_lang_Object_2(com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Object_12_1classLit, $intern_15, 1, 0, 5, 1);
}

function java_util_ArrayList_$add__Ljava_util_ArrayList_2ILjava_lang_Object_2V(this$static, index_0, o){
  javaemul_internal_InternalPreconditions_checkCriticalPositionIndex__IIV(index_0, this$static.java_util_ArrayList_array.length);
  javaemul_internal_ArrayHelper_insertTo__Ljava_lang_Object_2ILjava_lang_Object_2V(this$static.java_util_ArrayList_array, index_0, o);
}

function java_util_ArrayList_$add__Ljava_util_ArrayList_2Ljava_lang_Object_2Z(this$static, o){
  this$static.java_util_ArrayList_array[this$static.java_util_ArrayList_array.length] = o;
  return true;
}

function java_util_ArrayList_$forEach__Ljava_util_ArrayList_2Ljava_util_function_Consumer_2V(this$static, consumer){
  var e, e$array, e$index, e$max;
  javaemul_internal_InternalPreconditions_checkCriticalNotNull__Ljava_lang_Object_2Ljava_lang_Object_2(consumer);
  for (e$array = this$static.java_util_ArrayList_array , e$index = 0 , e$max = e$array.length; e$index < e$max; ++e$index) {
    e = e$array[e$index];
    consumer.accept__Ljava_lang_Object_2V(e);
  }
}

function java_util_ArrayList_$get__Ljava_util_ArrayList_2ILjava_lang_Object_2(this$static, index_0){
  javaemul_internal_InternalPreconditions_checkCriticalElementIndex__IIV(index_0, this$static.java_util_ArrayList_array.length);
  return this$static.java_util_ArrayList_array[index_0];
}

function java_util_ArrayList_$indexOf__Ljava_util_ArrayList_2Ljava_lang_Object_2II(this$static, o, index_0){
  for (; index_0 < this$static.java_util_ArrayList_array.length; ++index_0) {
    if (java_util_Objects_equals__Ljava_lang_Object_2Ljava_lang_Object_2Z(o, this$static.java_util_ArrayList_array[index_0])) {
      return index_0;
    }
  }
  return -1;
}

function java_util_ArrayList_$lastIndexOf__Ljava_util_ArrayList_2Ljava_lang_Object_2II(this$static, o, index_0){
  for (; index_0 >= 0; --index_0) {
    if (java_util_Objects_equals__Ljava_lang_Object_2Ljava_lang_Object_2Z(o, this$static.java_util_ArrayList_array[index_0])) {
      return index_0;
    }
  }
  return -1;
}

function java_util_ArrayList_$remove__Ljava_util_ArrayList_2ILjava_lang_Object_2(this$static, index_0){
  var previous;
  previous = (javaemul_internal_InternalPreconditions_checkCriticalElementIndex__IIV(index_0, this$static.java_util_ArrayList_array.length) , this$static.java_util_ArrayList_array[index_0]);
  javaemul_internal_ArrayHelper_removeFrom__Ljava_lang_Object_2IIV(this$static.java_util_ArrayList_array, index_0, 1);
  return previous;
}

function java_util_ArrayList_$sort__Ljava_util_ArrayList_2Ljava_util_Comparator_2V(this$static, c){
  java_util_Arrays_sort___3Ljava_lang_Object_2IILjava_util_Comparator_2V(this$static.java_util_ArrayList_array, this$static.java_util_ArrayList_array.length, c);
}

function java_util_ArrayList_ArrayList__V(){
  java_util_ArrayList_$$init__Ljava_util_ArrayList_2V(this);
}

function java_util_ArrayList_ArrayList__Ljava_util_Collection_2V(c){
  java_util_ArrayList_$$init__Ljava_util_ArrayList_2V(this);
  javaemul_internal_ArrayHelper_insertTo__Ljava_lang_Object_2I_3Ljava_lang_Object_2V(this.java_util_ArrayList_array, 0, java_util_AbstractCollection_$toArray__Ljava_util_AbstractCollection_2_3Ljava_lang_Object_2_3Ljava_lang_Object_2(c, com_google_gwt_lang_Array_initUnidimensionalArray__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2IIILjava_lang_Object_2(com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Object_12_1classLit, $intern_15, 1, java_util_AbstractHashMap_$size__Ljava_util_AbstractHashMap_2I(c.java_util_AbstractHashMap$EntrySet_this$01), 5, 1)));
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(25, 182, {4:1, 27:1, 39:1}, java_util_ArrayList_ArrayList__V, java_util_ArrayList_ArrayList__Ljava_util_Collection_2V);
_.addAtIndex = function java_util_ArrayList_add__ILjava_lang_Object_2V(index_0, o){
  java_util_ArrayList_$add__Ljava_util_ArrayList_2ILjava_lang_Object_2V(this, index_0, o);
}
;
_.add = function java_util_ArrayList_add__Ljava_lang_Object_2Z(o){
  return java_util_ArrayList_$add__Ljava_util_ArrayList_2Ljava_lang_Object_2Z(this, o);
}
;
_.addAllAtIndex = function java_util_ArrayList_addAll__ILjava_util_Collection_2Z(index_0, c){
  var cArray, len;
  javaemul_internal_InternalPreconditions_checkCriticalPositionIndex__IIV(index_0, this.java_util_ArrayList_array.length);
  cArray = c.toArray();
  len = cArray.length;
  if (len == 0) {
    return false;
  }
  javaemul_internal_ArrayHelper_insertTo__Ljava_lang_Object_2I_3Ljava_lang_Object_2V(this.java_util_ArrayList_array, index_0, cArray);
  return true;
}
;
_.addAll = function java_util_ArrayList_addAll__Ljava_util_Collection_2Z(c){
  var cArray, len;
  cArray = c.toArray();
  len = cArray.length;
  if (len == 0) {
    return false;
  }
  javaemul_internal_ArrayHelper_insertTo__Ljava_lang_Object_2I_3Ljava_lang_Object_2V(this.java_util_ArrayList_array, this.java_util_ArrayList_array.length, cArray);
  return true;
}
;
_.clear = function java_util_ArrayList_clear__V(){
  this.java_util_ArrayList_array = com_google_gwt_lang_Array_initUnidimensionalArray__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2IIILjava_lang_Object_2(com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Object_12_1classLit, $intern_15, 1, 0, 5, 1);
}
;
_.contains = function java_util_ArrayList_contains__Ljava_lang_Object_2Z(o){
  return java_util_ArrayList_$indexOf__Ljava_util_ArrayList_2Ljava_lang_Object_2II(this, o, 0) != -1;
}
;
_.getAtIndex = function java_util_ArrayList_get__ILjava_lang_Object_2(index_0){
  return java_util_ArrayList_$get__Ljava_util_ArrayList_2ILjava_lang_Object_2(this, index_0);
}
;
_.indexOf = function java_util_ArrayList_indexOf__Ljava_lang_Object_2I(o){
  return java_util_ArrayList_$indexOf__Ljava_util_ArrayList_2Ljava_lang_Object_2II(this, o, 0);
}
;
_.isEmpty = function java_util_ArrayList_isEmpty__Z(){
  return this.java_util_ArrayList_array.length == 0;
}
;
_.iterator__Ljava_util_Iterator_2 = function java_util_ArrayList_iterator__Ljava_util_Iterator_2(){
  return new java_util_ArrayList$1_ArrayList$1__Ljava_util_ArrayList_2V(this);
}
;
_.lastIndexOf = function java_util_ArrayList_lastIndexOf__Ljava_lang_Object_2I(o){
  return java_util_ArrayList_$lastIndexOf__Ljava_util_ArrayList_2Ljava_lang_Object_2II(this, o, this.java_util_ArrayList_array.length - 1);
}
;
_.removeAtIndex = function java_util_ArrayList_remove__ILjava_lang_Object_2(index_0){
  return java_util_ArrayList_$remove__Ljava_util_ArrayList_2ILjava_lang_Object_2(this, index_0);
}
;
_.remove = function java_util_ArrayList_remove__Ljava_lang_Object_2Z(o){
  var i;
  i = java_util_ArrayList_$indexOf__Ljava_util_ArrayList_2Ljava_lang_Object_2II(this, o, 0);
  if (i == -1) {
    return false;
  }
  javaemul_internal_InternalPreconditions_checkCriticalElementIndex__IIV(i, this.java_util_ArrayList_array.length);
  javaemul_internal_ArrayHelper_removeFrom__Ljava_lang_Object_2IIV(this.java_util_ArrayList_array, i, 1);
  return true;
}
;
_.removeRange__IIV = function java_util_ArrayList_removeRange__IIV(fromIndex, endIndex){
  var count;
  javaemul_internal_InternalPreconditions_checkCriticalPositionIndexes__IIIV(fromIndex, endIndex, this.java_util_ArrayList_array.length);
  count = endIndex - fromIndex;
  javaemul_internal_ArrayHelper_removeFrom__Ljava_lang_Object_2IIV(this.java_util_ArrayList_array, fromIndex, count);
}
;
_.setAtIndex = function java_util_ArrayList_set__ILjava_lang_Object_2Ljava_lang_Object_2(index_0, o){
  var previous;
  previous = (javaemul_internal_InternalPreconditions_checkCriticalElementIndex__IIV(index_0, this.java_util_ArrayList_array.length) , this.java_util_ArrayList_array[index_0]);
  this.java_util_ArrayList_array[index_0] = o;
  return previous;
}
;
_.size = function java_util_ArrayList_size__I(){
  return this.java_util_ArrayList_array.length;
}
;
_.toArray = function java_util_ArrayList_toArray___3Ljava_lang_Object_2(){
  return javaemul_internal_ArrayHelper_clone___3Ljava_lang_Object_2II_3Ljava_lang_Object_2(this.java_util_ArrayList_array, this.java_util_ArrayList_array.length);
}
;
_.toArray___3Ljava_lang_Object_2_3Ljava_lang_Object_2 = function java_util_ArrayList_toArray___3Ljava_lang_Object_2_3Ljava_lang_Object_2(out){
  var i, result, size_0;
  size_0 = this.java_util_ArrayList_array.length;
  out.length < size_0 && (out = (result = new Array(size_0) , com_google_gwt_lang_Array_stampJavaTypeInfo__Ljava_lang_Object_2_3Ljava_lang_Object_2_3Ljava_lang_Object_2(result, out)));
  for (i = 0; i < size_0; ++i) {
    com_google_gwt_lang_Array_setCheck__Ljava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2(out, i, this.java_util_ArrayList_array[i]);
  }
  out.length > size_0 && com_google_gwt_lang_Array_setCheck__Ljava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2(out, size_0, null);
  return out;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1ArrayList_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_41, 'ArrayList', 25);
function java_util_ArrayList$1_ArrayList$1__Ljava_util_ArrayList_2V(this$0){
  this.java_util_ArrayList$1_this$01 = this$0;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(141, 1, {}, java_util_ArrayList$1_ArrayList$1__Ljava_util_ArrayList_2V);
_.hasNext__Z = function java_util_ArrayList$1_hasNext__Z(){
  return this.java_util_ArrayList$1_i < this.java_util_ArrayList$1_this$01.java_util_ArrayList_array.length;
}
;
_.next__Ljava_lang_Object_2 = function java_util_ArrayList$1_next__Ljava_lang_Object_2(){
  javaemul_internal_InternalPreconditions_checkCriticalElement__ZV(this.java_util_ArrayList$1_i < this.java_util_ArrayList$1_this$01.java_util_ArrayList_array.length);
  this.java_util_ArrayList$1_last = this.java_util_ArrayList$1_i++;
  return this.java_util_ArrayList$1_this$01.java_util_ArrayList_array[this.java_util_ArrayList$1_last];
}
;
_.remove__V = function java_util_ArrayList$1_remove__V(){
  javaemul_internal_InternalPreconditions_checkCriticalState__ZV(this.java_util_ArrayList$1_last != -1);
  java_util_ArrayList_$remove__Ljava_util_ArrayList_2ILjava_lang_Object_2(this.java_util_ArrayList$1_this$01, this.java_util_ArrayList$1_i = this.java_util_ArrayList$1_last);
  this.java_util_ArrayList$1_last = -1;
}
;
_.java_util_ArrayList$1_i = 0;
_.java_util_ArrayList$1_last = -1;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1ArrayList$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_41, 'ArrayList/1', 141);
function java_util_Arrays_insertionSort___3Ljava_lang_Object_2IILjava_util_Comparator_2V(array, low, high, comp){
  var i, j, t;
  for (i = low + 1; i < high; ++i) {
    for (j = i; j > low && comp.compare__Ljava_lang_Object_2Ljava_lang_Object_2I(array[j - 1], array[j]) > 0; --j) {
      t = array[j];
      com_google_gwt_lang_Array_setCheck__Ljava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2(array, j, array[j - 1]);
      com_google_gwt_lang_Array_setCheck__Ljava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2(array, j - 1, t);
    }
  }
}

function java_util_Arrays_merge___3Ljava_lang_Object_2III_3Ljava_lang_Object_2IILjava_util_Comparator_2V(src_0, srcLow, srcMid, srcHigh, dest, destLow, destHigh, comp){
  var topIdx;
  topIdx = srcMid;
  while (destLow < destHigh) {
    topIdx >= srcHigh || srcLow < srcMid && comp.compare__Ljava_lang_Object_2Ljava_lang_Object_2I(src_0[srcLow], src_0[topIdx]) <= 0?com_google_gwt_lang_Array_setCheck__Ljava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2(dest, destLow++, src_0[srcLow++]):com_google_gwt_lang_Array_setCheck__Ljava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2(dest, destLow++, src_0[topIdx++]);
  }
}

function java_util_Arrays_mergeSort___3Ljava_lang_Object_2IILjava_util_Comparator_2V(x_0, fromIndex, toIndex, comp){
  var temp;
  comp = (java_util_Comparators_$clinit__V() , !comp?java_util_Comparators_INTERNAL_1NATURAL_1ORDER:comp);
  temp = x_0.slice(fromIndex, toIndex);
  java_util_Arrays_mergeSort___3Ljava_lang_Object_2_3Ljava_lang_Object_2IIILjava_util_Comparator_2V(temp, x_0, fromIndex, toIndex, -fromIndex, comp);
}

function java_util_Arrays_mergeSort___3Ljava_lang_Object_2_3Ljava_lang_Object_2IIILjava_util_Comparator_2V(temp, array, low, high, ofs, comp){
  var length_0, tempHigh, tempLow, tempMid;
  length_0 = high - low;
  if (length_0 < 7) {
    java_util_Arrays_insertionSort___3Ljava_lang_Object_2IILjava_util_Comparator_2V(array, low, high, comp);
    return;
  }
  tempLow = low + ofs;
  tempHigh = high + ofs;
  tempMid = tempLow + (tempHigh - tempLow >> 1);
  java_util_Arrays_mergeSort___3Ljava_lang_Object_2_3Ljava_lang_Object_2IIILjava_util_Comparator_2V(array, temp, tempLow, tempMid, -ofs, comp);
  java_util_Arrays_mergeSort___3Ljava_lang_Object_2_3Ljava_lang_Object_2IIILjava_util_Comparator_2V(array, temp, tempMid, tempHigh, -ofs, comp);
  if (comp.compare__Ljava_lang_Object_2Ljava_lang_Object_2I(temp[tempMid - 1], temp[tempMid]) <= 0) {
    while (low < high) {
      com_google_gwt_lang_Array_setCheck__Ljava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2(array, low++, temp[tempLow++]);
    }
    return;
  }
  java_util_Arrays_merge___3Ljava_lang_Object_2III_3Ljava_lang_Object_2IILjava_util_Comparator_2V(temp, tempLow, tempMid, tempHigh, array, low, high, comp);
}

function java_util_Arrays_sort___3Ljava_lang_Object_2IILjava_util_Comparator_2V(x_0, toIndex, c){
  javaemul_internal_InternalPreconditions_checkCriticalArrayBounds__IIIV(toIndex, x_0.length);
  java_util_Arrays_mergeSort___3Ljava_lang_Object_2IILjava_util_Comparator_2V(x_0, 0, toIndex, c);
}

function java_util_Arrays_spliterator___3Ljava_lang_Object_2IILjava_util_Spliterator_2(array, endExclusive){
  return java_util_Spliterators_checkCriticalArrayBounds__IIIV(endExclusive, array.length) , new java_util_Spliterators$ArraySpliterator_Spliterators$ArraySpliterator___3Ljava_lang_Object_2IIIV(array, endExclusive);
}

function java_util_Arrays_stream___3Ljava_lang_Object_2Ljava_util_stream_Stream_2(array){
  return new java_util_stream_StreamImpl_StreamImpl__Ljava_util_stream_TerminatableStream_2Ljava_util_Spliterator_2V(null, java_util_Arrays_spliterator___3Ljava_lang_Object_2IILjava_util_Spliterator_2(array, array.length));
}

function java_util_Collections_hashCode__Ljava_lang_Iterable_2I(collection){
  var e, e$iterator, hashCode;
  hashCode = 0;
  for (e$iterator = collection.iterator__Ljava_util_Iterator_2(); e$iterator.hasNext__Z();) {
    e = e$iterator.next__Ljava_lang_Object_2();
    hashCode = hashCode + (e != null?java_lang_Object_hashCode_1_1I_1_1devirtual$__Ljava_lang_Object_2I(e):0);
    hashCode = hashCode | 0;
  }
  return hashCode;
}

function java_util_Collections_hashCode__Ljava_util_List_2I(list){
  var e, e$iterator, hashCode;
  hashCode = 1;
  for (e$iterator = list.iterator__Ljava_util_Iterator_2(); e$iterator.hasNext__Z();) {
    e = e$iterator.next__Ljava_lang_Object_2();
    hashCode = 31 * hashCode + (e != null?java_lang_Object_hashCode_1_1I_1_1devirtual$__Ljava_lang_Object_2I(e):0);
    hashCode = hashCode | 0;
  }
  return hashCode;
}

function java_util_Comparator_comparing__Ljava_util_function_Function_2Ljava_util_Comparator_2Ljava_util_Comparator_2(keyExtractor, keyComparator){
  javaemul_internal_InternalPreconditions_checkCriticalNotNull__Ljava_lang_Object_2Ljava_lang_Object_2(keyExtractor);
  javaemul_internal_InternalPreconditions_checkCriticalNotNull__Ljava_lang_Object_2Ljava_lang_Object_2(keyComparator);
  return new java_util_Comparator$lambda$1$Type_Comparator$lambda$1$Type__Ljava_util_Comparator_2Ljava_util_function_Function_2V(keyComparator);
}

function java_util_Comparator_lambda$1__Ljava_util_Comparator_2Ljava_util_function_Function_2Ljava_lang_Object_2Ljava_lang_Object_2I(keyComparator_0, a_2, b_3){
  return java_util_Comparators$NaturalOrderComparator_$compare__Ljava_util_Comparators$NaturalOrderComparator_2Ljava_lang_Object_2Ljava_lang_Object_2I(com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(a_2, 12).getValue__Ljava_lang_Object_2(), com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(b_3, 12).getValue__Ljava_lang_Object_2());
}

function java_util_Comparator$lambda$1$Type_Comparator$lambda$1$Type__Ljava_util_Comparator_2Ljava_util_function_Function_2V(keyComparator_0){
  this.java_util_Comparator$lambda$1$Type_keyComparator_10 = keyComparator_0;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(75, 1, $intern_8, java_util_Comparator$lambda$1$Type_Comparator$lambda$1$Type__Ljava_util_Comparator_2Ljava_util_function_Function_2V);
_.equals__Ljava_lang_Object_2Z = function java_util_Comparator$lambda$1$Type_equals__Ljava_lang_Object_2Z(other){
  return this === other;
}
;
_.compare__Ljava_lang_Object_2Ljava_lang_Object_2I = function java_util_Comparator$lambda$1$Type_compare__Ljava_lang_Object_2Ljava_lang_Object_2I(a, b){
  return java_util_Comparator_lambda$1__Ljava_util_Comparator_2Ljava_util_function_Function_2Ljava_lang_Object_2Ljava_lang_Object_2I(this.java_util_Comparator$lambda$1$Type_keyComparator_10, a, b);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1Comparator$lambda$1$Type_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_41, 'Comparator/lambda$1$Type', 75);
function java_util_Comparators_$clinit__V(){
  java_util_Comparators_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  java_util_Comparators_INTERNAL_1NATURAL_1ORDER = new java_util_Comparators$NaturalOrderComparator_Comparators$NaturalOrderComparator__V;
  java_util_Comparators_NATURAL_1ORDER = new java_util_Comparators$NaturalOrderComparator_Comparators$NaturalOrderComparator__V;
}

var java_util_Comparators_INTERNAL_1NATURAL_1ORDER, java_util_Comparators_NATURAL_1ORDER;
function java_util_Comparators$NaturalOrderComparator_$compare__Ljava_util_Comparators$NaturalOrderComparator_2Ljava_lang_Comparable_2Ljava_lang_Comparable_2I(a, b){
  return javaemul_internal_InternalPreconditions_checkCriticalNotNull__Ljava_lang_Object_2Ljava_lang_Object_2(a) , java_lang_Boolean_compareTo_1Ljava_1lang_1Object_1_1I_1_1devirtual$__Ljava_lang_Comparable_2Ljava_lang_Comparable_2I(a, (javaemul_internal_InternalPreconditions_checkCriticalNotNull__Ljava_lang_Object_2Ljava_lang_Object_2(b) , b));
}

function java_util_Comparators$NaturalOrderComparator_$compare__Ljava_util_Comparators$NaturalOrderComparator_2Ljava_lang_Object_2Ljava_lang_Object_2I(a, b){
  return java_util_Comparators$NaturalOrderComparator_$compare__Ljava_util_Comparators$NaturalOrderComparator_2Ljava_lang_Comparable_2Ljava_lang_Comparable_2I(com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(a, 20), com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(b, 20));
}

function java_util_Comparators$NaturalOrderComparator_Comparators$NaturalOrderComparator__V(){
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(64, 1, $intern_8, java_util_Comparators$NaturalOrderComparator_Comparators$NaturalOrderComparator__V);
_.compare__Ljava_lang_Object_2Ljava_lang_Object_2I = function java_util_Comparators$NaturalOrderComparator_compare__Ljava_lang_Object_2Ljava_lang_Object_2I(a, b){
  return java_util_Comparators$NaturalOrderComparator_$compare__Ljava_util_Comparators$NaturalOrderComparator_2Ljava_lang_Object_2Ljava_lang_Object_2I(a, b);
}
;
_.equals__Ljava_lang_Object_2Z = function java_util_Comparators$NaturalOrderComparator_equals__Ljava_lang_Object_2Z(other){
  return this === other;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1Comparators$NaturalOrderComparator_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_41, 'Comparators/NaturalOrderComparator', 64);
function java_util_ConcurrentModificationDetector_checkStructuralChange__Ljava_lang_Object_2Ljava_util_Iterator_2V(host, iterator){
  if (iterator[$intern_42] != host[$intern_42]) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_util_ConcurrentModificationException_ConcurrentModificationException__V);
  }
}

function java_util_ConcurrentModificationDetector_structureChanged__Ljava_lang_Object_2V(map_0){
  var modCount;
  modCount = map_0[$intern_42] | 0;
  map_0[$intern_42] = modCount + 1;
}

function java_util_ConcurrentModificationException_ConcurrentModificationException__V(){
  java_lang_RuntimeException_RuntimeException__V.call(this);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(162, 9, $intern_7, java_util_ConcurrentModificationException_ConcurrentModificationException__V);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1ConcurrentModificationException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_41, 'ConcurrentModificationException', 162);
function java_util_HashMap_$equals__Ljava_util_HashMap_2Ljava_lang_Object_2Ljava_lang_Object_2Z(value1, value2){
  return com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(value1) === com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(value2) || value1 != null && java_lang_Object_equals_1Ljava_1lang_1Object_1_1Z_1_1devirtual$__Ljava_lang_Object_2Ljava_lang_Object_2Z(value1, value2);
}

function java_util_HashMap_HashMap__V(){
  java_util_AbstractHashMap_$reset__Ljava_util_AbstractHashMap_2V(this);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(34, 109, {4:1, 34:1, 65:1}, java_util_HashMap_HashMap__V);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1HashMap_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_41, 'HashMap', 34);
function java_util_InternalHashCodeMap_$findEntryInChain__Ljava_util_InternalHashCodeMap_2Ljava_lang_Object_2_3Ljava_util_Map$Entry_2Ljava_util_Map$Entry_2(key, chain){
  var entry, entry$index, entry$max;
  for (entry$index = 0 , entry$max = chain.length; entry$index < entry$max; ++entry$index) {
    entry = chain[entry$index];
    if (java_util_HashMap_$equals__Ljava_util_HashMap_2Ljava_lang_Object_2Ljava_lang_Object_2Z(key, entry.getKey__Ljava_lang_Object_2())) {
      return entry;
    }
  }
  return null;
}

function java_util_InternalHashCodeMap_$getChainOrEmpty__Ljava_util_InternalHashCodeMap_2I_3Ljava_util_Map$Entry_2(this$static, hashCode){
  var chain;
  chain = this$static.java_util_InternalHashCodeMap_backingMap.get(hashCode);
  return chain == null?[]:chain;
}

function java_util_InternalHashCodeMap_$getEntry__Ljava_util_InternalHashCodeMap_2Ljava_lang_Object_2Ljava_util_Map$Entry_2(this$static, key){
  var hashCode;
  return java_util_InternalHashCodeMap_$findEntryInChain__Ljava_util_InternalHashCodeMap_2Ljava_lang_Object_2_3Ljava_util_Map$Entry_2Ljava_util_Map$Entry_2(key, java_util_InternalHashCodeMap_$getChainOrEmpty__Ljava_util_InternalHashCodeMap_2I_3Ljava_util_Map$Entry_2(this$static, key == null?0:(hashCode = java_lang_Object_hashCode_1_1I_1_1devirtual$__Ljava_lang_Object_2I(key) , hashCode | 0)));
}

function java_util_InternalHashCodeMap_$put__Ljava_util_InternalHashCodeMap_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static, key, value_0){
  var chain, chain0, entry, hashCode, hashCode0;
  hashCode0 = key == null?0:(hashCode = java_lang_Object_hashCode_1_1I_1_1devirtual$__Ljava_lang_Object_2I(key) , hashCode | 0);
  chain0 = (chain = this$static.java_util_InternalHashCodeMap_backingMap.get(hashCode0) , chain == null?[]:chain);
  if (chain0.length == 0) {
    this$static.java_util_InternalHashCodeMap_backingMap.set(hashCode0, chain0);
  }
   else {
    entry = java_util_InternalHashCodeMap_$findEntryInChain__Ljava_util_InternalHashCodeMap_2Ljava_lang_Object_2_3Ljava_util_Map$Entry_2Ljava_util_Map$Entry_2(key, chain0);
    if (entry) {
      return entry.setValue__Ljava_lang_Object_2Ljava_lang_Object_2(value_0);
    }
  }
  com_google_gwt_lang_Array_setCheck__Ljava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2(chain0, chain0.length, new java_util_AbstractMap$SimpleEntry_AbstractMap$SimpleEntry__Ljava_lang_Object_2Ljava_lang_Object_2V(key, value_0));
  ++this$static.java_util_InternalHashCodeMap_size;
  java_util_ConcurrentModificationDetector_structureChanged__Ljava_lang_Object_2V(this$static.java_util_InternalHashCodeMap_host);
  return null;
}

function java_util_InternalHashCodeMap_$remove__Ljava_util_InternalHashCodeMap_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static, key){
  var chain, chain0, entry, hashCode, hashCode0, i;
  hashCode0 = key == null?0:(hashCode = java_lang_Object_hashCode_1_1I_1_1devirtual$__Ljava_lang_Object_2I(key) , hashCode | 0);
  chain0 = (chain = this$static.java_util_InternalHashCodeMap_backingMap.get(hashCode0) , chain == null?[]:chain);
  for (i = 0; i < chain0.length; i++) {
    entry = chain0[i];
    if (java_util_HashMap_$equals__Ljava_util_HashMap_2Ljava_lang_Object_2Ljava_lang_Object_2Z(key, entry.getKey__Ljava_lang_Object_2())) {
      if (chain0.length == 1) {
        chain0.length = 0;
        this$static.java_util_InternalHashCodeMap_backingMap[$intern_46](hashCode0);
      }
       else {
        chain0.splice(i, 1);
      }
      --this$static.java_util_InternalHashCodeMap_size;
      java_util_ConcurrentModificationDetector_structureChanged__Ljava_lang_Object_2V(this$static.java_util_InternalHashCodeMap_host);
      return entry.getValue__Ljava_lang_Object_2();
    }
  }
  return null;
}

function java_util_InternalHashCodeMap_InternalHashCodeMap__Ljava_util_AbstractHashMap_2V(host){
  this.java_util_InternalHashCodeMap_backingMap = java_util_InternalJsMapFactory_newJsMap__Ljava_util_InternalJsMap_2();
  this.java_util_InternalHashCodeMap_host = host;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(131, 1, {}, java_util_InternalHashCodeMap_InternalHashCodeMap__Ljava_util_AbstractHashMap_2V);
_.iterator__Ljava_util_Iterator_2 = function java_util_InternalHashCodeMap_iterator__Ljava_util_Iterator_2(){
  return new java_util_InternalHashCodeMap$1_InternalHashCodeMap$1__Ljava_util_InternalHashCodeMap_2V(this);
}
;
_.java_util_InternalHashCodeMap_size = 0;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1InternalHashCodeMap_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_41, 'InternalHashCodeMap', 131);
function java_util_InternalHashCodeMap$1_InternalHashCodeMap$1__Ljava_util_InternalHashCodeMap_2V(this$0){
  this.java_util_InternalHashCodeMap$1_this$01 = this$0;
  this.java_util_InternalHashCodeMap$1_chains = this.java_util_InternalHashCodeMap$1_this$01.java_util_InternalHashCodeMap_backingMap.entries();
  this.java_util_InternalHashCodeMap$1_chain = [];
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(63, 1, {}, java_util_InternalHashCodeMap$1_InternalHashCodeMap$1__Ljava_util_InternalHashCodeMap_2V);
_.next__Ljava_lang_Object_2 = function java_util_InternalHashCodeMap$1_next__Ljava_lang_Object_2(){
  return this.java_util_InternalHashCodeMap$1_lastEntry = this.java_util_InternalHashCodeMap$1_chain[this.java_util_InternalHashCodeMap$1_itemIndex++] , this.java_util_InternalHashCodeMap$1_lastEntry;
}
;
_.hasNext__Z = function java_util_InternalHashCodeMap$1_hasNext__Z(){
  var current;
  if (this.java_util_InternalHashCodeMap$1_itemIndex < this.java_util_InternalHashCodeMap$1_chain.length) {
    return true;
  }
  current = this.java_util_InternalHashCodeMap$1_chains.next();
  if (!current.done) {
    this.java_util_InternalHashCodeMap$1_chain = current.value[1];
    this.java_util_InternalHashCodeMap$1_itemIndex = 0;
    return true;
  }
  return false;
}
;
_.remove__V = function java_util_InternalHashCodeMap$1_remove__V(){
  java_util_InternalHashCodeMap_$remove__Ljava_util_InternalHashCodeMap_2Ljava_lang_Object_2Ljava_lang_Object_2(this.java_util_InternalHashCodeMap$1_this$01, this.java_util_InternalHashCodeMap$1_lastEntry.getKey__Ljava_lang_Object_2());
  this.java_util_InternalHashCodeMap$1_itemIndex != 0 && --this.java_util_InternalHashCodeMap$1_itemIndex;
}
;
_.java_util_InternalHashCodeMap$1_itemIndex = 0;
_.java_util_InternalHashCodeMap$1_lastEntry = null;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1InternalHashCodeMap$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_41, 'InternalHashCodeMap/1', 63);
function java_util_InternalJsMapFactory_$clinit__V(){
  java_util_InternalJsMapFactory_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  java_util_InternalJsMapFactory_jsMapCtor = java_util_InternalJsMapFactory_getJsMapConstructor__Lcom_google_gwt_core_client_JavaScriptObject_2();
}

function java_util_InternalJsMapFactory_canHandleObjectCreateAndProto__Z(){
  if (!Object.create || !Object.getOwnPropertyNames) {
    return false;
  }
  var protoField = '__proto__';
  var map_0 = Object.create(null);
  if (map_0[protoField] !== undefined) {
    return false;
  }
  var keys_0 = Object.getOwnPropertyNames(map_0);
  if (keys_0.length != 0) {
    return false;
  }
  map_0[protoField] = 42;
  if (map_0[protoField] !== 42) {
    return false;
  }
  if (Object.getOwnPropertyNames(map_0).length == 0) {
    return false;
  }
  return true;
}

function java_util_InternalJsMapFactory_getJsMapConstructor__Lcom_google_gwt_core_client_JavaScriptObject_2(){
  function isCorrectIterationProtocol(){
    try {
      return (new Map).entries().next().done;
    }
     catch (e) {
      return false;
    }
  }

  if (typeof Map === $intern_4 && Map.prototype.entries && isCorrectIterationProtocol()) {
    return Map;
  }
   else {
    return java_util_InternalJsMapFactory_getJsMapPolyFill__Lcom_google_gwt_core_client_JavaScriptObject_2();
  }
}

function java_util_InternalJsMapFactory_getJsMapPolyFill__Lcom_google_gwt_core_client_JavaScriptObject_2(){
  function Stringmap(){
    this.obj = this.createObject();
  }

  ;
  Stringmap.prototype.createObject = function(key){
    return Object.create(null);
  }
  ;
  Stringmap.prototype.get = function(key){
    return this.obj[key];
  }
  ;
  Stringmap.prototype.set = function(key, value_0){
    this.obj[key] = value_0;
  }
  ;
  Stringmap.prototype[$intern_46] = function(key){
    delete this.obj[key];
  }
  ;
  Stringmap.prototype.keys = function(){
    return Object.getOwnPropertyNames(this.obj);
  }
  ;
  Stringmap.prototype.entries = function(){
    var keys_0 = this.keys();
    var map_0 = this;
    var nextIndex = 0;
    return {next:function(){
      if (nextIndex >= keys_0.length)
        return {done:true};
      var key = keys_0[nextIndex++];
      return {value:[key, map_0.get(key)], done:false};
    }
    };
  }
  ;
  if (!java_util_InternalJsMapFactory_canHandleObjectCreateAndProto__Z()) {
    Stringmap.prototype.createObject = function(){
      return {};
    }
    ;
    Stringmap.prototype.get = function(key){
      return this.obj[':' + key];
    }
    ;
    Stringmap.prototype.set = function(key, value_0){
      this.obj[':' + key] = value_0;
    }
    ;
    Stringmap.prototype[$intern_46] = function(key){
      delete this.obj[':' + key];
    }
    ;
    Stringmap.prototype.keys = function(){
      var result = [];
      for (var key in this.obj) {
        key.charCodeAt(0) == 58 && result.push(key.substring(1));
      }
      return result;
    }
    ;
  }
  return Stringmap;
}

function java_util_InternalJsMapFactory_newJsMap__Ljava_util_InternalJsMap_2(){
  java_util_InternalJsMapFactory_$clinit__V();
  return new java_util_InternalJsMapFactory_jsMapCtor;
}

var java_util_InternalJsMapFactory_jsMapCtor;
function java_util_InternalStringMap_$contains__Ljava_util_InternalStringMap_2Ljava_lang_String_2Z(this$static, key){
  return !(this$static.java_util_InternalStringMap_backingMap.get(key) === undefined);
}

function java_util_InternalStringMap_$get__Ljava_util_InternalStringMap_2Ljava_lang_String_2Ljava_lang_Object_2(this$static, key){
  return this$static.java_util_InternalStringMap_backingMap.get(key);
}

function java_util_InternalStringMap_$put__Ljava_util_InternalStringMap_2Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static, key, value_0){
  var oldValue;
  oldValue = this$static.java_util_InternalStringMap_backingMap.get(key);
  this$static.java_util_InternalStringMap_backingMap.set(key, value_0 === undefined?null:value_0);
  if (oldValue === undefined) {
    ++this$static.java_util_InternalStringMap_size;
    java_util_ConcurrentModificationDetector_structureChanged__Ljava_lang_Object_2V(this$static.java_util_InternalStringMap_host);
  }
   else {
    ++this$static.java_util_InternalStringMap_valueMod;
  }
  return oldValue;
}

function java_util_InternalStringMap_$remove__Ljava_util_InternalStringMap_2Ljava_lang_String_2Ljava_lang_Object_2(this$static, key){
  var value_0;
  value_0 = this$static.java_util_InternalStringMap_backingMap.get(key);
  if (value_0 === undefined) {
    ++this$static.java_util_InternalStringMap_valueMod;
  }
   else {
    this$static.java_util_InternalStringMap_backingMap[$intern_46](key);
    --this$static.java_util_InternalStringMap_size;
    java_util_ConcurrentModificationDetector_structureChanged__Ljava_lang_Object_2V(this$static.java_util_InternalStringMap_host);
  }
  return value_0;
}

function java_util_InternalStringMap_InternalStringMap__Ljava_util_AbstractHashMap_2V(host){
  this.java_util_InternalStringMap_backingMap = java_util_InternalJsMapFactory_newJsMap__Ljava_util_InternalJsMap_2();
  this.java_util_InternalStringMap_host = host;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(129, 1, {}, java_util_InternalStringMap_InternalStringMap__Ljava_util_AbstractHashMap_2V);
_.iterator__Ljava_util_Iterator_2 = function java_util_InternalStringMap_iterator__Ljava_util_Iterator_2(){
  return new java_util_InternalStringMap$1_InternalStringMap$1__Ljava_util_InternalStringMap_2V(this);
}
;
_.java_util_InternalStringMap_size = 0;
_.java_util_InternalStringMap_valueMod = 0;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1InternalStringMap_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_41, 'InternalStringMap', 129);
function java_util_InternalStringMap$1_InternalStringMap$1__Ljava_util_InternalStringMap_2V(this$0){
  this.java_util_InternalStringMap$1_this$01 = this$0;
  this.java_util_InternalStringMap$1_entries = this.java_util_InternalStringMap$1_this$01.java_util_InternalStringMap_backingMap.entries();
  this.java_util_InternalStringMap$1_current = this.java_util_InternalStringMap$1_entries.next();
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(62, 1, {}, java_util_InternalStringMap$1_InternalStringMap$1__Ljava_util_InternalStringMap_2V);
_.next__Ljava_lang_Object_2 = function java_util_InternalStringMap$1_next__Ljava_lang_Object_2(){
  return this.java_util_InternalStringMap$1_last = this.java_util_InternalStringMap$1_current , this.java_util_InternalStringMap$1_current = this.java_util_InternalStringMap$1_entries.next() , new java_util_InternalStringMap$2_InternalStringMap$2__Ljava_util_InternalStringMap_2V(this.java_util_InternalStringMap$1_this$01, this.java_util_InternalStringMap$1_last, this.java_util_InternalStringMap$1_this$01.java_util_InternalStringMap_valueMod);
}
;
_.hasNext__Z = function java_util_InternalStringMap$1_hasNext__Z(){
  return !this.java_util_InternalStringMap$1_current.done;
}
;
_.remove__V = function java_util_InternalStringMap$1_remove__V(){
  java_util_InternalStringMap_$remove__Ljava_util_InternalStringMap_2Ljava_lang_String_2Ljava_lang_Object_2(this.java_util_InternalStringMap$1_this$01, this.java_util_InternalStringMap$1_last.value[0]);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1InternalStringMap$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_41, 'InternalStringMap/1', 62);
function java_util_InternalStringMap$2_$getValue__Ljava_util_InternalStringMap$2_2Ljava_lang_Object_2(this$static){
  if (this$static.java_util_InternalStringMap$2_this$01.java_util_InternalStringMap_valueMod != this$static.java_util_InternalStringMap$2_val$lastValueMod3) {
    return java_util_InternalStringMap_$get__Ljava_util_InternalStringMap_2Ljava_lang_String_2Ljava_lang_Object_2(this$static.java_util_InternalStringMap$2_this$01, this$static.java_util_InternalStringMap$2_val$entry2.value[0]);
  }
  return this$static.java_util_InternalStringMap$2_val$entry2.value[1];
}

function java_util_InternalStringMap$2_InternalStringMap$2__Ljava_util_InternalStringMap_2V(this$0, val$entry, val$lastValueMod){
  this.java_util_InternalStringMap$2_this$01 = this$0;
  this.java_util_InternalStringMap$2_val$entry2 = val$entry;
  this.java_util_InternalStringMap$2_val$lastValueMod3 = val$lastValueMod;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(130, 185, $intern_45, java_util_InternalStringMap$2_InternalStringMap$2__Ljava_util_InternalStringMap_2V);
_.getKey__Ljava_lang_Object_2 = function java_util_InternalStringMap$2_getKey__Ljava_lang_Object_2(){
  return this.java_util_InternalStringMap$2_val$entry2.value[0];
}
;
_.getValue__Ljava_lang_Object_2 = function java_util_InternalStringMap$2_getValue__Ljava_lang_Object_2(){
  return java_util_InternalStringMap$2_$getValue__Ljava_util_InternalStringMap$2_2Ljava_lang_Object_2(this);
}
;
_.setValue__Ljava_lang_Object_2Ljava_lang_Object_2 = function java_util_InternalStringMap$2_setValue__Ljava_lang_Object_2Ljava_lang_Object_2(object){
  return java_util_InternalStringMap_$put__Ljava_util_InternalStringMap_2Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(this.java_util_InternalStringMap$2_this$01, this.java_util_InternalStringMap$2_val$entry2.value[0], object);
}
;
_.java_util_InternalStringMap$2_val$lastValueMod3 = 0;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1InternalStringMap$2_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_41, 'InternalStringMap/2', 130);
function java_util_NoSuchElementException_NoSuchElementException__V(){
  java_lang_RuntimeException_RuntimeException__V.call(this);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(142, 9, $intern_7, java_util_NoSuchElementException_NoSuchElementException__V);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1NoSuchElementException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_41, 'NoSuchElementException', 142);
function java_util_Objects_equals__Ljava_lang_Object_2Ljava_lang_Object_2Z(a, b){
  return com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(a) === com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(b) || a != null && java_lang_Object_equals_1Ljava_1lang_1Object_1_1Z_1_1devirtual$__Ljava_lang_Object_2Ljava_lang_Object_2Z(a, b);
}

function java_util_Objects_hashCode__Ljava_lang_Object_2I(o){
  return o != null?java_lang_Object_hashCode_1_1I_1_1devirtual$__Ljava_lang_Object_2I(o):0;
}

function java_util_Optional_$clinit__V(){
  java_util_Optional_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  java_util_Optional_EMPTY = new java_util_Optional_Optional__Ljava_lang_Object_2V(null);
}

function java_util_Optional_$orElse__Ljava_util_Optional_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static, other){
  return this$static.java_util_Optional_ref != null?this$static.java_util_Optional_ref:other;
}

function java_util_Optional_Optional__Ljava_lang_Object_2V(ref){
  java_util_Optional_$clinit__V();
  this.java_util_Optional_ref = ref;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(36, 1, {36:1}, java_util_Optional_Optional__Ljava_lang_Object_2V);
_.equals__Ljava_lang_Object_2Z = function java_util_Optional_equals__Ljava_lang_Object_2Z(obj){
  var other;
  if (obj === this) {
    return true;
  }
  if (!com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(obj, 36)) {
    return false;
  }
  other = com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(obj, 36);
  return java_util_Objects_equals__Ljava_lang_Object_2Ljava_lang_Object_2Z(this.java_util_Optional_ref, other.java_util_Optional_ref);
}
;
_.hashCode__I = function java_util_Optional_hashCode__I(){
  return java_util_Objects_hashCode__Ljava_lang_Object_2I(this.java_util_Optional_ref);
}
;
var java_util_Optional_EMPTY;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1Optional_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_41, 'Optional', 36);
function java_util_Spliterator_$forEachRemaining__Ljava_util_Spliterator_2Ljava_util_function_Consumer_2V(this$static, consumer){
  while (this$static.tryAdvance__Ljava_util_function_Consumer_2Z(consumer))
  ;
}

function java_util_Spliterators_checkCriticalArrayBounds__IIIV(end, length_0){
  if (0 > end || end > length_0) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_lang_ArrayIndexOutOfBoundsException_ArrayIndexOutOfBoundsException__Ljava_lang_String_2V($intern_9 + end + $intern_10 + length_0));
  }
}

function java_util_Spliterators_spliterator___3Ljava_lang_Object_2IIILjava_util_Spliterator_2(array, toIndex){
  java_util_Spliterators_checkCriticalArrayBounds__IIIV(toIndex, array.length);
  return new java_util_Spliterators$ArraySpliterator_Spliterators$ArraySpliterator___3Ljava_lang_Object_2IIIV(array, toIndex);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(72, 1, {});
_.forEachRemaining__Ljava_util_function_Consumer_2V = function java_util_Spliterators$BaseSpliterator_forEachRemaining__Ljava_util_function_Consumer_2V(consumer){
  java_util_Spliterator_$forEachRemaining__Ljava_util_Spliterator_2Ljava_util_function_Consumer_2V(this, consumer);
}
;
_.characteristics__I = function java_util_Spliterators$BaseSpliterator_characteristics__I(){
  return this.java_util_Spliterators$BaseSpliterator_characteristics;
}
;
_.estimateSize__J = function java_util_Spliterators$BaseSpliterator_estimateSize__J(){
  return this.java_util_Spliterators$BaseSpliterator_sizeEstimate;
}
;
_.java_util_Spliterators$BaseSpliterator_characteristics = 0;
_.java_util_Spliterators$BaseSpliterator_sizeEstimate = 0;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1Spliterators$BaseSpliterator_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_41, 'Spliterators/BaseSpliterator', 72);
function java_util_Spliterators$AbstractSpliterator_Spliterators$AbstractSpliterator__JIV(size_0, characteristics){
  this.java_util_Spliterators$BaseSpliterator_sizeEstimate = size_0;
  this.java_util_Spliterators$BaseSpliterator_characteristics = (characteristics & 64) != 0?characteristics | 16384:characteristics;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(73, 72, {});
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1Spliterators$AbstractSpliterator_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_41, 'Spliterators/AbstractSpliterator', 73);
function java_util_Spliterators$BaseArraySpliterator_$forEachRemaining__Ljava_util_Spliterators$BaseArraySpliterator_2Ljava_lang_Object_2V(this$static, consumer){
  javaemul_internal_InternalPreconditions_checkCriticalNotNull__Ljava_lang_Object_2Ljava_lang_Object_2(consumer);
  while (this$static.java_util_Spliterators$BaseArraySpliterator_index < this$static.java_util_Spliterators$BaseArraySpliterator_limit) {
    java_util_Spliterators$ArraySpliterator_$consume__Ljava_util_Spliterators$ArraySpliterator_2Ljava_lang_Object_2IV(this$static, consumer, this$static.java_util_Spliterators$BaseArraySpliterator_index++);
  }
}

function java_util_Spliterators$BaseArraySpliterator_$tryAdvance__Ljava_util_Spliterators$BaseArraySpliterator_2Ljava_lang_Object_2Z(this$static, consumer){
  javaemul_internal_InternalPreconditions_checkCriticalNotNull__Ljava_lang_Object_2Ljava_lang_Object_2(consumer);
  if (this$static.java_util_Spliterators$BaseArraySpliterator_index < this$static.java_util_Spliterators$BaseArraySpliterator_limit) {
    java_util_Spliterators$ArraySpliterator_$consume__Ljava_util_Spliterators$ArraySpliterator_2Ljava_lang_Object_2IV(this$static, consumer, this$static.java_util_Spliterators$BaseArraySpliterator_index++);
    return true;
  }
  return false;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(74, 1, {});
_.forEachRemaining__Ljava_util_function_Consumer_2V = function java_util_Spliterators$BaseArraySpliterator_forEachRemaining__Ljava_util_function_Consumer_2V(consumer){
  java_util_Spliterator_$forEachRemaining__Ljava_util_Spliterator_2Ljava_util_function_Consumer_2V(this, consumer);
}
;
_.characteristics__I = function java_util_Spliterators$BaseArraySpliterator_characteristics__I(){
  return this.java_util_Spliterators$BaseArraySpliterator_characteristics;
}
;
_.estimateSize__J = function java_util_Spliterators$BaseArraySpliterator_estimateSize__J(){
  return this.java_util_Spliterators$BaseArraySpliterator_limit - this.java_util_Spliterators$BaseArraySpliterator_index;
}
;
_.java_util_Spliterators$BaseArraySpliterator_characteristics = 0;
_.java_util_Spliterators$BaseArraySpliterator_index = 0;
_.java_util_Spliterators$BaseArraySpliterator_limit = 0;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1Spliterators$BaseArraySpliterator_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_41, 'Spliterators/BaseArraySpliterator', 74);
function java_util_Spliterators$ArraySpliterator_$consume__Ljava_util_Spliterators$ArraySpliterator_2Ljava_lang_Object_2IV(this$static, consumer, index_0){
  consumer.accept__Ljava_lang_Object_2V(this$static.java_util_Spliterators$ArraySpliterator_array[index_0]);
}

function java_util_Spliterators$ArraySpliterator_Spliterators$ArraySpliterator___3Ljava_lang_Object_2IIIV(array, limit){
  this.java_util_Spliterators$BaseArraySpliterator_index = 0;
  this.java_util_Spliterators$BaseArraySpliterator_limit = limit;
  this.java_util_Spliterators$BaseArraySpliterator_characteristics = 17488;
  this.java_util_Spliterators$ArraySpliterator_array = array;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(53, 74, {}, java_util_Spliterators$ArraySpliterator_Spliterators$ArraySpliterator___3Ljava_lang_Object_2IIIV);
_.forEachRemaining__Ljava_util_function_Consumer_2V = function java_util_Spliterators$ArraySpliterator_forEachRemaining__Ljava_util_function_Consumer_2V(consumer){
  java_util_Spliterators$BaseArraySpliterator_$forEachRemaining__Ljava_util_Spliterators$BaseArraySpliterator_2Ljava_lang_Object_2V(this, consumer);
}
;
_.tryAdvance__Ljava_util_function_Consumer_2Z = function java_util_Spliterators$ArraySpliterator_tryAdvance__Ljava_util_function_Consumer_2Z(consumer){
  return java_util_Spliterators$BaseArraySpliterator_$tryAdvance__Ljava_util_Spliterators$BaseArraySpliterator_2Ljava_lang_Object_2Z(this, consumer);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1Spliterators$ArraySpliterator_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_41, 'Spliterators/ArraySpliterator', 53);
function java_util_stream_Collector_of__Ljava_util_function_Supplier_2Ljava_util_function_BiConsumer_2Ljava_util_function_BinaryOperator_2_3Ljava_util_stream_Collector$Characteristics_2Ljava_util_stream_Collector_2(supplier, accumulator, combiner, characteristics){
  javaemul_internal_InternalPreconditions_checkCriticalNotNull__Ljava_lang_Object_2Ljava_lang_Object_2(supplier);
  javaemul_internal_InternalPreconditions_checkCriticalNotNull__Ljava_lang_Object_2Ljava_lang_Object_2(accumulator);
  javaemul_internal_InternalPreconditions_checkCriticalNotNull__Ljava_lang_Object_2Ljava_lang_Object_2(combiner);
  javaemul_internal_InternalPreconditions_checkCriticalNotNull__Ljava_lang_Object_2Ljava_lang_Object_2(characteristics);
  return new java_util_stream_CollectorImpl_CollectorImpl__Ljava_util_function_Supplier_2Ljava_util_function_BiConsumer_2Ljava_util_function_BinaryOperator_2Ljava_util_function_Function_2_3Ljava_util_stream_Collector$Characteristics_2V;
}

function java_util_stream_Collector$Characteristics_$clinit__V(){
  java_util_stream_Collector$Characteristics_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  java_util_stream_Collector$Characteristics_CONCURRENT = new java_util_stream_Collector$Characteristics_Collector$Characteristics__Ljava_lang_String_2IV('CONCURRENT', 0);
  java_util_stream_Collector$Characteristics_IDENTITY_1FINISH = new java_util_stream_Collector$Characteristics_Collector$Characteristics__Ljava_lang_String_2IV('IDENTITY_FINISH', 1);
  java_util_stream_Collector$Characteristics_UNORDERED = new java_util_stream_Collector$Characteristics_Collector$Characteristics__Ljava_lang_String_2IV('UNORDERED', 2);
}

function java_util_stream_Collector$Characteristics_Collector$Characteristics__Ljava_lang_String_2IV(enum$name, enum$ordinal){
  java_lang_Enum_Enum__Ljava_lang_String_2IV.call(this, enum$name, enum$ordinal);
}

function java_util_stream_Collector$Characteristics_values___3Ljava_util_stream_Collector$Characteristics_2(){
  java_util_stream_Collector$Characteristics_$clinit__V();
  return com_google_gwt_lang_Array_stampJavaTypeInfo__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_lang_Array_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1stream_1Collector$Characteristics_12_1classLit, 1), $intern_15, 32, 0, [java_util_stream_Collector$Characteristics_CONCURRENT, java_util_stream_Collector$Characteristics_IDENTITY_1FINISH, java_util_stream_Collector$Characteristics_UNORDERED]);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(32, 15, {4:1, 20:1, 15:1, 32:1}, java_util_stream_Collector$Characteristics_Collector$Characteristics__Ljava_lang_String_2IV);
var java_util_stream_Collector$Characteristics_CONCURRENT, java_util_stream_Collector$Characteristics_IDENTITY_1FINISH, java_util_stream_Collector$Characteristics_UNORDERED;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1stream_1Collector$Characteristics_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_47, 'Collector/Characteristics', 32, java_util_stream_Collector$Characteristics_values___3Ljava_util_stream_Collector$Characteristics_2);
function java_util_stream_CollectorImpl_CollectorImpl__Ljava_util_function_Supplier_2Ljava_util_function_BiConsumer_2Ljava_util_function_BinaryOperator_2Ljava_util_function_Function_2_3Ljava_util_stream_Collector$Characteristics_2V(){
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(161, 1, {}, java_util_stream_CollectorImpl_CollectorImpl__Ljava_util_function_Supplier_2Ljava_util_function_BiConsumer_2Ljava_util_function_BinaryOperator_2Ljava_util_function_Function_2_3Ljava_util_stream_Collector$Characteristics_2V);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1stream_1CollectorImpl_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_47, 'CollectorImpl', 161);
function java_util_stream_Collectors$20methodref$add$Type_Collectors$20methodref$add$Type__V(){
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(145, 1, {}, java_util_stream_Collectors$20methodref$add$Type_Collectors$20methodref$add$Type__V);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1stream_1Collectors$20methodref$add$Type_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_47, 'Collectors/20methodref$add$Type', 145);
function java_util_stream_Collectors$21methodref$ctor$Type_Collectors$21methodref$ctor$Type__V(){
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(147, 1, $intern_27, java_util_stream_Collectors$21methodref$ctor$Type_Collectors$21methodref$ctor$Type__V);
_.get__Ljava_lang_Object_2 = function java_util_stream_Collectors$21methodref$ctor$Type_get__Ljava_lang_Object_2(){
  return new java_util_ArrayList_ArrayList__V;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1stream_1Collectors$21methodref$ctor$Type_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_47, 'Collectors/21methodref$ctor$Type', 147);
function java_util_stream_Collectors$lambda$21$Type_Collectors$lambda$21$Type__V(){
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(146, 1, {}, java_util_stream_Collectors$lambda$21$Type_Collectors$lambda$21$Type__V);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1stream_1Collectors$lambda$21$Type_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_47, 'Collectors/lambda$21$Type', 146);
function java_util_stream_TerminatableStream_$terminate__Ljava_util_stream_TerminatableStream_2V(this$static){
  if (!this$static.java_util_stream_TerminatableStream_root) {
    java_util_stream_TerminatableStream_$throwIfTerminated__Ljava_util_stream_TerminatableStream_2V(this$static);
    this$static.java_util_stream_TerminatableStream_terminated = true;
  }
   else {
    java_util_stream_TerminatableStream_$terminate__Ljava_util_stream_TerminatableStream_2V(this$static.java_util_stream_TerminatableStream_root);
  }
}

function java_util_stream_TerminatableStream_$throwIfTerminated__Ljava_util_stream_TerminatableStream_2V(this$static){
  if (this$static.java_util_stream_TerminatableStream_root) {
    java_util_stream_TerminatableStream_$throwIfTerminated__Ljava_util_stream_TerminatableStream_2V(this$static.java_util_stream_TerminatableStream_root);
  }
   else if (this$static.java_util_stream_TerminatableStream_terminated) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_lang_IllegalStateException_IllegalStateException__Ljava_lang_String_2V);
  }
}

function java_util_stream_TerminatableStream_TerminatableStream__Ljava_util_stream_TerminatableStream_2V(previous){
  if (!previous) {
    this.java_util_stream_TerminatableStream_root = null;
    new java_util_ArrayList_ArrayList__V;
  }
   else {
    this.java_util_stream_TerminatableStream_root = previous;
  }
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(124, 1, {});
_.java_util_stream_TerminatableStream_terminated = false;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1stream_1TerminatableStream_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_47, 'TerminatableStream', 124);
function java_util_stream_StreamImpl_$clinit__V(){
  java_util_stream_StreamImpl_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  java_util_stream_StreamImpl_NULL_1CONSUMER = new java_util_stream_StreamImpl$lambda$0$Type_StreamImpl$lambda$0$Type__V;
}

function java_util_stream_StreamImpl_$anyMatch__Ljava_util_stream_StreamImpl_2Ljava_util_function_Predicate_2Z(this$static, predicate){
  return (java_util_stream_TerminatableStream_$throwIfTerminated__Ljava_util_stream_TerminatableStream_2V(this$static) , java_util_stream_StreamImpl_$spliterator__Ljava_util_stream_StreamImpl_2Ljava_util_Spliterator_2(new java_util_stream_StreamImpl_StreamImpl__Ljava_util_stream_TerminatableStream_2Ljava_util_Spliterator_2V(this$static, new java_util_stream_StreamImpl$FilterSpliterator_StreamImpl$FilterSpliterator__Ljava_util_function_Predicate_2Ljava_util_Spliterator_2V(predicate, this$static.java_util_stream_StreamImpl_spliterator)))).tryAdvance__Ljava_util_function_Consumer_2Z(java_util_stream_StreamImpl_NULL_1CONSUMER);
}

function java_util_stream_StreamImpl_$filter__Ljava_util_stream_StreamImpl_2Ljava_util_function_Predicate_2Ljava_util_stream_Stream_2(this$static, predicate){
  java_util_stream_TerminatableStream_$throwIfTerminated__Ljava_util_stream_TerminatableStream_2V(this$static);
  return new java_util_stream_StreamImpl_StreamImpl__Ljava_util_stream_TerminatableStream_2Ljava_util_Spliterator_2V(this$static, new java_util_stream_StreamImpl$FilterSpliterator_StreamImpl$FilterSpliterator__Ljava_util_function_Predicate_2Ljava_util_Spliterator_2V(predicate, this$static.java_util_stream_StreamImpl_spliterator));
}

function java_util_stream_StreamImpl_$findFirst__Ljava_util_stream_StreamImpl_2Ljava_util_Optional_2(this$static){
  var holder;
  java_util_stream_TerminatableStream_$terminate__Ljava_util_stream_TerminatableStream_2V(this$static);
  holder = new java_util_stream_StreamImpl$ValueConsumer_StreamImpl$ValueConsumer__V;
  if (this$static.java_util_stream_StreamImpl_spliterator.tryAdvance__Ljava_util_function_Consumer_2Z(holder)) {
    return java_util_Optional_$clinit__V() , new java_util_Optional_Optional__Ljava_lang_Object_2V(javaemul_internal_InternalPreconditions_checkCriticalNotNull__Ljava_lang_Object_2Ljava_lang_Object_2(holder.java_util_stream_StreamImpl$ValueConsumer_value));
  }
  return java_util_Optional_$clinit__V() , java_util_Optional_$clinit__V() , java_util_Optional_EMPTY;
}

function java_util_stream_StreamImpl_$reduce__Ljava_util_stream_StreamImpl_2Ljava_lang_Object_2Ljava_util_function_BiFunction_2Ljava_util_function_BinaryOperator_2Ljava_lang_Object_2(this$static, identity){
  var consumer;
  java_util_stream_TerminatableStream_$terminate__Ljava_util_stream_TerminatableStream_2V(this$static);
  consumer = new java_util_stream_StreamImpl$ValueConsumer_StreamImpl$ValueConsumer__V;
  consumer.java_util_stream_StreamImpl$ValueConsumer_value = identity;
  this$static.java_util_stream_StreamImpl_spliterator.forEachRemaining__Ljava_util_function_Consumer_2V(new java_util_stream_StreamImpl$lambda$5$Type_StreamImpl$lambda$5$Type__Ljava_util_stream_StreamImpl$ValueConsumer_2Ljava_util_function_BiFunction_2V(consumer));
  return consumer.java_util_stream_StreamImpl$ValueConsumer_value;
}

function java_util_stream_StreamImpl_$spliterator__Ljava_util_stream_StreamImpl_2Ljava_util_Spliterator_2(this$static){
  java_util_stream_TerminatableStream_$terminate__Ljava_util_stream_TerminatableStream_2V(this$static);
  return this$static.java_util_stream_StreamImpl_spliterator;
}

function java_util_stream_StreamImpl_StreamImpl__Ljava_util_stream_TerminatableStream_2Ljava_util_Spliterator_2V(prev, spliterator){
  java_util_stream_StreamImpl_$clinit__V();
  java_util_stream_TerminatableStream_TerminatableStream__Ljava_util_stream_TerminatableStream_2V.call(this, prev);
  this.java_util_stream_StreamImpl_spliterator = spliterator;
}

function java_util_stream_StreamImpl_lambda$4__Ljava_util_stream_Collector_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(a_1, t_2){
  com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(a_1, 27).add(t_2);
  return a_1;
}

function java_util_stream_StreamImpl_lambda$5__Ljava_util_stream_StreamImpl$ValueConsumer_2Ljava_util_function_BiFunction_2Ljava_lang_Object_2V(consumer_0, item_2){
  java_util_stream_StreamImpl_$clinit__V();
  java_util_stream_StreamImpl$ValueConsumer_$accept__Ljava_util_stream_StreamImpl$ValueConsumer_2Ljava_lang_Object_2V(consumer_0, java_util_stream_StreamImpl_lambda$4__Ljava_util_stream_Collector_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(consumer_0.java_util_stream_StreamImpl$ValueConsumer_value, item_2));
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(31, 124, {31:1}, java_util_stream_StreamImpl_StreamImpl__Ljava_util_stream_TerminatableStream_2Ljava_util_Spliterator_2V);
var java_util_stream_StreamImpl_NULL_1CONSUMER;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1stream_1StreamImpl_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_47, 'StreamImpl', 31);
function java_util_stream_StreamImpl$FilterSpliterator_$lambda$0__Ljava_util_stream_StreamImpl$FilterSpliterator_2Ljava_util_function_Consumer_2Ljava_lang_Object_2V(this$static, action_1, item_1){
  if (this$static.java_util_stream_StreamImpl$FilterSpliterator_filter.test__Ljava_lang_Object_2Z(item_1)) {
    this$static.java_util_stream_StreamImpl$FilterSpliterator_found = true;
    action_1.accept__Ljava_lang_Object_2V(item_1);
  }
}

function java_util_stream_StreamImpl$FilterSpliterator_StreamImpl$FilterSpliterator__Ljava_util_function_Predicate_2Ljava_util_Spliterator_2V(filter, original){
  java_util_Spliterators$AbstractSpliterator_Spliterators$AbstractSpliterator__JIV.call(this, original.estimateSize__J(), original.characteristics__I() & -65);
  javaemul_internal_InternalPreconditions_checkCriticalNotNull__Ljava_lang_Object_2Ljava_lang_Object_2(filter);
  this.java_util_stream_StreamImpl$FilterSpliterator_filter = filter;
  this.java_util_stream_StreamImpl$FilterSpliterator_original = original;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(60, 73, {}, java_util_stream_StreamImpl$FilterSpliterator_StreamImpl$FilterSpliterator__Ljava_util_function_Predicate_2Ljava_util_Spliterator_2V);
_.tryAdvance__Ljava_util_function_Consumer_2Z = function java_util_stream_StreamImpl$FilterSpliterator_tryAdvance__Ljava_util_function_Consumer_2Z(action){
  this.java_util_stream_StreamImpl$FilterSpliterator_found = false;
  while (!this.java_util_stream_StreamImpl$FilterSpliterator_found && this.java_util_stream_StreamImpl$FilterSpliterator_original.tryAdvance__Ljava_util_function_Consumer_2Z(new java_util_stream_StreamImpl$FilterSpliterator$lambda$0$Type_StreamImpl$FilterSpliterator$lambda$0$Type__Ljava_util_stream_StreamImpl$FilterSpliterator_2Ljava_util_function_Consumer_2V(this, action)))
  ;
  return this.java_util_stream_StreamImpl$FilterSpliterator_found;
}
;
_.java_util_stream_StreamImpl$FilterSpliterator_found = false;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1stream_1StreamImpl$FilterSpliterator_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_47, 'StreamImpl/FilterSpliterator', 60);
function java_util_stream_StreamImpl$FilterSpliterator$lambda$0$Type_StreamImpl$FilterSpliterator$lambda$0$Type__Ljava_util_stream_StreamImpl$FilterSpliterator_2Ljava_util_function_Consumer_2V($$outer_0, action_1){
  this.java_util_stream_StreamImpl$FilterSpliterator$lambda$0$Type_$$outer_10 = $$outer_0;
  this.java_util_stream_StreamImpl$FilterSpliterator$lambda$0$Type_action_11 = action_1;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(125, 1, {}, java_util_stream_StreamImpl$FilterSpliterator$lambda$0$Type_StreamImpl$FilterSpliterator$lambda$0$Type__Ljava_util_stream_StreamImpl$FilterSpliterator_2Ljava_util_function_Consumer_2V);
_.accept__Ljava_lang_Object_2V = function java_util_stream_StreamImpl$FilterSpliterator$lambda$0$Type_accept__Ljava_lang_Object_2V(arg0){
  java_util_stream_StreamImpl$FilterSpliterator_$lambda$0__Ljava_util_stream_StreamImpl$FilterSpliterator_2Ljava_util_function_Consumer_2Ljava_lang_Object_2V(this.java_util_stream_StreamImpl$FilterSpliterator$lambda$0$Type_$$outer_10, this.java_util_stream_StreamImpl$FilterSpliterator$lambda$0$Type_action_11, arg0);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1stream_1StreamImpl$FilterSpliterator$lambda$0$Type_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_47, 'StreamImpl/FilterSpliterator/lambda$0$Type', 125);
function java_util_stream_StreamImpl$ValueConsumer_$accept__Ljava_util_stream_StreamImpl$ValueConsumer_2Ljava_lang_Object_2V(this$static, value_0){
  this$static.java_util_stream_StreamImpl$ValueConsumer_value = value_0;
}

function java_util_stream_StreamImpl$ValueConsumer_StreamImpl$ValueConsumer__V(){
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(61, 1, {}, java_util_stream_StreamImpl$ValueConsumer_StreamImpl$ValueConsumer__V);
_.accept__Ljava_lang_Object_2V = function java_util_stream_StreamImpl$ValueConsumer_accept__Ljava_lang_Object_2V(value_0){
  java_util_stream_StreamImpl$ValueConsumer_$accept__Ljava_util_stream_StreamImpl$ValueConsumer_2Ljava_lang_Object_2V(this, value_0);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1stream_1StreamImpl$ValueConsumer_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_47, 'StreamImpl/ValueConsumer', 61);
function java_util_stream_StreamImpl$lambda$0$Type_StreamImpl$lambda$0$Type__V(){
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(126, 1, {}, java_util_stream_StreamImpl$lambda$0$Type_StreamImpl$lambda$0$Type__V);
_.accept__Ljava_lang_Object_2V = function java_util_stream_StreamImpl$lambda$0$Type_accept__Ljava_lang_Object_2V(arg0){
  java_util_stream_StreamImpl_$clinit__V();
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1stream_1StreamImpl$lambda$0$Type_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_47, 'StreamImpl/lambda$0$Type', 126);
function java_util_stream_StreamImpl$lambda$5$Type_StreamImpl$lambda$5$Type__Ljava_util_stream_StreamImpl$ValueConsumer_2Ljava_util_function_BiFunction_2V(consumer_0){
  this.java_util_stream_StreamImpl$lambda$5$Type_consumer_10 = consumer_0;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(127, 1, {}, java_util_stream_StreamImpl$lambda$5$Type_StreamImpl$lambda$5$Type__Ljava_util_stream_StreamImpl$ValueConsumer_2Ljava_util_function_BiFunction_2V);
_.accept__Ljava_lang_Object_2V = function java_util_stream_StreamImpl$lambda$5$Type_accept__Ljava_lang_Object_2V(arg0){
  java_util_stream_StreamImpl_lambda$5__Ljava_util_stream_StreamImpl$ValueConsumer_2Ljava_util_function_BiFunction_2Ljava_lang_Object_2V(this.java_util_stream_StreamImpl$lambda$5$Type_consumer_10, arg0);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1stream_1StreamImpl$lambda$5$Type_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_47, 'StreamImpl/lambda$5$Type', 127);
function javaemul_internal_ArrayHelper_applySplice__Ljava_lang_Object_2IILjava_lang_Object_2V(array, index_0, deleteCount, arrayToAdd){
  Array.prototype.splice.apply(array, [index_0, deleteCount].concat(arrayToAdd));
}

function javaemul_internal_ArrayHelper_clone___3Ljava_lang_Object_2II_3Ljava_lang_Object_2(array, toIndex){
  var result;
  result = array.slice(0, toIndex);
  return com_google_gwt_lang_Array_stampJavaTypeInfo__Ljava_lang_Object_2_3Ljava_lang_Object_2_3Ljava_lang_Object_2(result, array);
}

function javaemul_internal_ArrayHelper_copy__Ljava_lang_Object_2ILjava_lang_Object_2IIZV(src_0, srcOfs, dest, destOfs, len){
  var batchEnd, batchStart, end;
  if (src_0 === dest) {
    src_0 = src_0.slice(srcOfs, srcOfs + len);
    srcOfs = 0;
  }
  for (batchStart = srcOfs , end = srcOfs + len; batchStart < end;) {
    batchEnd = batchStart + 10000 < end?batchStart + 10000:end;
    len = batchEnd - batchStart;
    javaemul_internal_ArrayHelper_applySplice__Ljava_lang_Object_2IILjava_lang_Object_2V(dest, destOfs, 0, src_0.slice(batchStart, batchEnd));
    batchStart = batchEnd;
    destOfs += len;
  }
}

function javaemul_internal_ArrayHelper_insertTo__Ljava_lang_Object_2ILjava_lang_Object_2V(array, index_0, value_0){
  array.splice(index_0, 0, value_0);
}

function javaemul_internal_ArrayHelper_insertTo__Ljava_lang_Object_2I_3Ljava_lang_Object_2V(array, index_0, values){
  javaemul_internal_ArrayHelper_copy__Ljava_lang_Object_2ILjava_lang_Object_2IIZV(values, 0, array, index_0, values.length);
}

function javaemul_internal_ArrayHelper_removeFrom__Ljava_lang_Object_2IIV(array, index_0, deleteCount){
  array.splice(index_0, deleteCount);
}

var com_google_gwt_lang_ClassLiteralHolder_I_1classLit = java_lang_Class_createForPrimitive__Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2('int', 'I');
var com_google_gwt_lang_ClassLiteralHolder_D_1classLit = java_lang_Class_createForPrimitive__Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2('double', 'D');
java_lang_Boolean_$clinit__V();
_ = com_google_gwt_lang_Runtime_provide__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2('java.lang.Boolean');
_.$isInstance = java_lang_Boolean_$isInstance__Ljava_lang_Object_2Z;
_ = com_google_gwt_lang_Runtime_provide__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2('java.lang.CharSequence');
_.$isInstance = java_lang_CharSequence_$isInstance__Ljava_lang_Object_2Z;
_ = com_google_gwt_lang_Runtime_provide__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2('java.lang.Comparable');
_.$isInstance = java_lang_Comparable_$isInstance__Ljava_lang_Object_2Z;
_ = com_google_gwt_lang_Runtime_provide__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2('java.lang.Double');
_.$isInstance = java_lang_Double_$isInstance__Ljava_lang_Object_2Z;
_ = com_google_gwt_lang_Runtime_provide__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2('java.lang.Number');
_.$isInstance = java_lang_Number_$isInstance__Ljava_lang_Object_2Z;
_ = com_google_gwt_lang_Runtime_provide__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2('java.lang.String');
_.$isInstance = java_lang_String_$isInstance__Ljava_lang_Object_2Z;
_ = com_google_gwt_lang_Runtime_provide__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2('java.lang.Throwable');
_.of = java_lang_Throwable_of__Ljava_lang_Object_2Ljava_lang_Throwable_2;
var $entry = (com_google_gwt_core_client_impl_Impl_$clinit__V() , com_google_gwt_core_client_impl_Impl_entry__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2);
var gwtOnLoad = gwtOnLoad = com_google_gwt_lang_ModuleUtils_gwtOnLoad__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V;
com_google_gwt_lang_ModuleUtils_addInitFunctions__V(com_google_gwt_lang_gwt_100046jelement_100046demo_100046Demo_1_1EntryMethodHolder_init__V);
com_google_gwt_lang_ModuleUtils_setGwtProperty__Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2V('permProps', [[['locale', 'default'], ['user.agent', 'ie9']]]);
$sendStats('moduleStartup', 'moduleEvalEnd');
gwtOnLoad(__gwtModuleFunction.__errFn, __gwtModuleFunction.__moduleName, __gwtModuleFunction.__moduleBase, __gwtModuleFunction.__softPermutationId,__gwtModuleFunction.__computePropValue);
$sendStats('moduleStartup', 'end');
$gwt && $gwt.permProps && __gwtModuleFunction.__moduleStartupDone($gwt.permProps);
//# sourceURL=js-0.js


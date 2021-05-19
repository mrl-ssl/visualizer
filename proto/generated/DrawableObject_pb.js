/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var Common_pb = require('./Common_pb.js');
goog.exportSymbol('proto.Circle', null, global);
goog.exportSymbol('proto.DrawableObject', null, global);
goog.exportSymbol('proto.DrawableString', null, global);
goog.exportSymbol('proto.DrawableType', null, global);
goog.exportSymbol('proto.Line', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.DrawableString = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DrawableString, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.DrawableString.displayName = 'proto.DrawableString';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.DrawableString.prototype.toObject = function(opt_includeInstance) {
  return proto.DrawableString.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DrawableString} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DrawableString.toObject = function(includeInstance, msg) {
  var f, obj = {
    position: (f = msg.getPosition()) && Common_pb.VectorF2D.toObject(includeInstance, f),
    text: jspb.Message.getField(msg, 2)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.DrawableString}
 */
proto.DrawableString.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DrawableString;
  return proto.DrawableString.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DrawableString} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DrawableString}
 */
proto.DrawableString.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new Common_pb.VectorF2D;
      reader.readMessage(value,Common_pb.VectorF2D.deserializeBinaryFromReader);
      msg.setPosition(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setText(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.DrawableString.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DrawableString.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DrawableString} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DrawableString.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPosition();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      Common_pb.VectorF2D.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * required VectorF2D Position = 1;
 * @return {!proto.VectorF2D}
 */
proto.DrawableString.prototype.getPosition = function() {
  return /** @type{!proto.VectorF2D} */ (
    jspb.Message.getWrapperField(this, Common_pb.VectorF2D, 1, 1));
};


/** @param {!proto.VectorF2D} value */
proto.DrawableString.prototype.setPosition = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.DrawableString.prototype.clearPosition = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DrawableString.prototype.hasPosition = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required string Text = 2;
 * @return {string}
 */
proto.DrawableString.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.DrawableString.prototype.setText = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.DrawableString.prototype.clearText = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DrawableString.prototype.hasText = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Line = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Line, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.Line.displayName = 'proto.Line';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Line.prototype.toObject = function(opt_includeInstance) {
  return proto.Line.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Line} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Line.toObject = function(includeInstance, msg) {
  var f, obj = {
    head: (f = msg.getHead()) && Common_pb.VectorF2D.toObject(includeInstance, f),
    tail: (f = msg.getTail()) && Common_pb.VectorF2D.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Line}
 */
proto.Line.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Line;
  return proto.Line.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Line} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Line}
 */
proto.Line.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new Common_pb.VectorF2D;
      reader.readMessage(value,Common_pb.VectorF2D.deserializeBinaryFromReader);
      msg.setHead(value);
      break;
    case 2:
      var value = new Common_pb.VectorF2D;
      reader.readMessage(value,Common_pb.VectorF2D.deserializeBinaryFromReader);
      msg.setTail(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Line.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Line.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Line} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Line.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHead();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      Common_pb.VectorF2D.serializeBinaryToWriter
    );
  }
  f = message.getTail();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      Common_pb.VectorF2D.serializeBinaryToWriter
    );
  }
};


/**
 * required VectorF2D Head = 1;
 * @return {!proto.VectorF2D}
 */
proto.Line.prototype.getHead = function() {
  return /** @type{!proto.VectorF2D} */ (
    jspb.Message.getWrapperField(this, Common_pb.VectorF2D, 1, 1));
};


/** @param {!proto.VectorF2D} value */
proto.Line.prototype.setHead = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.Line.prototype.clearHead = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.Line.prototype.hasHead = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required VectorF2D Tail = 2;
 * @return {!proto.VectorF2D}
 */
proto.Line.prototype.getTail = function() {
  return /** @type{!proto.VectorF2D} */ (
    jspb.Message.getWrapperField(this, Common_pb.VectorF2D, 2, 1));
};


/** @param {!proto.VectorF2D} value */
proto.Line.prototype.setTail = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.Line.prototype.clearTail = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.Line.prototype.hasTail = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Circle = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Circle, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.Circle.displayName = 'proto.Circle';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Circle.prototype.toObject = function(opt_includeInstance) {
  return proto.Circle.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Circle} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Circle.toObject = function(includeInstance, msg) {
  var f, obj = {
    position: (f = msg.getPosition()) && Common_pb.VectorF2D.toObject(includeInstance, f),
    radius: +jspb.Message.getField(msg, 2)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Circle}
 */
proto.Circle.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Circle;
  return proto.Circle.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Circle} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Circle}
 */
proto.Circle.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new Common_pb.VectorF2D;
      reader.readMessage(value,Common_pb.VectorF2D.deserializeBinaryFromReader);
      msg.setPosition(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setRadius(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Circle.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Circle.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Circle} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Circle.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPosition();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      Common_pb.VectorF2D.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeFloat(
      2,
      f
    );
  }
};


/**
 * required VectorF2D Position = 1;
 * @return {!proto.VectorF2D}
 */
proto.Circle.prototype.getPosition = function() {
  return /** @type{!proto.VectorF2D} */ (
    jspb.Message.getWrapperField(this, Common_pb.VectorF2D, 1, 1));
};


/** @param {!proto.VectorF2D} value */
proto.Circle.prototype.setPosition = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.Circle.prototype.clearPosition = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.Circle.prototype.hasPosition = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required float Radius = 2;
 * @return {number}
 */
proto.Circle.prototype.getRadius = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 2, 0.0));
};


/** @param {number} value */
proto.Circle.prototype.setRadius = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.Circle.prototype.clearRadius = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.Circle.prototype.hasRadius = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.DrawableObject = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.DrawableObject.oneofGroups_);
};
goog.inherits(proto.DrawableObject, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.DrawableObject.displayName = 'proto.DrawableObject';
}
/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.DrawableObject.oneofGroups_ = [[8,9,10,11,12]];

/**
 * @enum {number}
 */
proto.DrawableObject.EventCase = {
  EVENT_NOT_SET: 0,
  CIRCLE: 8,
  REGION: 9,
  PATH: 10,
  LINE: 11,
  STRING: 12
};

/**
 * @return {proto.DrawableObject.EventCase}
 */
proto.DrawableObject.prototype.getEventCase = function() {
  return /** @type {proto.DrawableObject.EventCase} */(jspb.Message.computeOneofCase(this, proto.DrawableObject.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.DrawableObject.prototype.toObject = function(opt_includeInstance) {
  return proto.DrawableObject.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DrawableObject} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DrawableObject.toObject = function(includeInstance, msg) {
  var f, obj = {
    strokecolor: jspb.Message.getField(msg, 1),
    fillcolor: jspb.Message.getField(msg, 2),
    strokewidth: +jspb.Message.getField(msg, 3),
    fontsize: jspb.Message.getField(msg, 4),
    fill: jspb.Message.getField(msg, 5),
    opacity: +jspb.Message.getField(msg, 6),
    type: jspb.Message.getField(msg, 7),
    circle: (f = msg.getCircle()) && proto.Circle.toObject(includeInstance, f),
    region: (f = msg.getRegion()) && Common_pb.VectorF2D.toObject(includeInstance, f),
    path: (f = msg.getPath()) && Common_pb.VectorF2D.toObject(includeInstance, f),
    line: (f = msg.getLine()) && proto.Line.toObject(includeInstance, f),
    string: (f = msg.getString()) && proto.DrawableString.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.DrawableObject}
 */
proto.DrawableObject.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DrawableObject;
  return proto.DrawableObject.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DrawableObject} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DrawableObject}
 */
proto.DrawableObject.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setStrokecolor(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setFillcolor(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setStrokewidth(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setFontsize(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setFill(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setOpacity(value);
      break;
    case 7:
      var value = /** @type {!proto.DrawableType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 8:
      var value = new proto.Circle;
      reader.readMessage(value,proto.Circle.deserializeBinaryFromReader);
      msg.setCircle(value);
      break;
    case 9:
      var value = new Common_pb.VectorF2D;
      reader.readMessage(value,Common_pb.VectorF2D.deserializeBinaryFromReader);
      msg.setRegion(value);
      break;
    case 10:
      var value = new Common_pb.VectorF2D;
      reader.readMessage(value,Common_pb.VectorF2D.deserializeBinaryFromReader);
      msg.setPath(value);
      break;
    case 11:
      var value = new proto.Line;
      reader.readMessage(value,proto.Line.deserializeBinaryFromReader);
      msg.setLine(value);
      break;
    case 12:
      var value = new proto.DrawableString;
      reader.readMessage(value,proto.DrawableString.deserializeBinaryFromReader);
      msg.setString(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.DrawableObject.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DrawableObject.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DrawableObject} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DrawableObject.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeFloat(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeBool(
      5,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeFloat(
      6,
      f
    );
  }
  f = /** @type {!proto.DrawableType} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeEnum(
      7,
      f
    );
  }
  f = message.getCircle();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.Circle.serializeBinaryToWriter
    );
  }
  f = message.getRegion();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      Common_pb.VectorF2D.serializeBinaryToWriter
    );
  }
  f = message.getPath();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      Common_pb.VectorF2D.serializeBinaryToWriter
    );
  }
  f = message.getLine();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.Line.serializeBinaryToWriter
    );
  }
  f = message.getString();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.DrawableString.serializeBinaryToWriter
    );
  }
};


/**
 * required string StrokeColor = 1;
 * @return {string}
 */
proto.DrawableObject.prototype.getStrokecolor = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.DrawableObject.prototype.setStrokecolor = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.DrawableObject.prototype.clearStrokecolor = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DrawableObject.prototype.hasStrokecolor = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string FillColor = 2;
 * @return {string}
 */
proto.DrawableObject.prototype.getFillcolor = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.DrawableObject.prototype.setFillcolor = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.DrawableObject.prototype.clearFillcolor = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DrawableObject.prototype.hasFillcolor = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * required float StrokeWidth = 3;
 * @return {number}
 */
proto.DrawableObject.prototype.getStrokewidth = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 3, 0.0));
};


/** @param {number} value */
proto.DrawableObject.prototype.setStrokewidth = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.DrawableObject.prototype.clearStrokewidth = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DrawableObject.prototype.hasStrokewidth = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string FontSize = 4;
 * @return {string}
 */
proto.DrawableObject.prototype.getFontsize = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.DrawableObject.prototype.setFontsize = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.DrawableObject.prototype.clearFontsize = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DrawableObject.prototype.hasFontsize = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * required bool Fill = 5;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.DrawableObject.prototype.getFill = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 5, false));
};


/** @param {boolean} value */
proto.DrawableObject.prototype.setFill = function(value) {
  jspb.Message.setField(this, 5, value);
};


proto.DrawableObject.prototype.clearFill = function() {
  jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DrawableObject.prototype.hasFill = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * required float Opacity = 6;
 * @return {number}
 */
proto.DrawableObject.prototype.getOpacity = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 6, 0.0));
};


/** @param {number} value */
proto.DrawableObject.prototype.setOpacity = function(value) {
  jspb.Message.setField(this, 6, value);
};


proto.DrawableObject.prototype.clearOpacity = function() {
  jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DrawableObject.prototype.hasOpacity = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * required DrawableType Type = 7;
 * @return {!proto.DrawableType}
 */
proto.DrawableObject.prototype.getType = function() {
  return /** @type {!proto.DrawableType} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {!proto.DrawableType} value */
proto.DrawableObject.prototype.setType = function(value) {
  jspb.Message.setField(this, 7, value);
};


proto.DrawableObject.prototype.clearType = function() {
  jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DrawableObject.prototype.hasType = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional Circle Circle = 8;
 * @return {?proto.Circle}
 */
proto.DrawableObject.prototype.getCircle = function() {
  return /** @type{?proto.Circle} */ (
    jspb.Message.getWrapperField(this, proto.Circle, 8));
};


/** @param {?proto.Circle|undefined} value */
proto.DrawableObject.prototype.setCircle = function(value) {
  jspb.Message.setOneofWrapperField(this, 8, proto.DrawableObject.oneofGroups_[0], value);
};


proto.DrawableObject.prototype.clearCircle = function() {
  this.setCircle(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DrawableObject.prototype.hasCircle = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional VectorF2D Region = 9;
 * @return {?proto.VectorF2D}
 */
proto.DrawableObject.prototype.getRegion = function() {
  return /** @type{?proto.VectorF2D} */ (
    jspb.Message.getWrapperField(this, Common_pb.VectorF2D, 9));
};


/** @param {?proto.VectorF2D|undefined} value */
proto.DrawableObject.prototype.setRegion = function(value) {
  jspb.Message.setOneofWrapperField(this, 9, proto.DrawableObject.oneofGroups_[0], value);
};


proto.DrawableObject.prototype.clearRegion = function() {
  this.setRegion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DrawableObject.prototype.hasRegion = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional VectorF2D Path = 10;
 * @return {?proto.VectorF2D}
 */
proto.DrawableObject.prototype.getPath = function() {
  return /** @type{?proto.VectorF2D} */ (
    jspb.Message.getWrapperField(this, Common_pb.VectorF2D, 10));
};


/** @param {?proto.VectorF2D|undefined} value */
proto.DrawableObject.prototype.setPath = function(value) {
  jspb.Message.setOneofWrapperField(this, 10, proto.DrawableObject.oneofGroups_[0], value);
};


proto.DrawableObject.prototype.clearPath = function() {
  this.setPath(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DrawableObject.prototype.hasPath = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional Line Line = 11;
 * @return {?proto.Line}
 */
proto.DrawableObject.prototype.getLine = function() {
  return /** @type{?proto.Line} */ (
    jspb.Message.getWrapperField(this, proto.Line, 11));
};


/** @param {?proto.Line|undefined} value */
proto.DrawableObject.prototype.setLine = function(value) {
  jspb.Message.setOneofWrapperField(this, 11, proto.DrawableObject.oneofGroups_[0], value);
};


proto.DrawableObject.prototype.clearLine = function() {
  this.setLine(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DrawableObject.prototype.hasLine = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional DrawableString String = 12;
 * @return {?proto.DrawableString}
 */
proto.DrawableObject.prototype.getString = function() {
  return /** @type{?proto.DrawableString} */ (
    jspb.Message.getWrapperField(this, proto.DrawableString, 12));
};


/** @param {?proto.DrawableString|undefined} value */
proto.DrawableObject.prototype.setString = function(value) {
  jspb.Message.setOneofWrapperField(this, 12, proto.DrawableObject.oneofGroups_[0], value);
};


proto.DrawableObject.prototype.clearString = function() {
  this.setString(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DrawableObject.prototype.hasString = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * @enum {number}
 */
proto.DrawableType = {
  CIRCLE: 0,
  LINE: 1,
  STRING: 2,
  PATH: 3,
  REGION: 4
};

goog.object.extend(exports, proto);

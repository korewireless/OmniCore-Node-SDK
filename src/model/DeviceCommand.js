/**
 * OmniCore Model and State Management API
 * This is an OmniCore Model and State Management server.
 *
 * The version of the OpenAPI document: 1.0
 * Contact: support@korewireless.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The DeviceCommand model module.
 * @module model/DeviceCommand
 * @version 1.0
 */
class DeviceCommand {
    /**
     * Constructs a new <code>DeviceCommand</code>.
     * @alias module:model/DeviceCommand
     * @param binaryData {String} Base64 Encoded Command String
     */
    constructor(binaryData) { 
        
        DeviceCommand.initialize(this, binaryData);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, binaryData) { 
        obj['binaryData'] = binaryData;
    }

    /**
     * Constructs a <code>DeviceCommand</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeviceCommand} obj Optional instance to populate.
     * @return {module:model/DeviceCommand} The populated <code>DeviceCommand</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeviceCommand();

            if (data.hasOwnProperty('binaryData')) {
                obj['binaryData'] = ApiClient.convertToType(data['binaryData'], 'String');
            }
            if (data.hasOwnProperty('subfolder')) {
                obj['subfolder'] = ApiClient.convertToType(data['subfolder'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DeviceCommand</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DeviceCommand</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of DeviceCommand.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['binaryData'] && !(typeof data['binaryData'] === 'string' || data['binaryData'] instanceof String)) {
            throw new Error("Expected the field `binaryData` to be a primitive type in the JSON string but got " + data['binaryData']);
        }
        // ensure the json data is a string
        if (data['subfolder'] && !(typeof data['subfolder'] === 'string' || data['subfolder'] instanceof String)) {
            throw new Error("Expected the field `subfolder` to be a primitive type in the JSON string but got " + data['subfolder']);
        }

        return true;
    }


}

DeviceCommand.RequiredProperties = ["binaryData"];

/**
 * Base64 Encoded Command String
 * @member {String} binaryData
 */
DeviceCommand.prototype['binaryData'] = undefined;

/**
 * @member {String} subfolder
 */
DeviceCommand.prototype['subfolder'] = undefined;






export default DeviceCommand;


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
import DeviceConfig from './DeviceConfig';
import DeviceCredential from './DeviceCredential';
import GatewayConfig from './GatewayConfig';
import LogLevel from './LogLevel';

/**
 * The NewDevice model module.
 * @module model/NewDevice
 * @version 1.0
 */
class NewDevice {
    /**
     * Constructs a new <code>NewDevice</code>.
     * @alias module:model/NewDevice
     * @param id {String} 
     */
    constructor(id) { 
        
        NewDevice.initialize(this, id);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id) { 
        obj['id'] = id;
    }

    /**
     * Constructs a <code>NewDevice</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewDevice} obj Optional instance to populate.
     * @return {module:model/NewDevice} The populated <code>NewDevice</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NewDevice();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('blocked')) {
                obj['blocked'] = ApiClient.convertToType(data['blocked'], 'Boolean');
            }
            if (data.hasOwnProperty('credentials')) {
                obj['credentials'] = ApiClient.convertToType(data['credentials'], [DeviceCredential]);
            }
            if (data.hasOwnProperty('gatewayConfig')) {
                obj['gatewayConfig'] = GatewayConfig.constructFromObject(data['gatewayConfig']);
            }
            if (data.hasOwnProperty('config')) {
                obj['config'] = DeviceConfig.constructFromObject(data['config']);
            }
            if (data.hasOwnProperty('logLevel')) {
                obj['logLevel'] = LogLevel.constructFromObject(data['logLevel']);
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], {'String': 'String'});
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>NewDevice</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>NewDevice</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of NewDevice.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        if (data['credentials']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['credentials'])) {
                throw new Error("Expected the field `credentials` to be an array in the JSON data but got " + data['credentials']);
            }
            // validate the optional field `credentials` (array)
            for (const item of data['credentials']) {
                DeviceCredential.validateJsonObject(item);
            };
        }
        // validate the optional field `gatewayConfig`
        if (data['gatewayConfig']) { // data not null
          GatewayConfig.validateJSON(data['gatewayConfig']);
        }
        // validate the optional field `config`
        if (data['config']) { // data not null
          DeviceConfig.validateJSON(data['config']);
        }

        return true;
    }


}

NewDevice.RequiredProperties = ["id"];

/**
 * @member {String} id
 */
NewDevice.prototype['id'] = undefined;

/**
 * @member {Boolean} blocked
 */
NewDevice.prototype['blocked'] = undefined;

/**
 * @member {Array.<module:model/DeviceCredential>} credentials
 */
NewDevice.prototype['credentials'] = undefined;

/**
 * @member {module:model/GatewayConfig} gatewayConfig
 */
NewDevice.prototype['gatewayConfig'] = undefined;

/**
 * @member {module:model/DeviceConfig} config
 */
NewDevice.prototype['config'] = undefined;

/**
 * @member {module:model/LogLevel} logLevel
 */
NewDevice.prototype['logLevel'] = undefined;

/**
 * @member {Object.<String, String>} metadata
 */
NewDevice.prototype['metadata'] = undefined;






export default NewDevice;


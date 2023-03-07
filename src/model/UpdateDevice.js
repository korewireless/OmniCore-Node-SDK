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
import DeviceCredential from './DeviceCredential';
import LogLevel from './LogLevel';

/**
 * The UpdateDevice model module.
 * @module model/UpdateDevice
 * @version 1.0
 */
class UpdateDevice {
    /**
     * Constructs a new <code>UpdateDevice</code>.
     * @alias module:model/UpdateDevice
     */
    constructor() { 
        
        UpdateDevice.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UpdateDevice</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateDevice} obj Optional instance to populate.
     * @return {module:model/UpdateDevice} The populated <code>UpdateDevice</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateDevice();

            if (data.hasOwnProperty('blocked')) {
                obj['blocked'] = ApiClient.convertToType(data['blocked'], 'Boolean');
            }
            if (data.hasOwnProperty('credentials')) {
                obj['credentials'] = ApiClient.convertToType(data['credentials'], [DeviceCredential]);
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
     * Validates the JSON data with respect to <code>UpdateDevice</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UpdateDevice</code>.
     */
    static validateJSON(data) {
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

        return true;
    }


}



/**
 * @member {Boolean} blocked
 */
UpdateDevice.prototype['blocked'] = undefined;

/**
 * @member {Array.<module:model/DeviceCredential>} credentials
 */
UpdateDevice.prototype['credentials'] = undefined;

/**
 * @member {module:model/LogLevel} logLevel
 */
UpdateDevice.prototype['logLevel'] = undefined;

/**
 * @member {Object.<String, String>} metadata
 */
UpdateDevice.prototype['metadata'] = undefined;






export default UpdateDevice;

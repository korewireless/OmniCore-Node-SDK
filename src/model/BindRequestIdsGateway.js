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
 * The BindRequestIdsGateway model module.
 * @module model/BindRequestIdsGateway
 * @version 1.0
 */
class BindRequestIdsGateway {
    /**
     * Constructs a new <code>BindRequestIdsGateway</code>.
     * @alias module:model/BindRequestIdsGateway
     * @param deviceIds {Array.<String>} 
     * @param gatewayId {String} 
     */
    constructor(deviceIds, gatewayId) { 
        
        BindRequestIdsGateway.initialize(this, deviceIds, gatewayId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, deviceIds, gatewayId) { 
        obj['deviceIds'] = deviceIds;
        obj['gatewayId'] = gatewayId;
    }

    /**
     * Constructs a <code>BindRequestIdsGateway</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BindRequestIdsGateway} obj Optional instance to populate.
     * @return {module:model/BindRequestIdsGateway} The populated <code>BindRequestIdsGateway</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BindRequestIdsGateway();

            if (data.hasOwnProperty('deviceIds')) {
                obj['deviceIds'] = ApiClient.convertToType(data['deviceIds'], ['String']);
            }
            if (data.hasOwnProperty('gatewayId')) {
                obj['gatewayId'] = ApiClient.convertToType(data['gatewayId'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>BindRequestIdsGateway</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>BindRequestIdsGateway</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of BindRequestIdsGateway.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is an array
        if (!Array.isArray(data['deviceIds'])) {
            throw new Error("Expected the field `deviceIds` to be an array in the JSON data but got " + data['deviceIds']);
        }
        // ensure the json data is a string
        if (data['gatewayId'] && !(typeof data['gatewayId'] === 'string' || data['gatewayId'] instanceof String)) {
            throw new Error("Expected the field `gatewayId` to be a primitive type in the JSON string but got " + data['gatewayId']);
        }

        return true;
    }


}

BindRequestIdsGateway.RequiredProperties = ["deviceIds", "gatewayId"];

/**
 * @member {Array.<String>} deviceIds
 */
BindRequestIdsGateway.prototype['deviceIds'] = undefined;

/**
 * @member {String} gatewayId
 */
BindRequestIdsGateway.prototype['gatewayId'] = undefined;






export default BindRequestIdsGateway;


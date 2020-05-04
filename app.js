SOAP Webservices:  https://e3.sgsecure.sg/sgsecure/api/soap/jos-v1.0.wsdl

 

getAllAedsRequest   - direct

getAedsLatLongRequest -direct

getAedRequest   -direct

getNearbyAedsRequest -direct

getAedsFilterRequest - direct

getAllLamppostsRequest -direct 

enableExtPushMsgRequest - sqs

alertsRequest -direct

registerRequest -sqs 

registerMyResponderRequest -sqs

updateEndpointLatLngRequest -sqs

updateEndpointLatLngMyResponderRequest -sqs

updateBadgeNoRequest - direct

subcribeLocationRequest - sqs

unSubcribeLocationRequest - sqs

getSubcribeListRequest - direct

getPushMsgStatusRequest - direct

saveTransactionLogRequest - sqs

enablePushMsgRequest  - sqs

enableCNAPushMsgRequest - has removed since no longer using

getCNAPushMsgStatusRequest - has removed since no longer using

submitCaseRequest - sqs

getExtPushMsgStatusRequest - direct

 
	
 

SGSecure REST API:

 

sgsecure/api/rest/alerts -direct

sgsecure/api/rest/mfa-travel-notice -direct

sgsecure/api/rest/mfa-travel-notice-count -direct

sgsecure/api/rest/submitCase -sqs

sgsecure/api/rest/createPanicCase -direct

sgsecure/api/rest/updateLocation  -direct

sgsecure/api/rest/retrieveLocation -direct

sgsecure/api/rest/deactivatePanicCase -direct

 

  
these are  not in SGSEcure Backend
MyRESPONDER API:

 

scdfstg.api.gov.sg:443/ExternalParty/api/Token/FetchToken

scdfstg.api.gov.sg:443/ExternalParty/api/Token/RegisterToken

scdfstg.api.gov.sg:443/ExternalParty/api/Profile/RetrieveProfile

scdfstg.api.gov.sg:443/ExternalParty/api/Profile/UpdateProfile

scdfstg.api.gov.sg:443/ExternalParty/api/Case/CaseDetails

scdfstg.api.gov.sg:443/ExternalParty/api/Case/UpdateRescuerStatus

scdfstg.api.gov.sg:443/ExternalParty/api/Case/SubmitFeedback

scdfstg.api.gov.sg:443/ExternalParty/api/Case/ShowID

scdfstg.api.gov.sg:443/ExternalParty/api/Case/TapWhenExtinguished

scdfstg.api.gov.sg:443/ExternalParty/api/Login/SingpassLogin
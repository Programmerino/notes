* A QR code probably lasts for 2  or 3 (most likely) minutes
* pdf417 barcode
* Generate from the cashless key and SOA key
	* If these are static, then they can be generated in te fly without any communication with servers
* Endpoint status:
	* No permissions
		* AuditService
		* retrieveInstitutionCashlessPaymentSystemInfoAsync
		* getAccountBalancesAsync
		* getVersionInfoAsync
		* retrieveGETMealPlanPurchaseHistoryAsync
		* retrieveAccountsLookupListAsync
		* healthCheck
		* getAvaiableMealPlansAsync
		* retrieveInstitutionCreditPaymentSystemInfoAsync
		* getMealPlanCostAsync
		* retrievePaymentSystemInfoAsync
		* lookupPaymentTokenAsync
		* retrieveAccountUncheckedAsync
		* retrieveAllSettingsAsync
		* retrieveByInstitutionAsync
		* retrieveMealPlansAsync
	* getPaymentToken not implemented
	* getCashlessPatronAsync not implemented
	* retrieveAutoDepositAccountListAsync ERROR
	* retrieveBillingAddressAsync address id inaccesible
	* No reason to use retrieveAccountAsync (there is retrieveAccountsAsync)
	* retrievePaymentSystemTransactionLogByTransactionIdAsync doesn't work with valid transaction ids
	* retrieveAutoDepositSettingsAsync ERROR
	* Investigate more:
		* queryDiscountsAsync
		* getCashlessDepositSummaryByTenderAsync (seems unnecessary)
	* Setting domain category pairs
		* soa, general
		* none
		* get, deposit
		* patron-ui, meal_donation
		* get, feature
	* systemCredentials
		* domain ""
		* username "get_mobile"
		* pasword "NOT_USED"
	* VALID_REDIRECT_URLS
	* ENABLE_ONETIME_DEPOSITS
	* ENABLE_PURCHASE_MEAL_PLAN
	* USER_CASHLESS_REFRESH_MINUTES suggests that the pin might change every 60 minutes
	* 2 minute cache for settings
	* AccountType
		* Meals is 1
		* Charge is 2
		* Declining Balance is 3 (probably means no deposits enabled)
		* ApplePay is 4
	* PaymentType
		* Credit is 1
		* BillMe is 2
	* Payment System Type
		* OPCS is 1 (this is what CU Boulder uses)
		* CSGOLD is 2
		* MONETRA is 3
		* USAEPAY is 4
* authenticateSessionToken to renew session
* deposit commerce is good, but deposit seems disabled for meal plans
* Merchants are disabled
* TnssendEmailAsInstitution might allow phishing
* saveNotificationAsync might allow push notifications to phones with the mobile app
* requestDepositAsync
* User Settings
	* DISPLAY_TENDERS
	* DEPOSIT_TENDERS
	* MEAL_DONATIONS_TENDERS
	* MEAL_DONATIONS_FREEFORM_ENABLED
	* MEAL_DONATIONS_FIXED_DOLLAR_AMOUNTS
	* MEAL_DONATIONS_FIXED_MEAL_AMOUNTS
	* PAYMENT_TYPES
	* CREDIT_PAYMENT_SYSTEM_TYPE
	* FREEFORM_GUEST_DEPOSIT_ENABLED
	* GUEST_AMOUNTS
	* GUEST_MINIMUM
	* GUEST_MAXIMUM
	* BILLME_MAPPING
	* FREEFORM_DEPOSIT_ENABLED
	* PRESET_DEPOSIT_AMOUNTS_CREDITCARD
	* BILLME_AMOUNTS
	* BILLME_AMOUNT_MIN
	* BILLME_AMOUNT_MAX
	* BILLME_FREEFORM_ENABLED
	* CREDIT_PAYMENT_SYSTEM_TYPE
	* CREDITCARD_AMOUNT_MIN
	* CREDITCARD_AMOUNT_MAX
	* AUTO_DEPOSIT_ENABLED
	* ONETIME_DEPOSITS_ENABLED
	* GUEST_DEPOSIT_ENABLED
	* MEAL_DONATIONS_ENABLED
	* LOW_BALANCE_AUTO_DEPOSIT_ENABLED
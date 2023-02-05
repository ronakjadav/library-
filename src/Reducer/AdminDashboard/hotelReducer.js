/* eslint-disable array-callback-return */
import {
  INPROGRESS,
  IS_AUTHENTICATED,
  ERROR,
  LOGOUT,
  STOPLOADER,
  RESET_PASSWORD,
  GET_OUTLETS,
  SET_OUTLET,
  GET_ROLES,
  GET_USERS,
  ADD_ROLE,
  UPDATE_ROLE,
  DELETE_ROLE,
  DELETE_USER,
  ADD_USER,
  UPDATE_USER,
  ADD_ADMIN,
  DELETE_ADMIN,
  GET_ALL_ADMIN,
  ADD_OUTLET,
  DELETE_OUTLET,
  UPDATE_OUTLET,
  GET_MEALTYPES,
  UPDATE_ADMIN,
  GET_SYSTEM_LOGS,
  UPDATE_MEAL,
  DELETE_MEAL,
  ADD_MEAL,
  GET_ALL_TAGS,
  ADD_MEAL_TIMING,
  GET_MEAL_TIMINGS,
  DELETE_MEAL_TIMING,
  UPDATE_MEAL_TIME,
  ADD_TAG,
  UPDATE_TAG,
  DELETE_TAG,
  GET_ALL_OUTLETTAGS,
  ADD_OUTLETTAG,
  DELETE_OUTLETTAG,
  UPDATE_OUTLETTAG,
  GET_CLOSURES,
  ADD_CLOSURE,
  UPDATE_CLOSURE,
  DELETE_CLOSURE,
  GET_PREORDERS,
  ADD_PREORDER,
  DELETE_PREORDER,
  UPDATE_PREORDER,
  GET_TABLE,
  UPDATE_TABLE,
  DELETE_TABLE,
  ADD_TABLE,
  GET_OUTLET_NOTES,
  ADD_OUTLET_NOTE,
  GET_SEATING_TYPE,
  GET_SEAT_TYPE,
  ADD_SEAT_TYPE,
  UPDATE_SEAT_TYPE,
  DELETE_SEAT_TYPE,
  UPDATE_OUTLET_SEATING_INFO,
  GET_OUTLET_SEATING_INFO,
  UPLOAD_FLOOR_PLAN,
  ADD_OUTLET_TABLE,
  GET_OUTLET_TABLE,
  UPDATE_OUTLET_TABLE_POSITION,
  ADD_SEATING_TYPE,
  UPDATE_SEATING_TYPE,
  DELETE_SEATING_TYPE,
  UPDATE_OUTLET_TABLE_INFO,
  DELETE_OUTLET_TABLE,
  ADD_TABLE_MERGE,
  GET_TABLE_MERGE,
  DELETE_TABLE_MERGE,
  DELETE_TABLE_MERGE_POSSIBILITY,
  ADD_TABLE_MERGE_POSSIBILITY,
  UPDATE_TABLE_MERGE,
  ADD_TABLE_SECTION,
  GET_TABLE_SECTION,
  GET_COMPANY,
  ADD_COMPANY,
  UPDATE_COMPANY,
  DELETE_COMPANY,
  GET_COMPANY_OUTLET,
  ADD_COMPANY_OUTLET,
  DELETE_COMPANY_OUTLET,
  GET_ALL_CUSTOMER,
  GET_ALL_INVOICE_DETAILS,
  UPDATE_ALL_CUSTOMER,
  RESET_OUTLETTABLES,
  SET_VISIBLE_SELECTION,
  SET_INVISIBLE_SELECTION,
  GET_TAG_CATEGORY,
  ADD_TAG_CATEGORY,
  UPDATE_TAG_CATEGORY,
  DELETE_TAG_CATEGORY,
  GET_TIME_SLOT,
  GET_BOOKING_TABLE,
  UPDATE_INVOICE_STATUS,
  GET_SEATING_VIEW,
  UPDATE_SEATING_TABLE,
  MOVE_SEATING_RESERVATION,
  RESET_SEATING_VIEW_TABLES,
} from "../../utils/AdminDashboard/Constant";
import initialState from "./initialState";
import { GET_BOOKING_RESERVATION } from "../../utils/AdminDashboard/Constant";

const hotelReducer = (state = initialState.hotelReducer, action) => {
  switch (action.type) {
    case INPROGRESS:
      return {
        ...state,
        error_msg: "",
        success_msg: null,
        transactionMessage: null,
        loading: true,
      };

    case STOPLOADER:
      return {
        ...state,
        error_msg: "",
        success_msg: null,
        transactionMessage: null,
        loading: false,
      };

    case ERROR:
      return {
        ...state,
        error_msg: action.data.error_msg + "E:" + Math.random(),
        success_msg: null,
        transactionMessage: null,
        loading: false,
      };

    case LOGOUT:
      return {
        ...state,
        loading: false,
        error_msg: null,
        success_msg: null,
        transactionMessage: null,
        token: null,
        userDetail: null,
        outlets: [],
        roles: [],
        selectedOutlet: null,
        users: [],
        superUsers: [],
        mealTypes: [],
        systemLogs: [],
        tags: [],
        mealTimings: [],
        outletTags: [],
        closures: [],
        preorders: [],
        tables: [],
        outletNotes: [],
      };

    case IS_AUTHENTICATED:
      return {
        ...state,
        error_msg: null,
        success_msg: null,
        transactionMessage: null,
        loading: false,
        token: action.data.accessToken,
        userDetail: action.data.userDetail,
      };

    case RESET_PASSWORD:
      return {
        ...state,
        error_msg: null,
        success_msg: action.data,
        loading: false,
        token: null,
        userDetail: null,
      };

    case GET_OUTLETS:
      let selectedOutlet = null;

      if (action.data.length > 0) {
        const activeOutlets = action.data.filter(
          (data) => data.outlet.isActive === true
        );
        if (activeOutlets.length > 0) {
          selectedOutlet = action.data[0];
        }
      }
      return {
        ...state,
        error_msg: null,
        success_msg: null,
        loading: false,
        outlets: action.data,
        selectedOutlet: selectedOutlet,
      };

    case SET_OUTLET:
      return {
        ...state,
        error_msg: null,
        success_msg: null,
        loading: false,
        selectedOutlet: action.data,
        roles: [],
        users: [],
        mealTypes: [],
        systemLogs: [],
        tags: [],
        mealTimings: [],
        outletTags: [],
        closures: [],
        preorders: [],
        floors: [],
        outletNotes: [],
        seatingType: [],
        seatType: [],
        outletSeatingInfo: null,
        outletTables: [],
        mergedTables: [],
        sectionTables: [],
      };

    case GET_SYSTEM_LOGS:
      return {
        ...state,
        error_msg: null,
        success_msg: null,
        loading: false,
        systemLogs: action.data.data,
      };

    case GET_ROLES:
      return {
        ...state,
        error_msg: null,
        success_msg: null,
        loading: false,
        roles: action.data,
      };

    case GET_USERS:
      return {
        ...state,
        error_msg: null,
        success_msg: null,
        loading: false,
        users: action.data,
      };

    case GET_MEALTYPES:
      return {
        ...state,
        error_msg: null,
        success_msg: null,
        loading: false,
        mealTypes: action.data,
      };

    case GET_ALL_TAGS:
      return {
        ...state,
        error_msg: null,
        success_msg: null,
        loading: false,
        tags: action.data,
      };

    case ADD_ROLE:
      state.roles.push(action.data.data);
      return {
        ...state,
        error_msg: null,
        success_msg: action.data.message,
        loading: false,
        roles: [...state.roles],
      };

    case UPDATE_ROLE:
      let role = state.roles.find((data) => data.id === action.data.data.id);
      if (role) {
        role.name = action.data.data.name;
        role.description = action.data.data.description;
        role.isActive = action.data.data.isActive;
        role.createdAt = action.data.data.createdAt;
        role.updatedAt = action.data.data.updatedAt;
        role.createdBy = action.data.data.createdBy;
        role.updatedBy = action.data.data.updatedBy;
      }
      return {
        ...state,
        error_msg: null,
        success_msg: action.data.message,
        loading: false,
        roles: [...state.roles],
      };

    case ADD_USER:
      state.users.push(action.data.data);
      return {
        ...state,
        error_msg: null,
        success_msg: action.data.message,
        loading: false,
        users: [...state.users],
      };

    case UPDATE_USER:
      let user = state.users.find((data) => data.id === action.data.data.id);
      if (user) {
        user.userName = action.data.data.userName;
        user.firstName = action.data.data.firstName;
        user.lastName = action.data.data.lastName;
        user.email = action.data.data.email;
        user.phone = action.data.data.phone;
        user.Role = action.data.data.Role;
        user.isActive = action.data.data.isActive;
        user.createdAt = action.data.data.createdAt;
        user.updatedAt = action.data.data.updatedAt;
        user.createdBy = action.data.data.createdBy;
        user.updatedBy = action.data.data.updatedBy;
      }
      return {
        ...state,
        error_msg: null,
        success_msg: action.data.message,
        loading: false,
        users: [...state.users],
      };

    case GET_ALL_ADMIN:
      return {
        ...state,
        error_msg: null,
        success_msg: null,
        loading: false,
        superUsers: action.data.data,
      };

    case ADD_ADMIN:
      state.superUsers.push(action.data.data);
      return {
        ...state,
        error_msg: null,
        success_msg: action.data.message,
        loading: false,
        superUsers: [...state.superUsers],
      };

    case UPDATE_ADMIN:
      let admin = state.superUsers.find(
        (data) => data.id === action.data.data.id
      );
      if (admin) {
        admin.userName = action.data.data.userName;
        admin.firstName = action.data.data.firstName;
        admin.lastName = action.data.data.lastName;
        admin.email = action.data.data.email;
        admin.phone = action.data.data.phone;
        admin.isActive = action.data.data.isActive;
        admin.createdAt = action.data.data.createdAt;
        admin.updatedAt = action.data.data.updatedAt;
        admin.createdBy = action.data.data.createdBy;
        admin.updatedBy = action.data.data.updatedBy;
      }
      return {
        ...state,
        error_msg: null,
        success_msg: action.data.message,
        loading: false,
        superUsers: [...state.superUsers],
      };

    case ADD_OUTLET:
      state.outlets.push(action.data.data);
      return {
        ...state,
        error_msg: null,
        success_msg: action.data.message,
        loading: false,
        outlets: [...state.outlets],
      };

    case DELETE_ROLE:
      let deleteRole = state.roles.find((data) => data.id === action.data.data);
      if (deleteRole) {
        let index = state.roles.indexOf(deleteRole);
        state.roles.splice(index, 1);
      }
      return {
        ...state,
        error_msg: null,
        success_msg: action.data.message,
        loading: false,
        roles: [...state.roles],
      };

    case DELETE_OUTLET:
      let deleteOutlet = state.outlets.find(
        (data) => data.outlet.id === action.data.data
      );
      if (deleteOutlet) {
        let index = state.outlets.indexOf(deleteOutlet);
        state.outlets.splice(index, 1);
      }
      return {
        ...state,
        error_msg: null,
        success_msg: action.data.message,
        loading: false,
        outlets: [...state.outlets],
      };

    case DELETE_USER:
      let deleteUser = state.users.find((data) => data.id === action.data.data);
      if (deleteUser) {
        let index = state.users.indexOf(deleteUser);
        state.users.splice(index, 1);
      }
      return {
        ...state,
        error_msg: null,
        success_msg: action.data.message,
        loading: false,
        users: [...state.users],
      };

    case DELETE_ADMIN:
      let deleteAdmin = state.superUsers.find(
        (data) => data.id === action.data.data
      );
      if (deleteAdmin) {
        let index = state.superUsers.indexOf(deleteAdmin);
        state.superUsers.splice(index, 1);
      }
      return {
        ...state,
        error_msg: null,
        success_msg: action.data.message,
        loading: false,
        superUsers: [...state.superUsers],
      };

    case UPDATE_OUTLET:
      let outlet = state.outlets.find(
        (data) => data.outlet.id === action.data.data.id
      );
      if (outlet) {
        outlet.outlet.name = action.data.data.name;
        outlet.outlet.description = action.data.data.description;
        outlet.outlet.address1 = action.data.data.address1;
        outlet.outlet.postcode = action.data.data.postcode;
        outlet.outlet.latitude = action.data.data.latitude;
        outlet.outlet.longitude = action.data.data.longitude;
        outlet.outlet.phone = action.data.data.phone;
        outlet.outlet.email = action.data.data.email;
        outlet.outlet.googlePlaceId = action.data.data.googlePlaceId;
        outlet.outlet.gst = action.data.data.gst;
        outlet.outlet.timezone = action.data.data.timezone;
        outlet.outlet.rebookingTableInterval =
          action.data.data.rebookingTableInterval;
        outlet.outlet.isActive = action.data.data.isActive;
        outlet.outlet.createdAt = action.data.data.createdAt;
        outlet.outlet.updatedAt = action.data.data.updatedAt;
        outlet.outlet.createdBy = action.data.data.createdBy;
        outlet.outlet.updatedBy = action.data.data.updatedBy;
        outlet.outlet.image = action.data.data.image;
        outlet.outlet.allowOrder = action.data.data.allowOrder;
        outlet.outlet.allowBooking = action.data.data.allowBooking;
        outlet.outlet.Company = action.data.data.Company;
        outlet.outlet.paxSpacing = action.data.data.paxSpacing;
      }
      return {
        ...state,
        error_msg: null,
        success_msg: action.data.message,
        loading: false,
        outlets: [...state.outlets],
      };

    case UPDATE_MEAL:
      let meal = state.mealTypes.find(
        (data) => data.id === action.data.data.id
      );
      if (meal) {
        meal.name = action.data.data.name;
        meal.description = action.data.data.description;
        meal.isActive = action.data.data.isActive;
        meal.createdAt = action.data.data.createdAt;
        meal.updatedAt = action.data.data.updatedAt;
        meal.createdBy = action.data.data.createdBy;
        meal.updatedBy = action.data.data.updatedBy;
      }
      return {
        ...state,
        error_msg: null,
        success_msg: action.data.message,
        loading: false,
        mealTypes: [...state.mealTypes],
      };

    case DELETE_MEAL:
      let deletemeal = state.mealTypes.find(
        (data) => data.id === action.data.data
      );
      if (deletemeal) {
        let index = state.mealTypes.indexOf(deletemeal);
        state.mealTypes.splice(index, 1);
      }
      return {
        ...state,
        error_msg: null,
        success_msg: action.data.message,
        loading: false,
        mealTypes: [...state.mealTypes],
      };

    case ADD_MEAL:
      state.mealTypes.push(action.data.data);
      return {
        ...state,
        error_msg: null,
        success_msg: action.data.message,
        loading: false,
        mealTypes: [...state.mealTypes],
      };

    case GET_MEAL_TIMINGS:
      return {
        ...state,
        error_msg: null,
        success_msg: null,
        loading: false,
        mealTimings: action.data,
      };

    case ADD_MEAL_TIMING:
      state.mealTimings.push(action.data.data);
      return {
        ...state,
        error_msg: null,
        success_msg: action.data.message,
        loading: false,
        mealTimings: [...state.mealTimings],
      };

    case UPDATE_MEAL_TIME:
      let mealTime = state.mealTimings.find(
        (data) => data.id === action.data.data.id
      );
      if (mealTime) {
        mealTime.sectionId = action.data.data.sectionId;
        mealTime.dayOfWeekName = action.data.data.dayOfWeekName;
        mealTime.Section = action.data.data.Section;
        mealTime.dayofweek = action.data.data.dayofweek;
        mealTime.isActive = action.data.data.isActive;
        mealTime.openingTime = action.data.data.openingTime;
        mealTime.closingTime = action.data.data.closingTime;
        mealTime.createdAt = action.data.data.createdAt;
        mealTime.updatedAt = action.data.data.updatedAt;
        mealTime.createdBy = action.data.data.createdBy;
        mealTime.updatedBy = action.data.data.updatedBy;
      }
      return {
        ...state,
        error_msg: null,
        success_msg: action.data.message,
        loading: false,
        mealTimings: [...state.mealTimings],
      };

    case DELETE_MEAL_TIMING:
      let deleteMealTime = state.mealTimings.find(
        (data) => data.id === action.data.data
      );
      if (deleteMealTime) {
        let index = state.mealTimings.indexOf(deleteMealTime);
        state.mealTimings.splice(index, 1);
      }
      return {
        ...state,
        error_msg: null,
        success_msg: action.data.message,
        loading: false,
        mealTimings: [...state.mealTimings],
      };

    case ADD_TAG:
      state.tags.push(action.data.data);
      return {
        ...state,
        error_msg: null,
        success_msg: action.data.message,
        loading: false,
        tags: [...state.tags],
      };

    case UPDATE_TAG:
      let tag = state.tags.find((data) => data.id === action.data.data.id);
      if (tag) {
        tag.name = action.data.data.name;
        tag.description = action.data.data.description;
        tag.isActive = action.data.data.isActive;
        tag.createdAt = action.data.data.createdAt;
        tag.updatedAt = action.data.data.updatedAt;
        tag.createdBy = action.data.data.createdBy;
        tag.updatedBy = action.data.data.updatedBy;
        tag.tagCategory = action.data.data.tagCategoryId;
        tag.TagCategory = action.data.data.TagCategory;
      }
      return {
        ...state,
        error_msg: null,
        success_msg: action.data.message,
        loading: false,
        tags: [...state.tags],
      };

    case DELETE_TAG:
      let deleteTag = state.tags.find((data) => data.id === action.data.data);
      if (deleteTag) {
        let index = state.tags.indexOf(deleteTag);
        state.tags.splice(index, 1);
      }
      return {
        ...state,
        error_msg: null,
        success_msg: action.data.message,
        loading: false,
        tags: [...state.tags],
      };

    case GET_ALL_OUTLETTAGS:
      return {
        ...state,
        error_msg: null,
        success_msg: null,
        loading: false,
        outletTags: action.data.data,
      };

    case ADD_OUTLETTAG:
      state.outletTags.push(action.data.data);
      return {
        ...state,
        error_msg: null,
        success_msg: action.data.message,
        loading: false,
        outletTags: [...state.outletTags],
      };

    case DELETE_OUTLETTAG:
      let deletOutletTag = state.outletTags.find(
        (data) => data.id === action.data.data
      );
      if (deletOutletTag) {
        let index = state.outletTags.indexOf(deletOutletTag);
        state.outletTags.splice(index, 1);
      }
      return {
        ...state,
        error_msg: null,
        success_msg: action.data.message,
        loading: false,
        outletTags: [...state.outletTags],
      };

    case UPDATE_OUTLETTAG:
      let outletTag = state.outletTags.find(
        (data) => data.id === action.data.data.id
      );
      if (outletTag) {
        outletTag.tagId = action.data.data.tagId;
        outletTag.Tag = action.data.data.Tag;
        outletTag.isActive = action.data.data.isActive;
        outletTag.createdAt = action.data.data.createdAt;
        outletTag.updatedAt = action.data.data.updatedAt;
        outletTag.createdBy = action.data.data.createdBy;
        outletTag.updatedBy = action.data.data.updatedBy;
      }
      return {
        ...state,
        error_msg: null,
        success_msg: action.data.message,
        loading: false,
        outletTags: [...state.outletTags],
      };

    case GET_CLOSURES:
      return {
        ...state,
        error_msg: null,
        success_msg: null,
        loading: false,
        closures: action.data.data,
      };

    case ADD_CLOSURE:
      state.closures.push(action.data.data);
      return {
        ...state,
        error_msg: null,
        success_msg: action.data.message,
        loading: false,
        closures: [...state.closures],
      };

    case UPDATE_CLOSURE:
      let closure = state.closures.find(
        (data) => data.id === action.data.data.id
      );
      if (closure) {
        closure.sectionId = action.data.data.sectionId;
        closure.dayofweek = action.data.data.dayofweek;
        closure.openingTime = action.data.data.openingTime;
        closure.closingTime = action.data.data.closingTime;
        closure.effectiveFrom = action.data.data.effectiveFrom;
        closure.effectiveTo = action.data.data.effectiveTo;
        closure.reason = action.data.data.reason;
        closure.outletStatus = action.data.data.outletStatus;
        closure.isActive = action.data.data.isActive;
        closure.Section = action.data.data.Section;
        closure.createdAt = action.data.data.createdAt;
        closure.updatedAt = action.data.data.updatedAt;
        closure.createdBy = action.data.data.createdBy;
        closure.updatedBy = action.data.data.updatedBy;
      }
      return {
        ...state,
        error_msg: null,
        success_msg: action.data.message,
        loading: false,
        closures: [...state.closures],
      };

    case DELETE_CLOSURE:
      let deleteClosure = state.closures.find(
        (data) => data.id === action.data.data
      );
      if (deleteClosure) {
        let index = state.closures.indexOf(deleteClosure);
        state.closures.splice(index, 1);
      }
      return {
        ...state,
        error_msg: null,
        success_msg: action.data.message,
        loading: false,
        closures: [...state.closures],
      };

    case GET_PREORDERS:
      return {
        ...state,
        error_msg: null,
        success_msg: null,
        loading: false,
        preorders: action.data,
      };

    case ADD_PREORDER:
      action.data.data.map((data) => state.preorders.push(data));
      return {
        ...state,
        error_msg: null,
        success_msg: action.data.message,
        loading: false,
        preorders: [...state.preorders],
      };

    case UPDATE_PREORDER:
      let preOrder = state.preorders.find(
        (data) => data.id === action.data.data.id
      );
      if (preOrder) {
        preOrder.image = action.data.data.image;
        preOrder.name = action.data.data.name;
        preOrder.sectionId = action.data.data.sectionId;
        preOrder.unitPrice = action.data.data.unitPrice;
        preOrder.dailyMaxQty = action.data.data.dailyMaxQty;
        preOrder.bookingMaxQty = action.data.data.bookingMaxQty;
        preOrder.maximumSpend = action.data.data.maximumSpend;
        preOrder.creditCardHoldAmount = action.data.data.creditCardHoldAmount;
        preOrder.description = action.data.data.description;
        preOrder.Section = action.data.data.Section;
        preOrder.isActive = action.data.data.isActive;
        preOrder.createdAt = action.data.data.createdAt;
        preOrder.updatedAt = action.data.data.updatedAt;
        preOrder.createdBy = action.data.data.createdBy;
        preOrder.updatedBy = action.data.data.updatedBy;
      }
      return {
        ...state,
        error_msg: null,
        success_msg: action.data.message,
        loading: false,
        preorders: [...state.preorders],
      };

    case DELETE_PREORDER:
      let deletePreOrder = state.preorders.find(
        (data) => data.id === action.data.data
      );
      if (deletePreOrder) {
        let index = state.preorders.indexOf(deletePreOrder);
        state.preorders.splice(index, 1);
      }
      return {
        ...state,
        error_msg: null,
        success_msg: action.data.message,
        loading: false,
        preorders: [...state.preorders],
      };

    case GET_TABLE:
      return {
        ...state,
        error_msg: null,
        success_msg: null,
        loading: false,
        tables: action.data,
      };

    case ADD_TABLE:
      state.tables.push(action.data.data);
      return {
        ...state,
        error_msg: null,
        success_msg: action.data.message,
        loading: false,
        tables: [...state.tables],
      };

    case UPDATE_TABLE:
      let table = state.tables.find((data) => data.id === action.data.data.id);
      if (table) {
        table.shape = action.data.data.shape;
        table.name = action.data.data.name;
        table.noOfPerson = action.data.data.noOfPerson;
        table.description = action.data.data.description;
        table.isActive = action.data.data.isActive;
        table.createdAt = action.data.data.createdAt;
        table.updatedAt = action.data.data.updatedAt;
        table.createdBy = action.data.data.createdBy;
        table.updatedBy = action.data.data.updatedBy;
      }
      return {
        ...state,
        error_msg: null,
        success_msg: action.data.message,
        loading: false,
        tables: [...state.tables],
      };

    case DELETE_TABLE:
      let deleteTable = state.tables.find(
        (data) => data.id === action.data.data
      );
      if (deleteTable) {
        let index = state.tables.indexOf(deleteTable);
        state.tables.splice(index, 1);
      }
      return {
        ...state,
        error_msg: null,
        success_msg: action.data.message,
        loading: false,
        tables: [...state.tables],
      };

    case GET_OUTLET_NOTES:
      return {
        ...state,
        error_msg: null,
        success_msg: null,
        loading: false,
        outletNotes: action.data,
      };

    case ADD_OUTLET_NOTE:
      state.outletNotes.push(action.data.data);
      return {
        ...state,
        error_msg: null,
        success_msg: action.data.message,
        loading: false,
        outletNotes: [...state.outletNotes],
      };

    case GET_SEATING_TYPE:
      return {
        ...state,
        error_msg: null,
        success_msg: null,
        loading: false,
        seatingType: action.data,
      };

    case GET_SEAT_TYPE:
      return {
        ...state,
        error_msg: null,
        success_msg: null,
        loading: false,
        seatType: action.data,
      };

    case ADD_SEAT_TYPE:
      state.seatType.push(action.data.data);
      return {
        ...state,
        error_msg: null,
        success_msg: action.data.message,
        loading: false,
        seatType: [...state.seatType],
      };

    case UPDATE_SEAT_TYPE:
      let seatTypes = state.seatType.find(
        (data) => data.id === action.data.data.id
      );
      if (seatTypes) {
        seatTypes.name = action.data.data.name;
        seatTypes.description = action.data.data.description;
        seatTypes.isActive = action.data.data.isActive;
      }
      return {
        ...state,
        error_msg: null,
        success_msg: action.data.message,
        loading: false,
        seatType: [...state.seatType],
      };

    case DELETE_SEAT_TYPE:
      let deleteSeatType = state.seatType.find(
        (data) => data.id === action.data.data
      );
      if (deleteSeatType) {
        let index = state.seatType.indexOf(deleteSeatType);
        state.seatType.splice(index, 1);
      }
      return {
        ...state,
        error_msg: null,
        success_msg: action.data.message,
        loading: false,
        seatType: [...state.seatType],
      };

    case GET_OUTLET_SEATING_INFO:
      return {
        ...state,
        error_msg: null,
        success_msg: null,
        loading: false,
        outletSeatingInfo: action.data.data,
      };

    case UPDATE_OUTLET_SEATING_INFO:
      return {
        ...state,
        error_msg: null,
        success_msg: action.data.message,
        loading: false,
        outletSeatingInfo: action.data.data,
      };

    case UPLOAD_FLOOR_PLAN:
      let floorPlan = state.outletSeatingInfo.OutletSeatingType.find(
        (data) => data.id === action.data.data.id
      );
      if (floorPlan) {
        floorPlan.image = action.data.data.image;
        floorPlan.height = action.data.data.height;
        floorPlan.width = action.data.data.width;
        floorPlan.updatedAt = action.data.data.updatedAt;
        floorPlan.updatedBy = action.data.data.updatedBy;
      }
      return {
        ...state,
        error_msg: null,
        success_msg: action.data.message,
        loading: false,
        outletSeatingInfo: { ...state.outletSeatingInfo },
      };

    case ADD_SEATING_TYPE:
      state.seatingType.push(action.data.data);
      return {
        ...state,
        error_msg: null,
        success_msg: action.data.message,
        loading: false,
        seatingType: [...state.seatingType],
      };

    case UPDATE_SEATING_TYPE:
      let seatingtypes = state.seatingType.find(
        (data) => data.id === action.data.data.id
      );
      if (seatingtypes) {
        seatingtypes.name = action.data.data.name;
        seatingtypes.description = action.data.data.description;
        seatingtypes.isActive = action.data.data.isActive;
      }
      return {
        ...state,
        error_msg: null,
        success_msg: action.data.message,
        loading: false,
        seatingType: [...state.seatingType],
      };

    case DELETE_SEATING_TYPE:
      let deleteSeatingType = state.seatingType.find(
        (data) => data.id === action.data.data
      );
      if (deleteSeatingType) {
        let index = state.seatingType.indexOf(deleteSeatingType);
        state.seatingType.splice(index, 1);
      }
      return {
        ...state,
        error_msg: null,
        success_msg: action.data.message,
        loading: false,
        seatingType: [...state.seatingType],
      };

    case GET_OUTLET_TABLE:
      return {
        ...state,
        error_msg: null,
        success_msg: null,
        loading: false,
        outletTables: action.data,
      };

    case ADD_OUTLET_TABLE:
      state.outletTables.push(action.data.data);
      return {
        ...state,
        error_msg: null,
        success_msg: action.data.message,
        loading: false,
        outletTables: [...state.outletTables],
      };

    case UPDATE_OUTLET_TABLE_POSITION:
      action.data.data.map((singleTable) => {
        const findTable = state.outletTables.find(
          (table) => table.id === singleTable.id
        );
        if (findTable) {
          findTable.xPosition = singleTable.xPosition;
          findTable.yPosition = singleTable.yPosition;
        }
      });
      return {
        ...state,
        error_msg: null,
        success_msg: action.data.message,
        loading: false,
        outletTables: [...state.outletTables],
      };

    case UPDATE_OUTLET_TABLE_INFO:
      let outletTableInfo = state.outletTables.find(
        (data) => data.id === action.data.data.id
      );
      if (outletTableInfo) {
        outletTableInfo.name = action.data.data.name;
        outletTableInfo.xPosition = action.data.data.xPosition;
        outletTableInfo.yPosition = action.data.data.yPosition;
        outletTableInfo.tableId = action.data.data.tableId;
        outletTableInfo.Table = { ...action.data.data.Table };
        outletTableInfo.outletSeatTypeId = action.data.data.outletSeatTypeId;
        outletTableInfo.OutletSeatType = { ...action.data.data.OutletSeatType };
        outletTableInfo.isActive = action.data.data.isActive;
        outletTableInfo.createdAt = action.data.data.createdAt;
        outletTableInfo.updatedAt = action.data.data.updatedAt;
        outletTableInfo.createdBy = action.data.data.createdBy;
        outletTableInfo.updatedBy = action.data.data.updatedBy;
        outletTableInfo.description = action.data.data.description;
        outletTableInfo.minimumSpendAmount =
          action.data.data.minimumSpendAmount;
        outletTableInfo.perPaxUnitDeposit = action.data.data.perPaxUnitDeposit;
        outletTableInfo.image = action.data.data.image;
      }
      return {
        ...state,
        error_msg: null,
        success_msg: action.data.message,
        loading: false,
        outletTables: [...state.outletTables],
      };

    case RESET_OUTLETTABLES:
      return {
        ...state,
        error_msg: null,
        success_msg: null,
        loading: false,
        outletTables: [],
      };

    case DELETE_OUTLET_TABLE:
      let deleteoutletTable = state.outletTables.find(
        (data) => data.id === action.data.data
      );
      if (deleteoutletTable) {
        let index = state.outletTables.indexOf(deleteoutletTable);
        state.outletTables.splice(index, 1);
      }
      return {
        ...state,
        error_msg: null,
        success_msg: action.data.message,
        loading: false,
        outletTables: [...state.outletTables],
      };

    case ADD_TABLE_MERGE:
      state.mergedTables.push(action.data.data);
      return {
        ...state,
        error_msg: null,
        success_msg: action.data.message,
        loading: false,
        mergedTables: [...state.mergedTables],
      };

    case GET_TABLE_MERGE:
      return {
        ...state,
        error_msg: null,
        success_msg: null,
        loading: false,
        mergedTables: action.data,
      };

    case UPDATE_TABLE_MERGE:
      let editTableMerge = state.mergedTables.find(
        (data) => data.id === action.data.data.id
      );
      if (editTableMerge) {
        editTableMerge.name = action.data.data.name;
        editTableMerge.minPax = action.data.data.minPax;
        editTableMerge.maxPax = action.data.data.maxPax;
        editTableMerge.isActive = action.data.data.isActive;
      }

      return {
        ...state,
        error_msg: null,
        success_msg: action.data.message,
        loading: false,
        mergedTables: [...state.mergedTables],
      };

    case DELETE_TABLE_MERGE:
      let deleteTableMerge = state.mergedTables.find(
        (data) => data.id === action.data.data
      );
      if (deleteTableMerge) {
        let index = state.mergedTables.indexOf(deleteTableMerge);
        state.mergedTables.splice(index, 1);
      }
      return {
        ...state,
        error_msg: null,
        success_msg: action.data.message,
        loading: false,
        mergedTables: [...state.mergedTables],
      };

    case DELETE_TABLE_MERGE_POSSIBILITY:
      let deleteTableMergePossibility = state.mergedTables.find(
        (data) => data.id === action.data.data.id
      );
      if (deleteTableMergePossibility) {
        deleteTableMergePossibility.GroupPossibility = [
          ...action.data.data.GroupPossibility,
        ];
      }
      return {
        ...state,
        error_msg: null,
        success_msg: action.data.message,
        loading: false,
        mergedTables: [...state.mergedTables],
      };

    case ADD_TABLE_MERGE_POSSIBILITY:
      let addTableMergePossibility = state.mergedTables.find(
        (data) => data.id === action.data.data.id
      );
      if (addTableMergePossibility) {
        addTableMergePossibility.GroupPossibility = [
          ...action.data.data.GroupPossibility,
        ];
      }
      return {
        ...state,
        error_msg: null,
        success_msg: action.data.message,
        loading: false,
        mergedTables: [...state.mergedTables],
      };

    case ADD_TABLE_SECTION:
      state.sectionTables.push(action.data.data);
      return {
        ...state,
        error_msg: null,
        success_msg: action.data.message,
        loading: false,
        sectionTables: [...state.sectionTables],
      };

    case GET_TABLE_SECTION:
      return {
        ...state,
        error_msg: null,
        success_msg: null,
        loading: false,
        sectionTables: action.data,
      };

    case GET_COMPANY:
      return {
        ...state,
        error_msg: null,
        success_msg: null,
        loading: false,
        companies: action.data.data,
      };

    case ADD_COMPANY:
      state.companies.push(action.data.data);
      return {
        ...state,
        error_msg: null,
        success_msg: action.data.message,
        loading: false,
        companies: [...state.companies],
      };

    case UPDATE_COMPANY:
      let editSuperAdmin = state.companies.find(
        (data) => data.id === action.data.data.id
      );
      if (editSuperAdmin) {
        editSuperAdmin.name = action.data.data.name;
        editSuperAdmin.contentLanguage = action.data.data.contentLanguage;
        editSuperAdmin.description = action.data.data.description;
        editSuperAdmin.isActive = action.data.data.isActive;
      }
      return {
        ...state,
        error_msg: null,
        success_msg: action.data.message,
        loading: false,
        companies: [...state.companies],
      };

    case DELETE_COMPANY:
      let deleteCompany = state.companies.find(
        (data) => data.id === action.data.data
      );
      if (deleteCompany) {
        let index = state.companies.indexOf(deleteCompany);
        state.companies.splice(index, 1);
      }
      return {
        ...state,
        error_msg: null,
        success_msg: action.data.message,
        loading: false,
        companies: [...state.companies],
      };

    case GET_COMPANY_OUTLET:
      return {
        ...state,
        error_msg: null,
        success_msg: null,
        loading: false,
        companyOutlets: action.data.data,
      };

    case ADD_COMPANY_OUTLET:
      state.companyOutlets.push(action.data.data);
      return {
        ...state,
        error_msg: null,
        success_msg: action.data.message,
        loading: false,
        companyOutlets: [...state.companyOutlets],
      };

    case DELETE_COMPANY_OUTLET:
      let deleteCompanyOutlet = state.companyOutlets.find(
        (data) => data.id === action.data.data
      );
      if (deleteCompanyOutlet) {
        let index = state.companyOutlets.indexOf(deleteCompanyOutlet);
        state.companyOutlets.splice(index, 1);
      }
      return {
        ...state,
        error_msg: null,
        success_msg: action.data.message,
        loading: false,
        companyOutlets: [...state.companyOutlets],
      };

    case GET_ALL_CUSTOMER:
      return {
        ...state,
        error_msg: null,
        success_msg: null,
        loading: false,
        customers: action.data,
      };

    case GET_ALL_INVOICE_DETAILS:
      return {
        ...state,
        error_msg: null,
        success_msg: null,
        loading: false,
        invoiceDetails: action.data,
      };

    case UPDATE_INVOICE_STATUS:
      let updateInvoice = state.invoiceDetails.find(
        (data) => data.id === action.data.data.id
      );
      if (updateInvoice) {
        updateInvoice.status = action.data.data.status;
      }
      return {
        ...state,
        error_msg: null,
        success_msg: action.data.message,
        loading: false,
        invoiceDetails: [...state.invoiceDetails],
      };

    case UPDATE_ALL_CUSTOMER:
      let editAllCustomer = state.customers.find(
        (data) => data.id === action.data.data.id
      );
      if (editAllCustomer) {
        editAllCustomer.name = action.data.data.name;
        editAllCustomer.email = action.data.data.email;
        editAllCustomer.mobileNo = action.data.data.mobileNo;
        editAllCustomer.isActive = action.data.data.isActive;
      }
      return {
        ...state,
        error_msg: null,
        success_msg: action.data.message,
        loading: false,
        customers: [...state.customers],
      };

    case SET_VISIBLE_SELECTION:
      return {
        ...state,
        error_msg: null,
        success_msg: null,
        isVisibleOutletSelection: true,
      };

    case SET_INVISIBLE_SELECTION:
      return {
        ...state,
        error_msg: null,
        success_msg: null,
        isVisibleOutletSelection: false,
      };

    case GET_TAG_CATEGORY:
      return {
        ...state,
        error_msg: null,
        success_msg: null,
        loading: false,
        tagCategories: action.data.data,
      };

    case ADD_TAG_CATEGORY:
      state.tagCategories.push(action.data.data);
      return {
        ...state,
        error_msg: null,
        success_msg: action.data.message,
        loading: false,
        tagCategories: [...state.tagCategories],
      };

    case UPDATE_TAG_CATEGORY:
      let updateTagCategory = state.tagCategories.find(
        (data) => data.id === action.data.data.id
      );
      if (updateTagCategory) {
        updateTagCategory.name = action.data.data.name;
        updateTagCategory.description = action.data.data.description;
        updateTagCategory.isActive = action.data.data.isActive;
      }
      return {
        ...state,
        error_msg: null,
        success_msg: action.data.message,
        loading: false,
        tagCategories: [...state.tagCategories],
      };

    case DELETE_TAG_CATEGORY:
      let deleteTagCategory = state.tagCategories.find(
        (data) => data.id === action.data.data
      );
      if (deleteTagCategory) {
        let index = state.tagCategories.indexOf(deleteTagCategory);
        state.tagCategories.splice(index, 1);
      }
      return {
        ...state,
        error_msg: null,
        success_msg: action.data.message,
        loading: false,
        tagCategories: [...state.tagCategories],
      };

    case GET_TIME_SLOT:
      return {
        ...state,
        error_msg: null,
        success_msg: null,
        loading: false,
        timeSlots: action.data,
      };

    case GET_BOOKING_TABLE:
      return {
        ...state,
        error_msg: null,
        success_msg: null,
        loading: false,
        bookingTables: action.data,
      };

    case GET_BOOKING_RESERVATION:
      let outletInvoiceDetails = [...state.invoiceDetails];
      if (action.data.data.outletId === state.selectedOutlet.outlet.id)
        outletInvoiceDetails.push(action.data.data);
      return {
        ...state,
        error_msg: null,
        success_msg: action.data.message,
        loading: false,
        invoiceDetails: [...outletInvoiceDetails],
      };

    case GET_SEATING_VIEW:
      return {
        ...state,
        error_msg: null,
        success_msg: null,
        loading: false,
        seatingView: action.data,
      };

    case UPDATE_SEATING_TABLE:
      let updateSeatingTable = state.seatingView.find(
        (data) => data.id === action.data.data.id
      );
      if (updateSeatingTable) {
        updateSeatingTable.OutletTableBooking = [
          ...action.data.data.OutletTableBooking,
        ];
      }
      return {
        ...state,
        error_msg: null,
        success_msg: action.data.message,
        loading: false,
        seatingView: [...state.seatingView],
      };

    case MOVE_SEATING_RESERVATION:
      action.data.data.map((table) => {
        let updateSeatingTable = state.seatingView.find(
          (seatingTable) => (table.id === seatingTable.id)
        );
        if (updateSeatingTable) {
          updateSeatingTable.OutletTableBooking = [
            ...table.OutletTableBooking,
          ];
        }
      });
      return {
        ...state,
        error_msg: null,
        success_msg: action.data.message,
        loading: false,
        seatingView: [...state.seatingView],
      };

      case RESET_SEATING_VIEW_TABLES:
      return {
        ...state,
        error_msg: null,
        success_msg: null,
        loading: false,
        seatingView: [],
      };

    default:
      return state;
  }
};
export default hotelReducer;

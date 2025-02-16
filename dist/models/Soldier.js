"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 성분 코드
 */
var SoldierClass;
(function (SoldierClass) {
    SoldierClass["\uC608\uBE44\uAD70\uC778/\uD6C8\uB828\uBCD1"] = "0000490001";
    SoldierClass["\uBCD1\uC0AC"] = "0000490002";
    SoldierClass["\uC7A5\uAD50"] = "0000490003";
    SoldierClass["\uBD80\uC0AC\uAD00"] = "0000490004";
    SoldierClass["\uAD70\uBB34\uC6D0"] = "0000490005";
})(SoldierClass || (SoldierClass = {}));
exports.SoldierClass = SoldierClass;
/**
 * 군종 코드
 */
var SoldierGroup;
(function (SoldierGroup) {
    SoldierGroup["\uC721\uAD70"] = "0000010001";
    SoldierGroup["\uD574\uAD70"] = "0000010002";
    SoldierGroup["\uACF5\uAD70"] = "0000010003";
    SoldierGroup["\uD574\uBCD1\uB300"] = "0000010004";
})(SoldierGroup || (SoldierGroup = {}));
exports.SoldierGroup = SoldierGroup;
/**
 * 입영부대 코드
 */
var SoldierUnit;
(function (SoldierUnit) {
    SoldierUnit["1\uC0AC\uB2E8"] = "20121290100";
    SoldierUnit["2\uC0AC\uB2E8"] = "20121490100";
    SoldierUnit["3\uC0AC\uB2E8"] = "20121590100";
    SoldierUnit["5\uC0AC\uB2E8"] = "20121690200";
    SoldierUnit["6\uC0AC\uB2E8"] = "20121590200";
    SoldierUnit["7\uC0AC\uB2E8"] = "20121390100";
    SoldierUnit["9\uC0AC\uB2E8"] = "20121290200";
    SoldierUnit["11\uC0AC\uB2E8"] = "20121790300";
    SoldierUnit["12\uC0AC\uB2E8"] = "20121490200";
    SoldierUnit["15\uC0AC\uB2E8"] = "20121390200";
    SoldierUnit["17\uC0AC\uB2E8"] = "20121190100";
    SoldierUnit["20\uC0AC\uB2E8"] = "20121790400";
    SoldierUnit["21\uC0AC\uB2E8"] = "20121490300";
    SoldierUnit["22\uC0AC\uB2E8"] = "20121890100";
    SoldierUnit["23\uC0AC\uB2E8"] = "20121890200";
    SoldierUnit["25\uC0AC\uB2E8"] = "20121290300";
    SoldierUnit["27\uC0AC\uB2E8"] = "20121390300";
    SoldierUnit["28\uC0AC\uB2E8"] = "20121690100";
    SoldierUnit["30\uC0AC\uB2E8"] = "20121290400";
    SoldierUnit["31\uC0AC\uB2E8"] = "20220280100";
    SoldierUnit["32\uC0AC\uB2E8"] = "20220280200";
    SoldierUnit["35\uC0AC\uB2E8"] = "20220280300";
    SoldierUnit["36\uC0AC\uB2E8"] = "20120180100";
    SoldierUnit["37\uC0AC\uB2E8"] = "20220280400";
    SoldierUnit["39\uC0AC\uB2E8"] = "20220280500";
    SoldierUnit["50\uC0AC\uB2E8"] = "20220280600";
    SoldierUnit["51\uC0AC\uB2E8"] = "20121190200";
    SoldierUnit["53\uC0AC\uB2E8"] = "20220280700";
    SoldierUnit["55\uC0AC\uB2E8"] = "20120180200";
    SoldierUnit["\uC721\uAD70\uD6C8\uB828\uC18C"] = "20020191700";
    SoldierUnit["\uC721\uAD70\uD6C8\uB828\uC18C(23\uC5F0\uB300)"] = "20020191800";
    SoldierUnit["\uC721\uAD70\uD6C8\uB828\uC18C(25\uC5F0\uB300)"] = "20020191900";
    SoldierUnit["\uC721\uAD70\uD6C8\uB828\uC18C(26\uC5F0\uB300)"] = "20020192000";
    SoldierUnit["\uC721\uAD70\uD6C8\uB828\uC18C(27\uC5F0\uB300)"] = "20020192100";
    SoldierUnit["\uC721\uAD70\uD6C8\uB828\uC18C(28\uC5F0\uB300)"] = "20020192200";
    SoldierUnit["\uC721\uAD70\uD6C8\uB828\uC18C(29\uC5F0\uB300)"] = "20020192300";
    SoldierUnit["\uC721\uAD70\uD6C8\uB828\uC18C(30\uC5F0\uB300)"] = "20020192400";
})(SoldierUnit || (SoldierUnit = {}));
exports.SoldierUnit = SoldierUnit;
/**
 * 관계 코드
 */
var SoldierRelationship;
(function (SoldierRelationship) {
    SoldierRelationship["PARENT"] = "0000420001";
    SoldierRelationship["SPOUSE"] = "0000420003";
    SoldierRelationship["SIBLING"] = "0000420002";
    SoldierRelationship["FRIEND"] = "0000420006";
    SoldierRelationship["LOVER"] = "0000420005";
    SoldierRelationship["RELATIVE"] = "0000420004";
    SoldierRelationship["FAN"] = "0000420007";
})(SoldierRelationship || (SoldierRelationship = {}));
exports.SoldierRelationship = SoldierRelationship;
/**
 * 군인 정보
 * @class Soldier
 */
var Soldier = /** @class */ (function () {
    /**
     * Soldier.인스턴스를 생성한다.
     * @param {string} name 이름 (e.g., `'박뫄뫄'`)
     * @param {string} birth 생년월일 (e.g., `'20011129'`)
     * @param {string} enterDate 입영날짜 (e.g., `'20200829'`)
     * @param {SoldierClassName} className 성분 (e.g., `'예비군인/훈련병'`)
     * @param {SoldierGroupName} groupName 군종 (e.g., `'육군'`)
     * @param {SoldierUnitName} unitName 입영부대 (e.g., `'28사단'`, `'육군훈련소(25연대)'`)
     * @param {SoldierRelationship} relationship 관계 (e.g., `SoldierRelationship.FRIEND`)
     * @memberof Soldier
     */
    function Soldier(name, birth, enterDate, className, groupName, unitName, relationship) {
        this.name = name;
        this.birth = birth;
        this.enterDate = enterDate;
        this.missSoldierClassCdNm = className;
        this.missSoldierClassCd = SoldierClass[className];
        this.grpCdNm = groupName;
        this.grpCd = SoldierGroup[groupName];
        this.trainUnitCdNm = unitName;
        this.trainUnitCd = SoldierUnit[unitName];
        this.missSoldierRelationshipCd = relationship;
    }
    /**
     * 인스턴스를 복제한다.
     * @returns 같은 속성을 가진 Soldier 인스턴스
     * @memberof Soldier
     */
    Soldier.prototype.clone = function () {
        return new Soldier(this.name, this.birth, this.enterDate, this.missSoldierClassCdNm, this.grpCdNm, this.trainUnitCdNm, this.missSoldierRelationshipCd);
    };
    /**
     * 이름을 반환한다.
     * @returns 이름 (e.g., `'박뫄뫄'`)
     * @memberof Soldier
     */
    Soldier.prototype.getName = function () {
        return this.name;
    };
    /**
     * 생년월일을 반환한다.
     * @returns 생년월일 (e.g., `'20011129'`)
     * @memberof Soldier
     */
    Soldier.prototype.getBirth = function () {
        return this.birth;
    };
    /**
     * 입영날짜를 반환한다.
     * @returns 입영날짜 (e.g., `'20200829'`)
     * @memberof Soldier
     */
    Soldier.prototype.getEnterDate = function () {
        return this.enterDate;
    };
    /**
     * 성분을 반환한다.
     * @returns 성분 (e.g., `'예비군인/훈련병'`)
     * @memberof Soldier
     */
    Soldier.prototype.getMissSoldierClassCdNm = function () {
        return this.missSoldierClassCdNm;
    };
    /**
     * 군종을 반환한다.
     * @returns 군종 (e.g., `'육군'`)
     * @memberof Soldier
     */
    Soldier.prototype.getGrpCdNm = function () {
        return this.grpCdNm;
    };
    /**
     * 군종 코드를 반환한다.
     * @returns 군종 코드 (e.g., `'0000010001'`)
     * @memberof Soldier
     */
    Soldier.prototype.getGrpCd = function () {
        return this.grpCd;
    };
    /**
     * 성분 코드를 반환한다.
     * @returns 성분 코드 (e.g., `'0000490001'`)
     * @memberof Soldier
     */
    Soldier.prototype.getMissSoldierClassCd = function () {
        return this.missSoldierClassCd;
    };
    /**
     * 훈련병 식별 코드를 반환한다.
     * @returns 훈련병 식별 코드
     * @memberof Soldier
     */
    Soldier.prototype.getTraineeMgrSeq = function () {
        return this.traineeMgrSeq;
    };
    /**
     * 입영부대 코드를 반환한다.
     * @returns 입영부대 코드 (`'20121290100'`)
     * @memberof Soldier
     */
    Soldier.prototype.getTrainUnitCd = function () {
        return this.trainUnitCd;
    };
    /**
     * 훈련병 식별 코드를 설정한다.
     * @param {string} traineeMgrSeq 훈련병 식별 코드
     * @memberof Soldier
     */
    Soldier.prototype.setTraineeMgrSeq = function (traineeMgrSeq) {
        this.traineeMgrSeq = traineeMgrSeq;
    };
    return Soldier;
}());
exports.Soldier = Soldier;

/*
 * SPDX-License-Identifier: Apache-2.0
 */

'use strict';

const { Contract } = require('fabric-contract-api');

class Tenderbullet extends Contract {

    async initLedger(ctx) {
        console.info('============= START : Initialize Ledger ===========');
        const tenders = [
            {
                /* tender status */
                status: 'AWARDED',
                lastModified: '15July2021',
                /* tender creation - STATUS: CREATED */
                procuringEntityID: '001',
                procuringEntityName: 'Joy',
                procuringEntityType: 'Organization',
                number: 'IND/YYZ/T/459/2021-2022',
                description: 'Construction Tender',
                budget: '100000',
                validityPeriod: '80',
                file: 'minio://bucket-1/proposal.pdf',
                createdOn: '15July2021',
                tenderAccountingOfficer: 'okzby7enEUTfykf2zBahLVOiY8K2',
                /* tender opening - STATUS: OPENED */
                tenderOpeningReport: 'https://tendebullet.com/report',
                tenderOpeningComment: 'comment',
                openingCommitteeMembers: ['Uw2ttsTzHIP1iOelkokby1bWg2v2', 'aokbyeeM8gT0Ii1CDbS0L6jSCNx2', 'ik2M5okbydYHS6cC43nduD33EHr1'],
                tenderOpeningReportApprovals: ['Uw2ttsTzHIP1iOelkyOkg1bWg2v2', 'abDDGLeMOkT0Ii1CDbS0L6jSCNx2', 'ik2M5SsPudOKS6cC43nduD33EHr1'],
                openedOn: '15July2021',
                openedBy: 'zmzed7enEUTfykf2zBahLVOiY8K2',
                /* tender evaluation - STATUS: EVALUATED */
                tenderEvaluationReport: 'https://tendebullet.com/reportEval',
                tenderEvaluationComment: 'Tender valid, company background approved',
                evaluationCommitteeMembers: ['Uw2ttsTzHIP1iOelkyoKk1bWg2v2', 'abDJOYeM8gT0Ii1CDbS0L6jSCNx2', 'ik2M5SsPudJOY6cC43nduD33EHr1'],
                tenderEvaluationReportApprovals: ['JoYttsTzHIP1iOelkyEgg1bWg2v2', 'abDDGLeM8gT0Ii1JoYS0L6jSCNx2', 'ik2M5SsPudYHS6jJ43nduD33EHr1'],
                evaluatedOn: '25July2021',
                evaluatedBy: 'zmzed7enEUTJKSkf2zBahLVOiY8K2',
                /* tender awarding - STATUS: AWARDED */
                awardedTo: 'Osive',
                awardComment: 'Congratulations',
                awardedOn: '30July2021',
                awardedBy: 'zmzed7enEUTfykf2zBahLJOYY8K2',
            }
        ];

        for (let i = 0; i < tenders.length; i++) {
            tenders[i].docType = 'tender';
            await ctx.stub.putState('TENDER' + i, Buffer.from(JSON.stringify(tenders[i])));
            console.info('Added <--> ', tenders[i]);
        }
        console.info('============= END : Initialize Ledger ===========');
    }

    async createTender(ctx, tenderNumber, awardComment, awardedBy, awardedOn, awardedTo, budget, createdOn, description, evaluatedBy, evaluatedOn, evaluationCommitteeMembers, file, lastModified, number, openedBy, openedOn, openingCommitteeMembers, procuringEntityID, procuringEntityName, procuringEntityType, status, tenderAccountingOfficer, tenderEvaluationComment, tenderEvaluationReport, tenderEvaluationReportApprovals, tenderOpeningComment, tenderOpeningReport, tenderOpeningReportApprovals, validityPeriod) {
        console.info('============= START : Create Tender ===========');
        const tender = {
            docType: 'tender',
            awardComment,
            awardedBy,
            awardedOn,
            awardedTo,
            budget,
            createdOn,
            description,
            evaluatedBy,
            evaluatedOn,
            evaluationCommitteeMembers,
            file,
            lastModified,
            number,
            openedBy,
            openedOn,
            openingCommitteeMembers,
            procuringEntityID,
            procuringEntityName,
            procuringEntityType,
            status,
            tenderAccountingOfficer,
            tenderEvaluationComment,
            tenderEvaluationReport,
            tenderEvaluationReportApprovals,
            tenderOpeningComment,
            tenderOpeningReport,
            tenderOpeningReportApprovals,
            validityPeriod,
        };
        await ctx.stub.putState(tenderNumber, Buffer.from(JSON.stringify(tender)));
        console.info('============= END : Create Tender ===========');
    }

    async updateTender(ctx, tenderNumber, awardComment, awardedBy, awardedOn, awardedTo, budget, createdOn, description, evaluatedBy, evaluatedOn, evaluationCommitteeMembers, file, lastModified, number, openedBy, openedOn, openingCommitteeMembers, procuringEntityID, procuringEntityName, procuringEntityType, status, tenderAccountingOfficer, tenderEvaluationComment, tenderEvaluationReport, tenderEvaluationReportApprovals, tenderOpeningComment, tenderOpeningReport, tenderOpeningReportApprovals, validityPeriod) {
        console.info('============= START : updateTender ===========');

        const tenderAsBytes = await ctx.stub.getState(tenderNumber); // get the tender from chaincode state
        if (!tenderAsBytes || tenderAsBytes.length === 0) {
            throw new Error(`${tenderNumber} does not exist`);
        }
        const tender = JSON.parse(tenderAsBytes.toString());

        /* tender status */
        tender.status = status;
        tender.lastModified = lastModified,
        /* tender creation - STATUS: CREATED */
        tender.procuringEntityID = procuringEntityID;
        tender.procuringEntityName = procuringEntityName;
        tender.procuringEntityType = procuringEntityType;
        tender.number = number;
        tender.description = description;
        tender.budget = budget;
        tender.validityPeriod = validityPeriod;
        tender.file = file;
        tender.createdOn = createdOn;
        tender.tenderAccountingOfficer = tenderAccountingOfficer;
        /* tender opening - STATUS: OPENED */
        tender.tenderOpeningReport = tenderOpeningReport;
        tender.tenderOpeningComment = tenderOpeningComment;
        tender.openingCommitteeMembers = openingCommitteeMembers;
        tender.tenderOpeningReportApprovals = tenderEvaluationReportApprovals;
        tender.openedOn = openedOn;
        tender.openedBy = openedBy;
        /* tender evaluation - STATUS: EVALUATED */
        tender.tenderEvaluationReport = tenderEvaluationReport;
        tender.tenderEvaluationComment = tenderEvaluationComment;
        tender.evaluationCommitteeMembers = evaluationCommitteeMembers;
        tender.tenderEvaluationReportApprovals = tenderEvaluationReportApprovals;
        tender.evaluatedOn = evaluatedOn;
        tender.evaluatedBy = evaluatedBy;
        /* tender awarding - STATUS: AWARDED */
        tender.awardedTo = awardedTo;
        tender.awardComment = awardComment;
        tender.awardedOn = awardedOn;
        tender.awardedBy = awardedBy;

        await ctx.stub.putState(tenderNumber, Buffer.from(JSON.stringify(tender)));
        console.info('============= END : updateTender ===========');
    }

    async queryTender(ctx, tenderNumber) {
        const tenderAsBytes = await ctx.stub.getState(tenderNumber);
        if (!tenderAsBytes || tenderAsBytes.length === 0) {
            throw new Error(`${tenderNumber} does not exist`);
        }
        console.log(tenderAsBytes.toString());
        return tenderAsBytes.toString();
    }

}

module.exports = Tenderbullet;

type Nullable<T> = T | null;
export interface ASTNodeIntf {
    kind: ASTKinds;
}
export declare enum ASTKinds {
    start = "start",
    content_1 = "content_1",
    content_2 = "content_2",
    content_3 = "content_3",
    content_4 = "content_4",
    content_5 = "content_5",
    content_6 = "content_6",
    content_7 = "content_7",
    newLine = "newLine",
    newLineBody_1 = "newLineBody_1",
    newLineBody_2 = "newLineBody_2",
    newLineBody_3 = "newLineBody_3",
    endOfLine_1 = "endOfLine_1",
    endOfLine_2 = "endOfLine_2",
    space = "space",
    someSpaces = "someSpaces",
    commentLong = "commentLong",
    commentLongBody_1 = "commentLongBody_1",
    commentLongBody_2 = "commentLongBody_2",
    commentLine = "commentLine",
    continueLine = "continueLine",
    continueLineOrCommentLong_1 = "continueLineOrCommentLong_1",
    continueLineOrCommentLong_2 = "continueLineOrCommentLong_2",
    spaceOrContinueLineOrCommentLong_1 = "spaceOrContinueLineOrCommentLong_1",
    spaceOrContinueLineOrCommentLong_2 = "spaceOrContinueLineOrCommentLong_2",
    spaceOrContinueLineOrCommentLong_3 = "spaceOrContinueLineOrCommentLong_3",
    identiferHeadCharacter = "identiferHeadCharacter",
    identiferBodySentence_1 = "identiferBodySentence_1",
    identiferBodySentence_2 = "identiferBodySentence_2",
    identiferBodyCharacter = "identiferBodyCharacter",
    statementSeparator = "statementSeparator",
    statementSeparatorBody_1 = "statementSeparatorBody_1",
    statementSeparatorBody_2 = "statementSeparatorBody_2",
    statementSeparatorBody_3 = "statementSeparatorBody_3",
    statementTerminator_1 = "statementTerminator_1",
    statementTerminator_2 = "statementTerminator_2",
    statementTerminatorBody = "statementTerminatorBody",
    functionBlock = "functionBlock",
    functionBlock_$0_1 = "functionBlock_$0_1",
    functionBlock_$0_2 = "functionBlock_$0_2",
    functionBlock_$0_3 = "functionBlock_$0_3",
    functionBlock_$0_4 = "functionBlock_$0_4",
    functionBlock_$0_5 = "functionBlock_$0_5",
    functionBlock_$1_1 = "functionBlock_$1_1",
    functionBlock_$1_2 = "functionBlock_$1_2",
    functionBlock_$1_3 = "functionBlock_$1_3",
    functionBlock_$1_4 = "functionBlock_$1_4",
    functionBlock_$1_5 = "functionBlock_$1_5",
    functionBlock_$2_1 = "functionBlock_$2_1",
    functionBlock_$2_2 = "functionBlock_$2_2",
    functionBlock_$3_1 = "functionBlock_$3_1",
    functionBlock_$3_2 = "functionBlock_$3_2",
    functionBlockName = "functionBlockName",
    functionBlockSelector = "functionBlockSelector",
    selector = "selector",
    selectorPrefix = "selectorPrefix",
    selectorPrefixName = "selectorPrefixName",
    selectorMain = "selectorMain",
    selectorMainName_1 = "selectorMainName_1",
    selectorMainName_2 = "selectorMainName_2",
    selectorMainName_3 = "selectorMainName_3",
    selectorMainName_4 = "selectorMainName_4",
    selectorMainName_5 = "selectorMainName_5",
    selectorMainName_6 = "selectorMainName_6",
    selectorMainName_7 = "selectorMainName_7",
    selectorSuffix = "selectorSuffix",
    selectorSuffixName = "selectorSuffixName",
    block = "block",
    block_$0_1 = "block_$0_1",
    block_$0_2 = "block_$0_2",
    block_$0_3 = "block_$0_3",
    block_$0_4 = "block_$0_4",
    block_$0_5 = "block_$0_5",
    block_$1_1 = "block_$1_1",
    block_$1_2 = "block_$1_2",
    block_$1_3 = "block_$1_3",
    block_$2_1 = "block_$2_1",
    block_$2_2 = "block_$2_2",
    block_$2_3 = "block_$2_3",
    block_$2_4 = "block_$2_4",
    block_$2_5 = "block_$2_5",
    blockSelector = "blockSelector",
    blockInner_1 = "blockInner_1",
    blockInner_2 = "blockInner_2",
    blockInner_3 = "blockInner_3",
    blockInner_4 = "blockInner_4",
    blockInner_5 = "blockInner_5",
    blockInner_6 = "blockInner_6",
    blockInner_7 = "blockInner_7",
    blockInner_8 = "blockInner_8",
    blockInnerFlow = "blockInnerFlow",
    blockInnerFlowKind_1 = "blockInnerFlowKind_1",
    blockInnerFlowKind_2 = "blockInnerFlowKind_2",
    blockInnerFlowKind_3 = "blockInnerFlowKind_3",
    blockInnerFlowKind_4 = "blockInnerFlowKind_4",
    blockInnerFlowKind_5 = "blockInnerFlowKind_5",
    blockInnerFlowKind_6 = "blockInnerFlowKind_6",
    blockInnerFlowKind_7 = "blockInnerFlowKind_7",
    blockInnerSentence = "blockInnerSentence",
    blockInnerSentence_$0_1 = "blockInnerSentence_$0_1",
    blockInnerSentence_$0_2 = "blockInnerSentence_$0_2",
    blockInnerSentence_$0_3 = "blockInnerSentence_$0_3",
    blockInnerSentenceKind_1 = "blockInnerSentenceKind_1",
    blockInnerSentenceKind_2 = "blockInnerSentenceKind_2",
    blockInnerSentenceKind_3 = "blockInnerSentenceKind_3",
    blockInnerSentenceKind_4 = "blockInnerSentenceKind_4",
    blockInnerSentenceKind_5 = "blockInnerSentenceKind_5",
    blockInnerSentenceKind_6 = "blockInnerSentenceKind_6",
    blockInnerSentenceKind_7 = "blockInnerSentenceKind_7",
    flowIf = "flowIf",
    flowIf_$0_1 = "flowIf_$0_1",
    flowIf_$0_2 = "flowIf_$0_2",
    flowIfName = "flowIfName",
    flowElseif = "flowElseif",
    flowElseif_$0_1 = "flowElseif_$0_1",
    flowElseif_$0_2 = "flowElseif_$0_2",
    flowElseifName = "flowElseifName",
    flowElse = "flowElse",
    flowElse_$0_1 = "flowElse_$0_1",
    flowElse_$0_2 = "flowElse_$0_2",
    flowElseName = "flowElseName",
    flowIfBlock = "flowIfBlock",
    flowIfBlock_$0_1 = "flowIfBlock_$0_1",
    flowIfBlock_$0_2 = "flowIfBlock_$0_2",
    flowIfBlock_$1_1 = "flowIfBlock_$1_1",
    flowIfBlock_$1_2 = "flowIfBlock_$1_2",
    flowCase = "flowCase",
    flowCase_$0_1 = "flowCase_$0_1",
    flowCase_$0_2 = "flowCase_$0_2",
    flowCase_$0_3 = "flowCase_$0_3",
    flowCase_$0_4 = "flowCase_$0_4",
    flowCase_$0_5 = "flowCase_$0_5",
    flowCase_$1_1 = "flowCase_$1_1",
    flowCase_$1_2 = "flowCase_$1_2",
    flowCase_$1_3 = "flowCase_$1_3",
    flowCase_$1_4 = "flowCase_$1_4",
    flowCase_$1_5 = "flowCase_$1_5",
    flowCaseName = "flowCaseName",
    flowWhen = "flowWhen",
    flowWhenName = "flowWhenName",
    flowWhenConditions = "flowWhenConditions",
    flowWhenConditions_$0 = "flowWhenConditions_$0",
    flowWhenCondition_1 = "flowWhenCondition_1",
    flowWhenCondition_2 = "flowWhenCondition_2",
    flowWhenConditionLiteral = "flowWhenConditionLiteral",
    flowWhenConditionLiteral_$0_1 = "flowWhenConditionLiteral_$0_1",
    flowWhenConditionLiteral_$0_2 = "flowWhenConditionLiteral_$0_2",
    flowWhenConditionLiteral_$0_3 = "flowWhenConditionLiteral_$0_3",
    flowWhenConditionLiteral_$1_1 = "flowWhenConditionLiteral_$1_1",
    flowWhenConditionLiteral_$1_2 = "flowWhenConditionLiteral_$1_2",
    flowWhenConditionLiteral_$2_1 = "flowWhenConditionLiteral_$2_1",
    flowWhenConditionLiteral_$2_2 = "flowWhenConditionLiteral_$2_2",
    flowWhenConditionLiteral_$2_3 = "flowWhenConditionLiteral_$2_3",
    flowWhenConditionRange = "flowWhenConditionRange",
    flowWhenConditionRange_$0_1 = "flowWhenConditionRange_$0_1",
    flowWhenConditionRange_$0_2 = "flowWhenConditionRange_$0_2",
    flowWhenConditionRange_$0_3 = "flowWhenConditionRange_$0_3",
    flowWhenConditionRange_$1_1 = "flowWhenConditionRange_$1_1",
    flowWhenConditionRange_$1_2 = "flowWhenConditionRange_$1_2",
    flowWhenConditionRange_$2_1 = "flowWhenConditionRange_$2_1",
    flowWhenConditionRange_$2_2 = "flowWhenConditionRange_$2_2",
    flowWhenConditionRange_$2_3 = "flowWhenConditionRange_$2_3",
    flowWhenConditionRange_$3_1 = "flowWhenConditionRange_$3_1",
    flowWhenConditionRange_$3_2 = "flowWhenConditionRange_$3_2",
    flowWhenConditionRange_$3_3 = "flowWhenConditionRange_$3_3",
    flowWhenConditionRange_$4_1 = "flowWhenConditionRange_$4_1",
    flowWhenConditionRange_$4_2 = "flowWhenConditionRange_$4_2",
    flowWhenConditionRange_$5_1 = "flowWhenConditionRange_$5_1",
    flowWhenConditionRange_$5_2 = "flowWhenConditionRange_$5_2",
    flowWhenConditionRange_$5_3 = "flowWhenConditionRange_$5_3",
    flowOthers = "flowOthers",
    flowOthers_$0_1 = "flowOthers_$0_1",
    flowOthers_$0_2 = "flowOthers_$0_2",
    flowOthers_$0_3 = "flowOthers_$0_3",
    flowOthersName = "flowOthersName",
    flowSwitch = "flowSwitch",
    flowSwitchName = "flowSwitchName",
    flowWhile = "flowWhile",
    flowWhileName = "flowWhileName",
    flowFor = "flowFor",
    flowForName = "flowForName",
    flowForeach = "flowForeach",
    flowForeach_$0_1 = "flowForeach_$0_1",
    flowForeach_$0_2 = "flowForeach_$0_2",
    flowForeach_$0_3 = "flowForeach_$0_3",
    flowForeachName = "flowForeachName",
    blockInnerBreak = "blockInnerBreak",
    blockInnerBreakName = "blockInnerBreakName",
    blockInnerContinue = "blockInnerContinue",
    blockInnerContinueName = "blockInnerContinueName",
    blockInnerReturn = "blockInnerReturn",
    blockInnerReturnName = "blockInnerReturnName",
    blockInnerParallel = "blockInnerParallel",
    blockInnerParallelName = "blockInnerParallelName",
    blockInnerVoid = "blockInnerVoid",
    blockInnerVoidName = "blockInnerVoidName",
    outputSettlement = "outputSettlement",
    expr = "expr",
    expr_$0_1 = "expr_$0_1",
    expr_$0_2 = "expr_$0_2",
    expr_$0_3 = "expr_$0_3",
    expr_$1_1 = "expr_$1_1",
    expr_$1_2 = "expr_$1_2",
    expr_$1_3 = "expr_$1_3",
    exprInner_1 = "exprInner_1",
    exprInner_2 = "exprInner_2",
    exprInner_3 = "exprInner_3",
    exprInner_4 = "exprInner_4",
    exprInner_5 = "exprInner_5",
    exprInner_6 = "exprInner_6",
    exprInner_7 = "exprInner_7",
    exprInner_8 = "exprInner_8",
    exprInner_9 = "exprInner_9",
    exprInner_10 = "exprInner_10",
    exprInner_11 = "exprInner_11",
    exprInner_12 = "exprInner_12",
    exprInner_13 = "exprInner_13",
    exprInner_14 = "exprInner_14",
    exprInner_15 = "exprInner_15",
    exprInner_16 = "exprInner_16",
    exprInner_17 = "exprInner_17",
    exprInner_18 = "exprInner_18",
    exprInner_19 = "exprInner_19",
    parenthesesOperation = "parenthesesOperation",
    parenthesesOperation_$0_1 = "parenthesesOperation_$0_1",
    parenthesesOperation_$0_2 = "parenthesesOperation_$0_2",
    parenthesesOperation_$0_3 = "parenthesesOperation_$0_3",
    parenthesesOperation_$1_1 = "parenthesesOperation_$1_1",
    parenthesesOperation_$1_2 = "parenthesesOperation_$1_2",
    parenthesesOperation_$1_3 = "parenthesesOperation_$1_3",
    bracketsOperation = "bracketsOperation",
    bracketsOperation_$0_1 = "bracketsOperation_$0_1",
    bracketsOperation_$0_2 = "bracketsOperation_$0_2",
    bracketsOperation_$0_3 = "bracketsOperation_$0_3",
    bracketsOperation_$1_1 = "bracketsOperation_$1_1",
    bracketsOperation_$1_2 = "bracketsOperation_$1_2",
    bracketsOperation_$1_3 = "bracketsOperation_$1_3",
    bracketsOperationOption = "bracketsOperationOption",
    bracketsOperationOption_$0_1 = "bracketsOperationOption_$0_1",
    bracketsOperationOption_$0_2 = "bracketsOperationOption_$0_2",
    bracketsOperationOption_$0_3 = "bracketsOperationOption_$0_3",
    bracketsOperationOption_$1_1 = "bracketsOperationOption_$1_1",
    bracketsOperationOption_$1_2 = "bracketsOperationOption_$1_2",
    bracketsOperationOption_$1_3 = "bracketsOperationOption_$1_3",
    exclamationOperation = "exclamationOperation",
    exclamationOperation_$0_1 = "exclamationOperation_$0_1",
    exclamationOperation_$0_2 = "exclamationOperation_$0_2",
    exclamationOperation_$0_3 = "exclamationOperation_$0_3",
    incrementOrDecrementOperation = "incrementOrDecrementOperation",
    incrementOrDecrementOperation_$0_1 = "incrementOrDecrementOperation_$0_1",
    incrementOrDecrementOperation_$0_2 = "incrementOrDecrementOperation_$0_2",
    incrementOrDecrementOperation_$0_3 = "incrementOrDecrementOperation_$0_3",
    incrementOrDecrementOperator_1 = "incrementOrDecrementOperator_1",
    incrementOrDecrementOperator_2 = "incrementOrDecrementOperator_2",
    incrementOrDecrementOperator_$0 = "incrementOrDecrementOperator_$0",
    incrementOrDecrementOperator_$0_$0_1 = "incrementOrDecrementOperator_$0_$0_1",
    incrementOrDecrementOperator_$0_$0_2 = "incrementOrDecrementOperator_$0_$0_2",
    incrementOrDecrementOperator_$0_$1_1 = "incrementOrDecrementOperator_$0_$1_1",
    incrementOrDecrementOperator_$0_$1_2 = "incrementOrDecrementOperator_$0_$1_2",
    incrementOrDecrementOperator_$1 = "incrementOrDecrementOperator_$1",
    incrementOrDecrementOperator_$1_$0_1 = "incrementOrDecrementOperator_$1_$0_1",
    incrementOrDecrementOperator_$1_$0_2 = "incrementOrDecrementOperator_$1_$0_2",
    incrementOrDecrementOperator_$1_$1_1 = "incrementOrDecrementOperator_$1_$1_1",
    incrementOrDecrementOperator_$1_$1_2 = "incrementOrDecrementOperator_$1_$1_2",
    multiplicationOrDivisionOperation = "multiplicationOrDivisionOperation",
    multiplicationOrDivisionOperation_$0_1 = "multiplicationOrDivisionOperation_$0_1",
    multiplicationOrDivisionOperation_$0_2 = "multiplicationOrDivisionOperation_$0_2",
    multiplicationOrDivisionOperation_$0_3 = "multiplicationOrDivisionOperation_$0_3",
    multiplicationOrDivisionOperation_$1_1 = "multiplicationOrDivisionOperation_$1_1",
    multiplicationOrDivisionOperation_$1_2 = "multiplicationOrDivisionOperation_$1_2",
    multiplicationOrDivisionOperation_$1_3 = "multiplicationOrDivisionOperation_$1_3",
    multiplicationOrDivisionOperator_1 = "multiplicationOrDivisionOperator_1",
    multiplicationOrDivisionOperator_2 = "multiplicationOrDivisionOperator_2",
    multiplicationOrDivisionOperator_3 = "multiplicationOrDivisionOperator_3",
    multiplicationOrDivisionOperator_$0 = "multiplicationOrDivisionOperator_$0",
    multiplicationOrDivisionOperator_$0_$0_1 = "multiplicationOrDivisionOperator_$0_$0_1",
    multiplicationOrDivisionOperator_$0_$0_2 = "multiplicationOrDivisionOperator_$0_$0_2",
    multiplicationOrDivisionOperator_$1 = "multiplicationOrDivisionOperator_$1",
    multiplicationOrDivisionOperator_$1_$0_1 = "multiplicationOrDivisionOperator_$1_$0_1",
    multiplicationOrDivisionOperator_$1_$0_2 = "multiplicationOrDivisionOperator_$1_$0_2",
    multiplicationOrDivisionOperator_$2 = "multiplicationOrDivisionOperator_$2",
    multiplicationOrDivisionOperator_$2_$0_1 = "multiplicationOrDivisionOperator_$2_$0_1",
    multiplicationOrDivisionOperator_$2_$0_2 = "multiplicationOrDivisionOperator_$2_$0_2",
    additionOrSubtractionOperation = "additionOrSubtractionOperation",
    additionOrSubtractionOperation_$0_1 = "additionOrSubtractionOperation_$0_1",
    additionOrSubtractionOperation_$0_2 = "additionOrSubtractionOperation_$0_2",
    additionOrSubtractionOperation_$0_3 = "additionOrSubtractionOperation_$0_3",
    additionOrSubtractionOperation_$1_1 = "additionOrSubtractionOperation_$1_1",
    additionOrSubtractionOperation_$1_2 = "additionOrSubtractionOperation_$1_2",
    additionOrSubtractionOperation_$1_3 = "additionOrSubtractionOperation_$1_3",
    additionOrSubtractionOperator_1 = "additionOrSubtractionOperator_1",
    additionOrSubtractionOperator_2 = "additionOrSubtractionOperator_2",
    additionOrSubtractionOperator_$0 = "additionOrSubtractionOperator_$0",
    additionOrSubtractionOperator_$0_$0_1 = "additionOrSubtractionOperator_$0_$0_1",
    additionOrSubtractionOperator_$0_$0_2 = "additionOrSubtractionOperator_$0_$0_2",
    additionOrSubtractionOperator_$1 = "additionOrSubtractionOperator_$1",
    additionOrSubtractionOperator_$1_$0_1 = "additionOrSubtractionOperator_$1_$0_1",
    additionOrSubtractionOperator_$1_$0_2 = "additionOrSubtractionOperator_$1_$0_2",
    feedbackOperation = "feedbackOperation",
    feedbackOperation_$0_1 = "feedbackOperation_$0_1",
    feedbackOperation_$0_2 = "feedbackOperation_$0_2",
    feedbackOperation_$0_3 = "feedbackOperation_$0_3",
    comparisonOperation = "comparisonOperation",
    comparisonOperation_$0_1 = "comparisonOperation_$0_1",
    comparisonOperation_$0_2 = "comparisonOperation_$0_2",
    comparisonOperation_$0_3 = "comparisonOperation_$0_3",
    comparisonOperation_$1_1 = "comparisonOperation_$1_1",
    comparisonOperation_$1_2 = "comparisonOperation_$1_2",
    comparisonOperation_$1_3 = "comparisonOperation_$1_3",
    comparisonOperator_1 = "comparisonOperator_1",
    comparisonOperator_2 = "comparisonOperator_2",
    comparisonOperator_3 = "comparisonOperator_3",
    comparisonOperator_4 = "comparisonOperator_4",
    comparisonOperator_5 = "comparisonOperator_5",
    comparisonOperator_6 = "comparisonOperator_6",
    comparisonOperator_7 = "comparisonOperator_7",
    comparisonOperator_8 = "comparisonOperator_8",
    comparisonOperator_$0 = "comparisonOperator_$0",
    comparisonOperator_$0_$0_1 = "comparisonOperator_$0_$0_1",
    comparisonOperator_$0_$0_2 = "comparisonOperator_$0_$0_2",
    comparisonOperator_$0_$1_1 = "comparisonOperator_$0_$1_1",
    comparisonOperator_$0_$1_2 = "comparisonOperator_$0_$1_2",
    comparisonOperator_$1 = "comparisonOperator_$1",
    comparisonOperator_$1_$0_1 = "comparisonOperator_$1_$0_1",
    comparisonOperator_$1_$0_2 = "comparisonOperator_$1_$0_2",
    comparisonOperator_$1_$1_1 = "comparisonOperator_$1_$1_1",
    comparisonOperator_$1_$1_2 = "comparisonOperator_$1_$1_2",
    comparisonOperator_$2 = "comparisonOperator_$2",
    comparisonOperator_$2_$0_1 = "comparisonOperator_$2_$0_1",
    comparisonOperator_$2_$0_2 = "comparisonOperator_$2_$0_2",
    comparisonOperator_$2_$1_1 = "comparisonOperator_$2_$1_1",
    comparisonOperator_$2_$1_2 = "comparisonOperator_$2_$1_2",
    comparisonOperator_$3 = "comparisonOperator_$3",
    comparisonOperator_$3_$0_1 = "comparisonOperator_$3_$0_1",
    comparisonOperator_$3_$0_2 = "comparisonOperator_$3_$0_2",
    comparisonOperator_$3_$1_1 = "comparisonOperator_$3_$1_1",
    comparisonOperator_$3_$1_2 = "comparisonOperator_$3_$1_2",
    comparisonOperator_$4 = "comparisonOperator_$4",
    comparisonOperator_$4_$0_1 = "comparisonOperator_$4_$0_1",
    comparisonOperator_$4_$0_2 = "comparisonOperator_$4_$0_2",
    comparisonOperator_$5 = "comparisonOperator_$5",
    comparisonOperator_$5_$0_1 = "comparisonOperator_$5_$0_1",
    comparisonOperator_$5_$0_2 = "comparisonOperator_$5_$0_2",
    comparisonOperator_$6 = "comparisonOperator_$6",
    comparisonOperator_$6_$0_1 = "comparisonOperator_$6_$0_1",
    comparisonOperator_$6_$0_2 = "comparisonOperator_$6_$0_2",
    comparisonOperator_$6_$1_1 = "comparisonOperator_$6_$1_1",
    comparisonOperator_$6_$1_2 = "comparisonOperator_$6_$1_2",
    comparisonOperator_$6_$2_1 = "comparisonOperator_$6_$2_1",
    comparisonOperator_$6_$2_2 = "comparisonOperator_$6_$2_2",
    comparisonOperator_$6_$3_1 = "comparisonOperator_$6_$3_1",
    comparisonOperator_$6_$3_2 = "comparisonOperator_$6_$3_2",
    comparisonOperator_$7 = "comparisonOperator_$7",
    comparisonOperator_$7_$0_1 = "comparisonOperator_$7_$0_1",
    comparisonOperator_$7_$0_2 = "comparisonOperator_$7_$0_2",
    comparisonOperator_$7_$1_1 = "comparisonOperator_$7_$1_1",
    comparisonOperator_$7_$1_2 = "comparisonOperator_$7_$1_2",
    comparisonOperator_$7_$2_1 = "comparisonOperator_$7_$2_1",
    comparisonOperator_$7_$2_2 = "comparisonOperator_$7_$2_2",
    comparisonOperator_$7_$3_1 = "comparisonOperator_$7_$3_1",
    comparisonOperator_$7_$3_2 = "comparisonOperator_$7_$3_2",
    comparisonOperator_$7_$4_1 = "comparisonOperator_$7_$4_1",
    comparisonOperator_$7_$4_2 = "comparisonOperator_$7_$4_2",
    logicalConjunction = "logicalConjunction",
    logicalConjunction_$0_1 = "logicalConjunction_$0_1",
    logicalConjunction_$0_2 = "logicalConjunction_$0_2",
    logicalConjunction_$0_3 = "logicalConjunction_$0_3",
    logicalConjunction_$1_1 = "logicalConjunction_$1_1",
    logicalConjunction_$1_2 = "logicalConjunction_$1_2",
    logicalConjunction_$1_3 = "logicalConjunction_$1_3",
    logicalConjunctionOperator = "logicalConjunctionOperator",
    logicalConjunctionOperator_$0 = "logicalConjunctionOperator_$0",
    logicalConjunctionOperator_$0_$0_1 = "logicalConjunctionOperator_$0_$0_1",
    logicalConjunctionOperator_$0_$0_2 = "logicalConjunctionOperator_$0_$0_2",
    logicalConjunctionOperator_$0_$1_1 = "logicalConjunctionOperator_$0_$1_1",
    logicalConjunctionOperator_$0_$1_2 = "logicalConjunctionOperator_$0_$1_2",
    logicalDisjunction = "logicalDisjunction",
    logicalDisjunction_$0_1 = "logicalDisjunction_$0_1",
    logicalDisjunction_$0_2 = "logicalDisjunction_$0_2",
    logicalDisjunction_$0_3 = "logicalDisjunction_$0_3",
    logicalDisjunction_$1_1 = "logicalDisjunction_$1_1",
    logicalDisjunction_$1_2 = "logicalDisjunction_$1_2",
    logicalDisjunction_$1_3 = "logicalDisjunction_$1_3",
    logicalDisjunctionOperator = "logicalDisjunctionOperator",
    logicalDisjunctionOperator_$0 = "logicalDisjunctionOperator_$0",
    logicalDisjunctionOperator_$0_$0_1 = "logicalDisjunctionOperator_$0_$0_1",
    logicalDisjunctionOperator_$0_$0_2 = "logicalDisjunctionOperator_$0_$0_2",
    logicalDisjunctionOperator_$0_$1_1 = "logicalDisjunctionOperator_$0_$1_1",
    logicalDisjunctionOperator_$0_$1_2 = "logicalDisjunctionOperator_$0_$1_2",
    substitution = "substitution",
    substitution_$0_1 = "substitution_$0_1",
    substitution_$0_2 = "substitution_$0_2",
    substitution_$1_1 = "substitution_$1_1",
    substitution_$1_2 = "substitution_$1_2",
    substitution_$1_3 = "substitution_$1_3",
    substitution_$2_1 = "substitution_$2_1",
    substitution_$2_2 = "substitution_$2_2",
    substitution_$2_3 = "substitution_$2_3",
    substitutionOperator_1 = "substitutionOperator_1",
    substitutionOperator_2 = "substitutionOperator_2",
    substitutionOperator_$0 = "substitutionOperator_$0",
    substitutionOperator_$0_$0_1 = "substitutionOperator_$0_$0_1",
    substitutionOperator_$0_$0_2 = "substitutionOperator_$0_$0_2",
    substitutionOperator_$1 = "substitutionOperator_$1",
    substitutionOperator_$1_$0_1 = "substitutionOperator_$1_$0_1",
    substitutionOperator_$1_$0_2 = "substitutionOperator_$1_$0_2",
    substitutionOperator_$1_$1_1 = "substitutionOperator_$1_$1_1",
    substitutionOperator_$1_$1_2 = "substitutionOperator_$1_$1_2",
    substitutionOperation = "substitutionOperation",
    substitutionOperation_$0_1 = "substitutionOperation_$0_1",
    substitutionOperation_$0_2 = "substitutionOperation_$0_2",
    substitutionOperation_$1_1 = "substitutionOperation_$1_1",
    substitutionOperation_$1_2 = "substitutionOperation_$1_2",
    substitutionOperation_$1_3 = "substitutionOperation_$1_3",
    substitutionOperation_$2_1 = "substitutionOperation_$2_1",
    substitutionOperation_$2_2 = "substitutionOperation_$2_2",
    substitutionOperation_$2_3 = "substitutionOperation_$2_3",
    substitutionOperationOperator_1 = "substitutionOperationOperator_1",
    substitutionOperationOperator_2 = "substitutionOperationOperator_2",
    substitutionOperationOperator_3 = "substitutionOperationOperator_3",
    substitutionOperationOperator_4 = "substitutionOperationOperator_4",
    substitutionOperationOperator_5 = "substitutionOperationOperator_5",
    substitutionOperationOperator_6 = "substitutionOperationOperator_6",
    substitutionOperationOperator_7 = "substitutionOperationOperator_7",
    substitutionOperationOperator_8 = "substitutionOperationOperator_8",
    substitutionOperationOperator_9 = "substitutionOperationOperator_9",
    substitutionOperationOperator_10 = "substitutionOperationOperator_10",
    substitutionOperationOperator_11 = "substitutionOperationOperator_11",
    substitutionOperationOperator_$0 = "substitutionOperationOperator_$0",
    substitutionOperationOperator_$0_$0_1 = "substitutionOperationOperator_$0_$0_1",
    substitutionOperationOperator_$0_$0_2 = "substitutionOperationOperator_$0_$0_2",
    substitutionOperationOperator_$0_$1_1 = "substitutionOperationOperator_$0_$1_1",
    substitutionOperationOperator_$0_$1_2 = "substitutionOperationOperator_$0_$1_2",
    substitutionOperationOperator_$1 = "substitutionOperationOperator_$1",
    substitutionOperationOperator_$1_$0_1 = "substitutionOperationOperator_$1_$0_1",
    substitutionOperationOperator_$1_$0_2 = "substitutionOperationOperator_$1_$0_2",
    substitutionOperationOperator_$1_$1_1 = "substitutionOperationOperator_$1_$1_1",
    substitutionOperationOperator_$1_$1_2 = "substitutionOperationOperator_$1_$1_2",
    substitutionOperationOperator_$2 = "substitutionOperationOperator_$2",
    substitutionOperationOperator_$2_$0_1 = "substitutionOperationOperator_$2_$0_1",
    substitutionOperationOperator_$2_$0_2 = "substitutionOperationOperator_$2_$0_2",
    substitutionOperationOperator_$2_$1_1 = "substitutionOperationOperator_$2_$1_1",
    substitutionOperationOperator_$2_$1_2 = "substitutionOperationOperator_$2_$1_2",
    substitutionOperationOperator_$3 = "substitutionOperationOperator_$3",
    substitutionOperationOperator_$3_$0_1 = "substitutionOperationOperator_$3_$0_1",
    substitutionOperationOperator_$3_$0_2 = "substitutionOperationOperator_$3_$0_2",
    substitutionOperationOperator_$3_$1_1 = "substitutionOperationOperator_$3_$1_1",
    substitutionOperationOperator_$3_$1_2 = "substitutionOperationOperator_$3_$1_2",
    substitutionOperationOperator_$4 = "substitutionOperationOperator_$4",
    substitutionOperationOperator_$4_$0_1 = "substitutionOperationOperator_$4_$0_1",
    substitutionOperationOperator_$4_$0_2 = "substitutionOperationOperator_$4_$0_2",
    substitutionOperationOperator_$4_$1_1 = "substitutionOperationOperator_$4_$1_1",
    substitutionOperationOperator_$4_$1_2 = "substitutionOperationOperator_$4_$1_2",
    substitutionOperationOperator_$5 = "substitutionOperationOperator_$5",
    substitutionOperationOperator_$5_$0_1 = "substitutionOperationOperator_$5_$0_1",
    substitutionOperationOperator_$5_$0_2 = "substitutionOperationOperator_$5_$0_2",
    substitutionOperationOperator_$5_$1_1 = "substitutionOperationOperator_$5_$1_1",
    substitutionOperationOperator_$5_$1_2 = "substitutionOperationOperator_$5_$1_2",
    substitutionOperationOperator_$5_$2_1 = "substitutionOperationOperator_$5_$2_1",
    substitutionOperationOperator_$5_$2_2 = "substitutionOperationOperator_$5_$2_2",
    substitutionOperationOperator_$6 = "substitutionOperationOperator_$6",
    substitutionOperationOperator_$6_$0_1 = "substitutionOperationOperator_$6_$0_1",
    substitutionOperationOperator_$6_$0_2 = "substitutionOperationOperator_$6_$0_2",
    substitutionOperationOperator_$6_$1_1 = "substitutionOperationOperator_$6_$1_1",
    substitutionOperationOperator_$6_$1_2 = "substitutionOperationOperator_$6_$1_2",
    substitutionOperationOperator_$6_$2_1 = "substitutionOperationOperator_$6_$2_1",
    substitutionOperationOperator_$6_$2_2 = "substitutionOperationOperator_$6_$2_2",
    substitutionOperationOperator_$7 = "substitutionOperationOperator_$7",
    substitutionOperationOperator_$7_$0_1 = "substitutionOperationOperator_$7_$0_1",
    substitutionOperationOperator_$7_$0_2 = "substitutionOperationOperator_$7_$0_2",
    substitutionOperationOperator_$7_$1_1 = "substitutionOperationOperator_$7_$1_1",
    substitutionOperationOperator_$7_$1_2 = "substitutionOperationOperator_$7_$1_2",
    substitutionOperationOperator_$7_$2_1 = "substitutionOperationOperator_$7_$2_1",
    substitutionOperationOperator_$7_$2_2 = "substitutionOperationOperator_$7_$2_2",
    substitutionOperationOperator_$8 = "substitutionOperationOperator_$8",
    substitutionOperationOperator_$8_$0_1 = "substitutionOperationOperator_$8_$0_1",
    substitutionOperationOperator_$8_$0_2 = "substitutionOperationOperator_$8_$0_2",
    substitutionOperationOperator_$8_$1_1 = "substitutionOperationOperator_$8_$1_1",
    substitutionOperationOperator_$8_$1_2 = "substitutionOperationOperator_$8_$1_2",
    substitutionOperationOperator_$8_$2_1 = "substitutionOperationOperator_$8_$2_1",
    substitutionOperationOperator_$8_$2_2 = "substitutionOperationOperator_$8_$2_2",
    substitutionOperationOperator_$9 = "substitutionOperationOperator_$9",
    substitutionOperationOperator_$9_$0_1 = "substitutionOperationOperator_$9_$0_1",
    substitutionOperationOperator_$9_$0_2 = "substitutionOperationOperator_$9_$0_2",
    substitutionOperationOperator_$9_$1_1 = "substitutionOperationOperator_$9_$1_1",
    substitutionOperationOperator_$9_$1_2 = "substitutionOperationOperator_$9_$1_2",
    substitutionOperationOperator_$9_$2_1 = "substitutionOperationOperator_$9_$2_1",
    substitutionOperationOperator_$9_$2_2 = "substitutionOperationOperator_$9_$2_2",
    substitutionOperationOperator_$10 = "substitutionOperationOperator_$10",
    substitutionOperationOperator_$10_$0_1 = "substitutionOperationOperator_$10_$0_1",
    substitutionOperationOperator_$10_$0_2 = "substitutionOperationOperator_$10_$0_2",
    substitutionOperationOperator_$10_$1_1 = "substitutionOperationOperator_$10_$1_1",
    substitutionOperationOperator_$10_$1_2 = "substitutionOperationOperator_$10_$1_2",
    commaOperation = "commaOperation",
    commaOperation_$0 = "commaOperation_$0",
    arrayCall = "arrayCall",
    arrayCall_$0_1 = "arrayCall_$0_1",
    arrayCall_$0_2 = "arrayCall_$0_2",
    arrayCall_$0_3 = "arrayCall_$0_3",
    arrayCall_$1_1 = "arrayCall_$1_1",
    arrayCall_$1_2 = "arrayCall_$1_2",
    arrayCall_$1_3 = "arrayCall_$1_3",
    functionCall = "functionCall",
    functionCall_$0_1 = "functionCall_$0_1",
    functionCall_$0_2 = "functionCall_$0_2",
    functionCall_$0_3 = "functionCall_$0_3",
    functionCall_$1_1 = "functionCall_$1_1",
    functionCall_$1_2 = "functionCall_$1_2",
    functionCall_$1_3 = "functionCall_$1_3",
    signed = "signed",
    signed_$0_1 = "signed_$0_1",
    signed_$0_2 = "signed_$0_2",
    variable_1 = "variable_1",
    variable_2 = "variable_2",
    identifer = "identifer",
    variableLocal = "variableLocal",
    literal_1 = "literal_1",
    literal_2 = "literal_2",
    literal_3 = "literal_3",
    literal_4 = "literal_4",
    literal_5 = "literal_5",
    literal_6 = "literal_6",
    heredoc = "heredoc",
    heredocInner_1 = "heredocInner_1",
    heredocInner_2 = "heredocInner_2",
    heredocInner_3 = "heredocInner_3",
    heredocRaw = "heredocRaw",
    heredocRawInner_1 = "heredocRawInner_1",
    heredocRawInner_2 = "heredocRawInner_2",
    heredocRawInner_3 = "heredocRawInner_3",
    literalString = "literalString",
    literalStringInner_1 = "literalStringInner_1",
    literalStringInner_2 = "literalStringInner_2",
    literalStringInner_3 = "literalStringInner_3",
    literalStringInner_4 = "literalStringInner_4",
    literalStringRaw = "literalStringRaw",
    literalStringRawInner_1 = "literalStringRawInner_1",
    literalStringRawInner_2 = "literalStringRawInner_2",
    literalStringRawInner_3 = "literalStringRawInner_3",
    literalStringRawInner_4 = "literalStringRawInner_4",
    real = "real",
    real_$0_1 = "real_$0_1",
    real_$0_2 = "real_$0_2",
    int_1 = "int_1",
    int_2 = "int_2",
    int_3 = "int_3",
    int_x10 = "int_x10",
    int_x10_$0_1 = "int_x10_$0_1",
    int_x10_$0_2 = "int_x10_$0_2",
    int_x10Inner_1 = "int_x10Inner_1",
    int_x10Inner_2 = "int_x10Inner_2",
    int_x2 = "int_x2",
    int_x2Inner_1 = "int_x2Inner_1",
    int_x2Inner_2 = "int_x2Inner_2",
    int_x16 = "int_x16",
    int_x16Inner_1 = "int_x16Inner_1",
    int_x16Inner_2 = "int_x16Inner_2",
    preprocess_1 = "preprocess_1",
    preprocess_2 = "preprocess_2",
    preprocessGlobalDefine = "preprocessGlobalDefine",
    preprocessGlobalDefineName = "preprocessGlobalDefineName",
    preprocessDefine = "preprocessDefine",
    preprocessDefineName = "preprocessDefineName",
    maybePreprocess = "maybePreprocess",
    preprocessBeforeCharacterSentence_1 = "preprocessBeforeCharacterSentence_1",
    preprocessBeforeCharacterSentence_2 = "preprocessBeforeCharacterSentence_2",
    preprocessAfterCharacterSentence_1 = "preprocessAfterCharacterSentence_1",
    preprocessAfterCharacterSentence_2 = "preprocessAfterCharacterSentence_2",
    $EOF = "$EOF"
}
export interface start {
    kind: ASTKinds.start;
    contents: content[];
}
export type content = content_1 | content_2 | content_3 | content_4 | content_5 | content_6 | content_7;
export type content_1 = newLine;
export type content_2 = someSpaces;
export type content_3 = commentLong;
export type content_4 = commentLine;
export type content_5 = continueLine;
export type content_6 = functionBlock;
export type content_7 = preprocess;
export interface newLine {
    kind: ASTKinds.newLine;
    newLine: newLineBody;
    spaces: space[];
}
export type newLineBody = newLineBody_1 | newLineBody_2 | newLineBody_3;
export type newLineBody_1 = string;
export type newLineBody_2 = string;
export type newLineBody_3 = string;
export type endOfLine = endOfLine_1 | endOfLine_2;
export type endOfLine_1 = newLine;
export type endOfLine_2 = {
    kind: ASTKinds.$EOF;
};
export type space = string;
export interface someSpaces {
    kind: ASTKinds.someSpaces;
    spaces: space[];
}
export declare class commentLong {
    kind: ASTKinds.commentLong;
    commentRaw: commentLongBody[];
    comment: string;
    constructor(commentRaw: commentLongBody[]);
}
export type commentLongBody = commentLongBody_1 | commentLongBody_2;
export interface commentLongBody_1 {
    kind: ASTKinds.commentLongBody_1;
    c: string;
}
export interface commentLongBody_2 {
    kind: ASTKinds.commentLongBody_2;
    c: string;
}
export interface commentLine {
    kind: ASTKinds.commentLine;
    spaces: space[];
    commentRaw: string[];
    endOfLine: endOfLine;
}
export interface continueLine {
    kind: ASTKinds.continueLine;
    newLine: newLine;
}
export type continueLineOrCommentLong = continueLineOrCommentLong_1 | continueLineOrCommentLong_2;
export type continueLineOrCommentLong_1 = continueLine;
export type continueLineOrCommentLong_2 = commentLong;
export type spaceOrContinueLineOrCommentLong = spaceOrContinueLineOrCommentLong_1 | spaceOrContinueLineOrCommentLong_2 | spaceOrContinueLineOrCommentLong_3;
export type spaceOrContinueLineOrCommentLong_1 = space;
export type spaceOrContinueLineOrCommentLong_2 = continueLine;
export type spaceOrContinueLineOrCommentLong_3 = commentLong;
export type identiferHeadCharacter = string;
export type identiferBodySentence = identiferBodySentence_1 | identiferBodySentence_2;
export type identiferBodySentence_1 = continueLineOrCommentLong;
export type identiferBodySentence_2 = identiferBodyCharacter;
export type identiferBodyCharacter = string;
export interface statementSeparator {
    kind: ASTKinds.statementSeparator;
    separator: statementSeparatorBody;
}
export type statementSeparatorBody = statementSeparatorBody_1 | statementSeparatorBody_2 | statementSeparatorBody_3;
export interface statementSeparatorBody_1 {
    kind: ASTKinds.statementSeparatorBody_1;
}
export type statementSeparatorBody_2 = newLine;
export type statementSeparatorBody_3 = commentLine;
export type statementTerminator = statementTerminator_1 | statementTerminator_2;
export interface statementTerminator_1 {
    kind: ASTKinds.statementTerminator_1;
    separator: statementSeparator;
}
export type statementTerminator_2 = statementTerminatorBody;
export interface statementTerminatorBody {
    kind: ASTKinds.statementTerminatorBody;
}
export interface functionBlock {
    kind: ASTKinds.functionBlock;
    name: functionBlockName;
    spacesBeforeSelector: functionBlock_$0[];
    selector: Nullable<functionBlockSelector>;
    spacesBeforeBody: functionBlock_$1[];
    open: functionBlock_$2;
    blockInners: blockInner[];
    close: functionBlock_$3;
}
export type functionBlock_$0 = functionBlock_$0_1 | functionBlock_$0_2 | functionBlock_$0_3 | functionBlock_$0_4 | functionBlock_$0_5;
export type functionBlock_$0_1 = space;
export type functionBlock_$0_2 = continueLine;
export type functionBlock_$0_3 = newLine;
export type functionBlock_$0_4 = commentLine;
export type functionBlock_$0_5 = commentLong;
export type functionBlock_$1 = functionBlock_$1_1 | functionBlock_$1_2 | functionBlock_$1_3 | functionBlock_$1_4 | functionBlock_$1_5;
export type functionBlock_$1_1 = space;
export type functionBlock_$1_2 = continueLine;
export type functionBlock_$1_3 = newLine;
export type functionBlock_$1_4 = commentLine;
export type functionBlock_$1_5 = commentLong;
export type functionBlock_$2 = functionBlock_$2_1 | functionBlock_$2_2;
export type functionBlock_$2_1 = string;
export type functionBlock_$2_2 = string;
export type functionBlock_$3 = functionBlock_$3_1 | functionBlock_$3_2;
export type functionBlock_$3_1 = string;
export type functionBlock_$3_2 = string;
export type functionBlockName = identifer;
export interface functionBlockSelector {
    kind: ASTKinds.functionBlockSelector;
    spaceLhs: spaceOrContinueLineOrCommentLong[];
    spaceRhs: spaceOrContinueLineOrCommentLong[];
    selector: Nullable<selector>;
}
export interface selector {
    kind: ASTKinds.selector;
    prefix: Nullable<selectorPrefix>;
    main: selectorMain;
    suffix: Nullable<selectorSuffix>;
}
export interface selectorPrefix {
    kind: ASTKinds.selectorPrefix;
    nameRaw: selectorPrefixName;
}
export declare class selectorPrefixName {
    kind: ASTKinds.selectorPrefixName;
    c1: continueLineOrCommentLong[];
    c2: continueLineOrCommentLong[];
    c3: continueLineOrCommentLong[];
    c4: continueLineOrCommentLong[];
    name: string;
    comments: commentLong[][];
    constructor(c1: continueLineOrCommentLong[], c2: continueLineOrCommentLong[], c3: continueLineOrCommentLong[], c4: continueLineOrCommentLong[]);
}
export interface selectorMain {
    kind: ASTKinds.selectorMain;
    nameRaw: selectorMainName;
}
export type selectorMainName = selectorMainName_1 | selectorMainName_2 | selectorMainName_3 | selectorMainName_4 | selectorMainName_5 | selectorMainName_6 | selectorMainName_7;
export declare class selectorMainName_1 {
    kind: ASTKinds.selectorMainName_1;
    c1: continueLineOrCommentLong[];
    c2: continueLineOrCommentLong[];
    c3: continueLineOrCommentLong[];
    c4: continueLineOrCommentLong[];
    c5: continueLineOrCommentLong[];
    c6: continueLineOrCommentLong[];
    name: string;
    comments: commentLong[][];
    constructor(c1: continueLineOrCommentLong[], c2: continueLineOrCommentLong[], c3: continueLineOrCommentLong[], c4: continueLineOrCommentLong[], c5: continueLineOrCommentLong[], c6: continueLineOrCommentLong[]);
}
export declare class selectorMainName_2 {
    kind: ASTKinds.selectorMainName_2;
    c1: continueLineOrCommentLong[];
    c2: continueLineOrCommentLong[];
    c3: continueLineOrCommentLong[];
    c4: continueLineOrCommentLong[];
    c5: continueLineOrCommentLong[];
    c6: continueLineOrCommentLong[];
    c7: continueLineOrCommentLong[];
    c8: continueLineOrCommentLong[];
    c9: continueLineOrCommentLong[];
    c10: continueLineOrCommentLong[];
    name: string;
    comments: commentLong[][];
    constructor(c1: continueLineOrCommentLong[], c2: continueLineOrCommentLong[], c3: continueLineOrCommentLong[], c4: continueLineOrCommentLong[], c5: continueLineOrCommentLong[], c6: continueLineOrCommentLong[], c7: continueLineOrCommentLong[], c8: continueLineOrCommentLong[], c9: continueLineOrCommentLong[], c10: continueLineOrCommentLong[]);
}
export declare class selectorMainName_3 {
    kind: ASTKinds.selectorMainName_3;
    c1: continueLineOrCommentLong[];
    c2: continueLineOrCommentLong[];
    c3: continueLineOrCommentLong[];
    c4: continueLineOrCommentLong[];
    c5: continueLineOrCommentLong[];
    c6: continueLineOrCommentLong[];
    c7: continueLineOrCommentLong[];
    c8: continueLineOrCommentLong[];
    c9: continueLineOrCommentLong[];
    c10: continueLineOrCommentLong[];
    name: string;
    comments: commentLong[][];
    constructor(c1: continueLineOrCommentLong[], c2: continueLineOrCommentLong[], c3: continueLineOrCommentLong[], c4: continueLineOrCommentLong[], c5: continueLineOrCommentLong[], c6: continueLineOrCommentLong[], c7: continueLineOrCommentLong[], c8: continueLineOrCommentLong[], c9: continueLineOrCommentLong[], c10: continueLineOrCommentLong[]);
}
export declare class selectorMainName_4 {
    kind: ASTKinds.selectorMainName_4;
    c1: continueLineOrCommentLong[];
    c2: continueLineOrCommentLong[];
    c3: continueLineOrCommentLong[];
    c4: continueLineOrCommentLong[];
    c5: continueLineOrCommentLong[];
    name: string;
    comments: commentLong[][];
    constructor(c1: continueLineOrCommentLong[], c2: continueLineOrCommentLong[], c3: continueLineOrCommentLong[], c4: continueLineOrCommentLong[], c5: continueLineOrCommentLong[]);
}
export declare class selectorMainName_5 {
    kind: ASTKinds.selectorMainName_5;
    c1: continueLineOrCommentLong[];
    c2: continueLineOrCommentLong[];
    c3: continueLineOrCommentLong[];
    c4: continueLineOrCommentLong[];
    name: string;
    comments: commentLong[][];
    constructor(c1: continueLineOrCommentLong[], c2: continueLineOrCommentLong[], c3: continueLineOrCommentLong[], c4: continueLineOrCommentLong[]);
}
export declare class selectorMainName_6 {
    kind: ASTKinds.selectorMainName_6;
    c1: continueLineOrCommentLong[];
    c2: continueLineOrCommentLong[];
    c3: continueLineOrCommentLong[];
    name: string;
    comments: commentLong[][];
    constructor(c1: continueLineOrCommentLong[], c2: continueLineOrCommentLong[], c3: continueLineOrCommentLong[]);
}
export declare class selectorMainName_7 {
    kind: ASTKinds.selectorMainName_7;
    c1: continueLineOrCommentLong[];
    c2: continueLineOrCommentLong[];
    c3: continueLineOrCommentLong[];
    c4: continueLineOrCommentLong[];
    name: string;
    comments: commentLong[][];
    constructor(c1: continueLineOrCommentLong[], c2: continueLineOrCommentLong[], c3: continueLineOrCommentLong[], c4: continueLineOrCommentLong[]);
}
export interface selectorSuffix {
    kind: ASTKinds.selectorSuffix;
    nameRaw: selectorSuffixName;
}
export declare class selectorSuffixName {
    kind: ASTKinds.selectorSuffixName;
    c1: continueLineOrCommentLong[];
    c2: continueLineOrCommentLong[];
    c3: continueLineOrCommentLong[];
    name: string;
    comments: commentLong[][];
    constructor(c1: continueLineOrCommentLong[], c2: continueLineOrCommentLong[], c3: continueLineOrCommentLong[]);
}
export interface block {
    kind: ASTKinds.block;
    spacesStart: block_$0[];
    selector: Nullable<blockSelector>;
    spacesBeforeBlock: block_$1[];
    blockInners: blockInner[];
    spacesEnd: block_$2[];
}
export type block_$0 = block_$0_1 | block_$0_2 | block_$0_3 | block_$0_4 | block_$0_5;
export type block_$0_1 = space;
export type block_$0_2 = continueLine;
export type block_$0_3 = newLine;
export type block_$0_4 = commentLong;
export type block_$0_5 = commentLine;
export type block_$1 = block_$1_1 | block_$1_2 | block_$1_3;
export type block_$1_1 = space;
export type block_$1_2 = continueLine;
export type block_$1_3 = newLine;
export type block_$2 = block_$2_1 | block_$2_2 | block_$2_3 | block_$2_4 | block_$2_5;
export type block_$2_1 = space;
export type block_$2_2 = continueLine;
export type block_$2_3 = newLine;
export type block_$2_4 = commentLong;
export type block_$2_5 = commentLine;
export interface blockSelector {
    kind: ASTKinds.blockSelector;
    selector: Nullable<selector>;
    spacesLhs: space[];
    spacesRhs: space[];
}
export type blockInner = blockInner_1 | blockInner_2 | blockInner_3 | blockInner_4 | blockInner_5 | blockInner_6 | blockInner_7 | blockInner_8;
export type blockInner_1 = newLine;
export type blockInner_2 = commentLong;
export type blockInner_3 = commentLine;
export type blockInner_4 = continueLine;
export type blockInner_5 = someSpaces;
export type blockInner_6 = blockInnerFlow;
export type blockInner_7 = blockInnerSentence;
export type blockInner_8 = preprocess;
export interface blockInnerFlow {
    kind: ASTKinds.blockInnerFlow;
    body: blockInnerFlowKind;
}
export type blockInnerFlowKind = blockInnerFlowKind_1 | blockInnerFlowKind_2 | blockInnerFlowKind_3 | blockInnerFlowKind_4 | blockInnerFlowKind_5 | blockInnerFlowKind_6 | blockInnerFlowKind_7;
export type blockInnerFlowKind_1 = flowIf;
export type blockInnerFlowKind_2 = flowCase;
export type blockInnerFlowKind_3 = flowSwitch;
export type blockInnerFlowKind_4 = flowWhile;
export type blockInnerFlowKind_5 = flowFor;
export type blockInnerFlowKind_6 = flowForeach;
export type blockInnerFlowKind_7 = block;
export interface blockInnerSentence {
    kind: ASTKinds.blockInnerSentence;
    body: blockInnerSentenceKind;
    spaces: blockInnerSentence_$0[];
    terminator: statementTerminator;
}
export type blockInnerSentence_$0 = blockInnerSentence_$0_1 | blockInnerSentence_$0_2 | blockInnerSentence_$0_3;
export type blockInnerSentence_$0_1 = space;
export type blockInnerSentence_$0_2 = continueLine;
export type blockInnerSentence_$0_3 = commentLong;
export type blockInnerSentenceKind = blockInnerSentenceKind_1 | blockInnerSentenceKind_2 | blockInnerSentenceKind_3 | blockInnerSentenceKind_4 | blockInnerSentenceKind_5 | blockInnerSentenceKind_6 | blockInnerSentenceKind_7;
export type blockInnerSentenceKind_1 = blockInnerBreak;
export type blockInnerSentenceKind_2 = blockInnerContinue;
export type blockInnerSentenceKind_3 = blockInnerReturn;
export type blockInnerSentenceKind_4 = blockInnerParallel;
export type blockInnerSentenceKind_5 = blockInnerVoid;
export type blockInnerSentenceKind_6 = outputSettlement;
export type blockInnerSentenceKind_7 = expr;
export interface flowIf {
    kind: ASTKinds.flowIf;
    name: flowIfName;
    condition: expr;
    block: flowIf_$0;
    flowElseifs: flowElseif[];
    flowElse: Nullable<flowElse>;
}
export type flowIf_$0 = flowIf_$0_1 | flowIf_$0_2;
export type flowIf_$0_1 = block;
export type flowIf_$0_2 = flowIfBlock;
export declare class flowIfName {
    kind: ASTKinds.flowIfName;
    c1: continueLineOrCommentLong[];
    comments: commentLong[][];
    constructor(c1: continueLineOrCommentLong[]);
}
export interface flowElseif {
    kind: ASTKinds.flowElseif;
    name: flowElseifName;
    condition: expr;
    block: flowElseif_$0;
}
export type flowElseif_$0 = flowElseif_$0_1 | flowElseif_$0_2;
export type flowElseif_$0_1 = block;
export type flowElseif_$0_2 = flowIfBlock;
export declare class flowElseifName {
    kind: ASTKinds.flowElseifName;
    c1: continueLineOrCommentLong[];
    c2: continueLineOrCommentLong[];
    c3: continueLineOrCommentLong[];
    c4: continueLineOrCommentLong[];
    c5: continueLineOrCommentLong[];
    c6: continueLineOrCommentLong[];
    comments: commentLong[][];
    constructor(c1: continueLineOrCommentLong[], c2: continueLineOrCommentLong[], c3: continueLineOrCommentLong[], c4: continueLineOrCommentLong[], c5: continueLineOrCommentLong[], c6: continueLineOrCommentLong[]);
}
export interface flowElse {
    kind: ASTKinds.flowElse;
    name: flowElseName;
    block: flowElse_$0;
}
export type flowElse_$0 = flowElse_$0_1 | flowElse_$0_2;
export type flowElse_$0_1 = block;
export type flowElse_$0_2 = flowIfBlock;
export declare class flowElseName {
    kind: ASTKinds.flowElseName;
    c1: continueLineOrCommentLong[];
    c2: continueLineOrCommentLong[];
    c3: continueLineOrCommentLong[];
    c4: continueLineOrCommentLong[];
    comments: commentLong[][];
    constructor(c1: continueLineOrCommentLong[], c2: continueLineOrCommentLong[], c3: continueLineOrCommentLong[], c4: continueLineOrCommentLong[]);
}
export interface flowIfBlock {
    kind: ASTKinds.flowIfBlock;
    spacesStart: spaceOrContinueLineOrCommentLong[];
    newLineFirst: flowIfBlock_$0;
    inner: blockInnerSentence;
    spacesEnd: flowIfBlock_$1[];
}
export type flowIfBlock_$0 = flowIfBlock_$0_1 | flowIfBlock_$0_2;
export type flowIfBlock_$0_1 = newLine;
export type flowIfBlock_$0_2 = commentLine;
export type flowIfBlock_$1 = flowIfBlock_$1_1 | flowIfBlock_$1_2;
export type flowIfBlock_$1_1 = space;
export type flowIfBlock_$1_2 = commentLong;
export interface flowCase {
    kind: ASTKinds.flowCase;
    name: flowCaseName;
    condition: expr;
    spacesBeforeBlock: flowCase_$0[];
    firstBlockInners: blockInner[];
    flowWhens: flowWhen[];
    flowOthers: Nullable<flowOthers>;
    lastBlockInners: blockInner[];
    spacesAfterBlock: flowCase_$1[];
}
export type flowCase_$0 = flowCase_$0_1 | flowCase_$0_2 | flowCase_$0_3 | flowCase_$0_4 | flowCase_$0_5;
export type flowCase_$0_1 = space;
export type flowCase_$0_2 = continueLine;
export type flowCase_$0_3 = newLine;
export type flowCase_$0_4 = commentLong;
export type flowCase_$0_5 = commentLine;
export type flowCase_$1 = flowCase_$1_1 | flowCase_$1_2 | flowCase_$1_3 | flowCase_$1_4 | flowCase_$1_5;
export type flowCase_$1_1 = space;
export type flowCase_$1_2 = continueLine;
export type flowCase_$1_3 = newLine;
export type flowCase_$1_4 = commentLong;
export type flowCase_$1_5 = commentLine;
export declare class flowCaseName {
    kind: ASTKinds.flowCaseName;
    c1: continueLineOrCommentLong[];
    c2: continueLineOrCommentLong[];
    c3: continueLineOrCommentLong[];
    c4: continueLineOrCommentLong[];
    comments: commentLong[][];
    constructor(c1: continueLineOrCommentLong[], c2: continueLineOrCommentLong[], c3: continueLineOrCommentLong[], c4: continueLineOrCommentLong[]);
}
export interface flowWhen {
    kind: ASTKinds.flowWhen;
    name: flowWhenName;
    conditions: flowWhenConditions;
    block: block;
}
export declare class flowWhenName {
    kind: ASTKinds.flowWhenName;
    c1: continueLineOrCommentLong[];
    c2: continueLineOrCommentLong[];
    c3: continueLineOrCommentLong[];
    c4: continueLineOrCommentLong[];
    comments: commentLong[][];
    constructor(c1: continueLineOrCommentLong[], c2: continueLineOrCommentLong[], c3: continueLineOrCommentLong[], c4: continueLineOrCommentLong[]);
}
export declare class flowWhenConditions {
    kind: ASTKinds.flowWhenConditions;
    conditionHead: flowWhenCondition;
    conditionBodies: flowWhenConditions_$0[];
    conditions: flowWhenCondition[];
    constructor(conditionHead: flowWhenCondition, conditionBodies: flowWhenConditions_$0[]);
}
export interface flowWhenConditions_$0 {
    kind: ASTKinds.flowWhenConditions_$0;
    body: flowWhenCondition;
}
export type flowWhenCondition = flowWhenCondition_1 | flowWhenCondition_2;
export type flowWhenCondition_1 = flowWhenConditionRange;
export type flowWhenCondition_2 = flowWhenConditionLiteral;
export interface flowWhenConditionLiteral {
    kind: ASTKinds.flowWhenConditionLiteral;
    spacesStart: flowWhenConditionLiteral_$0[];
    body: flowWhenConditionLiteral_$1;
    spacesEnd: flowWhenConditionLiteral_$2[];
}
export type flowWhenConditionLiteral_$0 = flowWhenConditionLiteral_$0_1 | flowWhenConditionLiteral_$0_2 | flowWhenConditionLiteral_$0_3;
export type flowWhenConditionLiteral_$0_1 = space;
export type flowWhenConditionLiteral_$0_2 = continueLine;
export type flowWhenConditionLiteral_$0_3 = commentLong;
export type flowWhenConditionLiteral_$1 = flowWhenConditionLiteral_$1_1 | flowWhenConditionLiteral_$1_2;
export type flowWhenConditionLiteral_$1_1 = literal;
export type flowWhenConditionLiteral_$1_2 = maybePreprocess;
export type flowWhenConditionLiteral_$2 = flowWhenConditionLiteral_$2_1 | flowWhenConditionLiteral_$2_2 | flowWhenConditionLiteral_$2_3;
export type flowWhenConditionLiteral_$2_1 = space;
export type flowWhenConditionLiteral_$2_2 = continueLine;
export type flowWhenConditionLiteral_$2_3 = commentLong;
export interface flowWhenConditionRange {
    kind: ASTKinds.flowWhenConditionRange;
    spacesStart: flowWhenConditionRange_$0[];
    lhs: flowWhenConditionRange_$1;
    spacesLhs: flowWhenConditionRange_$2[];
    spacesRhs: flowWhenConditionRange_$3[];
    rhs: flowWhenConditionRange_$4;
    spacesEnd: flowWhenConditionRange_$5[];
}
export type flowWhenConditionRange_$0 = flowWhenConditionRange_$0_1 | flowWhenConditionRange_$0_2 | flowWhenConditionRange_$0_3;
export type flowWhenConditionRange_$0_1 = space;
export type flowWhenConditionRange_$0_2 = continueLine;
export type flowWhenConditionRange_$0_3 = commentLong;
export type flowWhenConditionRange_$1 = flowWhenConditionRange_$1_1 | flowWhenConditionRange_$1_2;
export type flowWhenConditionRange_$1_1 = literal;
export type flowWhenConditionRange_$1_2 = maybePreprocess;
export type flowWhenConditionRange_$2 = flowWhenConditionRange_$2_1 | flowWhenConditionRange_$2_2 | flowWhenConditionRange_$2_3;
export type flowWhenConditionRange_$2_1 = space;
export type flowWhenConditionRange_$2_2 = continueLine;
export type flowWhenConditionRange_$2_3 = commentLong;
export type flowWhenConditionRange_$3 = flowWhenConditionRange_$3_1 | flowWhenConditionRange_$3_2 | flowWhenConditionRange_$3_3;
export type flowWhenConditionRange_$3_1 = space;
export type flowWhenConditionRange_$3_2 = continueLine;
export type flowWhenConditionRange_$3_3 = commentLong;
export type flowWhenConditionRange_$4 = flowWhenConditionRange_$4_1 | flowWhenConditionRange_$4_2;
export type flowWhenConditionRange_$4_1 = literal;
export type flowWhenConditionRange_$4_2 = maybePreprocess;
export type flowWhenConditionRange_$5 = flowWhenConditionRange_$5_1 | flowWhenConditionRange_$5_2 | flowWhenConditionRange_$5_3;
export type flowWhenConditionRange_$5_1 = space;
export type flowWhenConditionRange_$5_2 = continueLine;
export type flowWhenConditionRange_$5_3 = commentLong;
export interface flowOthers {
    kind: ASTKinds.flowOthers;
    spacesStart: flowOthers_$0[];
    name: flowOthersName;
    block: block;
}
export type flowOthers_$0 = flowOthers_$0_1 | flowOthers_$0_2 | flowOthers_$0_3;
export type flowOthers_$0_1 = space;
export type flowOthers_$0_2 = continueLine;
export type flowOthers_$0_3 = commentLong;
export declare class flowOthersName {
    kind: ASTKinds.flowOthersName;
    c1: continueLineOrCommentLong[];
    c2: continueLineOrCommentLong[];
    c3: continueLineOrCommentLong[];
    c4: continueLineOrCommentLong[];
    c5: continueLineOrCommentLong[];
    c6: continueLineOrCommentLong[];
    comments: commentLong[][];
    constructor(c1: continueLineOrCommentLong[], c2: continueLineOrCommentLong[], c3: continueLineOrCommentLong[], c4: continueLineOrCommentLong[], c5: continueLineOrCommentLong[], c6: continueLineOrCommentLong[]);
}
export interface flowSwitch {
    kind: ASTKinds.flowSwitch;
    name: flowSwitchName;
    condition: expr;
    block: block;
}
export declare class flowSwitchName {
    kind: ASTKinds.flowSwitchName;
    c1: continueLineOrCommentLong[];
    c2: continueLineOrCommentLong[];
    c3: continueLineOrCommentLong[];
    c4: continueLineOrCommentLong[];
    c5: continueLineOrCommentLong[];
    c6: continueLineOrCommentLong[];
    comments: commentLong[][];
    constructor(c1: continueLineOrCommentLong[], c2: continueLineOrCommentLong[], c3: continueLineOrCommentLong[], c4: continueLineOrCommentLong[], c5: continueLineOrCommentLong[], c6: continueLineOrCommentLong[]);
}
export interface flowWhile {
    kind: ASTKinds.flowWhile;
    name: flowWhileName;
    condition: expr;
    block: block;
}
export declare class flowWhileName {
    kind: ASTKinds.flowWhileName;
    c1: continueLineOrCommentLong[];
    c2: continueLineOrCommentLong[];
    c3: continueLineOrCommentLong[];
    c4: continueLineOrCommentLong[];
    c5: continueLineOrCommentLong[];
    comments: commentLong[][];
    constructor(c1: continueLineOrCommentLong[], c2: continueLineOrCommentLong[], c3: continueLineOrCommentLong[], c4: continueLineOrCommentLong[], c5: continueLineOrCommentLong[]);
}
export interface flowFor {
    kind: ASTKinds.flowFor;
    name: flowForName;
    initializer: expr;
    separator1: statementSeparator;
    condition: expr;
    separator2: statementSeparator;
    updater: expr;
    block: block;
}
export declare class flowForName {
    kind: ASTKinds.flowForName;
    c1: continueLineOrCommentLong[];
    c2: continueLineOrCommentLong[];
    c3: continueLineOrCommentLong[];
    comments: commentLong[][];
    constructor(c1: continueLineOrCommentLong[], c2: continueLineOrCommentLong[], c3: continueLineOrCommentLong[]);
}
export interface flowForeach {
    kind: ASTKinds.flowForeach;
    name: flowForeachName;
    target: expr;
    separator: statementSeparator;
    spaceBeforeVariable: flowForeach_$0[];
    variable: variable;
    block: block;
}
export type flowForeach_$0 = flowForeach_$0_1 | flowForeach_$0_2 | flowForeach_$0_3;
export type flowForeach_$0_1 = space;
export type flowForeach_$0_2 = commentLong;
export type flowForeach_$0_3 = continueLine;
export declare class flowForeachName {
    kind: ASTKinds.flowForeachName;
    c1: continueLineOrCommentLong[];
    c2: continueLineOrCommentLong[];
    c3: continueLineOrCommentLong[];
    c4: continueLineOrCommentLong[];
    c5: continueLineOrCommentLong[];
    c6: continueLineOrCommentLong[];
    c7: continueLineOrCommentLong[];
    comments: commentLong[][];
    constructor(c1: continueLineOrCommentLong[], c2: continueLineOrCommentLong[], c3: continueLineOrCommentLong[], c4: continueLineOrCommentLong[], c5: continueLineOrCommentLong[], c6: continueLineOrCommentLong[], c7: continueLineOrCommentLong[]);
}
export interface blockInnerBreak {
    kind: ASTKinds.blockInnerBreak;
    name: blockInnerBreakName;
}
export declare class blockInnerBreakName {
    kind: ASTKinds.blockInnerBreakName;
    c1: continueLineOrCommentLong[];
    c2: continueLineOrCommentLong[];
    c3: continueLineOrCommentLong[];
    c4: continueLineOrCommentLong[];
    c5: continueLineOrCommentLong[];
    comments: commentLong[][];
    constructor(c1: continueLineOrCommentLong[], c2: continueLineOrCommentLong[], c3: continueLineOrCommentLong[], c4: continueLineOrCommentLong[], c5: continueLineOrCommentLong[]);
}
export interface blockInnerContinue {
    kind: ASTKinds.blockInnerContinue;
    name: blockInnerContinueName;
}
export declare class blockInnerContinueName {
    kind: ASTKinds.blockInnerContinueName;
    c1: continueLineOrCommentLong[];
    c2: continueLineOrCommentLong[];
    c3: continueLineOrCommentLong[];
    c4: continueLineOrCommentLong[];
    c5: continueLineOrCommentLong[];
    c6: continueLineOrCommentLong[];
    c7: continueLineOrCommentLong[];
    c8: continueLineOrCommentLong[];
    comments: commentLong[][];
    constructor(c1: continueLineOrCommentLong[], c2: continueLineOrCommentLong[], c3: continueLineOrCommentLong[], c4: continueLineOrCommentLong[], c5: continueLineOrCommentLong[], c6: continueLineOrCommentLong[], c7: continueLineOrCommentLong[], c8: continueLineOrCommentLong[]);
}
export interface blockInnerReturn {
    kind: ASTKinds.blockInnerReturn;
    name: blockInnerReturnName;
}
export declare class blockInnerReturnName {
    kind: ASTKinds.blockInnerReturnName;
    c1: continueLineOrCommentLong[];
    c2: continueLineOrCommentLong[];
    c3: continueLineOrCommentLong[];
    c4: continueLineOrCommentLong[];
    c5: continueLineOrCommentLong[];
    c6: continueLineOrCommentLong[];
    comments: commentLong[][];
    constructor(c1: continueLineOrCommentLong[], c2: continueLineOrCommentLong[], c3: continueLineOrCommentLong[], c4: continueLineOrCommentLong[], c5: continueLineOrCommentLong[], c6: continueLineOrCommentLong[]);
}
export interface blockInnerParallel {
    kind: ASTKinds.blockInnerParallel;
    name: blockInnerParallelName;
    target: expr;
}
export declare class blockInnerParallelName {
    kind: ASTKinds.blockInnerParallelName;
    c1: continueLineOrCommentLong[];
    c2: continueLineOrCommentLong[];
    c3: continueLineOrCommentLong[];
    c4: continueLineOrCommentLong[];
    c5: continueLineOrCommentLong[];
    c6: continueLineOrCommentLong[];
    c7: continueLineOrCommentLong[];
    c8: continueLineOrCommentLong[];
    comments: commentLong[][];
    constructor(c1: continueLineOrCommentLong[], c2: continueLineOrCommentLong[], c3: continueLineOrCommentLong[], c4: continueLineOrCommentLong[], c5: continueLineOrCommentLong[], c6: continueLineOrCommentLong[], c7: continueLineOrCommentLong[], c8: continueLineOrCommentLong[]);
}
export interface blockInnerVoid {
    kind: ASTKinds.blockInnerVoid;
    name: blockInnerVoidName;
    target: expr;
}
export declare class blockInnerVoidName {
    kind: ASTKinds.blockInnerVoidName;
    c1: continueLineOrCommentLong[];
    c2: continueLineOrCommentLong[];
    c3: continueLineOrCommentLong[];
    c4: continueLineOrCommentLong[];
    comments: commentLong[][];
    constructor(c1: continueLineOrCommentLong[], c2: continueLineOrCommentLong[], c3: continueLineOrCommentLong[], c4: continueLineOrCommentLong[]);
}
export interface outputSettlement {
    kind: ASTKinds.outputSettlement;
    tokens: string;
}
export interface expr {
    kind: ASTKinds.expr;
    spacesLhs: expr_$0[];
    inner: exprInner;
    spacesRhs: expr_$1[];
}
export type expr_$0 = expr_$0_1 | expr_$0_2 | expr_$0_3;
export type expr_$0_1 = space;
export type expr_$0_2 = commentLong;
export type expr_$0_3 = continueLine;
export type expr_$1 = expr_$1_1 | expr_$1_2 | expr_$1_3;
export type expr_$1_1 = space;
export type expr_$1_2 = commentLong;
export type expr_$1_3 = continueLine;
export type exprInner = exprInner_1 | exprInner_2 | exprInner_3 | exprInner_4 | exprInner_5 | exprInner_6 | exprInner_7 | exprInner_8 | exprInner_9 | exprInner_10 | exprInner_11 | exprInner_12 | exprInner_13 | exprInner_14 | exprInner_15 | exprInner_16 | exprInner_17 | exprInner_18 | exprInner_19;
export type exprInner_1 = commaOperation;
export type exprInner_2 = multiplicationOrDivisionOperation;
export type exprInner_3 = additionOrSubtractionOperation;
export type exprInner_4 = logicalConjunction;
export type exprInner_5 = logicalDisjunction;
export type exprInner_6 = substitution;
export type exprInner_7 = substitutionOperation;
export type exprInner_8 = comparisonOperation;
export type exprInner_9 = arrayCall;
export type exprInner_10 = functionCall;
export type exprInner_11 = parenthesesOperation;
export type exprInner_12 = bracketsOperation;
export type exprInner_13 = exclamationOperation;
export type exprInner_14 = incrementOrDecrementOperation;
export type exprInner_15 = feedbackOperation;
export type exprInner_16 = literal;
export type exprInner_17 = variable;
export type exprInner_18 = signed;
export type exprInner_19 = maybePreprocess;
export interface parenthesesOperation {
    kind: ASTKinds.parenthesesOperation;
    spacesLhs: parenthesesOperation_$0[];
    operand: Nullable<expr>;
    spacesRhs: parenthesesOperation_$1[];
}
export type parenthesesOperation_$0 = parenthesesOperation_$0_1 | parenthesesOperation_$0_2 | parenthesesOperation_$0_3;
export type parenthesesOperation_$0_1 = space;
export type parenthesesOperation_$0_2 = commentLong;
export type parenthesesOperation_$0_3 = continueLine;
export type parenthesesOperation_$1 = parenthesesOperation_$1_1 | parenthesesOperation_$1_2 | parenthesesOperation_$1_3;
export type parenthesesOperation_$1_1 = space;
export type parenthesesOperation_$1_2 = commentLong;
export type parenthesesOperation_$1_3 = continueLine;
export interface bracketsOperation {
    kind: ASTKinds.bracketsOperation;
    spacesLhs: bracketsOperation_$0[];
    start: expr;
    end: Nullable<bracketsOperationOption>;
    delimiter: Nullable<bracketsOperationOption>;
    spacesRhs: bracketsOperation_$1[];
}
export type bracketsOperation_$0 = bracketsOperation_$0_1 | bracketsOperation_$0_2 | bracketsOperation_$0_3;
export type bracketsOperation_$0_1 = space;
export type bracketsOperation_$0_2 = commentLong;
export type bracketsOperation_$0_3 = continueLine;
export type bracketsOperation_$1 = bracketsOperation_$1_1 | bracketsOperation_$1_2 | bracketsOperation_$1_3;
export type bracketsOperation_$1_1 = space;
export type bracketsOperation_$1_2 = commentLong;
export type bracketsOperation_$1_3 = continueLine;
export interface bracketsOperationOption {
    kind: ASTKinds.bracketsOperationOption;
    spacesLhs: bracketsOperationOption_$0[];
    spacesRhs: bracketsOperationOption_$1[];
    value: Nullable<expr>;
}
export type bracketsOperationOption_$0 = bracketsOperationOption_$0_1 | bracketsOperationOption_$0_2 | bracketsOperationOption_$0_3;
export type bracketsOperationOption_$0_1 = space;
export type bracketsOperationOption_$0_2 = commentLong;
export type bracketsOperationOption_$0_3 = continueLine;
export type bracketsOperationOption_$1 = bracketsOperationOption_$1_1 | bracketsOperationOption_$1_2 | bracketsOperationOption_$1_3;
export type bracketsOperationOption_$1_1 = space;
export type bracketsOperationOption_$1_2 = commentLong;
export type bracketsOperationOption_$1_3 = continueLine;
export interface exclamationOperation {
    kind: ASTKinds.exclamationOperation;
    spaces: exclamationOperation_$0[];
    operand: expr;
}
export type exclamationOperation_$0 = exclamationOperation_$0_1 | exclamationOperation_$0_2 | exclamationOperation_$0_3;
export type exclamationOperation_$0_1 = space;
export type exclamationOperation_$0_2 = commentLong;
export type exclamationOperation_$0_3 = continueLine;
export interface incrementOrDecrementOperation {
    kind: ASTKinds.incrementOrDecrementOperation;
    operand: variable;
    spaces: incrementOrDecrementOperation_$0[];
    operator: incrementOrDecrementOperator;
}
export type incrementOrDecrementOperation_$0 = incrementOrDecrementOperation_$0_1 | incrementOrDecrementOperation_$0_2 | incrementOrDecrementOperation_$0_3;
export type incrementOrDecrementOperation_$0_1 = space;
export type incrementOrDecrementOperation_$0_2 = commentLong;
export type incrementOrDecrementOperation_$0_3 = continueLine;
export type incrementOrDecrementOperator = incrementOrDecrementOperator_1 | incrementOrDecrementOperator_2;
export type incrementOrDecrementOperator_1 = incrementOrDecrementOperator_$0;
export type incrementOrDecrementOperator_2 = incrementOrDecrementOperator_$1;
export declare class incrementOrDecrementOperator_$0 {
    kind: ASTKinds.incrementOrDecrementOperator_$0;
    c1: incrementOrDecrementOperator_$0_$0[];
    c2: incrementOrDecrementOperator_$0_$1[];
    body: string;
    comments: commentLong[][];
    constructor(c1: incrementOrDecrementOperator_$0_$0[], c2: incrementOrDecrementOperator_$0_$1[]);
}
export type incrementOrDecrementOperator_$0_$0 = incrementOrDecrementOperator_$0_$0_1 | incrementOrDecrementOperator_$0_$0_2;
export type incrementOrDecrementOperator_$0_$0_1 = commentLong;
export type incrementOrDecrementOperator_$0_$0_2 = continueLine;
export type incrementOrDecrementOperator_$0_$1 = incrementOrDecrementOperator_$0_$1_1 | incrementOrDecrementOperator_$0_$1_2;
export type incrementOrDecrementOperator_$0_$1_1 = commentLong;
export type incrementOrDecrementOperator_$0_$1_2 = continueLine;
export declare class incrementOrDecrementOperator_$1 {
    kind: ASTKinds.incrementOrDecrementOperator_$1;
    c1: incrementOrDecrementOperator_$1_$0[];
    c2: incrementOrDecrementOperator_$1_$1[];
    body: string;
    comments: commentLong[][];
    constructor(c1: incrementOrDecrementOperator_$1_$0[], c2: incrementOrDecrementOperator_$1_$1[]);
}
export type incrementOrDecrementOperator_$1_$0 = incrementOrDecrementOperator_$1_$0_1 | incrementOrDecrementOperator_$1_$0_2;
export type incrementOrDecrementOperator_$1_$0_1 = commentLong;
export type incrementOrDecrementOperator_$1_$0_2 = continueLine;
export type incrementOrDecrementOperator_$1_$1 = incrementOrDecrementOperator_$1_$1_1 | incrementOrDecrementOperator_$1_$1_2;
export type incrementOrDecrementOperator_$1_$1_1 = commentLong;
export type incrementOrDecrementOperator_$1_$1_2 = continueLine;
export interface multiplicationOrDivisionOperation {
    kind: ASTKinds.multiplicationOrDivisionOperation;
    operand1: expr;
    spacesLhs: multiplicationOrDivisionOperation_$0[];
    operator: multiplicationOrDivisionOperator;
    spacesRhs: multiplicationOrDivisionOperation_$1[];
    operand2: expr;
}
export type multiplicationOrDivisionOperation_$0 = multiplicationOrDivisionOperation_$0_1 | multiplicationOrDivisionOperation_$0_2 | multiplicationOrDivisionOperation_$0_3;
export type multiplicationOrDivisionOperation_$0_1 = space;
export type multiplicationOrDivisionOperation_$0_2 = commentLong;
export type multiplicationOrDivisionOperation_$0_3 = continueLine;
export type multiplicationOrDivisionOperation_$1 = multiplicationOrDivisionOperation_$1_1 | multiplicationOrDivisionOperation_$1_2 | multiplicationOrDivisionOperation_$1_3;
export type multiplicationOrDivisionOperation_$1_1 = space;
export type multiplicationOrDivisionOperation_$1_2 = commentLong;
export type multiplicationOrDivisionOperation_$1_3 = continueLine;
export type multiplicationOrDivisionOperator = multiplicationOrDivisionOperator_1 | multiplicationOrDivisionOperator_2 | multiplicationOrDivisionOperator_3;
export type multiplicationOrDivisionOperator_1 = multiplicationOrDivisionOperator_$0;
export type multiplicationOrDivisionOperator_2 = multiplicationOrDivisionOperator_$1;
export type multiplicationOrDivisionOperator_3 = multiplicationOrDivisionOperator_$2;
export declare class multiplicationOrDivisionOperator_$0 {
    kind: ASTKinds.multiplicationOrDivisionOperator_$0;
    c1: multiplicationOrDivisionOperator_$0_$0[];
    body: string;
    comments: commentLong[][];
    constructor(c1: multiplicationOrDivisionOperator_$0_$0[]);
}
export type multiplicationOrDivisionOperator_$0_$0 = multiplicationOrDivisionOperator_$0_$0_1 | multiplicationOrDivisionOperator_$0_$0_2;
export type multiplicationOrDivisionOperator_$0_$0_1 = commentLong;
export type multiplicationOrDivisionOperator_$0_$0_2 = continueLine;
export declare class multiplicationOrDivisionOperator_$1 {
    kind: ASTKinds.multiplicationOrDivisionOperator_$1;
    c1: multiplicationOrDivisionOperator_$1_$0[];
    body: string;
    comments: commentLong[][];
    constructor(c1: multiplicationOrDivisionOperator_$1_$0[]);
}
export type multiplicationOrDivisionOperator_$1_$0 = multiplicationOrDivisionOperator_$1_$0_1 | multiplicationOrDivisionOperator_$1_$0_2;
export type multiplicationOrDivisionOperator_$1_$0_1 = commentLong;
export type multiplicationOrDivisionOperator_$1_$0_2 = continueLine;
export declare class multiplicationOrDivisionOperator_$2 {
    kind: ASTKinds.multiplicationOrDivisionOperator_$2;
    c1: multiplicationOrDivisionOperator_$2_$0[];
    body: string;
    comments: commentLong[][];
    constructor(c1: multiplicationOrDivisionOperator_$2_$0[]);
}
export type multiplicationOrDivisionOperator_$2_$0 = multiplicationOrDivisionOperator_$2_$0_1 | multiplicationOrDivisionOperator_$2_$0_2;
export type multiplicationOrDivisionOperator_$2_$0_1 = commentLong;
export type multiplicationOrDivisionOperator_$2_$0_2 = continueLine;
export interface additionOrSubtractionOperation {
    kind: ASTKinds.additionOrSubtractionOperation;
    operand1: expr;
    spacesLhs: additionOrSubtractionOperation_$0[];
    operator: additionOrSubtractionOperator;
    spacesRhs: additionOrSubtractionOperation_$1[];
    operand2: expr;
}
export type additionOrSubtractionOperation_$0 = additionOrSubtractionOperation_$0_1 | additionOrSubtractionOperation_$0_2 | additionOrSubtractionOperation_$0_3;
export type additionOrSubtractionOperation_$0_1 = space;
export type additionOrSubtractionOperation_$0_2 = commentLong;
export type additionOrSubtractionOperation_$0_3 = continueLine;
export type additionOrSubtractionOperation_$1 = additionOrSubtractionOperation_$1_1 | additionOrSubtractionOperation_$1_2 | additionOrSubtractionOperation_$1_3;
export type additionOrSubtractionOperation_$1_1 = space;
export type additionOrSubtractionOperation_$1_2 = commentLong;
export type additionOrSubtractionOperation_$1_3 = continueLine;
export type additionOrSubtractionOperator = additionOrSubtractionOperator_1 | additionOrSubtractionOperator_2;
export type additionOrSubtractionOperator_1 = additionOrSubtractionOperator_$0;
export type additionOrSubtractionOperator_2 = additionOrSubtractionOperator_$1;
export declare class additionOrSubtractionOperator_$0 {
    kind: ASTKinds.additionOrSubtractionOperator_$0;
    c1: additionOrSubtractionOperator_$0_$0[];
    body: string;
    comments: commentLong[][];
    constructor(c1: additionOrSubtractionOperator_$0_$0[]);
}
export type additionOrSubtractionOperator_$0_$0 = additionOrSubtractionOperator_$0_$0_1 | additionOrSubtractionOperator_$0_$0_2;
export type additionOrSubtractionOperator_$0_$0_1 = commentLong;
export type additionOrSubtractionOperator_$0_$0_2 = continueLine;
export declare class additionOrSubtractionOperator_$1 {
    kind: ASTKinds.additionOrSubtractionOperator_$1;
    c1: additionOrSubtractionOperator_$1_$0[];
    body: string;
    comments: commentLong[][];
    constructor(c1: additionOrSubtractionOperator_$1_$0[]);
}
export type additionOrSubtractionOperator_$1_$0 = additionOrSubtractionOperator_$1_$0_1 | additionOrSubtractionOperator_$1_$0_2;
export type additionOrSubtractionOperator_$1_$0_1 = commentLong;
export type additionOrSubtractionOperator_$1_$0_2 = continueLine;
export interface feedbackOperation {
    kind: ASTKinds.feedbackOperation;
    spaces: feedbackOperation_$0[];
    operand: variable;
}
export type feedbackOperation_$0 = feedbackOperation_$0_1 | feedbackOperation_$0_2 | feedbackOperation_$0_3;
export type feedbackOperation_$0_1 = space;
export type feedbackOperation_$0_2 = commentLong;
export type feedbackOperation_$0_3 = continueLine;
export interface comparisonOperation {
    kind: ASTKinds.comparisonOperation;
    operand1: expr;
    spacesLhs: comparisonOperation_$0[];
    operator: comparisonOperator;
    spacesRhs: comparisonOperation_$1[];
    operand2: expr;
}
export type comparisonOperation_$0 = comparisonOperation_$0_1 | comparisonOperation_$0_2 | comparisonOperation_$0_3;
export type comparisonOperation_$0_1 = space;
export type comparisonOperation_$0_2 = commentLong;
export type comparisonOperation_$0_3 = continueLine;
export type comparisonOperation_$1 = comparisonOperation_$1_1 | comparisonOperation_$1_2 | comparisonOperation_$1_3;
export type comparisonOperation_$1_1 = space;
export type comparisonOperation_$1_2 = commentLong;
export type comparisonOperation_$1_3 = continueLine;
export type comparisonOperator = comparisonOperator_1 | comparisonOperator_2 | comparisonOperator_3 | comparisonOperator_4 | comparisonOperator_5 | comparisonOperator_6 | comparisonOperator_7 | comparisonOperator_8;
export type comparisonOperator_1 = comparisonOperator_$0;
export type comparisonOperator_2 = comparisonOperator_$1;
export type comparisonOperator_3 = comparisonOperator_$2;
export type comparisonOperator_4 = comparisonOperator_$3;
export type comparisonOperator_5 = comparisonOperator_$4;
export type comparisonOperator_6 = comparisonOperator_$5;
export type comparisonOperator_7 = comparisonOperator_$6;
export type comparisonOperator_8 = comparisonOperator_$7;
export declare class comparisonOperator_$0 {
    kind: ASTKinds.comparisonOperator_$0;
    c1: comparisonOperator_$0_$0[];
    c2: comparisonOperator_$0_$1[];
    body: string;
    comments: commentLong[][];
    constructor(c1: comparisonOperator_$0_$0[], c2: comparisonOperator_$0_$1[]);
}
export type comparisonOperator_$0_$0 = comparisonOperator_$0_$0_1 | comparisonOperator_$0_$0_2;
export type comparisonOperator_$0_$0_1 = commentLong;
export type comparisonOperator_$0_$0_2 = continueLine;
export type comparisonOperator_$0_$1 = comparisonOperator_$0_$1_1 | comparisonOperator_$0_$1_2;
export type comparisonOperator_$0_$1_1 = commentLong;
export type comparisonOperator_$0_$1_2 = continueLine;
export declare class comparisonOperator_$1 {
    kind: ASTKinds.comparisonOperator_$1;
    c1: comparisonOperator_$1_$0[];
    c2: comparisonOperator_$1_$1[];
    body: string;
    comments: commentLong[][];
    constructor(c1: comparisonOperator_$1_$0[], c2: comparisonOperator_$1_$1[]);
}
export type comparisonOperator_$1_$0 = comparisonOperator_$1_$0_1 | comparisonOperator_$1_$0_2;
export type comparisonOperator_$1_$0_1 = commentLong;
export type comparisonOperator_$1_$0_2 = continueLine;
export type comparisonOperator_$1_$1 = comparisonOperator_$1_$1_1 | comparisonOperator_$1_$1_2;
export type comparisonOperator_$1_$1_1 = commentLong;
export type comparisonOperator_$1_$1_2 = continueLine;
export declare class comparisonOperator_$2 {
    kind: ASTKinds.comparisonOperator_$2;
    c1: comparisonOperator_$2_$0[];
    c2: comparisonOperator_$2_$1[];
    body: string;
    comments: commentLong[][];
    constructor(c1: comparisonOperator_$2_$0[], c2: comparisonOperator_$2_$1[]);
}
export type comparisonOperator_$2_$0 = comparisonOperator_$2_$0_1 | comparisonOperator_$2_$0_2;
export type comparisonOperator_$2_$0_1 = commentLong;
export type comparisonOperator_$2_$0_2 = continueLine;
export type comparisonOperator_$2_$1 = comparisonOperator_$2_$1_1 | comparisonOperator_$2_$1_2;
export type comparisonOperator_$2_$1_1 = commentLong;
export type comparisonOperator_$2_$1_2 = continueLine;
export declare class comparisonOperator_$3 {
    kind: ASTKinds.comparisonOperator_$3;
    c1: comparisonOperator_$3_$0[];
    c2: comparisonOperator_$3_$1[];
    body: string;
    comments: commentLong[][];
    constructor(c1: comparisonOperator_$3_$0[], c2: comparisonOperator_$3_$1[]);
}
export type comparisonOperator_$3_$0 = comparisonOperator_$3_$0_1 | comparisonOperator_$3_$0_2;
export type comparisonOperator_$3_$0_1 = commentLong;
export type comparisonOperator_$3_$0_2 = continueLine;
export type comparisonOperator_$3_$1 = comparisonOperator_$3_$1_1 | comparisonOperator_$3_$1_2;
export type comparisonOperator_$3_$1_1 = commentLong;
export type comparisonOperator_$3_$1_2 = continueLine;
export declare class comparisonOperator_$4 {
    kind: ASTKinds.comparisonOperator_$4;
    c1: comparisonOperator_$4_$0[];
    body: string;
    comments: commentLong[][];
    constructor(c1: comparisonOperator_$4_$0[]);
}
export type comparisonOperator_$4_$0 = comparisonOperator_$4_$0_1 | comparisonOperator_$4_$0_2;
export type comparisonOperator_$4_$0_1 = commentLong;
export type comparisonOperator_$4_$0_2 = continueLine;
export declare class comparisonOperator_$5 {
    kind: ASTKinds.comparisonOperator_$5;
    c1: comparisonOperator_$5_$0[];
    body: string;
    comments: commentLong[][];
    constructor(c1: comparisonOperator_$5_$0[]);
}
export type comparisonOperator_$5_$0 = comparisonOperator_$5_$0_1 | comparisonOperator_$5_$0_2;
export type comparisonOperator_$5_$0_1 = commentLong;
export type comparisonOperator_$5_$0_2 = continueLine;
export declare class comparisonOperator_$6 {
    kind: ASTKinds.comparisonOperator_$6;
    c1: comparisonOperator_$6_$0[];
    c2: comparisonOperator_$6_$1[];
    c3: comparisonOperator_$6_$2[];
    c4: comparisonOperator_$6_$3[];
    body: string;
    comments: commentLong[][];
    constructor(c1: comparisonOperator_$6_$0[], c2: comparisonOperator_$6_$1[], c3: comparisonOperator_$6_$2[], c4: comparisonOperator_$6_$3[]);
}
export type comparisonOperator_$6_$0 = comparisonOperator_$6_$0_1 | comparisonOperator_$6_$0_2;
export type comparisonOperator_$6_$0_1 = commentLong;
export type comparisonOperator_$6_$0_2 = continueLine;
export type comparisonOperator_$6_$1 = comparisonOperator_$6_$1_1 | comparisonOperator_$6_$1_2;
export type comparisonOperator_$6_$1_1 = commentLong;
export type comparisonOperator_$6_$1_2 = continueLine;
export type comparisonOperator_$6_$2 = comparisonOperator_$6_$2_1 | comparisonOperator_$6_$2_2;
export type comparisonOperator_$6_$2_1 = commentLong;
export type comparisonOperator_$6_$2_2 = continueLine;
export type comparisonOperator_$6_$3 = comparisonOperator_$6_$3_1 | comparisonOperator_$6_$3_2;
export type comparisonOperator_$6_$3_1 = commentLong;
export type comparisonOperator_$6_$3_2 = continueLine;
export declare class comparisonOperator_$7 {
    kind: ASTKinds.comparisonOperator_$7;
    c1: comparisonOperator_$7_$0[];
    c2: comparisonOperator_$7_$1[];
    c3: comparisonOperator_$7_$2[];
    c4: comparisonOperator_$7_$3[];
    c5: comparisonOperator_$7_$4[];
    body: string;
    comments: commentLong[][];
    constructor(c1: comparisonOperator_$7_$0[], c2: comparisonOperator_$7_$1[], c3: comparisonOperator_$7_$2[], c4: comparisonOperator_$7_$3[], c5: comparisonOperator_$7_$4[]);
}
export type comparisonOperator_$7_$0 = comparisonOperator_$7_$0_1 | comparisonOperator_$7_$0_2;
export type comparisonOperator_$7_$0_1 = commentLong;
export type comparisonOperator_$7_$0_2 = continueLine;
export type comparisonOperator_$7_$1 = comparisonOperator_$7_$1_1 | comparisonOperator_$7_$1_2;
export type comparisonOperator_$7_$1_1 = commentLong;
export type comparisonOperator_$7_$1_2 = continueLine;
export type comparisonOperator_$7_$2 = comparisonOperator_$7_$2_1 | comparisonOperator_$7_$2_2;
export type comparisonOperator_$7_$2_1 = commentLong;
export type comparisonOperator_$7_$2_2 = continueLine;
export type comparisonOperator_$7_$3 = comparisonOperator_$7_$3_1 | comparisonOperator_$7_$3_2;
export type comparisonOperator_$7_$3_1 = commentLong;
export type comparisonOperator_$7_$3_2 = continueLine;
export type comparisonOperator_$7_$4 = comparisonOperator_$7_$4_1 | comparisonOperator_$7_$4_2;
export type comparisonOperator_$7_$4_1 = commentLong;
export type comparisonOperator_$7_$4_2 = continueLine;
export interface logicalConjunction {
    kind: ASTKinds.logicalConjunction;
    operand1: expr;
    spacesLhs: logicalConjunction_$0[];
    operator: logicalConjunctionOperator;
    spacesRhs: logicalConjunction_$1[];
    operand2: expr;
}
export type logicalConjunction_$0 = logicalConjunction_$0_1 | logicalConjunction_$0_2 | logicalConjunction_$0_3;
export type logicalConjunction_$0_1 = space;
export type logicalConjunction_$0_2 = commentLong;
export type logicalConjunction_$0_3 = continueLine;
export type logicalConjunction_$1 = logicalConjunction_$1_1 | logicalConjunction_$1_2 | logicalConjunction_$1_3;
export type logicalConjunction_$1_1 = space;
export type logicalConjunction_$1_2 = commentLong;
export type logicalConjunction_$1_3 = continueLine;
export type logicalConjunctionOperator = logicalConjunctionOperator_$0;
export declare class logicalConjunctionOperator_$0 {
    kind: ASTKinds.logicalConjunctionOperator_$0;
    c1: logicalConjunctionOperator_$0_$0[];
    c2: logicalConjunctionOperator_$0_$1[];
    body: string;
    comments: commentLong[][];
    constructor(c1: logicalConjunctionOperator_$0_$0[], c2: logicalConjunctionOperator_$0_$1[]);
}
export type logicalConjunctionOperator_$0_$0 = logicalConjunctionOperator_$0_$0_1 | logicalConjunctionOperator_$0_$0_2;
export type logicalConjunctionOperator_$0_$0_1 = commentLong;
export type logicalConjunctionOperator_$0_$0_2 = continueLine;
export type logicalConjunctionOperator_$0_$1 = logicalConjunctionOperator_$0_$1_1 | logicalConjunctionOperator_$0_$1_2;
export type logicalConjunctionOperator_$0_$1_1 = commentLong;
export type logicalConjunctionOperator_$0_$1_2 = continueLine;
export interface logicalDisjunction {
    kind: ASTKinds.logicalDisjunction;
    operand1: expr;
    spacesLhs: logicalDisjunction_$0[];
    operator: logicalDisjunctionOperator;
    spacesRhs: logicalDisjunction_$1[];
    operand2: expr;
}
export type logicalDisjunction_$0 = logicalDisjunction_$0_1 | logicalDisjunction_$0_2 | logicalDisjunction_$0_3;
export type logicalDisjunction_$0_1 = space;
export type logicalDisjunction_$0_2 = commentLong;
export type logicalDisjunction_$0_3 = continueLine;
export type logicalDisjunction_$1 = logicalDisjunction_$1_1 | logicalDisjunction_$1_2 | logicalDisjunction_$1_3;
export type logicalDisjunction_$1_1 = space;
export type logicalDisjunction_$1_2 = commentLong;
export type logicalDisjunction_$1_3 = continueLine;
export type logicalDisjunctionOperator = logicalDisjunctionOperator_$0;
export declare class logicalDisjunctionOperator_$0 {
    kind: ASTKinds.logicalDisjunctionOperator_$0;
    c1: logicalDisjunctionOperator_$0_$0[];
    c2: logicalDisjunctionOperator_$0_$1[];
    body: string;
    comments: commentLong[][];
    constructor(c1: logicalDisjunctionOperator_$0_$0[], c2: logicalDisjunctionOperator_$0_$1[]);
}
export type logicalDisjunctionOperator_$0_$0 = logicalDisjunctionOperator_$0_$0_1 | logicalDisjunctionOperator_$0_$0_2;
export type logicalDisjunctionOperator_$0_$0_1 = commentLong;
export type logicalDisjunctionOperator_$0_$0_2 = continueLine;
export type logicalDisjunctionOperator_$0_$1 = logicalDisjunctionOperator_$0_$1_1 | logicalDisjunctionOperator_$0_$1_2;
export type logicalDisjunctionOperator_$0_$1_1 = commentLong;
export type logicalDisjunctionOperator_$0_$1_2 = continueLine;
export interface substitution {
    kind: ASTKinds.substitution;
    operand1: substitution_$0;
    spacesLhs: substitution_$1[];
    operator: substitutionOperator;
    spacesRhs: substitution_$2[];
    operand2: expr;
}
export type substitution_$0 = substitution_$0_1 | substitution_$0_2;
export type substitution_$0_1 = arrayCall;
export type substitution_$0_2 = variable;
export type substitution_$1 = substitution_$1_1 | substitution_$1_2 | substitution_$1_3;
export type substitution_$1_1 = space;
export type substitution_$1_2 = commentLong;
export type substitution_$1_3 = continueLine;
export type substitution_$2 = substitution_$2_1 | substitution_$2_2 | substitution_$2_3;
export type substitution_$2_1 = space;
export type substitution_$2_2 = commentLong;
export type substitution_$2_3 = continueLine;
export type substitutionOperator = substitutionOperator_1 | substitutionOperator_2;
export type substitutionOperator_1 = substitutionOperator_$0;
export type substitutionOperator_2 = substitutionOperator_$1;
export declare class substitutionOperator_$0 {
    kind: ASTKinds.substitutionOperator_$0;
    c1: substitutionOperator_$0_$0[];
    body: string;
    comments: commentLong[][];
    constructor(c1: substitutionOperator_$0_$0[]);
}
export type substitutionOperator_$0_$0 = substitutionOperator_$0_$0_1 | substitutionOperator_$0_$0_2;
export type substitutionOperator_$0_$0_1 = commentLong;
export type substitutionOperator_$0_$0_2 = continueLine;
export declare class substitutionOperator_$1 {
    kind: ASTKinds.substitutionOperator_$1;
    c1: substitutionOperator_$1_$0[];
    c2: substitutionOperator_$1_$1[];
    body: string;
    comments: commentLong[][];
    constructor(c1: substitutionOperator_$1_$0[], c2: substitutionOperator_$1_$1[]);
}
export type substitutionOperator_$1_$0 = substitutionOperator_$1_$0_1 | substitutionOperator_$1_$0_2;
export type substitutionOperator_$1_$0_1 = commentLong;
export type substitutionOperator_$1_$0_2 = continueLine;
export type substitutionOperator_$1_$1 = substitutionOperator_$1_$1_1 | substitutionOperator_$1_$1_2;
export type substitutionOperator_$1_$1_1 = commentLong;
export type substitutionOperator_$1_$1_2 = continueLine;
export interface substitutionOperation {
    kind: ASTKinds.substitutionOperation;
    operand1: substitutionOperation_$0;
    spacesLhs: substitutionOperation_$1[];
    operator: substitutionOperationOperator;
    spacesRhs: substitutionOperation_$2[];
    operand2: expr;
}
export type substitutionOperation_$0 = substitutionOperation_$0_1 | substitutionOperation_$0_2;
export type substitutionOperation_$0_1 = arrayCall;
export type substitutionOperation_$0_2 = variable;
export type substitutionOperation_$1 = substitutionOperation_$1_1 | substitutionOperation_$1_2 | substitutionOperation_$1_3;
export type substitutionOperation_$1_1 = space;
export type substitutionOperation_$1_2 = commentLong;
export type substitutionOperation_$1_3 = continueLine;
export type substitutionOperation_$2 = substitutionOperation_$2_1 | substitutionOperation_$2_2 | substitutionOperation_$2_3;
export type substitutionOperation_$2_1 = space;
export type substitutionOperation_$2_2 = commentLong;
export type substitutionOperation_$2_3 = continueLine;
export type substitutionOperationOperator = substitutionOperationOperator_1 | substitutionOperationOperator_2 | substitutionOperationOperator_3 | substitutionOperationOperator_4 | substitutionOperationOperator_5 | substitutionOperationOperator_6 | substitutionOperationOperator_7 | substitutionOperationOperator_8 | substitutionOperationOperator_9 | substitutionOperationOperator_10 | substitutionOperationOperator_11;
export type substitutionOperationOperator_1 = substitutionOperationOperator_$0;
export type substitutionOperationOperator_2 = substitutionOperationOperator_$1;
export type substitutionOperationOperator_3 = substitutionOperationOperator_$2;
export type substitutionOperationOperator_4 = substitutionOperationOperator_$3;
export type substitutionOperationOperator_5 = substitutionOperationOperator_$4;
export type substitutionOperationOperator_6 = substitutionOperationOperator_$5;
export type substitutionOperationOperator_7 = substitutionOperationOperator_$6;
export type substitutionOperationOperator_8 = substitutionOperationOperator_$7;
export type substitutionOperationOperator_9 = substitutionOperationOperator_$8;
export type substitutionOperationOperator_10 = substitutionOperationOperator_$9;
export type substitutionOperationOperator_11 = substitutionOperationOperator_$10;
export declare class substitutionOperationOperator_$0 {
    kind: ASTKinds.substitutionOperationOperator_$0;
    c1: substitutionOperationOperator_$0_$0[];
    c2: substitutionOperationOperator_$0_$1[];
    body: string;
    comments: commentLong[][];
    constructor(c1: substitutionOperationOperator_$0_$0[], c2: substitutionOperationOperator_$0_$1[]);
}
export type substitutionOperationOperator_$0_$0 = substitutionOperationOperator_$0_$0_1 | substitutionOperationOperator_$0_$0_2;
export type substitutionOperationOperator_$0_$0_1 = commentLong;
export type substitutionOperationOperator_$0_$0_2 = continueLine;
export type substitutionOperationOperator_$0_$1 = substitutionOperationOperator_$0_$1_1 | substitutionOperationOperator_$0_$1_2;
export type substitutionOperationOperator_$0_$1_1 = commentLong;
export type substitutionOperationOperator_$0_$1_2 = continueLine;
export declare class substitutionOperationOperator_$1 {
    kind: ASTKinds.substitutionOperationOperator_$1;
    c1: substitutionOperationOperator_$1_$0[];
    c2: substitutionOperationOperator_$1_$1[];
    body: string;
    comments: commentLong[][];
    constructor(c1: substitutionOperationOperator_$1_$0[], c2: substitutionOperationOperator_$1_$1[]);
}
export type substitutionOperationOperator_$1_$0 = substitutionOperationOperator_$1_$0_1 | substitutionOperationOperator_$1_$0_2;
export type substitutionOperationOperator_$1_$0_1 = commentLong;
export type substitutionOperationOperator_$1_$0_2 = continueLine;
export type substitutionOperationOperator_$1_$1 = substitutionOperationOperator_$1_$1_1 | substitutionOperationOperator_$1_$1_2;
export type substitutionOperationOperator_$1_$1_1 = commentLong;
export type substitutionOperationOperator_$1_$1_2 = continueLine;
export declare class substitutionOperationOperator_$2 {
    kind: ASTKinds.substitutionOperationOperator_$2;
    c1: substitutionOperationOperator_$2_$0[];
    c2: substitutionOperationOperator_$2_$1[];
    body: string;
    comments: commentLong[][];
    constructor(c1: substitutionOperationOperator_$2_$0[], c2: substitutionOperationOperator_$2_$1[]);
}
export type substitutionOperationOperator_$2_$0 = substitutionOperationOperator_$2_$0_1 | substitutionOperationOperator_$2_$0_2;
export type substitutionOperationOperator_$2_$0_1 = commentLong;
export type substitutionOperationOperator_$2_$0_2 = continueLine;
export type substitutionOperationOperator_$2_$1 = substitutionOperationOperator_$2_$1_1 | substitutionOperationOperator_$2_$1_2;
export type substitutionOperationOperator_$2_$1_1 = commentLong;
export type substitutionOperationOperator_$2_$1_2 = continueLine;
export declare class substitutionOperationOperator_$3 {
    kind: ASTKinds.substitutionOperationOperator_$3;
    c1: substitutionOperationOperator_$3_$0[];
    c2: substitutionOperationOperator_$3_$1[];
    body: string;
    comments: commentLong[][];
    constructor(c1: substitutionOperationOperator_$3_$0[], c2: substitutionOperationOperator_$3_$1[]);
}
export type substitutionOperationOperator_$3_$0 = substitutionOperationOperator_$3_$0_1 | substitutionOperationOperator_$3_$0_2;
export type substitutionOperationOperator_$3_$0_1 = commentLong;
export type substitutionOperationOperator_$3_$0_2 = continueLine;
export type substitutionOperationOperator_$3_$1 = substitutionOperationOperator_$3_$1_1 | substitutionOperationOperator_$3_$1_2;
export type substitutionOperationOperator_$3_$1_1 = commentLong;
export type substitutionOperationOperator_$3_$1_2 = continueLine;
export declare class substitutionOperationOperator_$4 {
    kind: ASTKinds.substitutionOperationOperator_$4;
    c1: substitutionOperationOperator_$4_$0[];
    c2: substitutionOperationOperator_$4_$1[];
    body: string;
    comments: commentLong[][];
    constructor(c1: substitutionOperationOperator_$4_$0[], c2: substitutionOperationOperator_$4_$1[]);
}
export type substitutionOperationOperator_$4_$0 = substitutionOperationOperator_$4_$0_1 | substitutionOperationOperator_$4_$0_2;
export type substitutionOperationOperator_$4_$0_1 = commentLong;
export type substitutionOperationOperator_$4_$0_2 = continueLine;
export type substitutionOperationOperator_$4_$1 = substitutionOperationOperator_$4_$1_1 | substitutionOperationOperator_$4_$1_2;
export type substitutionOperationOperator_$4_$1_1 = commentLong;
export type substitutionOperationOperator_$4_$1_2 = continueLine;
export declare class substitutionOperationOperator_$5 {
    kind: ASTKinds.substitutionOperationOperator_$5;
    c1: substitutionOperationOperator_$5_$0[];
    c2: substitutionOperationOperator_$5_$1[];
    c3: substitutionOperationOperator_$5_$2[];
    body: string;
    comments: commentLong[][];
    constructor(c1: substitutionOperationOperator_$5_$0[], c2: substitutionOperationOperator_$5_$1[], c3: substitutionOperationOperator_$5_$2[]);
}
export type substitutionOperationOperator_$5_$0 = substitutionOperationOperator_$5_$0_1 | substitutionOperationOperator_$5_$0_2;
export type substitutionOperationOperator_$5_$0_1 = commentLong;
export type substitutionOperationOperator_$5_$0_2 = continueLine;
export type substitutionOperationOperator_$5_$1 = substitutionOperationOperator_$5_$1_1 | substitutionOperationOperator_$5_$1_2;
export type substitutionOperationOperator_$5_$1_1 = commentLong;
export type substitutionOperationOperator_$5_$1_2 = continueLine;
export type substitutionOperationOperator_$5_$2 = substitutionOperationOperator_$5_$2_1 | substitutionOperationOperator_$5_$2_2;
export type substitutionOperationOperator_$5_$2_1 = commentLong;
export type substitutionOperationOperator_$5_$2_2 = continueLine;
export declare class substitutionOperationOperator_$6 {
    kind: ASTKinds.substitutionOperationOperator_$6;
    c1: substitutionOperationOperator_$6_$0[];
    c2: substitutionOperationOperator_$6_$1[];
    c3: substitutionOperationOperator_$6_$2[];
    body: string;
    comments: commentLong[][];
    constructor(c1: substitutionOperationOperator_$6_$0[], c2: substitutionOperationOperator_$6_$1[], c3: substitutionOperationOperator_$6_$2[]);
}
export type substitutionOperationOperator_$6_$0 = substitutionOperationOperator_$6_$0_1 | substitutionOperationOperator_$6_$0_2;
export type substitutionOperationOperator_$6_$0_1 = commentLong;
export type substitutionOperationOperator_$6_$0_2 = continueLine;
export type substitutionOperationOperator_$6_$1 = substitutionOperationOperator_$6_$1_1 | substitutionOperationOperator_$6_$1_2;
export type substitutionOperationOperator_$6_$1_1 = commentLong;
export type substitutionOperationOperator_$6_$1_2 = continueLine;
export type substitutionOperationOperator_$6_$2 = substitutionOperationOperator_$6_$2_1 | substitutionOperationOperator_$6_$2_2;
export type substitutionOperationOperator_$6_$2_1 = commentLong;
export type substitutionOperationOperator_$6_$2_2 = continueLine;
export declare class substitutionOperationOperator_$7 {
    kind: ASTKinds.substitutionOperationOperator_$7;
    c1: substitutionOperationOperator_$7_$0[];
    c2: substitutionOperationOperator_$7_$1[];
    c3: substitutionOperationOperator_$7_$2[];
    body: string;
    comments: commentLong[][];
    constructor(c1: substitutionOperationOperator_$7_$0[], c2: substitutionOperationOperator_$7_$1[], c3: substitutionOperationOperator_$7_$2[]);
}
export type substitutionOperationOperator_$7_$0 = substitutionOperationOperator_$7_$0_1 | substitutionOperationOperator_$7_$0_2;
export type substitutionOperationOperator_$7_$0_1 = commentLong;
export type substitutionOperationOperator_$7_$0_2 = continueLine;
export type substitutionOperationOperator_$7_$1 = substitutionOperationOperator_$7_$1_1 | substitutionOperationOperator_$7_$1_2;
export type substitutionOperationOperator_$7_$1_1 = commentLong;
export type substitutionOperationOperator_$7_$1_2 = continueLine;
export type substitutionOperationOperator_$7_$2 = substitutionOperationOperator_$7_$2_1 | substitutionOperationOperator_$7_$2_2;
export type substitutionOperationOperator_$7_$2_1 = commentLong;
export type substitutionOperationOperator_$7_$2_2 = continueLine;
export declare class substitutionOperationOperator_$8 {
    kind: ASTKinds.substitutionOperationOperator_$8;
    c1: substitutionOperationOperator_$8_$0[];
    c2: substitutionOperationOperator_$8_$1[];
    c3: substitutionOperationOperator_$8_$2[];
    body: string;
    comments: commentLong[][];
    constructor(c1: substitutionOperationOperator_$8_$0[], c2: substitutionOperationOperator_$8_$1[], c3: substitutionOperationOperator_$8_$2[]);
}
export type substitutionOperationOperator_$8_$0 = substitutionOperationOperator_$8_$0_1 | substitutionOperationOperator_$8_$0_2;
export type substitutionOperationOperator_$8_$0_1 = commentLong;
export type substitutionOperationOperator_$8_$0_2 = continueLine;
export type substitutionOperationOperator_$8_$1 = substitutionOperationOperator_$8_$1_1 | substitutionOperationOperator_$8_$1_2;
export type substitutionOperationOperator_$8_$1_1 = commentLong;
export type substitutionOperationOperator_$8_$1_2 = continueLine;
export type substitutionOperationOperator_$8_$2 = substitutionOperationOperator_$8_$2_1 | substitutionOperationOperator_$8_$2_2;
export type substitutionOperationOperator_$8_$2_1 = commentLong;
export type substitutionOperationOperator_$8_$2_2 = continueLine;
export declare class substitutionOperationOperator_$9 {
    kind: ASTKinds.substitutionOperationOperator_$9;
    c1: substitutionOperationOperator_$9_$0[];
    c2: substitutionOperationOperator_$9_$1[];
    c3: substitutionOperationOperator_$9_$2[];
    body: string;
    comments: commentLong[][];
    constructor(c1: substitutionOperationOperator_$9_$0[], c2: substitutionOperationOperator_$9_$1[], c3: substitutionOperationOperator_$9_$2[]);
}
export type substitutionOperationOperator_$9_$0 = substitutionOperationOperator_$9_$0_1 | substitutionOperationOperator_$9_$0_2;
export type substitutionOperationOperator_$9_$0_1 = commentLong;
export type substitutionOperationOperator_$9_$0_2 = continueLine;
export type substitutionOperationOperator_$9_$1 = substitutionOperationOperator_$9_$1_1 | substitutionOperationOperator_$9_$1_2;
export type substitutionOperationOperator_$9_$1_1 = commentLong;
export type substitutionOperationOperator_$9_$1_2 = continueLine;
export type substitutionOperationOperator_$9_$2 = substitutionOperationOperator_$9_$2_1 | substitutionOperationOperator_$9_$2_2;
export type substitutionOperationOperator_$9_$2_1 = commentLong;
export type substitutionOperationOperator_$9_$2_2 = continueLine;
export declare class substitutionOperationOperator_$10 {
    kind: ASTKinds.substitutionOperationOperator_$10;
    c1: substitutionOperationOperator_$10_$0[];
    c2: substitutionOperationOperator_$10_$1[];
    body: string;
    comments: commentLong[][];
    constructor(c1: substitutionOperationOperator_$10_$0[], c2: substitutionOperationOperator_$10_$1[]);
}
export type substitutionOperationOperator_$10_$0 = substitutionOperationOperator_$10_$0_1 | substitutionOperationOperator_$10_$0_2;
export type substitutionOperationOperator_$10_$0_1 = commentLong;
export type substitutionOperationOperator_$10_$0_2 = continueLine;
export type substitutionOperationOperator_$10_$1 = substitutionOperationOperator_$10_$1_1 | substitutionOperationOperator_$10_$1_2;
export type substitutionOperationOperator_$10_$1_1 = commentLong;
export type substitutionOperationOperator_$10_$1_2 = continueLine;
export declare class commaOperation {
    kind: ASTKinds.commaOperation;
    head: Nullable<expr>;
    bodyRaw: commaOperation_$0[];
    operands: (expr | null)[];
    comments: commentLong[][];
    constructor(head: Nullable<expr>, bodyRaw: commaOperation_$0[]);
}
export interface commaOperation_$0 {
    kind: ASTKinds.commaOperation_$0;
    spacesLhs: spaceOrContinueLineOrCommentLong[];
    expr: Nullable<expr>;
    spacesRhs: spaceOrContinueLineOrCommentLong[];
}
export interface arrayCall {
    kind: ASTKinds.arrayCall;
    target: expr;
    spacesLhs: arrayCall_$0[];
    call: Nullable<expr>;
    spacesRhs: arrayCall_$1[];
}
export type arrayCall_$0 = arrayCall_$0_1 | arrayCall_$0_2 | arrayCall_$0_3;
export type arrayCall_$0_1 = space;
export type arrayCall_$0_2 = commentLong;
export type arrayCall_$0_3 = continueLine;
export type arrayCall_$1 = arrayCall_$1_1 | arrayCall_$1_2 | arrayCall_$1_3;
export type arrayCall_$1_1 = space;
export type arrayCall_$1_2 = commentLong;
export type arrayCall_$1_3 = continueLine;
export interface functionCall {
    kind: ASTKinds.functionCall;
    target: identifer;
    spacesLhs: functionCall_$0[];
    args: Nullable<expr>;
    spacesRhs: functionCall_$1[];
}
export type functionCall_$0 = functionCall_$0_1 | functionCall_$0_2 | functionCall_$0_3;
export type functionCall_$0_1 = space;
export type functionCall_$0_2 = commentLong;
export type functionCall_$0_3 = continueLine;
export type functionCall_$1 = functionCall_$1_1 | functionCall_$1_2 | functionCall_$1_3;
export type functionCall_$1_1 = space;
export type functionCall_$1_2 = commentLong;
export type functionCall_$1_3 = continueLine;
export interface signed {
    kind: ASTKinds.signed;
    operator: signed_$0;
    operand: expr;
}
export type signed_$0 = signed_$0_1 | signed_$0_2;
export type signed_$0_1 = string;
export type signed_$0_2 = string;
export type variable = variable_1 | variable_2;
export type variable_1 = identifer;
export type variable_2 = variableLocal;
export declare class identifer {
    kind: ASTKinds.identifer;
    head: identiferHeadCharacter;
    bodyRaw: identiferBodySentence[];
    name: string;
    constructor(head: identiferHeadCharacter, bodyRaw: identiferBodySentence[]);
}
export declare class variableLocal {
    kind: ASTKinds.variableLocal;
    spaces: continueLineOrCommentLong[];
    head: identiferHeadCharacter;
    bodyRaw: identiferBodySentence[];
    name: string;
    constructor(spaces: continueLineOrCommentLong[], head: identiferHeadCharacter, bodyRaw: identiferBodySentence[]);
}
export type literal = literal_1 | literal_2 | literal_3 | literal_4 | literal_5 | literal_6;
export type literal_1 = heredoc;
export type literal_2 = heredocRaw;
export type literal_3 = literalString;
export type literal_4 = literalStringRaw;
export type literal_5 = real;
export type literal_6 = int;
export declare class heredoc {
    kind: ASTKinds.heredoc;
    bodyRaw: heredocInner[];
    body: string;
    constructor(bodyRaw: heredocInner[]);
}
export type heredocInner = heredocInner_1 | heredocInner_2 | heredocInner_3;
export interface heredocInner_1 {
    kind: ASTKinds.heredocInner_1;
    c: string;
}
export interface heredocInner_2 {
    kind: ASTKinds.heredocInner_2;
    c: string;
}
export interface heredocInner_3 {
    kind: ASTKinds.heredocInner_3;
    c: string;
}
export declare class heredocRaw {
    kind: ASTKinds.heredocRaw;
    bodyRaw: heredocRawInner[];
    body: string;
    constructor(bodyRaw: heredocRawInner[]);
}
export type heredocRawInner = heredocRawInner_1 | heredocRawInner_2 | heredocRawInner_3;
export interface heredocRawInner_1 {
    kind: ASTKinds.heredocRawInner_1;
    c: string;
}
export interface heredocRawInner_2 {
    kind: ASTKinds.heredocRawInner_2;
    c: string;
}
export interface heredocRawInner_3 {
    kind: ASTKinds.heredocRawInner_3;
    c: string;
}
export declare class literalString {
    kind: ASTKinds.literalString;
    bodyRaw: literalStringInner[];
    body: string;
    constructor(bodyRaw: literalStringInner[]);
}
export type literalStringInner = literalStringInner_1 | literalStringInner_2 | literalStringInner_3 | literalStringInner_4;
export type literalStringInner_1 = continueLine;
export type literalStringInner_2 = newLine;
export type literalStringInner_3 = string;
export type literalStringInner_4 = string;
export declare class literalStringRaw {
    kind: ASTKinds.literalStringRaw;
    bodyRaw: literalStringRawInner[];
    body: string;
    constructor(bodyRaw: literalStringRawInner[]);
}
export type literalStringRawInner = literalStringRawInner_1 | literalStringRawInner_2 | literalStringRawInner_3 | literalStringRawInner_4;
export type literalStringRawInner_1 = continueLine;
export type literalStringRawInner_2 = newLine;
export type literalStringRawInner_3 = string;
export type literalStringRawInner_4 = string;
export declare class real {
    kind: ASTKinds.real;
    sign: Nullable<real_$0>;
    head: string;
    integerPart: int_x10Inner[];
    fractionalPart: int_x10Inner[];
    str: string;
    value: number;
    constructor(sign: Nullable<real_$0>, head: string, integerPart: int_x10Inner[], fractionalPart: int_x10Inner[]);
}
export type real_$0 = real_$0_1 | real_$0_2;
export type real_$0_1 = string;
export type real_$0_2 = string;
export type int = int_1 | int_2 | int_3;
export type int_1 = int_x2;
export type int_2 = int_x16;
export type int_3 = int_x10;
export declare class int_x10 {
    kind: ASTKinds.int_x10;
    sign: Nullable<int_x10_$0>;
    head: string;
    bodyRaw: int_x10Inner[];
    str: string;
    value: number;
    constructor(sign: Nullable<int_x10_$0>, head: string, bodyRaw: int_x10Inner[]);
}
export type int_x10_$0 = int_x10_$0_1 | int_x10_$0_2;
export type int_x10_$0_1 = string;
export type int_x10_$0_2 = string;
export type int_x10Inner = int_x10Inner_1 | int_x10Inner_2;
export type int_x10Inner_1 = continueLineOrCommentLong;
export type int_x10Inner_2 = string;
export declare class int_x2 {
    kind: ASTKinds.int_x2;
    head: string;
    bodyRaw: int_x2Inner[];
    str: string;
    value: number;
    constructor(head: string, bodyRaw: int_x2Inner[]);
}
export type int_x2Inner = int_x2Inner_1 | int_x2Inner_2;
export type int_x2Inner_1 = continueLineOrCommentLong;
export type int_x2Inner_2 = string;
export declare class int_x16 {
    kind: ASTKinds.int_x16;
    head: string;
    bodyRaw: int_x16Inner[];
    str: string;
    value: number;
    constructor(head: string, bodyRaw: int_x16Inner[]);
}
export type int_x16Inner = int_x16Inner_1 | int_x16Inner_2;
export type int_x16Inner_1 = continueLineOrCommentLong;
export type int_x16Inner_2 = string;
export type preprocess = preprocess_1 | preprocess_2;
export type preprocess_1 = preprocessGlobalDefine;
export type preprocess_2 = preprocessDefine;
export declare class preprocessGlobalDefine {
    kind: ASTKinds.preprocessGlobalDefine;
    nameRaw: preprocessGlobalDefineName;
    spacesLhs: spaceOrContinueLineOrCommentLong[];
    beforeRaw: preprocessBeforeCharacterSentence[];
    spacesRhs: spaceOrContinueLineOrCommentLong[];
    afterRaw: preprocessAfterCharacterSentence[];
    newLine: newLine;
    before: string;
    after: string;
    constructor(nameRaw: preprocessGlobalDefineName, spacesLhs: spaceOrContinueLineOrCommentLong[], beforeRaw: preprocessBeforeCharacterSentence[], spacesRhs: spaceOrContinueLineOrCommentLong[], afterRaw: preprocessAfterCharacterSentence[], newLine: newLine);
}
export declare class preprocessGlobalDefineName {
    kind: ASTKinds.preprocessGlobalDefineName;
    c1: continueLineOrCommentLong[];
    c2: continueLineOrCommentLong[];
    c3: continueLineOrCommentLong[];
    c4: continueLineOrCommentLong[];
    c5: continueLineOrCommentLong[];
    c6: continueLineOrCommentLong[];
    c7: continueLineOrCommentLong[];
    c8: continueLineOrCommentLong[];
    c9: continueLineOrCommentLong[];
    c10: continueLineOrCommentLong[];
    c11: continueLineOrCommentLong[];
    c12: continueLineOrCommentLong[];
    c13: continueLineOrCommentLong[];
    comments: commentLong[][];
    constructor(c1: continueLineOrCommentLong[], c2: continueLineOrCommentLong[], c3: continueLineOrCommentLong[], c4: continueLineOrCommentLong[], c5: continueLineOrCommentLong[], c6: continueLineOrCommentLong[], c7: continueLineOrCommentLong[], c8: continueLineOrCommentLong[], c9: continueLineOrCommentLong[], c10: continueLineOrCommentLong[], c11: continueLineOrCommentLong[], c12: continueLineOrCommentLong[], c13: continueLineOrCommentLong[]);
}
export declare class preprocessDefine {
    kind: ASTKinds.preprocessDefine;
    nameRaw: preprocessDefineName;
    spacesLhs: spaceOrContinueLineOrCommentLong[];
    beforeRaw: preprocessBeforeCharacterSentence[];
    spacesRhs: spaceOrContinueLineOrCommentLong[];
    afterRaw: preprocessAfterCharacterSentence[];
    newLine: newLine;
    before: string;
    after: string;
    constructor(nameRaw: preprocessDefineName, spacesLhs: spaceOrContinueLineOrCommentLong[], beforeRaw: preprocessBeforeCharacterSentence[], spacesRhs: spaceOrContinueLineOrCommentLong[], afterRaw: preprocessAfterCharacterSentence[], newLine: newLine);
}
export declare class preprocessDefineName {
    kind: ASTKinds.preprocessDefineName;
    c1: continueLineOrCommentLong[];
    c2: continueLineOrCommentLong[];
    c3: continueLineOrCommentLong[];
    c4: continueLineOrCommentLong[];
    c5: continueLineOrCommentLong[];
    c6: continueLineOrCommentLong[];
    c7: continueLineOrCommentLong[];
    comments: commentLong[][];
    constructor(c1: continueLineOrCommentLong[], c2: continueLineOrCommentLong[], c3: continueLineOrCommentLong[], c4: continueLineOrCommentLong[], c5: continueLineOrCommentLong[], c6: continueLineOrCommentLong[], c7: continueLineOrCommentLong[]);
}
export declare class maybePreprocess {
    kind: ASTKinds.maybePreprocess;
    bodyRaw: preprocessBeforeCharacterSentence[];
    comments: commentLong[];
    body: string;
    constructor(bodyRaw: preprocessBeforeCharacterSentence[]);
}
export type preprocessBeforeCharacterSentence = preprocessBeforeCharacterSentence_1 | preprocessBeforeCharacterSentence_2;
export type preprocessBeforeCharacterSentence_1 = continueLineOrCommentLong;
export type preprocessBeforeCharacterSentence_2 = string;
export type preprocessAfterCharacterSentence = preprocessAfterCharacterSentence_1 | preprocessAfterCharacterSentence_2;
export type preprocessAfterCharacterSentence_1 = continueLineOrCommentLong;
export type preprocessAfterCharacterSentence_2 = string;
export declare class Parser {
    private readonly input;
    private pos;
    private negating;
    private memoSafe;
    constructor(input: string);
    reset(pos: PosInfo): void;
    finished(): boolean;
    clearMemos(): void;
    protected $scope$expr$memo: Map<number, [Nullable<expr>, PosInfo]>;
    matchstart($$dpth: number, $$cr?: ErrorTracker): Nullable<start>;
    matchcontent($$dpth: number, $$cr?: ErrorTracker): Nullable<content>;
    matchcontent_1($$dpth: number, $$cr?: ErrorTracker): Nullable<content_1>;
    matchcontent_2($$dpth: number, $$cr?: ErrorTracker): Nullable<content_2>;
    matchcontent_3($$dpth: number, $$cr?: ErrorTracker): Nullable<content_3>;
    matchcontent_4($$dpth: number, $$cr?: ErrorTracker): Nullable<content_4>;
    matchcontent_5($$dpth: number, $$cr?: ErrorTracker): Nullable<content_5>;
    matchcontent_6($$dpth: number, $$cr?: ErrorTracker): Nullable<content_6>;
    matchcontent_7($$dpth: number, $$cr?: ErrorTracker): Nullable<content_7>;
    matchnewLine($$dpth: number, $$cr?: ErrorTracker): Nullable<newLine>;
    matchnewLineBody($$dpth: number, $$cr?: ErrorTracker): Nullable<newLineBody>;
    matchnewLineBody_1($$dpth: number, $$cr?: ErrorTracker): Nullable<newLineBody_1>;
    matchnewLineBody_2($$dpth: number, $$cr?: ErrorTracker): Nullable<newLineBody_2>;
    matchnewLineBody_3($$dpth: number, $$cr?: ErrorTracker): Nullable<newLineBody_3>;
    matchendOfLine($$dpth: number, $$cr?: ErrorTracker): Nullable<endOfLine>;
    matchendOfLine_1($$dpth: number, $$cr?: ErrorTracker): Nullable<endOfLine_1>;
    matchendOfLine_2($$dpth: number, $$cr?: ErrorTracker): Nullable<endOfLine_2>;
    matchspace($$dpth: number, $$cr?: ErrorTracker): Nullable<space>;
    matchsomeSpaces($$dpth: number, $$cr?: ErrorTracker): Nullable<someSpaces>;
    matchcommentLong($$dpth: number, $$cr?: ErrorTracker): Nullable<commentLong>;
    matchcommentLongBody($$dpth: number, $$cr?: ErrorTracker): Nullable<commentLongBody>;
    matchcommentLongBody_1($$dpth: number, $$cr?: ErrorTracker): Nullable<commentLongBody_1>;
    matchcommentLongBody_2($$dpth: number, $$cr?: ErrorTracker): Nullable<commentLongBody_2>;
    matchcommentLine($$dpth: number, $$cr?: ErrorTracker): Nullable<commentLine>;
    matchcontinueLine($$dpth: number, $$cr?: ErrorTracker): Nullable<continueLine>;
    matchcontinueLineOrCommentLong($$dpth: number, $$cr?: ErrorTracker): Nullable<continueLineOrCommentLong>;
    matchcontinueLineOrCommentLong_1($$dpth: number, $$cr?: ErrorTracker): Nullable<continueLineOrCommentLong_1>;
    matchcontinueLineOrCommentLong_2($$dpth: number, $$cr?: ErrorTracker): Nullable<continueLineOrCommentLong_2>;
    matchspaceOrContinueLineOrCommentLong($$dpth: number, $$cr?: ErrorTracker): Nullable<spaceOrContinueLineOrCommentLong>;
    matchspaceOrContinueLineOrCommentLong_1($$dpth: number, $$cr?: ErrorTracker): Nullable<spaceOrContinueLineOrCommentLong_1>;
    matchspaceOrContinueLineOrCommentLong_2($$dpth: number, $$cr?: ErrorTracker): Nullable<spaceOrContinueLineOrCommentLong_2>;
    matchspaceOrContinueLineOrCommentLong_3($$dpth: number, $$cr?: ErrorTracker): Nullable<spaceOrContinueLineOrCommentLong_3>;
    matchidentiferHeadCharacter($$dpth: number, $$cr?: ErrorTracker): Nullable<identiferHeadCharacter>;
    matchidentiferBodySentence($$dpth: number, $$cr?: ErrorTracker): Nullable<identiferBodySentence>;
    matchidentiferBodySentence_1($$dpth: number, $$cr?: ErrorTracker): Nullable<identiferBodySentence_1>;
    matchidentiferBodySentence_2($$dpth: number, $$cr?: ErrorTracker): Nullable<identiferBodySentence_2>;
    matchidentiferBodyCharacter($$dpth: number, $$cr?: ErrorTracker): Nullable<identiferBodyCharacter>;
    matchstatementSeparator($$dpth: number, $$cr?: ErrorTracker): Nullable<statementSeparator>;
    matchstatementSeparatorBody($$dpth: number, $$cr?: ErrorTracker): Nullable<statementSeparatorBody>;
    matchstatementSeparatorBody_1($$dpth: number, $$cr?: ErrorTracker): Nullable<statementSeparatorBody_1>;
    matchstatementSeparatorBody_2($$dpth: number, $$cr?: ErrorTracker): Nullable<statementSeparatorBody_2>;
    matchstatementSeparatorBody_3($$dpth: number, $$cr?: ErrorTracker): Nullable<statementSeparatorBody_3>;
    matchstatementTerminator($$dpth: number, $$cr?: ErrorTracker): Nullable<statementTerminator>;
    matchstatementTerminator_1($$dpth: number, $$cr?: ErrorTracker): Nullable<statementTerminator_1>;
    matchstatementTerminator_2($$dpth: number, $$cr?: ErrorTracker): Nullable<statementTerminator_2>;
    matchstatementTerminatorBody($$dpth: number, $$cr?: ErrorTracker): Nullable<statementTerminatorBody>;
    matchfunctionBlock($$dpth: number, $$cr?: ErrorTracker): Nullable<functionBlock>;
    matchfunctionBlock_$0($$dpth: number, $$cr?: ErrorTracker): Nullable<functionBlock_$0>;
    matchfunctionBlock_$0_1($$dpth: number, $$cr?: ErrorTracker): Nullable<functionBlock_$0_1>;
    matchfunctionBlock_$0_2($$dpth: number, $$cr?: ErrorTracker): Nullable<functionBlock_$0_2>;
    matchfunctionBlock_$0_3($$dpth: number, $$cr?: ErrorTracker): Nullable<functionBlock_$0_3>;
    matchfunctionBlock_$0_4($$dpth: number, $$cr?: ErrorTracker): Nullable<functionBlock_$0_4>;
    matchfunctionBlock_$0_5($$dpth: number, $$cr?: ErrorTracker): Nullable<functionBlock_$0_5>;
    matchfunctionBlock_$1($$dpth: number, $$cr?: ErrorTracker): Nullable<functionBlock_$1>;
    matchfunctionBlock_$1_1($$dpth: number, $$cr?: ErrorTracker): Nullable<functionBlock_$1_1>;
    matchfunctionBlock_$1_2($$dpth: number, $$cr?: ErrorTracker): Nullable<functionBlock_$1_2>;
    matchfunctionBlock_$1_3($$dpth: number, $$cr?: ErrorTracker): Nullable<functionBlock_$1_3>;
    matchfunctionBlock_$1_4($$dpth: number, $$cr?: ErrorTracker): Nullable<functionBlock_$1_4>;
    matchfunctionBlock_$1_5($$dpth: number, $$cr?: ErrorTracker): Nullable<functionBlock_$1_5>;
    matchfunctionBlock_$2($$dpth: number, $$cr?: ErrorTracker): Nullable<functionBlock_$2>;
    matchfunctionBlock_$2_1($$dpth: number, $$cr?: ErrorTracker): Nullable<functionBlock_$2_1>;
    matchfunctionBlock_$2_2($$dpth: number, $$cr?: ErrorTracker): Nullable<functionBlock_$2_2>;
    matchfunctionBlock_$3($$dpth: number, $$cr?: ErrorTracker): Nullable<functionBlock_$3>;
    matchfunctionBlock_$3_1($$dpth: number, $$cr?: ErrorTracker): Nullable<functionBlock_$3_1>;
    matchfunctionBlock_$3_2($$dpth: number, $$cr?: ErrorTracker): Nullable<functionBlock_$3_2>;
    matchfunctionBlockName($$dpth: number, $$cr?: ErrorTracker): Nullable<functionBlockName>;
    matchfunctionBlockSelector($$dpth: number, $$cr?: ErrorTracker): Nullable<functionBlockSelector>;
    matchselector($$dpth: number, $$cr?: ErrorTracker): Nullable<selector>;
    matchselectorPrefix($$dpth: number, $$cr?: ErrorTracker): Nullable<selectorPrefix>;
    matchselectorPrefixName($$dpth: number, $$cr?: ErrorTracker): Nullable<selectorPrefixName>;
    matchselectorMain($$dpth: number, $$cr?: ErrorTracker): Nullable<selectorMain>;
    matchselectorMainName($$dpth: number, $$cr?: ErrorTracker): Nullable<selectorMainName>;
    matchselectorMainName_1($$dpth: number, $$cr?: ErrorTracker): Nullable<selectorMainName_1>;
    matchselectorMainName_2($$dpth: number, $$cr?: ErrorTracker): Nullable<selectorMainName_2>;
    matchselectorMainName_3($$dpth: number, $$cr?: ErrorTracker): Nullable<selectorMainName_3>;
    matchselectorMainName_4($$dpth: number, $$cr?: ErrorTracker): Nullable<selectorMainName_4>;
    matchselectorMainName_5($$dpth: number, $$cr?: ErrorTracker): Nullable<selectorMainName_5>;
    matchselectorMainName_6($$dpth: number, $$cr?: ErrorTracker): Nullable<selectorMainName_6>;
    matchselectorMainName_7($$dpth: number, $$cr?: ErrorTracker): Nullable<selectorMainName_7>;
    matchselectorSuffix($$dpth: number, $$cr?: ErrorTracker): Nullable<selectorSuffix>;
    matchselectorSuffixName($$dpth: number, $$cr?: ErrorTracker): Nullable<selectorSuffixName>;
    matchblock($$dpth: number, $$cr?: ErrorTracker): Nullable<block>;
    matchblock_$0($$dpth: number, $$cr?: ErrorTracker): Nullable<block_$0>;
    matchblock_$0_1($$dpth: number, $$cr?: ErrorTracker): Nullable<block_$0_1>;
    matchblock_$0_2($$dpth: number, $$cr?: ErrorTracker): Nullable<block_$0_2>;
    matchblock_$0_3($$dpth: number, $$cr?: ErrorTracker): Nullable<block_$0_3>;
    matchblock_$0_4($$dpth: number, $$cr?: ErrorTracker): Nullable<block_$0_4>;
    matchblock_$0_5($$dpth: number, $$cr?: ErrorTracker): Nullable<block_$0_5>;
    matchblock_$1($$dpth: number, $$cr?: ErrorTracker): Nullable<block_$1>;
    matchblock_$1_1($$dpth: number, $$cr?: ErrorTracker): Nullable<block_$1_1>;
    matchblock_$1_2($$dpth: number, $$cr?: ErrorTracker): Nullable<block_$1_2>;
    matchblock_$1_3($$dpth: number, $$cr?: ErrorTracker): Nullable<block_$1_3>;
    matchblock_$2($$dpth: number, $$cr?: ErrorTracker): Nullable<block_$2>;
    matchblock_$2_1($$dpth: number, $$cr?: ErrorTracker): Nullable<block_$2_1>;
    matchblock_$2_2($$dpth: number, $$cr?: ErrorTracker): Nullable<block_$2_2>;
    matchblock_$2_3($$dpth: number, $$cr?: ErrorTracker): Nullable<block_$2_3>;
    matchblock_$2_4($$dpth: number, $$cr?: ErrorTracker): Nullable<block_$2_4>;
    matchblock_$2_5($$dpth: number, $$cr?: ErrorTracker): Nullable<block_$2_5>;
    matchblockSelector($$dpth: number, $$cr?: ErrorTracker): Nullable<blockSelector>;
    matchblockInner($$dpth: number, $$cr?: ErrorTracker): Nullable<blockInner>;
    matchblockInner_1($$dpth: number, $$cr?: ErrorTracker): Nullable<blockInner_1>;
    matchblockInner_2($$dpth: number, $$cr?: ErrorTracker): Nullable<blockInner_2>;
    matchblockInner_3($$dpth: number, $$cr?: ErrorTracker): Nullable<blockInner_3>;
    matchblockInner_4($$dpth: number, $$cr?: ErrorTracker): Nullable<blockInner_4>;
    matchblockInner_5($$dpth: number, $$cr?: ErrorTracker): Nullable<blockInner_5>;
    matchblockInner_6($$dpth: number, $$cr?: ErrorTracker): Nullable<blockInner_6>;
    matchblockInner_7($$dpth: number, $$cr?: ErrorTracker): Nullable<blockInner_7>;
    matchblockInner_8($$dpth: number, $$cr?: ErrorTracker): Nullable<blockInner_8>;
    matchblockInnerFlow($$dpth: number, $$cr?: ErrorTracker): Nullable<blockInnerFlow>;
    matchblockInnerFlowKind($$dpth: number, $$cr?: ErrorTracker): Nullable<blockInnerFlowKind>;
    matchblockInnerFlowKind_1($$dpth: number, $$cr?: ErrorTracker): Nullable<blockInnerFlowKind_1>;
    matchblockInnerFlowKind_2($$dpth: number, $$cr?: ErrorTracker): Nullable<blockInnerFlowKind_2>;
    matchblockInnerFlowKind_3($$dpth: number, $$cr?: ErrorTracker): Nullable<blockInnerFlowKind_3>;
    matchblockInnerFlowKind_4($$dpth: number, $$cr?: ErrorTracker): Nullable<blockInnerFlowKind_4>;
    matchblockInnerFlowKind_5($$dpth: number, $$cr?: ErrorTracker): Nullable<blockInnerFlowKind_5>;
    matchblockInnerFlowKind_6($$dpth: number, $$cr?: ErrorTracker): Nullable<blockInnerFlowKind_6>;
    matchblockInnerFlowKind_7($$dpth: number, $$cr?: ErrorTracker): Nullable<blockInnerFlowKind_7>;
    matchblockInnerSentence($$dpth: number, $$cr?: ErrorTracker): Nullable<blockInnerSentence>;
    matchblockInnerSentence_$0($$dpth: number, $$cr?: ErrorTracker): Nullable<blockInnerSentence_$0>;
    matchblockInnerSentence_$0_1($$dpth: number, $$cr?: ErrorTracker): Nullable<blockInnerSentence_$0_1>;
    matchblockInnerSentence_$0_2($$dpth: number, $$cr?: ErrorTracker): Nullable<blockInnerSentence_$0_2>;
    matchblockInnerSentence_$0_3($$dpth: number, $$cr?: ErrorTracker): Nullable<blockInnerSentence_$0_3>;
    matchblockInnerSentenceKind($$dpth: number, $$cr?: ErrorTracker): Nullable<blockInnerSentenceKind>;
    matchblockInnerSentenceKind_1($$dpth: number, $$cr?: ErrorTracker): Nullable<blockInnerSentenceKind_1>;
    matchblockInnerSentenceKind_2($$dpth: number, $$cr?: ErrorTracker): Nullable<blockInnerSentenceKind_2>;
    matchblockInnerSentenceKind_3($$dpth: number, $$cr?: ErrorTracker): Nullable<blockInnerSentenceKind_3>;
    matchblockInnerSentenceKind_4($$dpth: number, $$cr?: ErrorTracker): Nullable<blockInnerSentenceKind_4>;
    matchblockInnerSentenceKind_5($$dpth: number, $$cr?: ErrorTracker): Nullable<blockInnerSentenceKind_5>;
    matchblockInnerSentenceKind_6($$dpth: number, $$cr?: ErrorTracker): Nullable<blockInnerSentenceKind_6>;
    matchblockInnerSentenceKind_7($$dpth: number, $$cr?: ErrorTracker): Nullable<blockInnerSentenceKind_7>;
    matchflowIf($$dpth: number, $$cr?: ErrorTracker): Nullable<flowIf>;
    matchflowIf_$0($$dpth: number, $$cr?: ErrorTracker): Nullable<flowIf_$0>;
    matchflowIf_$0_1($$dpth: number, $$cr?: ErrorTracker): Nullable<flowIf_$0_1>;
    matchflowIf_$0_2($$dpth: number, $$cr?: ErrorTracker): Nullable<flowIf_$0_2>;
    matchflowIfName($$dpth: number, $$cr?: ErrorTracker): Nullable<flowIfName>;
    matchflowElseif($$dpth: number, $$cr?: ErrorTracker): Nullable<flowElseif>;
    matchflowElseif_$0($$dpth: number, $$cr?: ErrorTracker): Nullable<flowElseif_$0>;
    matchflowElseif_$0_1($$dpth: number, $$cr?: ErrorTracker): Nullable<flowElseif_$0_1>;
    matchflowElseif_$0_2($$dpth: number, $$cr?: ErrorTracker): Nullable<flowElseif_$0_2>;
    matchflowElseifName($$dpth: number, $$cr?: ErrorTracker): Nullable<flowElseifName>;
    matchflowElse($$dpth: number, $$cr?: ErrorTracker): Nullable<flowElse>;
    matchflowElse_$0($$dpth: number, $$cr?: ErrorTracker): Nullable<flowElse_$0>;
    matchflowElse_$0_1($$dpth: number, $$cr?: ErrorTracker): Nullable<flowElse_$0_1>;
    matchflowElse_$0_2($$dpth: number, $$cr?: ErrorTracker): Nullable<flowElse_$0_2>;
    matchflowElseName($$dpth: number, $$cr?: ErrorTracker): Nullable<flowElseName>;
    matchflowIfBlock($$dpth: number, $$cr?: ErrorTracker): Nullable<flowIfBlock>;
    matchflowIfBlock_$0($$dpth: number, $$cr?: ErrorTracker): Nullable<flowIfBlock_$0>;
    matchflowIfBlock_$0_1($$dpth: number, $$cr?: ErrorTracker): Nullable<flowIfBlock_$0_1>;
    matchflowIfBlock_$0_2($$dpth: number, $$cr?: ErrorTracker): Nullable<flowIfBlock_$0_2>;
    matchflowIfBlock_$1($$dpth: number, $$cr?: ErrorTracker): Nullable<flowIfBlock_$1>;
    matchflowIfBlock_$1_1($$dpth: number, $$cr?: ErrorTracker): Nullable<flowIfBlock_$1_1>;
    matchflowIfBlock_$1_2($$dpth: number, $$cr?: ErrorTracker): Nullable<flowIfBlock_$1_2>;
    matchflowCase($$dpth: number, $$cr?: ErrorTracker): Nullable<flowCase>;
    matchflowCase_$0($$dpth: number, $$cr?: ErrorTracker): Nullable<flowCase_$0>;
    matchflowCase_$0_1($$dpth: number, $$cr?: ErrorTracker): Nullable<flowCase_$0_1>;
    matchflowCase_$0_2($$dpth: number, $$cr?: ErrorTracker): Nullable<flowCase_$0_2>;
    matchflowCase_$0_3($$dpth: number, $$cr?: ErrorTracker): Nullable<flowCase_$0_3>;
    matchflowCase_$0_4($$dpth: number, $$cr?: ErrorTracker): Nullable<flowCase_$0_4>;
    matchflowCase_$0_5($$dpth: number, $$cr?: ErrorTracker): Nullable<flowCase_$0_5>;
    matchflowCase_$1($$dpth: number, $$cr?: ErrorTracker): Nullable<flowCase_$1>;
    matchflowCase_$1_1($$dpth: number, $$cr?: ErrorTracker): Nullable<flowCase_$1_1>;
    matchflowCase_$1_2($$dpth: number, $$cr?: ErrorTracker): Nullable<flowCase_$1_2>;
    matchflowCase_$1_3($$dpth: number, $$cr?: ErrorTracker): Nullable<flowCase_$1_3>;
    matchflowCase_$1_4($$dpth: number, $$cr?: ErrorTracker): Nullable<flowCase_$1_4>;
    matchflowCase_$1_5($$dpth: number, $$cr?: ErrorTracker): Nullable<flowCase_$1_5>;
    matchflowCaseName($$dpth: number, $$cr?: ErrorTracker): Nullable<flowCaseName>;
    matchflowWhen($$dpth: number, $$cr?: ErrorTracker): Nullable<flowWhen>;
    matchflowWhenName($$dpth: number, $$cr?: ErrorTracker): Nullable<flowWhenName>;
    matchflowWhenConditions($$dpth: number, $$cr?: ErrorTracker): Nullable<flowWhenConditions>;
    matchflowWhenConditions_$0($$dpth: number, $$cr?: ErrorTracker): Nullable<flowWhenConditions_$0>;
    matchflowWhenCondition($$dpth: number, $$cr?: ErrorTracker): Nullable<flowWhenCondition>;
    matchflowWhenCondition_1($$dpth: number, $$cr?: ErrorTracker): Nullable<flowWhenCondition_1>;
    matchflowWhenCondition_2($$dpth: number, $$cr?: ErrorTracker): Nullable<flowWhenCondition_2>;
    matchflowWhenConditionLiteral($$dpth: number, $$cr?: ErrorTracker): Nullable<flowWhenConditionLiteral>;
    matchflowWhenConditionLiteral_$0($$dpth: number, $$cr?: ErrorTracker): Nullable<flowWhenConditionLiteral_$0>;
    matchflowWhenConditionLiteral_$0_1($$dpth: number, $$cr?: ErrorTracker): Nullable<flowWhenConditionLiteral_$0_1>;
    matchflowWhenConditionLiteral_$0_2($$dpth: number, $$cr?: ErrorTracker): Nullable<flowWhenConditionLiteral_$0_2>;
    matchflowWhenConditionLiteral_$0_3($$dpth: number, $$cr?: ErrorTracker): Nullable<flowWhenConditionLiteral_$0_3>;
    matchflowWhenConditionLiteral_$1($$dpth: number, $$cr?: ErrorTracker): Nullable<flowWhenConditionLiteral_$1>;
    matchflowWhenConditionLiteral_$1_1($$dpth: number, $$cr?: ErrorTracker): Nullable<flowWhenConditionLiteral_$1_1>;
    matchflowWhenConditionLiteral_$1_2($$dpth: number, $$cr?: ErrorTracker): Nullable<flowWhenConditionLiteral_$1_2>;
    matchflowWhenConditionLiteral_$2($$dpth: number, $$cr?: ErrorTracker): Nullable<flowWhenConditionLiteral_$2>;
    matchflowWhenConditionLiteral_$2_1($$dpth: number, $$cr?: ErrorTracker): Nullable<flowWhenConditionLiteral_$2_1>;
    matchflowWhenConditionLiteral_$2_2($$dpth: number, $$cr?: ErrorTracker): Nullable<flowWhenConditionLiteral_$2_2>;
    matchflowWhenConditionLiteral_$2_3($$dpth: number, $$cr?: ErrorTracker): Nullable<flowWhenConditionLiteral_$2_3>;
    matchflowWhenConditionRange($$dpth: number, $$cr?: ErrorTracker): Nullable<flowWhenConditionRange>;
    matchflowWhenConditionRange_$0($$dpth: number, $$cr?: ErrorTracker): Nullable<flowWhenConditionRange_$0>;
    matchflowWhenConditionRange_$0_1($$dpth: number, $$cr?: ErrorTracker): Nullable<flowWhenConditionRange_$0_1>;
    matchflowWhenConditionRange_$0_2($$dpth: number, $$cr?: ErrorTracker): Nullable<flowWhenConditionRange_$0_2>;
    matchflowWhenConditionRange_$0_3($$dpth: number, $$cr?: ErrorTracker): Nullable<flowWhenConditionRange_$0_3>;
    matchflowWhenConditionRange_$1($$dpth: number, $$cr?: ErrorTracker): Nullable<flowWhenConditionRange_$1>;
    matchflowWhenConditionRange_$1_1($$dpth: number, $$cr?: ErrorTracker): Nullable<flowWhenConditionRange_$1_1>;
    matchflowWhenConditionRange_$1_2($$dpth: number, $$cr?: ErrorTracker): Nullable<flowWhenConditionRange_$1_2>;
    matchflowWhenConditionRange_$2($$dpth: number, $$cr?: ErrorTracker): Nullable<flowWhenConditionRange_$2>;
    matchflowWhenConditionRange_$2_1($$dpth: number, $$cr?: ErrorTracker): Nullable<flowWhenConditionRange_$2_1>;
    matchflowWhenConditionRange_$2_2($$dpth: number, $$cr?: ErrorTracker): Nullable<flowWhenConditionRange_$2_2>;
    matchflowWhenConditionRange_$2_3($$dpth: number, $$cr?: ErrorTracker): Nullable<flowWhenConditionRange_$2_3>;
    matchflowWhenConditionRange_$3($$dpth: number, $$cr?: ErrorTracker): Nullable<flowWhenConditionRange_$3>;
    matchflowWhenConditionRange_$3_1($$dpth: number, $$cr?: ErrorTracker): Nullable<flowWhenConditionRange_$3_1>;
    matchflowWhenConditionRange_$3_2($$dpth: number, $$cr?: ErrorTracker): Nullable<flowWhenConditionRange_$3_2>;
    matchflowWhenConditionRange_$3_3($$dpth: number, $$cr?: ErrorTracker): Nullable<flowWhenConditionRange_$3_3>;
    matchflowWhenConditionRange_$4($$dpth: number, $$cr?: ErrorTracker): Nullable<flowWhenConditionRange_$4>;
    matchflowWhenConditionRange_$4_1($$dpth: number, $$cr?: ErrorTracker): Nullable<flowWhenConditionRange_$4_1>;
    matchflowWhenConditionRange_$4_2($$dpth: number, $$cr?: ErrorTracker): Nullable<flowWhenConditionRange_$4_2>;
    matchflowWhenConditionRange_$5($$dpth: number, $$cr?: ErrorTracker): Nullable<flowWhenConditionRange_$5>;
    matchflowWhenConditionRange_$5_1($$dpth: number, $$cr?: ErrorTracker): Nullable<flowWhenConditionRange_$5_1>;
    matchflowWhenConditionRange_$5_2($$dpth: number, $$cr?: ErrorTracker): Nullable<flowWhenConditionRange_$5_2>;
    matchflowWhenConditionRange_$5_3($$dpth: number, $$cr?: ErrorTracker): Nullable<flowWhenConditionRange_$5_3>;
    matchflowOthers($$dpth: number, $$cr?: ErrorTracker): Nullable<flowOthers>;
    matchflowOthers_$0($$dpth: number, $$cr?: ErrorTracker): Nullable<flowOthers_$0>;
    matchflowOthers_$0_1($$dpth: number, $$cr?: ErrorTracker): Nullable<flowOthers_$0_1>;
    matchflowOthers_$0_2($$dpth: number, $$cr?: ErrorTracker): Nullable<flowOthers_$0_2>;
    matchflowOthers_$0_3($$dpth: number, $$cr?: ErrorTracker): Nullable<flowOthers_$0_3>;
    matchflowOthersName($$dpth: number, $$cr?: ErrorTracker): Nullable<flowOthersName>;
    matchflowSwitch($$dpth: number, $$cr?: ErrorTracker): Nullable<flowSwitch>;
    matchflowSwitchName($$dpth: number, $$cr?: ErrorTracker): Nullable<flowSwitchName>;
    matchflowWhile($$dpth: number, $$cr?: ErrorTracker): Nullable<flowWhile>;
    matchflowWhileName($$dpth: number, $$cr?: ErrorTracker): Nullable<flowWhileName>;
    matchflowFor($$dpth: number, $$cr?: ErrorTracker): Nullable<flowFor>;
    matchflowForName($$dpth: number, $$cr?: ErrorTracker): Nullable<flowForName>;
    matchflowForeach($$dpth: number, $$cr?: ErrorTracker): Nullable<flowForeach>;
    matchflowForeach_$0($$dpth: number, $$cr?: ErrorTracker): Nullable<flowForeach_$0>;
    matchflowForeach_$0_1($$dpth: number, $$cr?: ErrorTracker): Nullable<flowForeach_$0_1>;
    matchflowForeach_$0_2($$dpth: number, $$cr?: ErrorTracker): Nullable<flowForeach_$0_2>;
    matchflowForeach_$0_3($$dpth: number, $$cr?: ErrorTracker): Nullable<flowForeach_$0_3>;
    matchflowForeachName($$dpth: number, $$cr?: ErrorTracker): Nullable<flowForeachName>;
    matchblockInnerBreak($$dpth: number, $$cr?: ErrorTracker): Nullable<blockInnerBreak>;
    matchblockInnerBreakName($$dpth: number, $$cr?: ErrorTracker): Nullable<blockInnerBreakName>;
    matchblockInnerContinue($$dpth: number, $$cr?: ErrorTracker): Nullable<blockInnerContinue>;
    matchblockInnerContinueName($$dpth: number, $$cr?: ErrorTracker): Nullable<blockInnerContinueName>;
    matchblockInnerReturn($$dpth: number, $$cr?: ErrorTracker): Nullable<blockInnerReturn>;
    matchblockInnerReturnName($$dpth: number, $$cr?: ErrorTracker): Nullable<blockInnerReturnName>;
    matchblockInnerParallel($$dpth: number, $$cr?: ErrorTracker): Nullable<blockInnerParallel>;
    matchblockInnerParallelName($$dpth: number, $$cr?: ErrorTracker): Nullable<blockInnerParallelName>;
    matchblockInnerVoid($$dpth: number, $$cr?: ErrorTracker): Nullable<blockInnerVoid>;
    matchblockInnerVoidName($$dpth: number, $$cr?: ErrorTracker): Nullable<blockInnerVoidName>;
    matchoutputSettlement($$dpth: number, $$cr?: ErrorTracker): Nullable<outputSettlement>;
    matchexpr($$dpth: number, $$cr?: ErrorTracker): Nullable<expr>;
    matchexpr_$0($$dpth: number, $$cr?: ErrorTracker): Nullable<expr_$0>;
    matchexpr_$0_1($$dpth: number, $$cr?: ErrorTracker): Nullable<expr_$0_1>;
    matchexpr_$0_2($$dpth: number, $$cr?: ErrorTracker): Nullable<expr_$0_2>;
    matchexpr_$0_3($$dpth: number, $$cr?: ErrorTracker): Nullable<expr_$0_3>;
    matchexpr_$1($$dpth: number, $$cr?: ErrorTracker): Nullable<expr_$1>;
    matchexpr_$1_1($$dpth: number, $$cr?: ErrorTracker): Nullable<expr_$1_1>;
    matchexpr_$1_2($$dpth: number, $$cr?: ErrorTracker): Nullable<expr_$1_2>;
    matchexpr_$1_3($$dpth: number, $$cr?: ErrorTracker): Nullable<expr_$1_3>;
    matchexprInner($$dpth: number, $$cr?: ErrorTracker): Nullable<exprInner>;
    matchexprInner_1($$dpth: number, $$cr?: ErrorTracker): Nullable<exprInner_1>;
    matchexprInner_2($$dpth: number, $$cr?: ErrorTracker): Nullable<exprInner_2>;
    matchexprInner_3($$dpth: number, $$cr?: ErrorTracker): Nullable<exprInner_3>;
    matchexprInner_4($$dpth: number, $$cr?: ErrorTracker): Nullable<exprInner_4>;
    matchexprInner_5($$dpth: number, $$cr?: ErrorTracker): Nullable<exprInner_5>;
    matchexprInner_6($$dpth: number, $$cr?: ErrorTracker): Nullable<exprInner_6>;
    matchexprInner_7($$dpth: number, $$cr?: ErrorTracker): Nullable<exprInner_7>;
    matchexprInner_8($$dpth: number, $$cr?: ErrorTracker): Nullable<exprInner_8>;
    matchexprInner_9($$dpth: number, $$cr?: ErrorTracker): Nullable<exprInner_9>;
    matchexprInner_10($$dpth: number, $$cr?: ErrorTracker): Nullable<exprInner_10>;
    matchexprInner_11($$dpth: number, $$cr?: ErrorTracker): Nullable<exprInner_11>;
    matchexprInner_12($$dpth: number, $$cr?: ErrorTracker): Nullable<exprInner_12>;
    matchexprInner_13($$dpth: number, $$cr?: ErrorTracker): Nullable<exprInner_13>;
    matchexprInner_14($$dpth: number, $$cr?: ErrorTracker): Nullable<exprInner_14>;
    matchexprInner_15($$dpth: number, $$cr?: ErrorTracker): Nullable<exprInner_15>;
    matchexprInner_16($$dpth: number, $$cr?: ErrorTracker): Nullable<exprInner_16>;
    matchexprInner_17($$dpth: number, $$cr?: ErrorTracker): Nullable<exprInner_17>;
    matchexprInner_18($$dpth: number, $$cr?: ErrorTracker): Nullable<exprInner_18>;
    matchexprInner_19($$dpth: number, $$cr?: ErrorTracker): Nullable<exprInner_19>;
    matchparenthesesOperation($$dpth: number, $$cr?: ErrorTracker): Nullable<parenthesesOperation>;
    matchparenthesesOperation_$0($$dpth: number, $$cr?: ErrorTracker): Nullable<parenthesesOperation_$0>;
    matchparenthesesOperation_$0_1($$dpth: number, $$cr?: ErrorTracker): Nullable<parenthesesOperation_$0_1>;
    matchparenthesesOperation_$0_2($$dpth: number, $$cr?: ErrorTracker): Nullable<parenthesesOperation_$0_2>;
    matchparenthesesOperation_$0_3($$dpth: number, $$cr?: ErrorTracker): Nullable<parenthesesOperation_$0_3>;
    matchparenthesesOperation_$1($$dpth: number, $$cr?: ErrorTracker): Nullable<parenthesesOperation_$1>;
    matchparenthesesOperation_$1_1($$dpth: number, $$cr?: ErrorTracker): Nullable<parenthesesOperation_$1_1>;
    matchparenthesesOperation_$1_2($$dpth: number, $$cr?: ErrorTracker): Nullable<parenthesesOperation_$1_2>;
    matchparenthesesOperation_$1_3($$dpth: number, $$cr?: ErrorTracker): Nullable<parenthesesOperation_$1_3>;
    matchbracketsOperation($$dpth: number, $$cr?: ErrorTracker): Nullable<bracketsOperation>;
    matchbracketsOperation_$0($$dpth: number, $$cr?: ErrorTracker): Nullable<bracketsOperation_$0>;
    matchbracketsOperation_$0_1($$dpth: number, $$cr?: ErrorTracker): Nullable<bracketsOperation_$0_1>;
    matchbracketsOperation_$0_2($$dpth: number, $$cr?: ErrorTracker): Nullable<bracketsOperation_$0_2>;
    matchbracketsOperation_$0_3($$dpth: number, $$cr?: ErrorTracker): Nullable<bracketsOperation_$0_3>;
    matchbracketsOperation_$1($$dpth: number, $$cr?: ErrorTracker): Nullable<bracketsOperation_$1>;
    matchbracketsOperation_$1_1($$dpth: number, $$cr?: ErrorTracker): Nullable<bracketsOperation_$1_1>;
    matchbracketsOperation_$1_2($$dpth: number, $$cr?: ErrorTracker): Nullable<bracketsOperation_$1_2>;
    matchbracketsOperation_$1_3($$dpth: number, $$cr?: ErrorTracker): Nullable<bracketsOperation_$1_3>;
    matchbracketsOperationOption($$dpth: number, $$cr?: ErrorTracker): Nullable<bracketsOperationOption>;
    matchbracketsOperationOption_$0($$dpth: number, $$cr?: ErrorTracker): Nullable<bracketsOperationOption_$0>;
    matchbracketsOperationOption_$0_1($$dpth: number, $$cr?: ErrorTracker): Nullable<bracketsOperationOption_$0_1>;
    matchbracketsOperationOption_$0_2($$dpth: number, $$cr?: ErrorTracker): Nullable<bracketsOperationOption_$0_2>;
    matchbracketsOperationOption_$0_3($$dpth: number, $$cr?: ErrorTracker): Nullable<bracketsOperationOption_$0_3>;
    matchbracketsOperationOption_$1($$dpth: number, $$cr?: ErrorTracker): Nullable<bracketsOperationOption_$1>;
    matchbracketsOperationOption_$1_1($$dpth: number, $$cr?: ErrorTracker): Nullable<bracketsOperationOption_$1_1>;
    matchbracketsOperationOption_$1_2($$dpth: number, $$cr?: ErrorTracker): Nullable<bracketsOperationOption_$1_2>;
    matchbracketsOperationOption_$1_3($$dpth: number, $$cr?: ErrorTracker): Nullable<bracketsOperationOption_$1_3>;
    matchexclamationOperation($$dpth: number, $$cr?: ErrorTracker): Nullable<exclamationOperation>;
    matchexclamationOperation_$0($$dpth: number, $$cr?: ErrorTracker): Nullable<exclamationOperation_$0>;
    matchexclamationOperation_$0_1($$dpth: number, $$cr?: ErrorTracker): Nullable<exclamationOperation_$0_1>;
    matchexclamationOperation_$0_2($$dpth: number, $$cr?: ErrorTracker): Nullable<exclamationOperation_$0_2>;
    matchexclamationOperation_$0_3($$dpth: number, $$cr?: ErrorTracker): Nullable<exclamationOperation_$0_3>;
    matchincrementOrDecrementOperation($$dpth: number, $$cr?: ErrorTracker): Nullable<incrementOrDecrementOperation>;
    matchincrementOrDecrementOperation_$0($$dpth: number, $$cr?: ErrorTracker): Nullable<incrementOrDecrementOperation_$0>;
    matchincrementOrDecrementOperation_$0_1($$dpth: number, $$cr?: ErrorTracker): Nullable<incrementOrDecrementOperation_$0_1>;
    matchincrementOrDecrementOperation_$0_2($$dpth: number, $$cr?: ErrorTracker): Nullable<incrementOrDecrementOperation_$0_2>;
    matchincrementOrDecrementOperation_$0_3($$dpth: number, $$cr?: ErrorTracker): Nullable<incrementOrDecrementOperation_$0_3>;
    matchincrementOrDecrementOperator($$dpth: number, $$cr?: ErrorTracker): Nullable<incrementOrDecrementOperator>;
    matchincrementOrDecrementOperator_1($$dpth: number, $$cr?: ErrorTracker): Nullable<incrementOrDecrementOperator_1>;
    matchincrementOrDecrementOperator_2($$dpth: number, $$cr?: ErrorTracker): Nullable<incrementOrDecrementOperator_2>;
    matchincrementOrDecrementOperator_$0($$dpth: number, $$cr?: ErrorTracker): Nullable<incrementOrDecrementOperator_$0>;
    matchincrementOrDecrementOperator_$0_$0($$dpth: number, $$cr?: ErrorTracker): Nullable<incrementOrDecrementOperator_$0_$0>;
    matchincrementOrDecrementOperator_$0_$0_1($$dpth: number, $$cr?: ErrorTracker): Nullable<incrementOrDecrementOperator_$0_$0_1>;
    matchincrementOrDecrementOperator_$0_$0_2($$dpth: number, $$cr?: ErrorTracker): Nullable<incrementOrDecrementOperator_$0_$0_2>;
    matchincrementOrDecrementOperator_$0_$1($$dpth: number, $$cr?: ErrorTracker): Nullable<incrementOrDecrementOperator_$0_$1>;
    matchincrementOrDecrementOperator_$0_$1_1($$dpth: number, $$cr?: ErrorTracker): Nullable<incrementOrDecrementOperator_$0_$1_1>;
    matchincrementOrDecrementOperator_$0_$1_2($$dpth: number, $$cr?: ErrorTracker): Nullable<incrementOrDecrementOperator_$0_$1_2>;
    matchincrementOrDecrementOperator_$1($$dpth: number, $$cr?: ErrorTracker): Nullable<incrementOrDecrementOperator_$1>;
    matchincrementOrDecrementOperator_$1_$0($$dpth: number, $$cr?: ErrorTracker): Nullable<incrementOrDecrementOperator_$1_$0>;
    matchincrementOrDecrementOperator_$1_$0_1($$dpth: number, $$cr?: ErrorTracker): Nullable<incrementOrDecrementOperator_$1_$0_1>;
    matchincrementOrDecrementOperator_$1_$0_2($$dpth: number, $$cr?: ErrorTracker): Nullable<incrementOrDecrementOperator_$1_$0_2>;
    matchincrementOrDecrementOperator_$1_$1($$dpth: number, $$cr?: ErrorTracker): Nullable<incrementOrDecrementOperator_$1_$1>;
    matchincrementOrDecrementOperator_$1_$1_1($$dpth: number, $$cr?: ErrorTracker): Nullable<incrementOrDecrementOperator_$1_$1_1>;
    matchincrementOrDecrementOperator_$1_$1_2($$dpth: number, $$cr?: ErrorTracker): Nullable<incrementOrDecrementOperator_$1_$1_2>;
    matchmultiplicationOrDivisionOperation($$dpth: number, $$cr?: ErrorTracker): Nullable<multiplicationOrDivisionOperation>;
    matchmultiplicationOrDivisionOperation_$0($$dpth: number, $$cr?: ErrorTracker): Nullable<multiplicationOrDivisionOperation_$0>;
    matchmultiplicationOrDivisionOperation_$0_1($$dpth: number, $$cr?: ErrorTracker): Nullable<multiplicationOrDivisionOperation_$0_1>;
    matchmultiplicationOrDivisionOperation_$0_2($$dpth: number, $$cr?: ErrorTracker): Nullable<multiplicationOrDivisionOperation_$0_2>;
    matchmultiplicationOrDivisionOperation_$0_3($$dpth: number, $$cr?: ErrorTracker): Nullable<multiplicationOrDivisionOperation_$0_3>;
    matchmultiplicationOrDivisionOperation_$1($$dpth: number, $$cr?: ErrorTracker): Nullable<multiplicationOrDivisionOperation_$1>;
    matchmultiplicationOrDivisionOperation_$1_1($$dpth: number, $$cr?: ErrorTracker): Nullable<multiplicationOrDivisionOperation_$1_1>;
    matchmultiplicationOrDivisionOperation_$1_2($$dpth: number, $$cr?: ErrorTracker): Nullable<multiplicationOrDivisionOperation_$1_2>;
    matchmultiplicationOrDivisionOperation_$1_3($$dpth: number, $$cr?: ErrorTracker): Nullable<multiplicationOrDivisionOperation_$1_3>;
    matchmultiplicationOrDivisionOperator($$dpth: number, $$cr?: ErrorTracker): Nullable<multiplicationOrDivisionOperator>;
    matchmultiplicationOrDivisionOperator_1($$dpth: number, $$cr?: ErrorTracker): Nullable<multiplicationOrDivisionOperator_1>;
    matchmultiplicationOrDivisionOperator_2($$dpth: number, $$cr?: ErrorTracker): Nullable<multiplicationOrDivisionOperator_2>;
    matchmultiplicationOrDivisionOperator_3($$dpth: number, $$cr?: ErrorTracker): Nullable<multiplicationOrDivisionOperator_3>;
    matchmultiplicationOrDivisionOperator_$0($$dpth: number, $$cr?: ErrorTracker): Nullable<multiplicationOrDivisionOperator_$0>;
    matchmultiplicationOrDivisionOperator_$0_$0($$dpth: number, $$cr?: ErrorTracker): Nullable<multiplicationOrDivisionOperator_$0_$0>;
    matchmultiplicationOrDivisionOperator_$0_$0_1($$dpth: number, $$cr?: ErrorTracker): Nullable<multiplicationOrDivisionOperator_$0_$0_1>;
    matchmultiplicationOrDivisionOperator_$0_$0_2($$dpth: number, $$cr?: ErrorTracker): Nullable<multiplicationOrDivisionOperator_$0_$0_2>;
    matchmultiplicationOrDivisionOperator_$1($$dpth: number, $$cr?: ErrorTracker): Nullable<multiplicationOrDivisionOperator_$1>;
    matchmultiplicationOrDivisionOperator_$1_$0($$dpth: number, $$cr?: ErrorTracker): Nullable<multiplicationOrDivisionOperator_$1_$0>;
    matchmultiplicationOrDivisionOperator_$1_$0_1($$dpth: number, $$cr?: ErrorTracker): Nullable<multiplicationOrDivisionOperator_$1_$0_1>;
    matchmultiplicationOrDivisionOperator_$1_$0_2($$dpth: number, $$cr?: ErrorTracker): Nullable<multiplicationOrDivisionOperator_$1_$0_2>;
    matchmultiplicationOrDivisionOperator_$2($$dpth: number, $$cr?: ErrorTracker): Nullable<multiplicationOrDivisionOperator_$2>;
    matchmultiplicationOrDivisionOperator_$2_$0($$dpth: number, $$cr?: ErrorTracker): Nullable<multiplicationOrDivisionOperator_$2_$0>;
    matchmultiplicationOrDivisionOperator_$2_$0_1($$dpth: number, $$cr?: ErrorTracker): Nullable<multiplicationOrDivisionOperator_$2_$0_1>;
    matchmultiplicationOrDivisionOperator_$2_$0_2($$dpth: number, $$cr?: ErrorTracker): Nullable<multiplicationOrDivisionOperator_$2_$0_2>;
    matchadditionOrSubtractionOperation($$dpth: number, $$cr?: ErrorTracker): Nullable<additionOrSubtractionOperation>;
    matchadditionOrSubtractionOperation_$0($$dpth: number, $$cr?: ErrorTracker): Nullable<additionOrSubtractionOperation_$0>;
    matchadditionOrSubtractionOperation_$0_1($$dpth: number, $$cr?: ErrorTracker): Nullable<additionOrSubtractionOperation_$0_1>;
    matchadditionOrSubtractionOperation_$0_2($$dpth: number, $$cr?: ErrorTracker): Nullable<additionOrSubtractionOperation_$0_2>;
    matchadditionOrSubtractionOperation_$0_3($$dpth: number, $$cr?: ErrorTracker): Nullable<additionOrSubtractionOperation_$0_3>;
    matchadditionOrSubtractionOperation_$1($$dpth: number, $$cr?: ErrorTracker): Nullable<additionOrSubtractionOperation_$1>;
    matchadditionOrSubtractionOperation_$1_1($$dpth: number, $$cr?: ErrorTracker): Nullable<additionOrSubtractionOperation_$1_1>;
    matchadditionOrSubtractionOperation_$1_2($$dpth: number, $$cr?: ErrorTracker): Nullable<additionOrSubtractionOperation_$1_2>;
    matchadditionOrSubtractionOperation_$1_3($$dpth: number, $$cr?: ErrorTracker): Nullable<additionOrSubtractionOperation_$1_3>;
    matchadditionOrSubtractionOperator($$dpth: number, $$cr?: ErrorTracker): Nullable<additionOrSubtractionOperator>;
    matchadditionOrSubtractionOperator_1($$dpth: number, $$cr?: ErrorTracker): Nullable<additionOrSubtractionOperator_1>;
    matchadditionOrSubtractionOperator_2($$dpth: number, $$cr?: ErrorTracker): Nullable<additionOrSubtractionOperator_2>;
    matchadditionOrSubtractionOperator_$0($$dpth: number, $$cr?: ErrorTracker): Nullable<additionOrSubtractionOperator_$0>;
    matchadditionOrSubtractionOperator_$0_$0($$dpth: number, $$cr?: ErrorTracker): Nullable<additionOrSubtractionOperator_$0_$0>;
    matchadditionOrSubtractionOperator_$0_$0_1($$dpth: number, $$cr?: ErrorTracker): Nullable<additionOrSubtractionOperator_$0_$0_1>;
    matchadditionOrSubtractionOperator_$0_$0_2($$dpth: number, $$cr?: ErrorTracker): Nullable<additionOrSubtractionOperator_$0_$0_2>;
    matchadditionOrSubtractionOperator_$1($$dpth: number, $$cr?: ErrorTracker): Nullable<additionOrSubtractionOperator_$1>;
    matchadditionOrSubtractionOperator_$1_$0($$dpth: number, $$cr?: ErrorTracker): Nullable<additionOrSubtractionOperator_$1_$0>;
    matchadditionOrSubtractionOperator_$1_$0_1($$dpth: number, $$cr?: ErrorTracker): Nullable<additionOrSubtractionOperator_$1_$0_1>;
    matchadditionOrSubtractionOperator_$1_$0_2($$dpth: number, $$cr?: ErrorTracker): Nullable<additionOrSubtractionOperator_$1_$0_2>;
    matchfeedbackOperation($$dpth: number, $$cr?: ErrorTracker): Nullable<feedbackOperation>;
    matchfeedbackOperation_$0($$dpth: number, $$cr?: ErrorTracker): Nullable<feedbackOperation_$0>;
    matchfeedbackOperation_$0_1($$dpth: number, $$cr?: ErrorTracker): Nullable<feedbackOperation_$0_1>;
    matchfeedbackOperation_$0_2($$dpth: number, $$cr?: ErrorTracker): Nullable<feedbackOperation_$0_2>;
    matchfeedbackOperation_$0_3($$dpth: number, $$cr?: ErrorTracker): Nullable<feedbackOperation_$0_3>;
    matchcomparisonOperation($$dpth: number, $$cr?: ErrorTracker): Nullable<comparisonOperation>;
    matchcomparisonOperation_$0($$dpth: number, $$cr?: ErrorTracker): Nullable<comparisonOperation_$0>;
    matchcomparisonOperation_$0_1($$dpth: number, $$cr?: ErrorTracker): Nullable<comparisonOperation_$0_1>;
    matchcomparisonOperation_$0_2($$dpth: number, $$cr?: ErrorTracker): Nullable<comparisonOperation_$0_2>;
    matchcomparisonOperation_$0_3($$dpth: number, $$cr?: ErrorTracker): Nullable<comparisonOperation_$0_3>;
    matchcomparisonOperation_$1($$dpth: number, $$cr?: ErrorTracker): Nullable<comparisonOperation_$1>;
    matchcomparisonOperation_$1_1($$dpth: number, $$cr?: ErrorTracker): Nullable<comparisonOperation_$1_1>;
    matchcomparisonOperation_$1_2($$dpth: number, $$cr?: ErrorTracker): Nullable<comparisonOperation_$1_2>;
    matchcomparisonOperation_$1_3($$dpth: number, $$cr?: ErrorTracker): Nullable<comparisonOperation_$1_3>;
    matchcomparisonOperator($$dpth: number, $$cr?: ErrorTracker): Nullable<comparisonOperator>;
    matchcomparisonOperator_1($$dpth: number, $$cr?: ErrorTracker): Nullable<comparisonOperator_1>;
    matchcomparisonOperator_2($$dpth: number, $$cr?: ErrorTracker): Nullable<comparisonOperator_2>;
    matchcomparisonOperator_3($$dpth: number, $$cr?: ErrorTracker): Nullable<comparisonOperator_3>;
    matchcomparisonOperator_4($$dpth: number, $$cr?: ErrorTracker): Nullable<comparisonOperator_4>;
    matchcomparisonOperator_5($$dpth: number, $$cr?: ErrorTracker): Nullable<comparisonOperator_5>;
    matchcomparisonOperator_6($$dpth: number, $$cr?: ErrorTracker): Nullable<comparisonOperator_6>;
    matchcomparisonOperator_7($$dpth: number, $$cr?: ErrorTracker): Nullable<comparisonOperator_7>;
    matchcomparisonOperator_8($$dpth: number, $$cr?: ErrorTracker): Nullable<comparisonOperator_8>;
    matchcomparisonOperator_$0($$dpth: number, $$cr?: ErrorTracker): Nullable<comparisonOperator_$0>;
    matchcomparisonOperator_$0_$0($$dpth: number, $$cr?: ErrorTracker): Nullable<comparisonOperator_$0_$0>;
    matchcomparisonOperator_$0_$0_1($$dpth: number, $$cr?: ErrorTracker): Nullable<comparisonOperator_$0_$0_1>;
    matchcomparisonOperator_$0_$0_2($$dpth: number, $$cr?: ErrorTracker): Nullable<comparisonOperator_$0_$0_2>;
    matchcomparisonOperator_$0_$1($$dpth: number, $$cr?: ErrorTracker): Nullable<comparisonOperator_$0_$1>;
    matchcomparisonOperator_$0_$1_1($$dpth: number, $$cr?: ErrorTracker): Nullable<comparisonOperator_$0_$1_1>;
    matchcomparisonOperator_$0_$1_2($$dpth: number, $$cr?: ErrorTracker): Nullable<comparisonOperator_$0_$1_2>;
    matchcomparisonOperator_$1($$dpth: number, $$cr?: ErrorTracker): Nullable<comparisonOperator_$1>;
    matchcomparisonOperator_$1_$0($$dpth: number, $$cr?: ErrorTracker): Nullable<comparisonOperator_$1_$0>;
    matchcomparisonOperator_$1_$0_1($$dpth: number, $$cr?: ErrorTracker): Nullable<comparisonOperator_$1_$0_1>;
    matchcomparisonOperator_$1_$0_2($$dpth: number, $$cr?: ErrorTracker): Nullable<comparisonOperator_$1_$0_2>;
    matchcomparisonOperator_$1_$1($$dpth: number, $$cr?: ErrorTracker): Nullable<comparisonOperator_$1_$1>;
    matchcomparisonOperator_$1_$1_1($$dpth: number, $$cr?: ErrorTracker): Nullable<comparisonOperator_$1_$1_1>;
    matchcomparisonOperator_$1_$1_2($$dpth: number, $$cr?: ErrorTracker): Nullable<comparisonOperator_$1_$1_2>;
    matchcomparisonOperator_$2($$dpth: number, $$cr?: ErrorTracker): Nullable<comparisonOperator_$2>;
    matchcomparisonOperator_$2_$0($$dpth: number, $$cr?: ErrorTracker): Nullable<comparisonOperator_$2_$0>;
    matchcomparisonOperator_$2_$0_1($$dpth: number, $$cr?: ErrorTracker): Nullable<comparisonOperator_$2_$0_1>;
    matchcomparisonOperator_$2_$0_2($$dpth: number, $$cr?: ErrorTracker): Nullable<comparisonOperator_$2_$0_2>;
    matchcomparisonOperator_$2_$1($$dpth: number, $$cr?: ErrorTracker): Nullable<comparisonOperator_$2_$1>;
    matchcomparisonOperator_$2_$1_1($$dpth: number, $$cr?: ErrorTracker): Nullable<comparisonOperator_$2_$1_1>;
    matchcomparisonOperator_$2_$1_2($$dpth: number, $$cr?: ErrorTracker): Nullable<comparisonOperator_$2_$1_2>;
    matchcomparisonOperator_$3($$dpth: number, $$cr?: ErrorTracker): Nullable<comparisonOperator_$3>;
    matchcomparisonOperator_$3_$0($$dpth: number, $$cr?: ErrorTracker): Nullable<comparisonOperator_$3_$0>;
    matchcomparisonOperator_$3_$0_1($$dpth: number, $$cr?: ErrorTracker): Nullable<comparisonOperator_$3_$0_1>;
    matchcomparisonOperator_$3_$0_2($$dpth: number, $$cr?: ErrorTracker): Nullable<comparisonOperator_$3_$0_2>;
    matchcomparisonOperator_$3_$1($$dpth: number, $$cr?: ErrorTracker): Nullable<comparisonOperator_$3_$1>;
    matchcomparisonOperator_$3_$1_1($$dpth: number, $$cr?: ErrorTracker): Nullable<comparisonOperator_$3_$1_1>;
    matchcomparisonOperator_$3_$1_2($$dpth: number, $$cr?: ErrorTracker): Nullable<comparisonOperator_$3_$1_2>;
    matchcomparisonOperator_$4($$dpth: number, $$cr?: ErrorTracker): Nullable<comparisonOperator_$4>;
    matchcomparisonOperator_$4_$0($$dpth: number, $$cr?: ErrorTracker): Nullable<comparisonOperator_$4_$0>;
    matchcomparisonOperator_$4_$0_1($$dpth: number, $$cr?: ErrorTracker): Nullable<comparisonOperator_$4_$0_1>;
    matchcomparisonOperator_$4_$0_2($$dpth: number, $$cr?: ErrorTracker): Nullable<comparisonOperator_$4_$0_2>;
    matchcomparisonOperator_$5($$dpth: number, $$cr?: ErrorTracker): Nullable<comparisonOperator_$5>;
    matchcomparisonOperator_$5_$0($$dpth: number, $$cr?: ErrorTracker): Nullable<comparisonOperator_$5_$0>;
    matchcomparisonOperator_$5_$0_1($$dpth: number, $$cr?: ErrorTracker): Nullable<comparisonOperator_$5_$0_1>;
    matchcomparisonOperator_$5_$0_2($$dpth: number, $$cr?: ErrorTracker): Nullable<comparisonOperator_$5_$0_2>;
    matchcomparisonOperator_$6($$dpth: number, $$cr?: ErrorTracker): Nullable<comparisonOperator_$6>;
    matchcomparisonOperator_$6_$0($$dpth: number, $$cr?: ErrorTracker): Nullable<comparisonOperator_$6_$0>;
    matchcomparisonOperator_$6_$0_1($$dpth: number, $$cr?: ErrorTracker): Nullable<comparisonOperator_$6_$0_1>;
    matchcomparisonOperator_$6_$0_2($$dpth: number, $$cr?: ErrorTracker): Nullable<comparisonOperator_$6_$0_2>;
    matchcomparisonOperator_$6_$1($$dpth: number, $$cr?: ErrorTracker): Nullable<comparisonOperator_$6_$1>;
    matchcomparisonOperator_$6_$1_1($$dpth: number, $$cr?: ErrorTracker): Nullable<comparisonOperator_$6_$1_1>;
    matchcomparisonOperator_$6_$1_2($$dpth: number, $$cr?: ErrorTracker): Nullable<comparisonOperator_$6_$1_2>;
    matchcomparisonOperator_$6_$2($$dpth: number, $$cr?: ErrorTracker): Nullable<comparisonOperator_$6_$2>;
    matchcomparisonOperator_$6_$2_1($$dpth: number, $$cr?: ErrorTracker): Nullable<comparisonOperator_$6_$2_1>;
    matchcomparisonOperator_$6_$2_2($$dpth: number, $$cr?: ErrorTracker): Nullable<comparisonOperator_$6_$2_2>;
    matchcomparisonOperator_$6_$3($$dpth: number, $$cr?: ErrorTracker): Nullable<comparisonOperator_$6_$3>;
    matchcomparisonOperator_$6_$3_1($$dpth: number, $$cr?: ErrorTracker): Nullable<comparisonOperator_$6_$3_1>;
    matchcomparisonOperator_$6_$3_2($$dpth: number, $$cr?: ErrorTracker): Nullable<comparisonOperator_$6_$3_2>;
    matchcomparisonOperator_$7($$dpth: number, $$cr?: ErrorTracker): Nullable<comparisonOperator_$7>;
    matchcomparisonOperator_$7_$0($$dpth: number, $$cr?: ErrorTracker): Nullable<comparisonOperator_$7_$0>;
    matchcomparisonOperator_$7_$0_1($$dpth: number, $$cr?: ErrorTracker): Nullable<comparisonOperator_$7_$0_1>;
    matchcomparisonOperator_$7_$0_2($$dpth: number, $$cr?: ErrorTracker): Nullable<comparisonOperator_$7_$0_2>;
    matchcomparisonOperator_$7_$1($$dpth: number, $$cr?: ErrorTracker): Nullable<comparisonOperator_$7_$1>;
    matchcomparisonOperator_$7_$1_1($$dpth: number, $$cr?: ErrorTracker): Nullable<comparisonOperator_$7_$1_1>;
    matchcomparisonOperator_$7_$1_2($$dpth: number, $$cr?: ErrorTracker): Nullable<comparisonOperator_$7_$1_2>;
    matchcomparisonOperator_$7_$2($$dpth: number, $$cr?: ErrorTracker): Nullable<comparisonOperator_$7_$2>;
    matchcomparisonOperator_$7_$2_1($$dpth: number, $$cr?: ErrorTracker): Nullable<comparisonOperator_$7_$2_1>;
    matchcomparisonOperator_$7_$2_2($$dpth: number, $$cr?: ErrorTracker): Nullable<comparisonOperator_$7_$2_2>;
    matchcomparisonOperator_$7_$3($$dpth: number, $$cr?: ErrorTracker): Nullable<comparisonOperator_$7_$3>;
    matchcomparisonOperator_$7_$3_1($$dpth: number, $$cr?: ErrorTracker): Nullable<comparisonOperator_$7_$3_1>;
    matchcomparisonOperator_$7_$3_2($$dpth: number, $$cr?: ErrorTracker): Nullable<comparisonOperator_$7_$3_2>;
    matchcomparisonOperator_$7_$4($$dpth: number, $$cr?: ErrorTracker): Nullable<comparisonOperator_$7_$4>;
    matchcomparisonOperator_$7_$4_1($$dpth: number, $$cr?: ErrorTracker): Nullable<comparisonOperator_$7_$4_1>;
    matchcomparisonOperator_$7_$4_2($$dpth: number, $$cr?: ErrorTracker): Nullable<comparisonOperator_$7_$4_2>;
    matchlogicalConjunction($$dpth: number, $$cr?: ErrorTracker): Nullable<logicalConjunction>;
    matchlogicalConjunction_$0($$dpth: number, $$cr?: ErrorTracker): Nullable<logicalConjunction_$0>;
    matchlogicalConjunction_$0_1($$dpth: number, $$cr?: ErrorTracker): Nullable<logicalConjunction_$0_1>;
    matchlogicalConjunction_$0_2($$dpth: number, $$cr?: ErrorTracker): Nullable<logicalConjunction_$0_2>;
    matchlogicalConjunction_$0_3($$dpth: number, $$cr?: ErrorTracker): Nullable<logicalConjunction_$0_3>;
    matchlogicalConjunction_$1($$dpth: number, $$cr?: ErrorTracker): Nullable<logicalConjunction_$1>;
    matchlogicalConjunction_$1_1($$dpth: number, $$cr?: ErrorTracker): Nullable<logicalConjunction_$1_1>;
    matchlogicalConjunction_$1_2($$dpth: number, $$cr?: ErrorTracker): Nullable<logicalConjunction_$1_2>;
    matchlogicalConjunction_$1_3($$dpth: number, $$cr?: ErrorTracker): Nullable<logicalConjunction_$1_3>;
    matchlogicalConjunctionOperator($$dpth: number, $$cr?: ErrorTracker): Nullable<logicalConjunctionOperator>;
    matchlogicalConjunctionOperator_$0($$dpth: number, $$cr?: ErrorTracker): Nullable<logicalConjunctionOperator_$0>;
    matchlogicalConjunctionOperator_$0_$0($$dpth: number, $$cr?: ErrorTracker): Nullable<logicalConjunctionOperator_$0_$0>;
    matchlogicalConjunctionOperator_$0_$0_1($$dpth: number, $$cr?: ErrorTracker): Nullable<logicalConjunctionOperator_$0_$0_1>;
    matchlogicalConjunctionOperator_$0_$0_2($$dpth: number, $$cr?: ErrorTracker): Nullable<logicalConjunctionOperator_$0_$0_2>;
    matchlogicalConjunctionOperator_$0_$1($$dpth: number, $$cr?: ErrorTracker): Nullable<logicalConjunctionOperator_$0_$1>;
    matchlogicalConjunctionOperator_$0_$1_1($$dpth: number, $$cr?: ErrorTracker): Nullable<logicalConjunctionOperator_$0_$1_1>;
    matchlogicalConjunctionOperator_$0_$1_2($$dpth: number, $$cr?: ErrorTracker): Nullable<logicalConjunctionOperator_$0_$1_2>;
    matchlogicalDisjunction($$dpth: number, $$cr?: ErrorTracker): Nullable<logicalDisjunction>;
    matchlogicalDisjunction_$0($$dpth: number, $$cr?: ErrorTracker): Nullable<logicalDisjunction_$0>;
    matchlogicalDisjunction_$0_1($$dpth: number, $$cr?: ErrorTracker): Nullable<logicalDisjunction_$0_1>;
    matchlogicalDisjunction_$0_2($$dpth: number, $$cr?: ErrorTracker): Nullable<logicalDisjunction_$0_2>;
    matchlogicalDisjunction_$0_3($$dpth: number, $$cr?: ErrorTracker): Nullable<logicalDisjunction_$0_3>;
    matchlogicalDisjunction_$1($$dpth: number, $$cr?: ErrorTracker): Nullable<logicalDisjunction_$1>;
    matchlogicalDisjunction_$1_1($$dpth: number, $$cr?: ErrorTracker): Nullable<logicalDisjunction_$1_1>;
    matchlogicalDisjunction_$1_2($$dpth: number, $$cr?: ErrorTracker): Nullable<logicalDisjunction_$1_2>;
    matchlogicalDisjunction_$1_3($$dpth: number, $$cr?: ErrorTracker): Nullable<logicalDisjunction_$1_3>;
    matchlogicalDisjunctionOperator($$dpth: number, $$cr?: ErrorTracker): Nullable<logicalDisjunctionOperator>;
    matchlogicalDisjunctionOperator_$0($$dpth: number, $$cr?: ErrorTracker): Nullable<logicalDisjunctionOperator_$0>;
    matchlogicalDisjunctionOperator_$0_$0($$dpth: number, $$cr?: ErrorTracker): Nullable<logicalDisjunctionOperator_$0_$0>;
    matchlogicalDisjunctionOperator_$0_$0_1($$dpth: number, $$cr?: ErrorTracker): Nullable<logicalDisjunctionOperator_$0_$0_1>;
    matchlogicalDisjunctionOperator_$0_$0_2($$dpth: number, $$cr?: ErrorTracker): Nullable<logicalDisjunctionOperator_$0_$0_2>;
    matchlogicalDisjunctionOperator_$0_$1($$dpth: number, $$cr?: ErrorTracker): Nullable<logicalDisjunctionOperator_$0_$1>;
    matchlogicalDisjunctionOperator_$0_$1_1($$dpth: number, $$cr?: ErrorTracker): Nullable<logicalDisjunctionOperator_$0_$1_1>;
    matchlogicalDisjunctionOperator_$0_$1_2($$dpth: number, $$cr?: ErrorTracker): Nullable<logicalDisjunctionOperator_$0_$1_2>;
    matchsubstitution($$dpth: number, $$cr?: ErrorTracker): Nullable<substitution>;
    matchsubstitution_$0($$dpth: number, $$cr?: ErrorTracker): Nullable<substitution_$0>;
    matchsubstitution_$0_1($$dpth: number, $$cr?: ErrorTracker): Nullable<substitution_$0_1>;
    matchsubstitution_$0_2($$dpth: number, $$cr?: ErrorTracker): Nullable<substitution_$0_2>;
    matchsubstitution_$1($$dpth: number, $$cr?: ErrorTracker): Nullable<substitution_$1>;
    matchsubstitution_$1_1($$dpth: number, $$cr?: ErrorTracker): Nullable<substitution_$1_1>;
    matchsubstitution_$1_2($$dpth: number, $$cr?: ErrorTracker): Nullable<substitution_$1_2>;
    matchsubstitution_$1_3($$dpth: number, $$cr?: ErrorTracker): Nullable<substitution_$1_3>;
    matchsubstitution_$2($$dpth: number, $$cr?: ErrorTracker): Nullable<substitution_$2>;
    matchsubstitution_$2_1($$dpth: number, $$cr?: ErrorTracker): Nullable<substitution_$2_1>;
    matchsubstitution_$2_2($$dpth: number, $$cr?: ErrorTracker): Nullable<substitution_$2_2>;
    matchsubstitution_$2_3($$dpth: number, $$cr?: ErrorTracker): Nullable<substitution_$2_3>;
    matchsubstitutionOperator($$dpth: number, $$cr?: ErrorTracker): Nullable<substitutionOperator>;
    matchsubstitutionOperator_1($$dpth: number, $$cr?: ErrorTracker): Nullable<substitutionOperator_1>;
    matchsubstitutionOperator_2($$dpth: number, $$cr?: ErrorTracker): Nullable<substitutionOperator_2>;
    matchsubstitutionOperator_$0($$dpth: number, $$cr?: ErrorTracker): Nullable<substitutionOperator_$0>;
    matchsubstitutionOperator_$0_$0($$dpth: number, $$cr?: ErrorTracker): Nullable<substitutionOperator_$0_$0>;
    matchsubstitutionOperator_$0_$0_1($$dpth: number, $$cr?: ErrorTracker): Nullable<substitutionOperator_$0_$0_1>;
    matchsubstitutionOperator_$0_$0_2($$dpth: number, $$cr?: ErrorTracker): Nullable<substitutionOperator_$0_$0_2>;
    matchsubstitutionOperator_$1($$dpth: number, $$cr?: ErrorTracker): Nullable<substitutionOperator_$1>;
    matchsubstitutionOperator_$1_$0($$dpth: number, $$cr?: ErrorTracker): Nullable<substitutionOperator_$1_$0>;
    matchsubstitutionOperator_$1_$0_1($$dpth: number, $$cr?: ErrorTracker): Nullable<substitutionOperator_$1_$0_1>;
    matchsubstitutionOperator_$1_$0_2($$dpth: number, $$cr?: ErrorTracker): Nullable<substitutionOperator_$1_$0_2>;
    matchsubstitutionOperator_$1_$1($$dpth: number, $$cr?: ErrorTracker): Nullable<substitutionOperator_$1_$1>;
    matchsubstitutionOperator_$1_$1_1($$dpth: number, $$cr?: ErrorTracker): Nullable<substitutionOperator_$1_$1_1>;
    matchsubstitutionOperator_$1_$1_2($$dpth: number, $$cr?: ErrorTracker): Nullable<substitutionOperator_$1_$1_2>;
    matchsubstitutionOperation($$dpth: number, $$cr?: ErrorTracker): Nullable<substitutionOperation>;
    matchsubstitutionOperation_$0($$dpth: number, $$cr?: ErrorTracker): Nullable<substitutionOperation_$0>;
    matchsubstitutionOperation_$0_1($$dpth: number, $$cr?: ErrorTracker): Nullable<substitutionOperation_$0_1>;
    matchsubstitutionOperation_$0_2($$dpth: number, $$cr?: ErrorTracker): Nullable<substitutionOperation_$0_2>;
    matchsubstitutionOperation_$1($$dpth: number, $$cr?: ErrorTracker): Nullable<substitutionOperation_$1>;
    matchsubstitutionOperation_$1_1($$dpth: number, $$cr?: ErrorTracker): Nullable<substitutionOperation_$1_1>;
    matchsubstitutionOperation_$1_2($$dpth: number, $$cr?: ErrorTracker): Nullable<substitutionOperation_$1_2>;
    matchsubstitutionOperation_$1_3($$dpth: number, $$cr?: ErrorTracker): Nullable<substitutionOperation_$1_3>;
    matchsubstitutionOperation_$2($$dpth: number, $$cr?: ErrorTracker): Nullable<substitutionOperation_$2>;
    matchsubstitutionOperation_$2_1($$dpth: number, $$cr?: ErrorTracker): Nullable<substitutionOperation_$2_1>;
    matchsubstitutionOperation_$2_2($$dpth: number, $$cr?: ErrorTracker): Nullable<substitutionOperation_$2_2>;
    matchsubstitutionOperation_$2_3($$dpth: number, $$cr?: ErrorTracker): Nullable<substitutionOperation_$2_3>;
    matchsubstitutionOperationOperator($$dpth: number, $$cr?: ErrorTracker): Nullable<substitutionOperationOperator>;
    matchsubstitutionOperationOperator_1($$dpth: number, $$cr?: ErrorTracker): Nullable<substitutionOperationOperator_1>;
    matchsubstitutionOperationOperator_2($$dpth: number, $$cr?: ErrorTracker): Nullable<substitutionOperationOperator_2>;
    matchsubstitutionOperationOperator_3($$dpth: number, $$cr?: ErrorTracker): Nullable<substitutionOperationOperator_3>;
    matchsubstitutionOperationOperator_4($$dpth: number, $$cr?: ErrorTracker): Nullable<substitutionOperationOperator_4>;
    matchsubstitutionOperationOperator_5($$dpth: number, $$cr?: ErrorTracker): Nullable<substitutionOperationOperator_5>;
    matchsubstitutionOperationOperator_6($$dpth: number, $$cr?: ErrorTracker): Nullable<substitutionOperationOperator_6>;
    matchsubstitutionOperationOperator_7($$dpth: number, $$cr?: ErrorTracker): Nullable<substitutionOperationOperator_7>;
    matchsubstitutionOperationOperator_8($$dpth: number, $$cr?: ErrorTracker): Nullable<substitutionOperationOperator_8>;
    matchsubstitutionOperationOperator_9($$dpth: number, $$cr?: ErrorTracker): Nullable<substitutionOperationOperator_9>;
    matchsubstitutionOperationOperator_10($$dpth: number, $$cr?: ErrorTracker): Nullable<substitutionOperationOperator_10>;
    matchsubstitutionOperationOperator_11($$dpth: number, $$cr?: ErrorTracker): Nullable<substitutionOperationOperator_11>;
    matchsubstitutionOperationOperator_$0($$dpth: number, $$cr?: ErrorTracker): Nullable<substitutionOperationOperator_$0>;
    matchsubstitutionOperationOperator_$0_$0($$dpth: number, $$cr?: ErrorTracker): Nullable<substitutionOperationOperator_$0_$0>;
    matchsubstitutionOperationOperator_$0_$0_1($$dpth: number, $$cr?: ErrorTracker): Nullable<substitutionOperationOperator_$0_$0_1>;
    matchsubstitutionOperationOperator_$0_$0_2($$dpth: number, $$cr?: ErrorTracker): Nullable<substitutionOperationOperator_$0_$0_2>;
    matchsubstitutionOperationOperator_$0_$1($$dpth: number, $$cr?: ErrorTracker): Nullable<substitutionOperationOperator_$0_$1>;
    matchsubstitutionOperationOperator_$0_$1_1($$dpth: number, $$cr?: ErrorTracker): Nullable<substitutionOperationOperator_$0_$1_1>;
    matchsubstitutionOperationOperator_$0_$1_2($$dpth: number, $$cr?: ErrorTracker): Nullable<substitutionOperationOperator_$0_$1_2>;
    matchsubstitutionOperationOperator_$1($$dpth: number, $$cr?: ErrorTracker): Nullable<substitutionOperationOperator_$1>;
    matchsubstitutionOperationOperator_$1_$0($$dpth: number, $$cr?: ErrorTracker): Nullable<substitutionOperationOperator_$1_$0>;
    matchsubstitutionOperationOperator_$1_$0_1($$dpth: number, $$cr?: ErrorTracker): Nullable<substitutionOperationOperator_$1_$0_1>;
    matchsubstitutionOperationOperator_$1_$0_2($$dpth: number, $$cr?: ErrorTracker): Nullable<substitutionOperationOperator_$1_$0_2>;
    matchsubstitutionOperationOperator_$1_$1($$dpth: number, $$cr?: ErrorTracker): Nullable<substitutionOperationOperator_$1_$1>;
    matchsubstitutionOperationOperator_$1_$1_1($$dpth: number, $$cr?: ErrorTracker): Nullable<substitutionOperationOperator_$1_$1_1>;
    matchsubstitutionOperationOperator_$1_$1_2($$dpth: number, $$cr?: ErrorTracker): Nullable<substitutionOperationOperator_$1_$1_2>;
    matchsubstitutionOperationOperator_$2($$dpth: number, $$cr?: ErrorTracker): Nullable<substitutionOperationOperator_$2>;
    matchsubstitutionOperationOperator_$2_$0($$dpth: number, $$cr?: ErrorTracker): Nullable<substitutionOperationOperator_$2_$0>;
    matchsubstitutionOperationOperator_$2_$0_1($$dpth: number, $$cr?: ErrorTracker): Nullable<substitutionOperationOperator_$2_$0_1>;
    matchsubstitutionOperationOperator_$2_$0_2($$dpth: number, $$cr?: ErrorTracker): Nullable<substitutionOperationOperator_$2_$0_2>;
    matchsubstitutionOperationOperator_$2_$1($$dpth: number, $$cr?: ErrorTracker): Nullable<substitutionOperationOperator_$2_$1>;
    matchsubstitutionOperationOperator_$2_$1_1($$dpth: number, $$cr?: ErrorTracker): Nullable<substitutionOperationOperator_$2_$1_1>;
    matchsubstitutionOperationOperator_$2_$1_2($$dpth: number, $$cr?: ErrorTracker): Nullable<substitutionOperationOperator_$2_$1_2>;
    matchsubstitutionOperationOperator_$3($$dpth: number, $$cr?: ErrorTracker): Nullable<substitutionOperationOperator_$3>;
    matchsubstitutionOperationOperator_$3_$0($$dpth: number, $$cr?: ErrorTracker): Nullable<substitutionOperationOperator_$3_$0>;
    matchsubstitutionOperationOperator_$3_$0_1($$dpth: number, $$cr?: ErrorTracker): Nullable<substitutionOperationOperator_$3_$0_1>;
    matchsubstitutionOperationOperator_$3_$0_2($$dpth: number, $$cr?: ErrorTracker): Nullable<substitutionOperationOperator_$3_$0_2>;
    matchsubstitutionOperationOperator_$3_$1($$dpth: number, $$cr?: ErrorTracker): Nullable<substitutionOperationOperator_$3_$1>;
    matchsubstitutionOperationOperator_$3_$1_1($$dpth: number, $$cr?: ErrorTracker): Nullable<substitutionOperationOperator_$3_$1_1>;
    matchsubstitutionOperationOperator_$3_$1_2($$dpth: number, $$cr?: ErrorTracker): Nullable<substitutionOperationOperator_$3_$1_2>;
    matchsubstitutionOperationOperator_$4($$dpth: number, $$cr?: ErrorTracker): Nullable<substitutionOperationOperator_$4>;
    matchsubstitutionOperationOperator_$4_$0($$dpth: number, $$cr?: ErrorTracker): Nullable<substitutionOperationOperator_$4_$0>;
    matchsubstitutionOperationOperator_$4_$0_1($$dpth: number, $$cr?: ErrorTracker): Nullable<substitutionOperationOperator_$4_$0_1>;
    matchsubstitutionOperationOperator_$4_$0_2($$dpth: number, $$cr?: ErrorTracker): Nullable<substitutionOperationOperator_$4_$0_2>;
    matchsubstitutionOperationOperator_$4_$1($$dpth: number, $$cr?: ErrorTracker): Nullable<substitutionOperationOperator_$4_$1>;
    matchsubstitutionOperationOperator_$4_$1_1($$dpth: number, $$cr?: ErrorTracker): Nullable<substitutionOperationOperator_$4_$1_1>;
    matchsubstitutionOperationOperator_$4_$1_2($$dpth: number, $$cr?: ErrorTracker): Nullable<substitutionOperationOperator_$4_$1_2>;
    matchsubstitutionOperationOperator_$5($$dpth: number, $$cr?: ErrorTracker): Nullable<substitutionOperationOperator_$5>;
    matchsubstitutionOperationOperator_$5_$0($$dpth: number, $$cr?: ErrorTracker): Nullable<substitutionOperationOperator_$5_$0>;
    matchsubstitutionOperationOperator_$5_$0_1($$dpth: number, $$cr?: ErrorTracker): Nullable<substitutionOperationOperator_$5_$0_1>;
    matchsubstitutionOperationOperator_$5_$0_2($$dpth: number, $$cr?: ErrorTracker): Nullable<substitutionOperationOperator_$5_$0_2>;
    matchsubstitutionOperationOperator_$5_$1($$dpth: number, $$cr?: ErrorTracker): Nullable<substitutionOperationOperator_$5_$1>;
    matchsubstitutionOperationOperator_$5_$1_1($$dpth: number, $$cr?: ErrorTracker): Nullable<substitutionOperationOperator_$5_$1_1>;
    matchsubstitutionOperationOperator_$5_$1_2($$dpth: number, $$cr?: ErrorTracker): Nullable<substitutionOperationOperator_$5_$1_2>;
    matchsubstitutionOperationOperator_$5_$2($$dpth: number, $$cr?: ErrorTracker): Nullable<substitutionOperationOperator_$5_$2>;
    matchsubstitutionOperationOperator_$5_$2_1($$dpth: number, $$cr?: ErrorTracker): Nullable<substitutionOperationOperator_$5_$2_1>;
    matchsubstitutionOperationOperator_$5_$2_2($$dpth: number, $$cr?: ErrorTracker): Nullable<substitutionOperationOperator_$5_$2_2>;
    matchsubstitutionOperationOperator_$6($$dpth: number, $$cr?: ErrorTracker): Nullable<substitutionOperationOperator_$6>;
    matchsubstitutionOperationOperator_$6_$0($$dpth: number, $$cr?: ErrorTracker): Nullable<substitutionOperationOperator_$6_$0>;
    matchsubstitutionOperationOperator_$6_$0_1($$dpth: number, $$cr?: ErrorTracker): Nullable<substitutionOperationOperator_$6_$0_1>;
    matchsubstitutionOperationOperator_$6_$0_2($$dpth: number, $$cr?: ErrorTracker): Nullable<substitutionOperationOperator_$6_$0_2>;
    matchsubstitutionOperationOperator_$6_$1($$dpth: number, $$cr?: ErrorTracker): Nullable<substitutionOperationOperator_$6_$1>;
    matchsubstitutionOperationOperator_$6_$1_1($$dpth: number, $$cr?: ErrorTracker): Nullable<substitutionOperationOperator_$6_$1_1>;
    matchsubstitutionOperationOperator_$6_$1_2($$dpth: number, $$cr?: ErrorTracker): Nullable<substitutionOperationOperator_$6_$1_2>;
    matchsubstitutionOperationOperator_$6_$2($$dpth: number, $$cr?: ErrorTracker): Nullable<substitutionOperationOperator_$6_$2>;
    matchsubstitutionOperationOperator_$6_$2_1($$dpth: number, $$cr?: ErrorTracker): Nullable<substitutionOperationOperator_$6_$2_1>;
    matchsubstitutionOperationOperator_$6_$2_2($$dpth: number, $$cr?: ErrorTracker): Nullable<substitutionOperationOperator_$6_$2_2>;
    matchsubstitutionOperationOperator_$7($$dpth: number, $$cr?: ErrorTracker): Nullable<substitutionOperationOperator_$7>;
    matchsubstitutionOperationOperator_$7_$0($$dpth: number, $$cr?: ErrorTracker): Nullable<substitutionOperationOperator_$7_$0>;
    matchsubstitutionOperationOperator_$7_$0_1($$dpth: number, $$cr?: ErrorTracker): Nullable<substitutionOperationOperator_$7_$0_1>;
    matchsubstitutionOperationOperator_$7_$0_2($$dpth: number, $$cr?: ErrorTracker): Nullable<substitutionOperationOperator_$7_$0_2>;
    matchsubstitutionOperationOperator_$7_$1($$dpth: number, $$cr?: ErrorTracker): Nullable<substitutionOperationOperator_$7_$1>;
    matchsubstitutionOperationOperator_$7_$1_1($$dpth: number, $$cr?: ErrorTracker): Nullable<substitutionOperationOperator_$7_$1_1>;
    matchsubstitutionOperationOperator_$7_$1_2($$dpth: number, $$cr?: ErrorTracker): Nullable<substitutionOperationOperator_$7_$1_2>;
    matchsubstitutionOperationOperator_$7_$2($$dpth: number, $$cr?: ErrorTracker): Nullable<substitutionOperationOperator_$7_$2>;
    matchsubstitutionOperationOperator_$7_$2_1($$dpth: number, $$cr?: ErrorTracker): Nullable<substitutionOperationOperator_$7_$2_1>;
    matchsubstitutionOperationOperator_$7_$2_2($$dpth: number, $$cr?: ErrorTracker): Nullable<substitutionOperationOperator_$7_$2_2>;
    matchsubstitutionOperationOperator_$8($$dpth: number, $$cr?: ErrorTracker): Nullable<substitutionOperationOperator_$8>;
    matchsubstitutionOperationOperator_$8_$0($$dpth: number, $$cr?: ErrorTracker): Nullable<substitutionOperationOperator_$8_$0>;
    matchsubstitutionOperationOperator_$8_$0_1($$dpth: number, $$cr?: ErrorTracker): Nullable<substitutionOperationOperator_$8_$0_1>;
    matchsubstitutionOperationOperator_$8_$0_2($$dpth: number, $$cr?: ErrorTracker): Nullable<substitutionOperationOperator_$8_$0_2>;
    matchsubstitutionOperationOperator_$8_$1($$dpth: number, $$cr?: ErrorTracker): Nullable<substitutionOperationOperator_$8_$1>;
    matchsubstitutionOperationOperator_$8_$1_1($$dpth: number, $$cr?: ErrorTracker): Nullable<substitutionOperationOperator_$8_$1_1>;
    matchsubstitutionOperationOperator_$8_$1_2($$dpth: number, $$cr?: ErrorTracker): Nullable<substitutionOperationOperator_$8_$1_2>;
    matchsubstitutionOperationOperator_$8_$2($$dpth: number, $$cr?: ErrorTracker): Nullable<substitutionOperationOperator_$8_$2>;
    matchsubstitutionOperationOperator_$8_$2_1($$dpth: number, $$cr?: ErrorTracker): Nullable<substitutionOperationOperator_$8_$2_1>;
    matchsubstitutionOperationOperator_$8_$2_2($$dpth: number, $$cr?: ErrorTracker): Nullable<substitutionOperationOperator_$8_$2_2>;
    matchsubstitutionOperationOperator_$9($$dpth: number, $$cr?: ErrorTracker): Nullable<substitutionOperationOperator_$9>;
    matchsubstitutionOperationOperator_$9_$0($$dpth: number, $$cr?: ErrorTracker): Nullable<substitutionOperationOperator_$9_$0>;
    matchsubstitutionOperationOperator_$9_$0_1($$dpth: number, $$cr?: ErrorTracker): Nullable<substitutionOperationOperator_$9_$0_1>;
    matchsubstitutionOperationOperator_$9_$0_2($$dpth: number, $$cr?: ErrorTracker): Nullable<substitutionOperationOperator_$9_$0_2>;
    matchsubstitutionOperationOperator_$9_$1($$dpth: number, $$cr?: ErrorTracker): Nullable<substitutionOperationOperator_$9_$1>;
    matchsubstitutionOperationOperator_$9_$1_1($$dpth: number, $$cr?: ErrorTracker): Nullable<substitutionOperationOperator_$9_$1_1>;
    matchsubstitutionOperationOperator_$9_$1_2($$dpth: number, $$cr?: ErrorTracker): Nullable<substitutionOperationOperator_$9_$1_2>;
    matchsubstitutionOperationOperator_$9_$2($$dpth: number, $$cr?: ErrorTracker): Nullable<substitutionOperationOperator_$9_$2>;
    matchsubstitutionOperationOperator_$9_$2_1($$dpth: number, $$cr?: ErrorTracker): Nullable<substitutionOperationOperator_$9_$2_1>;
    matchsubstitutionOperationOperator_$9_$2_2($$dpth: number, $$cr?: ErrorTracker): Nullable<substitutionOperationOperator_$9_$2_2>;
    matchsubstitutionOperationOperator_$10($$dpth: number, $$cr?: ErrorTracker): Nullable<substitutionOperationOperator_$10>;
    matchsubstitutionOperationOperator_$10_$0($$dpth: number, $$cr?: ErrorTracker): Nullable<substitutionOperationOperator_$10_$0>;
    matchsubstitutionOperationOperator_$10_$0_1($$dpth: number, $$cr?: ErrorTracker): Nullable<substitutionOperationOperator_$10_$0_1>;
    matchsubstitutionOperationOperator_$10_$0_2($$dpth: number, $$cr?: ErrorTracker): Nullable<substitutionOperationOperator_$10_$0_2>;
    matchsubstitutionOperationOperator_$10_$1($$dpth: number, $$cr?: ErrorTracker): Nullable<substitutionOperationOperator_$10_$1>;
    matchsubstitutionOperationOperator_$10_$1_1($$dpth: number, $$cr?: ErrorTracker): Nullable<substitutionOperationOperator_$10_$1_1>;
    matchsubstitutionOperationOperator_$10_$1_2($$dpth: number, $$cr?: ErrorTracker): Nullable<substitutionOperationOperator_$10_$1_2>;
    matchcommaOperation($$dpth: number, $$cr?: ErrorTracker): Nullable<commaOperation>;
    matchcommaOperation_$0($$dpth: number, $$cr?: ErrorTracker): Nullable<commaOperation_$0>;
    matcharrayCall($$dpth: number, $$cr?: ErrorTracker): Nullable<arrayCall>;
    matcharrayCall_$0($$dpth: number, $$cr?: ErrorTracker): Nullable<arrayCall_$0>;
    matcharrayCall_$0_1($$dpth: number, $$cr?: ErrorTracker): Nullable<arrayCall_$0_1>;
    matcharrayCall_$0_2($$dpth: number, $$cr?: ErrorTracker): Nullable<arrayCall_$0_2>;
    matcharrayCall_$0_3($$dpth: number, $$cr?: ErrorTracker): Nullable<arrayCall_$0_3>;
    matcharrayCall_$1($$dpth: number, $$cr?: ErrorTracker): Nullable<arrayCall_$1>;
    matcharrayCall_$1_1($$dpth: number, $$cr?: ErrorTracker): Nullable<arrayCall_$1_1>;
    matcharrayCall_$1_2($$dpth: number, $$cr?: ErrorTracker): Nullable<arrayCall_$1_2>;
    matcharrayCall_$1_3($$dpth: number, $$cr?: ErrorTracker): Nullable<arrayCall_$1_3>;
    matchfunctionCall($$dpth: number, $$cr?: ErrorTracker): Nullable<functionCall>;
    matchfunctionCall_$0($$dpth: number, $$cr?: ErrorTracker): Nullable<functionCall_$0>;
    matchfunctionCall_$0_1($$dpth: number, $$cr?: ErrorTracker): Nullable<functionCall_$0_1>;
    matchfunctionCall_$0_2($$dpth: number, $$cr?: ErrorTracker): Nullable<functionCall_$0_2>;
    matchfunctionCall_$0_3($$dpth: number, $$cr?: ErrorTracker): Nullable<functionCall_$0_3>;
    matchfunctionCall_$1($$dpth: number, $$cr?: ErrorTracker): Nullable<functionCall_$1>;
    matchfunctionCall_$1_1($$dpth: number, $$cr?: ErrorTracker): Nullable<functionCall_$1_1>;
    matchfunctionCall_$1_2($$dpth: number, $$cr?: ErrorTracker): Nullable<functionCall_$1_2>;
    matchfunctionCall_$1_3($$dpth: number, $$cr?: ErrorTracker): Nullable<functionCall_$1_3>;
    matchsigned($$dpth: number, $$cr?: ErrorTracker): Nullable<signed>;
    matchsigned_$0($$dpth: number, $$cr?: ErrorTracker): Nullable<signed_$0>;
    matchsigned_$0_1($$dpth: number, $$cr?: ErrorTracker): Nullable<signed_$0_1>;
    matchsigned_$0_2($$dpth: number, $$cr?: ErrorTracker): Nullable<signed_$0_2>;
    matchvariable($$dpth: number, $$cr?: ErrorTracker): Nullable<variable>;
    matchvariable_1($$dpth: number, $$cr?: ErrorTracker): Nullable<variable_1>;
    matchvariable_2($$dpth: number, $$cr?: ErrorTracker): Nullable<variable_2>;
    matchidentifer($$dpth: number, $$cr?: ErrorTracker): Nullable<identifer>;
    matchvariableLocal($$dpth: number, $$cr?: ErrorTracker): Nullable<variableLocal>;
    matchliteral($$dpth: number, $$cr?: ErrorTracker): Nullable<literal>;
    matchliteral_1($$dpth: number, $$cr?: ErrorTracker): Nullable<literal_1>;
    matchliteral_2($$dpth: number, $$cr?: ErrorTracker): Nullable<literal_2>;
    matchliteral_3($$dpth: number, $$cr?: ErrorTracker): Nullable<literal_3>;
    matchliteral_4($$dpth: number, $$cr?: ErrorTracker): Nullable<literal_4>;
    matchliteral_5($$dpth: number, $$cr?: ErrorTracker): Nullable<literal_5>;
    matchliteral_6($$dpth: number, $$cr?: ErrorTracker): Nullable<literal_6>;
    matchheredoc($$dpth: number, $$cr?: ErrorTracker): Nullable<heredoc>;
    matchheredocInner($$dpth: number, $$cr?: ErrorTracker): Nullable<heredocInner>;
    matchheredocInner_1($$dpth: number, $$cr?: ErrorTracker): Nullable<heredocInner_1>;
    matchheredocInner_2($$dpth: number, $$cr?: ErrorTracker): Nullable<heredocInner_2>;
    matchheredocInner_3($$dpth: number, $$cr?: ErrorTracker): Nullable<heredocInner_3>;
    matchheredocRaw($$dpth: number, $$cr?: ErrorTracker): Nullable<heredocRaw>;
    matchheredocRawInner($$dpth: number, $$cr?: ErrorTracker): Nullable<heredocRawInner>;
    matchheredocRawInner_1($$dpth: number, $$cr?: ErrorTracker): Nullable<heredocRawInner_1>;
    matchheredocRawInner_2($$dpth: number, $$cr?: ErrorTracker): Nullable<heredocRawInner_2>;
    matchheredocRawInner_3($$dpth: number, $$cr?: ErrorTracker): Nullable<heredocRawInner_3>;
    matchliteralString($$dpth: number, $$cr?: ErrorTracker): Nullable<literalString>;
    matchliteralStringInner($$dpth: number, $$cr?: ErrorTracker): Nullable<literalStringInner>;
    matchliteralStringInner_1($$dpth: number, $$cr?: ErrorTracker): Nullable<literalStringInner_1>;
    matchliteralStringInner_2($$dpth: number, $$cr?: ErrorTracker): Nullable<literalStringInner_2>;
    matchliteralStringInner_3($$dpth: number, $$cr?: ErrorTracker): Nullable<literalStringInner_3>;
    matchliteralStringInner_4($$dpth: number, $$cr?: ErrorTracker): Nullable<literalStringInner_4>;
    matchliteralStringRaw($$dpth: number, $$cr?: ErrorTracker): Nullable<literalStringRaw>;
    matchliteralStringRawInner($$dpth: number, $$cr?: ErrorTracker): Nullable<literalStringRawInner>;
    matchliteralStringRawInner_1($$dpth: number, $$cr?: ErrorTracker): Nullable<literalStringRawInner_1>;
    matchliteralStringRawInner_2($$dpth: number, $$cr?: ErrorTracker): Nullable<literalStringRawInner_2>;
    matchliteralStringRawInner_3($$dpth: number, $$cr?: ErrorTracker): Nullable<literalStringRawInner_3>;
    matchliteralStringRawInner_4($$dpth: number, $$cr?: ErrorTracker): Nullable<literalStringRawInner_4>;
    matchreal($$dpth: number, $$cr?: ErrorTracker): Nullable<real>;
    matchreal_$0($$dpth: number, $$cr?: ErrorTracker): Nullable<real_$0>;
    matchreal_$0_1($$dpth: number, $$cr?: ErrorTracker): Nullable<real_$0_1>;
    matchreal_$0_2($$dpth: number, $$cr?: ErrorTracker): Nullable<real_$0_2>;
    matchint($$dpth: number, $$cr?: ErrorTracker): Nullable<int>;
    matchint_1($$dpth: number, $$cr?: ErrorTracker): Nullable<int_1>;
    matchint_2($$dpth: number, $$cr?: ErrorTracker): Nullable<int_2>;
    matchint_3($$dpth: number, $$cr?: ErrorTracker): Nullable<int_3>;
    matchint_x10($$dpth: number, $$cr?: ErrorTracker): Nullable<int_x10>;
    matchint_x10_$0($$dpth: number, $$cr?: ErrorTracker): Nullable<int_x10_$0>;
    matchint_x10_$0_1($$dpth: number, $$cr?: ErrorTracker): Nullable<int_x10_$0_1>;
    matchint_x10_$0_2($$dpth: number, $$cr?: ErrorTracker): Nullable<int_x10_$0_2>;
    matchint_x10Inner($$dpth: number, $$cr?: ErrorTracker): Nullable<int_x10Inner>;
    matchint_x10Inner_1($$dpth: number, $$cr?: ErrorTracker): Nullable<int_x10Inner_1>;
    matchint_x10Inner_2($$dpth: number, $$cr?: ErrorTracker): Nullable<int_x10Inner_2>;
    matchint_x2($$dpth: number, $$cr?: ErrorTracker): Nullable<int_x2>;
    matchint_x2Inner($$dpth: number, $$cr?: ErrorTracker): Nullable<int_x2Inner>;
    matchint_x2Inner_1($$dpth: number, $$cr?: ErrorTracker): Nullable<int_x2Inner_1>;
    matchint_x2Inner_2($$dpth: number, $$cr?: ErrorTracker): Nullable<int_x2Inner_2>;
    matchint_x16($$dpth: number, $$cr?: ErrorTracker): Nullable<int_x16>;
    matchint_x16Inner($$dpth: number, $$cr?: ErrorTracker): Nullable<int_x16Inner>;
    matchint_x16Inner_1($$dpth: number, $$cr?: ErrorTracker): Nullable<int_x16Inner_1>;
    matchint_x16Inner_2($$dpth: number, $$cr?: ErrorTracker): Nullable<int_x16Inner_2>;
    matchpreprocess($$dpth: number, $$cr?: ErrorTracker): Nullable<preprocess>;
    matchpreprocess_1($$dpth: number, $$cr?: ErrorTracker): Nullable<preprocess_1>;
    matchpreprocess_2($$dpth: number, $$cr?: ErrorTracker): Nullable<preprocess_2>;
    matchpreprocessGlobalDefine($$dpth: number, $$cr?: ErrorTracker): Nullable<preprocessGlobalDefine>;
    matchpreprocessGlobalDefineName($$dpth: number, $$cr?: ErrorTracker): Nullable<preprocessGlobalDefineName>;
    matchpreprocessDefine($$dpth: number, $$cr?: ErrorTracker): Nullable<preprocessDefine>;
    matchpreprocessDefineName($$dpth: number, $$cr?: ErrorTracker): Nullable<preprocessDefineName>;
    matchmaybePreprocess($$dpth: number, $$cr?: ErrorTracker): Nullable<maybePreprocess>;
    matchpreprocessBeforeCharacterSentence($$dpth: number, $$cr?: ErrorTracker): Nullable<preprocessBeforeCharacterSentence>;
    matchpreprocessBeforeCharacterSentence_1($$dpth: number, $$cr?: ErrorTracker): Nullable<preprocessBeforeCharacterSentence_1>;
    matchpreprocessBeforeCharacterSentence_2($$dpth: number, $$cr?: ErrorTracker): Nullable<preprocessBeforeCharacterSentence_2>;
    matchpreprocessAfterCharacterSentence($$dpth: number, $$cr?: ErrorTracker): Nullable<preprocessAfterCharacterSentence>;
    matchpreprocessAfterCharacterSentence_1($$dpth: number, $$cr?: ErrorTracker): Nullable<preprocessAfterCharacterSentence_1>;
    matchpreprocessAfterCharacterSentence_2($$dpth: number, $$cr?: ErrorTracker): Nullable<preprocessAfterCharacterSentence_2>;
    test(): boolean;
    parse(): ParseResult;
    mark(): PosInfo;
    private loop;
    private run;
    private choice;
    private regexAccept;
    private tryConsume;
    private noConsume;
    private negate;
    private memoise;
    private match$EOF;
}
export declare function parse(s: string): ParseResult;
export interface ParseResult {
    ast: Nullable<start>;
    errs: SyntaxErr[];
}
export interface PosInfo {
    readonly overallPos: number;
    readonly line: number;
    readonly offset: number;
}
export interface RegexMatch {
    readonly kind: "RegexMatch";
    readonly negated: boolean;
    readonly literal: string;
}
export type EOFMatch = {
    kind: "EOF";
    negated: boolean;
};
export type MatchAttempt = RegexMatch | EOFMatch;
export declare class SyntaxErr {
    pos: PosInfo;
    expmatches: MatchAttempt[];
    constructor(pos: PosInfo, expmatches: MatchAttempt[]);
    toString(): string;
}
declare class ErrorTracker {
    private mxpos;
    private regexset;
    private pmatches;
    record(pos: PosInfo, result: any, att: MatchAttempt): void;
    getErr(): SyntaxErr | null;
}
export {};
//# sourceMappingURL=parser.d.ts.map
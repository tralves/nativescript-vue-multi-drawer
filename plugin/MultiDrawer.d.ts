import Vue, { NativeScriptVue } from 'nativescript-vue';
import { View } from 'tns-core-modules/ui/core/view';
export declare let defaultOptions: {
    debug: boolean;
    backdropColor: string;
    left: {
        width: string;
        height: any;
        enabled: boolean;
        fixed: boolean;
        backgroundColor: string;
        canSwipeOpen: boolean;
        swipeOpenTriggerWidth: number;
        swipeOpenTriggerHeight: any;
        swipeOpenTriggerMinDrag: number;
        swipeCloseTriggerMinDrag: number;
        swipeOpenTriggerProperties: {};
        animation: {
            openDuration: number;
            closeDuration: number;
        };
        translationOffsetMultiplier: number;
        axis: string;
    };
    right: {
        width: string;
        height: any;
        enabled: boolean;
        fixed: boolean;
        backgroundColor: string;
        canSwipeOpen: boolean;
        swipeOpenTriggerWidth: number;
        swipeOpenTriggerHeight: any;
        swipeOpenTriggerMinDrag: number;
        swipeCloseTriggerMinDrag: number;
        swipeOpenTriggerProperties: {};
        animation: {
            openDuration: number;
            closeDuration: number;
        };
        translationOffsetMultiplier: number;
        axis: string;
    };
    top: {
        width: any;
        height: string;
        enabled: boolean;
        fixed: boolean;
        backgroundColor: string;
        canSwipeOpen: boolean;
        swipeOpenTriggerWidth: any;
        swipeOpenTriggerHeight: number;
        swipeOpenTriggerMinDrag: number;
        swipeCloseTriggerMinDrag: number;
        swipeOpenTriggerProperties: {};
        animation: {
            openDuration: number;
            closeDuration: number;
        };
        translationOffsetMultiplier: number;
        axis: string;
    };
    bottom: {
        width: any;
        height: string;
        enabled: boolean;
        fixed: boolean;
        backgroundColor: string;
        canSwipeOpen: boolean;
        swipeOpenTriggerWidth: any;
        swipeOpenTriggerHeight: number;
        swipeOpenTriggerMinDrag: number;
        swipeCloseTriggerMinDrag: number;
        swipeOpenTriggerProperties: {};
        animation: {
            openDuration: number;
            closeDuration: number;
        };
        translationOffsetMultiplier: number;
        axis: string;
    };
};
declare type DeepPartial<T> = {
    [P in keyof T]?: DeepPartial<T[P]>;
};
export declare type OptionsType = DeepPartial<typeof defaultOptions>;
export interface MultiDrawerRefs {
    [key: string]: any;
    backDrop: NativeScriptVue<View>;
}
export declare function updateDefaultOptions(options: OptionsType): void;
export default class MultiDrawer extends Vue {
    $refs: MultiDrawerRefs;
    readonly state: boolean;
    readonly enabled: boolean;
    readonly options: OptionsType;
    stateChanged(side: any): Promise<void>;
    onOptionsChanged(options: any): void;
    optionsInternal: OptionsType;
    sides: {
        left: {
            open: boolean;
            invisible: boolean;
            translation: number;
            translationOffset: number;
        };
        right: {
            open: boolean;
            invisible: boolean;
            translation: number;
            translationOffset: number;
        };
        top: {
            open: boolean;
            invisible: boolean;
            translation: number;
            translationOffset: number;
        };
        bottom: {
            open: boolean;
            invisible: boolean;
            translation: number;
            translationOffset: number;
        };
    };
    backdropVisible: boolean;
    isAnimating: boolean;
    isPanning: boolean;
    layoutColumns: string;
    layoutRows: string;
    prevDeltaX: number;
    prevDeltaY: number;
    readonly computedSidesEnabled: string[];
    readonly computedDrawerStyle: (side: any) => {
        backgroundColor: any;
        visibility: string;
        height: any;
        width: any;
    } | {
        backgroundColor: any;
        visibility: string;
        width: any;
    } | {
        backgroundColor: any;
        visibility: string;
        height: any;
    } | {
        backgroundColor: any;
        visibility: string;
    } | {
        backgroundColor: any;
        visibility: string;
        height: any;
        width: any;
        transform: string;
    } | {
        backgroundColor: any;
        visibility: string;
        width: any;
        transform: string;
    } | {
        backgroundColor: any;
        visibility: string;
        height: any;
        transform: string;
    } | {
        backgroundColor: any;
        visibility: string;
        transform: string;
    };
    readonly computedSwipeOpenTriggerProperties: (side: any) => any;
    readonly computedShowSwipeOpenTrigger: (side: any) => boolean;
    readonly computedOpenSide: string | false;
    isSideOpened(side?: any): boolean;
    readonly computedLayout: {
        grid: {
            columns: string;
            rows: string;
        };
        main: {
            col: number;
        };
        left: {
            col: number;
        };
        right: {
            col: number;
        };
        top: {
            col: number;
        };
        bottom: {
            col: number;
        };
    };
    noop(): void;
    readonly backDrop: View;
    open(side?: any, animationFactor?: number): Promise<void>;
    close(side?: any, animationFactor?: number): Promise<void>;
    onDrawerLayoutChange(side: any): void;
    onBackDropPan(args: any): void;
    onOpenTriggerPan(side: any, args: any): void;
    onDrawerPan(side: any, args: any): void;
    constrainX(view: any, side: any, x: any): void;
    constrainY(view: any, side: any, y: any): void;
}
export {};

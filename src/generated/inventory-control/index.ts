// Generated from spec/inventory-control.json by scripts/generate.ts. Do not edit.
import type { components, operations } from "./types.js";
import { action, defineApplication, group, object, parameterizedObject, service, shape, singleton } from "../../core/define.js";
import type { RequestBody, ResponseResult } from "../../core/define.js";

export type { components, operations };

/** inventory-control/aisle */
export type Aisle = components["schemas"]["objects.inventory-control.aisle"];
export type AisleCreate = RequestBody<operations["create-inventory-control-aisle"]>;
export type AisleUpdate = RequestBody<operations["update-inventory-control-aisle-key"]>;
/** inventory-control/bin */
export type Bin = components["schemas"]["objects.inventory-control.bin"];
export type BinCreate = RequestBody<operations["create-inventory-control-bin"]>;
export type BinUpdate = RequestBody<operations["update-inventory-control-bin-key"]>;
/** inventory-control/bin-face */
export type BinFace = components["schemas"]["objects.inventory-control.bin-face"];
export type BinFaceCreate = RequestBody<operations["create-inventory-control-bin-face"]>;
export type BinFaceUpdate = RequestBody<operations["update-inventory-control-bin-face-key"]>;
/** inventory-control/bin-size */
export type BinSize = components["schemas"]["objects.inventory-control.bin-size"];
export type BinSizeCreate = RequestBody<operations["create-inventory-control-bin-size"]>;
export type BinSizeUpdate = RequestBody<operations["update-inventory-control-bin-size-key"]>;
/** inventory-control/cycle */
export type Cycle = components["schemas"]["objects.inventory-control.cycle"];
export type CycleCreate = RequestBody<operations["create-inventory-control-cycle"]>;
export type CycleUpdate = RequestBody<operations["update-inventory-control-cycle-key"]>;
/** inventory-control/cycle-count */
export type CycleCount = components["schemas"]["objects.inventory-control.cycle-count"];
export type CycleCountCreate = RequestBody<operations["create-inventory-control-cycle-count"]>;
export type CycleCountUpdate = RequestBody<operations["update-inventory-control-cycle-count-key"]>;
/** inventory-control/cycle-count-line */
export type CycleCountLine = components["schemas"]["objects.inventory-control.cycle-count-line"];
/** inventory-control/document */
export type Document = components["schemas"]["objects.inventory-control.document"];
/** inventory-control/document-history */
export type DocumentHistory = components["schemas"]["objects.inventory-control.document-history"];
/** inventory-control/document-line */
export type DocumentLine = components["schemas"]["objects.inventory-control.document-line"];
/** inventory-control/document-line-detail */
export type DocumentLineDetail = components["schemas"]["objects.inventory-control.document-line-detail"];
/** inventory-control/document-line-supplies-detail */
export type DocumentLineSuppliesDetail = components["schemas"]["objects.inventory-control.document-line-supplies-detail"];
/** inventory-control/document-line::{documentName} */
export type DocumentLineByDocumentName = components["schemas"]["objects.inventory-control.document-line"];
/** inventory-control/document-subtotal */
export type DocumentSubtotal = components["schemas"]["objects.inventory-control.document-subtotal"];
/** inventory-control/document::{documentName} */
export type DocumentByDocumentName = components["schemas"]["objects.inventory-control.document"];
export type DocumentByDocumentNameCreate = RequestBody<operations["create-inventory-control-document"]>;
export type DocumentByDocumentNameUpdate = RequestBody<operations["update-inventory-control-document-key"]>;
/** inventory-control/item */
export type Item = components["schemas"]["objects.inventory-control.item"];
export type ItemCreate = RequestBody<operations["create-inventory-control-item"]>;
export type ItemUpdate = RequestBody<operations["update-inventory-control-item-key"]>;
/** inventory-control/item-cross-reference */
export type ItemCrossReference = components["schemas"]["objects.inventory-control.item-cross-reference"];
export type ItemCrossReferenceCreate = RequestBody<operations["create-inventory-control-item-cross-reference"]>;
export type ItemCrossReferenceUpdate = RequestBody<operations["update-inventory-control-item-cross-reference-key"]>;
/** inventory-control/item-gl-group */
export type ItemGlGroup = components["schemas"]["objects.inventory-control.item-gl-group"];
export type ItemGlGroupCreate = RequestBody<operations["create-inventory-control-item-gl-group"]>;
export type ItemGlGroupUpdate = RequestBody<operations["update-inventory-control-item-gl-group-key"]>;
/** inventory-control/item-group */
export type ItemGroup = components["schemas"]["objects.inventory-control.item-group"];
export type ItemGroupCreate = RequestBody<operations["create-inventory-control-item-group"]>;
export type ItemGroupUpdate = RequestBody<operations["update-inventory-control-item-group-key"]>;
/** inventory-control/item-landed-cost */
export type ItemLandedCost = components["schemas"]["objects.inventory-control.item-landed-cost"];
/** inventory-control/item-vendor */
export type ItemVendor = components["schemas"]["objects.inventory-control.item-vendor"];
/** inventory-control/item-warehouse-available-inventory */
export type ItemWarehouseAvailableInventory = components["schemas"]["objects.inventory-control.item-warehouse-available-inventory"];
/** inventory-control/item-warehouse-inventory */
export type ItemWarehouseInventory = components["schemas"]["objects.inventory-control.item-warehouse-inventory"];
export type ItemWarehouseInventoryCreate = RequestBody<operations["create-inventory-control-item-warehouse-inventory"]>;
export type ItemWarehouseInventoryUpdate = RequestBody<operations["update-inventory-control-item-warehouse-inventory-key"]>;
/** inventory-control/item-warehouse-standard-cost */
export type ItemWarehouseStandardCost = components["schemas"]["objects.inventory-control.item-warehouse-standard-cost"];
export type ItemWarehouseStandardCostCreate = RequestBody<operations["create-inventory-control-item-warehouse-standard-cost"]>;
export type ItemWarehouseStandardCostUpdate = RequestBody<operations["update-inventory-control-item-warehouse-standard-cost-key"]>;
/** inventory-control/item-warehouse-vendor */
export type ItemWarehouseVendor = components["schemas"]["objects.inventory-control.item-warehouse-vendor"];
export type ItemWarehouseVendorCreate = RequestBody<operations["create-inventory-control-item-warehouse-vendor"]>;
export type ItemWarehouseVendorUpdate = RequestBody<operations["update-inventory-control-item-warehouse-vendor-key"]>;
/** inventory-control/kit-component */
export type KitComponent = components["schemas"]["objects.inventory-control.kit-component"];
export type KitComponentCreate = RequestBody<operations["create-inventory-control-kit-component"]>;
export type KitComponentUpdate = RequestBody<operations["update-inventory-control-kit-component-key"]>;
/** inventory-control/landed-cost-category */
export type LandedCostCategory = components["schemas"]["objects.inventory-control.landed-cost-category"];
export type LandedCostCategoryCreate = RequestBody<operations["create-inventory-control-landed-cost-category"]>;
export type LandedCostCategoryUpdate = RequestBody<operations["update-inventory-control-landed-cost-category-key"]>;
/** inventory-control/lot-category */
export type LotCategory = components["schemas"]["objects.inventory-control.lot-category"];
export type LotCategoryCreate = RequestBody<operations["create-inventory-control-lot-category"]>;
export type LotCategoryUpdate = RequestBody<operations["update-inventory-control-lot-category-key"]>;
/** inventory-control/posting-summary */
export type PostingSummary = components["schemas"]["objects.inventory-control.posting-summary"];
/** inventory-control/price-list */
export type PriceList = components["schemas"]["objects.inventory-control.price-list"];
export type PriceListCreate = RequestBody<operations["create-inventory-control-price-list"]>;
export type PriceListUpdate = RequestBody<operations["update-inventory-control-price-list-key"]>;
/** inventory-control/price-list-entry */
export type PriceListEntry = components["schemas"]["objects.inventory-control.price-list-entry"];
export type PriceListEntryCreate = RequestBody<operations["create-inventory-control-price-list-entry"]>;
export type PriceListEntryUpdate = RequestBody<operations["update-inventory-control-price-list-entry-key"]>;
/** inventory-control/product-line */
export type ProductLine = components["schemas"]["objects.inventory-control.product-line"];
export type ProductLineCreate = RequestBody<operations["create-inventory-control-product-line"]>;
export type ProductLineUpdate = RequestBody<operations["update-inventory-control-product-line-key"]>;
/** inventory-control/replenishment-forecast */
export type ReplenishmentForecast = components["schemas"]["objects.inventory-control.replenishment-forecast"];
export type ReplenishmentForecastCreate = RequestBody<operations["create-inventory-control-replenishment-forecast"]>;
export type ReplenishmentForecastUpdate = RequestBody<operations["update-inventory-control-replenishment-forecast-key"]>;
/** inventory-control/replenishment-forecast-line */
export type ReplenishmentForecastLine = components["schemas"]["objects.inventory-control.replenishment-forecast-line"];
/** inventory-control/replenishment-run */
export type ReplenishmentRun = components["schemas"]["objects.inventory-control.replenishment-run"];
/** inventory-control/replenishment-run-line */
export type ReplenishmentRunLine = components["schemas"]["objects.inventory-control.replenishment-run-line"];
/** inventory-control/row */
export type Row = components["schemas"]["objects.inventory-control.row"];
export type RowCreate = RequestBody<operations["create-inventory-control-row"]>;
export type RowUpdate = RequestBody<operations["update-inventory-control-row-key"]>;
/** inventory-control/serial-mask */
export type SerialMask = components["schemas"]["objects.inventory-control.serial-mask"];
export type SerialMaskCreate = RequestBody<operations["create-inventory-control-serial-mask"]>;
export type SerialMaskUpdate = RequestBody<operations["update-inventory-control-serial-mask-key"]>;
/** inventory-control/stockable-kit-document */
export type StockableKitDocument = components["schemas"]["objects.inventory-control.stockable-kit-document"];
export type StockableKitDocumentCreate = RequestBody<operations["create-inventory-control-stockable-kit-document"]>;
export type StockableKitDocumentUpdate = RequestBody<operations["update-inventory-control-stockable-kit-document-key"]>;
/** inventory-control/stockable-kit-document-line */
export type StockableKitDocumentLine = components["schemas"]["objects.inventory-control.stockable-kit-document-line"];
/** inventory-control/supplies-document */
export type SuppliesDocument = components["schemas"]["objects.inventory-control.supplies-document"];
/** inventory-control/supplies-document-detail */
export type SuppliesDocumentDetail = components["schemas"]["objects.inventory-control.supplies-document-detail"];
/** inventory-control/total */
export type Total = components["schemas"]["objects.inventory-control.total"];
export type TotalCreate = RequestBody<operations["create-inventory-control-total"]>;
export type TotalUpdate = RequestBody<operations["update-inventory-control-total-key"]>;
/** inventory-control/txn-definition */
export type TxnDefinition = components["schemas"]["objects.inventory-control.txn-definition"];
export type TxnDefinitionCreate = RequestBody<operations["create-inventory-control-txn-definition"]>;
export type TxnDefinitionUpdate = RequestBody<operations["update-inventory-control-txn-definition-key"]>;
/** inventory-control/txn-definition-cogs-gl-detail */
export type TxnDefinitionCogsGlDetail = components["schemas"]["objects.inventory-control.txn-definition-cogs-gl-detail"];
export type TxnDefinitionCogsGlDetailCreate = RequestBody<operations["create-inventory-control-txn-definition-cogs-gl-detail"]>;
export type TxnDefinitionCogsGlDetailUpdate = RequestBody<operations["update-inventory-control-txn-definition-cogs-gl-detail-key"]>;
/** inventory-control/txn-definition-entity-detail */
export type TxnDefinitionEntityDetail = components["schemas"]["objects.inventory-control.txn-definition-entity-detail"];
export type TxnDefinitionEntityDetailCreate = RequestBody<operations["create-inventory-control-txn-definition-entity-detail"]>;
export type TxnDefinitionEntityDetailUpdate = RequestBody<operations["update-inventory-control-txn-definition-entity-detail-key"]>;
/** inventory-control/txn-definition-source */
export type TxnDefinitionSource = components["schemas"]["objects.inventory-control.txn-definition-source"];
export type TxnDefinitionSourceCreate = RequestBody<operations["create-inventory-control-txn-definition-source"]>;
export type TxnDefinitionSourceUpdate = RequestBody<operations["update-inventory-control-txn-definition-source-key"]>;
/** inventory-control/txn-definition-subtotal-detail */
export type TxnDefinitionSubtotalDetail = components["schemas"]["objects.inventory-control.txn-definition-subtotal-detail"];
export type TxnDefinitionSubtotalDetailCreate = RequestBody<operations["create-inventory-control-txn-definition-subtotal-detail"]>;
export type TxnDefinitionSubtotalDetailUpdate = RequestBody<operations["update-inventory-control-txn-definition-subtotal-detail-key"]>;
/** inventory-control/txn-definition-total-detail */
export type TxnDefinitionTotalDetail = components["schemas"]["objects.inventory-control.txn-definition-total-detail"];
export type TxnDefinitionTotalDetailCreate = RequestBody<operations["create-inventory-control-txn-definition-total-detail"]>;
export type TxnDefinitionTotalDetailUpdate = RequestBody<operations["update-inventory-control-txn-definition-total-detail-key"]>;
/** inventory-control/unit-of-measure */
export type UnitOfMeasure = components["schemas"]["objects.inventory-control.unit-of-measure"];
export type UnitOfMeasureCreate = RequestBody<operations["create-inventory-control-unit-of-measure"]>;
export type UnitOfMeasureUpdate = RequestBody<operations["update-inventory-control-unit-of-measure-key"]>;
/** inventory-control/unit-of-measure-group */
export type UnitOfMeasureGroup = components["schemas"]["objects.inventory-control.unit-of-measure-group"];
export type UnitOfMeasureGroupCreate = RequestBody<operations["create-inventory-control-unit-of-measure-group"]>;
export type UnitOfMeasureGroupUpdate = RequestBody<operations["update-inventory-control-unit-of-measure-group-key"]>;
/** inventory-control/valuation-maintenance */
export type ValuationMaintenance = components["schemas"]["objects.inventory-control.valuation-maintenance"];
export type ValuationMaintenanceCreate = RequestBody<operations["create-inventory-control-valuation-maintenance"]>;
/** inventory-control/warehouse */
export type Warehouse = components["schemas"]["objects.inventory-control.warehouse"];
export type WarehouseCreate = RequestBody<operations["create-inventory-control-warehouse"]>;
export type WarehouseUpdate = RequestBody<operations["update-inventory-control-warehouse-key"]>;
/** inventory-control/warehouse-group */
export type WarehouseGroup = components["schemas"]["objects.inventory-control.warehouse-group"];
export type WarehouseGroupCreate = RequestBody<operations["create-inventory-control-warehouse-group"]>;
export type WarehouseGroupUpdate = RequestBody<operations["update-inventory-control-warehouse-group-key"]>;
/** inventory-control/warehouse-transfer */
export type WarehouseTransfer = components["schemas"]["objects.inventory-control.warehouse-transfer"];
export type WarehouseTransferCreate = RequestBody<operations["create-inventory-control-warehouse-transfer"]>;
export type WarehouseTransferUpdate = RequestBody<operations["update-inventory-control-warehouse-transfer-key"]>;
/** inventory-control/warehouse-transfer-line */
export type WarehouseTransferLine = components["schemas"]["objects.inventory-control.warehouse-transfer-line"];
/** inventory-control/zone */
export type Zone = components["schemas"]["objects.inventory-control.zone"];
export type ZoneCreate = RequestBody<operations["create-inventory-control-zone"]>;
export type ZoneUpdate = RequestBody<operations["update-inventory-control-zone-key"]>;
/** tax/item-tax-group-item-map */
export type ItemTaxGroupItemMap = components["schemas"]["objects.tax.item-tax-group-item-map"];

export const inventoryControl = defineApplication({
  aisle: object(shape<{ record: Aisle; create: AisleCreate; update: AisleUpdate }>(), "inventory-control/aisle", ["create","delete","get","update"]),
  bin: object(shape<{ record: Bin; create: BinCreate; update: BinUpdate }>(), "inventory-control/bin", ["create","delete","get","update"]),
  binFace: object(shape<{ record: BinFace; create: BinFaceCreate; update: BinFaceUpdate }>(), "inventory-control/bin-face", ["create","delete","get","update"]),
  binSize: object(shape<{ record: BinSize; create: BinSizeCreate; update: BinSizeUpdate }>(), "inventory-control/bin-size", ["create","delete","get","update"]),
  cycle: object(shape<{ record: Cycle; create: CycleCreate; update: CycleUpdate }>(), "inventory-control/cycle", ["create","delete","get","update"]),
  cycleCount: object(shape<{ record: CycleCount; create: CycleCountCreate; update: CycleCountUpdate }>(), "inventory-control/cycle-count", ["create","delete","get","update"]),
  cycleCountLine: object(shape<{ record: CycleCountLine }>(), "inventory-control/cycle-count-line", ["delete","get"]),
  document: object(shape<{ record: Document }>(), "inventory-control/document", ["get"]),
  documentHistory: object(shape<{ record: DocumentHistory }>(), "inventory-control/document-history", ["get"]),
  documentLine: object(shape<{ record: DocumentLine }>(), "inventory-control/document-line", ["get"]),
  documentLineDetail: object(shape<{ record: DocumentLineDetail }>(), "inventory-control/document-line-detail", ["get"]),
  documentLineSuppliesDetail: object(shape<{ record: DocumentLineSuppliesDetail }>(), "inventory-control/document-line-supplies-detail", ["get"]),
  documentLineByDocumentName: parameterizedObject(shape<{ record: DocumentLineByDocumentName }>(), "inventory-control/document-line::{documentName}", ["get"]),
  documentSubtotal: object(shape<{ record: DocumentSubtotal }>(), "inventory-control/document-subtotal", ["get"]),
  documentByDocumentName: parameterizedObject(shape<{ record: DocumentByDocumentName; create: DocumentByDocumentNameCreate; update: DocumentByDocumentNameUpdate }>(), "inventory-control/document::{documentName}", ["create","delete","get","update"]),
  item: object(shape<{ record: Item; create: ItemCreate; update: ItemUpdate }>(), "inventory-control/item", ["create","delete","get","update"]),
  itemCrossReference: object(shape<{ record: ItemCrossReference; create: ItemCrossReferenceCreate; update: ItemCrossReferenceUpdate }>(), "inventory-control/item-cross-reference", ["create","delete","get","update"]),
  itemGlGroup: object(shape<{ record: ItemGlGroup; create: ItemGlGroupCreate; update: ItemGlGroupUpdate }>(), "inventory-control/item-gl-group", ["create","delete","get","update"]),
  itemGroup: object(shape<{ record: ItemGroup; create: ItemGroupCreate; update: ItemGroupUpdate }>(), "inventory-control/item-group", ["create","delete","get","update"]),
  itemLandedCost: object(shape<{ record: ItemLandedCost }>(), "inventory-control/item-landed-cost", ["get"]),
  itemVendor: object(shape<{ record: ItemVendor }>(), "inventory-control/item-vendor", ["get"]),
  itemWarehouseAvailableInventory: object(shape<{ record: ItemWarehouseAvailableInventory }>(), "inventory-control/item-warehouse-available-inventory", ["get"]),
  itemWarehouseInventory: object(shape<{ record: ItemWarehouseInventory; create: ItemWarehouseInventoryCreate; update: ItemWarehouseInventoryUpdate }>(), "inventory-control/item-warehouse-inventory", ["create","delete","get","update"]),
  itemWarehouseStandardCost: object(shape<{ record: ItemWarehouseStandardCost; create: ItemWarehouseStandardCostCreate; update: ItemWarehouseStandardCostUpdate }>(), "inventory-control/item-warehouse-standard-cost", ["create","delete","get","update"]),
  itemWarehouseVendor: object(shape<{ record: ItemWarehouseVendor; create: ItemWarehouseVendorCreate; update: ItemWarehouseVendorUpdate }>(), "inventory-control/item-warehouse-vendor", ["create","delete","get","update"]),
  kitComponent: object(shape<{ record: KitComponent; create: KitComponentCreate; update: KitComponentUpdate }>(), "inventory-control/kit-component", ["create","delete","get","update"]),
  landedCostCategory: object(shape<{ record: LandedCostCategory; create: LandedCostCategoryCreate; update: LandedCostCategoryUpdate }>(), "inventory-control/landed-cost-category", ["create","delete","get","update"]),
  lotCategory: object(shape<{ record: LotCategory; create: LotCategoryCreate; update: LotCategoryUpdate }>(), "inventory-control/lot-category", ["create","delete","get","update"]),
  postingSummary: object(shape<{ record: PostingSummary }>(), "inventory-control/posting-summary", ["get"]),
  priceList: object(shape<{ record: PriceList; create: PriceListCreate; update: PriceListUpdate }>(), "inventory-control/price-list", ["create","delete","get","update"]),
  priceListEntry: object(shape<{ record: PriceListEntry; create: PriceListEntryCreate; update: PriceListEntryUpdate }>(), "inventory-control/price-list-entry", ["create","delete","get","update"]),
  productLine: object(shape<{ record: ProductLine; create: ProductLineCreate; update: ProductLineUpdate }>(), "inventory-control/product-line", ["create","delete","get","update"]),
  replenishmentForecast: object(shape<{ record: ReplenishmentForecast; create: ReplenishmentForecastCreate; update: ReplenishmentForecastUpdate }>(), "inventory-control/replenishment-forecast", ["create","delete","get","update"]),
  replenishmentForecastLine: object(shape<{ record: ReplenishmentForecastLine }>(), "inventory-control/replenishment-forecast-line", ["delete","get"]),
  replenishmentRun: object(shape<{ record: ReplenishmentRun }>(), "inventory-control/replenishment-run", ["get"]),
  replenishmentRunLine: object(shape<{ record: ReplenishmentRunLine }>(), "inventory-control/replenishment-run-line", ["get"]),
  row: object(shape<{ record: Row; create: RowCreate; update: RowUpdate }>(), "inventory-control/row", ["create","delete","get","update"]),
  serialMask: object(shape<{ record: SerialMask; create: SerialMaskCreate; update: SerialMaskUpdate }>(), "inventory-control/serial-mask", ["create","delete","get","update"]),
  stockableKitDocument: object(shape<{ record: StockableKitDocument; create: StockableKitDocumentCreate; update: StockableKitDocumentUpdate }>(), "inventory-control/stockable-kit-document", ["create","delete","get","update"]),
  stockableKitDocumentLine: object(shape<{ record: StockableKitDocumentLine }>(), "inventory-control/stockable-kit-document-line", ["get"]),
  suppliesDocument: object(shape<{ record: SuppliesDocument }>(), "inventory-control/supplies-document", ["get"]),
  suppliesDocumentDetail: object(shape<{ record: SuppliesDocumentDetail }>(), "inventory-control/supplies-document-detail", ["get"]),
  total: object(shape<{ record: Total; create: TotalCreate; update: TotalUpdate }>(), "inventory-control/total", ["create","delete","get","update"]),
  txnDefinition: object(shape<{ record: TxnDefinition; create: TxnDefinitionCreate; update: TxnDefinitionUpdate }>(), "inventory-control/txn-definition", ["create","delete","get","update"]),
  txnDefinitionCogsGlDetail: object(shape<{ record: TxnDefinitionCogsGlDetail; create: TxnDefinitionCogsGlDetailCreate; update: TxnDefinitionCogsGlDetailUpdate }>(), "inventory-control/txn-definition-cogs-gl-detail", ["create","delete","get","update"]),
  txnDefinitionEntityDetail: object(shape<{ record: TxnDefinitionEntityDetail; create: TxnDefinitionEntityDetailCreate; update: TxnDefinitionEntityDetailUpdate }>(), "inventory-control/txn-definition-entity-detail", ["create","delete","get","update"]),
  txnDefinitionSource: object(shape<{ record: TxnDefinitionSource; create: TxnDefinitionSourceCreate; update: TxnDefinitionSourceUpdate }>(), "inventory-control/txn-definition-source", ["create","delete","get","update"]),
  txnDefinitionSubtotalDetail: object(shape<{ record: TxnDefinitionSubtotalDetail; create: TxnDefinitionSubtotalDetailCreate; update: TxnDefinitionSubtotalDetailUpdate }>(), "inventory-control/txn-definition-subtotal-detail", ["create","delete","get","update"]),
  txnDefinitionTotalDetail: object(shape<{ record: TxnDefinitionTotalDetail; create: TxnDefinitionTotalDetailCreate; update: TxnDefinitionTotalDetailUpdate }>(), "inventory-control/txn-definition-total-detail", ["create","delete","get","update"]),
  unitOfMeasure: object(shape<{ record: UnitOfMeasure; create: UnitOfMeasureCreate; update: UnitOfMeasureUpdate }>(), "inventory-control/unit-of-measure", ["create","delete","get","update"]),
  unitOfMeasureGroup: object(shape<{ record: UnitOfMeasureGroup; create: UnitOfMeasureGroupCreate; update: UnitOfMeasureGroupUpdate }>(), "inventory-control/unit-of-measure-group", ["create","delete","get","update"]),
  valuationMaintenance: object(shape<{ record: ValuationMaintenance; create: ValuationMaintenanceCreate }>(), "inventory-control/valuation-maintenance", ["create","delete","get"]),
  warehouse: object(shape<{ record: Warehouse; create: WarehouseCreate; update: WarehouseUpdate }>(), "inventory-control/warehouse", ["create","delete","get","update"]),
  warehouseGroup: object(shape<{ record: WarehouseGroup; create: WarehouseGroupCreate; update: WarehouseGroupUpdate }>(), "inventory-control/warehouse-group", ["create","delete","get","update"]),
  warehouseTransfer: object(shape<{ record: WarehouseTransfer; create: WarehouseTransferCreate; update: WarehouseTransferUpdate }>(), "inventory-control/warehouse-transfer", ["create","delete","get","update"]),
  warehouseTransferLine: object(shape<{ record: WarehouseTransferLine }>(), "inventory-control/warehouse-transfer-line", ["get"]),
  zone: object(shape<{ record: Zone; create: ZoneCreate; update: ZoneUpdate }>(), "inventory-control/zone", ["create","delete","get","update"]),
  itemTaxGroupItemMap: object(shape<{ record: ItemTaxGroupItemMap }>(), "tax/item-tax-group-item-map", ["get"]),
  services: group({
    reports: group({
      inventoryControl: group({
        inventoryValuation: service<RequestBody<operations["inventory-control-inventory-valuation"]>, ResponseResult<operations["inventory-control-inventory-valuation"]>>("services/reports/inventory-control/inventory-valuation", "POST"),
        itemActivity: service<RequestBody<operations["inventory-control-item-activity"]>, ResponseResult<operations["inventory-control-item-activity"]>>("services/reports/inventory-control/item-activity", "POST"),
      }),
    }),
  }),
});

export default inventoryControl;

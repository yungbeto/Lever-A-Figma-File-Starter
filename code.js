var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
figma.showUI(__html__, { width: 560, height: 208 });
figma.ui.onmessage = (msg) => __awaiter(this, void 0, void 0, function* () {
    if (msg.type === "create-cover") {
        // Create pages
        let linePage = figma.createPage();
        let workInProgressPage = figma.createPage();
        let archivePage = figma.createPage();
        let coverPage = figma.createPage();
        //Create Cover Page
        let coverFrame = figma.createFrame();
        coverFrame.name = 'Cover Thumbnail';
        coverPage.appendChild(coverFrame);
        coverFrame.resize(1240, 640);
        coverFrame.fills = [{ type: "SOLID", color: { r: 255 / 255, g: 255 / 255, b: 255 / 255 } }];
        // Set page names and renames the default "Page 1"
        figma.currentPage.name = "✅ - Dev Ready [DO NOT EDIT]";
        linePage.name = "__________________________";
        workInProgressPage.name = "🚧 - Work In Progress";
        archivePage.name = "🗑 - Archive";
        coverPage.name = "🖼 - Cover";
        //Create cover title
        let coverTitle = figma.createText();
        coverFrame.appendChild(coverTitle);
        // Set covert title style
        let loadCoverTitle = () => __awaiter(this, void 0, void 0, function* () {
            yield figma.loadFontAsync({ family: "Work Sans", style: "Bold" });
            coverTitle.fontName = { family: "Work Sans", style: "Bold" };
            coverTitle.characters = msg.message;
            coverTitle.fills = [{ type: 'SOLID', color: { r: 60 / 255, g: 60 / 255, b: 60 / 255 } }];
            coverTitle.x = 104;
            coverTitle.y = 0;
            coverTitle.fontSize = 80;
            coverTitle.resize(1048, 560);
            coverTitle.textAlignHorizontal = 'LEFT';
            coverTitle.textAlignVertical = 'BOTTOM';
            coverTitle.textAutoResize = "HEIGHT";
        });
        let run = () => __awaiter(this, void 0, void 0, function* () {
            yield loadCoverTitle();
            figma.notify("🎉 Your template has been created! Now make something beautiful ✨");
            figma.closePlugin();
        });
        run();
    }
});

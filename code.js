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
//color variables 
const color = {
    black: [{ type: "SOLID", color: { r: 60 / 255, g: 60 / 255, b: 60 / 255 } }],
    orange: [{ type: "SOLID", color: { r: 255 / 255, g: 138 / 255, b: 0 / 255 } }],
    white: [{ type: "SOLID", color: { r: 255 / 255, g: 255 / 255, b: 255 / 255 } }],
    grey: [{ type: "SOLID", color: { r: 108 / 255, g: 108 / 255, b: 108 / 255 } }]
};
figma.ui.onmessage = (msg) => __awaiter(this, void 0, void 0, function* () {
    if (msg.type === "create-cover") {
        // Create pages
        let linePage = figma.createPage();
        let devReady = figma.createPage();
        let linePage2 = figma.createPage();
        let workInProgressPage = figma.createPage();
        let archivePage = figma.createPage();
        //Create Cover Page
        let coverFrame = figma.createFrame();
        coverFrame.name = 'Cover Thumbnail';
        figma.currentPage.appendChild(coverFrame);
        figma.currentPage.backgrounds = [{ type: "SOLID", color: { r: 60 / 255, g: 60 / 255, b: 60 / 255 } }];
        coverFrame.resize(960, 480);
        coverFrame.fills = [{ type: "SOLID", color: { r: 60 / 255, g: 60 / 255, b: 60 / 255 } }];
        // Set page names and renames the default "Page 1"
        figma.currentPage.name = "Cover";
        linePage.name = "-------------";
        devReady.name = "✅ - Dev Ready [DO NOT EDIT]";
        linePage2.name = "-------------";
        workInProgressPage.name = "🚧 - Work In Progress";
        archivePage.name = "🗑 - Archive";
        //Create cover thumb placeholder
        let coverThumb = figma.createRectangle();
        coverThumb.x = 534;
        coverThumb.y = 0;
        coverThumb.resize(400, 480);
        coverThumb.fills = [{ type: "SOLID", color: { r: 242 / 255, g: 242 / 255, b: 242 / 255 } }];
        coverFrame.appendChild(coverThumb);
        //Add thumb placeholder text
        let thumbText = figma.createText();
        coverFrame.appendChild(thumbText);
        //Create cover title
        let coverTitle = figma.createText();
        coverFrame.appendChild(coverTitle);
        //Create status chip
        let statusChip = figma.createFrame();
        let statusText = figma.createText();
        statusChip.layoutMode = 'HORIZONTAL';
        statusChip.counterAxisSizingMode = 'AUTO';
        statusChip.verticalPadding = 16;
        statusChip.horizontalPadding = 16;
        statusChip.fills = [{ type: "SOLID", color: { r: 255 / 255, g: 138 / 255, b: 0 / 255 } }];
        statusChip.x = 0;
        statusChip.y = 32;
        statusChip.appendChild(statusText);
        coverFrame.appendChild(statusChip);
        // Set cover title style
        let loadCoverTitle = () => __awaiter(this, void 0, void 0, function* () {
            yield figma.loadFontAsync({ family: "Work Sans", style: "Bold" });
            coverTitle.fontName = { family: "Work Sans", style: "Bold" };
            coverTitle.characters = msg.message;
            coverTitle.fills = [{ type: 'SOLID', color: { r: 255 / 255, g: 255 / 255, b: 255 / 255 } }];
            coverTitle.x = 0;
            coverTitle.y = 120;
            coverTitle.fontSize = 72;
            coverTitle.resize(600, 400);
            coverTitle.textAlignHorizontal = 'LEFT';
            coverTitle.textAlignVertical = 'TOP';
            coverTitle.textAutoResize = "HEIGHT";
            coverTitle.strokeWeight = 8;
            coverTitle.strokes = [{ type: "SOLID", color: { r: 60 / 255, g: 60 / 255, b: 60 / 255 } }];
        });
        // Set chip text style 
        let loadStatusText = () => __awaiter(this, void 0, void 0, function* () {
            yield figma.loadFontAsync({ family: "Work Sans", style: "Bold" });
            statusText.fontName = { family: "Work Sans", style: "Bold" };
            statusText.fontSize = 24;
            statusText.lineHeight = { value: 32, unit: 'PIXELS' };
            statusText.letterSpacing = { value: 1, unit: 'PIXELS' };
            statusText.characters = 'IN PROGRESS';
            statusText.fills = [{ type: 'SOLID', color: { r: 255 / 255, g: 255 / 255, b: 255 / 255 } }];
        });
        // Set thumb placeholder text style 
        let loadThumbText = () => __awaiter(this, void 0, void 0, function* () {
            yield figma.loadFontAsync({ family: "Gibson", style: "Medium" });
            thumbText.fontName = { family: "Gibson", style: "Medium" };
            thumbText.fontSize = 16;
            thumbText.lineHeight = { value: 24, unit: 'PIXELS' };
            thumbText.characters = 'To increase discoverability we recommend at some point you add a screenshot or relevent image here.\n\n------\n\nTIP:\nIf you don\'t have an image ready try using the Unsplash plugin to replace this square with something eye catching!';
            thumbText.fills = [{ type: "SOLID", color: { r: 60 / 255, g: 60 / 255, b: 60 / 255 } }];
            thumbText.resize(240, 292);
            thumbText.x = 568;
            thumbText.y = 24;
        });
        let run = () => __awaiter(this, void 0, void 0, function* () {
            yield loadCoverTitle();
            yield loadStatusText();
            yield loadThumbText();
            figma.notify("🎉 Template created! Now make something beautiful ✨");
            figma.closePlugin();
        });
        run();
    }
});

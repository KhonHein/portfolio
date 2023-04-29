//profile image mouse hover
$(`.profilePP`).hover(removingClassName('profilePP', 'rounded-circle'));
$(`.profilePP`).mouseleave(addingClassName('profilePP', 'rounded-circle'));

//contact btn click
$(`.btnContactMe`).click(() => {
    let cls = 'form-control border-danger rounded-5 mx-auto text-black fw-bold d-flex justify-content-around';
    if ($(`.btnContactMe`).hasClass('clicked')) {
        $(`.contaceMeDiv`).hover(removingClassName('profilePP', `${cls}`));
        $(`.btnContactMe`).removeClass('clicked');
    } else {
        $(`.contaceMeDiv`).hover(addingClassName('profilePP', `${cls}`));
        $(`.btnContactMe`).addClass('clicked');
    }
})

//home hover
$(`.underlineFun`).hover(hoverUnderline('underlineFun', 'text-danger', 'text-primary'));
$(`.underlineFun`).mouseleave(mouseleaveUnderline('underlineFun', 'text-danger', 'text-primary'));

//about hover
$(`.underlineAbout`).hover(hoverUnderline('underlineAbout', 'text-danger', 'text-primary'));
$(`.underlineAbout`).mouseleave(mouseleaveUnderline('underlineAbout', 'text-danger', 'text-primary'));

//hover contact
$(`.underlineContact`).hover(hoverUnderline('underlineContact', 'text-danger', 'text-primary'));
$(`.underlineContact`).mouseleave(mouseleaveUnderline('underlineContact', 'text-danger', 'text-primary'));

//project nouse hover animate
$(`.toHoverFun1`).hover(addingClassName('prj1', 'hoverOver'));
$(`.toHoverFun1`).mouseleave(removingClassName('prj1', 'hoverOver'));

$(`.toHoverFun2`).hover(addingClassName('prj2', 'hoverOver'));
$(`.toHoverFun2`).mouseleave(removingClassName('prj2', 'hoverOver'));

$(`.toHoverFun3`).hover(addingClassName('prj3', 'hoverOver'));
$(`.toHoverFun3`).mouseleave(removingClassName('prj3', 'hoverOver'));

$(`.toHoverFun4`).hover(addingClassName('prj4', 'hoverOver'));
$(`.toHoverFun4`).mouseleave(removingClassName('prj4', 'hoverOver'));

//mouse hover 
function hoverUnderline(paraName, paraClass1, paraClass2) {
    return () => {
        $(`.${paraName}`).removeClass(paraClass1);
        $(`.${paraName}`).addClass(paraClass2);
        $(`.${paraName}`).css('text-decoration', 'underline');
    }
}
//mouse leave 
function mouseleaveUnderline(paraName, paraClass1, paraClass2) {
    return () => {
        $(`.${paraName}`).addClass(paraClass1);
        $(`.${paraName}`).removeClass(paraClass2);
        $(`.${paraName}`).css('text-decoration', 'none');
    }
}

//mouse hover add animate
function addingClassName(paraName, paraClass) {
    return () => $(`.${paraName}`).addClass(paraClass);
}
//mouse leave remove animate
function removingClassName(paraName, paraClass) {
    return () => $(`.${paraName}`).removeClass(paraClass);
}
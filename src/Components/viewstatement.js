import React from 'react';

const ViewStatement = () => {
    return(
        <div class="dash-item-overlay d-none d-md-block" dir="ltr">
            <h5>Today's Earning: $2,562.30</h5>
            <p class="text-muted font-13 mb-3 mt-2">Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.
                Etiam rhoncus...</p>
            <a href="javascript: void(0);" class="btn btn-outline-primary">View Statements
                <i class="mdi mdi-arrow-right ms-2"></i>
            </a>
        </div>
    );
}

export default ViewStatement;
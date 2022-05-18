export const calendarConfig = {
    crudManager: {
        autoLoad: true,
        transport: {
            load: {
                url: 'data/data.json'
            }
        }
    },
    modes: {
        agenda: null,
        month: null,
        year: null,
        day: {
            dayStartTime: 4,
            dayEndTime: 21,
            visibleStartTime: 12,
            hideNonWorkingDays: true
        },
        week: {
            dayStartTime: 4,
            dayEndTime: 21,
            visibleStartTime: 12,
            hideNonWorkingDays: true
        }
    },
    weekStartDay: 1,
    sidebar: {
        items: {
            showEvents: {
                weight: 10,
                type: 'panel',
                title: 'Panel header',
                html: `Bacon ipsum dolor amet flank ribeye ham hock rump, 
        alcatra pork belly pancetta leberkas bacon shoulder 
        meatloaf ball tip pig.`,
                bbar: [{
                    text: 'Panel Button',
                    onClick: () => alert('Proceeding!')
                }],
            }
        }
    },
};
